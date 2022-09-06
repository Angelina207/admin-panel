export function aside() {
    const btnOpenAside = document.querySelector('.aside-btn-open').addEventListener('click', openAsideBar);
    const btncloseAside = document.querySelector('.button-close-aside').addEventListener('click', openAsideBar);
    const asideBar = document.querySelector('.aside-content');

    function openAsideBar() {
        asideBar.classList.toggle('is-open');
    }
}