const getUser = "SELECT *FROM users";
const getUserById = "SELECT *FROM users WHERE id = $1";
const checkUser = "SELECT s FROM users s WHERE s.username = $1";
const addUser = "INSERT INTO users (username, password, role) VALUES ( $1 , $2 , $3)";
const removeUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET role = $1 WHERE id = $2";

module.exports = {
    getUser,
    getUserById,
    checkUser,
    addUser,
    removeUser,
    updateUser,
};

