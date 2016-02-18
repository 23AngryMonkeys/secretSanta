(function(){
	angular.module('secretSanta').service('EmailListService', function(){
		var self = this;
		self.validateEmail = function(email) {
        	return email && email.indexOf("@") >= 0;
        };
	})
})()