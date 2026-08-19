// ===============================
// GET SELECTED PACKAGE
// ===============================
const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
// ===============================
// DISPLAY SELECTED PACKAGE
// ===============================

document.getElementById("bookingPackageName").textContent =
    selectedPackage.name;

document.getElementById("bookingDestination").textContent =
    selectedPackage.destination;

document.getElementById("bookingDuration").textContent =
    selectedPackage.duration;

document.getElementById("bookingPrice").textContent =
    selectedPackage.price.toLocaleString("en-IN");
// ===============================
// BOOKING FORM
// ===============================

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

   const fullName = document.getElementById("fullName").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const travelers = document.getElementById("travelers").value;
   const travelDate = document.getElementById("travelDate").value;
// ===============================
// SHOW BOOKING CONFIRMATION
// ===============================

document.getElementById("confirmName").textContent =
    fullName;

document.getElementById("confirmPackage").textContent =
    selectedPackage.name;

document.getElementById("confirmDestination").textContent =
    selectedPackage.destination;

document.getElementById("confirmTravelers").textContent =
    travelers;

document.getElementById("confirmDate").textContent =
    travelDate;

const totalPrice =
    selectedPackage.price * Number(travelers);

document.getElementById("confirmPrice").textContent =
    totalPrice.toLocaleString("en-IN");

const bookingId = "WW"+ Date.now();
document.getElementById("confirmBookingId").textContent = bookingId;
document.getElementById("bookingConfirmation")
    .classList.remove("d-none");

});