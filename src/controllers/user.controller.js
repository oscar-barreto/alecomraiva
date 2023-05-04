let users = [];


class UserController {
    getUsers(request, response){
         return response.json(users);
    }
    createUser(request, response){
        const [ name ] = request.body;
        const newUser = {
            id: `${users.length +1}`,
            name,
        };
        users.push(newUser);
        return response.json(newUser);
    }
    deleteUser(request,response){
        const { id } = request.params;
        users = users.filter((u)=> u.id !== id);
        return response.json();
    }
}

const userController = new UserController();

module.exports = {
    userController, 
};