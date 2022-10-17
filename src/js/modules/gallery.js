export function gallery() {
    const gallery = document.querySelector('.gallery-wrapp');
    const galleryWrapp = document.querySelector('.gallery-img-wrapp');
    document.querySelector('.photo-list').addEventListener('click', openGallery)

    function openGallery(event) {  
        document.querySelector('#rigth').addEventListener('click', scrollRight);
        document.querySelector('#left').addEventListener('click', scrollLeft);
        let imgAttr;
        let currSrc;
        const imgElem = event.target;      

        if (imgElem) {
            imgAttr = event.target.getAttribute('src');
        }
        currSrc = document.querySelector('.gallery-img').src = imgAttr;

        function scrollRight() {
            const images = document.querySelectorAll('.photo-list-img');

        }

        function scrollLeft() {
            
        }

        function open() {
            if (imgElem) {
                gallery.style.opacity = '1';
                gallery.style.zIndex = '10';
                galleryWrapp.style.transform = 'scale(1)';
                galleryWrapp.style.opacity = '1';
            }
        }
        open()
    }
 
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