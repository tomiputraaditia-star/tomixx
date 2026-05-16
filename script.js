let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let music = document.getElementById('bg-music');

// fungsi play musik
function playMusic() {
    music.play()
    .then(() => {
        console.log("Music playing");
    })
    .catch((error) => {
        console.log("Autoplay diblokir browser:", error);
    });
}

// musik mulai saat user pertama klik dimana saja
document.addEventListener('click', playMusic, { once: true });


// tombol next
next.addEventListener('click', function () {

    let items = document.querySelectorAll('.item');

    document.querySelector('.slide')
        .appendChild(items[0]);

});


// tombol prev
prev.addEventListener('click', function () {

    let items = document.querySelectorAll('.item');

    document.querySelector('.slide')
        .prepend(items[items.length - 1]);

});

document.getElementById('play-btn')
.addEventListener('click', function () {
    music.play();
});