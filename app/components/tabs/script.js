/**
 * Created by phoebe on 15/9/6.
 */
angular.module('docsTabsExample', [])
    .directive('myTabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
            link: function(){},
            templateUrl: 'components/tabs/my-tabs.html'
        };
    })
    .directive('myPane', function() {
        return {
            require: '^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'components/tabs/my-pane.html'
        };
    });