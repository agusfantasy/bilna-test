//Pseudocode 
//Input : text
function Exam(text){
    this.text = text;
}

Exam.prototype.isPalindrome = function() {
    //CALL split to split INPUT text
    var strArr = this.text.split('');

    //CALL reversere() to reverse strArr
    var strArrReverse = strArr.reverse();

    //JOIN strArrReverse to set word read from backward
    var reverseStr = strArrReverse.join('');

    //IF Input text == reverseStr THEN
        // RETURN true
    //ELSE
        // RETURN false
    //ENDIF
    return this.text == reverseStr;
};

Exam.prototype.isAnagram = function(str2) {
    //Input : str2
    var word1 = this.text, word2 = str2

    //CALL replace() and toLowerCase() to normalized
    var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
    var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();

    var counts = [];
    var word1Length = normalizedWord1.length;
    var word2Length = normalizedWord2.length

    //IF word1Length !== word2Length THEN
        // RETURN false
    //ELSE
        // RETURN true
    //ENDIF
    if (word1Length !== word2Length) { return false; }

    //FOR i = 0 to word1Length
        //SET index =  the Unicode of character word1 - 97
        //COMPUTE  counts[index] = (counts[index] OR 0) + 1;
    //ENDFOR
    for (var i = 0; i < word1Length; i++) {
        var index = normalizedWord1.charCodeAt(i)-97;
        counts[index] = (counts[index] || 0) + 1;
    }

    //FOR i = 0 to word2Length
        //SET index =  the Unicode of character word2 - 97
        //IF counts[index] = false THEN
            //return false;
        //ELSE  
            //decrement counts[index]
        //ENDIF
    //ENDFOR
    for (var i = 0; i < word2Length; i++) {
        var index = normalizedWord2.charCodeAt(i)-97;
        if (!counts[index]) { return false; }
        else { counts[index]--; }
    }

    return true;
}

module.exports = Exam;