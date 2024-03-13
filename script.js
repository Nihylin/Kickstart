document.addEventListener('DOMContentLoaded', function() {
  //DÉCLARATIONS
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const themeSwitch = document.getElementById("themeSwitch");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let darkMode = darkModeMediaQuery.matches;

  //INITIALISATION DARK MODE
  //https://www.freecodecamp.org/news/how-to-handle-dark-mode-with-css-and-javascript/
  darkModeMediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      darkMode = true;
    } else {
      darkMode = false;
    }
  });

  if (darkMode == true) {
    document.body.setAttribute("data-theme", "dark");
    moon.setAttribute("display", "none");
  } else {
    document.body.setAttribute("data-theme", "light");
    sun.setAttribute("display", "none");
  }

  //INTERACTIONS
  hamburger.addEventListener('click', function()
  {
    if (nav.classList.contains("menupresent")) {
      fermeMenu();
    } else {
      ouvreMenu();
    }
  });

  window.addEventListener('click', function(event)
  {
    if (!hamburger.contains(event.target))
    {
      fermeMenu();
    }
  });

  themeSwitch.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleDarkMode();
  });

  //FONCTIONS
  function ouvreMenu() {
    nav.classList.add("menupresent");
    hamburger.classList.add("is-active");
    themeSwitch.classList.add("activeMenuSwitch");
  }

  function fermeMenu() {
    nav.classList.remove("menupresent");
    hamburger.classList.remove("is-active");
    themeSwitch.classList.remove("activeMenuSwitch");
  }

  function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
      sun.setAttribute("display", "block");
      moon.setAttribute("display", "none");
    } else {
      document.body.setAttribute("data-theme", "light");
      sun.setAttribute("display", "none");
      moon.setAttribute("display", "block");
    }
  }
});
