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