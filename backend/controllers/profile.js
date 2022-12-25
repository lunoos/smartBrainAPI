const handleProfile = async (req, res, User)=> {
	const {id} = req.params;
	await User.findOne({
		_id:id
	}).then(data => {
		if(data!==null){
				res.json(data);
			}else{
				res.status(400).json('not found')
			}
	}).catch(err => res.status(400).json('error getting user'))
	
}

module.exports ={
   handleProfile : handleProfile
}