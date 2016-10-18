//
// function MySport() {
//     document.getElementById("health_wode_a").click();
//     // $("#health_wode_a").click();
// }

$(function(){
    $(".atip").tooltip();
    $(".badge").tooltip();
    options={
        delay: { show: 500, hide: 100 },
        trigger:'click',
    };
    $(".optiontip").tooltip(options);
});
