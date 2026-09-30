// ===============================
// PACKAGE DATA
// ===============================

const packages = [

    {
        name: "Bali Paradise",
        destination: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: 25000,
        image: "images/bali.jpg",
        description:
            "Enjoy beautiful beaches, temples, local culture and unforgettable experiences in Bali."
    },

    {
        name: "Paris Explorer",
        destination: "Paris, France",
        duration: "6 Days / 5 Nights",
        price: 50000,
        image: "images/paris.jpg",
        description:
            "Explore the Eiffel Tower, famous landmarks, beautiful streets and the culture of Paris."
    },

    {
        name: "Maldives Escape",
        destination: "Maldives",
        duration: "4 Days / 3 Nights",
        price: 35000,
        image: "images/maldives.jpg",
        description:
            "Relax on beautiful beaches, enjoy crystal-clear water and experience a peaceful island getaway."
    }
];
// ===============================
// DISPLAY PACKAGES
// ===============================

const packageContainer =
    document.getElementById("packageContainer");

function displayPackages(packageList) {

    packageContainer.innerHTML = "";

    packageList.forEach(function(packageItem) {

        const card = document.createElement("div");

        card.className = "col-md-4";

        card.innerHTML = `
            <div class="card h-100 shadow-sm">

                <img
                    src="${packageItem.image}"
                    class="card-img-top"
                    alt="${packageItem.name}">

                <div class="card-body">

                    <h4 class="card-title">
                        ${packageItem.name}
                    </h4>

                    <p>
                        📍 ${packageItem.destination}
                    </p>

                    <p>
                        📅 ${packageItem.duration}
                    </p>

                    <h5>
                        💰 ₹${packageItem.price.toLocaleString("en-IN")}
                    </h5>

                    <button
                        class="btn btn-primary explore-package"
                        data-package="${packageItem.name}">
                        🔎 Explore Package
                    </button>

                </div>

            </div>
        `;

        packageContainer.appendChild(card);
    });
}

displayPackages(packages);
// ===============================
// EXPLORE PACKAGE BUTTON
// ===============================

packageContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("explore-package")) {

        const packageName =
            event.target.getAttribute("data-package");

        const selectedPackage =
            packages.find(function(packageItem) {

                return packageItem.name === packageName;

            });

        localStorage.removeItem("selectedDestination");

        localStorage.setItem(
            "selectedPackage",
            JSON.stringify(selectedPackage)
        );

        document.getElementById("modalPackageName").textContent =
    selectedPackage.name;

document.getElementById("modalPackageImage").src =
    selectedPackage.image;

document.getElementById("modalDestination").textContent =
    selectedPackage.destination;

document.getElementById("modalDuration").textContent =
    selectedPackage.duration;

document.getElementById("modalPrice").textContent =
    selectedPackage.price.toLocaleString("en-IN");

document.getElementById("modalDescription").textContent =
    selectedPackage.description;


const modal =
    new bootstrap.Modal(
        document.getElementById("packageModal")
    );

modal.show();
// ===============================
// BOOK NOW
// ===============================

document.getElementById("bookPackageBtn")
    .onclick = function() {

        localStorage.removeItem("selectedDestination");

        localStorage.setItem(
            "selectedPackage",
            JSON.stringify(selectedPackage)
        );

        window.location.href = "booking.html";
    };
    }

});