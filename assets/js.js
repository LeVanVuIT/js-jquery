$(document).ready(function(){
    //Cài đặt sự kiện
    document.getElementById('btb1').onclick = function(){
        var html = $('#div1').html();
        alert(html);
    }
    //Cài đặt sự kiện 2
    document.getElementById('btb2').onclick = function(){
         $('#div1').html("<a href='#'>Liên kết</a> nội dung mới !!! <b>IN ĐẬM</b>");
    }
    //Cài đặt sự kiện3
    document.getElementById('btb3').onclick = function(){
        var text = $('#div1').text();
        alert(text);
    }
   //Cài đặt sự kiện4
   document.getElementById('btb4').onclick = function(){
    $('#div1').text("Đổi thành nội dung mới. <b>IN ĐẬM</b>");
    } 
});