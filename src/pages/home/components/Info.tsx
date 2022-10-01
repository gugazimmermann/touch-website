import RealTime from '../../../images/real_time.svg';
import Survey from '../../../images/survey2.svg';

export default function Info() {
	return (
		<section className="bg-white py-2">
			<div className="container max-w-5xl mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 p-6 text-center sm:text-left">
						<h3 className="text-2xl font-bold leading-none mb-3">Facilite o retorno dos Visitantes</h3>
						<p>
							Colete de forma prática dados dos visitantes do evento, como número de telefone ou email. Crie mailing
							lists ou transmissões de Whatsapp para facilitar a divulgação de seu próximo evento e garantir o retorno
							dos visitantes.
							<br />
							<br />
							Divulge de forma direcionada seu próximo evento!
						</p>
					</div>
					<div className="w-full sm:w-1/2">
						<img alt="RealTime" className="w-4/5 mx-auto" src={RealTime} />
					</div>
				</div>

				<div className="flex flex-wrap flex-col-reverse sm:flex-row">
					<div className="w-full flex justify-center sm:w-1/2">
						<img alt="Survey" className="w-full md:w-4/5" src={Survey} />
					</div>
					<div className="w-full sm:w-1/2 p-6 mt-6  text-center sm:text-left">
						<h3 className="text-2xl font-bold leading-none mb-3">Pesquisa e Relatórios personalizados</h3>
						<p>
							Colete informações básicas de seus visitantes, como sexo, idade e cidade de origem, mas também crie
							pesquisas personalizadas sobre o evento, como a atração preferida, melhor FoodTruck, qual o dia mais legal
							do evento, etc.
							<br />
							<br />
							Saiba do que o visitante gostou!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
