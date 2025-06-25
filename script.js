// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    let errorMsg = '';

    if (!name.value.trim()) {
      errorMsg += 'Please enter your name.\n';
    }
    if (!email.value.trim()) {
      errorMsg += 'Please enter your email.\n';
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      errorMsg += 'Please enter a valid email address.\n';
    }
    if (!message.value.trim()) {
      errorMsg += 'Please enter your message.\n';
    }

    if (errorMsg) {
      alert(errorMsg);
      e.preventDefault();
    }
  });
}

function toggleMenu() {
  const menubtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menubtn.classList.toggle("active");
  navigation.classList.toggle("active")
}
