import userModel from "../../models/userModel.js";

async function getAll() {
    const users = await userModel.findAll
    return users;
}
async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
}

async function create(name, last_name, email, tel, rol) {
    const newUser = await userModel.create({
        name,
        last_name,
        email,
        tel,
        rol
    });

    return newUser;
}


async function update(id, name, lastName, email, tel, rol) {
    const user = await userModel.findByPk(id);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.tel = tel;
    user.rol = rol;

    return user;
}

async function remove(id) {
    const userToRemove = await userModel.findByPk(id);
    await userToRemove.destroy();
    return userToRemove;
}


export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}
export default functions;