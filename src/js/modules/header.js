export function header() {
    const nav = document.querySelector('.header__nav');
    document.querySelector('.btn__burger').addEventListener('click', isOpenNav);
    document.querySelector('.nav__btn-close').addEventListener('click', isCloseNav);
    
    function isOpenNav() {
        nav.classList.add('is-open-nav');
    }
    function isCloseNav() {
        if ( nav.classList.contains('is-open-nav'))
            nav.classList.remove('is-open-nav');
    }
}
