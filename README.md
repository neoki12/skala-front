# 🛠️ 현수의 작업실 (Studio)

**현수의 작업실**은 SKALA 과정에서 진행하는 웹 프론트엔드 프로젝트와 실험들을 기록하는 개인 포트폴리오 공간입니다. 순수 HTML, CSS, JavaScript(Vanilla JS)를 활용하여 웹 페이지의 구조를 설계하고, 동적인 인터랙션과 레이아웃을 구현하는 방법을 학습하고 적용했습니다

---

## 📌 주요 페이지 및 핵심 문법

### 1. 🏠 메인 허브 (`index.html`) - 시맨틱 마크업과 Flexbox 레이아웃
웹 페이지의 전체적인 뼈대를 잡고, 콘텐츠를 논리적인 영역으로 나누어 배치했습니다

* **HTML 시맨틱 태그 (Semantic Tags)** :문서의 구조를 브라우저와 개발자가 명확하게 이해할 수 있도록 의미 있는 태그를 사용했습니다.
  ```html
  <header class="hub-header">...</header> <!-- 머리말, 제목 영역 -->
  <nav class="nav-section">...</nav>      <!-- 네비게이션(메뉴) 링크 영역 -->
  <main>...</main>                        <!-- 문서의 주요 콘텐츠 영역 -->
  <aside>...</aside>                      <!-- 사이드바, 부수적인 정보(미니게임 등) 영역 -->
  <section>...</section>                  <!-- 독립적인 콘텐츠 구역 -->
  ```

* **CSS Flexbox를 이용한 레이아웃 분할**
  : 메인 콘텐츠와 우측 사이드바를 유연하게 나누기 위해 `display: flex`와 `flex` 속성을 활용했습니다.
  ```css
  .content-wrapper {
      display: flex; /* Flexbox 컨테이너 선언 */
      gap: 30px;     /* 자식 요소 간의 여백 30px 설정 */
  }
  main {
      flex: 7; /* 전체 너비 중 7의 비율 차지 */
  }
  .sidebar-wrapper {
      flex: 3; /* 전체 너비 중 3의 비율 차지 */
      display: flex; 
      flex-direction: column; /* 사이드바 내부 요소들은 세로(위에서 아래)로 정렬 */
  }
  ```

### 2. 👤 나의 프로필 (`myProfile.html`) - 인터랙티브 UI와 목록 태그
: JS 없이 HTML 태그만으로 열고 닫히는 UI를 만들고, 다양한 리스트 태그를 적용했습니다

* **아코디언 토글 UI (`<details>`, `<summary>`)**
  클릭 시 내용을 펼치고 접을 수 있는 네이티브 HTML 문법입니다.
  ```html
  <details>
      <summary>자세히 보기</summary> <!-- 화면에 항상 노출되는 클릭 영역 -->
      <ol type="1">                <!-- 클릭 시 나타나는 숨겨진 내용 -->
          <li>쇼유라멘 (소바하우스 멘야준)</li>
      </ol>
  </details>
  ```

* **설명 목록 (`<dl>`, `<dt>`, `<dd>`)**
 : 용어와 그에 대한 정의를 쌍으로 묶어서 표현할 때 사용하는 문법입니다.
  ```html
  <dl>
      <dt>🔥 Challenger</dt> <!-- 용어 (Term) -->
      <dd>맨땅에 헤딩하는 것을 두려워하지 않는...</dd> <!-- 설명 (Description) -->
  </dl>
  ```

### 3. 📅 나의 수업 (`myClass.html`) - 2차원 테이블(표) 설계
일주일 간의 시간표를 만들기 위해 테이블 태그의 병합 속성을 적극 활용했습니다.

* **테이블 셀 병합 (`rowspan`, `colspan`)**
  ```html
  <!-- 세로 병합: 3개의 행(시간대)을 하나로 합침 -->
  <td rowspan="3" class="sun">늦잠 및 휴식 😴</td>
  
  <!-- 가로 병합: 점심시간을 위해 7개의 열(요일)을 하나로 합침 -->
  <td colspan="7">🍱 점 심 시 간 🍱</td>
  ```

* **테이블 스타일링 (CSS)**
  ```css
  .schedule-table {
      border-collapse: collapse; /* 테이블 셀 사이의 이중 테두리를 하나로 상쇄 */
  }
  .schedule-table tbody tr:hover {
      background-color: #fcfcfc; /* 표의 행에 마우스를 올렸을 때 배경색 변경 (가독성 향상) */
  }
  ```

### 4. 🏖️ 나의 휴일 (`myHoliday.html`) - 상태 선택자 기반 애니메이션
체크박스 클릭 상태에 따라 인접한 텍스트의 디자인이 바뀌는 '체크리스트'를 구현했습니다.

* **형제 선택자와 가상 클래스 (`:checked + label`)**
 : JavaScript를 사용하지 않고 CSS만으로 체크박스 상태를 UI에 반영하는 핵심 기법입니다.
  ```css
  /* input 타입이 checkbox인 요소가 체크(checked)되었을 때, 
     그 바로 뒤에 오는(+) label 요소에 스타일을 적용 */
  .schedule-list input[type="checkbox"]:checked + label {
      text-decoration: line-through; /* 글자 중간에 취소선 긋기 */
      text-decoration-thickness: 5px; /* 취소선 두께 */
      color: #a0aec0; /* 텍스트 색상을 흐리게 변경 */
      opacity: 0.7; /* 투명도 적용 */
      transition: all 0.2s ease; /* 0.2초 동안 부드럽게 상태 변화 애니메이션 */
  }
  ```

* **텍스트 강조 (`<mark>`)**
  ```html
  <!-- 중요한 일과에 형광펜 칠한 듯한 시각적 효과 부여 -->
  <mark>HTML, CSS 및 Javascript 복습</mark>
  ```

### 5. ✈️ 나의 여행 일기 (`myTrip.html`) - CSS Grid와 미디어
다양한 미디어를 삽입하고, 화면 크기에 맞춰 카드가 자동 배열되는 그리드 갤러리를 만들었습니다.

* **반응형 CSS Grid Layout**
: 사진 카드들이 영역에 맞춰 바둑판처럼 자동 정렬되도록 구성했습니다.
  ```css
  .trip-grid-container {
      display: grid;
      /* 열(Column) 설정: 카드의 최소 너비를 280px로 보장하되, 
         공간이 남으면(1fr) 유연하게 늘어나고 줄어들며 꽉 채움 (자동 줄바꿈 발생) */
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px; /* 카드와 카드 사이의 간격 */
  }
  ```

* **멀티미디어 태그 (`<audio>`, `<video>`)**
  ```html
  <!-- 배경음악 삽입: 컨트롤러 표시(controls), 자동 재생(autoplay) -->
  <audio controls autoplay>
      <source src="../media/Summer mp3.mp3" type="audio/mpeg">
  </audio>
  
  <!-- 영상 삽입 -->
  <video width="400" height="600" controls>
      <source src="../media/기온마츠리.mp4" type="video/mp4">
  </video>
  ```

### 6. 📝 회원가입 (`signUp.html`) - 폼 유효성 검사
클라이언트(브라우저) 단에서 입력 데이터의 형식을 검사하는 HTML5 문법을 적용했습니다.

* **정규식(RegEx) 및 속성을 활용한 제약 조건**
  ```html
  <!-- 아이디: 최소 4자 ~ 최대 15자 제한, 필수 입력 -->
  <input type="text" name="userId" minlength="4" maxlength="15" required>
  
  <!-- 비밀번호: 정규식(pattern) 적용 
       (?=.*[A-Z]): 대문자 최소 1개 포함
       (?=.*[a-z]): 소문자 최소 1개 포함
       (?=.*\d): 숫자 최소 1개 포함
       .{8,}: 총 길이는 8자 이상 -->
  <input type="password" name="userPw" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}" required>
  
  <!-- 전화번호: 000-0000-0000 형식 강제 -->
  <input type="tel" name="userPhone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required>
  ```

---

## ⚙️ JavaScript 핵심 기능 및 문법 (API & 동적 제어)

### 1. 🧱 벽돌 깨기 게임 (`brick.js`
HTML5 `<canvas>` API를 활용하여 객체를 그리고 움직이는 2D 게임 루프를 구현했습니다.

* **Canvas 렌더링 및 애니메이션 루프**
  `requestAnimationFrame`을 사용하여 브라우저 주사율에 맞춰 부드럽게 화면을 반복해서 다시 그립니다.
  ```javascript
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d"); // 2D 렌더링 컨텍스트 가져오기

  function draw() {
      if (isGameOver) return; // 게임 종료 시 루프 중단
      
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기
      drawBricks(); // 벽돌 그리기
      drawBall();   // 공 그리기
      drawPaddle(); // 패들 그리기
      
      requestAnimationFrame(draw); // 다음 프레임 호출 (무한 루프)
  }
  ```

### 2. 🌍 비동기 API 통신: 날씨, 명언, 뉴스 (`weather.js`, `명언.js`, `news.js`)
외부 서버(OpenWeatherMap, Advice Slip, NewsAPI)에서 실시간 데이터를 받아와 화면에 렌더링합니다.

* **`async / await` 및 `fetch` API**
  비동기 통신을 동기적인 코드 흐름처럼 직관적으로 작성하고, `try...catch`로 에러를 제어합니다.
  ```javascript
  async function fetchRandomQuote() {
      try {
          // API 서버에 요청을 보내고 응답을 기다림
          const response = await fetch('[https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)');
          
          if (!response.ok) throw new Error("서버 상태가 불안정합니다.");
          
          // JSON 데이터를 자바스크립트 객체로 변환
          const data = await response.json(); 
          
          // DOM 업데이트
          quoteText.innerHTML = `"${data.slip.advice}"`; 
      } catch (error) {
          console.error("에러 발생:", error);
      } finally {
          // 성공, 실패 여부와 상관없이 마지막에 항상 실행
          quoteBtn.disabled = false; 
      }
  }
  ```

* **템플릿 리터럴과 배열 순회 (`news.js`)**
  받아온 배열 데이터를 `slice`로 자르고 `forEach`로 순회하며 동적으로 HTML 요소를 생성합니다.
  ```javascript
  const topArticles = data.articles.slice(0, 3); // 상위 3개 기사만 추출

  topArticles.forEach(article => {
      // 백틱(`)을 사용해 HTML 태그와 변수(${...})를 직관적으로 결합
      newsContainer.innerHTML += `
          <div class="news-card">
              <h4>${article.title}</h4>
              <p>${article.description}</p>
          </div>
      `;
  });
  ```

### 3. ⭕ 틱택토 ❌ (`TicTacToe.js`)
사용자의 클릭 이벤트를 감지하고 게임의 승패 로직(알고리즘)을 판단합니다.

* **이벤트 위임과 배열 상태 관리**
  배열과 다차원 배열을 활용해 게임판의 상태와 승리 조건을 정의했습니다.
  ```javascript
  // 1차원 배열로 9칸의 상태 관리
  let board = ['', '', '', '', '', '', '', '', '']; 
  
  // 승리 가능한 모든 인덱스 조합 (가로, 세로, 대각선)
  const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]          
  ];

  // 각 셀에 클릭 이벤트 리스너 부착
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  ```

### 4. ⏰ 실시간 디지털 시계 (`time.js`)
자바스크립트의 내장 `Date` 객체와 타이머 함수를 활용했습니다.

* **`setInterval`과 문자열 패딩 (`padStart`)**
  1초마다 시계를 업데이트하고, 숫자가 1자리일 경우 앞에 '0'을 채워 시각적인 안정감을 줍니다.
  ```javascript
  function updateClock() {
      const now = new Date(); // 현재 시간 객체 생성
      
      // padStart(2, '0'): 문자열 길이를 2로 맞추고 빈 공간은 '0'으로 채움 (예: 9 -> 09)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      document.getElementById('live-clock').innerText = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000); // 1000ms(1초)마다 updateClock 함수 반복 실행
  ```

### 5. 📊 성적 분포 분석기 (`grade.js`)
브라우저 내장 대화상자를 이용해 데이터를 입력받고 통계 연산을 수행합니다.

* **내장 대화상자 및 형변환**
  ```javascript
  // prompt로 입력받은 값은 문자열이므로 Number()로 형변환
  var totalPeople = Number(prompt("전체 인원수를 입력하세요.")); 
  
  // 확인/취소 버튼이 있는 대화상자 (boolean 반환)
  var doMore = confirm("등수 확인을 진행하시겠습니까?"); 
  ```
* **내장 `Math` 객체 활용**
  `Math.round()`(반올림), `Math.max()`, `Math.min()`(최댓값/최솟값 보정) 등을 사용해 통계 수치를 계산했습니다.

  
### 6. 🎒 내 가방 보기 (`bag.js`)
복합 데이터(배열과 객체)를 다루고 반복문을 통해 데이터를 처리하는 로직입니다.

* **배열(Array) 내부의 객체(Object) 선언**
  ```javascript
  var myBag = [
      { name: "노트북 💻", count: 1 },
      { name: "필통 ✏️", count: 1 }
  ];
  ```

* **`for...in` 루프 및 문자열 결합**
  배열의 인덱스를 순회하며 객체의 속성값(`name`, `count`)을 추출하여 문자열을 누적합니다.
  ```javascript
  var resultText = "🎒 [내 가방 속 물품 목록]\n";
  
  // myBag 배열의 인덱스(0, 1...)가 차례대로 i에 할당됨
  for (var i in myBag) {
      // myBag[i]로 각 객체에 접근하여 문자열로 병합(+)
      resultText = resultText + "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
  }
  
  alert(resultText); // 완성된 문자열을 알림창으로 브라우저에 출력
  ```
