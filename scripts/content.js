var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69f56c9d5dmsh47a93b89b474344p121e24jsnec66aa328a1e',
		'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
	}
};

var url = 'https://youtube-mp3-download1.p.rapidapi.com/dl?id='

var id = location.href.replace('https://www.youtube.com/watch?v=', '')

fetch(`${url}${id}`, options)
	.then(response => response.json())
	.then(response => window.open(response.link, '_blank'))
	.catch(err => console.error(err));
