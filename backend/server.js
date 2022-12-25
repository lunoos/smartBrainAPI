const express = require('express');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');
const User = require('./models/smartBrainUser');
const config = require('./config');

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(()=>console.log('connected')).catch(error => console.log(error));



const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) =>{
	res.send('it is working!')
})

 app.post('/signin', (req, res) => { signin.handleSignin(req, res ,User.userModel, bcrypt)})

 app.post('/register',(req, res) => { register.handleRegister(req, res,User.userModel, bcrypt) } )

 app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, User.userModel)});

 app.put('/image', (req, res)=>{image.handleImage(req, res, User.userModel,mongoose)});

 app.post('/imageurl', (req, res)=>{image.handleApiCall(req, res)});


app.listen(process.env.PORT|| 3002, () => {
	console.log(`app is running on port ${process.env.PORT ||3002 }`); 
})