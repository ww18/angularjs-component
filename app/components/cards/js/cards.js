/**
 * Created by phoebe on 8/30/2015.
 */
angular.module("cards",[])
    .directive("cards",cardsDirective)
    .controller("cardsContrl", cardsContrl)
    .factory("cardsService", cardsService);

function cardsDirective(){
    return {
        restrict: "EA",
        scope:{},
        templateUrl:"components/cards/template/cards.html",
        link: function(scope, element, attrs){
            scope.data = 'change the content';

        }
    }
}

function cardsContrl(){

}

function cardsService(){

}