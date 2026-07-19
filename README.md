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
  메인 콘텐츠와 우측 사이드바를 유연하게 나누기 위해 `display: flex`와 `flex` 속성을 활용했습니다.
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
JS 없이 HTML 태그만으로 열고 닫히는 UI를 만들고, 다양한 리스트 태그를 적용했습니다

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
  용어와 그에 대한 정의를 쌍으로 묶어서 표현할 때 사용하는 문법입니다.
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
  JavaScript를 사용하지 않고 CSS만으로 체크박스 상태를 UI에 반영하는 핵심 기법입니다.
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
  사진 카드들이 영역에 맞춰 바둑판처럼 자동 정렬되도록 구성했습니다.
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

### 6. 📝 회원가입 (`signUp.html`) - 폼(Form) 유효성 검사
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

## 🎮 JavaScript (Vanilla JS) 주요 문법

### 🎒 내 가방 보기 (`bag.js`)
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
