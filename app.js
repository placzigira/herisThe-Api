const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/auth");
const userRoutes = require("./Routes/user");
const postRoutes = require("./Routes/post");
const cookieParser = require("cookie-parser");
const swaggerDocs= require('./SwaggerDoc/swagger')
const cors= require('cors')
const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cookieParser());
const Port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(" Database Connected Successfully"))
  .catch((err) => console.log(err));
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
swaggerDocs(app)

app.listen(Port, () => console.log(`Server Started At ${Port}`));
