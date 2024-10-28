// my-greeting.js
class MyGreeting extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Visitor";
    this.innerHTML = `<p>Hello, ${name}! Welcome to the Floral Design Event! 🪻</p>`;
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name" && oldValue !== newValue) {
      this.connectedCallback();
    }
  }
}

customElements.define("my-greeting", MyGreeting);
