import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltDown } from "react-icons/fa"
import { BiBookAlt } from "react-icons/bi"
import { LuGraduationCap } from "react-icons/lu"

import HomeIMG from "/public/home.jpg"
import SobreIMG from "/public/objetivos.jpg"
import LogoCepedi from "/public/apoio/cepedi.png"
import LogoUesc from "/public/apoio/uesc.png"
import LogoSoftex from "/public/apoio/softex.png"
import LogoMCTIFuturo from "/public/apoio/mcti_futuro.png"
import LogoMCTI from "/public/apoio/mcti.png"

import WaveSvg from "@/components/Svg/Wave"

import styles from "./page.module.css"

import diferenciais from "@/utils/diferenciais"
import trilha from "@/utils/trilha"
import DiferenciaisCard from "@/components/DiferenciaisCard"
import InvertedWaveSvg from "@/components/Svg/Wave/Inverted"
import CustomLink from "@/components/CustomLink"

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
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={HomeIMG.src} alt="Laptop com codigos" />
						</div>
					</div>
					<div className={styles.heroContent}>
						<div>
							<Link href="#diferenciais" className={styles.heroArrow}>
								<FaLongArrowAltDown />
							</Link>
						</div>
						<div className={styles.heroSubtitle}>
							<h2>Objetivo principal do Programa:</h2>
							<p>
								Promover a <b>capacitação</b> de profissionais e estudantes da área
								de Computação e Engenharias para <b>atuarem diretamente na área</b>{" "}
								de <b>Desenvolvimento de Software</b>, diminuindo, assim, o
								crescente déficit de profissionais com esse perfil no mercado
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
								Comunicação (TIC18) é um projeto com o objetivo de promover
								capacitação técnica em desenvolvimento de software, contribuir para
								o crescimento da quantidade de pessoas aptas para atuar no setor, e
								consequentemente diminuir o déficit de profissionais com esse perfil
								no mercado de trabalho brasileiro. Serão 15 meses de formação,
								envolvendo oficinas teórico-práticas e imersão em equipes de
								trabalho para resolução de problemas reais de empresas parceiras. Ao
								longo do processo de formação, serão aplicados conteúdos como Lógica
								de programação, e Desenvolvimento de Soluções em tecnologias como
								Java, .Net, Python, além da formação em desenvolvimento de
								Interfaces, Arquitetura, Projeto, Testes de Software e uso da Cloud.
								São 100 vagas com bolsas ofertadas para profissionais graduados em
								cursos de computação (Ciência da Computação, Sistemas de Informação,
								Engenharia de Computação) e outras Engenharias, assim como técnicos
								e tecnólogos em Desenvolvimento de Software, além de estudantes que
								estejam finalizando a graduação nos cursos superiores supracitados.
							</p>
							<p>
								Ao final da qualificação, o residente será capaz de desenvolver
								sistemas com aplicação em diversas áreas como Saúde, Educação,
								Agronegócio e outros tipos de Sistemas de Informação onde as TIC se
								insiram, além de ser estimulado a empreender a partir das ideias
								inovadoras desenvolvidas durante o curso.
							</p>
							<p>
								Projeto apoiado pelo Ministério da Ciência, Tecnologia e Inovações,
								com recursos da Lei no 8.248, de 23 de outubro de 1991. Iniciativa
								do Ministério da Ciência, Tecnologia e Inovações e Softex no âmbito
								do Programa MCTI Futuro. A execução será realizada pelo Centro de
								Pesquisa e Desenvolvimento Tecnológico em Informática e
								Eletroeletrônica de Ilhéus (CEPEDI), em parceria com a Universidade
								Estadual de Santa Cruz (UESC).
							</p>
							<CustomLink href="/inscricao" label="Inscreva-se" />
						</div>
						<div className={styles.sobreImage}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={SobreIMG.src} alt="Laptop com códigos" />
						</div>
					</div>
				</div>
				<InvertedWaveSvg color="#27527a" position="bottom" />
			</section>

			<section>
				<div className={[styles.beneficios, "max-width"].join(" ")}>
					<h2 className={styles.beneficiosTitle}>Benefícios</h2>
					<p className={styles.beneficiosContent}>
						O curso é presencial e oferece aos alunos uma bolsa mensal, no valor de{" "}
						<b>R$ 1.800,00 para graduados</b>, e{" "}
						<b>R$ 1.100,00 para egressos de ensino técnico e graduandos</b>. Essa ajuda
						financeira visa proporcionar um ambiente propício ao aprendizado, permitindo
						que os estudantes se dediquem integralmente ao desenvolvimento de suas
						habilidades em Desenvolvimento de Software.
					</p>
				</div>
			</section>

			<section className={styles.publicoWrapper}>
				<div className={[styles.publico, "max-width"].join(" ")}>
					<h1>Público Alvo</h1>
					<div className={styles.publicoContent}>
						<div className={styles.publicoCard}>
							<div className={styles.publicoIcon}>
								<BiBookAlt size={32} />
							</div>
							<div className={styles.publicoCardContent}>
								<span>Estudantes</span>
								<p>
									Cursando o último ano de graduação em cursos de Computação
									(Ciência da Computação, Sistemas de Informação, Engenharia de
									Computação e Tecnólogos) e Engenharias.
								</p>
							</div>
						</div>
						<div className={styles.publicoCard}>
							<div className={styles.publicoIcon}>
								<LuGraduationCap size={32} />
							</div>
							<div className={styles.publicoCardContent}>
								<span>Profissionais Graduados</span>
								<p>
									Graduados em cursos superiores de Sistemas de Informação,
									Engenharia de Computação e Tecnólogos em TI
								</p>
							</div>
						</div>
						<div className={styles.publicoCard}>
							<div className={styles.publicoIcon}>
								<BiBookAlt size={32} />
							</div>
							<div className={styles.publicoCardContent}>
								<span>Egressos de cursos técnicos</span>
								<p>Graduados de cursos técnicos em informática.</p>
							</div>
						</div>
					</div>
				</div>
				<WaveSvg className={styles.waveSvg} color="#27527a" />
			</section>

			<section className={styles.trilhaWrapper}>
				<h2>Trilha</h2>
				<div className={styles.trilha}>
					<InvertedWaveSvg color="#27527a" />

					<div className="max-width">
						<div className={styles.trilhaContent}>
							{trilha.map((item, index) => (
								<div className={styles.trilhaItem} key={index}>
									<div className={styles.trilhaImage}>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src={item.image.src} alt={item.title} />
									</div>

									<div className={styles.trilhaItemContent}>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
										{item.link && (
											<CustomLink href={item.link} label={item.link_label} />
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					<InvertedWaveSvg color="#27527a" position="bottom" />
				</div>
			</section>

			<section>
				<div className={[styles.apoio, "max-width"].join(" ")}>
					<div className={styles.blocoApoio}>
						<span>Execução</span>
						<div className={styles.apoioContent}>
							<div className={styles.apoioItem}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={LogoCepedi.src} alt="Logo CEPEDI" />
							</div>
							<div className={styles.apoioItem}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={LogoUesc.src} alt="Logo Uesc" />
							</div>
						</div>
					</div>
					<div className={styles.blocoApoio}>
						<span>Coordenação</span>
						<div className={styles.apoioContent}>
							<div className={styles.apoioItem}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={LogoSoftex.src} alt="Logo Softex" />
							</div>
							<div className={styles.apoioItem}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={LogoMCTIFuturo.src} alt="Logo MCTI Futuro" />
							</div>
						</div>
					</div>
					<div className={styles.blocoApoio}>
						<span>Apoio</span>
						<div className={styles.apoioContent}>
							<div className={styles.apoioItem}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={LogoMCTI.src} alt="Logo MCTI" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
