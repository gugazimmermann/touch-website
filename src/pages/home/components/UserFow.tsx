export default function UserFlow() {
	const cardOne = () => (
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded overflow-hidden shadow-xl">
				<a href="/" className="flex flex-wrap no-underline hover:no-underline">
					<p className="w-full text-gray-600 text-xs md:text-sm px-6 py-3">Passo 1</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Coleta do Celular</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Ao ler um QRCode o visitante é direcionado para cadastrar seu celular, ele receberá um código de validação
						por SMS e assim que validar estará apto a retirar um brinde do evento!
					</p>
				</a>
			</div>
		</div>
	);

	const cardTwo = () => (
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded overflow-hidden shadow-xl">
				<a href="/" className="flex flex-wrap no-underline hover:no-underline">
					<p className="w-full text-gray-600 text-xs md:text-sm px-6 py-3">Passo 2</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Participação na Pesquisa</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Acessando a página do evento e entrando com seu número de telefone o visitante poderá responder a uma
						pesquisa de duas partes, a primeira personalizada sobre o evento e a segunda com informações sobre ele
						mesmo.
					</p>
				</a>
			</div>
		</div>
	);

	const cardThree = () => (
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded overflow-hidden shadow-xl">
				<a href="/" className="flex flex-wrap no-underline hover:no-underline">
					<p className="w-full text-gray-600 text-xs md:text-sm px-6 py-3">Passo 3</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Relatórios e Planejamento</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Acesso os relatórios com gráficos sobre seu evento, podendo assim visualizar de forma simples e unificada os
						resultados da pesquisa.
						<br />
						Utilize os dados cadastrados para convidar os visitantes no seu próximo evento!
					</p>
				</a>
			</div>
		</div>
	);
	return (
		<section className="bg-primary">
			<div className="container mx-auto flex flex-wrap pt-4 pb-12">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">Como Funciona?</h1>
				{cardOne()}
				{cardTwo()}
				{cardThree()}
			</div>
		</section>
	);
}
