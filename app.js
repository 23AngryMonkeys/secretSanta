var app = angular.module('santa', []);
app.controller('MailsController', function(){
	this.mail = "test@ya.ru";
});
app.directive('list', function(){
	return {
		templateUrl: 'create-list.html'
	};
});