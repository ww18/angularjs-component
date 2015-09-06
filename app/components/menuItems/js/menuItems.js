/**
 * Created by phoebe on 8/30/2015.
 */
angular.module("myApp",[])
    .directive("cards",function(){
        return {
            restrict: "EA",
            require:'menuItems',
            //templateUrl:"components/cards/template/cards.html",
            link: function(scope, element, attrs){
                scope.data = 'change the content';

            },
            controller:function(){
                this.change = function(){
                    alert(1);
                }
            }
        }
    })
    .directive("menuItems",function(){
        return {
            restrict: "EA",


            //controller:"menuItemsContrl",
            templateUrl:"components/menuItems/template/menuItems.html",
            link: function(scope, element, attrs, ctrl){
                scope.clickItem = function(){
                    ctrl.change('menuClickChange');
                }

            },
            controller: function(){

            }
        }
    })
    .directive('menus', function(){
        return {
            restrict: "EA",
            scope:{},
            template: '<ul><menu-items ng-repeat="item in data" data="item"></menu-items></ul>',
            link: function(scope, element, attrs){
                var data = [
                    {"name":"menu1"},
                    {"name":"menu2"},
                    {"name":"menu3"},
                    {"name":"menu4"}
                ];
                scope.data = data;
            }
        }
    })

    //.controller("menuItemsContrl", menuItemsContrl)
    //.factory("menuItemsService", menuItemsService);

function menuDirective(){
    return {
        restrict: "EA",
        scope:{},
        template: '<ul><menu-items ng-repeat="item in data" data="item"></menu-items></ul>',
        link: function(scope, element, attrs){
            var data = [
                {"name":"menu1"},
                {"name":"menu2"},
                {"name":"menu3"},
                {"name":"menu4"}
            ];
            scope.data = data;
        }
    }
}
function menuItemsDirective(){
    return {
        restrict: "EA",
        scope:{
            data: '='
        },
        replace: true,
        require: "^cards",
        controller:"menuItemsContrl",
        templateUrl:"components/menuItems/template/menuItems.html",
        link: function(scope, element, attrs, ctrl){
            scope.clickItem = function(){
                ctrl.change('menuClickChange');
            }

        }
    }
}


function cardsDirective(){
    return {
        restrict: "EA",
        scope:{},
        templateUrl:"components/cards/template/cards.html",
        link: function(scope, element, attrs){
            scope.data = 'change the content';

        },
        controller:function(){
            this.change = function(){
                alert(1);
            }
        }
    }
}

function menuItemsContrl($scope, $element, $attrs){
    //console.log($scope);
    //console.log($element);
    //console.log($attr);

}

function menuItemsService(){

}