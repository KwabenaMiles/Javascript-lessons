// Cookie = a small text file stored on your computer
//           used to remember information about the user
//           saved in name=value pairs
//           sent with HTTP requests
//           can be set to expire

// document.cookie = "username=John Doe"; // create cookie
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // delete cookie

// To check to see if cookies are enabled
// if (navigator.cookieEnabled) {
//   console.log("Cookies are enabled");
// } else {
//   console.log("Cookies are disabled");
// }

// console.log(document.cookie); // read cookie


// // To add a cookie with an expiration date

// document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 UTC; path=/";
// document.cookie = " password=12345; expires=Fri, 31 Dec 2024 23:59:59 UTC; path=/";

// console.log(document.cookie); // read cookie

// function setCookie(name, value, daysToExpire) {
//     const date = new Date();
//     date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + value + "; " + expires + "; path=/";
// }

// setCookie("email", "gideon_a70@aol.com", 30);
// setCookie("address", "123 Main St", 30); 

// console.log(document.cookie); // read cookie

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}