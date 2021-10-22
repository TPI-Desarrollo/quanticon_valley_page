$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

$('#myModalNews').on('shown.bs.modal', function () {
  $('#myModalNews').appendTo("body")
  $('#myInput').focus()
})