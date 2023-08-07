import React from "react";

import styles from "./processo.module.css";
import WaveSvg from "@/components/Svg/Wave";

import cronograma from "@/utils/cronograma";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function ProcessoSeletivo() {
  return (
    <>
      <section className={styles.hero}>
        <div className={[styles.heroWrapper, "max-width"].join(" ")}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Processo Seletivo</h1>
            <p>Inscrições encerradas!</p>
            <p>
              Candidato(a) fique atento(a) ao e-mail com instruções enviado
              hoje.
            </p>
            <p>Verifique, inclusive, sua caixa de Spam.</p>
            <br />
            <p>
              A lista com as inscrições homologadas será disponibilizada ao
              longo do dia.
            </p>
          </div>
          {/* <a
            href="/arquivo.pdf"
            className={styles.heroButton}
          >
            Acesse a lista
          </a> */}
        </div>

        <WaveSvg className={styles.waveSvg} color="#318eb3" />
      </section>

      <a
        href="/Edital_Residentes_Residencia_TIC18.pdf"
        className={styles.heroButton}
      >
        <AiOutlineDownload />
        Baixar edital
      </a>

      <section>
        <div className={"max-width"}>
          <h2 className={styles.title}>Cronograma</h2>
          <div className={styles.cronograma}>
            {cronograma.map((item, index) => (
              <div className={styles.cronogramaItem} key={index}>
                <strong>{item.title}</strong>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
