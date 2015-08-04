module.exports = {

  attributes: {
    settingsKey: {
      type: 'string',
      columnName: 'settings_key',
      required: true
    },
    value: {
      type: 'string'
    },
    description: {
      type: 'text'
    },
    required: {
      type: 'boolean'
    }
  }
};
