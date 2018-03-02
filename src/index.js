
function isPair(previouse, current, bracketsPairs){
  var pair = '';
  for (var i = 0; i < bracketsPairs.length; i++) {
    if (current === bracketsPairs[i][1]){
      pair = bracketsPairs[i][0]
    }
  }
  if (previouse === pair) {
    return true;
  } else {
      return false;
    }
}

function isOpen(item, bracketsPairs){
  for (var i = 0; i < bracketsPairs.length; i++) {
    if (item === bracketsPairs[i][0]) {
      return true;
    }
    if (item === bracketsPairs[i][1]) {
      return false;
    }
  }
}

function theSame(item, bracketsPairs){
  for (var i = 0; i < bracketsPairs.length; i++) {
    if ((item === bracketsPairs[i][0]) && (bracketsPairs[i][0] === bracketsPairs[i][1])){
      return true;
    }
  }
      return false;

}


module.exports = function check(str, bracketsConfig) {
//function check(str, bracketsConfig) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (!(theSame(str[i], bracketsConfig))) {
      if (isOpen(str[i], bracketsConfig)) {
        stack.push(str[i]);
      } else {
          if (isPair(stack[stack.length-1], str[i], bracketsConfig)) {
            stack.pop();
          } else {
            return false;
            }
        }
    }
  if ( theSame(str[i], bracketsConfig) && (!(isOpen(str[i+1], bracketsConfig)))) {
    stack.pop();
  }
  if (theSame(str[i], bracketsConfig) && (isOpen(str[i+1], bracketsConfig)))  {
    if (stack[stack.length-1] === str[i]){stack.pop();}
    else{stack.push(str[i]);}
    }
}
  if (stack.length === 0){
    return true;
   }
  else {
    return false;
   }
}

// console.log(check('()', [['(', ')']]));
// console.log(check('((()))()', [['(', ')']]));
// console.log(check('())(', [['(', ')']]));
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));
// console.log(check('[(])', [['(', ')'], ['[', ']']]));
// console.log(check('|()|(||)||', [['(', ')'], ['|', '|'], ['[', ']']]));
