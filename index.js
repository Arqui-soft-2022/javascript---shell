import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import 'colors';
import { login, register } from './controller/auth.js';

let usuario = null;

const menu1 = async () => {

    let opt = 0;
    let choices = [
        {
            value: 1,
            name: `${ '1.'.green } Registrarse`
        },
        {
            value: 2,
            name: `${ '2.'.green } Iniciar Sesion`
        },
        {
            value: 3,
            name: `${ '3.'.green } Salir`
        }
    ];
    do {    
        opt = await inquirerMenu(choices);
        switch ( opt ) {
            case 1:
                {
                    let name = await leerInput('Ingrese el nombre: ');
                    let username = await leerInput('Ingrese el username: ');
                    let email = await leerInput('Ingrese el correo: ');
                    let password = await leerInput('Ingrese la contraseña: ', 'password');
 
                    let usuarioRegistrado = await register({ name, username, email, password });
                    if( usuarioRegistrado ){ 
                        console.log( `${ 'Exito: '.green } Se ha registrado el usuario` );
                        console.table( usuarioRegistrado );
                    }
                }
                break; 
            case 2:
                {
                    let username = await leerInput('Ingrese el username: ');
                    let password = await leerInput('Ingrese la contraseña: ', 'password');
                
                    usuario = await login( username, password );
                    if ( usuario ) {
                        await menu2();
                    }
                }
                break; 
        }
        if ( opt !== 3 ) await pausa();
    } while ( opt !== 3 )

}

const menu2 = async () => {

    let opt = 0;
    let choices = [
        {
            value: 1,
            name: `${ '1.'.green } Generar codigo qr`
        },
        {
            value: 2,
            name: `${ '2.'.green } Historial`
        },
        {
            value: 3,
            name: `${ '3.'.green } Cerrar Sesion`
        }
    ];
    do {
        opt = await inquirerMenu(choices);
        switch ( opt ) {
            case 1:
                let url = await leerInput('Ingrese la Url: ');
                console.log( url );
                break;
            case 2:
                console.table( 'Historial de codigos qr' );
                break;
            case 3:
                console.log( 'Cerrar sesion' );
                break;
        }
        if ( opt !== 3 ) await pausa();
    } while ( opt !== 3 )
}

menu1();