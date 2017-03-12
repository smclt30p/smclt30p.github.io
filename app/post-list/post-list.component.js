angular.module("postList").component("postList",{
    
    templateUrl: "app/post-list/post-list.template.html",
    
    controller: function PostListController($http) {
    
    lookupTable = [
        {value:1, suffix:"st"},
        {value:2, suffix:"nd"},
        {value:3, suffix:"rd"},
        {value:4, suffix:"th"},
        {value:5, suffix:"th"},
        {value:6, suffix:"th"},
        {value:7, suffix:"th"},
        {value:8, suffix:"th"},
        {value:9, suffix:"th"},
        {value:0, suffix:"th"}
    ]
        
    this.formatOut = function(title, day, month) {
        return addSufix(day) + " " + month + " - " + title;
    }
    
    addSufix = function(day) {
        var daystr = day.toString();
        var last = Number(daystr[daystr.length - 1]);
        for (var i = 0; i < lookupTable.length; i++) {
            if (last == lookupTable[i].value) {
                return day + lookupTable[i].suffix;
            }
        }
    }
    
    var self = this;
    
    this.fetchPosts = function() {
        $http.get("posts/index.json").then(function(response) {
            self.data = response.data;
        });
    }
    
}
    
});