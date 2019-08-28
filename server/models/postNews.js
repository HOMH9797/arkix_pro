var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postNewsSchema = new Schema({
    titulo:{type: String, required: true},
    txtContenido:{type: String, required: true},
    fecha:{type: Date, required: true},
    estado:{type: Boolean,required:true, default: true},
    imgPostNew: {type: String, default: ''},
    autor:{type: Schema.Types.ObjectId, ref: 'Usuario', required:true}
});

module.exports = mongoose.model('postNews', postNewsSchema);