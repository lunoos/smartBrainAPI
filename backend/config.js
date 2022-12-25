const dotenv = require('dotenv');

dotenv.config();

module.exports ={
	MONGODB_URL :  process.env.MONGODB_URI ||  'mongodb+srv://neelam_user:3HyIlTyM6ZjDxiNh@neelamdb.2lgbm.mongodb.net/smartBrainUser'
}