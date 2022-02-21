const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser: true
},
err => {
    if(!err) {
        console.log("Conectou ao banco");
    } else {
        console.log("Erro na conexao ao banco",err);
    }
})

require('./userModel');