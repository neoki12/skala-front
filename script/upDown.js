/**
 * [업다운 게임]
 * HTML의 <select id="difficulty">에서 난이도를 읽어와
 * prompt와 alert로 진행하는 대화형 게임입니다.
 */
function playGame() {
    // 1. HTML의 select 태그에서 현재 난이도(maxNum)를 가져옵니다.
    const diffSelect = document.getElementById('difficulty');
    const maxNum = Number(diffSelect.value);
    
    // 2. 비밀 숫자 생성 및 카운트 초기화
    let secretNum = Math.floor(Math.random() * maxNum) + 1;
    let count = 0;
    
    alert(`게임 시작! 1~${maxNum} 사이의 숫자를 맞춰보세요.`);
    console.log("치트키: 정답은 " + secretNum); // 개발자 도구 콘솔에서 정답 확인 가능

    // 3. 게임 로직 (맞출 때까지 반복)
    let isCorrect = false;
    while (!isCorrect) {
        let input = prompt(`${maxNum} 이하의 숫자를 입력하세요.`);

        // 취소 버튼을 누른 경우 게임 종료
        if (input === null) {
            alert("게임을 중단합니다.");
            return;
        }

        let guess = Number(input);
        count++;

        if (isNaN(guess) || guess < 1 || guess > maxNum) {
            alert(`⚠️ 올바른 숫자를 입력하세요! (1~${maxNum})`);
        } else if (guess === secretNum) {
            alert(`🎉 정답입니다! ${count}회 만에 성공하셨습니다.`);
            isCorrect = true; // 반복문 탈출
        } else if (guess > secretNum) {
            alert(`🔽 Down! (현재 ${count}회 시도 중)`);
        } else {
            alert(`🔼 Up! (현재 ${count}회 시도 중)`);
        }
    }

    // 4. 게임 종료 후 재시작 여부 확인
    if (confirm("다시 도전하시겠습니까?")) {
        playGame(); // 함수를 재귀 호출하여 게임 재시작
    } else {
        alert("게임을 마칩니다.");
    }
}