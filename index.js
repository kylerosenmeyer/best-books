const 
    express = require("express"),
    PORT = process.env.PORT || 3001,
    app = express(),
    apiRoutes = require("./routes/apiRoutes"),
    htmlRoutes = require("./routes/htmlRoutes")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
