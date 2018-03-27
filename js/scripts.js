
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var counter1 = 0;
    $("input:checkbox[name=warningsigns]:checked").each(function(){
      counter1 += 1;
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      counter1 += 1;
    });
    $("input:checkbox[name=copingmethods]:checked").each(function(){
      counter1 -= 1;
    });
    if(counter1 > 5){
      alert("Go to the hospital!!!");
    }
    else if(counter1 > 2){
      alert("You are doing fine, good job.");
    }
    else{
      alert("You're doing great!");
    }
  });
});
