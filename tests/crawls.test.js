const {normalizeURL, getURLsFromHTML} = require('../crawl.js')
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

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://ehs.co.ke/path/">
            ehs.co.ke website
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://ehs.co.ke/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://ehs.co.ke/path/"]
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/">
            ehs.co.ke website
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://ehs.co.ke"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://ehs.co.ke/path/"]
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path1/">
            ehs.co.ke website Path One
            </a>
            <a href = "/path2/">
            ehs.co.ke website Path Two
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://ehs.co.ke"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://ehs.co.ke/path1/","https://ehs.co.ke/path2/"]
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML Invalid', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "Invalid" >
            Invalid URL
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://ehs.co.ke"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = [] 
    expect(actual).toEqual(expected)
})