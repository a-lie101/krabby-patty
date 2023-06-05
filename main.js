const krabbyPatty = document.getElementById('krabby-patty');
var dimension = 60;

function enlargeKrabbyPatty() {
    krabbyPatty.style.height = `${dimension}px`;
    krabbyPatty.style.width = `${dimension}px`;
    dimension += 10;
}