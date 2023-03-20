const {sortPages} = require('../report.js')
const { test, expect } = require('@jest/globals')

test('sortPages', () => {
    const input = {
        'https://ehs.co.ke/path': 1,
        'https://ehs.co.ke': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://ehs.co.ke', 3],
        ['https://ehs.co.ke/path', 1]        
    ]
    expect(actual).toEqual(expected)
})

test('sortPages', () => {
    const input = {
        'https://ehs.co.ke/path': 1,
        'https://ehs.co.ke': 3,
        'https://ehs.co.ke/path2': 5,
        'https://ehs.co.ke/path3': 2,
        'https://ehs.co.ke/path4': 9
    }
    const actual = sortPages(input)
    const expected = [
        ['https://ehs.co.ke/path4', 9],
        ['https://ehs.co.ke/path2', 5],
        ['https://ehs.co.ke', 3],
        ['https://ehs.co.ke/path3', 2],
        ['https://ehs.co.ke/path', 1]        
    ]
    expect(actual).toEqual(expected)
})