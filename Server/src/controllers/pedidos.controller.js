const pedidosController = {}
const json2csv = require('json2csv')
const nodemailer = require("nodemailer");

const Pedidos = require('../models/Pedidos')
const Dispositivos = require('../models/Dispositivos')
const request = require('request');
const { response } = require('../app');
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
     
      var num = Math.floor(Math.random() * (10000000000000 - 1000000000));

      let numserie =  "F-" +newPedido.dispositivo + "/"+ num  ;
     
      newPedido.num_serie.push(numserie);
      newPedido.num_serie.push("1");


    

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
   res.json({status: 'Pedido eliminado'})

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


pedidosController.sendMail = async(req, res) =>{
    

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "Sistemafabrica2021@gmail.com",
    pass: "hola12345q",
  },
});


var result = [


  request({
    url: "http://localhost:5000/api/dispositivos",
    json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        result = (JSON.stringify(body, undefined)); 
        console.log(result);
      }
  })
]


/*
     
request({
    url: "http://localhost:5000/api/dispositivos",
    json: true
}, function Leo(err, res, body){
     data = (JSON.stringify(body, undefined))
     return data;

})*/



const csv = json2csv.parse(result[0], ["_id", ]);
transporter.sendMail(
  {
    from: "Sistemafabrica2021@gmail.com",
    to: "leonelcas.izq@gmail.com",
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


module.exports = app;

}


module.exports = pedidosController;