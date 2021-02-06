exports.min = function min(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    } else {
        let minNumber = array[0];
        for (let i = 1; i < array.length; i++) {
            if (minNumber > array[i]) {
                minNumber = array[i];
            }
        }
        return minNumber;
    }
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    } else {
        let maxNumber = array[0];
        for (let i = 1; i < array.length; i++) {
            if (maxNumber < array[i]) {
                maxNumber = array[i];
            }
        }
        return maxNumber;
    }
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    } else {
        let sum = 0,
            avrg = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        avrg = sum / array.length;
        return avrg;
    }
};
