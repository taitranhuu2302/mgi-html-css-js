const btnDrawerAuthor = document.getElementsByClassName("mgi_header__btn-drawer-right")[0];
const btnDrawerNav = document.getElementById("mgi_btn-nav-mobile");
const btnCloseDrawerAuthor = document.getElementsByClassName("mgi_drawer__btn-close")[0];
const drawerAuthor = document.getElementById("mgi_drawer-author");
const drawerNav = document.getElementById("mgi_drawer-nav");
const app = document.getElementById("app");
const overlay = document.getElementById("overlay");

function toggleDrawerAuthor() {
    if (drawerAuthor.classList.contains('open')) {
        closeDrawerAuthor()
    } else {
        openDrawerAuthor()
    }
}
function openDrawerAuthor() {
    drawerAuthor.classList.remove('open')
    app.style.transform = `translateX(0)`
    // overlay.classList.add('open')
}

function closeDrawerAuthor() {
    app.style.transform = `translateX(-350px)`
    drawerAuthor.classList.remove('open')
}

btnDrawerAuthor.addEventListener("click", (e) => {
    toggleDrawerAuthor()
})
btnCloseDrawerAuthor.addEventListener("click", (e) => {
    toggleDrawerAuthor()
})

// btnDrawerNav.addEventListener('click', () => {
//     if (drawerNav.classList.contains("open")) {
//         drawerNav.classList.remove("open")
//     } else {
//         drawerNav.classList.add("open")
//         overlay.classList.add('open')
//     }
// })

// document.addEventListener('click', (e) => {
//     if (e.target.getAttribute('id') === 'overlay') {
//         if (drawerAuthor.classList.contains('open')) {
//             closeDrawerAuthor()
//         }
//         overlay.classList.add('open')
//     }
// })