class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .login-form { display: flex; flex-direction: column; width: 300px; }
        .login-form input { margin: 5px 0; padding: 10px; }
        .login-form button { padding: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
      </style>
      <div class="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" id="login-username" />
        <input type="password" placeholder="Password" id="login-password" />
        <button id="login-btn">Login</button>
      </div>
    `;
    this.shadowRoot
      .getElementById("login-btn")
      .addEventListener("click", () => {
        const username = this.shadowRoot.getElementById("login-username").value;
        const password = this.shadowRoot.getElementById("login-password").value;
        alert(`Logged in as: ${username}`);
      });
  }
}

class RegisterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .register-form { display: flex; flex-direction: column; width: 300px; }
        .register-form input { margin: 5px 0; padding: 10px; }
        .register-form button { padding: 10px; background-color: #28a745; color: white; border: none; cursor: pointer; }
      </style>
      <div class="register-form">
        <h2>Register</h2>
        <input type="text" placeholder="Username" id="register-username" />
        <input type="password" placeholder="Password" id="register-password" />
        <input type="email" placeholder="Email" id="register-email" />
        <button id="register-btn">Register</button>
      </div>
    `;
    this.shadowRoot
      .getElementById("register-btn")
      .addEventListener("click", () => {
        const username =
          this.shadowRoot.getElementById("register-username").value;
        const password =
          this.shadowRoot.getElementById("register-password").value;
        const email = this.shadowRoot.getElementById("register-email").value;
        alert(`Registered with Username: ${username}, Email: ${email}`);
      });
  }
}

customElements.define("login-component", LoginComponent);
customElements.define("register-component", RegisterComponent);

// Modal toggle functionality
document.getElementById("login-link").addEventListener("click", () => {
  document.getElementById("login-modal").style.display = "block";
  document.getElementById("register-modal").style.display = "none";
});

document.getElementById("register-link").addEventListener("click", () => {
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("register-modal").style.display = "block";
});
