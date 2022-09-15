let box = document.querySelectorAll("#text");

box.forEach((element) => {
  element.addEventListener("click", (e) => {
    let text = e.target.innerHTML;
    let read = new SpeechSynthesisUtterance(String(text));
    read.lang = "en";
    window.speechSynthesis.speak(read);
  });
});

console.log(box);
