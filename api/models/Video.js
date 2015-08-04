module.exports = {

  attributes: {
    overview: {
      type: 'string'
    },
    apiId: {
      type: 'string',
      columnName: 'api_id'
    },
    originalLanguage: {
      type: 'string',
      columnName: 'original_language'
    },
    voteAverage: {
      type: 'float',
      columnName: 'vote_average'
    },
    voteCount: {
      type: 'integer',
      columnName: 'vote_count'
    },
    popularity: {
      type: 'float'
    },
    imdbId: {
      type: 'string',
      columnName: 'imdb_id'
    },
    files: {
      collection: 'file',
      via: 'videos'
    }
  }
};
