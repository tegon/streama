var _ = require('lodash');
var Video = require('./Video.js');

module.exports = _.extend({

  attributes: {
    title: {
      type: 'string'
    },
    releaseDate: {
      type: 'string',
      columnName: 'release_date'
    },
    backdropPath: {
      type: 'string',
      columnName: 'backdrop_path'
    },
    posterPath: {
      type: 'string',
      columnName: 'poster_path'
    }
  }
}, Video);
