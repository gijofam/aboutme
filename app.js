const { response } = require('express');
const express = require('express');

const app = express();

app.get('/me', (req, res) => {
    console.log(req.method);
    res.status(200).json({
        nombre: 'Gilmar',
        edad: '29',
        pais: 'Peru'
    })
})
app.post('/metas', (req, res) => {
    console.log(req.method);
    res.status(200).json({
        hobbies:['jugar futbol', 'hacer deporte aventura', 'ver netflix']
    })
})
app.patch('/metas', (req, res) => {
    console.log(req.method);
    res.status(200).json({
        metas:['aprender cursos de desarrollo web', 'leer libros relacionados con programacion']
    })
})
app.put('/business', (req, res) => {
    console.log(req.method);
    res.status(200).json({
        empresas:['google', 'globant','space x']
    })
})

app.listen(8000, () => {
    console.log('server started at port 8000');
})