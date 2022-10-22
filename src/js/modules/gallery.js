export function gallery() {
    const gallery = document.querySelector('.gallery-wrapp');
    const galleryWrapp = document.querySelector('.gallery-img-wrapp');
    document.querySelector('.photo-list').addEventListener('click', openGallery)

    function openGallery(event) {  
        document.querySelector('.right').addEventListener('click', scrollRight);
        document.querySelector('.left').addEventListener('click', scrollLeft);

        let current = 0;
        const imgElem = event.target;
        const images = document.querySelectorAll('.gallery-img');

        function open() {
            if (imgElem) {
                gallery.style.opacity = '1';
                gallery.style.zIndex = '10';
                galleryWrapp.style.transform = 'scale(1)';
                galleryWrapp.style.opacity = '1';
            }
        }

        function imgCounter() {
            for (let i = 0; i < images.length; i++) {
                images[i].style.opacity = '0'
            } 
            images[current].style.opacity = '1';
        }

        function scrollRight() {
            if (current == images.length){
                current = 0;
            } else {
                current++;
            }
            imgCounter()
        }

        function scrollLeft() {
            current--;
            if (current == -1) {
                current = images.length - 1;
            }
            imgCounter()
        }

        open()
        scrollRight()
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