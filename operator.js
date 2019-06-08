let scores = [24,32,17]; // 점수의 배열 
let arrayLength = scores.length; // 배열 내의 아이템의 개수 
let roundNumber = 0; // 현재 응시 회차 
var msg = ""; // 메시지
var i; //카운터 

// 배열의 아이템 개수만큼 루프를 실행한다.
for(var i = 0; i < arrayLength; i++){
    // 배열의 인덱스는 0 부터 시작한다. 
    roundNumber = (i + 1);

    // 현재 회차를 메시지에 추가한다. 

    msg += "응시회차" + roundNumber + " : ";

    // 점수 배열에서 점수를 얻어온다.
    msg += scores[i] + "<br/>";
}

document.getElementById("checkPassContenteck").innerHTML = msg ;