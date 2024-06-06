const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const emailRoutes = require("./components/EmailSend/emailRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS
console.log(process.env.EMAIL)
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
