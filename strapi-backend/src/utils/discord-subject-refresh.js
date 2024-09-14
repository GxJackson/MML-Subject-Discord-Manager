async function discordSubjectRefresh(subjects, trimester) {
    console.log(`subjects, trimester:`, subjects, trimester);
    const discordPostFormat = await strapi.entityService.findOne('api::discord-post-format.discord-post-format', 1, {
        fields: ['Weekly_Tutorial_Reminders_Message_Format']
    });
    let weeklyReminderMessage = discordPostFormat.Weekly_Tutorial_Reminders_Message_Format;

    // Define the variables
    const variables = {
        subjectCode: "COMP1234",
        subjectTitle: "Introduction to Computer Science",
        tutorialsBy: "Dr. John Doe",
        tutorialTime: Math.floor(Date.now() / 1000) + 86400,
        repeatTutorialTime: Math.floor(Date.now() / 1000) + 691200
    };

    // Replace placeholders with variable values
    weeklyReminderMessage = weeklyReminderMessage.replace(/\${(\w+)}/g, (match, p1) => {
        return variables[p1] || match;
    });

    // Return the message as a template literal
    return weeklyReminderMessage;
};

module.exports = {
    discordSubjectRefresh
};