document.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const popover = document.getElementById('popover')

    open.addEventListener('click', () => {
        if (open.getAttribute('aria-expanded') == 'true') open.setAttribute('aria-expanded', 'false');
        else open.setAttribute('aria-expanded', 'true');
    });

    close.addEventListener('click', () => {
        open.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', (e) => {
        if (!popover.contains(e.target) && !open.contains(e.target)) {
            open.setAttribute('aria-expanded', 'false');
        }
    });
});