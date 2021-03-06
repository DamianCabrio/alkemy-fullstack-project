/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table('transaction', function (table) {
    table.integer('category_id').unsigned().notNullable().references('id').inTable('category').onDelete('CASCADE');
    table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE');
    table.integer('type').unsigned().notNullable().references('id').inTable('transaction_type').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.table('transaction', function (table) {
    table.dropForeign('category_id');
    table.dropForeign('user_id');
    table.dropForeign('type');

    table.dropColumn('category_id');
    table.dropColumn('user_id');
    table.dropColumn('type');
  });
};
