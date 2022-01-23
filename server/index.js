const path = require('path');
const express = require('express');
const CatService = require('./src/catService');

const PORT = process.env.PORT || 3001;

const app = express();
const catService = new CatService();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get('/api/breeds/search', async (req, res) => {
  let searchedName = req.query.name;
  let response = await catService.searchCatBreeds(searchedName);
  res.json(response);
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});