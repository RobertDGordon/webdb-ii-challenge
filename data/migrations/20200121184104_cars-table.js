
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 128).index();
      tbl.string('Make', 128);
      tbl.string('Model', 128);
      tbl.integer('Mileage');
      tbl.boolean('Automatic').defaultTo(true);
      tbl.boolean('CleanTitle').defaultTo(true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
