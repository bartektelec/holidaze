import * as React from 'react';
import Navigation from '../components/molecules/Navigation';
import Searchbar from '../components/organisms/Searchbar';
import Button from '../components/atoms/Button';
import Footer from '../components/molecules/Footer';
import Input from '../components/atoms/Input';
import request from '../services/api';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
	const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [subject, setSubject] = React.useState<string>('');
	const [text, setText] = React.useState<string>('');
	const [alert, setAlert] = React.useState<string>('');
	const processForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const sendMessage = async () => {
			try {
				await request.post('/messages', {
					author: name,
					email,
					title: subject,
					message: text,
				});
				setAlert(`<span class='text-green-500'>Sent successfully</span>`);
				[setName, setEmail, setSubject, setText].forEach((func) => func(''));
			} catch (error) {
				setAlert(`<span class='text-red-500'>${error}</span>`);
			}
		};

		sendMessage();
	};
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<Navigation dark />
			</header>
			<Searchbar />
			<main className="container mx-auto flex-1 flex flex-col px-4">
				<h1 className="mt-14 font-bold">Contact</h1>
				<p>If you have any concerns fill out the form below to contact us.</p>
				<form
					onSubmit={processForm}
					className="flex flex-col gap-4 py-4 max-w-prose"
				>
					<Input
						id="name"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
						required
						label="Name"
					/>
					<Input
						id="email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						type="email"
						required
						label="Your e-mail"
					/>
					<Input
						id="subject"
						value={subject}
						onChange={(e) => setSubject(e.currentTarget.value)}
						required
						label="Subject"
					/>
					<div className="bg-white relative inline-flex items-center gap-2 rounded-md border-2 placeholder:text-gray-500 p-2 focus-within:border-blue-400 border-blue-200 text-gray-700 ">
						<label
							className="absolute text-xs -top-2 left-1 px-2 bg-white rounded-md border border-blue-200"
							htmlFor="message"
						>
							Message
							<span className="text-red-500 pl-2">*</span>
							<span className="sr-only">Required field</span>
						</label>
						<textarea
							value={text}
							onChange={(e) => setText(e.currentTarget.value)}
							required
							id="message"
							className="resize-none w-full bg-transparent disabled:cursor-not-allowed focus:outline-none disabled:bg-transparent"
						/>
					</div>
					<p dangerouslySetInnerHTML={{ __html: alert }}></p>
					<Button
						disabled={!name || !subject || !email || !text}
						className="self-end"
					>
						Send message
					</Button>
				</form>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
