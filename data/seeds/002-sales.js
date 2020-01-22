
exports.seed = function(knex) {
  return knex('sales').truncate()
    .then(function () {
      return knex('sales').insert([
        {id: 1, car_id: 1, Price: 95000, InStock: true, PendingSale: false },
        {id: 2, car_id: 2, Price: 75000, InStock: true, PendingSale: false },
        {id: 3, car_id: 3, Price: 22000, InStock: true, PendingSale: false },
      ]);
    });
};
