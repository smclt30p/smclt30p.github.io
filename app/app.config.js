angular.module('app').config(["$routeProvider", function config($routeProvider) {
    
    /* Router configuration */
    
    $routeProvider
    .when("/home",{
        template:"<home-page></home-page>"
    })
    .when("/post/:id",{
        template:"<post-view></post-view>"
    })
    .otherwise("/home");
    
}]);