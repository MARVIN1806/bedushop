const {expressjwt : jwt} = require("express-jwt")

function getTokenFromHeader(req){

    const aut = req.headers.authorization
    const split = aut.split(' ')
    if(aut && split[0] === 'Token' || aut &&  split[0] === 'Bearer')
        return split[1]
    return null
}

const auth ={
    requerido: jwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        getToken: getTokenFromHeader
      }),
      opcional: jwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        userProperty: 'usuario',
        credentialsRequired: false,
        getToken: getTokenFromHeader
      })
}



module.exports = auth