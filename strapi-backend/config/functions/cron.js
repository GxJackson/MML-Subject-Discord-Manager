let trimester = {};
const moment = require('moment');
const { testWeeklyTutorialReminders, testSubjectChannelRefresh, sendWeeklyTutorialTimeReminder, sendDiscordSubjectChannelRefresh } = require('./discord');

module.exports = {
// Cron runs every Monday at 8am
//'0 8 * * 1': async () => {
'1/2 * * * *': async () => {
    try {
    const today = moment();
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

    // Check if today is the refresh date for any trimester
    const refreshDates = Object.values(trimester).map(t => t.refresh);
    refreshDates.includes(today) ? await sendDiscordSubjectChannelRefresh() : null;

    // Check if today is within the first, second, or third trimester
    const isInFirstTrimester = today.isBetween(trimester.one.start, trimester.one.end, null, '[]');
    const isInSecondTrimester = today.isBetween(trimester.two.start, trimester.two.end, null, '[]');
    const isInThirdTrimester = today.isBetween(trimester.three.start, trimester.three.end, null, '[]');

    if (isInFirstTrimester || isInSecondTrimester || isInThirdTrimester) {
        await sendWeeklyTutorialTimeReminder();
    } else {
        console.log('No reminders this week. Not a trimester period.');
        await testWeeklyTutorialReminders();
        await testSubjectChannelRefresh();
    }
    } catch (error) {
    console.error('Error in weekly reminders cron job:', error);
    }
}
};