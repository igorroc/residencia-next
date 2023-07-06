import InscricoesIMG from "/public/trilha/inscricoes.png"
import FormacaoIMG from "/public/trilha/formacao.png"
import ImersaoIMG from "/public/trilha/imersao.png"
import PosResidenciaIMG from "/public/trilha/pos_residencia.png"

const trilha = [
	{
		title: "Seleção",
		description:
			"Você deverá se inscrever on-line aqui pelo site após a leitura atenta do Edital que estará disponível em breve. A seleção será realizada na segunda quinzena de julho de 2023.",
		link: "/inscricao",
		link_label: "Inscreva-se agora",
		image: InscricoesIMG,
	},
	{
		title: "Formação Tecnológica",
		description:
			"Os residentes selecionados receberão treinamento em Java, Python, .Net e Desenvolvimento de Interfaces. As aulas serão presenciais e realizadas em laboratório de informática. O residente deverá reservar pelo menos 30h semanais para se dedicar à residência.",

		image: FormacaoIMG,
	},
	{
		title: "Imersão em Desafios",
		description:
			"Desafios cadastrados por empresas parceiras estarão disponíveis para serem solucionados pelos residentes, organizados em equipes de trabalho. As equipes serão acompanhadas por tutores experientes. Os residentes também poderão desenvolver ideias próprias.",
		image: ImersaoIMG,
	},
	{
		title: "Pós residência",
		description:
			"Ao final da residência, os alunos terão tido a oportunidade de empreender a partir do desenvolvimento das suas próprias ideias, incubando empresas. Também terão sido expostos a oportunidades de seleção nas empresas parceiras. Espera-se que todos tenham melhorado seus currículos e sua experiência e se tornado assim um profissional desejado pelo mercado.",
		image: PosResidenciaIMG,
	},
]

export default trilha
