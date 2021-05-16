import * as React from 'react';
import Layout from '../../components/templates/Default'
import Admin from '../../components/templates/Admin'

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
	return <Layout>
		<Admin>
			logged in lol
		</Admin>
	</Layout>;
};

export default Dashboard;
