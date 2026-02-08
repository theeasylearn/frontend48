const security = require('../lib/security.js');
async function myfunction() {
    var password = "apple";
    var hashed_password = await security.getHashPassword(password);
    console.log(hashed_password);

    var response = await security.comparePassword('banana', hashed_password);
    console.log(response);

    response = await security.comparePassword('apple', hashed_password);
    console.log(response);
}
myfunction();