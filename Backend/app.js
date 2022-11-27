const express = require('express');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true 
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());

let usuariosarr= []

app.get('/cargarformulario',(req, res) => {
    res.send('me hicieron un get a app cargarformulario')
});

app.post('/cargarformulario', (req, res)=>{
    let cargar= req.body;
    usuariosarr.push (cargar);
    res.send(json.stringify("Guardado usuario"));
    console.log(cargar);
})

app.listen(port,()=>{
    console.log('estoy ejecutandome en http://localhost:${port} ')
})

