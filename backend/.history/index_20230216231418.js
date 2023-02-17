const connectToMongo = require("./db");
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

//Available Routes
app.use("/api/note",require("./routes/note"))
app.use("/api/auth",require("./routes/auth"))



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})