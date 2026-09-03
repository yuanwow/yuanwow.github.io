document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cat-carousel").forEach(function (carousel) {
    const viewport = carousel.querySelector(
      ".cat-carousel__viewport"
    );

    const slides = Array.from(
      carousel.querySelectorAll(".cat-carousel__slide")
    );

    const dotsContainer = carousel.querySelector(
      ".cat-carousel__dots"
    );

    const interval = Number(carousel.dataset.autoplay) || 3000;

    if (!viewport || !dotsContainer || slides.length <= 1) {
      return;
    }

    let currentIndex = 0;
    let timer = null;

    // 拖动相关状态
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let draggedSlide = null;

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

    function previousSlide() {
      const previousIndex =
        (currentIndex - 1 + slides.length) % slides.length;

      showSlide(previousIndex);
    }

    function startAutoPlay() {
      clearInterval(timer);
      timer = setInterval(nextSlide, interval);
    }

    function stopAutoPlay() {
      clearInterval(timer);
      timer = null;
    }

    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // 开始拖动
    viewport.addEventListener("pointerdown", function (event) {
      // 鼠标只响应左键
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      isDragging = true;
      startX = event.clientX;
      currentX = event.clientX;
      draggedSlide = slides[currentIndex];

      stopAutoPlay();

      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);

      // 拖动时暂时关闭 transition，图片才能跟随鼠标
      draggedSlide.style.transition = "none";
    });

    // 拖动图片
    viewport.addEventListener("pointermove", function (event) {
      if (!isDragging || !draggedSlide) {
        return;
      }

      currentX = event.clientX;

      const distance = currentX - startX;

      draggedSlide.style.transform =
        "translateX(" + distance + "px)";
    });

    // 完成拖动
    viewport.addEventListener("pointerup", function (event) {
      if (!isDragging) {
        return;
      }

      currentX = event.clientX;

      const distance = currentX - startX;
      const oldSlide = draggedSlide;

      isDragging = false;
      draggedSlide = null;

      viewport.classList.remove("is-dragging");

      if (oldSlide) {
        oldSlide.style.transform = "";
        oldSlide.style.transition = "";
      }

      // 向左拖超过 50px：下一张
      if (distance < -50) {
        nextSlide();
      }

      // 向右拖超过 50px：上一张
      if (distance > 50) {
        previousSlide();
      }

      restartAutoPlay();
    });

    // 拖动意外取消
    viewport.addEventListener("pointercancel", function () {
      if (draggedSlide) {
        draggedSlide.style.transform = "";
        draggedSlide.style.transition = "";
      }

      isDragging = false;
      draggedSlide = null;

      viewport.classList.remove("is-dragging");
      restartAutoPlay();
    });

    // 阻止浏览器默认的图片拖动效果
    viewport.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });

    // 初始化图片
    slides.forEach(function (slide, index) {
      slide.classList.toggle("is-active", index === 0);

      slide.setAttribute(
        "aria-hidden",
        index === 0 ? "false" : "true"
      );
    });

    // 默认高亮第一个圆点
    dots[0].classList.add("is-active");

    // 默认开启自动播放
    startAutoPlay();
  });
});
