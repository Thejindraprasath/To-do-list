$(document).ready(function(){
    $('#add-btn').click(function(){
        var taskCount = $('#todo-list li').length;
        if(taskCount >= 6){
            alert("You can only add up to 6 tasks..!☹️");
            return;
        }
        const task  =$('.inputvalue').val().trim();
        if(task !== ''){
            $("#todo-list").append(`<li class="list container"> ${task} <button class = "delete-btn"> <i class="far fa-trash-alt"></i></button></li>`);
            $('.inputvalue').val('');
            
        }
    });

    $('#todo-list').on('click','.delete-btn',function(){
        $(this).parent().remove();
    });

    $('.inputvalue').keypress(function(e){
        if(e.key === "Enter"){ //or e.which === 13 "unicode of 'Enter' key is 13" or e.code ===13
            $('#add-btn').click();
        }
    });
});