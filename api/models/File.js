module.exports = {

  attributes: {
    sha256Hex: {
      type: 'string',
      maxLength: 64
    },
    name: {
      type: 'string'
    },
    extension: {
      type: 'string'
    },
    contentType: {
      type: 'string',
      columnName: 'content_type'
    },
    originalFilename: {
      type: 'string',
      columnName: 'original_filename'
    },
    size: {
      type: 'float'
    },
    quality: {
      type: 'string',
      enum: ['720p', '480p', '360p']
    },
    videos: {
      collection: 'video',
      via: 'files'
    }
  }
};
