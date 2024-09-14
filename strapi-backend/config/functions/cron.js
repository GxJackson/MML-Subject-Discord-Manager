const moment = require('moment');
const { 
    testWeeklyTutorialReminders,
    testSubjectChannelRefresh,
    sendWeeklyTutorialTimeReminder,
    sendDiscordSubjectChannelRefresh
} = require('./discord-service');
const { trimesterDates } = require('../../src/utils/trimester-dates');
const { discordSubjectRefresh } = require('../../src/utils/discord-subject-refresh');
const { getTutorialTimes } = require('../../src/utils/weekly-tutorial-reminders');
const { getSubjects } = require('../../src/utils/trimester-subjects');
// const { updateTrimesterDates } = require('../../src/utils/trimester-dates');

module.exports = {
// Cron runs every Monday at 8am
//'0 8 * * 1': async () => {
'1/2 * * * *': async () => {
    try {
        const today = moment();
        const trimester = await trimesterDates();

        // Check if today is the first Monday of the year
        if (today.month() === 0 && today.day() === 1 && today.date() <= 7) {
            // updateTrimesterDates();
        }

        // Check if today is the refresh date for any trimester
        const refreshDates = Object.values(trimester).map(t => t.refresh);
        refreshDates.includes(today) ? await sendDiscordSubjectChannelRefresh() : null;

        // Check if today is within the first, second, or third trimester
        Object.keys(trimester).forEach(key => trimester[key].current = today.isBetween(trimester[key].start, trimester[key].end, null, '[]'));
        console.log(`Object.keys(trimester):`, Object.keys(trimester));

        // Add the trimester number to trimester.current
        Object.keys(trimester).forEach(key => {
            trimester.current = today.isBetween(trimester.one.start, trimester.three.end, null, '[]')
                ? {"one": 1, "two": 2, "three": 3}[key]
                : null;
        });

        if (Object.values(trimester).some(t => t.current)) {
            // await sendWeeklyTutorialTimeReminder();
        } else {
            // const tutorials = await getTutorialTimes(today, trimester);
            const subjects = await getSubjects(today, trimester);
            const subjectRefresh = await discordSubjectRefresh(subjects, trimester);
            await testWeeklyTutorialReminders(subjectRefresh);
            await testSubjectChannelRefresh();
            console.log('No reminders this week. Not a trimester period.');
        }
        } catch (error) {
        console.error('Error in weekly reminders cron job:', error);
        }
    }
};