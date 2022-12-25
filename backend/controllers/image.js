const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '027ca03161284201bbc93d5db51ebf0a'
});

const handleApiCall = (req, res) => {
	app.models
.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
.then(data => {
	res.json(data);
})
.catch(err=> res.status(400).json('unable to work with teh api'))
}


const handleImage = async (req, res,User,mongoose)=>{
	const {id} = req.body;
	const objectId = mongoose.Types.ObjectId(id);
	await User.findOneAndUpdate({ _id: objectId }, { $inc: { entries: 1 } })
	.then(data=>res.status(200).json(data.entries)).catch(err => res.status(400).json("Not able to update the entries")); 

}

module.exports={
	handleImage: handleImage,
	handleApiCall:handleApiCall
}