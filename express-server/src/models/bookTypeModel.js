/* Creating and exporting a mongo schema of Book type */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var bookTypeSchema = new Schema({
            title: String,            
    });    
    return mongoose.model('bookTypeModel', bookTypeSchema, 'bookTypes');
};
