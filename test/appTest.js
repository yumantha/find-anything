const assert = require('chai').assert;

const admin = require('../routes/admin');
const requests = require('../routes/requests');
const search = require('../routes/search');

//results of the functions
adminSortByKeyResult = admin.sortByKey([
    {
        name: 'aaa',
        marks: 12
    },
    {
        name: 'ddd',
        marks: 53
    },
    {
        name: 'bbb',
        marks: 36
    },
    {
        name: 'eee',
        marks: 99
    },
    {
        name: 'ccc',
        marks: 75
    }
], 'marks');

adminGetTopNumResults = admin.getTopNum([
    {
        name: 'aaa',
        marks: 12
    },
    {
        name: 'ddd',
        marks: 53
    },
    {
        name: 'bbb',
        marks: 36
    },
    {
        name: 'eee',
        marks: 99
    },
    {
        name: 'ccc',
        marks: 75
    }
], 3, 'marks');

adminGetDateResults = admin.getDate('1522895400000');

requestsSortByKeyResult = requests.sortByKey([
    {
        name: 'aaa',
        marks: 12
    },
    {
        name: 'ddd',
        marks: 53
    },
    {
        name: 'bbb',
        marks: 36
    },
    {
        name: 'eee',
        marks: 99
    },
    {
        name: 'ccc',
        marks: 75
    }
], 'marks');

searchSortByKeyResult = search.sortByKey([
    {
        name: 'aaa',
        marks: 12
    },
    {
        name: 'ddd',
        marks: 53
    },
    {
        name: 'bbb',
        marks: 36
    },
    {
        name: 'eee',
        marks: 99
    },
    {
        name: 'ccc',
        marks: 75
    }
], 'marks');

describe('App', function () {

    //test the functions of admin route
    describe('admin', function () {

        //test the sortByKey function
        describe('sortByKey()', function () {
            it('should return the sorted array', function () {
                assert.deepEqual(adminSortByKeyResult, [
                    {
                        name: 'aaa',
                        marks: 12
                    },
                    {
                        name: 'bbb',
                        marks: 36
                    },
                    {
                        name: 'ddd',
                        marks: 53
                    },
                    {
                        name: 'ccc',
                        marks: 75
                    },
                    {
                        name: 'eee',
                        marks: 99
                    }
                ]);
            });

            it('should return type array', function () {
                assert.typeOf(adminSortByKeyResult, 'array')
            });
        });

        //test the getTopNum function
        describe('getTopNum()', function () {
            it('should return the top items of the array sorted', function () {
                assert.deepEqual(adminGetTopNumResults, [
                    {
                        name: 'eee',
                        marks: 99
                    },
                    {
                        name: 'ccc',
                        marks: 75
                    },
                    {
                        name: 'ddd',
                        marks: 53
                    }
                ]);
            });

            it('should return type array', function () {
                assert.typeOf(adminGetTopNumResults, 'array');
            });
        });

        //test the getDate function
        describe('getDate()', function () {
            it('should return the date as an object', function () {
                assert.deepEqual(adminGetDateResults, {
                    year: "2018",
                    month: "Apr",
                    date: "05"
                });
            });

            it('should return an object', function () {
                assert.typeOf(adminGetDateResults, 'object');
            });
        })
    });

    //test the function of the requests path
    describe('admin', function () {

        //test the sortByKey function
        describe('sortByKey()', function () {
            it('should return the sorted array', function () {
                assert.deepEqual(requestsSortByKeyResult, [
                    {
                        name: 'aaa',
                        marks: 12
                    },
                    {
                        name: 'bbb',
                        marks: 36
                    },
                    {
                        name: 'ddd',
                        marks: 53
                    },
                    {
                        name: 'ccc',
                        marks: 75
                    },
                    {
                        name: 'eee',
                        marks: 99
                    }
                ]);
            });

            it('should return type array', function () {
                assert.typeOf(requestsSortByKeyResult, 'array')
            });
        });
    });

    //test the function of the search path
    describe('admin', function () {

        //test the sortByKey function
        describe('sortByKey()', function () {
            it('should return the sorted array', function () {
                assert.deepEqual(searchSortByKeyResult, [
                    {
                        name: 'aaa',
                        marks: 12
                    },
                    {
                        name: 'bbb',
                        marks: 36
                    },
                    {
                        name: 'ddd',
                        marks: 53
                    },
                    {
                        name: 'ccc',
                        marks: 75
                    },
                    {
                        name: 'eee',
                        marks: 99
                    }
                ]);
            });

            it('should return type array', function () {
                assert.typeOf(searchSortByKeyResult, 'array')
            });
        });
    });
});