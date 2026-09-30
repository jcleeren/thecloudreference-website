// ---------------------------------------------------------------
// FORM SETUP: paste your free Web3Forms access key between the quotes.
// Get one at https://web3forms.com (enter the email address that
// should receive the messages; the key arrives by email).
// ---------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY = "";

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Contact and application forms
document.querySelectorAll("form[data-web3forms]").forEach((form) => {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      status.className = "form-status err";
      status.textContent = "This form is not connected yet. Please contact us on LinkedIn in the meantime.";
      return;
    }
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      status.className = "form-status ok";
      status.textContent = "Thank you! Your message has been sent. We'll get back to you soon.";
    } catch (err) {
      status.className = "form-status err";
      status.textContent = "Sorry, something went wrong. Please try again later.";
    } finally {
      button.disabled = false;
    }
  });
});
