
$(function(){

    $("#MA122checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#MA122monblock").show();
        }
        else{
            $("#MA122monblock").hide();
        }
        if ($(this).is(":checked")) {
            $("MA122wedblock").show();
        }
        else{
            $("#MA122wedblock").hide();
        }
        if ($(this).is(":checked")) {
            $("#MA122friblock").show();
        }
        else{
            $("#MA122friblock").hide();
        }
    })

    $("#MA122Rcheckbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#MA122Rblock").show();
        }
        else{
            $("#MA122Rblock").hide();
        }
        
    })

    $("#CS115checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CS115monblock").show();
        }
        else{
            $("#CS115monblock").hide();
        }
        if ($(this).is(":checked")) {
            $("CS115wedblock").show();
        }
        else{
            $("#CS115wedblock").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS115friblock").show();
        }
        else{
            $("#CS115friblock").hide();
        }
    })

    $("#CS115labcheckbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CS115labblock").show();
        }
        else{
            $("#CS115labblock").hide();
        }
        
    })

    $("#PEP111checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#PEP111monblock").show();
        }
        else{
            $("#PEP111monblock").hide();
        }
        if ($(this).is(":checked")) {
            $("#PEP111friblock").show();
        }
        else{
            $("#PEP111friblock").hide();
        }
    })

    $("#PEPRcheckbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#PEPRblock").show();
        }
        else{
            $("#PEPRblock").hide();
        }
        
    })

    $("#CAL103checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CAL103monblock").show();
        }
        else{
            $("#CAL103monblock").hide();
        }
        if ($(this).is(":checked")) {
            $("CAL103wedblock").show();
        }
        else{
            $("#CAL103wedblock").hide();
        }
        if ($(this).is(":checked")) {
            $("#CAL103friblock").show();
        }
        else{
            $("#CAL103friblock").hide();
        }
    })

    $("#CS146checkbox").click(function(event){
        if ($(this).is(":checked")) {
            $("#CS146tuesblock").show();
        }
        else{
            $("#CS146tuesblock").hide();
        }
        if ($(this).is(":checked")) {
            $("#CS146thurblock").show();
        }
        else{
            $("#CS146thurblock").hide();
        }
    })

})

$('#CAL103checkbox').prop('checked', true);
$('#CS115checkbox').prop('checked', true);
$('#CS115labcheckbox').prop('checked', true);
$('#MA122checkbox').prop('checked', true);
$('#MA122Rcheckbox').prop('checked', true);
$('#CS146checkbox').prop('checked', true);
$('#PEP111checkbox').prop('checked', true);
$('#PEPRcheckbox').prop('checked', true);

$(document).ready(function(){ 
    $("#MA122cp").change(function(){ 
           $(".MA122show").css("background-color", $(this).val());
    }); 
    $("#MA122Rcp").change(function(){ 
        $(".MA122Rshow").css("background-color", $(this).val());
    }); 
    $("#CS115cp").change(function(){ 
        $(".CS115show").css("background-color", $(this).val());
    });
    $("#CS115labcp").change(function(){ 
        $(".CS115labshow").css("background-color", $(this).val());
    }); 
    $("#CS146cp").change(function(){ 
        $(".CS146show").css("background-color", $(this).val());
    });
    $("#PEP111cp").change(function(){ 
        $(".PEP111show").css("background-color", $(this).val());
    }); 
    $("#PEPRcp").change(function(){ 
        $(".PEPRshow").css("background-color", $(this).val());
    });
    $("#CAL103cp").change(function(){
        $(".CAL103show").css("background-color", $(this).val());
    });
})


