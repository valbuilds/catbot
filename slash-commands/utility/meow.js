const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meow')
        .setDescription('mrrp'),
    async execute(interaction) {
        return await interaction.reply('meow :)');
    }
}