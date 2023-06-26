import React from "react"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={[styles.footerContent, "max-width"].join(" ")}>
				<div className={[styles.footerMenu, styles.footerLogo].join(" ")}>
					<h1>LOGO</h1>
				</div>
				<div className={styles.footerMenu}>
					<h2>Links Úteis</h2>
					<ul>
						<li>
							<Link href="/">Início</Link>
						</li>
						<li>
							<Link href="/processo-seletivo">Processo Seletivo</Link>
						</li>
						<li>
							<Link href="/contato">Contato</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerMenu}>
					<h2>Redes</h2>
					<ul>
						<li>
							<Link href="https://instagram.com">@cepedi</Link>
						</li>
						<li>
							<Link href="tel:557399998888">(73) 3231-8161</Link>
						</li>
						<li>
							<Link href="mailto:contato@cepedi.org.br">contato@cepedi.org.br</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerMenu}>
					<h2>Endereço</h2>
					<p>Av. Professor Milton Santos, s/n, Tapera, Ilhéus-BA | CEP 45651-135</p>
				</div>
			</div>
			<div className={styles.footerCopy}>
				<p>
					<span>{currentYear} - Tecnologia </span>
					<Link href="https://ilrocha.com" className={styles.animatedCopy}>
						ILR
					</Link>
				</p>
			</div>
		</footer>
	)
}
