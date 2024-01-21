document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the form fields
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Alert the user with the email and password
  alert("Email: " + email + "\nPassword: " + password);
});
