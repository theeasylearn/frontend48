import { con } from "./connect.js";
import { security } from "../lib/security.js";
export function insert(request, response) {
    //
    //object destructring 
    let { email, password, mobile } = request.body;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = "INSERT INTO users(email, password, mobile) VALUES (?,?,?)";
        // password hash is required
        security.getHashPassword(password).then(function (hashed_password) {
            let data = [email, hashed_password, mobile];
            con.query(sql, data, function (error, result) {
                if (error != null) {
                    response.json([{ 'error': 'error occured' }]);
                    console.log(error);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'user registered successfully' }]);
                }
            });
        });

    }
}
export function update(request, response) {
    //UPDATE `users` SET `id`='[value-1]',`email`='[value-2]',`password`='[value-3]',`mobile`='[value-4]',`created_at`='[value-5]' WHERE 1
}
export function remove(request, response) {
    //DELETE FROM `users` WHERE 0
}
export function select(request, response) {
    //SELECT `id`, `email`, `password`, `mobile`, `created_at` FROM `users` WHERE 1
}
