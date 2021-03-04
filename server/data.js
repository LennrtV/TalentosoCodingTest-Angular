const { DebugNode } = require('@angular/core');
var faker = require('faker');

var db = { projects: [], timeRegistrations: []};

for (var i = 1; i<= 5; i++) {
  db.projects.push({
    id: i,
    name: faker.random.words(),
    startDate: faker.date.recent(),
    endDate: faker.date.future()
  });
}

console.log(JSON.stringify(db));
