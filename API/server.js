const express = require("express");
const userRoutes = require('./src/user/routes');
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3001;

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});