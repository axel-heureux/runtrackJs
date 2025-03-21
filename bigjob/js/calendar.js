$(document).ready(function() {
    // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            // Open modal to request presence
            $('#eventModal').modal('show');
            $('#presenceDate').val(moment(start).format('YYYY-MM-DD'));
        }
    });

    // Handle form submission
    $('#presenceForm').on('submit', function(e) {
        e.preventDefault();
        const studentName = $('#studentName').val();
        const presenceDate = $('#presenceDate').val();
        const currentDate = moment().format('YYYY-MM-DD');

        // Check if the selected date is in the past
        if (moment(presenceDate).isBefore(currentDate)) {
            $('#error-message').show();  // Show error message
            return; // Don't submit the form
        }

        // If date is not in the past, submit the form
        alert(`Demande de présence soumise pour ${studentName} le ${presenceDate}`);
        $('#eventModal').modal('hide');
    });
});