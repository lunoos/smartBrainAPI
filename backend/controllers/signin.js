const handleSignin = async (req, res, User, bcrypt) =>{
	const { email , password} = req.body;
	if(!email||!password) {
		return res.status(400).json('incorrect form submission');
	}
	await User.findOne({
		email:email
	}).then(data => {
		const isValid = bcrypt.compareSync(password, data.password);
		if(isValid){
			return res.status(200).send(data);
		}else
			return res.status(400).json('unable to get user');
	}).catch(err => res.status(400).json('unable to get user please check the credentilas'))

}
module.exports = {
 handleSignin : handleSignin
}