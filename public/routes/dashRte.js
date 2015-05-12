/**
 * Created by jon on 5/4/15.
 */

angular.module('dash').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/lost"); // default page instead of 404?
    return $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'views/home.html'
        })
        .state('lost', {
            url: '/lost',
            templateUrl: 'views/lost.html'
        })
        .state('member list', {
            url: '/memberList',
            templateUrl: 'views/memberList.html'
        })
        .state('member', {
            url: '/members/:memberId', // <a sref="member({memberId:member.id}}" defined in "member in members"
            templateUrl: 'views/memberList.html'
        });
});