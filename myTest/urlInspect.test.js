import {urlInspect} from '../src/client/js/urlInspect'



describe('Test to confirm that "urlInspect()" should be a valid function' , () => {
    test('It should be a valid function', async () => {
        expect(typeof urlInspect).toBe("function");
    });
});
describe('Test to confirm that "urlInspect()" should be present' , () => {
    test('It should return true', async () => {
        expect(urlInspect).toBeDefined();
    });
});

describe('Testing my function "urlInspect()" for wrong url' , () => {
    var url = "ht//ww.studentnewsdaily.com/daily-news-article/memorial-day-2019/";
    test('It should return false', async () => {
        const link = urlInspect(url);
        expect(link).toBe(false);
    });
});

describe('Test case to check "urlInspect()" for correctly inputted url' , () => {
    var url = "https://www.studentnewsdaily.com/daily-news-article/memorial-day-2019/";
    test('It should return true', async () => {
        const link = urlInspect(url);
        expect(link).toBe(true);
    });
});

