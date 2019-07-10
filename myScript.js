var NumberOfWords = 15

var words = new BuildArray(NumberOfWords)


words[1] = "You are amazing!"
words[2] = "Smile on!"
words[3] = "You are loved!"
words[4] = "Just keep swimming!"
words[5] = "Go have fun!"
words[6] = "Love your light!"
words[7] = "Mistakes are great!"
words[8] = "Live the life you love"
words[9] = "Laugh!"
words[10] = "Dream on!"
words[11] = "Reach for the moon!"
words[12] = "Live.Love.Learn."
words[13] = "Believe in yourself!"
words[14] = "Love yourself!"
words[15] = "You are beautiful!"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
