// const express = require('express');
// const fetch = require('node-fetch');

// const router = express.Router();

// // Define a route to handle moon phase requests
// router.get('/', async (req, res) => {
//   try {
//     const applicationId = process.env.APPLICATION_ID; // Retrieve application ID from environment variable
//     const secret = process.env.SECRET; // Retrieve secret from environment variable
//     const credentials = `${applicationId}:${secret}`;
//     // console.log(credentials);
//     // const authString = Buffer.from(credentials).toString('base64');
//     const base64EncodedCredentials = Buffer.from(credentials).toString('base64');
//     const authString = `Basic ${base64EncodedCredentials}`;
//     console.log(authString);
//     const apiUrl = 'https://api.astronomyapi.com/api/v2/studio/moon-phase';

//     // Make a request to the Astronomy API
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         'Authorization': `Basic ${authString}`
//       }
//     });

//     // Check if the response is successful
//     if (response.ok) {
//       const data = await response.json();
//       console.log("GOOD");
//       // Send the moon phase data as a response
//       res.json(data);
//     } else {
//       console.log(response);
//       // If the response is not successful, throw an error
//       throw new Error('Failed to fetch moon phase data');
//     }
//   } catch (error) {
//     // Handle any errors that occur during the request
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const applicationId = process.env.APPLICATION_ID;
    const secret = process.env.SECRET;
    const credentials = `${applicationId}:${secret}`;
    const base64EncodedCredentials = Buffer.from(credentials).toString('base64');
    const authString = `Basic ${base64EncodedCredentials}`;
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
        Authorization: "Basic NGY3ZjY5ZjgtNTgyMi00NjVlLWI4YzktMjJhMzNlYjk0MTAwOjFmYWQ1ZTg1NTY2OTRkNzVhZmNmODVmOWE4MmZlYTdlNzkwZDEyMmQ3MGZiZjY4NDk2ZDczMjg0OTdmMDcwZjUyZWYwOWEzMDViY2MwZTAzNGE4YWI1YWZhYmQ1NDdmMTg1ZTU0MzhjMzdiYmYxNDY5ZTk0NTEzMDRhM2I4MjY2MzdjYWVjZGFkNjljZjUxNDU0NzY2NDkzMTI3YmY5NTdjMmE3ZjhjOWRhZjgyODk5ODM5NTYxYTg4NjJjNzdjNGJlMjdjZTE0NmNjMDExY2YwNWYwMWZiY2Q5ZTA2YzAy"
      },
      body: JSON.stringify(requestBody),
    });

    // Check if the response is successful
    if (response.ok) {
      console.log("OK");
      console.log(response);
      const data = await response.json();
      res.json(data);
    } else {
      console.log("TEST");
      console.log(response);
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
