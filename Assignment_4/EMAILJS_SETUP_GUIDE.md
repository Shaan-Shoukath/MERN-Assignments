# 📧 EmailJS Setup Guide for Assignment 4

## 🚨 **Current Issue**
Your email confirmation is not working because EmailJS credentials are not configured. The placeholders need to be replaced with actual values.

## 🔧 **Step-by-Step Fix**

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **Step 2: Set Up Email Service**
1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other provider
4. Follow the connection instructions
5. **IMPORTANT**: Copy the **Service ID** (looks like `service_xxxxxxx`)

### **Step 3: Create Email Template**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up the template:
   - **Template Name**: `laundry_booking_confirmation`
   - **Subject**: `New Laundry Service Booking - {{customer_name}}`
   - **Content**:
   ```
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
   ```
4. **IMPORTANT**: Copy the **Template ID** (looks like `template_xxxxxxx`)

### **Step 4: Get Public Key**
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like `xxxxxxxxxxxxxxx`)
3. **IMPORTANT**: Copy this key

### **Step 5: Update Your Code**
Open `Assignment_4/script.js` and find this section (around line 2-6):

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_ACTUAL_PUBLIC_KEY", // Replace this
  SERVICE_ID: "YOUR_ACTUAL_SERVICE_ID", // Replace this
  TEMPLATE_ID: "YOUR_ACTUAL_TEMPLATE_ID", // Replace this
};
```

Replace with your actual values:
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "service_xxxxxxx",
  TEMPLATE_ID: "template_xxxxxxx",
};
```

### **Step 6: Test the Setup**
1. Open `Assignment_4/index.html` in your browser
2. Add some services to cart
3. Fill out the booking form with a **real email address**
4. Click "Book Now"
5. Check your email (including spam folder)

## 🐛 **Troubleshooting**

### **If emails still don't work:**

1. **Check Browser Console**:
   - Press F12 → Console tab
   - Look for error messages
   - Common errors:
     - `Invalid public key`
     - `Service not found`
     - `Template not found`

2. **Verify Template Variables**:
   Make sure your EmailJS template includes these variables:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{customer_phone}}`
   - `{{order_details}}`
   - `{{total_amount}}`

3. **Check Email Service Status**:
   - Go to EmailJS dashboard
   - Check if your email service is connected
   - Test the connection

4. **Gmail Users**:
   - Make sure 2-factor authentication is enabled
   - Use an App Password if required

### **Common Issues:**

❌ **"Invalid public key"** → Double-check your public key
❌ **"Service not found"** → Verify service ID is correct
❌ **"Template not found"** → Check template ID
❌ **Emails go to spam** → Check spam folder, add sender to contacts
❌ **No emails received** → Verify email service is properly connected

## 📝 **Quick Test**

After setup, you can test with these steps:
1. Add "Wash & Fold" service to cart
2. Fill form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Phone: 123-456-7890
3. Click "Book Now"
4. Check console for success/error messages
5. Check email within 1-2 minutes

## 🎯 **Expected Result**

When working correctly:
- Console shows: "Email sent successfully"
- You receive an email with booking details
- Confirmation message appears on the website
- Form clears automatically

## 📞 **Still Need Help?**

If you're still having issues:
1. Check the browser console for specific error messages
2. Verify all three credentials are correctly entered
3. Make sure your email service is properly connected in EmailJS
4. Try with a different email address
5. Check if your email provider is blocking the emails

---

**Remember**: EmailJS has a free tier limit of 200 emails per month, which is plenty for testing!