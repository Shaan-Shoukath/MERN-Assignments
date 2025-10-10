# 🔐 EmailJS Setup Instructions

## 🚨 Important Security Notice
The EmailJS credentials have been removed from the repository for security reasons. You need to configure them locally.

## 📋 Setup Steps

### 1. **Get Your EmailJS Credentials**
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Get your **Public Key** from Account → General
- Get your **Service ID** from Email Services
- Get your **Template ID** from Email Templates

### 2. **Configure the Application**
Replace the placeholder values in these files with your actual credentials:

#### **File: `script.js` (lines 2-6)**
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here", // Replace this
  SERVICE_ID: "your_actual_service_id_here", // Replace this
  TEMPLATE_ID: "your_actual_template_id_here", // Replace this
};
```

#### **File: `test-email.html` (around line 85)**
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "your_actual_service_id_here", 
  TEMPLATE_ID: "your_actual_template_id_here"
};
```

#### **File: `debug-emailjs.html` (around line 85)**
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "your_actual_service_id_here",
  TEMPLATE_ID: "your_actual_template_id_here"
};
```

### 3. **EmailJS Template Configuration**
Make sure your EmailJS template has:

**To Email:** `{{customer_email}}`
**Subject:** `New Laundry Service Booking - {{customer_name}}`
**Content:** Must include these variables:
- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{order_details}}`
- `{{total_amount}}`

### 4. **Test the Setup**
1. Open `debug-emailjs.html` in your browser
2. Run all tests to verify configuration
3. Send a test email
4. If successful, the main application will work

### 5. **Backup Your Credentials**
- Keep a local copy of your credentials in `emailjs-config.local.js`
- This file is ignored by Git and won't be committed

## 🔒 Security Best Practices
- ✅ Never commit API keys to Git
- ✅ Use environment variables in production
- ✅ Keep credentials in ignored files
- ✅ Regularly rotate API keys

## 🆘 Need Help?
- Check `EMAILJS_SETUP_GUIDE.md` for detailed setup instructions
- Use `debug-emailjs.html` to troubleshoot issues
- Refer to `emailjs-config.local.js` for your actual credentials backup