export function gallery() {
    const gallery = document.querySelector('.gallery-wrapp');
    const galleryWrapp = document.querySelector('.gallery-img-wrapp');

    function openGallery() {  
        document.querySelector('.photo-list').addEventListener('click', event => {
            let imgAttr;
            const imgElem = event.target;           

            if (imgElem) {
                imgAttr = event.target.getAttribute('src');
            }

            if (imgElem) {
                gallery.style.opacity = '1';
                gallery.style.zIndex = '10';
                galleryWrapp.style.transform = 'scale(1)';
                galleryWrapp.style.opacity = '1';
            }

            document.querySelector('.gallery-img').src = imgAttr;
        })
    }
    openGallery()

    function closeGallery() {
        document.querySelector('.gallery-close-btn').addEventListener('click', () => {
            gallery.style.opacity = '0';
            gallery.style.zIndex = '-1';
            galleryWrapp.style.transform = 'scale(2)';
            galleryWrapp.style.opacity = '0';
        });
    }
    closeGallery()
}