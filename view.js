

const register = (req,res) =>{
    res.status(200).json({message: "register Path"})
}

const login = (req,res) =>{
    res.status(200).json({message: "login Path"})
}

const authorize = (req,res) =>{
    res.status(200).json({message: "uthenticate Path"})
}

const logout = (req,res) =>{
    res.status(200).json({message: "logout Path"})
}

module.exports = {
    register,
    login,
    authorize,
    logout
}