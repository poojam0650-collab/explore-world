const selectedDestination =
    JSON.parse(localStorage.getItem("selectedDestination"));
// ===============================
// DESTINATION DATA
// ===============================

const destinations = [

    {
        name: "Bali",
        location: "Indonesia",
        category: "beach",
        price: 45000,
        image: "images/bali.jpg",
        description:
            "Relax on beautiful beaches, explore ancient temples and enjoy the amazing culture of Bali."
    },

    {
        name: "Paris",
        location: "France",
        category: "city",
        price: 80000,
        image: "images/paris.jpg",
        description:
            "Discover the Eiffel Tower, beautiful streets, museums and the romantic atmosphere of Paris."
    },

    {
        name: "Maldives",
        location: "Maldives",
        category: "beach",
        price: 55000,
        image: "images/maldives.jpg",
        description:
            "Enjoy crystal-clear water, beautiful islands and a peaceful tropical getaway."
    },

    {
        name: "Dubai",
        location: "United Arab Emirates",
        category: "city",
        price: 60000,
        image: "images/dubai.jpg",
        description:
            "Experience modern architecture, luxury shopping, desert adventures and exciting attractions."
    },

    {
        name: "Switzerland",
        location: "Europe",
        category: "nature",
        price: 90000,
        image: "images/switzerland.jpg",
        description:
            "Enjoy breathtaking mountains, beautiful lakes and charming villages surrounded by nature."
    },

    {
        name: "Manali",
        location: "India",
        category: "adventure",
        price: 25000,
        image: "images/manali.jpg",
        description:
            "Experience mountains, trekking, beautiful valleys and exciting adventure activities."
    }

];
// ===============================
// DISPLAY DESTINATIONS
// ===============================

const destinationContainer =
    document.getElementById("destinationContainer");


function displayDestinations(destinationList) {

    destinationContainer.innerHTML = "";
    if (destinationList.length === 0) {

    destinationContainer.innerHTML = `
        <div class="text-center">
            <h4>😕 No destinations found</h4>
            <p>Try searching for another destination.</p>
        </div>
    `;

    return;
}

    destinationList.forEach(function(destination) {

        const card = document.createElement("div");

        card.className = "col-md-4";

        card.innerHTML = `

            <div class="card h-100 shadow-sm">

                <img
                    src="${destination.image}"
                    class="card-img-top"
                    alt="${destination.name}">

                <div class="card-body">

                    <h5 class="card-title">
                        ${destination.name}
                    </h5>

                    <p class="card-text">
                        📍 ${destination.location}
                    </p>

                    <p class="card-text">
                        ${destination.description}
                    </p>

                    <button
                        class="btn btn-primary explore-destination"
                        data-destination="${destination.name}">

                        🔎 Explore

                    </button>

                </div>

            </div>

        `;

        destinationContainer.appendChild(card);

    });

}
displayDestinations(destinations);

// ===============================
// SEARCH + FILTER TOGETHER
// ===============================

function filterDestinations() {

    const searchText =
        destinationSearch.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;


    const filteredDestinations =
        destinations.filter(function(destination) {

            const matchesSearch =
                destination.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =
                selectedCategory === "all" ||
                destination.category === selectedCategory;


            return matchesSearch && matchesCategory;

        });


    displayDestinations(filteredDestinations);

}
// Search
destinationSearch.addEventListener("input", function() {

    filterDestinations();

});


// Category filter
categoryFilter.addEventListener("change", function() {

    filterDestinations();

});
// ===============================
// EXPLORE DESTINATION
// EVENT DELEGATION
// ===============================

destinationContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("explore-destination")) {

        const destinationName =
            event.target.getAttribute("data-destination");


        const selectedDestination =
            destinations.find(function(destination) {

                return destination.name === destinationName;

            });


        document.getElementById("modalDestinationName")
            .textContent = selectedDestination.name;

        document.getElementById("modalDestinationImage")
            .src = selectedDestination.image;

        document.getElementById("modalDestinationLocation")
            .textContent = selectedDestination.location;

        document.getElementById("modalDestinationDescription")
            .textContent = selectedDestination.description;

        document.getElementById("modalDestinationCategory")
            .textContent = selectedDestination.category;


        const modal =
            new bootstrap.Modal(
                document.getElementById("destinationModal")
            );

        modal.show();
        document.getElementById("destinationBookNow")
    .addEventListener("click", function() {
        localStorage.removeItem("selectedPackage");
        localStorage.setItem(
            "selectedDestination",
            JSON.stringify(selectedDestination)
        );

        window.location.href = "booking.html";
    });

    }

});
if (selectedDestination) {

    const destination =
        destinations.find(function(item) {
            return item.name === selectedDestination.name;
        });

    if (destination) {

        document.getElementById("modalDestinationName")
            .textContent = destination.name;

        document.getElementById("modalDestinationImage")
            .src = destination.image;

        document.getElementById("modalDestinationLocation")
            .textContent = destination.location;

        document.getElementById("modalDestinationDescription")
            .textContent = destination.description;

        document.getElementById("modalDestinationCategory")
            .textContent = destination.category;

        const modal =
            new bootstrap.Modal(
                document.getElementById("destinationModal")
            );

        modal.show();
        document.getElementById("destinationBookNow")
    .onclick = function() {

        localStorage.removeItem("selectedPackage");

        localStorage.setItem(
            "selectedDestination",
            JSON.stringify(destination)
        );

        window.location.href = "booking.html";
    };
    }

    
}
