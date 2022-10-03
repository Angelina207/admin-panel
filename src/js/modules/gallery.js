export function gallery() {
    const gallery = document.querySelector('.gallery-wrapp');
    const galleryWrapp = document.querySelector('.gallery-img-wrapp');
    const galleryImg = document.querySelectorAll('.photo-list-img');
    const galleryBtnLeft = document.querySelector('#left');
    const galleryBtnRight = document.querySelector('#right');

    document.querySelector('.photo-list').addEventListener('click', openGallery);
    document.querySelector('.gallery-close-btn').addEventListener('click', closeGallery);

    function openGallery(event) {
        const currentImg = event.target.className === 'photo-list-img';
        
        if (currentImg) {
            gallery.style.opacity = '1';
            gallery.style.zIndex = '10';
            galleryWrapp.style.transform = 'scale(1)';
            galleryWrapp.style.opacity = '1';
        }
    }

    function closeGallery() {
            gallery.style.opacity = '0';
            gallery.style.zIndex = '-1';
            galleryWrapp.style.transform = 'scale(2)';
            galleryWrapp.style.opacity = '0';
    }
}