/* Creating and exporting a mongo schema of User */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var UserSchema = new Schema({
        username:  String, 
        name: String,
        surname: String,
        email: String,
        password: String,
        role: String,
    });    
    return mongoose.model('usermodel', UserSchema, 'users');
};
