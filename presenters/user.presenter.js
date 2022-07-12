module.exports = {
    userPresenter: (user) => {
        return {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            age: user.age,
            avatar: user.avatar,
            phone: user.phone,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    },
};