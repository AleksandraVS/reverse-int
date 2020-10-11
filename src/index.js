module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let temp = "";
  for (let i = str.length-1; i >= 0; i--) 
      temp += str[i]; 
  
  return Number(temp);
}
