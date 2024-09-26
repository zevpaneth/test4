import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import beeperRoutes from './routes/beeper.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json()); // Body parser
app.use('/api/beepers', beeperRoutes); // beeper Router
app.listen(PORT, () => {
    console.log(`server is on port ${PORT}`);
}); // Listening for requests
