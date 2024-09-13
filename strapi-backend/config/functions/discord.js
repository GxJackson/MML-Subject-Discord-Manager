const { Client, GatewayIntentBits } = require('discord.js');
let channelId;
// Create and configure the Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Log in to the Discord bot
//client.login(process.env.DISCORD_BOT_TOKEN);

async function testWeeklyTutorialReminders() {
    console.log('testWeeklyTutorialReminders','gday');
}
async function testSubjectChannelRefresh() {
    console.log('testSubjectChannelRefresh',process.env.DISCORD_BOT_TOKEN);
}

// Function to send a message to a specific Discord channel
async function sendMessageToChannel() {
    console.log(`sendMessageToChannel`);
    
try {
    const channel = await client.channels.fetch(channelId);
    /*if (embeds) {
    await channel.send({
        content: messageContent,
        embeds: [embeds],
    });
    } else {
    await channel.send(messageContent);
    }*/
} catch (error) {
    console.error('Error sending message to Discord:', error);
}
}

// Function to send reminder messages
async function sendWeeklyTutorialTimeReminder(channelId) {
    console.log(`sendWeeklyTutorialTimeReminder`);
const message = 'Reminder: It’s Monday! Here is your weekly update.';
await sendMessageToChannel();
    console.log(`sendMessageToChannel`);    
}

// Function to send the Annual Refresh message with subjects data
async function sendDiscordSubjectChannelRefresh(channelId, subjects) {
    console.log(`sendDiscordSubjectChannelRefresh`);    
const dataToSend = {
    count: subjects.length,
    subjects: subjects.map(subject => ({
    id: subject.id,
    name: subject.name,
    description: subject.description,
    })),
};

const embeds = {
    title: 'Annual Refresh - Subject Data',
    description: `Total subjects: ${dataToSend.count}`,
    fields: dataToSend.subjects.map(subject => ({
    name: subject.name,
    value: subject.description || 'No description',
    })),
    color: 0x00ff00,
};

await sendMessageToChannel();
}

// Export the necessary functions
module.exports = {
testWeeklyTutorialReminders,
testSubjectChannelRefresh,
sendWeeklyTutorialTimeReminder,
sendDiscordSubjectChannelRefresh,
};
