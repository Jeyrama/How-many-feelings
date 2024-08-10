/*
You have two arguments: 
  string - a string of random letters(only lowercase) and 
  array - an array of strings(feelings). 

Your task is to return how many specific feelings are in the array.

For example:
  string -> 'yliausoenvjw'
  array -> ['anger', 'awe', 'joy', 'love', 'grief']
  output -> '3 feelings.' // 'awe', 'joy', 'love'

  string -> 'griefgriefgrief'
  array -> ['anger', 'awe', 'joy', 'love', 'grief']
  output -> '1 feeling.' // 'grief'

  string -> 'abcdkasdfvkadf'
  array -> ['desire', 'joy', 'shame', 'longing', 'fear']
  output -> '0 feelings.'

If the feeling can be formed once - plus one to the answer.
If the feeling can be formed several times from different letters - plus one to the answer.
Each letter in string participates in the formation of all feelings. 
'angerw' -> 2 feelings: 'anger' and 'awe'.
*/


// Solution

const countFeelings = (string, array) => {
  const feelings = [];
  
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    const temp = [];

    for (let j = 0; j < val.length; j++) {
      if (string.search(val[j]) < 0) continue;
      else temp.push(val[j]);
    }

    const word = temp.join("");
    if ( array.includes(word) ) feelings.push(word);
  }

  return `${feelings.length} ${feelings.length === 1 ? 'feeling' : 'feelings'}.`;
};