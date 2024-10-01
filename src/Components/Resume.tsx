import { Heading } from "@chakra-ui/react";
import Card from "./Card";

export default function Resume() {
  return (
    <>
      <Heading margin="1rem 0">Mes Expériences</Heading>
      <Card
        title="Teaching Assistant parcours PHP/Symfony"
        color="#FFEBD1"
        missionsList={[
          "Animation de cours",
          "Correction d'ateliers et accompagnement des apprenants dans leurs projets.",
          "Réalisation de sessions de livecoding pour illustrer les concepts clés.",
          "Support technique et pédagogique personnalisé aux élèves.",
          "Réalisation de reviews sur les projets des élèves pour assurer la qualité du code et la conformité aux bonnes pratiques.",
        ]}
        company="Wild Code School - Full remote"
        year="Septembre 2023 - Septembre 2024"
      />
      <Heading margin="1rem 0">Mes Formations</Heading>
      <Card
        title="Concepteur Développeur d'Applications"
        color="#F2F7FC"
        description="J'ai suivi une formation de 12 mois en alternance en Concepteur Développeur d'applications niveau Bac+3/4, 
        qui m'a permis d'acquérir une solide expertise dans le développement d'applications web. Au cours de cette formation, 
        j'ai appris à concevoir et à développer des applications sécurisées, ainsi qu'à déployer sur VPS avec Caddy, Nginx et Docker. 
        J'ai réalisé un projet en groupe où nous avons utilisé des technologies telles que TypeORM, TypeScript, React avec Next.js, 
        PostgreSQL, Redis, ainsi que GraphQL pour le backend et Apollo Client et Server."
        year="Septembre 2023 - Septembre 2024"
      />
      <Card
        title="Développeur Web et Web Mobile"
        color="#F2F7FC"
        description="J'ai suivi une formation bac+2 à temps plein de 5 mois en PHP et Symfony, où j'ai acquis des compétences solides 
        dans le développement web. J'ai découvert les bases du web, notamment HTML, CSS et JavaScript, et j'ai appris à résoudre 
        des problèmes techniques grâce à la programmation en PHP selon une approche procédurale. J'ai ensuite approfondi mes connaissances 
        en programmation orientée objet (POO), en modélisation des bases de données, requêtes SQL, et en architecture MVC. Enfin, 
        j'ai utilisé le framework Symfony pour développer des applications professionnelles, en réalisant des projets en groupe 
        qui m'ont permis de répondre à des briefs clients."
        year="Février 2023 - Juillet 2023"
      />
    </>
  );
}
