// This file is the only JavaScript the site uses.
// It does two jobs: open/close the mobile menu, and check the contact form.

// Find the Menu button in the header (it only shows on small screens).
var menuButton = document.querySelector(".menu-button");

// Find the list of page links that we hide or show on small screens.
var navLinks = document.querySelector(".site-nav");

// Only set up the menu if this page has both the button and the nav.
if (menuButton && navLinks) {
  // When the user clicks the Menu button, run this function.
  menuButton.addEventListener("click", function () {
    // Check whether the nav currently has the "is-open" class.
    var isOpen = navLinks.classList.contains("is-open");

    // If the menu is already open, close it.
    if (isOpen) {
      // Remove the class so the CSS hides the menu again.
      navLinks.classList.remove("is-open");
      // Tell screen readers that the menu is now closed.
      menuButton.setAttribute("aria-expanded", "false");
    } else {
      // Add the class so the CSS shows the menu.
      navLinks.classList.add("is-open");
      // Tell screen readers that the menu is now open.
      menuButton.setAttribute("aria-expanded", "true");
    }
  });
}

// Find every link inside the navigation list.
var navLinkItems = document.querySelectorAll(".site-nav a");

// Walk through those links one at a time.
for (var i = 0; i < navLinkItems.length; i++) {
  // When a nav link is clicked, close the mobile menu.
  navLinkItems[i].addEventListener("click", function () {
    // If the nav is on the page, hide it.
    if (navLinks) {
      // Remove the open class so the menu tucks away.
      navLinks.classList.remove("is-open");
    }
    // If the button is on the page, mark it closed.
    if (menuButton) {
      // Tell screen readers the menu is closed.
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// Find the contact form. Other pages do not have this, and that is fine.
var contactForm = document.querySelector("#contact-form");

// Find the red error box under the form heading.
var errorBox = document.querySelector("#form-error");

// Find the thank-you message that we show after a good submit.
var thanksBox = document.querySelector("#form-thanks");

// Only set up form checks if this page has the contact form.
if (contactForm) {
  // When the user clicks Send request, run this function.
  contactForm.addEventListener("submit", function (event) {
    // Stop the browser from trying to send the form to a server.
    event.preventDefault();

    // Read whatever the user typed in the Name box.
    var nameField = document.querySelector("#name");
    // Read whatever the user typed in the Phone box.
    var phoneField = document.querySelector("#phone");
    // Read whatever the user typed in the ZIP box.
    var zipField = document.querySelector("#zip");

    // Get the text from the Name box and drop extra spaces on the ends.
    var nameValue = nameField.value.trim();
    // Get the text from the Phone box and drop extra spaces on the ends.
    var phoneValue = phoneField.value.trim();
    // Get the text from the ZIP box and drop extra spaces on the ends.
    var zipValue = zipField.value.trim();

    // If name is empty, or phone is empty, or ZIP is empty, show an error.
    if (nameValue === "" || phoneValue === "" || zipValue === "") {
      // Put a plain English message in the error box.
      errorBox.textContent = "Please fill in your name, phone number, and ZIP code.";
      // Make the error box visible.
      errorBox.hidden = false;
      // Stop here. Do not hide the form. Do not show thanks.
      return;
    }

    // Hide the error box in case it was showing from an earlier try.
    errorBox.hidden = true;
    // Hide the form so the user does not send it twice.
    contactForm.hidden = true;
    // Show the thank-you message instead of the form.
    thanksBox.hidden = false;
  });
}
