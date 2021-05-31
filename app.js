const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("It's working alright")
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})