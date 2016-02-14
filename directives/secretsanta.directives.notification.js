angular.module('secretSanta').directive('secsanNotification', function(){
		return {
			replace: true,
        	restrict: 'A',
        	scope: {
        		title: '=',
        		text: '=',
        		status: '='
        	},
            templateUrl: './templates/secretsanta.templates.notification.html',
            controller: 'NotificationController',
            controllerAs: 'notification',
            bindToController: true
	};
});
angular.module('secretSanta').controller('NotificationController', function(title) {
        var self = this;
        self.title = header;
        
        self.actions = {
        	closeNotification: function(){
        	}
        };
    });