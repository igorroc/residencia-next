import Image from "next/image"
import Link from "next/link"
import { FaLongArrowAltDown } from "react-icons/fa"

import Laptop from "/public/laptop.png"
import WaveSvg from "@/components/Svg/Wave"

import styles from "./page.module.css"

import diferenciais from "@/utils/diferenciais"
import DiferenciaisCard from "@/components/DiferenciaisCard"

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

				<WaveSvg className={styles.waveSvg} />
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
		</>
	)
}
