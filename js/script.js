var zoom = 1;
var svg = $('svg');

//Click event listener for path in SVG map  
$('path').on('click', function(){
	$(this).css('background', '#F5999C')
	$('.countryName').empty();

	var clickedPath = this; // Store the reference to the clicked SVG path	
	
// API call settings
var settings = {
async: true,
crossDomain: true,
url: 'https://country-facts.p.rapidapi.com/all/flag/' + this.attributes.title.value,
method: 'GET',
headers: {
  'X-RapidAPI-Key': '9fe4a5c869msh1171fa58d0e5baep13ca79jsn02b8f92bc15d',
  'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
}
};

// Make the API call
$.ajax(settings).done(function (response) {
    console.log(response);
    var country = $('<h4>').text(clickedPath.attributes.title.value);
    var countryName = $('.countryName').append(country).css({'font-family': 'Dosis', 'text-align': 'center', 'margin-top': '20px', 'color': 'white', 'display': 'flex', 'align-items': 'center'});
    var flagUrl = response.flag;
    
    // Fetch the flag as a Blob
    fetch(flagUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL object from the Blob
        var flagObjectURL = URL.createObjectURL(blob);
        var flagImg = $('<img>').attr('src', flagObjectURL).css({'width': '40px', 'height': '35px', 'margin-left': '5px'});
        countryName.append(flagImg);
      })
      .catch(error => {
        console.error('Failed to fetch the flag:', error);
      });
  });


// Zoom in, zoom out and recycle
		// $('.zoom').on('click', function(){
		// 	zoom += 0.1;
		// 	$('.target').css('transform', 'scale(' + zoom + ')');
		// 	console.log(zoom)
		
		// });
		// $('.zoom-init').on('click', function(){
		// 	zoom = 1;
		// 	$('.target').css('transform', 'scale(' + zoom + ')');
		// });
		// $('.zoom-out').on('click', function(){
		// 	zoom -= 0.1;
		// 	$('.target').css('transform', 'scale(' + zoom + ')');
		// });

		// $('path').on('click', function(){
			
		// })


     

	
})		