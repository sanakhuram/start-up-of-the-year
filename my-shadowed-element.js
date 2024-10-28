// my-shadowed-element.js
class MyShadowedElement extends HTMLElement {
  constructor() {
    super();
   
    this.attachShadow({ mode: "open" });

   
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 10px;
          margin: 10px 0;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        ::slotted(h2) {
          color: darkblue;
        }
        ::slotted(p) {
          font-size: 16px;
          color: gray;
        }
        ::slotted(div[slot="footer"]) {
          text-align: right;
          margin-top: 10px;
          font-weight: bold;
        }
      </style>

      <slot name="header"></slot>
      <div class="content">
        <slot></slot> <!-- Default slot for content -->
      </div>
      <slot name="footer"></slot>
    `;
  }
}


customElements.define("my-shadowed-element", MyShadowedElement);
