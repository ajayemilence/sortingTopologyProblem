// import sortingResult from './index.js';
const SortingResult = require('./ques');


// Acceptance Criteria

// tasks : []

// dependencies: []











describe('Sorting by dependency [] with task  [] should return : \n result  = []', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult([], [])).toEqual([]);
    });
});


describe('Sorting by dependency [] with task  ["a", "b"] should return : \n result  = ["a", "b"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(['a', 'b'], [])).toEqual(['a', 'b']);
    });
});

describe('Sorting for dependency ["a => b"]  with task  ["a", "b"] should return : \n result  = ["b", "a"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(["a", "b"], ["a => b"])).toEqual(["b", "a"]);
    });
});

describe('Sorting for dependency ["a => b"]  with task  ["a", "b" ,"c", "d"] should return : \n result  = ["b", "a" , "d","c"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(["a", "b" ,"c","d"], ["a => b" , "c => d"])).toEqual(["b", "a" , "d","c"]);
    });
});

// tasks: [a,b,c]

// dependencies: [a => b,b => c]

// result: [c,b,a]

describe('Sorting for dependency ["a => b" , "b => c"]  with task  ["a", "b" ,"c"] should return : \n result  = ["c", "b" , "a"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(["a", "b" ,"c"], ["a => b" , "b => c"])).toEqual(["c", "b" , "a"]);
    });
});

describe('Sorting for dependency ["a => b" , "b => c" , "c => a"]  with task  ["a", "b" ,"c" , "d"] should return : \n result  = Error - this is a cyclic dependency', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(["a", "b" ,"c" , "d"], ["a => b" , "b => c" , "c => a"])).toEqual("Error - this is a cyclic dependency");
    });
});

describe('Sorting for dependency ["a => b" , "c => d"]  with task  ["a", "b", "c", "d", "e", "f"] should return : \n result  = ["b", "a" , "d","c" , "e" ,"f"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult(["a", "b", "c", "d", "e", "f"], ["a => b" , "c => d"])).toEqual(["b", "a" , "d","c" , "e" ,"f"]);
    });
});

describe('Sorting for dependency ["a => b" , "a => c" , "b => d" , "c => d" , "e => f"]  with task  ["a", "b" ,"c" , "d","e","f"] should return : \n result  = ["d","b", "c", "a" ,"f","e"]', () => {
    it('Sorted by dependency', () => {
        expect(SortingResult([ "a","b","c","d" ,"e","f"], ["a => b" , "a => c" , "b => d" , "c => d" , "e => f"])).toEqual(["d","b", "c", "a" ,"f","e"],);
    });
  });

 

