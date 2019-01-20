const 
    express = require("express"),
    PORT = process.env.PORT || 3001,
    app = express(),
    apiRoutes = require("./routes/apiRoutes"),
    mongoose = require("mongoose")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

apiRoutes(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestBooks")

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})

