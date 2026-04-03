document.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const overlay = document.querySelector('.overlay');

    open.addEventListener('click', () => {
        overlay.setAttribute('aria-hidden', 'false');
    });

    close.addEventListener('click', () => {
        overlay.setAttribute('aria-hidden', 'true');
    });

    overlay.addEventListener('click', (e) => {
        if (event.target === overlay) {
            overlay.setAttribute('aria-hidden', 'true');
        }
    });
});