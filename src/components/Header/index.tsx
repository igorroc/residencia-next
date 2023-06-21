"use client"

import { MdKeyboardArrowDown, MdOutlineFileDownload, MdLink } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"
import { useState } from "react"
import { usePathname } from "next/navigation"

import styles from "./header.module.css"

import Link from "next/link"

const navList = [
	{
		title: "Início",
		href: "/",
		type: "internal",
	},
	{
		title: "Processo Seletivo",
		href: "/processo-seletivo",
		type: "internal",
	},
	{
		title: "Diversos",
		list: [
			{
				title: "Área do Aluno",
				href: "#",
				type: "coming-soon",
			},
			{
				title: "Área da Empresa",
				href: "#",
				type: "coming-soon",
			},
		],
	},
	{
		title: "Contato",
		href: "/contato",
		type: "internal",
	},
]

export default function Header() {
	const [showNavList, setShowNavList] = useState(false)
	const pathname = usePathname()

	function toggleNavList() {
		setShowNavList(!showNavList)
	}

	return (
		<header className={showNavList ? styles.showNavList : ""} id={styles.header}>
			<div className={styles.wrapper}>
				<a className={styles.skipLink} href="#main-content">
					Pular para o conteúdo principal
				</a>

				<div className={styles.wrapperContent}>
					<Link className={styles.logo} href="./">
						<h1>Logo</h1>
					</Link>

					<button
						className={styles.iconMenu}
						onClick={toggleNavList}
						aria-label="Ativar menu lateral"
					>
						<div>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

					<nav className={styles.navList}>
						<ul>
							{navList.map((item, i) => {
								if (item.list) {
									return (
										<li
											className={styles.dropdown}
											data-active={item.list.some(
												(link) => pathname == link.href
											)}
											key={i}
										>
											<span className={styles.title}>
												<span> {item.title} </span>
												<MdKeyboardArrowDown />
											</span>
											<ul>
												{item.list.map((link, j) => (
													<Link
														href={link.href}
														key={`${i}${j}`}
														data-active={pathname == link.href}
													>
														{link.title}
														{link.type == "external" && <MdLink />}
														{link.type == "coming-soon" && (
															<AiFillLock />
														)}
														{link.type == "file" && (
															<MdOutlineFileDownload />
														)}
													</Link>
												))}
											</ul>
										</li>
									)
								} else {
									return (
										<Link
											href={item.href}
											data-active={pathname == item.href}
											key={i + "link"}
										>
											{item.title}
										</Link>
									)
								}
							})}
						</ul>
					</nav>
				</div>
			</div>

			<div id={styles.top}></div>
		</header>
	)
}
