import axios from 'axios';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import 'colors';

const generarQr =  async ( url, user ) => {
    try { 
        let { data: { qr_code } } = await axios.post('https://codeqr-generate.herokuapp.com/api/code/', { url, user });
        const rutaImage = `Downloads/${uuidv4()}.png`;
        let image = qr_code.url_code;
        image = image.split(';base64,').pop();
        console.log( `Exito: Archivo guardado en: `.green + path.join( process.cwd(), rutaImage ) );
        fs.writeFileSync(rutaImage, image, {encoding: 'base64'});
        return qr_code;
    } catch (error) {
        let messageError = error?.response?.data?.errors?.shift().msg;
        if( !messageError ) {
            messageError = error?.response?.data?.msg;
        }  
        if( !messageError ) {
            messageError = 'Error en el servicor web';
        }

        console.log(`${'Errror: '.red } ${messageError}`);
        return null;
    }

}

const getHistorialQrs = async ( user ) => {
    try {
        let { data: { codes} } = await axios.post('https://codeqr-generate.herokuapp.com/api/code/historial/', { user });

        codes = codes.map( ({url, date}) => {
            const dateLocal = new Date(date).toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            return {url, fecha: dateLocal}
        });
        return codes;
    } catch (error) {
        let messageError = error?.response?.data?.errors?.shift().msg;
        if( !messageError ) {
            messageError = error?.response?.data?.msg;
        }
        if( !messageError ) {
            messageError = 'Error en el servicor web';
        } 
         
        console.log(`${'Errror: '.red } ${messageError}`);
        return null;
    }
}


export { generarQr, getHistorialQrs };