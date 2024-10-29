class UserProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          border-radius: 8px;
          max-width: 300px;
          text-align:center;
              margin: 0 auto;
        }
        ::slotted(h2) {
          color: #333;
          margin-top: 0;
        }
        ::slotted(p) {
          color: #666;
          font-size: 14px;
        }
      </style>
      <slot name="name"></slot>
      <slot name="bio"></slot>
    `;
  }
}

customElements.define("user-profile-card", UserProfileCard);
