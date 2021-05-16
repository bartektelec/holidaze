import * as React from 'react';
import { useRouter } from 'next/router';

export interface AdminProps {
}

const Admin: React.FC<AdminProps> = ({children}) => {
	const router = useRouter();
	const [token, setToken] = React.useState<string>();
	React.useEffect(() => {
		const foundToken = localStorage.getItem('jwt') || '';
		if (!foundToken) {
			router.push('/dashboard/login');
		}
		setToken(foundToken);
	}, []);

	if (token) {
       return <>{children}</>
	} else {
        return <></>
    }

};

export default Admin;
