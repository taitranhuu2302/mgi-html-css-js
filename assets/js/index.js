const app = document.getElementById("app");
const drawerAuthor = document.getElementById("mgi_drawer-author");
const btnDrawerAuthor = document.getElementsByClassName(
  "mgi_header__btn-drawer-right"
)[0];
const btnCloseDrawerAuthor = document.getElementsByClassName(
  "mgi_drawer__btn-close"
)[0];
const drawerNavMobile = document.getElementById("mgi_drawer-nav")
const btnDrawerNavMobile = document.getElementById("mgi_btn-nav-mobile");
const overlay = document.getElementById("overlay")

function openDrawer(target, size, type) {
  if (type === "open") {
    target.classList.add("open");
    overlay.classList.add("open")
  } else if (type === "close") {
    target.classList.remove("open");
    overlay.classList.remove("open")
  }
  app.style.transform = `translateX(${size})`;
}

btnDrawerAuthor.addEventListener("click", () => {
  if (drawerAuthor.classList.contains("open")) {
    openDrawer(drawerAuthor, 0, "close");
  } else {
    drawerAuthor.classList.add("open");
    openDrawer(drawerAuthor, `-350px`, "open");
  }
});

btnCloseDrawerAuthor.addEventListener("click", () => {
    openDrawer(drawerAuthor, 0, "close");
});

btnDrawerNavMobile.addEventListener("click", () => {
    openDrawer(drawerNavMobile, 0, "open");
})

document.addEventListener("click", (e) => {
    if (e.target === overlay) {
        if (drawerAuthor.classList.contains("open")) {
            openDrawer(drawerAuthor, 0, "close");
        }
        if (drawerNavMobile.classList.contains("open")) {
            openDrawer(drawerNavMobile, 0, "close");
        }
    }
})
