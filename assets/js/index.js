const view = document.querySelector('iframe');
const buttons = document.querySelectorAll(".mgi_sizes button");

window.onload = () => {
    const viewport = localStorage.getItem('viewport') ? localStorage.getItem('viewport') : 1920
    view.style.width = `${viewport}px`
    
    buttons.forEach((item) => {
        if (item.getAttribute('data-viewport') == viewport) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const viewport = btn.getAttribute('data-viewport');

        view.style.width = `${viewport}px`
        buttons.forEach(item => item.classList.remove('active'))
        localStorage.setItem('viewport', viewport)
        btn.classList.add('active')
    })
})