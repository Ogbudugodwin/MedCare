const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// Fade-In On Scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Contact Form Validation
document.querySelector("#contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  const msg = document.querySelector("#form-msg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.className = "text-red-500 text-sm text-center";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = "Enter a valid email address.";
    msg.className = "text-red-500 text-sm text-center";
  } else {
    msg.textContent = "Thank you! We’ll get back to you soon.";
    msg.className = "text-green-500 text-sm text-center";
    this.reset();
  }
});


document.querySelector(".signup-button").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.querySelector("#Email").value.trim();

  if (!email) {
    alert("Please fill the field");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("You have successfully signed up for the Newsletter!");
    document.querySelector("#Email").value = "";
  }
});
 