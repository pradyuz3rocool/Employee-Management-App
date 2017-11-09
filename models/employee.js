var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empid : String,
    name : String,
    title : String,
    sex : String,
    startDate : String,
    officePhone : String,
    cellPhone : String,
    email : String,
    manager : String
});

module.exports = mongoose.model('Employee', EmployeeSchema);
