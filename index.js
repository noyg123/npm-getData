


exports.getSources = function(callback) {
    readJson("Sources.json", function(data) {
        return callback(data);
    });
}
exports.getTriangles = function(callback) {
    readJson("Triangles.json", function(data){
     return callback(data);
    });
}
exports.getUsers = function(callback) {
    readJson("Users.json", function(data){
        return callback(data);
    });
}
exports.getUserPermission = function(id, callback) {
    readJson("UserPermission.json", function(data){
        return callback(data);
    });
}
exports.getC19nGroups = function(callback) {
    readJson("C19nGroups.json", function(data){
        return callback(data);
    });
}
exports.getC19nGroups1 = function(callback) {
    readJson("C19nGroups1.json", function(data){
        return callback(data);
    });
}
exports.getC19nGroups2 = function(callback) {
    readJson("C19nGroups2.json", function(data){
        return callback(data);
    });
}
//getSources();
//getPublishProceduresNohal();

function readJson(pathFile, callback) {
    var fs = require('fs');
    var obj;
    fs.readFile(__dirname + '/' + pathFile, 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    //console.log(obj);
    return callback(obj);
    });
}
