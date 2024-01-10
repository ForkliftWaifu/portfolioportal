let overview = document.getElementById("overview");
let information = document.getElementById("information");
let quoteGenerator = document.getElementById("quote-generator");
let img = document.getElementById("portfolioimg");
let resetInformation = document.getElementById('information').innerHTML
let resetImg = document.getElementById("portfolioimg").src;
let currentPage = 0;
let sample1 = document.getElementById('sample1');
let sample2 = document.getElementById('sample2');
let buttonNext = document.getElementById("nav-next");
let buttonPrevious = document.getElementById('nav-previous');

function navPageNext() {
    if (currentPage == 0) {
        sample1.style.display = 'inline-block';
        sample2.style.display = 'inline-block';
        quoteGenerator.style.display = 'none';
        overview.style.display = 'none';
        buttonPrevious.style.display = 'inline-block';
        currentPage = 1;
    }
};

function navPagePrevious() {
    if (currentPage == 1) {
        sample1.style.display = 'none';
        sample2.style.display = 'none';
        quoteGenerator.style.display = 'inline-block';
        overview.style.display = 'inline-block';
        buttonPrevious.style.display = 'none';
        currentPage = 0;

    }
}

buttonNext.addEventListener('click', navPageNext);
buttonPrevious.addEventListener('click', navPagePrevious);

quoteGenerator.addEventListener('click', function() {
    information.innerHTML = 
    `<h2>Quote Generator</h2>
    <br>
    <p>Hello</p>`;
    img.src = './Images/qout.jpg';

})

overview.addEventListener('click', function() {
    information.innerHTML = resetinformation;
    img.src = resetimg;
})