const express = require("express")

const app = express();
const router = require('./api/api')
const port = 5000 //change to ENV variable
const connectDB = require('./config/db.config');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to mongoDB 
connectDB();


app.use('/api', router);

app.listen(port, () => {
  console.log('server running')
})
