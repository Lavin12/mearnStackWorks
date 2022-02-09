var text="hello hai hello hai"

 var words=text.split(" ")
 console.log(words);
 var wordcount={}
  for(let word of words){
    if(word in wordcount){
         wordcount[word]+=1
 }
      else{
          wordcount[word]=1
             }
  }
  console.log(wordcount);

//  text.split(" ").map(word=>word in wordcount?wordcount[word]+=1:wordcount[word]=1)
//  console.log(wordcount);

//ABABBC FIND THE RECCURSIVE CHARACTER