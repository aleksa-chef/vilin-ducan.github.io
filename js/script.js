// Hamburger Navigation Menu

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0";
}

// Back to Top Button

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
})

// Popup Image

document.querySelectorAll('.gallery-section .gallery-box img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}