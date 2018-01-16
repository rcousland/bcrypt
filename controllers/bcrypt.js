// first, require it in
var bcrypt = require('bcryptjs');

const {performance} = require('perf_hooks');
// check a password
//bool validPassword = bcrypt.compareSync(submittedPassword, hashedPassword)

module.exports.generate = (newNumber, callback) => {
    // hash and save a password
    var t0 = performance.now();
    var hashedPassword = bcrypt.hashSync(newNumber.toString(), 16);  
    var t1 = performance.now();
    var json = JSON.stringify({
        'plainPassword': newNumber,
        'bcrypt': hashedPassword,
        'milliseconds': Math.round(t1 - t0)
    }); 
    callback(null,json)
    t0,t1,hashedPassword,json = null
}
