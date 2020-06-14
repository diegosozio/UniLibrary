/* Creating and exporting a mongo schema of User */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var UserSchema = new Schema({
        username:  String, 
        name: String,
        surname: String,
        password: Object,
        role: String,
    },{
        versionKey: false
    });    
    return mongoose.model('usermodel', UserSchema, 'users');
};
