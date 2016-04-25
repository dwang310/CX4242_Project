$(document).ready(function(){
  // update the graph
  $('#updateChange').click(function() {
    var state = $('#stateChooser').val();
    var lc = $('#showLC').is(":checked");
    var rc = $('#showRC').is(":checked");
    var probability = $('#showProbability').is(":checked");
    var interarrival = $('#showInterarrival').is(":checked");
  });
});
