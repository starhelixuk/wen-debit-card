import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import settings from "./config.js";

const { token, clientId, guildId } = settings;

const commands = [
  new SlashCommandBuilder()
    .setName("debit")
    .setDescription(
      "Find out the latest information regarding the upcoming debit card release from StormX"
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
