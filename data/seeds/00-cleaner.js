const cleaner = require('knex-cleaner');
exports.seed = function(knex) {
  return cleaner.clean(knex,{
    mode:'truncate', //resets ids
    ignoreTables: ['knex-migrations', 'knex_migrations_lock'],//dont empty migrations tables
  });
};