(function() {
    angular.module('secretSanta', []);

    function validateEmail(email) {
        	return email && email.indexOf("@") >= 0;
        };        
});
