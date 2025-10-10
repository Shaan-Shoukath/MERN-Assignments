// EmailJS Configuration Guide
// ===========================

// STEP 1: Replace these values with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account → General)
  PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your actual public key

  // Your Email Service ID (from Email Services)
  SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID", // Replace with your actual service ID

  // Your Email Template ID (from Email Templates)
  TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your actual template ID
};

// STEP 2: Update script.js with these values:
// 1. Replace "YOUR_PUBLIC_KEY" with EMAILJS_CONFIG.PUBLIC_KEY
// 2. Replace "YOUR_SERVICE_ID" with EMAILJS_CONFIG.SERVICE_ID
// 3. Replace "YOUR_TEMPLATE_ID" with EMAILJS_CONFIG.TEMPLATE_ID

// STEP 3: Email Template Variables
// Make sure your EmailJS template includes these variables:
// - {{customer_name}}     - Customer's full name
// - {{customer_email}}    - Customer's email address
// - {{customer_phone}}    - Customer's phone number
// - {{order_details}}     - List of services and quantities
// - {{total_amount}}      - Total cost of services

// Example Template:
/*
Subject: New Laundry Service Booking - {{customer_name}}

Hello {{customer_name}},

Thank you for booking our laundry service!

Customer Details:
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

Services Ordered:
{{order_details}}

Total Amount: ${{total_amount}}

We will contact you soon to confirm pickup details.

Best regards,
Laundry Service Team
*/

// STEP 4: Test the functionality
// 1. Add items to cart
// 2. Fill out the booking form
// 3. Click "Book Now"
// 4. Check your email for the confirmation

export default EMAILJS_CONFIG;
