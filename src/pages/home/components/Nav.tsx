import { Link } from 'react-router-dom';
import LogoIcon from '../../../images/LogoIcon';

const adminURL = process.env.REACT_APP_ADMIN || "";

export default function Nav() {
	return (
		<nav id="header" className="fixed w-full z-30 top-0 bg-white shadow">
			<div className="flex flex-row items-center justify-between align-middle py-2 px-4 w-full container mx-auto">
				<Link
					className="flex flex-row items-center text-primary no-underline hover:no-underline font-bold text-2xl lg:text-2xl"
					to="/"
				>
					<LogoIcon styles="h-10 w-10" />
					<span data-testid="title">{process.env.REACT_APP_TITLE}</span>
				</Link>
				<div>
					<a
						className="bg-primary text-white font-bold rounded-full py-2 px-6 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
						href={adminURL}
					>
						Entrar
					</a>
				</div>
			</div>
		</nav>
	);
}
