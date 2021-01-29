const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/dispositivos", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((db)=> console.log("Db esta conectada"))
.catch((err)=> console.error(err));
