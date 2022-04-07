let operationType = {
    add: {
        precedence: 1,
        name: 'add',
        operation : function (a,b) {return a + b},
        output: function (a,b) {return a + '+' + b},
        buttonHTML: '+'
    },
    divide: {
        precedence: 2,
        name:'divide',
        operation : function (a,b) {return a/ b},
        isInvalidInput: function (a,b) {return b == 0 ? 'divison by 0': false},
        output: function (a,b) {return a + '/' + b},
        buttonHTML: '/'
    },
    subtract : {
        precedence: 1,
        name: 'subtract',
        operation : function (a, b) {return a - b},
        output: function (a,b) {return a + '-' + b},
        buttonHTML: '-'
    },
    multiply : {
        precedence: 2,
        name: 'multiply',
        operation: function (a,b) {return a * b},
        output: function (a,b) {return a + '*' + b},
        buttonHTML: "*"
    }
}