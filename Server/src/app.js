const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const json2csv = require('json2csv')




app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/dispositivos", require('./routes/dispositivos.routes'));

app.use("/api/roles", require('./routes/roles.routes'));

app.use("/api/users", require('./routes/users.routes'));

app.use("/api/pedidos", require('./routes/pedidos.routes'));

app.use("/api/cliente", require('./routes/cliente.routes'));

app.use("/api/historial", require('./routes/historial.routes'));





module.exports = app;