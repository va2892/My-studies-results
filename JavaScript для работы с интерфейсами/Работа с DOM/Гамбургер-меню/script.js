document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const nav = document.querySelector('nav');

    button.addEventListener('click', () => {
        let state = nav.getAttribute('aria-expanded');
        if (state == 'true') nav.setAttribute('aria-expanded', 'false');
        else nav.setAttribute('aria-expanded', 'true');
    });
});