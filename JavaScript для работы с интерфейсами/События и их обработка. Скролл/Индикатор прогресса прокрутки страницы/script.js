document.addEventListener('DOMContentLoaded', () => {
    const scroll = document.querySelector('.scroll');

    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        scroll.style.width = (window.scrollY / height) * 100 + '%';
    });
});