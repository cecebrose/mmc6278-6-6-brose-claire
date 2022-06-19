function menu() {
    let getMenu = document.querySelector("#hamburger-menu");
    getMenu.classList.toggle(".main-menu");
    }
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }

      const button = document.querySelector('button.hamburger-btn');
      button.addEventListener('click', () => {
        button.ariaExpanded = false
      })

