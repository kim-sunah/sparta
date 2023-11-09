async function main() {
    const jwt = require("jsonwebtoken");

    const token = jwt.sign({ myPayloadData: 1234 }, //jwt를 이용해서 payload 설정하는 부분
        "mysecretkey",   //jwt를 이용해서 암호화를 하기 위한 비밀키
        { expiresIn: "1s" });
    console.log(token);
    setTimeout(() => {
        const decode = jwt.decode(token);
        const verify = jwt.verify(token, "mysecretkey");
        console.log(verify);
    }, 1500)
}
main()

// console.log(token);


// const decodedValue = jwt.decode(token); //jwt의 payload를 확인하기 위해 사용
// console.log(decodedValue);

// const verifyTokey = jwt.verify(token, "mysecretkey2"); //jwt를 검증하기위해 사용
// console.log(verifyTokey);