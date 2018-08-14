//Start game when Start button is clicked

  $('#start').on('click', function(){
    game.start();
  })
  
// Trivia list of questions and answers for video games into array.. Easy questions
// A great list of trivia questions can be found from https://opentdb.com 
var triviaList = [
    {
      question: '1)  What is the world\' first video game console?',
      choices: ['Coleco Telstar', 'Nintendo Color TV Game', 'Atari 2600', 'Magnavox Odyssey'],
      correctAnswer: 'Magnavox Odyssey'
    }, {
      question: '2) In what year was the original Sonic the Hedgehog game released?',
      choices: ['1989', '1991', '1993', '1995'],
      correctAnswer: '1991'
    }, {
      question: '3) Which company developed the video game Borderlands?',
      choices: ['Gearbox Software', '2K Games', 'Activision', 'Rockstar Games'],
      correctAnswer: 'Gearbox Software'
    }, {
      question: '4) What is the main character of Metal Gear Solid 2?',
      choices: ['Solidus Snake', 'Big Boss', 'Venom Snake', 'Raiden'],
      correctAnswer: 'Raiden'
    }, {
      question: '5) Which of these game franchises were made by Namco?',
      choices: ['Hadouken', 'Organ Grinder', 'Skewer', 'Showdown'],
      correctAnswer: 'Showdown'
    }, {
      question: '6)Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?',
      choices: ['The Legend of Zelda: Twilight Princess', 'The Legend of Zelda: Spirit Tracks', 'The Legend of Zelda: Four Swords', 'The Legend of Zelda: The Minish Cap'],
      correctAnswer: 'The Legend of Zelda: The Minish Cap'
    }, {
      question: '7) In Minecraft, which two items must be combined to craft a torch?',
      choices: ['Stick and Coal', 'Stick and Fire', 'Wood and Coal', 'Wood and Fire'],
      correctAnswer: 'Stick and Coal'
    }, {
      question: '8) Which of these video game engines was made by the company Epic Games?',
      choices: ['Unity', 'Unreal', 'Game Maker: Studio', 'Cry Engine'],
      correctAnswer: 'Unreal'
    }, {
      question: '9) In vanilla Minecraft, which of the following cannot be made into a block?',
      choices: ['Strength', 'Cut', 'Fly', 'Flash'],
      correctAnswer: 'Flash'
    }, {
      question: '10) In Super Mario Bros., who informs Mario that the princess is in another castle?',
      choices: ['Luigie', 'Yoshi', 'Bowser', 'Toad'],
      correctAnswer: 'Toad'
      }
  ];

  //Initialize values for resutls and set time counter value to 90
    var game = {
      correct: 0,
      incorrect: 0,
      counter: 90,
      unanswered: 0,
      
      countDown: function(){
      game.counter--;

      //If counter equals 0 then calculate score
      $('#counter').html(game.counter)
      if(game.counter == 0){
        game.done();
        
      }
      //This will allow to check if Done button has been pressed then calculate score
      if($('#done').on('click', function(){
         game.done();
        return
        
      }));
     },

    // start the game with a timer display trivia questions and answer choices
    start: function(){
      timer = setInterval(game.countDown, 1000)
      $('#display').prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
      $('#start, .instruction').remove();

      for(var i=0; i<triviaList.length; i++){
        $('#display').append('<h3>' + triviaList[i].question + '</h3>')

        for(var j=0; j < triviaList[i].choices.length; j++){
          $('#display').append("<input class='choice-not-selected' type='radio' name='question-"+i+"' value='"+triviaList[i].choices[j]+"'>  <label class='choice-selected'>"+ triviaList[i].choices[j]+"  </label></br>");
        }
      }
       //Add Done button
       $('<button id="done" class="btn" type="button" name="button-done">Done</button>').appendTo('#display');
    },
    // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
    // Tried multi loop solution with no avail

    done: function() {
        $.each($('input[name="question-0"]:checked'), function(){
        if($(this).val() === triviaList[0].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-1"]:checked'), function(){
        if($(this).val() === triviaList[1].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-2"]:checked'), function(){
        if($(this).val() === triviaList[2].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-3"]:checked'), function(){
        if($(this).val() === triviaList[3].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-4"]:checked'), function(){
        if($(this).val() === triviaList[4].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-5"]:checked'), function(){
        if($(this).val() === triviaList[5].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-6"]:checked'), function(){
        if($(this).val() === triviaList[6].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-7"]:checked'), function(){
        if($(this).val() === triviaList[7].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-8"]:checked'), function(){
        if($(this).val() === triviaList[8].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-9"]:checked'), function(){
        if($(this).val() === triviaList[9].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      // simple calculation to calcualte unanswered Array length - (sum of correct and incorrect)
      game.unanswered = triviaList.length  - (game.correct+game.incorrect);
      // Display results
      this.result();
     },
    // Clearing my timer and remove it from page, display correct answers, incorrect answers, unanswered 
      result: function(){
      clearInterval(timer);
      $('#display h2').remove();
      $('#display').html('<h2>All Done Results !</h2>'); 
      $('#display').append("<h3>Correct Answers: "+game.correct+"</h3>");
      $('#display').append("<h3>Incorrect Answers: "+game.incorrect+"</h3>");
      $('#display').append("<h3>Unanswered: "+game.unanswered+"<h3>");
      }
   }
      
    //End my game when my Done button clicked before timer is up
    $(document).on('click', function(){

     $('#display').on('click', '#done', function(){
     game.done();
     })
   });