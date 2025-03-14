class Search extends Component {
  refs = {};

  constructor() {
    super();
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.fonts.roboto,
    ];
  }

  style() {
    return `
      .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 20px 0;
        width: 100%;
      }

      .search-form {
        width: 100%;
        position: relative;
        display: flex;
      }

      .search-input {
        width: 100%;
        background: ${CONFIG.palette.mantle};
        color: ${CONFIG.palette.text};
        border: none;
        padding: 12px 20px 12px 45px;
        border-radius: 15px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        box-shadow: 0 4px ${CONFIG.palette.mantle}, 0 5px 5px rgb(0 0 0 / 20%);
        transition: all 0.3s ease;
      }

      .search-input:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${CONFIG.palette.green};
      }
      
      .search-icon-left {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: ${CONFIG.palette.blue};
        font-size: 20px;
        z-index: 1;
      }

      .search-button {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        background: ${CONFIG.palette.surface0};
        border: none;
        color: ${CONFIG.palette.green};
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
      }

      .search-button:hover {
        background: ${CONFIG.palette.surface1};
      }

      .search-icon {
        font-size: 18px;
      }
    `;
  }

  template() {
    return `
      <div class="search-container">
        <form class="search-form" action="https://www.google.com/search" method="get">
          <i class="material-icons search-icon-left">search</i>
          <input class="search-input" type="text" name="q" placeholder="Google it..." autocomplete="off" autofocus>
          <button class="search-button" type="submit">
            <i class="material-icons search-icon">arrow_forward</i>
          </button>
        </form>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
    setTimeout(() => {
      const input = this.shadow.querySelector('.search-input');
      if (input) input.focus();
    }, 100);
  }
} 