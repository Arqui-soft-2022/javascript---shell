import axios from 'axios';
import 'colors';

const register = async ( user ) => {
    try {
        const { data : { usuario }} = await axios.post('https://codeqr-generate.herokuapp.com/api/auth/register', user );
        const { username, email, name } = usuario;
        return { username, email, name };
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

const login = async ( username, password ) => {
    try {
        const { data : { usuario }} = await axios.post('https://codeqr-generate.herokuapp.com/api/auth/login', { username, password } );
        return usuario;
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

export {register, login};