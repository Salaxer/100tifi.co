const Header = () =>{
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1><a href="/" aria-label="Pagina de inicio 100tifi.co"> 100tifi.co </a> </h1>
            </div>
            <label  class="switchBtn">
                <span class="fas fa-sun" id="sunday"></span>
                <input id="changemode" tabindex="0" type="checkbox" >
                <div class="slide round"></div>
                <span class="fas fa-moon" id="moonday"></span>
            </label>
        </div>
        <div class="Header-nav">
            <a href="#/about/"> about</a>
        </div>
    `;
    return view;
};

export default Header;