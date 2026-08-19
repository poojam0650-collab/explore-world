// ===============================
//  DESTINATION DATA
// ===============================

const destinations = [
    {
        name: "Bali",
        country: "Indonesia",
        price: 25000,
        image: "images/bali.jpg"
    },

    {
        name: "Paris",
        country: "France",
        price: 50000,
        image: "images/paris.jpg"
    },

    {
        name: "Maldives",
        country: "Maldives",
        price: 35000,
        image: "images/maldives.jpg"
    },

    {
        name: "Dubai",
        country: "UAE",
        price: 30000,
        image: "images/dubai.jpg"
    },

    {
        name: "Switzerland",
        country: "Switzerland",
        price: 60000,
        image: "images/switzerland.jpg"
    },

    {
        name: "London",
        country: "United Kingdom",
        price: 55000,
        image: "images/london.jpg"
    }
];

// ===============================
//  DISPLAY DESTINATION
// ===============================

const destinationContainer =
    document.getElementById("destinationContainer");
function displayDestinations(destinationList) {

    destinationContainer.innerHTML = "";

    destinationList.forEach(function(destination) {

        const card = document.createElement("div");

        card.className = "col-md-4";

        card.innerHTML = `
        
            <div class="destination-card">

                <img src="${destination.image}"
                     alt="${destination.name}">

                <div class="destination-content">

                    <h4>${destination.name}</h4>

                    <p class="location">
                        <i class="bi bi-geo-alt"></i>
                        ${destination.country}
                    </p>

                    <p class="price">
                        Starting from ₹${destination.price.toLocaleString("en-IN")}
                    </p>

                    <button class="btn btn-primary">
                        Explore
                    </button>

                </div>

            </div>
        
        `;

        destinationContainer.appendChild(card);
    });
}
displayDestinations(destinations);
const searchInput =
    document.getElementById("destinationSearch");

const searchButton =
    document.getElementById("searchBtn");

const searchMessage =
    document.getElementById("searchMessage");


searchButton.addEventListener("click", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();
    if (searchText === "") {

        displayDestinations(destinations);

        searchMessage.textContent =
            "Showing all destinations.";

        return;
    }
    const filteredDestinations =
        destinations.filter(function(destination) {

            return (
                destination.name.toLowerCase().includes(searchText) ||
                destination.country.toLowerCase().includes(searchText)
            );

        });
    displayDestinations(filteredDestinations);
    if (filteredDestinations.length > 0) {

        searchMessage.textContent =
            `${filteredDestinations.length} destination(s) found.`;

    } else {

        searchMessage.textContent =
            "No destination found.";

    }

});
searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});
const exploreButton =
    document.getElementById("exploreBtn");


exploreButton.addEventListener("click", function() {

    document.getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });

});
// ===============================
//  TOUR PACKAGE DATA
// ===============================

const packages = [
    {
        name: "Bali Paradise",
        destination: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: 25000,
        image: "images/bali.jpg",
        description: "Enjoy beautiful beaches, temples, local culture and unforgettable experience in Bali"
    },

    {
        name: "Paris Explorer",
        destination: "Paris, France",
        duration: "6 Days / 5 Nights",
        price: 50000,
        image: "images/paris.jpg",
        description: "Explore the Eiffel Tower, famous landmarks, beautiful streets and the culture of paris"
    },

    {
        name: "Maldives Escape",
        destination: "Maldives",
        duration: "4 Days / 3 Nights",
        price: 35000,
        image: "images/maldives.jpg",
        description: "Relax on beautiful beaches, enjoy crystal-clear water and experience a peaceful island getaway"
    }
];

// ===============================
//  DISPLAY TOUR PACKAGES
// ===============================

const packageContainer =
    document.getElementById("packageContainer");


function displayPackages(packageList) {

    packageContainer.innerHTML = "";

    packageList.forEach(function(packageItem) {

        const card = document.createElement("div");

        card.className = "col-md-4";

        card.innerHTML = `
        
            <div class="package-card">

                <img src="${packageItem.image}"
                     alt="${packageItem.name}">

                <div class="package-content">

                    <h4>${packageItem.name}</h4>

                    <p>
                        <i class="bi bi-geo-alt"></i>
                        ${packageItem.destination}
                    </p>

                    <p>
                        <i class="bi bi-calendar3"></i>
                        ${packageItem.duration}
                    </p>

                    <p class="package-price">
                        ₹${packageItem.price.toLocaleString("en-IN")}
                    </p>

                    <button class="btn btn-primary explore-package"
                    data-package="${packageItem.name}">
                    Explore Package
                    </button>

                </div>

            </div>
        
        `;

        packageContainer.appendChild(card);

    });
}
displayPackages(packages);
// ===============================
// 10. PACKAGE DETAILS MODAL
// ===============================

const explorePackageButtons =
    document.querySelectorAll(".explore-package");

explorePackageButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const packageName =
            button.getAttribute("data-package");

        const selectedPackage =
            packages.find(function(packageItem) {

                return packageItem.name === packageName;

            });
            localStorage.setItem(
                "selectedPackage",
                JSON.stringify(selectedPackage)
            );
// ===============================
// BOOK NOW BUTTON
// ===============================

const bookPackageButton =
    document.getElementById("bookPackageBtn");


    bookPackageButton.addEventListener("click", function() {

    window.location.href = "booking.html";

    });


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

    });

});