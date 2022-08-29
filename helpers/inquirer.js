import inquirer from 'inquirer';
import 'colors';

const inquirerMenu = async ( choices = []) => {

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.white);
    console.log('===========================\n'.green);
   
    const menu = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Que desea hacer?',
            choices
        }
    ];
    
    const { opcion } = await inquirer.prompt( menu );
    return opcion;
};
 
const pausa = async () => {

    await inquirer.prompt( {
        type: 'input',
        name: 'enter',
        message: `Presione ${ 'Enter'.green } para continuar`
    });
    console.log('\n');
}

const leerInput = async ( message, type = 'input' ) => {

    const input = [
        {
            type,
            name: 'value',
            message,
            mask: '*',
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { value } = await inquirer.prompt( input );
    return value;
}

export { inquirerMenu, pausa, leerInput };