// Function to validate email address format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Example usage:
const email = "example@domain.com";
if (validateEmail(email)) {
    console.log("Valid email address.");
} else {
    console.log("Invalid email address.");
}

// References to elements
const home = document.getElementById('home');
const signupModal = document.getElementById('signup');
const loginModal = document.getElementById('login');
const roleSelect = document.getElementById('role');
const lawyerCredentials = document.getElementById('lawyerCredentials');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const redirectToLogin = document.querySelector('.redirect-link a');

// Blur and Show Signup Modal
function showSignup() {
  home.style.filter = 'blur(5px)';
  signupModal.style.display = 'block';
}

// Switch to Login Modal
redirectToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.style.display = 'none';
  loginModal.style.display = 'flex';
});

// Close Modal (helper function if needed)
function closeModals() {
  home.style.filter = 'none';
  signupModal.style.display = 'none';
  loginModal.style.display = 'none';
}

// Role Selection: Show Lawyer Credentials
roleSelect.addEventListener('change', () => {
  if (roleSelect.value === 'lawyer') {
    lawyerCredentials.style.display = 'block';
  } else {
    lawyerCredentials.style.display = 'none';
  }
});

// Handle Signup Submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const role = roleSelect.value;
  if (role === 'client') {
    window.location.href = 'client.html';
  } else if (role === 'lawyer') {
    window.location.href = 'lawyer.html';
  }
});

// Handle Login Submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const role = document.getElementById('userType').value;
  if (role === 'client') {
    window.location.href = 'client.html';
  } else if (role === 'lawyer') {
    window.location.href = 'lawyer.html';
  }
});
