/**
 * [성적 계산기]
 * 1. 과목별 점수를 입력받아 총점과 평균을 계산합니다.
 * 2. 더보기를 선택하면 전체 인원 대비 등수를 계산합니다.
 */
function checkGrade() {
    // 1. 과목명 배열
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    // 2. 반복문을 통해 점수 입력 받기
    for (var i = 0; i < subjects.length; i++) {
        var score = Number(prompt(subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)"));

        // 숫자가 아니거나 취소 버튼을 누른 경우 처리
        if (isNaN(score) || score < 0 || score > 100) {
            alert("올바른 점수가 입력되지 않아 계산을 취소합니다.");
            return;
        }
        total += score;
    }

    // 3. 평균 계산
    var average = total / subjects.length;
    var result = (average >= 60) ? "🎉 합격입니다! 우수자로 선정되었습니다." : "❌ 불합격입니다. 다음 기회에 힘내세요!";

    // 4. 결과 출력 및 분석 여부 확인
    var doMore = confirm(
        "====== 📊 성적 결과표 ======\n" +
        "• 총점: " + total + "점\n" +
        "• 평균: " + average.toFixed(1) + "점\n" +
        "---------------------------\n" +
        "• 결과: " + result + "\n\n" +
        "더 자세한 분포 분석(등수 확인)을 진행하시겠습니까?"
    );

    if (doMore) {
        analyzeDistribution(average);
    } else {
        alert("성적 계산을 종료합니다.");
    }
}

/**
 * [성적 분포 분석기]
 * 전체 통계 자료를 바탕으로 내 등수를 계산합니다.
 */
function analyzeDistribution(myAverage) {
    var totalPeople = Number(prompt("전체 인원수를 입력하세요."));
    var totalAverage = Number(prompt("전체 평균을 입력하세요."));
    var stdDeviation = Number(prompt("표준 편차를 입력하세요."));

    if (isNaN(totalPeople) || isNaN(totalAverage) || isNaN(stdDeviation)) {
        alert("입력값이 올바르지 않습니다.");
        return;
    }

    // 등수 계산 로직: Z-점수를 이용한 상위 퍼센트 추정
    // Z = (내 점수 - 평균) / 표준편차
    var zScore = (myAverage - totalAverage) / stdDeviation;
    
    // 누적 분포 함수를 이용한 근사 계산
    var percentile = (1 - (0.5 * (1 + Math.erf(zScore / Math.sqrt(2))))) * 100;
    var rank = Math.round((percentile / 100) * totalPeople);

    // 등수가 1등보다 높게 나오거나 인원수를 넘지 않도록 보정
    rank = Math.max(1, Math.min(rank, totalPeople));

    alert("📊 분석 결과\n당신은 전체 " + totalPeople + "명 중 상위 " + percentile.toFixed(1) + "%로, 약 " + rank + "등 수준입니다.");
}

// 등수 계산을 위한 표준 정규분포 근사 함수
Math.erf = function(x) {
    var a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    var a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    var sign = (x < 0) ? -1 : 1;
    x = Math.abs(x);
    var t = 1.0 / (1.0 + p * x);
    var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
};