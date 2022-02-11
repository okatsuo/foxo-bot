import { discordTokenError } from './errors'

const buildDiscordToken = (): string => {
  if (!process.env.DISCORD_TOKEN) throw new Error(discordTokenError)
  return process.env.DISCORD_TOKEN
}

export const appConfig = {
  discordToken: buildDiscordToken(),
  prefix: '!foxo'
}
