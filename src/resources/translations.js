import EncowayLogo from './encoway-logo.jpg';
import BrukerLogo from './bruker-logo.jpg';
import HkiLogo from './hki-logo.jpg'
import FsuLogo from './fsu-logo.jpg'

export const translations =  {
    general: {
        name: "Philipp Hennersdorf",
        update: 2020,
    },
    header: {
        welcome: "Welcome to my portfolio",
        more: "Read more",
        title: "Dr. rer. nat. Bioinformatic",
    },
    about: {
        heading: "About me",
        paragraph_1: "Hi, I'm Philipp. I started my first programming experiences dozens of years ago. During my study of bioinformatic I began to learn Java for tiny student projects, as well as basic knowledge in algorithm and database design. At the end of study the analysis of huge genetic dataset became one of my favorite fields of activity. As a doctoral researcher I expanded my knowledge with R and Python for a better handling of the increasing amount of data.",
        paragraph_2: "After four years I stopped my time as a full-time doctoral researcher and switched my focus to become a Software Developer. I could greatly expand my knowledge, mainly around Java development, and learned a lot about additional tools, that are needed as a modern Java Developer.",
        paragraph_3: "For the future I'm looking for interesting fields of activity.",
        paragraph_4: "I encourage you to read my portfolio and contact me.",
        signature: "Sincerely, Philipp Hennersdorf",
    },
    technologies: {
        label: {
            programming : "Programming Languages",
            frameworks: "Frameworks",
            databases: "Databases",
            software: "Software",
            deploy: "Build and Deploy",
            os: "Operating Systems",
            ide: "Development Environment",
            vs: "Version Control",
        },
        programming: [
            {item: "Java", skill: 5},
            {item: "Python", skill: 3},
            {item: "React", skill: 3},
            {item: "R", skill: 4},
            {item: "VBScript", skill: 2}
        ],
        framework: [ 
            {item: "Spring", skill: 5},
            {item: "Hibernate", skill: 4},
            {item: "Eclipse e4", skill: 4}
        ],
        deploy: [
            "Maven",
            "Jenkins",
            "Bamboo",
            "Docker"],
        software: [
            "Micosoft Office",
            "Jira",
            "Confluence",
            "Sonar",
            "LaTex"
        ],
        databases: [
            "PostgreSQL",
            "MySQL", 
            "MSSQL"],
        operationSystems: [
            "Windows",
            "Mac OSX",
            "Linux"],
        vs: [
            "git", 
            "svn"],
        ide: [ 
            "Eclipse", 
            "IntelliJ IDEA",
            "VSCode",
            "TestComplete",
            "RStudio"],
         skills: [
            "Independence",
            "Solving problems by searching for information",
            "Desire to develop and expand knowledge",
            "Structured working",
            "Perserverance in the pursiut of the target",
            "Responsibility",
            "Creativity",
            "Experience in agile development with SCRUM and Kanban",
            "Teamwork"],
        languages: [
            {item: "German", skill: "Native" },
            {item: "English", skill: "Fluent" },
            {item: "Spanish", skill: "Basic level"}],
    },
    experience: {
        label: "Experience",
        data: [
            {
                id: 4,
                name: "encoway GmbH",
                destination: "Bremen",
                time: "2018 - now",
                position:"Software Developer",
                logo: EncowayLogo,
                description: [
                    "Frontend development with React",
                    "Modification and Extension of existing software solutions",
                    "Practice of agile methods like Kanban and Scrum",
                    "Software Developer in a Service team",
                    "Involved in training of new students"
                ]
            },
            {   
                id: 3,
                name: "Bruker Daltonik GmbH",
                destination: "Bremen",
                time: "2016 -2018",
                position: "Software Developer",
                logo: BrukerLogo,
                description: [
                    "Development of Client-Server Software",
                    "Databasedesign and Development",
                    "Design and Implementation of Eclipse e4 GUI's",
                    "Testautomation"]
            },
            {   
                id: 2,
                name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
                destination: "Jena",
                time: "2012 - 2015",
                position: "Doctoral Reasearcher",
                logo: HkiLogo,
                description: [
                    "Biological and statistical analysis of sequencing data",
                    "Preparation of scientific publications",
                    "Performance of lectures and seminars",      
                    "Supervision of master students"
                ]
            },
            {
                id: 1,
                name: "Friedrich Schiller University",   
                destination: "Jena",
                time: "2013 - 2015",
                logo: FsuLogo,
                position: "Research assistant",
                description: ["Support for a visually handicapped student"]
            }
        ]
    },
    education:{
        label: "Education",
        data:[
            {
                id:2,
                name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
                destination: "Jena",
                time: "2012 - 2018",
                logo: HkiLogo,
                position:"Promotion: Bioinformatics",
                description: [
                    "Specialisation: Metagenomics",
                    "Thesis: Comparative metagenomics of selected marine organisms of the Indopacific."
                ]
            },
            {   
                id: 1,
                name: "Friedrich Schiller University",
                destination: "Jena",
                time: "2007 - 2012",
                position: "Diploma Bioinformatician",
                logo: FsuLogo,
                description: [
                    "Diploma thesis: Funktionelle Analyse der Genexpression in humanen B-Lymphomazellen" ]
            }
        ]
    },
    contact: {
         title: "Contact",
         name: "Your name",
         email: "Your e-mail address",
         message: "Your message",
         send: "Send message",
    },
    footer: {
        button: "Page Top",
    },




    

}