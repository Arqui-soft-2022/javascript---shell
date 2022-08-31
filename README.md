##  QrCode CLI

QrCode CLI es un programa que permite generar códigos QR como imagen (JPG o PNG) para direcciones URL de sitios web o redes sociales. Consiste en escribir la URL y generar la imagen QR junto a un ícono que indique el tipo de recurso.

###  Requisitos

- Nodejs

###  Instalación

```sh
npm install
```

```sh
npm link
```
### Comando

```sh
qrcode
```

### Pasos de Instalacion y uso

- #### Instalacion

Una vez descarcado la carpeta de QrCode CLi, en la consola de comando nos ubicacmos en la carpeta descargada y utilizamos el comando
```sh
npm install
```
Esto instalará QrCode Cli y todas sus dependencias.

Despúes de completar la instalación de QrCode CLi procedemos a utilizar el comando
```sh
npm link
```
Este comando hara que QrCode CLi se puede utilizar globalmente en la consola de comando.

- #### Uso

Despúes de la instalación utilizaramos el comando 
```sh
qrcode
```
para hacer uso del programa.

Al usar el comando se mostrar el menú principal donde visualizaran las opciones de: 
- **_Registrarse_** 
- **_Iniciar sesion_**
- **_Salir_**

Donde: 
- **_Registrarse_**: Se registrara un nuevo usuario en la base de datos, ingresando un nombre, email, username y password.
- **_Iniciar sesión_**: Se iniciara sesión de un usuario preciamente registrado.
- **_Salir_**: Cerrara el programa.

Al iniciar sesión correctamente se monstrara un nuevo menu donde visualizaran las opciones de: 
- **_Generar Qr_** 
- **_Ver historial_**
- **_Cerrar sesión_**

Donde: 
- **_Generar Qr_**: Se ingresara el url a consvertir en qr(png). 
- **_Ver historial_**: Se visualizara una tabla con el historial de los url ingresados para generar qr.
- **_Cerrar sesión_**: Cerrar sesion del usario.
