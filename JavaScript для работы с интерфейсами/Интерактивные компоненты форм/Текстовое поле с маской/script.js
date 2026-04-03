document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');

    input.addEventListener('input', () => {
        let digits = input.value.replace(/\D/g, '').slice(0, 10);
        let formatted = '';

        if (digits.length > 0) formatted += ('(' + digits.substring(0, 3));
        if (digits.length > 3) formatted += (') ' + digits.substring(3, 6));
        if (digits.length > 6) formatted += ('-' + digits.substring(6, 8));
        if (digits.length > 8) formatted += ('-' + digits.substring(8, 10));

        input.value = formatted;
    });
});