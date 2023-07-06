import Header from "@/components/Header"
import "./globals.css"
import { Montserrat } from "next/font/google"
import Footer from "@/components/Footer"
import { Metadata } from "next"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Residencia em Software",
	description:
		"Promover a capacitação de profissionais e estudantes da área de Computação e Engenharias para atuarem diretamente na área de Desenvolvimento de Software, diminuindo, assim, o crescente déficit de profissionais com esse perfil no mercado brasileiro.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={montserrat.className}>
				<link rel="icon" href="/favicon.png" sizes="any" />
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
