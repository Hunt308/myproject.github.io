(function (window) {
    var goodbyeSpeaker = {};
    
    ByeMessage = "GoodBye ";

    goodbyeSpeaker.ByeMessage= function(name){
        console.log(ByeMessage + name)
    }

    window.goodbyeSpeaker=  goodbyeSpeaker;
})(window);