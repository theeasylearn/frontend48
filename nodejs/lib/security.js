const argon2 = require('argon2');
const crypto = require('crypto'); //built in module
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
    },
    generatePassword: (length = 6) => {
        // Define character sets
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*_-+=';

        // Combine all characters
        const allChars = uppercase + lowercase + numbers + symbols;

        // Ensure at least one character from each set for strength
        let password = [
            uppercase[crypto.randomInt(uppercase.length)],
            lowercase[crypto.randomInt(lowercase.length)],
            numbers[crypto.randomInt(numbers.length)],
            symbols[crypto.randomInt(symbols.length)]
        ];

        // Fill the rest of the password length securely
        for (let i = password.length; i < length; i++) {
            password.push(allChars[crypto.randomInt(allChars.length)]);
        }

        // Shuffle the array to avoid predictable patterns
        for (let i = password.length - 1; i > 0; i--) {
            const j = crypto.randomInt(i + 1);
            [password[i], password[j]] = [password[j], password[i]];
        }

        return password.join('');
    }
}
module.exports.security = security;