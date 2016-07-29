var Exam = require('./src/exam')

var msg = ''

if (process.argv[2] == undefined) { return exit('Please set option!') }

var task = process.argv[2];

var str1 = process.argv[3].trim();
var exam =  new Exam(str1);
        
if (task == '-p') {
    return exit('Text is polindrome = ' + exam.isPalindrome() + '\n');
} else if (task == '-a') {
    if (process.argv[4] == undefined) { return exit('Please set second text!') }

    var str2 = process.argv[4].trim();
    return exit('Text is anagram = ' + exam.isAnagram(str2) + '\n');
}

function exit (msg) {
    process.stdout.write(msg + '\n')
    process.exit()
}

