	angular.module('secretSanta', []);
	angular.module('secretSanta').controller('MainController', function() {
		var self = this;
		self.emailList = {
			isVisible: true,
			emails: [] 
		};
	});
	
	function validateEmail(email) {
        	return email && email.indexOf("@") >= 0;
        };
