const cookieBanner = document.getElementById("cookiePopup");
const cookieButton = document.getElementById("acceptCookie");



if(localStorage.getItem("cookieConsent") === "accepted"){
    cookieBanner.classList.add("hidden")
}
else{
    cookieBanner.classList.add("active")
}


cookieButton.addEventListener("click", () => {

    localStorage.setItem("cookieConsent", "accepted")

    if (cookieButton) {
        cookieBanner.classList.remove("active");
    }
});
