const moment = require('moment');

async function trimesterDates() {
    let trimester = {};
    
    const thirdMondayInFebruary = moment().month(1).startOf('month').day('Monday').add(3, 'weeks');

    // Trimester One
    trimester.one = {
        // Refresh Discord subject channels one week before the next trimester
        refresh: thirdMondayInFebruary.clone().subtract(1, 'weeks'),
        // Starts on the 3rd Monday in February
        start: thirdMondayInFebruary,
        // Ends after twelve weeks
        end: thirdMondayInFebruary.clone().add(12, 'weeks').subtract(1, 'seconds')
    };

    // Trimester Two
    trimester.two = {
        // Refresh Discord subject channels one week before the next trimester
        refresh: thirdMondayInFebruary.clone().add(14, 'weeks'),
        // Starts three weeks after the end of trimester one (15 weeks after the start of trimester one)
        start: thirdMondayInFebruary.clone().add(15, 'weeks'),
        // Ends after 12 weeks
        end: thirdMondayInFebruary.clone().add(27, 'weeks').subtract(1, 'seconds')
    };

    // Trimester Three
    trimester.three = {
        // Refresh Discord subject channels one week before the next trimester
        refresh: thirdMondayInFebruary.clone().add(29, 'weeks'),
        // Starts three weeks after the end of trimester two (30 weeks after the start of trimester one)
        start: thirdMondayInFebruary.clone().add(30, 'weeks'),
        // Ends after 12 weeks
        end: thirdMondayInFebruary.clone().add(42, 'weeks').subtract(1, 'seconds')
    };

    return trimester;
};

module.exports = {
    trimesterDates
};