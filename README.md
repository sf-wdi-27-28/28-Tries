##What is a Trie?
A Trie is a data structure that will store Strings in an extremely efficient manner.  Words are grouped according to shared spelling (apple and app share a-p-p,  beethoven and beech share b-e-e) and we are able to store multiple words using less repeated letters.

The Trie structure resembles a tree, in that there is a `root` (beginning) that branches & branches & branches out to leaves (end.) Each branch or node is a `child` of the node above it.  Appropriately, each node that has a `child` is called a `parent`.  The root node has no parent. Leaf nodes have no children.

![A simple Trie Diagram](http://meandmark.com/blog/wp-content/uploads/2012/07/TrieExampleCropped.png)
*Above: A simple Trie diagram that stores the following words: ace, aced, aces, acre, acres, act, acted, acting, & acts*

 Storing words in this manner makes searching for strings extremely fast; the worst case scenario for finding the word is the word's length.  Some Tries also 'smoosh' their words together when they only have one `child` node. Image the diagram above, only with a single element with the letters `res` below `c` for the word *acre* or `ing` below `t` for the word *acting*.  For simplicity, we will only work with nodes that contain only single letters.

Notice the node `c`. It has three children.  Node `t` below `c` also has three children.  Others have two. Some have one.  How would you store those children in an orderly manner?  



##Day01: Challenge: Let's try a trie!

Let's spend the first day trying to handroll our own Trie data structure.  For a gentle start, we will attempt to create a Trie that will store the words from above: 

```javascript
['ace', 'aces', 'aced', 'acre', 'acres', 'act', 'acted', 'acting', 'acts']
```


**Some deep things to ponder before you code:**
- What would a node object have inside it? Surely it would least have a single letter.  
- How would you store any and all of the children?  
- How would you know when you have found a valid word? (Hint: don't forget that ace is inside aced and act is in acting)

**Please implement the following:**
- A Trie object with the following prototypical methods:
	- add(word)
		- integrate the word into the Trie
	- exists(word)
		- returns whether or not the word exists within the Trie
	- printPrettyTrie() 
		- prints the Trie structure to the console *breadth* first not *depth* first
	- printTrieList()
		- prints all of the words contained within the Trie
- A node object that contains:
	-  the necessary internal data structures to hold all possible children nodes
	-  a single character (a-z only)
	-  an indication whether or not the node is the last letter in a valid word


**Suggested Implementation:** Talk out how you would go about adding a single word into a fresh and empty Trie.  Write some pseudocode.  Talk out how you would add a second word similar in spelling to the first word, such as `rockslide` & `rockbiter`. Write some pseudocode. Now talk out how you would handle adding a word that is contained within other words, such as `rock` in this case.  Write some more pseudocode!  Try out what you've written down and see what happens.

