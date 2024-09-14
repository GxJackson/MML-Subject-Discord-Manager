const { Client, GatewayIntentBits } = require('discord.js');
// Create and configure the Discord client
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, // Access to guild info (servers)
        GatewayIntentBits.GuildMessages, // Send and edit messages
    ] 
});
const serverId = '849905212490645525';
const channelId = '1271985410033324095';

// Log in to the Discord bot
client.login(process.env.DISCORD_BOT_TOKEN).catch(error => {
    console.error('Failed to log in to Discord:', error);
});

async function testWeeklyTutorialReminders(message) {
    message = message || 'Message is empty';
    try {
        const server = await client.guilds.fetch(serverId);
        const channel = await server.channels.fetch(channelId);
        await channel.send(message);
        console.log('Test message sent successfully');
    } catch (error) {
        console.error('Error sending test message:', error);
    }
    // console.log('testWeeklyTutorialReminders');
}
async function testSubjectChannelRefresh() {
    console.log('testSubjectChannelRefresh');
}

// Function to send a message to a specific Discord channel
async function sendMessageToChannel() {
    console.log(`sendMessageToChannel`);
    
try {
    const channel = await client.channels.fetch(null);
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
const message = `Reminder: It's Monday! Here is your weekly update.`;
// await sendMessageToChannel();
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
