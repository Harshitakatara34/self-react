const mongoose = require("mongoose")
const express = require("express")
const swaggerJSdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const { connection } = require("./controllers/connection")
const { route } = require("./routes/user.route")
const { notes } = require("./routes/notes.router")
const { auth } = require("./Middleware/auth.middleware")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Learning Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./routes/*.js"]
}
const swaggerSpec = swaggerJSdoc(options)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.use("/", route)
app.use(auth)
app.use("/", notes)





app.listen(8080 , async () => {
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to db")
})



