const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filtres__active");
    });
    target.classList.add("filtres__active");
  });
});
