# PHP and MySQL Sign Up and Login Form

### Sign-Up and Login Form with Client-Side Validation using PHP, MySQL, HTML, CSS, and JavaScript
**Technologies Used:**  
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  

---

### **Project Overview**  
This project involves creating a **Sign-Up and Login Form** with robust client-side validation, focusing on security, usability, and functionality. The form handles user registration and authentication while ensuring data integrity and a seamless user experience.  

### **Features**  

#### 1. **Sign-Up Form:**  
- **Input Fields:**
  - Full Name  
  - Email Address  
  - Password  
  - Confirm Password  

- **Client-Side Validation (JavaScript):**
  - **Full Name:** Checks for alphabetic characters only and a minimum length.  
  - **Email:** Validates the format using a regex pattern to ensure a proper email structure.  
  - **Password:** 
    - Minimum of 8 characters.  
    - Must include at least one uppercase letter, one number, and one special character.  
  - **Confirm Password:** Checks that it matches the password field.  

- **Error Handling:**
  - Real-time error messages for invalid inputs.  
  - Dynamic highlighting of erroneous fields.  

- **Secure Data Transmission:**
  - Inputs are sanitized and validated on the server side before insertion into the MySQL database.  

#### 2. **Login Form:**  
- **Input Fields:**
  - Email Address  
  - Password  

- **Client-Side Validation:**
  - Ensures fields are not empty and email format is correct.  
  - Password length requirements checked dynamically.  

- **Error Handling:**
  - Displays specific messages for invalid credentials or unregistered email addresses.  

#### 3. **Authentication Workflow:**  
- Passwords are hashed using PHP’s **password_hash()** function before being stored in the database, ensuring security.  
- During login, the **password_verify()** function is used to validate credentials.  

#### 4. **Database Design (MySQL):**  
- **Users Table:**
  - **Columns:**  
    - `id` (Primary Key, Auto Increment)  
    - `name` (VARCHAR, stores user name)  
    - `email` (VARCHAR, unique, stores email address)  
    - `password_hash` (VARCHAR, stores hashed passwords)  

#### 5. **Responsive Design:**  
- The forms are fully responsive, ensuring usability on all devices (desktop, tablet, and mobile).  
- Styled using CSS for clean, modern aesthetics.  

#### 6. **User Experience Enhancements:**  
- Smooth transitions between sign-up and login forms.  
- Interactive feedback on successful or failed operations (e.g., animations, color changes).  

---

### **Project Workflow**  
1. **User Visits Form Page:**
   - Redirected to login form by default.  
   - Can switch to sign-up form seamlessly using a toggle button.  

2. **Sign-Up:**
   - Client-side JavaScript validates all inputs before submission.  
   - PHP validates and sanitizes data again server-side.  
   - User details are stored in the MySQL database after successful validation.  

3. **Login:**
   - Email and password are checked against stored database records.  
   - Valid users are granted access to a dashboard or protected content.  

4. **Error Management:**
   - Feedback is provided for both client-side and server-side errors.  
   - Secure error messages ensure no sensitive information is exposed to attackers.  

---

### **Key Challenges Addressed:**  
- Prevented SQL injection using prepared statements in PHP.  
- Ensured security for passwords with robust hashing techniques.  
- Developed an intuitive and aesthetically pleasing UI for a better user experience.  

---

This project demonstrates expertise in full-stack development, focusing on authentication workflows, security best practices, and user-friendly designs. It's an excellent example of implementing essential features for any web application.
