var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({

  attributes: {
    deleted: {
      type: 'boolean',
      defaultsTo: false
    },
    name: {
      type: 'string',
      required: true
    },
    overview: {
      type: 'string',
      minLength: 1,
      maxLength: 5000
    },
    apiId: {
      type: 'string',
      columnName: 'api_id'
    },
    backdropPath: {
      type: 'string',
      columnName: 'backdrop_path'
    },
    posterPath: {
      type: 'string',
      columnName: 'poster_path'
    },
    firstAirDate: {
      type: 'string',
      columnName: 'first_air_date'
    },
    originalLanguage: {
      type: 'string',
      columnName: 'original_language'
    },
    imdbId: {
      type: 'string',
      columnName: 'imdb_id'
    },
    voteAverage: {
      type: 'float'
    },
    voteCount: {
      type: 'integer'
    },
    popularity: {
      type: 'float'
    },
    episodes: {
      collection: 'episode',
      via: 'show'
    }
  }
});
