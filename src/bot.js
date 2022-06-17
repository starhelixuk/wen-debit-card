// Require the necessary discord.js classes
import { Client, Intents, MessageEmbed } from "discord.js";
import settings from "./config.js";
import debit from "./debit.js";

const { token } = settings;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("I'm listening!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "debit") {
    const result = await debit.then((data) => data);
    const { title, content, url } = result;
    await interaction.reply({
      embeds: [
        new MessageEmbed().setTitle(title).setDescription(content).setURL(url),
      ],
    });
  }
});

client.login(token);
