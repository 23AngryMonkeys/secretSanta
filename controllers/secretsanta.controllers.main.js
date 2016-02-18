(function(){
	angular.module('secretSanta').controller('MainController', function() {
		var self = this;
		self.emailList = {
			isVisible: true,
			emails: [],
			allowNumber: 10
		};
		self.notification = {
			title: "HEAD",
			text: "TEXT",
			status: "ERROR"
		};
	});
})()
