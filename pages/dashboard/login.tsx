import * as React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/templates/Default';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import request from '../../services/api';
import Spinner from '../../components/atoms/Spinner';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
	const router = useRouter();
	const [loading, setLoading] = React.useState<boolean>(false);
	const [alert, setAlert] = React.useState<string>('');
	const [user, setUser] = React.useState<string>('');
	const [pw, setPw] = React.useState<string>('');
	const processSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await request.post('/auth/local/', {
				identifier: user,
				password: pw,
			});
			if (response.data.jwt) {
				localStorage.setItem('jwt', response.data.jwt);
			}
			router.push('/dashboard');
		} catch (error) {
			console.log(error);
			setAlert(`<span class='text-red-500'>${error.message}</span>`);
		}
		setLoading(false);
	};
	return (
		<Layout>
			<form
				onSubmit={(e) => processSignup(e)}
				className="flex flex-col gap-4 max-w-prose"
			>
				<h1 className="text-2xl font-medium">Admin login</h1>
				<Input
					id="login"
					label="Username"
					value={user}
					onChange={(e) => setUser(e.currentTarget.value)}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					value={pw}
					onChange={(e) => setPw(e.currentTarget.value)}
				/>
				<p dangerouslySetInnerHTML={{ __html: alert }}></p>
				<Button disabled={loading} className="self-start">
					{loading ? <Spinner /> : 'Log In'}
				</Button>
			</form>
		</Layout>
	);
};

export default Dashboard;
