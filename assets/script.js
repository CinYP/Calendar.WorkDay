// Dynamically update time and date 
let date = moment();
$("#currentDay").text(date.format("dddd,MMMM Do"));

//Preping the page to run as soon as it's safe to run JS
$(document).ready(function(){
//Event listener for Save Button
$(".saveBtn").on("click", function(){
    let text = $(this).siblings("task").val();
    let time = $(this).parent().attr("id");

    //setting local storage 
    localStorage.setItem(time,text);
    
})
}); 

//Function to update based on time of day 
function timeblocking() {
    let currentTime = moment().hour();

    //console.log(currentTime)

    $(".task-info").each(function(){
        let blockTime = parseInt($(this).attr("id"))
        console.log(blocktime)
        if(blockTime < currentTime){
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
            $(this).attr('disabled','disabled');
        } else if (blockTime === currentTime){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeAttr('disabled');
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            
        }
    })
};

//Getting any set tasks from local storage
$("#9 .task").val(localstorage.getItem("9"));
$("#10 .task").val(localstorage.getItem("10"));
$("#11 .task").val(localstorage.getItem("11"));
$("#12 .task").val(localstorage.getItem("12"));
$("#13 .task").val(localstorage.getItem("13"));
$("#14 .task").val(localstorage.getItem("14"));
$("#15 .task").val(localstorage.getItem("15"));
$("#16 .task").val(localstorage.getItem("16"));
$("#17 .task").val(localstorage.getItem("17"));
$("#18 .task").val(localstorage.getItem("18"));

//declaring timeblocking function
timeblocking();
