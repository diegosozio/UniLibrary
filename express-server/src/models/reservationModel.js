/* Creating and exporting a mongo schema of reservation */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var reservationSchema = new Schema({
            from: String,
            to: String,
            user : {
                type: Schema.Types.ObjectId,
                ref: "usermodel"
            },
            book: {
                type: Schema.Types.ObjectId,
                ref: "bookModel"
            }
    });    
    return mongoose.model('reservationModel', reservationSchema, 'reservations');
};
