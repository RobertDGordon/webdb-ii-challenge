exports.up = function(knex) {
  return knex.schema
  .createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 128).index();
      tbl.string('Make', 128);
      tbl.string('Model', 128);
      tbl.integer('Mileage');
      tbl.boolean('Automatic').defaultTo(true);
      tbl.boolean('CleanTitle').defaultTo(true);
  })
  .createTable('sales', tbl =>{
      tbl.increments('id');
      tbl.integer('car_id').references('id').inTable('cars').notNull().onDelete('cascade');
      tbl.integer('Price');
      tbl.boolean('InStock').defaultTo(true);
      tbl.boolean('PendingSale').defaultTo(false);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('sales')
    .dropTableIfExists('cars');
};

