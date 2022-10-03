export function aside() {
    document.querySelector('.aside-btn-open').addEventListener('click', openAsideBar);
    document.querySelector('.button-close-aside').addEventListener('click', openAsideBar);
    const asideBar = document.querySelector('.aside-content');
    const overlay = document.querySelector('.overlay');

    function openAsideBar() {
        asideBar.classList.toggle('is-open');
        asideBar.classList.contains('is-open') ? overlay.style.display = 'block' : overlay.style.display = 'none';
    }
}