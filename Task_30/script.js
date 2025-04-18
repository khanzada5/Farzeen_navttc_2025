
let index = 0;
let messages = ["I'm a Web-Develper","And WordPress Expert"];


setInterval(function(){
    $("#text1").text(messages[index]);
    index = (index + 1) % messages.length; 
    }, 2000); 

    $("#btn").click(function(){
        $("#text2").text("Suiiiii");
      });