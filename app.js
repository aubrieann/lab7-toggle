$(document).ready(function () {
 
    $('#nav li').hover(function () {
        $('li', this).fadein("slow");
        },
        function () {
        $('ul', this).fadeout("slow"); 
        });
});