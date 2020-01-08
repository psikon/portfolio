import EncowayLogo from './encoway-logo.jpg';
import BrukerLogo from './bruker-logo.jpg';
import HkiLogo from './hki-logo.jpg'
import FsuLogo from './fsu-logo.jpg'

export const translations_de =  {
    header: {
        welcome: "Willkommen zu meinem Portfolio",
        more: "Weiterlesen",
        title: "Dr. rer. nat. Bioinformatiker",
    },
    about: {
        heading: "Über mich",
        paragraph_1: "Hallo, mein Name ist Philipp. Meine ersten Programmiererfahrungen machte ich vor vielen Jahren in meiner Schulzeit. Während meines Studiums der Bioinformatik habe ich angefangen erste kleinere Studentenprojekte in Java umzusetzen, sowie grundlegende Kenntnisse über Algorithmen- und Datenbankdesign zu erwerben. Am Ende des Studiums wurde die Analyse von riesigen genetischen Datensätzen mein favorisiertes Tätigkeitsfeld. In meiner anschließenden Zeit als Doktorant konnte ich mein bestehendes Wissen noch um die Sprachen R und Python erweitern um die riesigen Datenmengen zu bewältigen.",
        paragraph_2: "Nach vier Jahren als Vollzeit Doktorant konzentrierte ich mich auf die Tätigkeit, welche mir am meisten Spaß gemacht hatte und wurde Software Entwickler. Dabei konnte ich mein bestehenden Wissen, vor Allem in der Javaentwicklung, beträchtlich erweitern und lernte viel über zusätzliche Werkzeuge, welche als moderner Java Entwickler benötigt werden.",
        paragraph_3: "Für die Zukunft bin ich immer auf der Suche nach neuen interessierten Tätigkeitsfeldern.",
        paragraph_4: "Wenn Ihnen mein Portfolio gefällt, kontaktieren Sie mich doch.",
        signature: "Mit freundlichen Grüßen,\n Philipp Hennersdorf",
    },
    technologies: {
        label: {
            programming : "Programmier- sprachen",
            frameworks: "Frameworks",
            databases: "Datenbanken",
            software: "Software",
            deploy: "Build und Deployment",
            os: "Betriebssysteme",
            ide: "Entwicklungs- umgebungen",
            vs: "Versions- verwaltung",
        },
        skills: [
            "Selbständige Arbeitsweise",
            "problemlösendes Denken",
            "hohe Lernbereitschaft",
            "Strukturierte Arbeitsweise",
            "Ausdauernde Lösungssuche",
            "Verantwortungsvoll",
            "Erfahrungen in Agilen Entwicklungsmethoden",
            "Teamwork",
            "Kreativ"],
        languages: [
            {item: "Deutsch", skill: "Muttersprache" },
            {item: "Englisch", skill: "Fließend in Schrift und Wort" },
            {item: "Spanisch", skill: "Grundkenntnisse"}]
    },
    experience: {
        label: "Berufserfahrung",
        data: [
            {
                id: 4,
                name: "encoway GmbH",
                destination: "Bremen",
                time: "2018 - heute",
                position: "Software Entwickler",
                logo: EncowayLogo,
                description: [
                    "Frontend Entwicklung mit React",
                    "Modifikation und Erweiterung bestehender Softwarelösungen",
                    "Anwendung agiler Arbeitsweisen nach Kanban und Scrum",
                    "Softwareentwickler im Service",
                    "Mitwirkung an der Ausbildung zum Anwendungsinformatiker"
                ]
            },
            {   
                id: 3,
                name: "Bruker Daltonik GmbH",
                destination: "Bremen",
                time: "2016 - 2018",
                position: "Software Entwickler",
                logo: BrukerLogo,
                description: [
                    "Entwicklung von Client-Server Lösungen",
                    "Datenbankdesign und Implementierung",
                    "Design und Implementierung von Eclipse e4 GUI's",
                    "Testautomatisierung"
                ]
            },
            {   
                id: 2,
                name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
                destination: "Jena",
                time: "2012 - 2015",
                position: "Wissenschaftlicher Mitarbeiter",
                logo: HkiLogo,
                description: [
                    "Biologische und statistische Auswertung von Genomsequenzdatensätzen",
                    "Erstellung von wissentschaftlichen Publikationen",
                    "Durchführung von Vorlesungen und Seminaren",
                    "Betreuung von internationalen Masterstudenten"
                ]
            },
            {
                id: 1,
                name: "Friedrich Schiller University",   
                destination: "Jena",
                time: "2013 - 2015",
                logo: FsuLogo,
                position: "Wissenschaftlicher Mitarbeiter",
                description: ["Hilfestellung und Betreuung einer blinden Studentin"],
            }
        ]
    },
    education: {
        label: "Studium",
        data: [
            {
                id:2,
                name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
                destination: "Jena",
                time_de: "2012 - 2018",
                logo: HkiLogo,
                position: "Promotion: Bioinformatik",
                description: [
                    "Fachrichtung: Metagenomik",
                    "Titel: Comparative metagenomics of selected marine organisms of the Indopacific."
                ],
            },
            {   
                id: 1,
                name: "Friedrich Schiller University",
                destination: "Jena",
                time: "2007 - 2012",
                position: "Diplom Bioinformatiker",
                logo: FsuLogo,
                description: [
                    "Diplomarbeit: Funktionelle Analyse der Genexpression in humanen B-Lymphomazellen" ],
            }
        ]
    },
    contact : {
         title: "Kontakt",
         name: "Ihr Name",
         email: "Ihre E-Mail Adresse" ,
         message: "Ihre Nachricht",
         send: "Sende Nachricht",
    }, 
    footer: {
        button: "Seitenanfang",
    },
    
}