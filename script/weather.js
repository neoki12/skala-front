function handleCityChange() {
    const citySelect = document.getElementById('city-select');
    const selectedValue = citySelect.value;

    if (selectedValue === 'add-new') {
        const newCity = prompt("추가할 도시 이름을 영어로 입력하세요 (예: Seoul):");
        if (newCity && newCity.trim() !== "") {
            const option = document.createElement('option');
            option.value = newCity;
            option.text = newCity;
            
            citySelect.insertBefore(option, citySelect.lastElementChild);
            
            citySelect.value = newCity;
            getWeather(newCity);
        } else {
            citySelect.value = "Seoul"; 
        }
    } else {
        getWeather(selectedValue);
    }
}

async function getWeather(cityName) {
    const API_KEY = "3b353b4be71f77da798ea1eefffb16d9"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=kr`;

    try {
        const response = await fetch(url);

        if (response.status === 401) {
            alert("API 키가 아직 활성화되지 않았습니다. 1~2시간 정도 기다린 후 다시 시도해 주세요.");
            return;
        }
        
        if (response.status === 404) {
            alert("도시를 찾을 수 없습니다. 영문 이름을 다시 확인해 주세요.");
            return;
        }

        const data = await response.json();

        if (data.cod === 200) {
            alert(
                `📍 ${data.name} 날씨 정보\n` +
                `---------------------------\n` +
                `• 상태: ${data.weather[0].description}\n` +
                `• 기온: ${data.main.temp.toFixed(1)}℃\n` +
                `• 습도: ${data.main.humidity}%`
            );
        }
    } catch (error) {
        console.error("날씨 정보 조회 실패:", error);
        alert("날씨 정보를 불러오는 중 오류가 발생했습니다.");
    }
}