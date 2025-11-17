const argon2 = require('argon2');
let security = {
    getHashPassword: async (password) => {
        try {
            const hash = await argon2.hash(password);
            return hash;
        }
        catch (err) {
            console.error("Hashing failed:", err);
        }
    },
    comparePassword: async (password, hashPassword) => {
        try {
            if (await argon2.verify(hashPassword, password)) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error("Hashing failed:", err);
        }
    }
}
module.exports = security;