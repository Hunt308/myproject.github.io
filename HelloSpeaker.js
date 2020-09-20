(function (window) {
    var helloSpeaker = {};
    
    helloMessage = "Hello ";

    helloSpeaker.sayHello = function(name){
        console.log(helloMessage + name)
    }

    window.helloSpeaker = helloSpeaker;
})(window);


