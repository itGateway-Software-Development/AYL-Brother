(function () {
  function setLightMode() {
    document.documentElement.style.setProperty("--background-color", "#FFF");
    document.documentElement.style.setProperty("--font-color", "#3F3F3F");
    document.documentElement.style.setProperty("--font-dark-color", "#ededed");
    document.documentElement.style.setProperty(
      "--language-bg-color",
      "#dcdcdc"
    );
    document.documentElement.style.setProperty(
      "--sec-background-color",
      "#dfe6ee"
    );
    document.documentElement.style.setProperty(
      "--sec-background-light-color",
      "#3a347a"
    );
    document.documentElement.style.setProperty(
      "--background-light-color",
      "#242142"
    );
    document.documentElement.style.setProperty("--sec-font-color", "#ededed");
    document.documentElement.style.setProperty(
      "--footer-background-color",
      "#c8d0d8"
    );
    document.documentElement.style.setProperty("--border-color", "#111");
  }
  setLightMode();
})();

document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.querySelectorAll(".theme-icon");

  themeIcon.forEach((theme) => {
    theme.addEventListener("click", (e) => {
      let currentTheme = e.target.classList;
      let isDarkTheme = currentTheme.contains("dark-icon");

      if (isDarkTheme) {
        //change to light mode
        document.documentElement.style.setProperty(
          "--background-color",
          "#FFF"
        );
        document.documentElement.style.setProperty("--font-color", "#3F3F3F");
        document.documentElement.style.setProperty(
          "--font-dark-color",
          "#ededed"
        );
        document.documentElement.style.setProperty(
          "--language-bg-color",
          "#dcdcdc"
        );
        document.documentElement.style.setProperty(
          "--sec-background-color",
          "#f2f2f2"
        );
        document.documentElement.style.setProperty(
          "--sec-background-light-color",
          "#3a347a"
        );
        document.documentElement.style.setProperty(
          "--background-light-color",
          "#242142"
        );
        document.documentElement.style.setProperty(
          "--sec-font-color",
          "#ededed"
        );
        document.documentElement.style.setProperty(
          "--footer-background-color",
          "#c8d0d8"
        );
        document.documentElement.style.setProperty("--border-color", "#111");
        document.documentElement.style.setProperty(
          "--secondary-background",
          "#f2f2f2"
        );
      } else {
        document.documentElement.style.setProperty(
          "--background-color",
          "#0f0d1f"
        );
        document.documentElement.style.setProperty("--font-color", "#ededed");
        document.documentElement.style.setProperty(
          "--font-dark-color",
          "#3f3f3f"
        );
        document.documentElement.style.setProperty(
          "--language-bg-color",
          "#f2f2f2"
        );
        document.documentElement.style.setProperty(
          "--sec-background-color",
          "#f2f2f2"
        );
        document.documentElement.style.setProperty(
          "--sec-background-light-color",
          "#f2f2f2"
        );
        document.documentElement.style.setProperty(
          "--background-light-color",
          "#f2f3f4"
        );
        document.documentElement.style.setProperty(
          "--sec-font-color",
          "#A22E76"
        );
        document.documentElement.style.setProperty(
          "--footer-background-color",
          "#1d2436"
        );
        document.documentElement.style.setProperty("--border-color", "#ffff");
        document.documentElement.style.setProperty(
          "--secondary-background",
          "#0f0d1f"
        );
      }
    });
  });
});
