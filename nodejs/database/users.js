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
                    console.log(error);
                    if (error.code === 'ER_DUP_ENTRY') {
                        response.json([{ 'error': 'email/mobile is already registered with us, use unique email & mobile' }]);
                    }
                    else {
                        response.json([{ 'error': 'error occured' }]);
                    }
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
    let { email, password } = request.query;
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = "select id,password from users where email=?";
        let data = [email];
        con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                if (result.length === 0) {
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email' }]);
                }
                else {
                    let hashedPassword = result[0]['password']; //encrypted password
                    security.comparePassword(password, hashedPassword).then((isTrue) => {
                        if (isTrue === true)
                            response.json([{ 'error': 'no' },{ 'success': 'yes' },{ 'message': 'login successfull' },{'id':result[0]['id']}]);
                        else
                            response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid email' }]);
                    });
                }
            }
        });
    }
}
