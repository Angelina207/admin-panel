export function filter() {
    const arrowBtn = document.querySelector('.arrow').addEventListener('click', openFilter);
    const filter = document.querySelector('.filter-content');
    const overlay = document.querySelector('.overlay');

    function openFilter() {
        filter.classList.toggle('is-open');
        filter.classList.contains('is-open') ? overlay.style.opacity = '0.4' : overlay.style.opacity = '0';

    }
}