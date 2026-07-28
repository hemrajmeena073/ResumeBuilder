const express = require('express')
const connect = require('./utils/dbConnect');
const app = express()
const userRoutes = require('./Routes/User')
const passwordRoutes = require('./Routes/Password')
const resumeRoutes = require('./Routes/Resume')
const contactUsRoute = require('./Routes/Contact')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
connect();
app.use(express.json());
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"http://localhost:3000",
			"https://your-app.vercel.app" // <-- replace with your actual Vercel URL
		],
		credentials: true,
	})
)

app.use('/user',userRoutes)
app.use('/password',passwordRoutes)
app.use('/resume',resumeRoutes)
app.use("/reach", contactUsRoute)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Resume Builder Backend is running 🚀",
  });
});
app.use('/api', require('./Routes/Gemini'));

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})