document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cat-carousel").forEach(function (carousel) {
    const viewport = carousel.querySelector(
      ".cat-carousel__viewport"
    );

    const track = carousel.querySelector(
      ".cat-carousel__track"
    );

    const dotsContainer = carousel.querySelector(
      ".cat-carousel__dots"
    );

    if (!viewport || !track || !dotsContainer) {
      return;
    }

    const originalSlides = Array.from(
      track.querySelectorAll(".cat-carousel__slide")
    );

    if (originalSlides.length <= 1) {
      return;
    }

    const slideCount = originalSlides.length;
    const interval = Number(carousel.dataset.autoplay) || 3000;
    const transitionDuration = 350;
    const dragThreshold = 50;

    let currentIndex = 0;
    let trackIndex = 1;
    let slideWidth = viewport.clientWidth;

    let timer = null;
    let transitionTimer = null;

    let isDragging = false;
    let isAnimating = false;

    let startX = 0;
    let currentX = 0;
    let startTime = 0;

    /*
     * 克隆最后一张和第一张图片。
     *
     * 实际轨道：
     * 克隆图3、图1、图2、图3、克隆图1
     *
     * 这样可以实现首尾无缝循环。
     */
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[slideCount - 1].cloneNode(true);

    firstClone.setAttribute("aria-hidden", "true");
    lastClone.setAttribute("aria-hidden", "true");

    firstClone.alt = "";
    lastClone.alt = "";

    track.insertBefore(lastClone, originalSlides[0]);
    track.appendChild(firstClone);

    dotsContainer.innerHTML = "";

    const dots = originalSlides.map(function (_, index) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "cat-carousel__dot";

      button.setAttribute(
        "aria-label",
        "Show photo " + (index + 1)
      );

      button.addEventListener("click", function () {
        goToSlide(index);
        restartAutoPlay();
      });

      dotsContainer.appendChild(button);

      return button;
    });

    function updateActiveState() {
      originalSlides.forEach(function (slide, index) {
        slide.setAttribute(
          "aria-hidden",
          index === currentIndex ? "false" : "true"
        );
      });

      dots.forEach(function (dot, index) {
        dot.classList.toggle(
          "is-active",
          index === currentIndex
        );
      });
    }

    function setTrackPosition(animate, dragOffset) {
      const offset = dragOffset || 0;

      track.style.transition = animate
        ? "transform " +
          transitionDuration +
          "ms cubic-bezier(0.22, 0.61, 0.36, 1)"
        : "none";

      const position = -trackIndex * slideWidth + offset;

      track.style.transform =
        "translate3d(" + position + "px, 0, 0)";
    }

    function normalizeTrackPosition() {
      clearTimeout(transitionTimer);
      transitionTimer = null;
      isAnimating = false;

      // 从最后面的“克隆图1”无缝跳回真正的图1
      if (trackIndex === slideCount + 1) {
        trackIndex = 1;
      }

      // 从最前面的“克隆图3”无缝跳回真正的图3
      if (trackIndex === 0) {
        trackIndex = slideCount;
      }

      setTrackPosition(false, 0);
    }

    function waitForTransition() {
      clearTimeout(transitionTimer);

      // 防止某些浏览器没有触发 transitionend
      transitionTimer = setTimeout(function () {
        normalizeTrackPosition();
      }, transitionDuration + 60);
    }

    function moveTo(trackPosition, logicalIndex) {
      if (isAnimating || isDragging) {
        return;
      }

      trackIndex = trackPosition;
      currentIndex = logicalIndex;
      isAnimating = true;

      updateActiveState();
      setTrackPosition(true, 0);
      waitForTransition();
    }

    function nextSlide() {
      moveTo(
        trackIndex + 1,
        (currentIndex + 1) % slideCount
      );
    }

    function previousSlide() {
      moveTo(
        trackIndex - 1,
        (currentIndex - 1 + slideCount) % slideCount
      );
    }

    function goToSlide(index) {
      if (index === currentIndex || isAnimating || isDragging) {
        return;
      }

      /*
       * 第一张点击第三张时向右滑一格；
       * 第三张点击第一张时向左滑一格。
       * 这样首尾切换不会一次跨过两张图片。
       */
      if (currentIndex === 0 && index === slideCount - 1) {
        previousSlide();
        return;
      }

      if (currentIndex === slideCount - 1 && index === 0) {
        nextSlide();
        return;
      }

      moveTo(index + 1, index);
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

    track.addEventListener("transitionend", function (event) {
      if (event.propertyName === "transform") {
        normalizeTrackPosition();
      }
    });

    viewport.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      if (isAnimating) {
        return;
      }

      isDragging = true;
      startX = event.clientX;
      currentX = event.clientX;
      startTime = Date.now();

      stopAutoPlay();

      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);

      setTrackPosition(false, 0);
    });

    viewport.addEventListener("pointermove", function (event) {
      if (!isDragging) {
        return;
      }

      currentX = event.clientX;

      const distance = currentX - startX;

      setTrackPosition(false, distance);
    });

    viewport.addEventListener("pointerup", function (event) {
      if (!isDragging) {
        return;
      }

      currentX = event.clientX;

      const distance = currentX - startX;
      const elapsedTime = Math.max(Date.now() - startTime, 1);
      const velocity = distance / elapsedTime;

      isDragging = false;
      viewport.classList.remove("is-dragging");

      // 向左拖动：下一张
      if (distance < -dragThreshold || velocity < -0.5) {
        nextSlide();
      }

      // 向右拖动：上一张
      else if (distance > dragThreshold || velocity > 0.5) {
        previousSlide();
      }

      // 距离不足：平滑回到当前图片
      else {
        isAnimating = true;
        setTrackPosition(true, 0);
        waitForTransition();
      }

      restartAutoPlay();
    });

    viewport.addEventListener("pointercancel", function () {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      viewport.classList.remove("is-dragging");

      isAnimating = true;
      setTrackPosition(true, 0);
      waitForTransition();
      restartAutoPlay();
    });

    viewport.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });

    window.addEventListener("resize", function () {
      slideWidth = viewport.clientWidth;
      normalizeTrackPosition();
    });

    // 初始显示第一张图片
    updateActiveState();
    setTrackPosition(false, 0);

    // 默认开始自动播放
    startAutoPlay();
  });
});
