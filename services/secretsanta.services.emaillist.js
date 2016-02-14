(function(){
	angular.module('secretSanta').factory('emaillist', function(){
    	function validateEmail(email) {
        	return email && email.indexOf("@") >= 0;
        };
	})
})