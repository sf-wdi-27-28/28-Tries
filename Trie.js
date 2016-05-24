/******************************|
|       Trie Dictionary        |
|******************************/
function Trie(seed, valid){
  this.root = new Node();
  root.letter = seed;
  root.valid = valid;
  root.letters = createArray();
}

function Node(letter, valid){
  this.letter = letter;
  this.letters = createArray();
  this.valid = valid | false;
}

/******************************|
|       Trie Prototypes        |
|******************************/

Trie.prototype.add = function(word) {
    // TODO: returns boolean true upon successfully inserting word into Trie
    return false;
};

Trie.prototype.exists = function(word) {
    // TODO: returns whether or not the word exists within the Trie
    return false;
};

/* New recursive structure: helper and recursive methods */
Trie.prototype.printPrettyTrie = function() {
  /* TODO: Print the Trie to the console using 'tabs' to delimit node level */
};

Trie.prototype.printTrieList = function(word) {
 /* TODO: Print a list of all nodes' keys in the list. order is not important */
};

/******************************|
|       Helper Functions       |
|******************************/
function createArray(){
  return Array.apply(null, Array(26))
    .map(Number.prototype.valueOf,0);
}

function print(current, space) {
    current.letters.forEach(function(element){
    if(element !== 0){
      console.log(space + element.letter + " " + (element.valid ? 'valid' : ''));

      print(element, space + '  ');
    }
  });
}

/******************************|
|         Driver Code          |
|******************************/
var trie = new Trie('a', true);

var wordList = ['a', 'ace', 'aces', 'aced', 'acre', 'acres', 'act', 'acted', 'acting', 'acts'];
wordList.forEach(function(word) {
  trie.add(word);
})
// checks for existence of words previously added (all should be true)
// var first = trie.exists('ace');
// var second = trie.exists('acre');
// var third = trie.exists('acted');
//
// prints out tree structure
trie.printPrettyTrie();

// // prints out full list of words
// trie.printTrieList();Trie
