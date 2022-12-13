const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/dark-logo.png" class="brand-logo" alt="" />
        <div class="nav-items">
          <div class="search">
          
          </div>
          <a id="regisBtn" href="http://127.0.0.1:5500/sign&register.html"><img src="img/user.png" alt="" /></a>
          <a id="logoutBtn" href="http://127.0.0.1:5500/sign&register.html"><img src="img/arrow.png" alt="" /></a>
          <div class="iconShopping">
            <a href="#"><img id="openDiv" src="img/cart.png" alt="" /></a>
            <span>0</span>
          </div>
        </div>
      </div>
    `;
}

createNav();