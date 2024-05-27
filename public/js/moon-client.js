async function fetchMoonPhase() {
  try {
    const response = await fetch('/moon-phase'); // Replace with actual API endpoint if needed
    if (!response.ok) {
      throw new Error('Failed to fetch moon phase data');
    }
    const data = await response.json();
    console.log(data.data);
    if (data.data.imageUrl) {
      const moonImage = document.createElement('img');
      moonImage.src = data.data.imageUrl;
      moonImage.alt = 'Moon Phase';
      moonImage.className = 'img-fluid';

      const container = document.getElementById('moon-image-container');
      if (container) {
        container.appendChild(moonImage);
      } else {
        console.warn('Element with id "moon-image-container" not found.');
      }
    } else {
      console.warn('Moon phase image URL not found in response.');
    }
  } catch (error) {  
    console.error('Error:', error);
  }
}

// Call the function to fetch and display the moon phase
fetchMoonPhase();
