const pedidosController = {}
const json2csv = require('json2csv')
const nodemailer = require("nodemailer");

const Pedidos = require('../models/Pedidos')
const Serie = require('../models/Serie')
const Dispositivos = require('../models/Dispositivos')
const request = require('request');
const { json } = require('express');
const fetch = require('node-fetch')


pedidosController.getPedidos = async (req, res) => {
    const pedidos = await Pedidos.find().populate('dispositivo').populate('cliente')
    res.json(pedidos)
}
//CREATE
pedidosController.createPedido = async  (req, res) => {
    const newPedido = new Pedidos(req.body); 
      await newPedido.save()
    console.log(req.body)
    res.json('pedido creado')
}

pedidosController.createPedido2 = async  (req, res) => {
    const newPedido = new Pedidos(req.body);
    newPedido.num_serie = [];   
    
    
    for(var i=1; i <= newPedido.cantidad ; i++){
        const newSerie = new Serie(req.body);
      var num = Math.floor(Math.random() * (10000000000000 - 1000000000));
      let numserie =  "F-" +newPedido.dispositivo + "-"+ num ;     
      newPedido.num_serie.push(numserie);
      newPedido.num_serie.push("1");      
      newSerie.num_serie = numserie; 
      newSerie.estado = "Activo"; 
      newSerie.pedido = newPedido._id; 
        
      await newSerie.save()

    

   }

    await newPedido.save()
    console.log(req.body)
    res.json('pedido creado')
}

pedidosController.getPedido = async (req, res) => {
   const pedido = await Pedidos.findById(req.params.id);
    res.send(pedido)
}
//UPDATE
pedidosController.updatePedido = async (req, res) => {
    await Pedidos.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Pedido actualizado'})
}

//DELETE
pedidosController.deletePedido = async (req, res) => {
    await Pedidos.findByIdAndDelete(req.params.id)
    await Serie.remove({'pedido':req.params.id})
   res.json({status: 'Pedido eliminado'})

}
//Buscar pedido 
pedidosController.getNum = async (req, res) => {
    const pedidos = await Pedidos.find().populate('dispositivo').populate('cliente')
    res.json(pedidos)
}





pedidosController.getAggregate = async (req, res) => {
    const getAggregate = await Pedidos.aggregate([
        {

            "$lookup": {
                "from": "dispositivos",
                "localField": "dispositivo",
                "foreignField": "_id",
                "as": "dispositivoCol"
            }
        },
        {
            "$match": {
                "estado": "Empacando"
            }
        },
        {
            "$group": {
                "_id": "$fecha_p",
                "Dispositivo": {
                    "$push": "$dispositivoCol.modelo"
                },
                "cantidad": {
                    "$sum": "$cantidad"
                }
            }
        }

    ]).allowDiskUse(true);
    res.json(getAggregate)
}

pedidosController.getAggregate2 = async (req, res) => {
    const getAggregate2 = await Pedidos.aggregate([
        { 
            "$lookup" : { 
                "from" : "clientes", 
                "localField" : "cliente", 
                "foreignField" : "_id", 
                "as" : "clienteCol"
            }
        }, 
        { 
            "$replaceRoot" : { 
                "newRoot" : { 
                    "$mergeObjects" : [
                        { 
                            "$arrayElemAt" : [
                                "$clienteCol", 
                                0.0
                            ]
                        }, 
                        "$$ROOT"
                    ]
                }
            }
        }, 
        { 
            "$match" : { 
                "estado" : "Entregado"
            }
        }

    ]).allowDiskUse(true);
    res.json(getAggregate2)
}
/*

pedidosController.sendMail = async(req, res) =>{

    
        const {email} = req.body;
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "Sistemafabrica2021@gmail.com",
              pass: "hola12345q",
            },
        });
        
        const msg = {
            from: '"The Exapress App" <theExpressApp@example.com>', // sender address
            to: `${email}`, // list of receivers
            subject: "Sup", // Subject line
            text: "Long time no see", // plain text body
        }
        // send mail with defined transport object
        const info = await transporter.sendMail(msg);
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        res.send('Email Sent!')
    
}*/
    




pedidosController.sendMail = async(req, res) =>{
const {email} = req.body; 
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "Sistemafabrica2021@gmail.com",
    pass: "hola12345q",
  },
});




let url =  "http://localhost:8081/getReporte";
let response2 = await fetch(url);


if (response2.ok) { 
  var siu = await response2.json();
} else {
  alert("Error-HTTP: " + response2.status);
}



const csv = json2csv.parse(siu, ["_id", ]);
transporter.sendMail(
  {
    from: "Sistemafabrica2021@gmail.com",
    to: `${email}`,

    subject: "Ventas dispositivos",
    text: "Ventas del mes",
    attachments: [
      {
        filename: "file.csv",
        content: csv,
      },
    ],
  },
  (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
);


//module.exports = app;

}


pedidosController.getMail = async (req, res) => {
    const pedidos = await Pedidos.find().populate('dispositivo').populate('cliente')
    res.json(pedidos)
}


module.exports = pedidosController;