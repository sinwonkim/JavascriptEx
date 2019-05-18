let getScore = 80;  // 획득 점수 
let msg = ''; // 메시지

let  addMsg = function() {
 msg += '합격을 축하 합니다.';
};

if( getScore >= 70){ // 내가 획득한 점수가 높은게 맞으면 조건식이 true 면 addMsg() 함수를 실행해서 합격 축하 메시지를 msg에 더하기 연산을 해줘라
    addMsg();
}

let el = document.getElementById("checkPassContenteck");
el.innerHTML = msg;

