var numInput = document.querySelector('#numInput');
var factOutput = document.querySelector('#factOutput');
var incInput = document.querySelector('#incInput');

const getFact = () => {
	factOutput.innerHTML = ''


	var number = numInput.value;
	var inc = incInput.value;
	var baseUrl = 'http://numbersapi.com/'
	//vaja saada sarnane URL
	//http://numbersapi.com/1..3

	var url = `${baseUrl}${number}..${parseInt(number) + parseInt(inc)}`;

	if (number != '' && inc != '') {
		axios.get(url)
		.then(response => {
			for (var item in response.data){
				var li = document.createElement('li');
				li.innerText = response.data[item];
				factOutput.appendChild(li)
			}
		})
		.catch(error => {
			console.log(error);
		})
		}	
		
	}

	numInput.addEventListener('input', getFact);
	incInput.addEventListener('input', getFact);





































