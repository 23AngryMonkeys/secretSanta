var app = angular.module('santa', []);
app.directive('list', function(){
	return {
		templateUrl: 'create-list.html',
		controller: ['$scope', function($scope){
				var mails = [];
				this.mails = mails;
				$scope.addNewMail = function(newMail){
					if(newMail.indexOf("@") != -1)
					{
						mails.push(newMail);
						$scope.newMail = null;
				    }
				};
				$scope.deleteMail = function(idx){
					mails.splice(idx, 1);
				};
		}],
		controllerAs: 'listMails'
	};
});