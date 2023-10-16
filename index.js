document.addEventListener("DOMContentLoaded", function () {
  // Get references to the country and state dropdowns
  const countryDropdown = document.getElementById("country");
  const stateDropdown = document.getElementById("state");

  // Define state options for each country
  const stateOptions = {
      "Select Country": ["Select State"],
      Nigeria: ["Lagos", "Abuja", "Kano"],
      Ghana: ["Accra", "Kumasi", "Takoradi"],
      UnitedStates: ["New York", "Los Angeles", "Chicago"],
      Canada: ["Toronto", "Vancouver", "Montreal"],
      Australia: ["Sydney", "Melbourne", "Brisbane"],
      UnitedKingdom: ["London", "Manchester", "Birmingham"],
      India: ["Mumbai", "Delhi", "Bangalore"],
      Brazil: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
      SouthAfrica: ["Johannesburg", "Cape Town", "Durban"],
      Japan: ["Tokyo", "Osaka", "Kyoto"],
      France: ["Paris", "Marseille", "Lyon"],
      Germany: ["Berlin", "Munich", "Hamburg"]
      // Add more countries and states here
  };

  // Function to populate the state dropdown based on the selected country
  function populateStates() {
      const selectedCountry = countryDropdown.value;
      const states = stateOptions[selectedCountry] || [];

      // Clear the current state options
      stateDropdown.innerHTML = "";

      // Populate the state dropdown with the new options
      states.forEach((state) => {
          const option = document.createElement("option");
          option.value = state;
          option.textContent = state;
          stateDropdown.appendChild(option);
      });
  }

  // Add an event listener to the country dropdown to update the states
  countryDropdown.addEventListener("change", populateStates);

  // Initial population of states
  populateStates();

  

  // Example code for submitting the form
  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
  });
});
