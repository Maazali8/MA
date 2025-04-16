
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    const chk = document.getElementById("chk");

    const signupForm = document.querySelector(".signup form");
    const loginForm = document.querySelector(".login form");

    // Signup form submit event
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = signupForm.querySelector("input[name='txt']").value.trim();
      const email = signupForm.querySelector("input[name='email']").value.trim();
      const password = signupForm.querySelector("input[name='pswd']").value;

      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate signup process
      console.log("Signing up:", { username, email, password });
      alert("Signup successful!");
      chk.checked = false; // switch to login view
    });

    // Login form submit event
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector("input[name='email']").value.trim();
      const password = loginForm.querySelector("input[name='pswd']").value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Simulate login process
      console.log("Logging in:", { email, password });
      alert("Login successful!");
      window.location.href = "home.html";
    });
  });

