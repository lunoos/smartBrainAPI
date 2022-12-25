const  handleRegister  = async (req, res,User, bcrypt) =>{
	const {name,password, email} = req.body;
	if(!email||!name||!password) {
		return res.status(400).json('incorrect form submission');
	}

	const data = await User.findOne({
		email:email
	});

	if(data!==null&&email===data.email)
			return res.status(400).json('user already exists please try with different email id');
	else{

	const hash = bcrypt.hashSync(password);
	const user = new User({
		name: name,
		password: hash,
		email: email,
		entries: 0,

	});
	const newUser = await user.save();
	if(newUser){
		res.send({
		  _id: newUser._id,
		  name: newUser.name,
		password: newUser.password,
		  email: newUser.email,
		  entries: newUser.entries,
		joined: new Date()
		})
	}
	else {
	  res.status(401).send({ message: 'Invalid user data'});
	}
}
	
	
}

module.exports ={
	handleRegister: handleRegister
}