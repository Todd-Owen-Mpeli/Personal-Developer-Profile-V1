/*==================== ABOUT ME SECTION (Profile Picture change) ====================*/
function setNewImage() {
	document.getElementById("profile-picture").src =
		"/assets/images/880px x 600px 2.png";
}

function setOldImage() {
	document.getElementById("profile-picture").src =
		"/assets/images/880px x 600px 6.png";
}
/*==================== CONTACT ME SECTION ====================*/
// Array of objects info
let contactListObjects = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addContactDetails = (ev) => {
	// This (ev) prevents the web browser from naturally submitting the form
	// And then resetting the data inserted in the form.
	ev.preventDefault();

	// Objects containing the info inserted into the text-box
	const firstNameTemp = document.getElementById("firstName");
	const surnameTemp = document.getElementById("surname");
	const emailAddressTemp = document.getElementById("emailAddress");
	const companyNameTemp = document.getElementById("companyName");
	const messageTextbox = document.getElementById("messageTextbox");

	// Error parameters
	if (firstNameTemp.value.length <= 1 || firstNameTemp.value.length >= 20) {
		const errorMessage = alert("Invalid First Name! Please try again.");
	} else {
		const firstName = firstNameTemp.value;
	}

	if (surnameTemp.value.length <= 1 || surnameTemp.value.length >= 20) {
		const errorMessage = alert("Invalid surname! Please try again.");
	} else {
		const surname = firstNameTemp.value;
	}

	if (
		emailAddressTemp.value.length <= 1 ||
		emailAddressTemp.value.length >= 30
	) {
		const errorMessage = alert("Invalid Email Address! Please try again.");
	} else {
		const emailAddress = firstNameTemp.value;
	}

	if (companyNameTemp.value.length <= 1 || companyNameTemp.value.length >= 20) {
		const errorMessage = alert("Invalid Company Name! Please try again.");
	} else {
		const companyName = firstNameTemp.value;
	}

	// Creating a Object
	let SenderInfo = {
		// Object properties
		id: Date.now(), // Primary Key
		firstName: firstName.value,
		surname: surname.value,
		emailAddress: emailAddress.value,
		companyName: companyName.value,
		message: messageTextbox.value,
	};

	// Add the 'SenderInfo' object into an array of objects
	contactListObjects.push(SenderInfo);
	document.forms[0].reset(); // Resets the contact me form for the next input data

	//Saving the 'contactListObjects' array to localStorage (Database)
	localStorage.setItem("MyMovieList", JSON.stringify(contactListObjects));
};
// Makes sure that the page is loaded before executing
document.addEventListener("DOMContentLoaded", () => {
	//  Wait for the 'Send message' button to be clicked
	//  Then executes the 'addContactDetails' function.
	document
		.getElementById("send-message-btn")
		.addEventListener("click", addContactDetails);
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navToggle) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DARK LIGHT THEME ====================*/
const icon = document.getElementById("checkbox");

// When dark mode button is clicked (moon button)
icon.onclick = function () {
	// Toggle ON the dark theme website mode
	document.body.classList.toggle("dark-theme");

	// And if the website dark theme Mode is active
	if (document.body.classList.contains("dark-theme")) {
		// Remove the dark theme button (Moon button)
		icon.src = "uil uil-moon";
	} else {
		// Remove the dark theme button (Moon button)
		icon.src = "uil uil-sun";
	}
};

/*======================================================================================*/
