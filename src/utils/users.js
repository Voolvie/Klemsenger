const users = []

const addUser = ({id, username, room}) => {
    username = username.trim()
    room = room.trim()
    if(!username || !room) {
        return {
            error: 'Należy podać nazwę użytkownika oraz kanał!'
        }
    }
    const existingUser = users.find((user) => {
        return  user.room === room && user.username === username
    })
    if(existingUser) {
        return {
            error: 'Nazwa jest już zajęta!'
        }
    }
    const user = { id, username, room }
    users.push(user)
    return {user}
}


const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !==-1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
    room = room.trim()
    return users.filter((user) => user.room === room)
}





module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom

}

