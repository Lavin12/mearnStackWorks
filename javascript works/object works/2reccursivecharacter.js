var text="ABABBC"

 var words=text.split("")
 console.log(words);
var wordchar={}
  for(let word of words){
      if(word in wordchar){
          console.log(`${word} is the first reccursive character`);
          break
      }
      else{
          wordchar[word]=1

      }

  }
