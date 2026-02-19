document.addEventListener('DOMContentLoaded', () => {
    const currency = document.getElementById('currency');
    const btn = currency.querySelector('.currency__btn');

    btn.addEventListener('click', () => {
        currency.classList.toggle('is-open');

        const isOpen = currency.classList.contains('is-open');
        btn.setAttribute('aria-expanded', isOpen);
    });

    // ปิดเมื่อคลิกข้างนอก
    document.addEventListener('click', (e) => {
        if (!currency.contains(e.target)) {
            currency.classList.remove('is-open');
            btn.setAttribute('aria-expanded', false);
        }
    });
});