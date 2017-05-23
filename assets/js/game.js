$(document).ready(function() {

	var counter = 0;
	var wins = 0;
	var losses = 0;
	
	var crystals = ['assets/images/crystal1.png','assets/images/crystal2.png','assets/images/crystal3.png','assets/images/crystal4.png'];
	
	$('#win').text(wins);
	$('#loss').text(losses);
	
	createCrystals();
	newGame();

	
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		var numberToGuess = Math.floor(Math.random()*(120-19+1)+19);

		$('#numberTarget').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + $(this).data('num');
		  
		    $('#yourScore').text(counter);
            
            $('#status').empty();
            
		    if (counter == numberToGuess){
		      $('#status').text('You won!');
		      wins += 1;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      createCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses += 1;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        createCrystals();
		        newGame();
		    }
		});
	}
	
	function createCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.floor(Math.random()*(12-2)+2);
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}


});