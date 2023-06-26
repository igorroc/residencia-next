import InscricoesIMG from "/public/trilha/inscricoes.png"
import FormacaoIMG from "/public/trilha/formacao.png"
import ImersaoIMG from "/public/trilha/imersao.png"
import PosResidenciaIMG from "/public/trilha/pos_residencia.png"

const trilha = [
	{
		title: "Seleção",
		description:
			"Você deverá se inscrever on-line aqui pelo site após a leitura atenta do Edital que estará disponível em breve. A seleção será realizada em meados de julho de 2023.",
		link: "#",
		link_label: "Inscreva-se agora",
		image: InscricoesIMG,
	},
	{
		title: "Formação Tecnológica",
		description:
			"Os residentes selecionados receberão treinamento em Java, Python, .Net e Desenvolvimento de Interfaces. As aulas serão presenciais e realizadas em laboratório de informática. O residente deverá reservar pelo menos 30h semanais para se dedicar à residência.",
		link: "#",
		link_label: "Saiba mais",
		image: FormacaoIMG,
	},
	{
		title: "Imersão em Desafios",
		description:
			"Desafios cadastrados por empresas parceiras estarão disponíveis para serem solucionados pelos residentes organizados em equipes de trabalho. As equipes serão acompanhadas por tutores experientes. Os residentes também poderão desenvolver ideias próprias",
		link: "#",
		link_label: "Saiba mais",
		image: ImersaoIMG,
	},
	{
		title: "Pós residência",
		description:
			"Ao final da residência os alunos terão tido a oportunidade de empreender a partir do desenvolvimento das suas próprias ideias, incubando empresas. Também terão sido expostos a oportunidades de seleção nas empresas parceiras. Espera-se que todos tenham melhorado seus currículos e sua experiência e se tornado assim um profissional desejado pelo mercado",
		link: "#",
		link_label: "Saiba mais",
		image: PosResidenciaIMG,
	},
]

export default trilha
