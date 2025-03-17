// // Side bar ka section implimant
// document.addEventListener("DOMContentLoaded", function() {
//     const sidebar = document.querySelector(".sidebar");
//     const toggleButton = document.createElement("button");

     
//     toggleButton.classList.add("toggle-btn");
//     document.body.appendChild(toggleButton);

//     toggleButton.addEventListener("click", function() {
//         sidebar.classList.toggle("open");
//     });
// });

// function toggleSidebar() {
//   document.querySelector('.sidebar').classList.toggle('open');
// }
// // Banerr Selection

//   // Banner Section
//   const banners = [
//     "public/image_all/image/Baneer_01.jpg",
//     "public/image_all/image/Baneer_02.jpg",
//     "public/image_all/image/Baneer_03.jpg",
//     "public/image_all/image/Baneer_04.jpg",
//     "public/image_all/image/Baneer_05.jpg",
// ];


// let currentIndex = 0;
// const bannerImage = document.getElementById("bannerImage");
// const dots = document.querySelectorAll(".dot");
// let interval;

// function changeBanner(index) {
//     currentIndex = index;
//     bannerImage.src = banners[currentIndex];
//     updateDots();
//     resetInterval();
// }

// function updateDots() {
//     dots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === currentIndex);
//     });
// }

// function autoChangeBanner() {
//     currentIndex = (currentIndex + 1) % banners.length;
//     changeBanner(currentIndex);
// }

// function resetInterval() {
//     clearInterval(interval);
//     interval = setInterval(autoChangeBanner, 2000);
// }

// interval = setInterval(autoChangeBanner, 2000);

// //    sare new bar ke liye/
// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     fetch("h.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("navbar-container").innerHTML = data;
//         })
//         .catch(error => console.error("Error loading navbar:", error));
// });




// {/* <divid ="navbar-container"></div>  */}



// /////////////////////////////////////////////////////////////////////























document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");

    // Sidebar Toggle
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });

    // Banner Section
    const banners = [
        "public/image_all/image/Baneer_01.jpg",
        "public/image_all/image/Baneer_02.jpg",
        "public/image_all/image/Baneer_03.jpg",
        "public/image_all/image/Baneer_04.jpg",
        "public/image_all/image/Baneer_05.jpg",
    ];

    let currentIndex = 0;
    const bannerImage = document.getElementById("bannerImage");
    const dots = document.querySelectorAll(".dot");
    let interval;

    function changeBanner(index) {
        currentIndex = index;
        bannerImage.src = banners[currentIndex];
        updateDots();
        resetInterval();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function autoChangeBanner() {
        currentIndex = (currentIndex + 1) % banners.length;
        changeBanner(currentIndex);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(autoChangeBanner, 3000);
    }

    interval = setInterval(autoChangeBanner, 3000);

    // Navbar Loading
    fetch("public/h.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
