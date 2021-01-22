const calculateChart = (data) => {
    let results = [];
    let tracker = {
        12: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    }

    for (let i = 0; i < data.length; i++) {
        let times = data[i].range.split('-');
        if (times[0] === '12') {
            times[0] = '0';
        } 
        for (let i = Number(times[0]); i <= Number(times[1]); i++) {
            if (i === 0) {
                tracker['12']++;
            } else {
                tracker[i]++;
            }
        }
    }
    
    for (let key in tracker) {
        results.push((tracker[key] / data.length * 100).toFixed(0));
    }
    // hardcode solution to fix the calculation of the chart due to weird ordering of using let keys
    let temp = results.pop();
    results.unshift(temp);

    return results;
}

export default calculateChart;