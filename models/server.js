const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
const path = require('path');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //PATH'S
        this.ingenierosPath = '/api/ingenieros';
        this.serviciosPath = '/api/servicios';
        this.tramitesPath = '/api/tramites';
        this.emailPath = '/api/send-email';
        //Conectar a BD
        this.conectarBD();
        //Middlewares 
        this.middlewares();
        //Rutas de aplicacion
        this.routes();

    }

    async conectarBD(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.ingenierosPath, require('../routes/ingeniero'));
        this.app.use(this.serviciosPath, require('../routes/servicio'));
        this.app.use(this.tramitesPath, require('../routes/tramite'));
        this.app.use(this.emailPath, require('../routes/send-email'));


        // Regla de reescritura para Angular (al final)
        this.app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/', 'index.html'));
        });
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Corriendo en el puerto", this.port);
        });
    }

}

module.exports = Server;