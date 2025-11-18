var connection = require("./connect");

export function insert(request, response) {
    //INSERT INTO `users`(`id`, `email`, `password`, `mobile`, `created_at`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')
    //object destructring 
    let { email, password, mobile } = request.body;
    response.send(`${email} ${password} ${mobile}`);
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
