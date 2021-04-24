import { Client, MessageEmbed } from "discord.js";

/**
 * Create a unique style for your rich-embed
 * or later modify this file to make it use options of
 * styles for various needs
 *
 * @param title is the name of the rich-embed
 * @param client library from discord.js
 */
export function generateRichEmbed(title: string, client: Client) {
  const avatarURL = client.user?.displayAvatarURL();
  const messageEmbed = new MessageEmbed()
    .setColor("#4848FF")
    .setTitle(title)
    .setFooter("Made by 4Queijos's lovely programmer")
    .setTimestamp();

    messageEmbed.author = {
    name: client.user?.username,
    iconURL: avatarURL,
  };

  return messageEmbed;
}
