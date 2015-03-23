(function() {
    'use strict';

	angular.module('plugin-alert', []).directive('alert', [ function () {
		return {
            scope: {
                api: '=?'
            },
            link: function(scope, element, attrs) {
            	scope.api.form.on.submitted(scope, function(message) {
            		alert(message);
                    scope.api.form.clear();
            	});
            }
        };
    }]);
})();