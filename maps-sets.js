/* Quick Question 1 */
new Set([1,1,2,2,3,4]) // this code returns Set(1,2,3,4)

/* Quick Question 2 */
[...new Set("referee")].join("") // this would return "ref"

/* Quick Question 3 */
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Map m would look like the following: Map( [1,2,3] => true, [1,2,3] => false)

/* hasDuplicate */
const hasDuplicate = (arr) => arr.length !== new Set(arr).size;

/* vowelCount */
const vowelCount = (str) => {
  const vowelSet = new Set('aeiou');
  const vowelMap = new Map();
  const strArr = str.toLowerCase().split('');

  for (let char of strArr) {
    if (vowelSet.has(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}