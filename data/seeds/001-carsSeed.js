
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {id: 1, VIN: 'WDBUF0981234', Make: 'Mercedes', Model:'E55 AMG', Mileage: 37000, Automatic: true, CleanTitle: true },
        {id: 2, VIN: 'WDBUF9349593', Make: 'Mercedes', Model:'560SL', Mileage: 74690, Automatic: true, CleanTitle: true },
        {id: 3, VIN: 'JPA187Z15477', Make: 'Mitsubishi', Model:'Starion', Mileage: 32000, Automatic: false, CleanTitle: true },
      ]);
    });
};
