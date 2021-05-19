import * as React from 'react';
import request from '../../services/api';
import Admin from '../../components/templates/Admin';
import Layout from '../../components/templates/Default';

export interface InboxProps {}

const Inbox: React.FC<InboxProps> = () => {
	const [data, setData] = React.useState<IMessageResponse[]>();
	const [expanded, setExpanded] = React.useState<number>(-1);
	const [token, setToken] = React.useState<string>('');
	React.useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await request('/messages', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setData(response.data);
				console.log(response.data);
			} catch (error) {}
		};

		fetchMessages();
	}, [token]);
	return (
		<Layout>
			<Admin handleToken={setToken}>
				<div className="flex flex-col py-8 gap-8">
					<h1 className="text-2xl font-bold">Message inbox</h1>
					{data && (
						<div className="pb-32 border-2 border-gray-300 rounded-md">
							<div className="border-b-2 border-gray-300 py-4 px-6 text-sm font-semibold bg-gray-100">
								Inbox - {data.length} messages ({data.map((x) => x.seen).length}{' '}
								unread)
							</div>
							{data.map((message, idx) => (
								<div className="border-b-2 border-gray-200 ">
									<button
										onClick={() => setExpanded(idx)}
										className={`w-full py-4 px-3 hover:bg-gray-100 text-sm flex items-center gap-4 ${
											message.seen ? 'text-gray-600' : 'text-gray-900'
										}`}
										key={message.id}
									>
										<div
											className={`rounded-full w-3 h-3 ${
												message.seen ? 'bg-gray-300' : 'bg-blue-600'
											}`}
										/>
										{message.author} - {message.title}
									</button>
									{expanded === idx && (
										<div className="px-6 py-4">
											<h2 className="text-2xl">{message.author}:</h2>
											<p>{message.message}</p>
										</div>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</Admin>
		</Layout>
	);
};

export default Inbox;
