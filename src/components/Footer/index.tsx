import React from "react"

import styles from "./footer.module.css"
import Link from "next/link"

import Logo from "/public/logo.png"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={[styles.footerContent, "max-width"].join(" ")}>
				<div className={[styles.footerMenu, styles.footerLogo].join(" ")}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={Logo.src} alt="Logo" />
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
							<Link href="https://www.instagram.com/cepedilheus/">@cepedilheus</Link>
						</li>
						<li>
							<Link href="tel:557332318161">(73) 3231-8161</Link>
						</li>
						<li>
							<Link href="mailto:residenciatic18@cepedi.org.br">
								residenciatic18@cepedi.org.br
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerMenu}>
					<h2>Endereço</h2>
					<p>Av. Professor Milton Santos, 597, Tapera, Ilhéus-BA | CEP 45651-135</p>
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
