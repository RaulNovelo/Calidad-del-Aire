const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data
port.on("open", () => {
    console.log('serial port open');
});
parser.on('data', data => {
    try {
        var datosSerie = JSON.parse(data);

        // Amoniaco
        if (datosSerie.amoniaco) {
            console.log("Amoniaco: " + datosSerie.amoniaco.valor + "ppm");
        } else {
            console.log("Amoniaco: ERROR!!")
        };

        // Dióxido de Carbono
        if (datosSerie.dioxidoDeCarbono) {
            console.log("Dióxido de Carbono: " + datosSerie.dioxidoDeCarbono.valor + "ppm");
        } else {
            console.log("Dióxido de Carbono: ERROR!!")
        }

        // Óxidos de Nitrógeno
        if (datosSerie.oxidosDeNitrogeno) {
            console.log("Óxidos de Nitrógeno: " + datosSerie.oxidosDeNitrogeno.valor + "ppm");
        } else {
            console.log("Óxidos de Nitrógeno: ERROR!!")
        }

        // Hidrógeno
        if (datosSerie.hidrogeno) {
            console.log("Hidrógeno: " + datosSerie.hidrogeno.valor + "ppm");
        } else {
            console.log("Hidrógeno: ERROR!!")
        }

        // Monóxido de Carbono
        if (datosSerie.monoxidoDeCarbono) {
            console.log("Monóxido de Carbono: " + datosSerie.monoxidoDeCarbono.valor + "ppm");
        } else {
            console.log("Monóxido de Carbono: ERROR!!")
        }

        // Propano
        if (datosSerie.propano) {
            console.log("Propano: " + datosSerie.propano.valor + "ppm");
        } else {
            console.log("Propano: ERROR!!")
        }

        // Metano
        if (datosSerie.metano) {
            console.log("Metano: " + datosSerie.metano.valor + "ppm");
        } else {
            console.log("Metano: ERROR!!")
        }

        // GLP
        if (datosSerie.glp) {
            console.log("GLP: " + datosSerie.glp.valor + "ppm");
        } else {
            console.log("GLP: ERROR!!")
        }

        // Alcohol
        if (datosSerie.alcohol) {
            console.log("Alcohol: " + datosSerie.alcohol.valor + "Mg/L");
        } else {
            console.log("Alcohol: ERROR!!")
        }

        // Humedad
        if (datosSerie.humedad) {
            console.log("Humedad: " + datosSerie.humedad.valor + "%");
        } else {
            console.log("Humedad: ERROR!!")
        }

        // Temperatura
        if (datosSerie.temperatura) {
            console.log("Temperatura: " + datosSerie.temperatura.valor + "°C");
        } else {
            console.log("Temperatura: ERROR!!")
        }

    } catch (error) {
        console.log(error)
    }

});