'use strict';

streamaApp.factory('modalService', ['$modal', function ($modal) {
	return{
		tvShowModal: function (tvShow, callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--tvShow.tpl.htm',
				controller: 'modalTvShowCtrl',
				size: 'lg',
				resolve: {
					tvShow: function () {
						return tvShow;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		movieModal: function (movie, callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--movie.tpl.htm',
				controller: 'modalMovieCtrl',
				size: 'lg',
				resolve: {
					movie: function () {
						return movie;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		videoModal: function (video, isManual, tvShow, callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--video.tpl.htm',
				controller: 'modalVideoCtrl',
				size: 'lg',
				resolve: {
					isManual: function () {
						return isManual;
					},
					video: function () {
						return video;
					},
					tvShow: function () {
						return tvShow;
					}
				}
			});

			modalInstance.result.then(function (data) {
				console.log('%c modal close', 'color: deeppink; font-weight: bold; text-shadow: 0 0 5px deeppink;', arguments);
				(callback || angular.noop)(data);
			});
		},


		openFileBrowser: function (callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--file-browser.tpl.htm',
				controller: 'modalFileBrowserCtrl',
				size: 'lg'
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		fileModal: function (video, callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--file.tpl.htm',
				controller: 'modalFileCtrl',
				size: 'lg',
				resolve: {
					video: function () {
						return video;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		userModal: function (user, callback) {
			var modalInstance = $modal.open({
				templateUrl: 'templates/modal--user.tpl.htm',
				controller: 'modalUserCtrl',
				size: 'lg',
				resolve: {
					user: function () {
						return user;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		}
	};
}]);
