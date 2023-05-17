// Scroll animations
const elements = document.querySelectorAll(".mgi_services > div");
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.5) {
      entry.target.classList.add("animated");
    }
  });
}
const observerScroll = new IntersectionObserver(callback, {
  threshold: 1,
});

elements.forEach((item) => {
  observerScroll.observe(item);
});

// End scroll animations

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const offsetTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (offsetTop > 100) {
    header.classList.add("mgi_header-sticky");
  } else {
    header.classList.remove("mgi_header-sticky");
  }
});
// End Sticky Header

// Drawer
const app = document.getElementById("app");
const drawerAuthor = document.getElementById("mgi_drawer-author");
const btnDrawerAuthor = document.getElementsByClassName(
  "mgi_header__btn-drawer-right"
)[0];
const btnCloseDrawerAuthor = document.getElementsByClassName(
  "mgi_drawer__btn-close"
)[0];
const drawerNavMobile = document.getElementById("mgi_drawer-nav");
const btnDrawerNavMobile = document.getElementById("mgi_btn-nav-mobile");
const overlay = document.getElementById("overlay");

function openDrawer(target, size, type) {
  if (type === "open") {
    target.classList.add("open");
    overlay.classList.add("open");
  } else if (type === "close") {
    target.classList.remove("open");
    overlay.classList.remove("open");
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
});

document.addEventListener("click", (e) => {
  if (e.target === overlay) {
    if (drawerAuthor.classList.contains("open")) {
      openDrawer(drawerAuthor, 0, "close");
    }
    if (drawerNavMobile.classList.contains("open")) {
      openDrawer(drawerNavMobile, 0, "close");
    }
  }
});
// End Drawer

// Slideshow Top
const btnSlideTopNext = document.querySelector(
  ".mgi_main__banner .mgi_slideshow__next"
);
const btnSlideTopPrev = document.querySelector(
  ".mgi_main__banner .mgi_slideshow__prev"
);
const slideTop = document.querySelector(
  ".mgi_main__banner .mgi_banner__slideshow"
);
const paginationSlideTop = document.querySelectorAll(
  ".mgi_main__banner .mgi_slideshow__dots li"
);
const listChildSlideTop = Array.from(
  slideTop.getElementsByClassName("mgi_banner__slide")
);
let activeSlideTopCount = 0;

function activeSlideTop(target) {
  listChildSlideTop.forEach((item) => {
    item.classList.remove("active");
  });

  target.classList.add("active");
}

function activePaginationSlideTop(target) {
  paginationSlideTop.forEach((subItem) => {
    subItem.classList.remove("active");
  });
  target.classList.add("active");
}

paginationSlideTop.forEach((item, index) => {
  item.addEventListener("click", () => {
    slideTop.style.transform = `translateX(-${33.33 * index}%)`;
    activePaginationSlideTop(item)
  });
});

btnSlideTopNext.addEventListener("click", () => {
  const countChild = slideTop.childElementCount;
  activeSlideTopCount++;

  if (activeSlideTopCount >= countChild) {
    activeSlideTopCount = 0;
  }
  activeSlideTop(listChildSlideTop[activeSlideTopCount]);
  activePaginationSlideTop(paginationSlideTop[activeSlideTopCount])
  slideTop.style.transform = `translateX(-${33.33 * activeSlideTopCount}%)`;
});

btnSlideTopPrev.addEventListener("click", () => {
  const countChild = slideTop.childElementCount;
  activeSlideTopCount--;
  if (activeSlideTopCount < 0) {
    activeSlideTopCount = countChild - 1;
  }
  activeSlideTop(listChildSlideTop[activeSlideTopCount]);
  activePaginationSlideTop(paginationSlideTop[activeSlideTopCount])
  slideTop.style.transform = `translateX(-${33.33 * activeSlideTopCount}%)`;
});
// End Slideshow Top

// Slideshow Projects
const parentProjects = document.querySelector(".mgi_projects")
const projects = parentProjects.querySelectorAll(".mgi_projects > div")
const btnPrevProject = document.querySelector("#projects .mgi_slideshow_prev")
const btnNextProject = document.querySelector("#projects .mgi_slideshow_next")

let widthProject = projects[0].offsetWidth;

function slideProjectToRight() {
  parentProjects.style.transform = `translateX(-${widthProject + 20}px)`;
}
function slideProjectToLeft() {
  parentProjects.style.transform = `translateX(${widthProject + 20}px)`;
}

btnNextProject.addEventListener("click", () => {
  slideProjectToRight()
})

btnPrevProject.addEventListener("click", () => {
  slideProjectToLeft()
})

// End Slideshow Projects