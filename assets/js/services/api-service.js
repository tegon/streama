'use strict';

streamaApp.factory('apiService', ['$http', function ($http) {
	var urlBase = $('base').attr('href');

	return{
		currentUser: function () {
			return $http.get(urlBase + 'user/current');
		},


		tvShow: {
			get: function (id) {
				return $http.get(urlBase + 'tvShow/show', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(urlBase + 'tvShow/save', data);
			},
			delete: function (id) {
				return $http.delete(urlBase + 'tvShow/delete', {params: {id: id}});
			},
			list: function () {
				return $http.get(urlBase + 'tvShow');
			},
			episodesForTvShow: function (id) {
				return $http.get(urlBase + 'tvShow/episodesForTvShow', {params: {id: id}});
			}
		},

		user: {
			save: function (data) {
				return $http.post(urlBase + 'user/save', data);
			},
			delete: function (id) {
				return $http.delete(urlBase + 'user/delete', {params: {id: id}});
			},
			list: function () {
				return $http.get(urlBase + 'user');
			},
			checkAvailability: function (username) {
				return $http.get(urlBase + 'user/checkAvailability', {params: {username: username}});
			},
			saveAndInviteUser: function (user) {
				return $http.post(urlBase + 'user/saveAndInviteUser', user);
			},
      saveProfile: function (user) {
				return $http.post(urlBase + 'user/saveProfile', user);
			},
      availableRoles: function () {
				return $http.get(urlBase + 'user/availableRoles');
			},
      changePassword: function (data) {
				return $http.post(urlBase + 'user/changePassword', data);
			}
		},

		video: {
			get: function (id) {
				return $http.get(urlBase + 'video/show', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(urlBase + 'video/save', data);
			},
			delete: function (id) {
				return $http.delete(urlBase + 'video/delete', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(urlBase + 'video', {params: params});
			},
			dash: function () {
				return $http.get(urlBase + 'video/dash');
			},
			removeFile: function (videoId, fileId) {
				return $http.get(urlBase + 'video/removeFile', {params: {videoId: videoId, fileId: fileId}});
			},
			listAllFiles: function () {
				return $http.get(urlBase + 'file');
			},
			addFile: function (videoId, fileId) {
				return $http.get(urlBase + 'video/addFile', {params: {videoId: videoId, fileId: fileId}});
			}
		},

		episode: {
			get: function (id) {
				return $http.get(urlBase + 'episode/show', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(urlBase + 'episode/save', data);
			},
			delete: function (id) {
				return $http.delete(urlBase + 'episode/delete', {params: {id: id}});
			},
			list: function (params) {
				return $http.get(urlBase + 'episode', {params: params});
			}
		},

		movie: {
			get: function (id) {
				return $http.get(urlBase + 'movie/show', {params: {id: id}});
			},
			save: function (data) {
				return $http.post(urlBase + 'movie/save', data);
			},
			delete: function (id) {
				return $http.delete(urlBase + 'movie/delete', {params: {id: id}});
			},
			list: function () {
				return $http.get(urlBase + 'movie');
			}
		},

		viewingStatus: {
			save: function (params) {
				return $http.get(urlBase + 'viewingStatus/save', {params: params});
			},
			delete: function (id) {
				return $http.get(urlBase + 'viewingStatus/delete', {params: {id: id}});
			}
		},


    settings: {
			list: function () {
				return $http.get(urlBase + 'settings');
			},
			updateMultiple: function (data) {
				return $http.post(urlBase + 'settings/updateMultiple', data);
			},
      validateSettings: function (data) {
				return $http.post(urlBase + 'settings/validateSettings', data);
			}
		},


		theMovieDb: {
			search: function (type, name) {
				return $http.get(urlBase + 'theMovieDb/search', {params: {type: type, name: name}});
			},
			seasonForShow: function (params) {
				return $http.get(urlBase + 'theMovieDb/seasonForShow', {params: params});
			},
      availableGenres: function (params) {
				return $http.get(urlBase + 'theMovieDb/availableGenres');
			}
		},

		websocket: {
			triggerPlayerAction: function (params) {
				return $http.get(urlBase + 'websocket/triggerPlayerAction', {params: params});
			}
		}
	};
}]);
