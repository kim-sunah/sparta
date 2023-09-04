// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


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
    let content = $('#content').val();
    let date = $('#date').val();

    let doc = {
        'image': image,
        'title': title,
        'content':content,
        'date':date
    }

    await addDoc(collection(db, "albums"), doc);
})

function openClose() {
    $('#postingBox').toggle();
}
function makeCard() {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    let temp_html = `
    <div class="col">
        <div class="card h-100">
            <img src="${image}""
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">${date}</small>
            </div>
        </div>
    </div>`;
    $('#card').append(temp_html);

}

let url = "http://spartacodingclub.shop/sparta_api/seoulair";
fetch(url).then(res => res.json()).then(data => {
    let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
    console.log(mise)
    $('#msg').text(mise);
})