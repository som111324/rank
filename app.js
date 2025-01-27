const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const rankRoutes = require('./routes/rankRoutes');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/rankings', rankRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
