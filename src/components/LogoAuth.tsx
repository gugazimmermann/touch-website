import LogoIcon from '../images/LogoIcon';

type LogoAuthProps = {
	styles: string;
}

export default function LogoAuth({ styles }: LogoAuthProps) {
	return (
		<div className={`flex flex-col w-full items-center text-3xl ${styles}`}>
			<LogoIcon styles="h-12 w-12" />
			<h1>{process.env.REACT_APP_TITLE}</h1>
		</div>
	);
}
