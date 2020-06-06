var h2 = document.querySelector("h2");
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");

    h2.textContent = "You Just Cancel:"+ "   "  + $(this).text(); 
 
 
});
 

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
        h2.textContent = "You Just Deleted:"+ "   "  + $(this).text();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){

    if(event.which ===13){
        var newtodo = $(this).val();
        $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newtodo + " </li>");

        h2.textContent = "You Just Added:" + "   " + $(this).val();
        
    }

});
$("#ii").on("click", function(){
    $("input").fadeToggle(1000);
    
});

// if($(this).css("color")=== "rgb(128, 128, 128)"){
//     $(this).css(unstrike);
// }else{
//     $(this).css(strike);
// };

  
 
// });
// var strike ={
// color: "grey",
// textDecoration: "line-through" 
// }
// var unstrike ={
// color: "black",
// textDecoration: "none" 