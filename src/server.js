const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/search', async (req, res) => {
  const { query } = req.body;

  try {
    const unsplashResponse = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );

    const results = unsplashResponse.data.results;
    
    // Save the search results to a JSON file
    fs.writeFileSync('searchResults.json', JSON.stringify(results));
    console.log('Search results saved to searchResults.json:', results);

    res.json(results);
  } catch (error) {
    console.error('Error searching for images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
