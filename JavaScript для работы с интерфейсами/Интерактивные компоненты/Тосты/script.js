document.addEventListener('DOMContentLoaded', () => {
    const success = document.querySelector('.success');
    const error = document.querySelector('.error');
    const tosts = document.querySelector('.tosts-container');

    success.addEventListener('click', () => {
        let tost = document.createElement('div');
        tost.className = 'tost success';

        tost.innerHTML = `
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 25.6666C20.4433 25.6666 25.6666 20.4433 25.6666 14C25.6666 7.55666 20.4433 2.33331 14 2.33331C7.55666 2.33331 2.33331 7.55666 2.33331 14C2.33331 20.4433 7.55666 25.6666 14 25.6666Z" fill="#3ECF8E"/>
                <path d="M19.8333 11.0833L14 18.0833L10.5 14.5833" stroke="white" stroke-width="2.68333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="message-container">
                <h2>Success!</h2>
                <p>Your account has been created successfully.</p>
            </div>
            <button class="toast__close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" fill="#E5E7EB"/>
                    <path d="M12.5 7.5L7.5 12.5M7.5 7.5L12.5 12.5" stroke="#59677A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;

        const close = tost.querySelector('.toast__close');
        close.addEventListener('click', () => tost.remove());
        tosts.appendChild(tost);
        setTimeout(() => {
            tost.remove();
        }, 3000);
    });

    error.addEventListener('click', () => {
        let tost = document.createElement('div');
        tost.className = 'tost error';

        tost.innerHTML = `
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 25.6667C20.4433 25.6667 25.6666 20.4433 25.6666 14C25.6666 7.55667 20.4433 2.33333 14 2.33333C7.55666 2.33333 2.33331 7.55667 2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667Z" fill="#FF4D59"/>
                <path d="M17.5 10.5L10.5 17.5M10.5 10.5L17.5 17.5" stroke="white" stroke-width="2.56667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="message-container">
                <h2>Success!</h2>
                <p>Your account has been created successfully.</p>
            </div>
            <button class="toast__close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" fill="#E5E7EB"/>
                    <path d="M12.5 7.5L7.5 12.5M7.5 7.5L12.5 12.5" stroke="#59677A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;

        const close = tost.querySelector('.toast__close');
        close.addEventListener('click', () => tost.remove());
        tosts.appendChild(tost);
        setTimeout(() => {
            tost.remove();
        }, 3000);
    });
});