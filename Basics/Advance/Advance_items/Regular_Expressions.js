 // JavaScript Regular Expressions
   /* Regular Expression is a sequence of characters that forms a search pattern. Regex is a common shorthand for a regular expression. JavaScript RegExp is an Object for handling Regular Expressions. */

   // JavaScript Regex Flags
     // Regular expression flags are parameters that can modify how a pattern is used, such as making it case-insensitive or global.
      /* (/g) - Performs a global match (find all)
         (/i) - Performs case-insensitive matching
         (/u) - Enables Unicode support (new 2015)
      */

   // Using String match() / search()
    let text ="Please Subscribe our Channel";
    let result = text.search("Channel");
    console.log(result); // 21

    
    let Result = text.search(/our/i);
    console.log(Result); // 17

    let Text = "Please subscribe Hablu programmer , hablu programmer is the bangladeshi largest edtech company";
    let count = Text.search(/hablu/i);
    console.log(count); // 17
    
    let CountH = Text.match(/hablu/i);
    console.log(CountH); /* [
                              'Hablu',
                                index: 17,
                                input: 'Please subscribe Hablu programmer , hablu programmer is the bangladeshi largest edtech company',
                                groups: undefined
                            ] */

    let CountI = Text.match(/hablu/ig);
    console.log(CountI); // [ 'Hablu', 'hablu' ]



  // replace()
    let TextOne = "Please Subscribe our Channel";
    let replace = TextOne.replace("Channel", "Youtube Channel");
    console.log(replace); // Please Subscribe our Youtube Channel


    let TextTwo = "Please subscribe Hablu  , hablu  is the bangladeshi largest edtech company";
    let Change = TextTwo.replace(/hablu/ig ,"hablu mama");
    console.log(Change); // Please subscribe hablu mama  , hablu mama  is the bangladeshi largest edtech company