document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".accordion-header")) {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
      const content = header.nextElementSibling;
      content.style.maxHeight = "0px";
      content.style.overflow = "hidden";
      content.style.transition = "max-height 0.4s ease, opacity 0.4s ease";

      header.addEventListener("click", function () {
        const isOpen = header.classList.contains("active");

        document
          .querySelectorAll(".accordion-header")
          .forEach((h) => h.classList.remove("active"));
        document.querySelectorAll(".accordion-content").forEach((c) => {
          c.style.maxHeight = "0px";
          c.style.opacity = "0";
        });

        if (!isOpen) {
          header.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = "1";
        }
      });
    });
  }
});

if (document.querySelector(".faq-tab")) {
  function showSection(clickedElement, sectionId) {
    document
      .querySelectorAll(".faq-tab li")
      .forEach((li) => li.classList.remove("active-tab"));

    document.querySelectorAll(".tab-faq").forEach((section) => {
      section.classList.remove("active-tab");
    });

    clickedElement.parentElement.classList.add("active-tab");

    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active-tab");
    }
  }
}
