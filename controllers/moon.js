// module.exports = router;
const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const applicationId = process.env.APPLICATION_ID;
    const secret = process.env.SECRET;
    const credentials = `${applicationId}:${secret}`;
    const authString = btoa(credentials);
    console.log(authString);
    const apiUrl = 'https://api.astronomyapi.com/api/v2/studio/moon-phase';

    // Request body
    const requestBody = {
      style: {
        moonStyle: 'default',
        backgroundStyle: 'stars',
        backgroundColor: '#000000',
        headingColor: '#ffffff',
        textColor: '#ffffff',
      },
      observer: {
        latitude: 33.775867,
        longitude: -84.39733,
        date: '2024-05-27',
      },
      view: {
        type: 'portrait-simple',
        parameters: {},
      },
    };

    // Make a POST request to the Astronomy API
    const response = await fetch(apiUrl, {
      method: "POST",
      hostname: "api.astronomyapi.com",
      port: null,
      path: "/api/v2/studio/moon-phase",
      headers: {
        Authorization: `Basic ${authString}`
      },
      body: JSON.stringify(requestBody),
    });

    // Check if the response is successful
    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      // If the response is not successful, throw an error
      throw new Error('Failed to fetch moon phase data');
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
