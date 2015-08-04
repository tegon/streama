var bcrypt = require('bcrypt');

module.exports = {
  tableName: 'user',
  attributes: {
    accountExpired: {
      type: 'boolean',
      required: true,
      columnName: 'account_expired'
    },
    accountLocked: {
      type: 'boolean',
      required: true,
      columnName: 'account_locked'
    },
    enabled: {
      type: 'boolean',
      required: true,
      defaultsto: false
    },
    invitationSent: {
      type: 'boolean',
      required: true,
      defaultsto: false,
      columnName: 'invitation_sent'
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      columnName: 'password',
      required: true
    },
    passwordExpired: {
      type: 'boolean',
      required: true,
      columnName: 'password_expired'
    },
    uuid: {
      type: 'string'
    },
    favoriteGenres: {
      collection: 'genre',
      via: 'users'
    },
    roles: {
      collection: 'userRole',
      via: 'user'
    }
  },

  toJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
  },

  beforeCreate: function(values, callback) {
    this.encodePassword(values, callback);
  },

  beforeUpdate: function(values, callback) {
    if (values.password) {
      this.encodePassword(values, callback);
    }
  },

  encodePassword: function(values, callback) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return callback(err);
      values.password = hash;
      callback();
    });
  }
};
