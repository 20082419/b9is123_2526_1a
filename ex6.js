class ShadowComponent extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
          <style>
            div {
              background: #f9f9f9;
              border: 2px solid #ccc;
              padding: 16px;
              border-radius: 10px;
              text-align: center;
              font-family: sans-serif;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            h2 {
              color: #007bff;
              margin-bottom: 8px;
            }
          </style>

          <div>
            <h2>Hello Suvwe!</h2>
            <p>I live inside the <strong>Shadow DOM</strong>.</p>
          </div>
        `;
      }
    }

    customElements.define('shadow-component', ShadowComponent);