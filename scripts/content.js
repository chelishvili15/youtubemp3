const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69f56c9d5dmsh47a93b89b474344p121e24jsnec66aa328a1e',
		'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
	}
};

let url = 'https://youtube-mp3-download1.p.rapidapi.com/dl?id='

let id = location.href.match(/[^=]+(?=$)/g)[0]

// console.log(id)

fetch(`${url}${id}`, options)
	.then(response => response.json())
	.then(response => console.log(window.open(response.link, '_blank')))
	.catch(err => console.error(err));
