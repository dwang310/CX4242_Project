$(document).ready(function() {
  var state = "AL";
  var lc = false;
  var rc = false;
  var probability = false;
  var interarrival = false;

  // update the graph
  $('#updateChange').click(function() {
    state = $('#stateChooser').val();
    lc = $('#showLC').is(":checked");
    rc = $('#showRC').is(":checked");
    probability = $('#showProbability').is(":checked");
    interarrival = $('#showInterarrival').is(":checked");
  });
});
