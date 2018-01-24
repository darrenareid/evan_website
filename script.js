
  let whybesttextText = ""
  let nameText = ""
  let answerText = ""

  const whybesttext = $('#whybesttext')
  const whybestbutton = $('#whybestbutton')
  const name = $('#name')
  const answerbtn = $('#answerbtn')

  $(document).ready(function(){
      $('#answers').change(function(){
          answerText = $("input[name='answer']:checked").val();
      });
  });

  function inputHandler1(event) {
    whybesttextText = event.target.value
}

  function clickHandler1(event) {
    console.log(whybesttextText)
}

  function inputHandler2(event) {
    nameText = event.target.value
}

  function clickHandler2() {
    console.log(nameText)
    console.log(answerText)
}

  whybesttext.on('input', inputHandler1)
  whybestbutton.on('click', clickHandler1)
  name.on('input', inputHandler2)
  answerbtn.on('click', clickHandler2)

// THIS IS FOR THE HEADER MARQUEE!!
var marquee = $('div.marquee');
marquee.each(function() {
  var mar = $(this),indent = mar.width();
  mar.marquee = function() {
      indent--;
      mar.css('text-indent',indent);
      if (indent < -1.6 * mar.children('div.marquee-text').width()) {
          indent = mar.width();
      }
  };
  mar.data('interval',setInterval(mar.marquee,700/60));
});




// THIS IS THE POPUP WINDOW

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var survey = document.getElementById("survey");


    var answerandclose = document.getElementById("answerbtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    $('#whybestbutton').click(function() {
      $('input[type="text"]').val('');
})


    // When the user clicks on the button, open the modal
    survey.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on answer, close the modal
    answerandclose.onclick = function() {
        modal.style.display = "none";
    }

    // THIS IS TO PLAY SOUND WHEN RADIO IS CLICKED

    var Thankyou = document.createElement('audio');
        Thankyou.setAttribute('src', 'Thankyou.m4a');

    var notnice = document.createElement('audio');
        notnice.setAttribute('src', 'notnice.m4a');

    var hey = document.createElement('audio');
        hey.setAttribute('src', 'hey.m4a');

    $('#yes').click(function() {
        Thankyou.play();
      });

    $('#no').click(function() {
        notnice.play();
      });

    $('#maybe').click(function() {
        hey.play();
        });

    // THIS IS TO CLEAR THE FIELDS IN THE SURVEY AFTER ANSWER
    $('#answerbtn').click(function() {
      $('input[type="text"]').val('');
      $('input[type="radio"]').prop('checked', false);
})

    // THIS IS TO SAY THANK YOU AFTER survey
    $('#answerbtn').click(function() {
      responsiveVoice.speak("You have completed the Evan is the Best, survey. Thank you, " + nameText + ". " + "Have a nice day!", "UK English Female");
    });

    // THIS IS TO SAY YOU THINK EVAN IS THE BEST
    $('#whybestbutton').click(function() {
      responsiveVoice.speak("You think Evan is the best because, " + whybesttextText + "," + " Have a nice day!", "UK English Female");
    });
