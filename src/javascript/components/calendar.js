
// function calendar() {

// }

$('#datepicker').datepicker();
$('#datepicker').on('changeDate', function(e) {
    $('#my_hidden_input').val(
        $('#datepicker').datepicker('getFormattedDate')
    );
    console.log(e.date);
});