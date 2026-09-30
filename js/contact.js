const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value;

    const email =
        document.getElementById("contactEmail").value;

    const message =
        document.getElementById("contactMessage").value;

    alert(
        "Thank you, " + name +
        "! Your message has been sent successfully."
    );

    contactForm.reset();

});