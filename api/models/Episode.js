var _ = require('lodash');
var Video = require('./Video.js');

module.exports = _.extend({

  attributes: {
    name: {
      type: 'string'
    },
    airDate: {
      type: 'string',
      columnName: 'air_date'
    },
    seasonNumber: {
      type: 'integer',
      columnName: 'season_number'
    },
    episodeNumber: {
      type: 'integer',
      columnName: 'episode_number'
    },
    episodeString: {
      type: 'string',
      columnName: 'episode_string'
    },
    stillPath: {
      type: 'string',
      columnName: 'still_path'
    }
  },

  beforeUpdate: function(values, callback) {
    values.episodeString = 's' + _.padLeft(values.seasonNumber.toString(), 2, '0') + 'e' + _.padLeft(values.episodeNumber.toString(), 2, '0');
  }
}, Video);
