import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navItem"]

  connect() {
    // console.log("Sidenav controller connected");
    this.highlightCurrentNavItem();
  }

  toggleMenu(event) {
    this.removeMenuOpenFromAll();
    event.currentTarget.classList.add('menu-open');
  }

  removeMenuOpenFromAll() {
    this.navItemTargets.forEach(item => item.classList.remove('menu-open'));
  }

  highlightCurrentNavItem() {
    const currentPath = window.location.pathname;
    this.navItemTargets.forEach(item => {
      const link = item.querySelector('a');
      if (link && link.pathname === currentPath) {
        item.classList.add('menu-open');
      }
    });
  }
}
