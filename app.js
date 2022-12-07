const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const pathImages = path.resolve(__dirname, "./public/images")
const pathCss = path.resolve(__dirname, "./public/css")
const pathJs = path.resolve(__dirname, "./public/js")
const pathHtml = path.resolve(__dirname, "./views")
app.use(express.static(pathImages))
app.use(express.static(pathCss))
app.use(express.static(pathJs))
app.use(express.static(pathHtml))


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.listen(port, () => {
    console.log("Listas para el show")
})