/* Creating and exporting a mongo schema of Book */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var bookSchema = new Schema({
            title: String,
            year: Number,
            image: String,
            status: Boolean,
            genre : {
                type: Schema.Types.ObjectId,
                ref: "genreModel"
            },
            author : {
                type: Schema.Types.ObjectId,
                ref: "authorModel"
            },
            bookType: {
                type: Schema.Types.ObjectId,
                ref: "bookTypeModel"
            },
            format: String
    });    
    return mongoose.model('bookModel', bookSchema, 'books');
};
