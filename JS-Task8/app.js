// 1. Use the window.location object to redirect the user to a different webpage when a button is clicked.
function redirect() {
    location.assign('/JS-Task8/target.html');
}
// 2. Use the window.history object to go back to the previous page when a button is clicked.
function back() {
    history.back();
}
// 3. Access and display the user's browser name and version using the window.navigator object.
function getBrowserName() {
    document.getElementById('browser').innerText = navigator.appCodeName;
}
getBrowserName();
// 4. Display the screen width and height of the user's device using the window.screen object.
function getScreenSize() {
    document.getElementById('screen').innerText = `Width: ${screen.width} Height ${screen.height}`;
}
getScreenSize();
// 5. Change the background color of the document body to yellow when a button is clicked.
function changeBackgroundColor() {
    document.querySelector('body').style.backgroundColor = 'yellow';
}
// 6. Set a cookie with a name and value when a button is clicked.
function addCookie() {
    const key = 'lang';
    const value = encodeURIComponent('en');
    const thirty = 60 * 60 * 24 * 30;
    document.cookie = `${key}=${value};path=/;max-age=${thirty}`;
}
// 7. Select and highlight all paragraphs in a document when a button is clicked.
function highlightAllParagraphs() {
    document.querySelectorAll('p').forEach(p => {
        p.style.backgroundColor = 'red';
    });
}
// 8. Replace the text content of a paragraph with a new value when a button is clicked.
function replaceParagraphText() {
    document.getElementById('changeMe').innerHTML = 'New text';
}
// 9. Change the background color and add a custom data attribute to a specific element when a button is clicked.
function changeCustomAttribute() {
    const custom = document.querySelector('#customAttr');
    custom.dataset.indexNumber = '123';
}
// 10. Attach an event listener to a button that triggers an alert when clicked, and demonstrate event propagation by attaching another event listener to a parent element that triggers a different alert.
function addListeners() {
    const parentBtn = document.querySelector('#parentBtn');
    parentBtn.addEventListener('click', e => {
        alert('Parent alert called: ');
    })
    const childBtn = document.querySelector('#childBtn');
    childBtn.addEventListener('click', e => {
        alert('Child alert called: ');
        e.stopPropagation();
    })
}
addListeners();