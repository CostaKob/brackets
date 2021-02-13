module.exports = function check(str, bracketsConfig) {
  let stack = []
  let letters = str.split("")
  let brackets = ['(','{','[',']','}',')']

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      // open
      if (letters[i] === bracketsConfig[j][0]) {
        if(stack.includes(letters[i]) && !(brackets.includes(letters[i]))) {
          console.log("1pop")
          console.log(stack)
          stack.pop()
        }
        else {
          console.log("2push")
          console.log(stack)
          stack.push(letters[i])
        }
      }
      // close
      else if (letters[i] === bracketsConfig[j][1]) {
        //if stack empty
        if (stack.length !== 0 && stack[stack.length - 1] !== bracketsConfig[j][0]) {
          return false
        }
        else {
          console.log("3pop")
          console.log(stack)
          stack.pop()
        }
      }
    }
  }
  return stack.length === 0 ? true : false
}