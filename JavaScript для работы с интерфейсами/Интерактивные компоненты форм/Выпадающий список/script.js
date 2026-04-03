document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.select');
    const options = document.querySelectorAll('.option');
    const placeholder = document.querySelector('span');
    
    select.addEventListener('click', () => {
        if (select.getAttribute('aria-expanded') == 'true') select.setAttribute('aria-expanded', 'false');
        else select.setAttribute('aria-expanded', 'true');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            placeholder.textContent = option.textContent;
            options.forEach(option => option.classList.remove('active'));
            option.classList.add('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) select.setAttribute('aria-expanded', 'false')
    });
});