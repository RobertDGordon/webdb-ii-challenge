exports.up = function(knex) {
    return knex.schema
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