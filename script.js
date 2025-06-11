// Define the main function to fetch dog images from the API
async function fetchDogs() {
  // Get the button so we can update its text
  const button = document.querySelector("button");

  // Change the button text while loading
  button.textContent = "Fetching Dogs...";

  try {
    // Make a GET request to the Dog CEO API for 6 random dog images
    const response = await fetch("<https://dog.ceo/api/breeds/image/random/6>");

    // Convert the response into a usable JavaScript object
    const data = await response.json();

    // Find the gallery container where cards will be inserted
    const gallery = document.getElementById("dog-gallery");

    // Clear any previous cards
    gallery.innerHTML = "";

    // Loop through each image URL in the response
    data.message.forEach(imageUrl => {
      // Create and insert one dog card for each image
      createDogCard(imageUrl);
    });

    // Restore the original button text
    button.textContent = "Load Dogs";
  } catch (error) {
    // If something goes wrong, show an error in the console
    console.error("Error fetching dog images:", error);

    // Let the user know something failed
    button.textContent = "Try Again";
  }
}