const jokeBtn = document.querySelector('#jokeBtn')
const jokeEl = document.querySelector('#joke')

const getJoke = async () => {
	const response = await fetch('https://icanhazdadjoke.com/', {
		headers: { Accept: 'application/json' },
	})
	const data = await response.json()
	jokeEl.innerText = data.joke
}

getJoke()

jokeBtn.addEventListener('click', async () => {
	await getJoke()
})
