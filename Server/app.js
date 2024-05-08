const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const route = require('./Route/index');
const dotenv = require('dotenv');
const passport = require('passport');
const cookieSession = require("cookie-session");
const passportSetup = require("./Controller/passport");
const authRoute = require("./Controller/auth");

const corsOptions = { // cross origin resource sharing
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE, PATCH",
    credentials: true,
    optionSuccessStatus: 200,
    allowedHeaders: "X-Requested-With,content-type, x-token, Access-Control-Allow-Credentials"
}



dotenv.config();

const app = express();
app.use(cookieSession({ name: "session", keys:["edureka"], maxAge: 24*60*60*1000 }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());  //Maintain session - logging out
//call connection
app.use(cors(corsOptions));
app.use('/', route);
app.use('/auth', authRoute);

const Port = 5500;
const Hostname = 'localhost';





//const MongoAtlas = "mongodb+srv://emmanuelodongo604:1OtjUv5zrrBDcc12@zomato-clone-81.ng9i7bh.mongodb.net/zomato-81?retryWrites=true&w=majority&appName=zomato-clone-81";

const MongoAtlas = process.env.MONGO_URL


//password : 1OtjUv5zrrBDcc12

mongoose.connect(MongoAtlas, {
   // useNewUrlParser : true,
    //useUnifiedTopology : true
})

//mongoose.connect(process.env.MONGO_URL)

.then(res => {
    app.listen(Port, () => {        // Remove HOSTNAME
        console.log(`Server is running at ${Port}`)
    });
})
.catch(err => console.log(err));