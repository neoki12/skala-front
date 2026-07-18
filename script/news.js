// news.js
async function loadLatestNews() {
    const apiKey = '746f31a235034c00925a588c16eb77a2'; 
    const url = `https://newsapi.org/v2/everything?q=IT&language=ko&sortBy=publishedAt&apiKey=${apiKey}`;
    const newsContainer = document.querySelector('#news-box');

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) throw new Error("API 키가 입력되지 않았거나 유효하지 않습니다.");
            throw new Error(`서버 통신 에러 (상태 코드: ${response.status})`);
        }

        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            newsContainer.innerHTML = "<p>현재 불러올 수 있는 최신 기사가 없습니다.</p>";
            return;
        }

        newsContainer.innerHTML = "";

        const topArticles = data.articles.slice(0, 3);

        topArticles.forEach(article => {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <h4>${article.title}</h4>
                    <p>${article.description || '내용 요약이 제공되지 않는 기사입니다.'}</p>
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                        기사 전문 읽기 ➔
                    </a>
                </div>
            `;
        });

    } catch (error) {
        console.error("뉴스 불러오기 실패:", error);
        newsContainer.innerHTML = `
            <div class="news-error">
                ⚠️ 뉴스를 불러오지 못했습니다.<br>
                <small>(${error.message})</small>
            </div>
        `;
    }
}

loadLatestNews();