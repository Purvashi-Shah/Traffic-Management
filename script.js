

// Get the traffic updates element
const trafficUpdates = document.getElementById("traffic-updates");

// Add a click event listener to the traffic updates element
trafficUpdates.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the clicked link
    const link = event.target;

    // Get the traffic update message
    const message = link.textContent + " - " + link.getAttribute("href");

    // Display the traffic update message
    alert(message);
});

// Get the email form element
const emailForm = document.querySelector("form");

// Add a submit event listener to the email form
emailForm.addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the email input element
    const emailInput = emailForm.querySelector('input[type="email"]');

    // Get the email value
    const email = emailInput.value;

    // Display a confirmation message
    alert("Thank you for subscribing to our traffic alerts. You will receive email notifications at " + email + ".");
});