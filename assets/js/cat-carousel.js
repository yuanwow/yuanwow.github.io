document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cat-carousel").forEach(function (carousel) {
    const slides = Array.from(
      carousel.querySelectorAll(".cat-carousel__slide")
    );
    const dotsContainer = carousel.querySelector(".cat-carousel__dots");
    const toggleButton = carousel.querySelector(".cat-carousel__toggle");
    const interval = Number(carousel.dataset.autoplay) || 3000;

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let timer = null;
    let paused = false;
    let hovered = false;

    const dots = slides.map(function (_, index) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "cat-carousel__dot";
      button.setAttribute("aria-label", `Show photo ${index + 1}`);

      button.addEventListener("click", function () {
        showSlide(index);
        restartAutoPlay();
      });

      dotsContainer.appendChild(button);
      return button;
    });

    function showSlide(index) {
      slides[currentIndex].classList.remove("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "true");
      dots[currentIndex].classList.remove("is-active");

      currentIndex = index;

      slides[currentIndex].classList.add("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "false");
      dots[currentIndex].classList.add("is-active");
    }

    function nextSlide() {
      showSlide((currentIndex + 1) % slides.length);
    }

    function startAutoPlay() {
      clearInterval(timer);

      if (!paused && !hovered && !document.hidden) {
        timer = setInterval(nextSlide, interval);
      }
    }

    function stopAutoPlay() {
      clearInterval(timer);
      timer = null;
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    toggleButton.addEventListener("click", function () {
      paused = !paused;

      toggleButton.textContent = paused ? "▶" : "❚❚";
      toggleButton.setAttribute(
        "aria-label",
        paused ? "Play carousel" : "Pause carousel"
      );

      paused ? stopAutoPlay() : startAutoPlay();
    });

    carousel.addEventListener("mouseenter", function () {
      hovered = true;
      stopAutoPlay();
    });

    carousel.addEventListener("mouseleave", function () {
      hovered = false;
      startAutoPlay();
    });

    document.addEventListener("visibilitychange", function () {
      document.hidden ? stopAutoPlay() : startAutoPlay();
    });

    slides.forEach(function (slide, index) {
      slide.setAttribute(
        "aria-hidden",
        index === currentIndex ? "false" : "true"
      );
    });

    dots[currentIndex].classList.add("is-active");
    startAutoPlay();
  });
});
