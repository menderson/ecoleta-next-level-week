import Knex from 'knex'; //importa o tipo da variavel/biblioteca K maiusculo

export async function up(knex: Knex) { //função do typeScript, indica q knex é do tipo Knex;
   return knex.schema.createTable ('items', table => {//ganhamos acesso a inteligencia do editor e ctrl+espaço mostra as funções disponiveis
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
   });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
    
}