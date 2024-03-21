import express from "express";
import colors from   "colors";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors'
import Razorpay from 'razorpay';
//configure
dotenv.config();
connectDB();
// rest object
const app = express();
//middle wares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
// razor pay
// Razorpay configuration
export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  

// rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Three60_onwards</h1>");
});

// port
const PORT = process.env.PORT ||8080 ;
// run listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on port  ${PORT}`.bgCyan.white);
});



