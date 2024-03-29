const subTitleElem = document.querySelector('.subtitle')
const titleElem = document.querySelector('.title')

const colors = [
    'red',
    'blue',
    'green',
    'skyblue',
    'gold',
    'gray',
    'brown',
    'black'
]

window.addEventListener('click', () => {
    let indexChosseForColor = Math.floor(Math.random() * colors.length)
    if (colors[indexChosseForColor] == 'black') {
        subTitleElem.classList.add('color-font')
        titleElem.classList.add('color-font')
    }
    document.documentElement.style.backgroundColor = colors[indexChosseForColor]
    subTitleElem.innerHTML = colors[indexChosseForColor]
})