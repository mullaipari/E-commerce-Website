const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Local MongoDB Connection Setup
mongoose.connect('mongodb://localhost:27017/shopystore')
    .then(() => console.log('MongoDB connected successfully for SHOPY STORE!'))
    .catch(err => console.log('MongoDB connection error (Running in Local Simulation Mode):', err.message));

// User Schema Design
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Auth Routes APIs
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existing = await User.findOne({ username });
        if(existing) return res.status(400).json({ message: "Username already taken!" });
        
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "Registration absolute complete!" });
    } catch (err) {
        res.status(500).json({ message: "Server registry internal fault" });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if(!user) return res.status(400).json({ message: "Invalid username or password credentials!" });
        res.status(200).json({ username: user.username, message: "Welcome authorization token granted!" });
    } catch (err) {
        res.status(500).json({ message: "Server secure tunnel authentication fault" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`SHOPY STORE Engine executing on port http://localhost:${PORT}`));