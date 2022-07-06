module.exports = {
    userPresenter: (user) => {
        return {
            _id: user._id,
            last_name: user.last_name,
            name: user.name,
            surname: user.surname,
            email: user.email,
            age: user.age,
            role: user.role,
            phone: user.phone,
            dataBirth: user.dataBirth,
            gender: user.gender,
            pass_number: user.pass_number,
            auth_that_issued: user.auth_that_issued,
            date_of_issue: user.date_of_issue,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    },
};