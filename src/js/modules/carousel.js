export function carousel() {
    (function () {
        let tabItem = 1;
        let offset = 0;
        let currTrack;
        let widthOfItem;
        const tabBtn = document.querySelectorAll('.tab-btn-switch');

        tabBtn.forEach(btn => {
            btn.addEventListener('click', () => {
               tabItem = btn.dataset.tab;

               if(tabItem) currTrack = slideTrack();
            })
        })

        function slideTrack() {
            const track = document.querySelectorAll('.tab-track');
            for (let i = 0; i < track.length; i++){
                if(tabItem == i) currTrack = track[i];
            }
            return currTrack
        }
        slideTrack()

        function currWidth(arr) {
            arr = Array.from(currTrack.children);
            for (let i = 0; i < arr.length; i++) {
                widthOfItem = arr[i].offsetWidth
            }
        }
        currWidth()

        document.querySelector('.btn-right').addEventListener('click', () => {
            offset = offset + widthOfItem + 30;
            if(offset > (widthOfItem * 3) + 90) offset = 0;

            currTrack.style.transform = `translateX(${-offset}px)`;
        })
        document.querySelector('.btn-left').addEventListener('click', () => {
            offset = offset - widthOfItem - 30;
            if(offset < 0) offset = (widthOfItem * 3) + 90;

            currTrack.style.transform = `translateX(${-offset}px)`;
        })
    })()
}