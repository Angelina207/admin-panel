export function carousel() {
    const tabs = document.querySelector('.tab__tab-btn').addEventListener('click', showCurrentTab)
    const slider = document.querySelectorAll('.tab-content');
    const cards = document.querySelectorAll('.carousel__card');

    function showCurrentTab(event) {
        if (event.target.className === 'tab-btn-swich') {
            const tabAttr = parseInt(event.target.dataset.tab);

            for (let i = 0; i < slider.length; i++) {
                tabAttr === i ? slider[i].style.display = 'flex' : slider[i].style.display = 'none';
            }
        }
    }
}