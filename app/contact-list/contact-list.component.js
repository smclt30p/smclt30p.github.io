angular.module("contactList").component("contactList",{
    
    templateUrl: "app/contact-list/contact-list.template.html",
              
    controller: function ContactListController($scope) {
    
    this.contacts = [
        
            {
                title:"E-mail (smclt30p@gmail.com)",
                href:"mailto://smclt30p@gmail.com"
            },{
                title:"Facebook",
                href:"https://www.facebook.com/smclt30p"
            },{
                title:"GitHub",
                href:"https://www.github.com/smclt30p"
            },{
                title:"Google+ (deprecated)",
                href:"https://plus.google.com/107234209038978606476"
            },{
                title:"Twitter (deprecated)",
                href:"https://www.twitter.com/smclt30p"
            }
        
        ]
    }
})