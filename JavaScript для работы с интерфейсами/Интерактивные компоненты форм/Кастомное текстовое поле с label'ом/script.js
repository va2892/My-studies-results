document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');

    input.addEventListener('click', () => {
        input.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if (input.value.trim() != '') {
            input.classList.add('active');
        }
        else if (!input.contains(e.target)) {
            input.classList.remove('active');
        }
    });
});