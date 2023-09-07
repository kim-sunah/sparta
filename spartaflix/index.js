
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtDmm6iJf4PIZtpJXfRRd8W-XKjuHxhgA",
    authDomain: "sparta-1e178.firebaseapp.com",
    projectId: "sparta-1e178",
    storageBucket: "sparta-1e178.appspot.com",
    messagingSenderId: "916403747858",
    appId: "1:916403747858:web:0b8f305adc6a5709612ccb",
    measurementId: "G-L8YQRNY77F"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


$("#postingbtn").click(async function () {
    // let doc = {'name': 'bob','age': 30};
    let image = $('#image').val();
    let title = $('#title').val();
    let star = $('#star').val();
    let comment = $('#comment').val();

    let doc = {
        'image': image,
        'title': title,
        'star': star,
        'comment': comment
    }
    console.log(doc);
    await addDoc(collection(db, "movies"), doc);
    alert('저장 완료!');
    window.location.reload();
})


$("#memory_save").click(async function () {
    $('#postingBox').toggle();
})

let url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
fetch(url).then(res => res.json()).then(data => {
    let temp = data['temp']
    if (temp > 20) {
        $('#do').text("더워요");
    } else {
        $('#do').text("추워요");
    }
    // $('#do').text(temp);
})



let docs = await getDocs(collection(db, "movies"));
docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
    let image = row['image'];
    let title = row['title'];
    let comment = row['comment'];
    let star = row['star'];
    
    let temp_html = `
    <div class="col">
    <div class="card h-100">
        <img src="${image}" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${star}</p>
            <p class="card-text">${comment}</p>
        </div>
    </div>
</div>`;
    $('#card').append(temp_html);

});

