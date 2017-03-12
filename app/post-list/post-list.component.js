angular.module("postList").component("postList",{
    
    templateUrl: "app/post-list/post-list.template.html",
    
    controller: function PostListController($scope) {
    
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
    ]
    
    this.data = 
    
    [
      {
        name: "June",
        year: 2016,
        posts: [
          {
            day: 7,
            title: "Starting a blog",
            url: "http://www.example.com"
          },
          {
            day: 8,
            title: "StackOverflow is lying to you - Converting a stack trace to a string",
            url: "http://www.example.com"
          },
          {
            day: 23,
            title: "Console Output - printf vs StringBuilder",
            url: "http://www.example.com"
          },
          {
            day: 25,
            title: "Gentoo Linux - The best distro for fast hardware",
            url: "http://www.example.com"
          }
        ]
      }
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
    
}
    
});