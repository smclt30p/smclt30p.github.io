angular.module("postView").component("postView", {
   
    templateUrl: "app/post-view/post-view.template.html",
    
    controller: ['$http','$timeout', '$routeParams',
      function PostViewController($http, $timeout, $routeParams) {
        
        var self = this;
        this.data = "Loading...";
        this.id = $routeParams.id;
        this.prism = Prism;
          
        this.fetchPost = function(id) {
                        
            $http.get("/posts/data/" + self.id + ".post").then(function(response) {
                
                var conv = showdown.Converter();
                var text = showdown.makeHtml(response.data);
                self.text = text;
                                
            }, function errorCallback(response) {
                self.text = "Error occured. Try again."
            })
            
        }

        $timeout(function() {
        var code = document.getElementsByTagName("code");
            for (var i = 0; i < code.length; i++) {
                self.prism.highlightElement(code[i]);
            }
        }, 2000, false);
      }
    ]
    
});