import sql from 'mssql'

const dbSettings = {

    user: "Ces_dev",
    password: "cesar",
    server: "localhost",
    database: "webstore",

    options: {
        encrypt: true,
        trustServerCertificate: true
    }

}

export async function getConnection() {

    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }

}




/*
const dbSettings = {

    user: 'Nombre_ usuario_base_de_datos',
    password: 'password_usuario_base_de_datos',
    server: 'NOMBRE_SERVIDOR_ADMINISTRADO _BASE_DE_DATOS',  localhost o número de puerto
    database: 'NOMBRE_BASE_DE_DATOS',
    port:'NUMERO_DE_PUERTO'  --> El número de puerto por defecto de sql server es 1433, en caso de cambiar de puerto
                                 se especifica ** AGREGANDO ESTE CAMPO A LA CONFIGURACIÓN

}


*/
