//function validation()
function validation() {
  if (document.Fromfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  }
   
  else if (document.Fromfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Email*";
    return false;
  }
  else if (document.Fromfill.Password.value== "") {
    document.getElementById("result").innerHTML = "Enter Your Passwords*";
    return false;
  }
  else if (document.Fromfill.CPassword.value== document.Fromfill.Password.value) {
    alert('Sign up successful!');
    return false;
  }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Store user input in localStorage (for simplicity; use a server for real applications)
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Get stored credentials from localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Check if login credentials match stored credentials
  if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Login successful!');
      window.location.href = 'main.html'; // Redirect to the next page
  } else {
      alert('Invalid credentials. Please try again.');
  }
});

// function to go next page
function goToPage(page) {
  window.location.href = page;
}
