$(document).ready(function () {
  var countdown = 30;
  var intervalId;
  var correctAnswers;
  var wrongAnswers;
  var unanswered;



  function countdownTimer() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    countdown--;
    $('#timer').html(" " + countdown + " " + "seconds");
    if (countdown === 1) {
      $('#timer').html(" " + countdown + " " + "second");
    }
    else if (countdown === 0) {
      stop();
      displaySummary();
    }
  }

  function stop() {
    $('#timeRemaining').hide();
    $('.questions').hide()
    $('.endGame').hide();
  }


  function displaySummary() {
    $('.results').show();
    unanswered = (10 - (correctAnswers + wrongAnswers));
    $('#correctScore').text("Correct Answers:" + " " + correctAnswers);
    $('#wrongScore').text("Wrong Answers:" + " " + wrongAnswers);
    $('#unanswered').text("Unanswered:" + " " + unanswered);
  }

  // .ON CLICK FUNCTIONS
  // i finally understand i am so happpy 

  $('#start').on('click', function () {
    $('#finished').show();
    countdownTimer();
  });

  $('#finished').on('click', function () {
    $('.results').show();
    displaySummary();
    $('#start').hide();
    $('.questions').hide();
    $('#timeRemaining').hide();
    $('#finished').hide();
    $('.owls').hide();
    $('.owls2').hide();

  });

  $('input[type=radio]').on('change', function () {
    correctAnswers = $('input[value=correct]:checked').length;
    wrongAnswers = $('input[value=wrong]:checked').length;
    unanswered = (10 - (correctAnswers + wrongAnswers));
  });

})