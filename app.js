const express = require("express");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
