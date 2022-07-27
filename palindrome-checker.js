function palindrome(str) {
    const strReplaced = str.replace(/[^a-z0-9]/gi, '');
    const reverseString = strReplaced.split("").reverse().join("");
    return strReplaced.toLowerCase() === reverseString.toLowerCase();
}

module.exports = palindrome;