$(document).ready(function(){
    $("#calendario").simpleCalendar({
        months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
        days: ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'],
        displayYear: true,              // Display year in header
        fixedStartDay: true,            // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
        displayEvent: true,             // Display existing event
        disableEventDetails: false, // disable showing event details
        disableEmptyDetails: false, // disable showing empty date details
        events: [
            {startDate: "2021-10-04T19:00:00.000Z", endDate: "2021-10-04T24:00:00.000Z", summary: "Primera Clase TPI"},
            {startDate: "2021-10-04T19:00:00.000Z", endDate: "2021-10-04T24:00:00.000Z", summary: "Inicio - Primer Piso"},
            {startDate: "2021-10-20T24:00:00.000Z", endDate: "2021-10-20T24:00:00.000Z", summary: "Entrega - Primer Piso"},
            {startDate: "2021-10-25T24:00:00.000Z", endDate: "2021-10-25T24:00:00.000Z", summary: "Inicio - Segundo Piso"},
        ],                     // List of events
        onInit: function (calendar) {}, // Callback after first initialization
        onMonthChange: function (month, year) {}, // Callback on month change
        onDateSelect: function (date, events) {}, // Callback on date selection
        onEventSelect: function() {}, // Callback on event selection - use $(this).data('event') to access the event
        onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
        onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
    });
});
