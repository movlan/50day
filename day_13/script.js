const tagsEl = document.getElementById('tags')
const textAreaEl = document.getElementById('textarea')

textAreaEl.focus()

textAreaEl.addEventListener('keyup', (e) => {
	createTags(e.target.value)

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = ''
		}, 10)

		randomSelect()
	}
})

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim())
	tagsEl.innerHTML = ''
	tags.forEach((tag) => {
		const tagEl = document.createElement('span')
		tagEl.classList.add('tag')
		tagEl.innerText = tag
		tagsEl.appendChild(tagEl)
	})
}

function randomSelect() {
	const times = 30
	const interval = setInterval(() => {
		const randTag = pickRandomTag()

		highlightTag(randTag)

		setTimeout(() => {
			unHighlightTag(randTag)
		}, 99)
	}, 100)

	setTimeout(() => {
		clearInterval(interval)

		setTimeout(() => {
			const randTag = pickRandomTag()
			highlightTag(randTag)
		})
	}, times * 100)
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
	tag.classList.add('highlight')
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight')
}
