var url = 'https://bulbuli.netlify.app/download/'

var id = location.href.replace('https://www.youtube.com/watch?v=', '').slice(0, 11)

window.open(`${url}${id}`, '_blank')
