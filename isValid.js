// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    if(s.length % 2 === 1) return false // if the length is not even it means that at least one character don't have a closing value...
    if(s[0] === ')' || s[0] === ']'  || s[0] === '}') return false // if the first character is not an opening character 
    if(s[s.length-1] === '(' || s[s.length-1] === '[' || s[s.length-1] === '{') return false // if the last character is not a closing character...

    let stack = [] ; 
    let openToClose = {'(' : ')', '[' : ']', '{' : '}'} // Relationship between characters...

    for(var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]); // if we encounter a opening character just add it to the top of the stack...
        }

        else { // At this point s[i] must be a closing character...
            // The last element open must be the first closed,the last open element is the element at the top of the stack...
            if (openToClose[stack.pop()] !== s[i]) { // checking if the last open element, have for closing element the actual element...
                return false // if it is not the case directly return false
            }
        }
    }
// At the end if the stack is empty it means that for every open element we found a closing element so we need to return true...
// If not we will return false...
return stack.length === 0
 
};