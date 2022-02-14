import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { appConfig } from './config'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('messageCreate', async (msg) => {
  if (msg.attachments.size > 0) {
    msg.attachments.forEach((attachment) => {
      const item = { // TODO: need an ID
        message: msg.content,
        image_url: attachment.url
      }
      console.log('object to save...', item)
      return item
    })
  }
})

client.login(appConfig.discordToken)
  .then(() => console.log('[FOXO] Running!!!'))
  .catch((error) => console.error(error))
