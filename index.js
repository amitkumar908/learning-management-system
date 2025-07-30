import express from "express";
import dotenv from "dotenv";
import connectDB from "../configs/mongoDb.js";
import courseRoute from "../routes/courseRoute.js";


dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
 
// apis
app.get('/', (req,res)=>{res.send("Eduflow API is working fine!")})
app.use("/api/course", courseRoute);
app.use('/api/user', userRouter);

 
 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})

