(function(){
   	angular.module('secretSanta').controller('MainController', function() {
		var self = this;
		self.emailList = {
			isVisible: true,
			emails: [] 
		};
	});
})