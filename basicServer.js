//node_modules에 있는 express 관련 파일을 가져와 사용해서 서버 생성
const express = require('express');

//서버 생성
// express는 함수이므로, 반환값을 변수에 저장한다
const app = express();

//request 이벤트 리스너 설정
//request와 response을 받았을때 생성하도록함
app.use((request, response) => {
    response.send('<h1>Hello express</h1>')
})

// 내가적은 (3000 or 52273) 포트로 서버를 오픈함
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});

/* 
    터미널에 node basicServer.js 를 입력하면
    basicServer.js 파일 내부의 app.listen(포트번호, 콜백) 메서드가 실행되는 걸 볼수 있다
*/ 