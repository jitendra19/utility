module.exports = {
    sortArray: function(arr, fieldName, sortType, startIndex, endIndex) {
		// validations yet to be introduced
		const indexArr = arr.slice(startIndex,endIndex+1);
		return indexArr.sort(function (x, y) {
			let a = new Date(x[fieldName]),
				b = new Date(y[fieldName]);
			return sortType === 'ASC' ? a - b : b - a;
		});
	},
    generateRandomString: function(length, type) {
		// can improve more
		const createString = function(letters) {
			let result = '';
			for (var i = length; i > 0; --i) result += letters[Math.round(Math.random() * (letters.length - 1))];
			return result;
		};
		switch(type) {
			case 'char':
				return createString('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
			case 'number':
				return createString('0123456789');
			default:
				return createString('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		}
	},
	generateSchema: function(obj) { 
		// can improve more
		const iter = function(a) {
			Object.keys(a).forEach(function (k) {
				if (a[k] !== null && typeof a[k] === 'object') {
					iter(a[k]);
					return;
				}
				a[k] = typeof a[k];				
			});
			return a;
		}
		return iter(obj);
	}
};
