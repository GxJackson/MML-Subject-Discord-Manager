async function getTutorialTimes(today, trimester) {
    console.log(`today:`, today);
    /*const upcomingTutorials = await strapi.entityService.findOne('api::discord-post-format.discord-post-format', 1, {
        fields: ['Weekly_Tutorial_Reminders_Message_Format']
    });
    let weeklyReminderMessage = discordPostFormat.Weekly_Tutorial_Reminders_Message_Format;*/
};

module.exports = {
    getTutorialTimes
};