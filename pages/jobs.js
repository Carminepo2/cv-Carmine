import Layout from "../components/Layout";
import JobExperience from "../components/jobs/JobExperience";

export default function Projects() {
  return (
    <Layout title="Lavoro">
      <section>
        <JobExperience date="2016 – 2017" title="Team Leader - Interprete" location="CL International | Napoli, Italia">
          Compagnia di traslochi che lavorava per la base americana Nato situata a Gricignano. Cessati rapporti causa chiusura azienda. <br />
          Attività principali comprendevano:{" "}
          <ul>
            <li>Gestione del cliente</li>
            <li>Gestire un team di 4-5 operai, assicurando che il trasloco sia effettuato secondo le direttive del cliente.</li>
            <li>Gestione documentazione necessaria per il trasloco.</li>
            <li>Interprete Inglese-Italiano.</li>
          </ul>
        </JobExperience>
        <JobExperience date="2017 – 2019 (stagionale)" title="Agente di Rampa" location="GH Napoli | Napoli, Italia">
          Gestione e supervisione operazioni di terra voli di linea. Certificato nel lavorare con compagnia aeree come: Easyjet, United, Alitalia, Volotea, Eurowings e voli charter. <br />
          Attività principali:
          <ul>
            <li>
              Supervisione di tutte le operazioni di terra previste per la partenza in orario del volo assegnato, assicurando che ogni operazione sia svolta in conformità alle misure di sicurezza e
              protezione.
            </li>
            <li>Gestione di tutti i documenti necessari all’equipaggio tramite sistemi informatici interni.</li>
            <li>Essere capace di lavorare in situazioni estremamente stressanti dovute all’eccessiva mole di lavoro, condizioni meteorologiche sfavorevoli e tempistiche strette.</li>
            <li>Gestione di un team preposto alla movimentazione dei macchinari, e al \carico/scarico.</li>
          </ul>
        </JobExperience>
        <JobExperience date="2020 – Ora" title="Web Developer Freelancer" location="Volla (NA), Italia">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta impedit quasi quia adipisci nobis et dolor explicabo molestiae molestias. </li>
          </ul>
        </JobExperience>
      </section>
    </Layout>
  );
}
