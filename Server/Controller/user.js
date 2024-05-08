const User = require('../Model/user1DB');


exports.postSignUp = (req, res) => {
    const { email, password, name } = req.body;

    const userObj = new User ({
        email,
        password,
        name
    })

    userObj.save()

    .then(response => {
        res.status(200).json({
            message : 'user details updated successfully',
            signUp : response
        })
    })

    .catch(err => {
        res.status(500).json({ error : err })
    })
}


exports.postLogin = (req, res) => {
    const { email, password } = req.body;

    User.find({
        email,
        password
    })

    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                message : 'Login data fetched successfully',
                logIn : response,
                isAuthenticated : true
            })
        }

        else {
            res.status(200).json({
                message : 'Login data not found',
                logIn : response,
                isAuthenticated : false
            })
        }
    })

    .catch(err => {
        res.status(500).json({error : err})
    })
}