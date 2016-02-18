(function(){
    angular.module('secretSanta').directive('secsanEmailList', function() {
        return {
        	replace: true,
        	restrict: 'A',
            templateUrl: './templates/secretsanta.templates.emaillist.html',
            scope: { // CR: делаем все директивы с изолированным скоупом - это очень сильно стрктурирует код
        		emails: "=",
                allowNumber: "="
                // Мне надо сюда пробросить статус оповещения?
            },
            controller: 'EmailListController',
            controllerAs: 'emailList', 
            bindToController: true
        };
    });
    angular.module('secretSanta').controller('EmailListController', function(EmailListService) {
        var self = this;

        self.currentEmail = "";

        self.actions = {
            addEmail: function() { 
                if (EmailListService.validateEmail(self.currentEmail) && self.emails.indexOf(self.currentEmail) == -1) {  
                    self.emails.push(self.currentEmail);
                    self.currentEmail = "";
                }
                else
                {
                        
                    // CR: необходимо уведомлять пользователя о неудачном имейле. (Показывать уведомление)
                }
            },
            deleteEmail: function(idx) {
                self.emails.splice(idx, 1);
            }
        };
    });
})()