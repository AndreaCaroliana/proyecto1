const pool = require("../../db");
const queries = require("./queries");

const getUser = (req, res) =>{
    pool.query(queries.getUser, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) =>{
    const user = parseInt(req.params.user);
    pool.query(queries.getUserById, [user],(error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = async (req, res) =>{
    const {username, password, role } =  req.body;
     pool.query(queries.checkUser, [username], (error, results) => {
        //Verificar si hay otro usuario
        if(results.rows.length){
            res.send("User already exists");
        }
        else{
        //Crear Usuario
    
        pool.query(
            queries.addUser, 
            [username, password, role], 
            (error, results ) => {
                if(error) throw error;
                res.status(201).send("User created Successfully!!");
                console.log("Student Create");
            })
        }
     })
}

const removeUser = (req, res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id] ,(error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database, could not remove.");
        }
    
        pool.query(queries.removeUser, [id], (error,results) => {
            if(error) throw error;
            res.status(200).send("User removed successfully");
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { role } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database.");
        }
        else{
        pool.query(queries.updateUser, [role, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User update successfully");
        });
        }
  });
};

module.exports = {
    getUser,
    getUserById,
    addUser,
    removeUser,
    updateUser,
};
