// CR: каждый файлик хорошо заворачивать в самозывающиеся функции, это позволит изолировать скоуп
    (function() {
        // CR: давай разнесем в разные файлы. например инициализация приложения пускай пойдет в secretSanta.main.js
        // CR: вроде как рекомендуется не запихивать модули в переменные, а просто получать их через геттеры (см ниже)
        angular.module('secretSanta', []);
        // CR: эта директива пойдет в отдельный файлик, secretsanta.directives.emaillist.js
        angular.module('secretSanta').directive('secsanEmailList', function() { // CR: переименовал директиву
            return {
            	replace: true,
            	restrict: 'A', // CR: существуют проблемы с табличными элементами, если использовать директивы с синтаксисом <secsan-email-list />, поэтому делаем все директивы <div secsan-email-list></div>
                templateUrl: 'create-list.html', // CR: темплейт должен тогда называться secretsanta.templates.emaillist.js
                scope: { // CR: делаем все директивы с изолированным скоупом - это очень сильно стрктурирует код
            		emails: "="
                },
                controller: 'EmailListController', // CR: Контроллер вроде как конструктор объекта, поэтому с PascalCasing
                controllerAs: 'emailList', // CR: старайся не придумывать разные имена для одних и тех же вещей,
                bindToController: true // CR: http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html прочитай вот это
            };
        });
        // CR: контроллер для директивы предлагаю не выносить в отдельный файл, а хранить в том же файле, что и директива. 
        angular.module('secretSanta').controller('EmailListController', function() {
            // CR: обрати внимание - это сильно упрощает жизнь в контроллерах в самом верху я запоминаю ссылку на скоуп контроллера.
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
        // CR: вот это пойдет в отдельный файл controllers/secretsanta.controllers.main.js
       	angular.module('secretSanta').controller('MainController', function() {
       		var self = this;

       		self.emailList = {
   				isVisible: true,
   				emails: [] 
       		};
       	});


    	// CR: здесь будут храниться приватные функции
    	// CR: чуть позде, когда таких вот вспомогательных функций станет хотя бы пара тройка, необходимо будет выделить их в сервис. Но можно начать уже сейчас, заодно познакомишься с сервисами.
        function validateEmail(email) {
        	return email && email.indexOf("@") >= 0;
        }
    })();
