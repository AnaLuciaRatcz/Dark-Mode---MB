const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

//Load dark or light mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function (){
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem("dark");


    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark",1); //Este número 1 , ele mesmo criou para ter um valor salvo, verifica no f12, application, na lateral  - local storage e clica no meu endereço. qdo tiver dark vai aparecer o 1.
    }
});