$(function(){

	$('.carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  select: 5
	});

});


var personalityTypes = { 
	introvert: 0,
	socialButterfly: 0,
	controlFreak: 0,
	hipster: 0,
};

var totalPoints = [];

$('form').on('submit', function(e){
	e.preventDefault();

	if ($('input[type=radio]:checked').length < 3){
		swal({
			title: "Empty Fields!",
			text: "Please complete quiz before submitting",
			type: "warning",
			confirmButtonText: "Ok"
		});
	} else {

		var choice1 = $('input[name=q1]:checked').val();
		personalityTypes[choice1] = personalityTypes[choice1] + 1;
		var choice2 = $('input[name=q2]:checked').val();
		personalityTypes[choice2] = personalityTypes[choice2] + 1;
		var choice3 = $('input[name=q3]:checked').val();
		personalityTypes[choice3] = personalityTypes[choice3] + 1;

		$('form input:checked').each(function(){
			personalityTypes[$(this).val()] += 1;
		});


		for (var key in personalityTypes) {
			totalPoints.push({
				name: key,
				points: personalityTypes[key]
			});
		};


		totalPoints.sort(function(a, b){
			return b.points - a.points
		});


		var random = Math.floor(Math.random() * 2);
		
		function pickOne(arr) {
			if (Math.random() > 0.5) {
				arr.pop();
			}
			else {
				arr.shift();
			}
		}

		if (totalPoints[0].name === "introvert"){
			totalPoints[0].sushi = ["uni", "handroll"]; 
			pickOne(totalPoints[0].sushi);

		} else if (totalPoints[0].name === "socialButterfly"){
			totalPoints[0].sushi = ["spicySalmon","tempura"];
			pickOne(totalPoints[0].sushi);


		} else if (totalPoints[0].name === "controlFreak"){
			totalPoints[0].sushi = ["sashimi", "wasabi"];
			pickOne(totalPoints[0].sushi);

		} else if (totalPoints[0].name === "hipster") {
			totalPoints[0].sushi = ["gari", "futo"];
			pickOne(totalPoints[0].sushi);
		};

		var jump = totalPoints[0].sushi[0];
		
		switch (jump) {
			case "uni":
				$('.carousel').flickity('select', 0, true);
				break;

			case "handroll":
				$('.carousel').flickity('select', 1, true);
				break;

			case "spicySalmon":
				$('.carousel').flickity('select', 2, true);
				break;

			case "tempura":
				$('.carousel').flickity('select', 3, true);
				break;

			case "sashimi":
				$('.carousel').flickity('select', 4, true);
				break;

			case "wasabi":
				$('.carousel').flickity('select', 5, true);
				break;

			case "gari":
				$('.carousel').flickity('select', 6, true);
				break;

			case "futo":
				$('.carousel').flickity('select', 7, true);
				break;
		};

		console.log(jump);

		$('.box').addClass("close")
	};

	$('img').mouseenter(function(){
		$('.left img').addClass('dance');
	});

});


