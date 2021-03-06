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
            {startDate: "2021-11-08T24:00:00.000Z", endDate: "2021-11-08T24:00:00.000Z", summary: "Mentoria"},
            {startDate: "2021-11-10T24:00:00.000Z", endDate: "2021-11-10T24:00:00.000Z", summary: "Mentoria formativa (entrega de piso)"},
            {startDate: "2021-11-10T24:00:00.000Z", endDate: "2021-11-10T24:00:00.000Z", summary: "Plazo máximo de enviar preguntas para conversatorio"},
            {startDate: "2021-11-17T24:00:00.000Z", endDate: "2021-11-17T24:00:00.000Z", summary: "Conversatorio (Habilidades blandas, Tecnología y sociedad, Economía del conocimiento)"},
            {startDate: "2021-11-22T24:00:00.000Z", endDate: "2021-11-22T24:00:00.000Z", summary: "Charla de Género"},
            {startDate: "2021-11-24T24:00:00.000Z", endDate: "2021-11-24T24:00:00.000Z", summary: "Mentoria"},
            {startDate: "2021-11-29T24:00:00.000Z", endDate: "2021-11-29T24:00:00.000Z", summary: "Mentoría"},
            {startDate: "2021-12-01T24:00:00.000Z", endDate: "2021-12-01T24:00:00.000Z", summary: "Presentación de infografía"},
            {startDate: "2021-12-03T24:00:00.000Z", endDate: "2021-12-03T24:00:00.000Z", summary: "Entrega reto de piso (Pieza gráfica asuntos de género)"},
            {startDate: "2021-12-10T24:00:00.000Z", endDate: "2021-12-10T24:00:00.000Z", summary: "Primera entrega trabajo escrito"},
            {startDate: "2021-12-06T24:00:00.000Z", endDate: "2021-12-06T24:00:00.000Z", summary: "Mentoria"},
            {startDate: "2021-12-13T24:00:00.000Z", endDate: "2021-12-13T24:00:00.000Z", summary: "Mentoria"},
            {startDate: "2021-12-15T24:00:00.000Z", endDate: "2021-12-15T24:00:00.000Z", summary: "Conversatorio (laboratorio y prototipado)"},
            {startDate: "2022-01-12T24:00:00.000Z", endDate: "2022-01-12T24:00:00.000Z", summary: "Mentoría formativa (entrega de piso)"},

        ],                     // List of events
        onInit: function (calendar) {}, // Callback after first initialization
        onMonthChange: function (month, year) {}, // Callback on month change
        onDateSelect: function (date, events) {}, // Callback on date selection
        onEventSelect: function() {}, // Callback on event selection - use $(this).data('event') to access the event
        onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
        onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
    });
});
