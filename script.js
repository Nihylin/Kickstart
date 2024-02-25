document.addEventListener('DOMContentLoaded', function(event)
{
  //DÉCLARATIONS
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const darkModeSwitch = document.getElementById('switch');

  //INTERACTIONS
  hamburger.addEventListener('click', function()
  {
    if (nav.classList.contains("menupresent")) {
      fermeMenu();
    } else {
      ouvreMenu();
    }
  });

  darkModeSwitch.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  window.addEventListener('click', function(event)
  {
    if (!hamburger.contains(event.target))
    {
      fermeMenu();
    }
  });

  //FONCTIONS
  function ouvreMenu() {
    nav.classList.add("menupresent");
    hamburger.classList.add("is-active");
  }

  function fermeMenu() {
    nav.classList.remove("menupresent");
    hamburger.classList.remove("is-active");
  }
});
