import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltDown } from "react-icons/fa"

import Laptop from "/public/laptop.png"
import SobreIMG from "/public/sobre.png"
import WaveSvg from "@/components/Svg/Wave"

import styles from "./page.module.css"

import diferenciais from "@/utils/diferenciais"
import DiferenciaisCard from "@/components/DiferenciaisCard"
import InvertedWaveSvg from "@/components/Svg/Wave/Inverted"

export default function Home() {
	return (
		<>
			<section className={styles.hero}>
				<div className={[styles.heroWrapper, "max-width"].join(" ")}>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>
							<span>Inovação.</span>
							<span>Resultados.</span>
							<span>Desenvolvimento.</span>
						</h1>
						<div className={styles.heroImage}>
							<Image src={Laptop} alt="Laptop com códigos" />
						</div>
					</div>
					<div className={styles.heroContent}>
						<div>
							<Link href="#diferenciais" className={styles.heroArrow}>
								<FaLongArrowAltDown />
							</Link>
						</div>
						<div className={styles.heroSubtitle}>
							<h2>Objetivo principal do Programa de Residência em Software:</h2>
							<p>
								Promover a <b>capacitação</b> de profissionais e estudantes da área
								de Computação e Engenharias para <b>atuarem diretamente na área</b>{" "}
								de <b>Desenvolvimento de Software</b>, diminuindo, assim, o
								crescente deficit de profissionais com esse perfil no mercado
								brasileiro.
							</p>
						</div>
					</div>
				</div>

				<WaveSvg className={styles.waveSvg} color="#31a1b3" />
			</section>

			<section>
				<div className={[styles.diferenciais, "max-width"].join(" ")} id="diferenciais">
					<h2 className={styles.diferenciaisTitle}>Diferenciais</h2>
					<div className={styles.diferenciaisContent}>
						{diferenciais.map((diferencial, index) => (
							<DiferenciaisCard
								key={index}
								number={diferencial.number}
								title={diferencial.title}
								description={diferencial.description}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={styles.sobreWrapper}>
				<InvertedWaveSvg color="#27527a" />
				<div className={[styles.sobre, "max-width"].join(" ")}>
					<h2 className={styles.sobreTitle}>Sobre o programa</h2>
					<div className={styles.sobreContent}>
						<div className={styles.sobreText}>
							<p>
								O Programa de Residência em Tecnologia da Informação e da
								Comunicação (TIC) é um projeto com o objetivo de{" "}
								<b>promover capacitação técnica em desenvolvimento de software</b>,
								contribuir para o <b>crescimento</b> da quantidade de pessoas aptas
								para atuar no setor, e consequentemente{" "}
								<b>diminuir o deficit de profissionais</b> com esse perfil no
								mercado de trabalho brasileiro. Serão <b>14 meses de formação</b>,
								sendo 7 meses de <b>aulas teórico práticas</b> e 7 meses de{" "}
								<b>imersão em equipes</b> de trabalho para resolução de{" "}
								<b>problemas reais</b> de empresas parceiras. Ao longo do processo,
								serão aplicados conteúdos como Lógica de programação,
								desenvolvimento em tecnologias como Java, .Net, Python, além da
								formação em desenvolvimento de interfaces, arquitetura, projeto e
								testes de software e uso da Cloud. São <b>100 vagas com bolsas</b>{" "}
								ofertadas para profissionais graduados em cursos de computação
								(Ciência da Computação, Sistemas de Informação, Engenharia de
								Computação, técnicos e tecnológicos) e engenharias, além de
								estudantes que estejam finalizando a graduação em qualquer dos
								cursos citados.
							</p>
							<p>
								Ao final da qualificação, o aluno será{" "}
								<b>capaz de desenvolver sistemas</b> com aplicação em diversas áreas
								como Saúde, Educação, Agronegócio e outros tipos de sistemas de
								informação onde as TIC se insiram, além de ser estimulado a{" "}
								<b>empreender</b> a partir das ideias desenvolvidas durante o curso.
							</p>
							<p>
								Projeto apoiado pelo Ministério da Ciência, Tecnologia e Inovações,
								com recursos da Lei no 8.248, de 23 de outubro de 1991. A execução
								será realizada pelo{" "}
								<b>
									Centro de Pesquisa e Desenvolvimento Tecnológico em Informática
									e Eletroeletrônica de Ilhéus (CEPEDI)
								</b>
								, em parceria com a{" "}
								<b>Universidade Estadual de Santa Cruz (UESC)</b>.
							</p>
							<button>Inscreva-se</button>
						</div>
						<div className={styles.sobreImage}>
							<Image src={SobreIMG} alt="Laptop com códigos" />
						</div>
					</div>
				</div>
				<InvertedWaveSvg color="#27527a" position="bottom" />
			</section>
		</>
	)
}
