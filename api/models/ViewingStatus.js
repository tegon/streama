module.exports = {

  attributes: {
    video: {
      model: 'video',
      columnName: 'video_id',
      required: true
    },
    tvShow: {
      model: 'tvShow',
      columnName: 'tv_show_id'
    },
    user: {
      model: 'user',
      columnName: 'user_id'
    },
    currentPlayTime: {
      type: 'integer',
      columnName: 'current_play_time',
      required: true
    },
    runtime: {
      type: 'integer'
    },
    completed: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
