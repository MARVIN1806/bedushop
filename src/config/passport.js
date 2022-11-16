const passport = require("passport")

const LocalStrategy = require("passport-local").Strategy
const Usuario = require("../modules/Usuario")

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField : "password"
}, function(email, password, done){
    Usuario.findOne({email : email})
    .then(Usuario => {
        if(!Usuario || !Usuario.validarContrasena(password))
        return done(null, false, {errors : {'email o contraseña ': 'equivocado(a)'}})
        return done(null, Usuario)
    })
    .catch(done)
}))