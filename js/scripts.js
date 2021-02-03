
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      const funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();

    //branching
    let workCheckBoxes =  $("input:checkbox[name=work-transportation]:checked").length;
    let funCheckBoxes = $("input:checkbox[name=fun-transportation]:checked").length;
    if (workCheckBoxes > funCheckBoxes) {;
      $('#work-responses').append("<br>" + "You take more methods of transportation to work. " + workCheckBoxes + " to be exact.")
    } else if (workCheckBoxes < funCheckBoxes) {
      $('#fun-responses').append("<br>" + "You take more methods of transportation to work. " + funCheckBoxes + " to be exact.")
    } else if (workCheckBoxes = funCheckBoxes) {
      alert("You like an equal amount");
    } else  {
      alert("error. did you fill this out?")
    }
  });
});