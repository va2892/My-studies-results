const suggestions = [
    "Балаково", "Барнаул", "Белгород", "Бийск", "Братск",
    "Владивосток", "Владикавказ", "Владимир", "Волгоград", "Волжский", "Воронеж",
    "Дзержинск",
    "Екатеринбург",
    "Железногорск",
    "Ижевск", "Иркутск",
    "Казань", "Калининград", "Кемерово", "Киров", "Краснодар", "Красноярск", "Курган", "Курск",
    "Липецк",
    "Москва",
    "Мурманск",
    "Набережные Челны", "Нижний Новгород", "Новокузнецк", "Новосибирск",
    "Омск", "Оренбург",
    "Пенза", "Пермь",
    "Ростов-на-Дону", "Рязань",
    "Самара", "Санкт-Петербург", "Саратов", "Смоленск", "Сочи", "Ставрополь",
    "Тольятти", "Томск", "Тула", "Тюмень", "Тагил",
    "Ульяновск", "Уфа", "Улан-Удэ", 
    "Хабаровск",
    "Челябинск"
];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    const ul = document.querySelector('ul');
    const container = document.querySelector('div');
    let active = -1;

    function clearList() {
        ul.innerHTML = '';
        container.setAttribute('aria-expanded', 'false')
        active = -1;
    }

     function renderList(cities) {
        clearList();
        if (!cities.length) return;
    
        cities.forEach(city => {
            let li = document.createElement('li');
            li.textContent = city;
            li.addEventListener('click', () => {
                input.value = city;
                clearList();
            });

            ul.appendChild(li);
        });
    
        container.setAttribute('aria-expanded', 'true');
    }

    function updateActiveItem() {
        let lis = ul.querySelectorAll('li');
        lis.forEach(li => li.classList.remove('active'));
        lis[active - 1].classList.add('active');
    }

    input.addEventListener('input', () => {
        let value = input.value.trim().toLowerCase();
        active = -1;
    
        if (!value) {
            clearList();
            return;
        }
    
        let cities = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(value));
        cities.forEach(city => console.log(city));
        renderList(cities);
    });

    input.addEventListener('keydown', (e) => {
        let lis = document.querySelectorAll('li');
        if (!lis.length) return;
    
        if (e.key == 'ArrowDown') {
            e.preventDefault();
            if (active == -1) active = 0;
            if (active + 1 > lis.length) active = 1;
            else active += 1;
            console.log(active);
            updateActiveItem();   
        }
    
        if (e.key == 'ArrowUp' && active != -1) {
            e.preventDefault();
            if (active - 1 < 1) active = lis.length;
            else active -= 1;
            console.log(active);
            updateActiveItem();
        }
    
        if (e.key == 'Enter' && active != -1) {
            e.preventDefault();
            input.value = lis[active - 1].textContent;
            clearList();
        }
    });
});