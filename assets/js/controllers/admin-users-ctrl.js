

streamaApp.controller('adminUsersCtrl', ['$scope', 'apiService', 'modalService', '$rootScope', function ($scope, apiService, modalService, $rootScope) {
	$scope.loading = true;

	apiService.user.list().success(function (data) {
		$scope.users = data;
		$scope.loading = false;

	});

	$scope.openUserModal = function (user) {
		modalService.userModal(user, function (data) {
			if(!_.find($scope.users, {id: data.id})){
				$scope.users.push(data);
			}else{

        var index = $scope.users.indexOf(user);
        $scope.users[index] = data;

        if(data.id != $rootScope.currentUser.id){
          alertify.alert('If you made any changes to the roles, please make sure to inform the user that he has to log out of the application and log back in for the changes to take effect.');
        }else{
          alertify.alert('If you made any changes to the roles, please log out of the application and log back in for the changes to take effect.');
        }
      }
		});
	};

	$scope.delete = function (user) {
		alertify.confirm('Are you sure you want to delete ' + user.username + '?', function (confirmed) {
			if(confirmed){
				apiService.user.delete(user.id).success(function (data) {
          _.remove($scope.users, {id: user.id})
				});
			}
		})
	};

	$scope.isAdmin = function (user) {
		return _.find(user.authorities, {authority: 'ROLE_ADMIN'});
	};


}]);
