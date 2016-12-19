module.exports = function() {
  var faker = require('faker');
  var _ = require('lodash');

  faker.locale = 'ja';

  return {
    posts: _.times(10, function(n) {
      return {
        id: n,
        title: faker.lorem.sentence(),
        author: faker.name.findName(),
      }
    })
  }
}
