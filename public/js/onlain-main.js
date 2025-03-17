// // 3 seconds (3000ms) ke baad redirect hoga
setTimeout(function() {
    window.location.href = "public/onlain-main/onlain-index.html"; // Apne dashboard ka URL yahan dalen
}, 5000); // 3000 milliseconds = 3 seconds




// <script>
// // Function to get the cookie by name
// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }

// // Function to handle login button click
// function handleLoginClick() {

//   const token = getCookie('token'); // Get JWT token from cookies

//   if (token) {
//     // If token exists, send it to the server to check the role
//     fetch('/api/verify-token', {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}` // Send the token in the headers
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           // Redirect based on user role
//           switch (data.role) {
//             case 'student':
//               window.location.href = '/student';
//               break;
//             case 'teacher':
//               window.location.href = '/teacher';
//               break;
//             case 'organisation':
//               window.location.href = '/organisation';
//               break;
//             case 'admin':
//               window.location.href = '/admin';
//               break;
//             default:
//               window.location.href = '/login'; // If no valid role, go to login
//           }
//         } else {
//           // If token is invalid, redirect to login page
//           window.location.href = '/login';
//         }
//       })
//       .catch(error => {
//         console.error('Error verifying token:', error);
//         window.location.href = '/login'; // In case of error, go to login
//       });
//   } else {
//     // If no token found, redirect to login page
//     window.location.href = '/login';
//   }
// }
// document
//   .querySelector(".menu-link")
//   .addEventListener("mouseover", function () {
//     const svgDoc = this.querySelector(".svg-object").contentDocument;
//     svgDoc.querySelector("svg").style.fill = "red";

//   });

// document
//   .querySelector(".menu-link")
//   .addEventListener("mouseout", function () {
//     const svgDoc = this.querySelector(".svg-object").contentDocument;
//     svgDoc.querySelector("svg").style.fill = "black";

//   });
// </script>

// <script>
// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   if (urlParams.get("login") === "success") {
//     const test = document.getElementById("profile-sectionn");
//     const hideLoginBtn = document.getElementById("logInButton");
//     const hideSignUpBtn = document.getElementById("signUpBtn");
//     const showProfileBtn = document.getElementById("profile-section");
//     hideSignUpBtn.style.display = "none";
//     hideLoginBtn.style.display = "none";
//     showProfileBtn.style.display = "block";
//     test.style.display = "block";
//   }
// };
// function closeContent() {
//   document.getElementById("closeContent").style.display = "none";
// }
// document
//   .getElementById("about-link")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     var myDiv = document.getElementById("about-container");
//     if (myDiv.style.display === "none") {
//       myDiv.style.display = "block";
//     } else {
//       myDiv.style.display = "none";
//     }
//     closeContent();
//   });
// </script>
// <script>
// const swapBtn = document.getElementById("swap-btn");
// const registerBTn = document.getElementById("signUpBtn");
// const loginBTn = document.getElementById("logInButton");

// registerBTn.addEventListener("click", () => {
//   swapBtn.style.left = "125px";
//   window.location.href = "/form";
// });
// registerBTn.addEventListener("mouseover", () => {
//   swapBtn.style.left = "125px";
//   registerBTn.style.color = "white";
//   loginBTn.style.color = "black";
// });
// registerBTn.addEventListener("mouseout", () => {
//   swapBtn.style.left = "0px";
//   registerBTn.style.color = "black";
//   loginBTn.style.color = "white";
// });
// const onlinetest = document.getElementById("onlineTest");
// onlinetest.addEventListener("click", () => {
//   window.location.href = "/onlineTest";
// });
// </script>
// <script>
// const ebookBtn = document.getElementById("ebookBtn");
// ebookBtn.addEventListener("click", () => {
//   window.location.href = "/ebook";
// });
// </script>

// <!-- ----- -->

// <script>
// document.addEventListener("DOMContentLoaded", function () {
//   // Prevent default copy event
//   document.addEventListener("copy", function (e) {
//     e.preventDefault();
//     alert("Copying text is disabled on this site.");
//   });

//   // Optionally, prevent other methods like right-click context menu
//   // document.addEventListener("contextmenu", function (e) {
//   //   e.preventDefault();
//   //   alert("Right-click is disabled on this site.");
//   // });

//   // Optionally, prevent other shortcuts like Ctrl+C
//   document.addEventListener("keydown", function (e) {
//     // Detect Ctrl+C or Command+C on macOS
//     if ((e.ctrlKey || e.metaKey) && e.key === "c") {
//       e.preventDefault();
//       alert("Copying text is disabled on this site.");
//     }
//   });
// });
// </script>







// <script>
// var sideBarIcon = document.getElementById("sideBarIcon");
// var mainNav = document.getElementById("main-nav");
// var innerCont = document.getElementById("innerCont");

// function noView() {
//   innerCont.style.background = "none";
// }
// function yesView() {
//   innerCont.style.background = "flex";
// }
// function fadeS() {
//   innerCont.style.opacity = "0";
//   innerCont.style.scale = ".85";
//   setTimeout(2000, noView());
// }
// function fadeE() {
//   innerCont.style.opacity = "1";
//   innerCont.style.scale = "1";
//   setTimeout(2000, yesView());
// }

// function cllick() {
//   if (sideBarIcon.innerHTML === "close") {
//     sideBarIcon.innerHTML = "menu";
//     mainNav.style.height = "0vh";
//     fadeS();

//   } else {
//     sideBarIcon.innerHTML = "close";
//     mainNav.style.height = "100vh";
//     fadeE();
//   }
// }

// </script>
// <!-- when you click on the hamburger menu, only the header will be shown and scrolling will be disabled on mobile devices until the menu is closed. -->
// <script>
// const hamburgerBtn = document.getElementById('sideBarIcon');
// const mobileMenu = document.getElementById('main-nav');

// hamburgerBtn.addEventListener('click', () => {
//   // Toggle the menu visibility
//   mobileMenu.classList.toggle('hidden');

//   // Toggle body scroll
//   document.body.classList.toggle('no-scroll');
// });

// </script>

 