document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cat-carousel").forEach(function (carousel) {
    const slides = Array.from(
      carousel.querySelectorAll(".cat-carousel__slide")
    );

    const dotsContainer = carousel.querySelector(
      ".cat-carousel__dots"
    );

    const interval = Number(carousel.dataset.autoplay) || 3000;

    if (!dotsContainer || slides.length <= 1) {
      return;
    }

    let currentIndex = 0;
    let timer = null;

    // 清空已有圆点，防止重复生成
    dotsContainer.innerHTML = "";

    const dots = slides.map(function (_, index) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "cat-carousel__dot";
      button.setAttribute(
        "aria-label",
        "Show photo " + (index + 1)
      );

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
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }

    function startAutoPlay() {
      clearInterval(timer);

      if (!document.hidden) {
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

    // 初始化图片状态
    slides.forEach(function (slide, index) {
      slide.classList.toggle("is-active", index === 0);
      slide.setAttribute(
        "aria-hidden",
        index === 0 ? "false" : "true"
      );
    });

    // 初始化第一个圆点
    dots[0].classList.add("is-active");

    // 浏览器切换到后台时暂停，回来后继续
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });

    startAutoPlay();
  });
});
