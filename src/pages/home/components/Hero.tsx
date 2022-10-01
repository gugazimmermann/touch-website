import Survey from '../../../images/survey.svg';

export default function Hero() {
	return (
		<section className="pt-24">
			<div className="container px-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
					<p className="uppercase tracking-loose w-full text-3xl">Organizando um Evento?</p>
					<h1 className="my-4 text-5xl font-bold leading-tight">Não perca informações sobre seus visitantes!</h1>
					<p className="leading-normal text-2xl mb-8">
						Salve os contatos, dados e resultados de pesquisas de forma fácil!
					</p>
				</div>
				<div className="w-full md:w-3/5 pb-16 sm:pb-0">
					<img alt="hero" className="w-full md:w-4/5 mx-auto" src={Survey} />
				</div>
			</div>
		</section>
	);
}
