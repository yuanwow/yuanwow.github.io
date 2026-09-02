document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cat-carousel").forEach(function (carousel) {
    const slides = Array.from(
      carousel.querySelectorAll(".cat-carousel__slide")
    );

    const dotsContainer = carousel.querySelector(
      ".cat-carousel__dots"
    );

    // 从 HTML 的 data-autoplay="3000" 读取播放间隔
    const interval = Number(carousel.dataset.autoplay) || 3000;

    // 找不到圆点容器或只有一张图片时，不启动轮播
    if (!dotsContainer || slides.length <= 1) {
      return;
    }

    let currentIndex = 0;
    let timer = null;

    // 清空圆点容器，防止重复生成
    dotsContainer.innerHTML = "";

    // 根据图片数量生成圆点
    const dots = slides.map(function (_, index) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "cat-carousel__dot";

      button.setAttribute(
        "aria-label",
        "Show photo " + (index + 1)
      );

      // 点击圆点后切换到对应图片
      button.addEventListener("click", function () {
        showSlide(index);
        restartAutoPlay();
      });

      dotsContainer.appendChild(button);

      return button;
    });

    // 显示指定图片
    function showSlide(index) {
      // 隐藏当前图片
      slides[currentIndex].classList.remove("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "true");

      // 取消当前圆点的高亮
      dots[currentIndex].classList.remove("is-active");

      // 更新当前图片序号
      currentIndex = index;

      // 显示新的图片
      slides[currentIndex].classList.add("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "false");

      // 高亮新的圆点
      dots[currentIndex].classList.add("is-active");
    }

    // 显示下一张图片
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }

    // 开始自动播放
    function startAutoPlay() {
      clearInterval(timer);
      timer = setInterval(nextSlide, interval);
    }

    // 停止自动播放
    function stopAutoPlay() {
      clearInterval(timer);
      timer = null;
    }

    // 点击圆点后重新开始计时
    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // 初始化图片状态：
    // 第一张显示，其他图片隐藏
    slides.forEach(function (slide, index) {
      slide.classList.toggle("is-active", index === 0);

      slide.setAttribute(
        "aria-hidden",
        index === 0 ? "false" : "true"
      );
    });

    // 默认高亮第一个圆点
    dots[0].classList.add("is-active");

    // 页面加载完成后直接开始自动播放
    startAutoPlay();
  });
});
