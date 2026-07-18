const quoteText = document.querySelector('#quote-text');
const quoteBtn = document.querySelector('#quote-btn');

async function fetchRandomQuote() {
    quoteText.innerHTML = "명언을 불러오는 중... ⏳";
    quoteBtn.disabled = true;
    quoteBtn.style.opacity = "0.6";

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (!response.ok) {
            throw new Error("서버 상태가 불안정합니다.");
        }

        const data = await response.json();

        quoteText.innerHTML = `"${data.slip.advice}"`;

    } catch (error) {
        console.error("명언 API 에러:", error);
        quoteText.innerHTML = "⚠️ 명언을 가져오지 못했습니다. 다시 시도해 주세요.";
    } finally {
        quoteBtn.disabled = false;
        quoteBtn.style.opacity = "1";
    }
}

quoteBtn.addEventListener('click', fetchRandomQuote);