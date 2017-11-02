//curent date
function setDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    document.getElementById("datepicker").value = today;
}


//detapicker

$('#datetimepicker2').datepicker({
    format: "yyyy-mm-dd",
    weekStart: 1,
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    autoclose: true,
    daysOfWeekHighlighted: "0,6",
    todayHighlight: true,
    beforeShowYear: function (date) {
        if (date.getFullYear() == 2007) {
            return false;
        }
    }

});

//blocking input worker time input when option were selected
function chooseTimeWrittenBlock() {
  var workerTime = document.getElementById('workerWrittenTime');
  
    workerTime.disabled=true;  
   } 
 // 

$("#timeSelect").change(function(){
        document.getElementById('workerWrittenTime').disabled=false;
    })






    function writtenTimeSelectBlock() {
       //// var workerTime = document.getElementById("workerWrittenTime");
       // workerTime.onchange = function () {
           if ($("#workerWrittenTime").is(":checked") ){
                $("timeSelect").prop("disable", "disable");
            }
       }
   // }
$( "#target" ).change(function() {
  alert( "Handler for .change() called." );
});

