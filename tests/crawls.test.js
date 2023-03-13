const {normalizeURL} = require('../crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://ehs.co.ke/path'
    const actual = normalizeURL(input)
    const expected = 'ehs.co.ke/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://ehs.co.ke/path/'
    const actual = normalizeURL(input)
    const expected = 'ehs.co.ke/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://EHS.co.ke/path/'
    const actual = normalizeURL(input)
    const expected = 'ehs.co.ke/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = 'http://ehs.co.ke/path/'
    const actual = normalizeURL(input)
    const expected = 'ehs.co.ke/path'
    expect(actual).toEqual(expected)
})