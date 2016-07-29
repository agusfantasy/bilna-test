var should = require('should');
var Exam = require('../src/exam')

describe('Exam', function() {
    it('malam is Palindrome', function() {
        var exam = new Exam('malam')
        var isPalindrome = exam.isPalindrome()
        isPalindrome.should.equal(true);
    })

    it('mal is not palindrome', function() {
        var exam = new Exam('mal')
        var isPalindrome = exam.isPalindrome()
        isPalindrome.should.equal(false);
    })

    it('bali and bila is Anagram', function() {
        var exam = new Exam('bali');
        var isAnagram = exam.isAnagram('bila');
        isAnagram.should.equal(true);
    })

    it('bali and balia is not Anagram', function() {
        var exam = new Exam('bali')
        var isAnagram = exam.isAnagram('balia')
        isAnagram.should.equal(false);
    })
})