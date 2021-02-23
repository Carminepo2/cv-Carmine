import Layout from "../components/Layout";
import JobExperience from "../components/jobs/JobExperience";
import StudyExperience from "../components/jobs/StudyExperience";
import Certificate from "../components/jobs/Certificate";

export default function Projects() {
  return (
    <Layout title="Formazione">
      <section>
        <h2>Istruzione</h2>
        <div className="d-flex flex-wrap mt-3">
          <StudyExperience date="2016" title="Diploma Tecnico Meccanico " location="I.T.I. Marie Curie, Ponticelli (NA)" description="Conseguito diploma." />
          <StudyExperience
            date="2021"
            title=" Apple Developer Academy"
            location="Università degli Studi di Napoli Federico II, Napoli (NA)"
            description="Superati i test di ingresso. Inizio anno accademico."
          />
          <StudyExperience date="2021" title="Inizio Triennale Informatica" location="Università degli Studi di Napoli Federico II, Napoli (NA)" description="Inizio percorso di studi." />
        </div>
        <h2>Certificati</h2>
        <ul>
          <li>
            <Certificate title="B2 English Certificate Trinity College London" location="We Bridge International LTD. Cardiff" />
          </li>
          <li>
            <Certificate title="Responsive Web Design" location="freeCodeCamp()" link="https://freecodecamp.org/certification/fcc24e82ad0-049f-44fc-8d8f-fdd019879843/responsive-web-design" />
          </li>
          <li>
            <Certificate
              title="Computer Science for Web Programming"
              location="HarvardX/Edx. Online/Cambridge, Massachusetts"
              link="https://credentials.edx.org/credentials/c2a7e96f68964c8883832b4e44e49dbe/"
            />
          </li>
          <li>
            <Certificate title="Fondamenti di Marketing Digitale" location="Google Digital Training" link="https://learndigital.withgoogle.com/link/1gcpw8lsohs" />
          </li>
        </ul>

        <h2>Lavoro</h2>
        <JobExperience date="2016 – 2017" title="Team Leader \ Interprete" location="CL International | Napoli, Italia">
          <p>
            Compagnia di traslochi che lavorava per la base americana Nato situata a Gricignano. Cessati rapporti causa chiusura azienda. <br />
            Attività principali comprendevano:{" "}
          </p>
          <ul>
            <li>Gestione del cliente</li>
            <li>Gestire un team di 4-5 operai, assicurando che il trasloco sia effettuato secondo le direttive del cliente.</li>
            <li>Gestione documentazione necessaria per il trasloco.</li>
            <li>Interprete Inglese-Italiano.</li>
          </ul>
        </JobExperience>
        <JobExperience date="2017 – 2019 (stagionale)" title="Agente di Rampa" location="GH Napoli | Napoli, Italia">
          <p>
            Gestione e supervisione operazioni di terra voli di linea. Certificato nel lavorare con compagnia aeree come: Easyjet, United, Alitalia, Volotea, Eurowings e voli charter. <br />
            Attività principali:
          </p>
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
      <style jsx>
        {`
          h2 {
            font-size: 5rem;
            margin-top: 30px;
            margin-bottom: 20px;

            font-weight: 200;
          }
          p {
            margin-bottom: 0;
          }
          @media only screen and (max-width: 580px) {
            h2 {
              font-size: 3.5rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}
