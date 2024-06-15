function showPage(page) {
    fetch(`${page}.html`)
    .then(response => response.text())
    .then(html => {
        document.getElementById('main-content').innerHTML = html;
    })
    .catch(error => console.log(error));
}
showPage('home');