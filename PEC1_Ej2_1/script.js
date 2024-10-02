document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Clear previous error messages
    document.getElementById('age-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('confirm-password-error').innerText = '';
  
    let valid = true;
  
    // Age validation
    if (age < 0 || age >= 1000) {
      document.getElementById('age-error').innerText = 'Age must be between 0 and 999';
      valid = false;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('password-error').innerText = 'Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.';
      valid = false;
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
      valid = false;
    }
  
    if (valid) {
      alert('Form submitted successfully!');
    }
  });
  