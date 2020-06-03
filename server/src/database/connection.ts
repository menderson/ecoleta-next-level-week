import knex from 'knex';
import path from 'path'; //para lidar com caminhos no node (resolve diferenças entre linux e windows)

const connection = knex({ 
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

//Migrations são o historico do banco de dados