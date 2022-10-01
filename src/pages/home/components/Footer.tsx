import { Link } from 'react-router-dom';
import LogoIcon from '../../../images/LogoIcon';

export default function Footer() {
	return (
		<footer className="bg-secondary text-white container mx-auto px-8">
			<div className="w-full flex flex-col md:flex-row py-6">
				<div className="flex-1  mb-6">
					<Link
						className="flex flex-row items-center text-white no-underline hover:no-underline font-bold text-xl"
						to="/"
					>
						<LogoIcon styles="h-10 w-10" />
						{process.env.REACT_APP_TITLE}
					</Link>
				</div>
				<div className="flex-1">
					<p className="uppercase font-bold md:mb-6">Links</p>
					<ul className="list-reset mb-6">
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								FAQ
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Suporte
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1">
					<p className="uppercase font-bold md:mb-6">Legal</p>
					<ul className="list-reset mb-6">
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Termos
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Privacidade
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1">
					<p className="uppercase font-bold md:mb-6">Social</p>
					<ul className="list-reset mb-6">
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Facebook
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Linkedin
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Twitter
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1">
					<p className="uppercase font-bold md:mb-6">a Empresa</p>
					<ul className="list-reset mb-6">
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Seja um Parceiro
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Sobre Nós
							</Link>
						</li>
						<li className="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="/" className="no-underline hover:underline  hover:text-primary">
								Contato
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
