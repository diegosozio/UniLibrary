/* Creating and exporting a mongo schema of genre */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var genreSchema = new Schema({          
            title: String,           
    });    
    return mongoose.model('genreModel', genreSchema, 'genres');
};
