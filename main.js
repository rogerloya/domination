
// Part 1
function selectAndStrikeThrough() {

// Step 1
    const listItem = document.querySelector('li');
    console.log(listItem);

// Step 2
    listItem.style.textDecoration = 'line-through';
}

selectAndStrikeThrough();


// Step 3
function setImage(id, url) {
    const image = document.querySelector(id);
    image.style.height = '250px';
    image.src = url;
}

// Step 4
setImage('#image-1', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2F3840x2160%2F1707%2FNeuschwanstein-castle-dusk-Germany_3840x2160.jpg&f=1&nofb=1')
setImage('#image-2', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2F3840x2160%2F1707%2FNeuschwanstein-castle-dusk-Germany_3840x2160.jpg&f=1&nofb=1')
setImage('#image-3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2F3840x2160%2F1707%2FNeuschwanstein-castle-dusk-Germany_3840x2160.jpg&f=1&nofb=1')



// Step 5

function removeArgument() {
    const argumentsU1 = document.querySelector('#arguments li');
    arguments.remove();
}

removeArgument();
removeArgument();

function changeIDFontSize(size, id) {
    const string = document.getElementById(id);
    string.style.fontSize = size;
}

changeIDFontSize('12px', "title")


//Part 2
function addToArguments(domElement) {
    const argumentsU1 = document.querySelector('#arguments');
    console.log('arguments', argumentsU1);
    argumentsU1.appendChild(domElement);
}

const newElement = document.createElement('li');
newElement.innerText = 'hello world';
addToArguments(newElement);

function changeImageSize(imageSize, id) {
    const element = document.getElementById(id);
    element.style.height = `${imageSize}px`
}

changeImageSize(30, "image-1")
changeImageSize(30, "image-2")
changeImageSize(30, "image-3")

function makeElementInvisible(element) {
    element.className = 'invisible'
}

const h1 = document.querySelector('h1')
makeElementInvisible(h1)


// Part 3

function makeLi(test) {
    const li = document.createElement('li';
    li.innerText = text;
    return li
}

const newLi = makeLi('I am a new LI');
addToArguments(newLi);

function makeHeader(headerSize, text) {
    const tagName = 'h' + headerSize;
    const header = document.createElement(tagName);
    header.innerText= text;
    return header
}

const newHeader = makeHeader(5, 'this is our new header')
addToArguments(newHeader);