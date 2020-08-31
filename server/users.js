const users=[];

const addUser = ({id, name, room})=> {
	const user = {id, name ,room};
	users.push(user);

	return ({user});

};

const getUser = (id) =>users.find((user)=> user.id === id);

const allUsers = () => users;

module.exports = {addUser, getUser, allUsers};