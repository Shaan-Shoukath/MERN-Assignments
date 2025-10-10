// EmailJS Configuration - Replace with your actual credentials
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS Public Key
  SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS Service ID
  TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS Template ID
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Services data
const services = [
  {
    id: 1,
    name: "Wash & Fold",
    price: 15.99,
  },
  {
    id: 2,
    name: "Dry Cleaning",
    price: 25.99,
  },
  {
    id: 3,
    name: "Ironing Service",
    price: 12.99,
  },
  {
    id: 4,
    name: "Stain Removal",
    price: 18.99,
  },
];

// Cart management
let cart = [];

function addToCart(serviceId) {
  const service = services.find((s) => s.id === serviceId);
  if (service) {
    const existingItem = cart.find((item) => item.id === serviceId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: service.id,
        name: service.name,
        price: service.price,
        quantity: 1,
      });
    }
    updateCartDisplay();
  }
}

function removeFromCart(serviceId) {
  cart = cart.filter((item) => item.id !== serviceId);
  updateCartDisplay();
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartDisplay() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalAmountElement = document.querySelector(".total-amount");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">No added items</p>';
    totalAmountElement.innerHTML = "<strong>Total: $0.00</strong>";
  } else {
    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <span class="cart-item-name">${item.name} (x${item.quantity})</span>
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(
            2
          )}</span>
        </div>
      `
      )
      .join("");
    totalAmountElement.innerHTML = `<strong>Total: $${calculateTotal().toFixed(
      2
    )}</strong>`;
  }
}

// Form validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

function validateForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  let isValid = true;
  let errorMessage = "";

  if (!fullName) {
    errorMessage += "Full name is required.\n";
    isValid = false;
  }

  if (!email) {
    errorMessage += "Email is required.\n";
    isValid = false;
  } else if (!validateEmail(email)) {
    errorMessage += "Please enter a valid email address.\n";
    isValid = false;
  }

  if (!phone) {
    errorMessage += "Phone number is required.\n";
    isValid = false;
  } else if (!validatePhone(phone)) {
    errorMessage += "Please enter a valid phone number.\n";
    isValid = false;
  }

  if (cart.length === 0) {
    errorMessage += "Please add at least one service to your cart.\n";
    isValid = false;
  }

  if (!isValid) {
    alert(errorMessage);
  }

  return isValid;
}

// Email sending functionality
function sendBookingEmail() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const orderDetails = cart
    .map(
      (item) =>
        `${item.name} (x${item.quantity}) - $${(
          item.price * item.quantity
        ).toFixed(2)}`
    )
    .join("\n");

  const emailParams = {
    customer_name: fullName,
    customer_email: email,
    customer_phone: phone,
    order_details: orderDetails,
    total_amount: calculateTotal().toFixed(2),
  };

  // Debug logging
  console.log("📧 EmailJS Configuration:");
  console.log("- Public Key:", EMAILJS_CONFIG.PUBLIC_KEY);
  console.log("- Service ID:", EMAILJS_CONFIG.SERVICE_ID);
  console.log("- Template ID:", EMAILJS_CONFIG.TEMPLATE_ID);
  console.log("📋 Email Parameters:", emailParams);

  // Use configuration values
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    emailParams
  );
}

function showConfirmationMessage() {
  const confirmationMessage = document.querySelector(".confirmation-message");
  confirmationMessage.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 5000);
}

function clearForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

// Initialize button visibility
function initializeServiceButtons() {
  document.querySelectorAll(".service-item").forEach((serviceItem) => {
    const addButton = serviceItem.querySelector(".add-item");
    const removeButton = serviceItem.querySelector(".remove-item");

    // Show add button by default, hide remove button
    addButton.style.display = "inline-block";
    removeButton.style.display = "none";
  });
}

// Toggle button visibility
function toggleServiceButtons(serviceItem, showRemove) {
  const addButton = serviceItem.querySelector(".add-item");
  const removeButton = serviceItem.querySelector(".remove-item");

  if (showRemove) {
    addButton.style.display = "none";
    removeButton.style.display = "inline-block";
  } else {
    addButton.style.display = "inline-block";
    removeButton.style.display = "none";
  }
}

// Initialize all event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize button visibility
  initializeServiceButtons();
  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Close mobile menu if open
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Mobile hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Hero CTA button scroll to booking services
  const ctaButton = document.querySelector(".cta-button");
  ctaButton.addEventListener("click", function () {
    const bookingSection = document.querySelector("#booking-services");
    if (bookingSection) {
      const offsetTop = bookingSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });

  // Active navigation highlighting on scroll
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Add event listeners to service buttons
  document.querySelectorAll(".add-item").forEach((button) => {
    button.addEventListener("click", function () {
      const serviceItem = this.closest(".service-item");
      const serviceId = parseInt(serviceItem.dataset.serviceId);
      addToCart(serviceId);
      // Toggle to show remove button
      toggleServiceButtons(serviceItem, true);
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", function () {
      const serviceItem = this.closest(".service-item");
      const serviceId = parseInt(serviceItem.dataset.serviceId);
      removeFromCart(serviceId);
      // Toggle to show add button
      toggleServiceButtons(serviceItem, false);
    });
  });

  // Book Now button functionality
  document
    .querySelector(".book-now-btn")
    .addEventListener("click", function () {
      if (validateForm()) {
        const button = this;
        button.disabled = true;
        button.textContent = "Sending...";

        // Check if EmailJS is properly configured
        if (emailjs && typeof emailjs.send === "function") {
          sendBookingEmail()
            .then(function (response) {
              console.log("Email sent successfully:", response);
              showConfirmationMessage();
              clearForm();
              cart = [];
              updateCartDisplay();
            })
            .catch(function (error) {
              console.error("Email sending failed:", error);

              // Show specific error message for debugging
              let errorMessage = "Email sending failed: ";
              if (error.text) {
                errorMessage += error.text;
              } else if (error.message) {
                errorMessage += error.message;
              } else {
                errorMessage += "Unknown error";
              }

              alert(
                errorMessage + "\n\nPlease check the console for more details."
              );

              // Still show confirmation message
              showConfirmationMessage();
              clearForm();
              cart = [];
              updateCartDisplay();
            })
            .finally(function () {
              button.disabled = false;
              button.textContent = "Book Now";
            });
        } else {
          // EmailJS not configured - show confirmation anyway
          console.log("EmailJS not configured - showing confirmation message");
          showConfirmationMessage();
          clearForm();
          cart = [];
          updateCartDisplay();
          button.disabled = false;
          button.textContent = "Book Now";
        }
      }
    });

  // Newsletter subscription functionality
  document
    .querySelector(".subscribe-btn")
    .addEventListener("click", function () {
      const name = document.getElementById("newsletterName").value.trim();
      const email = document.getElementById("newsletterEmail").value.trim();

      if (!name || !email) {
        alert("Please fill in both name and email fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Show confirmation message
      const confirmationMessage = document.querySelector(
        ".newsletter-confirmation"
      );
      confirmationMessage.style.display = "block";

      // Clear form
      document.getElementById("newsletterName").value = "";
      document.getElementById("newsletterEmail").value = "";

      // Hide confirmation after 3 seconds
      setTimeout(() => {
        confirmationMessage.style.display = "none";
      }, 3000);
    });
});
