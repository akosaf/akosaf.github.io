function add() {
    item = $('input').val();
    if (item != "") {
        $('ul').append(`<li><button class="done" onclick="done()">&#x2714;</button> <button class="delete" onclick="del()">&#x2716;</button> ${item}</li>`);
        $('input').val("");
    };
};

$(document).on('keypress', function(e) {
    if(e.which == 13) {add()}
})

function done() {
    $(event.target.parentElement).css("color", "grey");
}
function del() {
    $(event.target.parentElement).remove();
}