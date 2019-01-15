const path = require("path")

module.exports = function(app) {

    console.log("htmlRoutes loaded")

    //Home Page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/public/index.html"))
      })
}