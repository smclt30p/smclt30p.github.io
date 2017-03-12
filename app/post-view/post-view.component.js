angular.module("postView").component("postView", {
   
    templateUrl: "app/post-view/post-view.template.html",
    
    controller: ['$http', '$routeParams',
      function PostViewController($http, $routeParams) {
        
        var self = this;
          this.data = "Loading...";
        
          this.id = $routeParams.id;
          
        this.fetchPost = function(id) {
                        
            $http.get("/posts/data/" + self.id + ".post").then(function(response) {
                
                var conv = showdown.Converter();
                var text = showdown.makeHtml(response.data);
                self.text = text;
                
            }, function errorCallback(response) {
                self.text = "Error occured. Try again."
            })
            
        }
        
      }
    ]
    
});