// server.js
const express = require('express');
const app = express();
const sequelize = require('./config/database'); // Sequelize instance

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('✅ Server is running and DB connected!');
});

// Sync DB and then start the server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connected via Sequelize');

    await sequelize.sync(); // creates table if not exists
    console.log('✅ Models synced to DB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ DB connection or sync failed:', error.message);
  }
})();

