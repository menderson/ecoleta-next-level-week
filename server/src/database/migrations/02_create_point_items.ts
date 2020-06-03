import Knex from 'knex'; //importa o tipo da variavel/biblioteca K maiusculo

export async function up(knex: Knex) { //função do typeScript, indica q knex é do tipo Knex;
    return knex.schema.createTable ('point_items', table => {//ganhamos acesso a inteligencia do editor e ctrl+espaço mostra as funções disponiveis
     table.increments('id').primary();
     table.integer('point_id').notNullable().references('id').inTable('points');
     table.integer('item_id').notNullable().references('id').inTable('items');
    });
 }
 
 export async function down(knex: Knex) {
     return knex.schema.dropTable('point_items');
     
 }