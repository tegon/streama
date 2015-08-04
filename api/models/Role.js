module.exports = {

  attributes: {
    authority: {
      type: 'string',
      required: true,
      unique: true
    },
    displayName: {
      type: 'string'
    },
    users: {
      collection: 'userRole',
      via: 'role'
    }
  }
};
