// ===============================
// GET SELECTED PACKAGE
// ===============================
const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
const selectedDestination = JSON.parse(localStorage.getItem("selectedDestination"));

// ===============================
// PREVENT PAST TRAVEL DATES
// ===============================

const travelDateInput =
    document.getElementById("travelDate");

const today =
   new Date().toISOString().split("T")[0];

travelDateInput.setAttribute("min", today);

// ===============================
// DISPLAY SELECTED PACKAGE
// ===============================
if(selectedPackage){
document.getElementById("bookingPackageName").textContent =
    selectedPackage.name;

document.getElementById("bookingDestination").textContent =
    selectedPackage.destination;

document.getElementById("bookingDuration").textContent =
    selectedPackage.duration;

document.getElementById("bookingPrice").textContent =
    selectedPackage.price.toLocaleString("en-IN");
}
else if(selectedDestination){
    document.getElementById("bookingPackageName").textContent =
        selectedDestination.name;

    document.getElementById("bookingDestination").textContent =
        selectedDestination.location;

    document.getElementById("bookingDuration").textContent =
        "Destination Trip";

    document.getElementById("bookingPrice").textContent =
         selectedDestination.price.toLocaleString("en-IN")
}
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

if(selectedPackage) {
document.getElementById("confirmPackage").textContent =
    selectedPackage.name;

document.getElementById("confirmDestination").textContent =
    selectedPackage.destination;
}
else if(selectedDestination) {
 document.getElementById("confirmPackage").textContent =
    selectedDestination.name;

document.getElementById("confirmDestination").textContent =
    selectedDestination.location;   
}
document.getElementById("confirmPackage").parentElement.querySelector("strong").textContent =
    "🌍 Destinations";

document.getElementById("confirmTravelers").textContent =
    travelers;

document.getElementById("confirmDate").textContent =
    travelDate;

let price;

if (selectedPackage) {
    price = selectedPackage.price;
} else if (selectedDestination) {
    price = selectedDestination.price;
}

const totalPrice =
    price * Number(travelers);

document.getElementById("confirmPrice").textContent =
    totalPrice.toLocaleString("en-IN");

const bookingId = "WW"+ Date.now();
document.getElementById("confirmBookingId").textContent = bookingId;
document.getElementById("bookingConfirmation")
    .classList.remove("d-none");
    localStorage.removeItem("selectedPackage");
    localStorage.removeItem("selectedDestination");

});