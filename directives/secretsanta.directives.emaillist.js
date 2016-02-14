(function(){
	angular.module('secretSanta').directive('secsanEmailList', function() { // CR: переименовал директиву
            return {
            	replace: true,
            	restrict: 'A',
                templateUrl: 'templates/secretsanta.templates.emaillist.html',
                scope: { // CR: делаем все директивы с изолированным скоупом - это очень сильно стрктурирует код
            		emails: "="
                },
                controller: 'EmailListController',
                controllerAs: 'emailList', // CR: старайся не придумывать разные имена для одних и тех же вещей,
                bindToController: true // CR: http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html прочитай вот это
            };
        });
	angular.module('secretSanta').controller('EmailListController', function() {
            var self = this;

            self.currentEmail = "";

            self.actions = {
                addEmail: function() { // CR: слово new не несет тут никакой нагрузки вообще, выбрасываем.
                    if (validateEmail(self.currentEmail)) {  // CR: необходимо уведомлять пользователя о неудачном имейле.
                    	// CR: добавить проверку на дублирование
                        self.emails.push(self.currentEmail);
                        self.currentEmail = "";
                    }
                },
                deleteEmail: function(idx) {
                    self.emails.splice(idx, 1);
                }
            };
        });
	function validateEmail(email) {
        	return email && email.indexOf("@") >= 0;
        };
})