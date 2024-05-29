document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });

    link.classList.add('active');
  });
});

  function showPage(pageId) {
    pages.forEach((page) => {
      if (page.id === pageId) {
        page.removeAttribute("hidden");
      } else {
        page.setAttribute("hidden", "");
      }
    });
  }

  function navigateTo(pageId) {
    showPage(pageId);
    history.pushState(null, null, `#${pageId}`);
  }

  function handleNavigationClick(event) {
    event.preventDefault();
    const pageId = this.getAttribute("href").substring(1);
    navigateTo(pageId);
  }

  window.addEventListener("popstate", function () {
    const pageId = location.hash.substring(1);
    showPage(pageId);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavigationClick);
  });

  const initialPageId = location.hash.substring(1) || "projects";
  showPage(initialPageId);
});
