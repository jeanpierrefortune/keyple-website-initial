$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });
});
document.getElementById('parse').onclick = function() {
    alert("AAA");
    document.getElementById('disp_player').innerHTML = position + " " + player_id;
}