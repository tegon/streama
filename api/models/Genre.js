module.exports = {

  attributes: {
    apiId: {
      type: 'integer',
      columnName: 'api_id',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    users: {
      collection: 'user',
      via: 'favoriteGenres'
    }
  }
};
