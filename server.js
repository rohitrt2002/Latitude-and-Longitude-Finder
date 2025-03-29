const express = require('express');
const app = express();

app.use(express.json());

app.get('/get-location', (req, res) => {
    const { latitude, longitude } = req.query;
    const location = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
    };

    if (!isNaN(location.latitude) && !isNaN(location.longitude)) {
        res.json({ success: true, location });
    } else {
        res.json({ success: false, message: 'Invalid latitude or longitude' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
