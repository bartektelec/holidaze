import * as React from 'react';
import request from '../../services/api';
import Admin from '../../components/templates/Admin';

export interface InboxProps {}

const Inbox: React.FC<InboxProps> = () => {
	const [data, setData] = React.useState<any[]>();
	const token = React.useRef<string>(null);
	React.useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await request('/messages', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setData(response.data);
			} catch (error) {
                
            }
		};

		fetchMessages();
	}, [token.current]);
	return <Admin handleToken={(value) => (token.current = value)}>{data}</Admin>;
};

export default Inbox;
