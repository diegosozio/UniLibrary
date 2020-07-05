/* Creating and exporting a mongo schema of author */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var authorSchema = new Schema({
            name: String
    });    
    return mongoose.model('authorModel', authorSchema, 'authors');
};
