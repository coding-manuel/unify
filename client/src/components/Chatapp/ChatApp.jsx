import React, { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'
import {
	Chat,
	Channel,
	ChannelHeader,
	ChannelList,
	MessageList,
	MessageInput,
	Thread,
	Window,
} from 'stream-chat-react'
import '@stream-io/stream-chat-css/dist/css/index.css'

const filters = { type: 'messaging' }
const options = { state: true, presence: true, limit: 10 }
const sort = { last_message_at: -1 }

const client = StreamChat.getInstance('vdeh8r9nqfr9')

const ChatApp = () => {
	const [clientReady, setClientReady] = useState(false)

	useEffect(() => {
		const setupClient = async () => {
			try {
				await client.connectUser(
					{
						id: 'dave-matthews',
						name: 'Dave Matthews',
					},
					'1164214'
				)

				setClientReady(true)
			} catch (err) {
				console.log(err)
			}
		}

		setupClient()
	}, [])

	if (!clientReady) return null

	return (
		<Chat client={client}>
			<ChannelList filters={filters} sort={sort} options={options} />
			<Channel>
				<Window>
					<ChannelHeader />
					<MessageList />
					<MessageInput />
				</Window>
				<Thread />
			</Channel>
		</Chat>
	)
}

export default ChatApp
