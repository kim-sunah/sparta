import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import fs from 'fs';
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import axios from 'axios';
import iconv from 'iconv-lite';
const __dirname = path.resolve();

const app = express();

//file path
// const filePath = path.join(__dirname, 'data', 'writing.json')

// body parser set
app.use(bodyParser.urlencoded({ extended: false })); // express 기본 모듈 사용
app.use(bodyParser.json());

// view engine set
app.set('view engine', 'html'); // main.html -> main(.html)

// nunjucks
nunjucks.configure('views', {
    watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
    express: app
})

//mongoose connect
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => console.log('DB연결 성공'))
    .catch(e => console.error(e));

//mongoose set
const { Schema } = mongoose;

const CommentSchema = new Schema({
    comment: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const MemberSchema = new Schema({
    id: Number,
    name: String,
    role: String,
    imgSrc: String,
    mbti: String,
    introduction: String,
    collaborationStyle: String,
    strengths: String,
    blog: String
})

const Comment = mongoose.model('comment', CommentSchema);
const Members = mongoose.model('members', MemberSchema);

app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.render('introduction');
})
app.get('/choice', async (req, res) => {
    res.render('choice');
})
app.get('/write', (req, res) => {
    res.render('write');
});
app.get('/main', async (req, res) => {
    res.render('main');
})
app.get('/team-info', async (req, res) => {
    let comments = await Comment.find({}).sort({ "_id": -1 })
    res.render('team-info', { list: comments });
})
app.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const edit = await Writing.findOne({ _id: id }).then((result) => {
        res.render('detail', { 'edit': result })
    }).catch((err) => {
        console.error(err)
    })
})
app.get('/member-info', async (req, res) => {
    let members = await Members.find({});
    res.render('member-info', { list: members });
});

app.get('/member/:id', async (req, res) => {
    const memberId = req.params.id;
    const memberInfo = await Members.findOne({ id: memberId }); // 해당 ID의 멤버 정보를 가져오도록 수정
    if (!memberInfo) {
        return res.status(404).send('Member not found');
    }

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    const url = memberInfo.blog;
    await page.goto(url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const latestPosts = [];
    if (memberId == 1) {
        $(".list").find('li').each((index, element) => {
            if (index) {
                const href = memberInfo.blog + $(element).find('a').attr('href');
                const title = $(element).find('a').text().trim();
                const date = $(element).find('.date').text().trim();
                latestPosts.push({ title, date, href });
            }
        });
        // 결과 출력
        latestPosts.forEach((post, index) => {
            console.log(` 제목: ${post.title}, 날짜: ${post.date}, 주소 :${post.href}`);
        });

    } else if (memberId == 2) {
        $('.list_horizontal').find('li').each((index, element) => {
            if (index) {
                const href = memberInfo.blog + $(element).find('a').attr('href');
                const title = $(element).find('.title_post').text().trim();
                const date = $(element).find('.date').text().trim();
                latestPosts.push({ title, date, href });
            }
        });
        // 결과 출력
        latestPosts.forEach((post, index) => {
            console.log(` 제목: ${post.title}, 날짜: ${post.date}`);
        });
    } else if (memberId == 3) {
        $('.list_article').find('li').each((index, element) => {
            console.log(index);
            if (index) {
                const href = memberInfo.blog + $(element).find('a').attr('href');
                const title = $(element).find('.txt_thumb').text().trim();
                const date = $(element).find('.date').text().trim();
                latestPosts.push({ title, date, href });
            }
        });
        // 결과 출력

    } else if (memberId == 4) {
        $('.area-common').find('article').each((index, element) => {
            if (index) {
                const href = memberInfo.blog + $(element).find('a').attr('href');
                const title = $(element).find('.title').text().trim();
                const date = $(element).find('.date').text().trim();
                latestPosts.push({ title, date, href });
            }
        });
        // 결과 출력

    } else if (memberId == 5) {
        $('.area-common').find('article').each((index, element) => {
            if (index) {
                const href = memberInfo.blog + $(element).find('a').attr('href');
                const title = $(element).find('.title').text().trim();
                const date = $(element).find('.date').text().trim();
                latestPosts.push({ title, date, href });
            }
        });
        // 결과 출력

    }
    let postListHtml = '<ul>';
    latestPosts.forEach((post) => {
        postListHtml += `<li><a href="${post.href}">${post.title}</a><span>${post.date}</span></li>`;
    });
    postListHtml += '</ul>';
    res.render('member.html', { membersInfo: memberInfo, postListHtml });

    await browser.close();
});

app.post('/team-info', async (req, res) => {
    const comment = req.body.comment;
    const addComment = new Comment({
        comment: comment
    });
    try {
        // 댓글 추가
        await addComment.save();
        // 댓글 목록 다시 가져오기
        const comments = await Comment.find({}).sort({ "_id": -1 });

        // 댓글 목록을 포함하여 템플릿 렌더링
        res.render('team-info', { list: comments });
    } catch (err) {
        console.error(err);
        res.status(500).send('댓글 추가 중 오류 발생');
    }
});
app.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    console.log(
        id
    )
    try {
        // 해당 _id를 가진 댓글 삭제
        await Comment.deleteOne({ _id: id });
        console.log('댓글 삭제 성공');
        // 댓글 삭제 후 팀 정보 페이지로 리다이렉트 또는 다시 렌더링
        res.redirect('/team-info');
    } catch (err) {
        console.error(err);
        res.status(500).send('댓글 삭제 중 오류 발생');
    }
});

app.post('/write', async (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;

    //mongodb저장
    const writing = new Writing({
        title: title,
        contents: contents
    })

    const result = await writing.save().then(() => {
        console.log(writing)
        console.log('write Success')
        res.render('detail', { 'detail': { title: title, contents: contents } });
    }).catch((err) => {
        console.error(err)
        res.render('write')
    });
});



app.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const contents = req.body.contents;

    const edit = await Writing.replaceOne({ _id: id }, { title: title, contents: contents }).then((result) => {
        console.log('update success')
        res.render('detail', { 'detail': { 'id': id, 'title': title, 'contents': contents } });
    }).catch((err) => {
        console.error(err)
    })
})



app.listen(3000, () => {
    console.log('Server is running');
});

