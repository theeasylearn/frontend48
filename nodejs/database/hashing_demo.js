// hashing_demo.js (no "type": "module")
const argon2 = require('argon2');

(async () => {
    try {
        const hash = await argon2.hash("apple");
        console.log(hash);
        if (await argon2.verify(hash, "apple")) {
            console.log('password match');
        } else {
            console.log('password do not match');
        }
    } catch (err) {
        console.error("Hashing failed:", err);
    }
})();