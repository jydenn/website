window.onload=init;
function init() {
    var button= document.getElementById("addButton");
    button.onclick= handleButtonClick;

}
function handleButtonClick() {
    alert("Button was clicked!")
}

function handleButtonClick() {
    var textInput= document.getElementById("songTextInput");
    var songName= textInput.value;
    if (songName == "") {
        alert("Please enter a song");
    } else {
        alert("Adding" + songName);
    }
}  

function handleButtonCLick() {
    var textInput= document.getElementById("songTextInput")
    var songName= textInput.value;
    var li= document.createElement("li")
    li.innerHTML= songName;
    var ul= document.getElementById("playlist");
    ul.appendChild(li);
}