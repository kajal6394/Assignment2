var button = document.getElementById("btn");

button.addEventListener('click', function() {        
        var sentence = document.getElementById("sentence").value;
        console.log("The sentence you entered: ", sentence)
        var letter = document.getElementById("letter").value;
        console.log("The letter you entered: ", letter);
        if(sentence.indexOf(letter) === -1) {
            alert("The letter does not exist in the sentence");
        }
        else {
            var afterLetter = sentence.substring(sentence.indexOf(letter)+1);
            console.log("The new sentence is:",afterLetter);
        }
});