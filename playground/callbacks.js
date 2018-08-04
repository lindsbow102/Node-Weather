const getUser = (id, callback) => {
    const user = {
        id,
        name: 'Vikram'
    };

    setTimeout(() => {
        return callback(user);
    }, 3000);
    
};

getUser(31, (userObject) => {
    console.log(userObject);
});