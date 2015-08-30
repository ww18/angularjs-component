/**
 * Created by phoebe on 8/30/2015.
 */
angular.module("menuItems",['cards'])
    .directive("menuItems",menuItemsDirective)
    .directive('menus', menuDirective)
    .controller("menuItemsContrl", menuItemsContrl)
    .factory("menuItemsService", menuItemsService);

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
        controller:"menuItemsContrl",
        templateUrl:"components/menuItems/template/menuItems.html",
        link: function(scope, element, attrs){

        }
    }
}

function menuItemsContrl($scope, $element, $attrs){
    //console.log($scope);
    //console.log($element);
    //console.log($attr);
    $($element).on('click', function(e){
        console.log(e.target.innerText);
    })

}

function menuItemsService(){

}