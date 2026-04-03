document.addEventListener('DOMContentLoaded', () => {
    let value = 0;

    const amount = document.querySelector('.amount');
    const reset = document.querySelector('.reset');
    const form = document.querySelector('.form');
    const input = document.querySelector('.set-amount');

    const btn_minus_3 = document.querySelector('[data-test-id="btn-minus-3"]');
    const btn_minus_2 = document.querySelector('[data-test-id="btn-minus-2"]');
    const btn_minus_1 = document.querySelector('[data-test-id="btn-minus-1"]');
    const btn_plus_3 = document.querySelector('[data-test-id="btn-plus-3"]');
    const btn_plus_2 = document.querySelector('[data-test-id="btn-plus-2"]');
    const btn_plus_1 = document.querySelector('[data-test-id="btn-plus-1"]');

    function updateView() {
        amount.textContent = value;
        if (value > 0) amount.style.color = '#35D499';
        else if (value < 0) amount.style.color = '#FA7085'; 
        else amount.style.color = '#EBEBEB';
    }

    function changeValue(a) {
        value = value + a;
        updateView();
    }

    function resetValue() {
    	value = 0;
    	updateView();
    }
    
    function setValue() {
        let data = Number(input.value.trim());
        if (Number.isInteger(data) && -1e9 <= data && data <= 1e9 ) {
        	value = data;
        	updateView();
        	input.value = '';
        }
    }

    btn_minus_3.addEventListener('click', () => changeValue(-3));
    btn_minus_2.addEventListener('click', () => changeValue(-2));
    btn_minus_1.addEventListener('click', () => changeValue(-1));
    btn_plus_3.addEventListener('click', () => changeValue(3));
    btn_plus_2.addEventListener('click', () => changeValue(2));
    btn_plus_1.addEventListener('click', () => changeValue(1));

    reset.addEventListener('click', () => resetValue());

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        setValue();
    });

    updateView();
});