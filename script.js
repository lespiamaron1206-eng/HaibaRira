document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // 追加：このタブでイントロを表示済みか確認
  let introShown = false;

  try {
    introShown = sessionStorage.getItem("introShown") === "true";
  } catch (error) {
    // sessionStorageが使えない場合は通常どおりイントロを表示
  }

  if (introShown) {
    // 変更：表示済みならイントロを出さず、通常ページを表示
    if (intro) {
      intro.style.display = "none";
    }

    if (mainContent) {
      mainContent.classList.add("show");
    }
  } else {
    // 初回表示：イントロを表示
    window.setTimeout(() => {
      if (intro) {
        intro.classList.add("hide");
      }

      if (mainContent) {
        mainContent.classList.add("show");
      }

      // 追加：イントロを表示済みとして記録
      try {
        sessionStorage.setItem("introShown", "true");
      } catch (error) {
        // 記録できない場合はイントロ表示を継続
      }
    }, 2500);
  }

  // メイン画像を3秒ごとに切り替え
  const slides = document.querySelectorAll(".hero-slide");

  if (slides.length > 1) {
    let currentSlide = 0;

    window.setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  // フッターの年号を自動更新
  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
