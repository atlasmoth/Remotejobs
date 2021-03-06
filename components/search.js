const allTags = {
  "digital nomad": "🏝Digital Nomad",
  dev: "🤓Software Developer",
  engineer: "🤓Engineer",
  senior: "👵Senior",
  exec: "💼Executive",
  javascript: "🟨JavaScript",
  ruby: "💎Ruby",
  "full stack": "🥞Full Stack",
  devops: "♾️DevOps",
  "front end": "🎨Front End",
  "node js": "🟢Node JavaScript",
  php: "🐘PHP",
  backend: "🍑Backend",
  design: "🎨Design",
  "web dev": "🤓Web Software Developer",
  "non tech": "🔌Non Tech",
  ios: "🍎iOS",
  marketing: "🚥Marketing",
  c: "🔷C",
  "c plus plus": "➕C Plus Plus",
  admin: "♾️Admin",
  "meteor js": "☄️Meteor JavaScript",
  react: "⚛️React",
  mobile: "📱Mobile",
  css: "🎨CSS",
  java: "☕️Java",
  html: "🔡HTML",
  angularjs: "🅰️AngularJS",
  "sys admin": "♾️Sys Admin",
  python: "🐍Python",
  sales: "💼Sales",
  "user experience": "🎨User Experience",
  "product manager": "💼Product Manager",
  "customer support": "🎧Customer Support",
  architecture: "🔷Architecture",
  android: "🤖Android",
  "user interface": "🎨User Interface",
  golang: "🐀Golang",
  cloud: "☁️Cloud",
  "quality assurance": "🔬Quality Assurance",
  "full time": "⏰Full Time",
  infosec: "🔷InfoSec",
  api: "🤖API",
  testing: "🧪Testing",
  sql: "🐬SQL",
  medical: "💉Medical",
  ops: "♾️Ops",
  teaching: "👨‍🏫Teaching",
  linux: "🐧Linux",
  finance: "💰Finance",
  jquery: "🧩jQuery",
  education: "👨‍🏫Education",
  "data science": "👩‍🔬Data Science",
  mongodb: "🍃MongoDB",
  wordpress: "✍️Wordpress",
  excel: "📗Excel",
  drupal: "💧Drupal",
  analyst: "🤔Analyst",
  junior: "👶Junior",
  rails: "🛤Rails",
  scala: "☕️Scala",
  saas: "📦SaaS",
  "social media": "♾️Social Media",
  ecommerce: "🔷Ecommerce",
  aws: "☁️Amazon Web Services",
  consulting: "💼Consulting",
  ads: "📗Ads",
  internship: "Internship",
  "react native": "⚛️React Native",
  "bus dev": "🤓Bus Software Developer",
  stats: "Stats",
  "game dev": "🤓Game Software Developer",
  seo: "🔎SEO",
  "machine learning": "🤖Machine Learning",
  "part time": "⏰Part Time",
  copywriting: "🔷Copywriting",
  postgres: "🐬Postgres",
  elasticsearch: "🧩Elasticsearch",
  "dot net": "🌊Dot Net",
  typescript: "🟦Typescript",
  docker: "🐳Docker",
  "ember js": "🐹Ember JavaScript",
  "tech lead": "👩‍✈️Tech Lead",
  laravel: "📦Laravel",
  dba: "🥞Database Administration",
  qa: "Quality Assurance",
  salesforce: "☁️Salesforce",
  "big data": "👩‍🔬Big Data",
  node: "🟢Node",
  graphql: "⚛️GraphQL",
  swift: "🐇Swift",
  "ruby on rails": "🤖Ruby on Rails",
  recruiter: "🎯Recruiter",
  photoshop: "🎨Photoshop",
  "objective c": "🔷Objective C",
  video: "Video",
  apache: "⛰Apache",
  "virtual assistant": "Virtual Assistant",
  kubernetes: "🦑Kubernetes",
  go: "🍃Go",
  frontend: "🎨Frontend",
  vue: "💚Vue",
  cassandra: "🔷Cassandra",
  nodejs: "🟢Nodejs",
  developer: "🤓Developer",
  "c sharp": "🔷C Sharp",
  lamp: "LAMP",
  git: "🏝Git",
  clojure: "☯️Clojure",
  embedded: "💡Embedded",
  angular: "🅰️Angular",
  mysql: "🐬MySQL",
  illustrator: "Illustrator",
  heroku: "🟪Heroku",
  legal: "👩‍⚖️Legal",
  telecom: "🔷Telecom",
  nginx: "❇️Nginx",
  reactjs: "⚛️ReactJS",
  "y combinator": "🔷Y Combinator",
  perl: "🐪Perl",
  product: "📦Product",
  ux: "🎨UX",
  ui: "🎨UI",
  vfx: "VFX",
  startup: "Startup",
  django: "🤠Django",
  redux: "👨‍🏫Redux",
  music: "🔷Music",
  travel: "Travel",
  "english teacher": "👨‍🏫English Teacher",
  xamarin: "Xamarin",
  net: "🧠Net",
  crypto: "🏅Crypto",
  scrum: "🔁Scrum",
  serverless: "Serverless",
  macos: "🔷macOS",
  engineering: "🤓Engineering",
  redis: "Redis",
  postgresql: "🐬PostgreSQL",
  math: "Math",
  software: "🤓Software",
  microsoft: "🔷Microsoft",
  fullstack: "🔷Fullstack",
  growth: "🚀Growth",
  "react js": "⚛️React JavaScript",
  accounting: "🔷Accounting",
  tech: "💰Tech",
  terraform: "Terraform",
  "product management": "📦Product Management",
  kotlin: "☕️Kotlin",
  shopify: "🛍Shopify",
  haskell: "#️⃣Haskell",
  "back end": "🍑Back End",
  "customer success": "🎧Customer Success",
  writing: "Writing",
  amazon: "Amazon",
  content: "🔷Content",
  "data viz": "👩‍🔬Data Viz",
  "software engineer": "🤓Software Engineer",
  fintech: "💰Fintech",
  js: "🟢JavaScript",
  elixir: "Elixir",
  hr: "🎯Hr",
  b2b: "💼B2B",
  manager: "💼Manager",
  symfony: "Symfony",
  analytics: "🔷Analytics",
  infrastructure: "🌉Infrastructure",
  data: "👩‍🔬Data",
  blockchain: "⛓Blockchain",
  "obj c": "🔷Obj C",
  "vue js": "💚Vue JavaScript",
  contracting: "📋Contracting",
  microservices: "🔷Microservices",
  sre: "Sre",
  bitcoin: "🏅Bitcoin",
  automation: "Automation",
  lead: "👩‍✈️Lead",
  "product design": "🎨Product Design",
  support: "🎧Support",
  remote: "🏝Remote",
  bootstrap: "🟪Bootstrap",
  "work from home": "Work from Home",
  web: "Web",
  hadoop: "Hadoop",
  "technical support": "🔷Technical Support",
  agile: "🐇Agile",
  ethereum: "💎Ethereum",
  ansible: "Ansible",
  "software development": "🤓Software Development",
  vuejs: "💚Vuejs",
  lisp: "Lisp",
  firebase: "🔥Firebase",
  "project management": "🔷Project Management",
  phonegap: "Phonegap",
  "customer service": "🎧Customer Service",
  "open source": "🧩Open Source",
  development: "🤓Development",
  security: "🔑Security",
  erlang: "🟥Erlang",
  "information services": "🔷Information Services",
  robotics: "🔷Robotics",
  architect: "🔷Architect",
  azure: "☁️Azure",
  jira: "🔷Jira",
  "content marketing": "🚥Content Marketing",
  "account management": "🔷Account Management",
  gcp: "🔷Gcp",
  management: "Management",
  "virtual reality": "Virtual Reality",
  healthcare: "💉Healthcare",
  nosql: "🐬NoSQL",
  "data entry": "👩‍🔬Data Entry",
  operations: "Operations",
  english: "English",
  html5: "🔡HTML5",
  unity: "Unity",
  spring: "Spring",
  "software engineering": "🤓Software Engineering",
  spark: "Spark",
  flutter: "🦩Flutter",
  "health tech": "🍃Health Tech",
  hardware: "Hardware",
  outdoors: "Outdoors",
  speech: "🔷Speech",
  research: "👩‍🔬Research",
  "digital marketing": "🚥Digital Marketing",
  couchdb: "🔷Couchdb",
  apollo: "Apollo",
  community: "🔷Community",
  edtech: "🔷Edtech",
  celery: "🔷Celery",
  kafka: "Kafka",
  "business development": "💼Business Development",
  "google cloud platform": "☁️Google Cloud Platform",
  adult: "Adult",
  chef: "🔷Chef",
  coldfusion: "🔷Coldfusion",
  rest: "Rest",
  airflow: "🤖Airflow",
  crm: "🔷Crm",
  cycling: "🔷Cycling",
  rabbitmq: "Rabbitmq",
  ambassador: "Ambassador",
  es6: "Es6",
  "tech support": "🔷Tech Support",
  dotnet: ".NET",
  ai: "🤖AI",
  ror: "Ror",
  woocommerce: "🔷Woocommerce",
  scheme: "🔷Scheme",
  clojurescript: "☯️Clojurescript",
  jenkins: "🎩Jenkins",
  flask: "🍼Flask",
  "visual basic": "🔷Visual Basic",
  freelance: "🔷Freelance",
  "product development": "🤓Product Development",
  "ci cd": "♾️Ci Cd",
  solidity: "Solidity",
  esports: "Esports",
  "rest api": "🤖Rest API",
  "web development": "🤓Web Development",
  groovy: "🍸Groovy",
  "artificial intelligence": "♾️Artificial Intelligence",
  sketch: "🎨Sketch",
  it: "🔬IT",
  sysadmin: "♾️Sysadmin",
  controller: "🔷Controller",
  leadership: "👩‍✈️Leadership",
  "distributed systems": "Distributed Systems",
  "email marketing": "🤖Email Marketing",
  other: "Other",
  apis: "🤖Apis",
  unix: "Unix",
  "continuous integration": "🔷Continuous Integration",
  css3: "🎨Css3",
  digital: "🏝Digital",
  tailwind: "💨Tailwind",
  grafana: "Grafana",
  copywriter: "🔷Copywriter",
  "data engineering": "👩‍🔬Data Engineering",
  "net core": "🔷Net Core",
  magento: "🔸Magento",
  enterprise: "Enterprise",
  "test automation": "🧪Test Automation",
  "google cloud": "☁️Google Cloud",
  scss: "🎨Scss",
  assembly: "Assembly",
  voip: "Voip",
  "project manager": "💼Project Manager",
  etl: "Etl",
  figma: "🎨Figma",
  monitoring: "Monitoring",
  containers: "🤖Containers",
  "product designer": "🎨Product Designer",
  "user research": "👩‍🔬User Research",
  "node dev": "🟢Node Software Developer",
  "content creation": "🔷Content Creation",
  "professional services": "🔷Professional Services",
  "community management": "🔷Community Management",
  matlab: "👩‍🔬Matlab",
  technical: "🔷Technical",
  communication: "🔷Communication",
  recruitment: "🎯Recruitment",
  database: "👩‍🔬Database",
  chat: "🔷Chat",
  "team lead": "👩‍✈️Team Lead",
  recruiting: "🎨Recruiting",
  "smart contracts": "📋Smart Contracts",
  media: "Media",
  privacy: "🔷Privacy",
  "technical writing": "🔷Technical Writing",
  "start up": "Start Up",
  erp: "Erp",
  brand: "Brand",
  snowflake: "Snowflake",
  helpdesk: "🎧Helpdesk",
  phoenix: "Phoenix",
  nextjs: "Nextjs",
  lambda: "Lambda",
  prometheus: "Prometheus",
  "product marketing": "🚥Product Marketing",
  editing: "Editing",
  business: "💼Business",
  agency: "🔷Agency",
  windows: "Windows",
  "ux design": "🎨UX Design",
  selenium: "Selenium",
  "web design": "🎨Web Design",
  "data analysis": "👩‍🔬Data Analysis",
  cro: "🔷Cro",
  webmaster: "Webmaster",
  affiliate: "Affiliate",
  civictech: "♾️Civictech",
  "mobile development": "🤓Mobile Development",
  "amazon web services": "🔷Amazon Web Services",
  advertising: "Advertising",
  "functional programming": "🤓Functional Programming",
  rust: "🦀Rust",
  "ui ux": "🎨UI UX",
  cypress: "🔷Cypress",
  "after effects": "🔷After Effects",
  cto: "🔷Cto",
  "account manager": "💼Account Manager",
  publishing: "Publishing",
  ionic: "🔷Ionic",
  "data analyst": "👩‍🔬Data Analyst",
  "marketing manager": "🚥Marketing Manager",
  email: "🤖Email",
  programming: "🤓Programming",
  strategy: "Strategy",
  "english teaching": "👨‍🏫English Teaching",
  "e commerce": "🔷E Commerce",
  pandas: "Pandas",
  redshift: "Redshift",
  branding: "Branding",
  algorithms: "👩‍🔬Algorithms",
  app: "App",
  writer: "Writer",
  oop: "Oop",
  zendesk: "🎧Zendesk",
  github: "Github",
  ml: "🔡Ml",
  chief: "🔷Chief",
  german: "German",
  ci: "♾️Ci",
  quality: "🔬Quality",
  "full stack developer": "🤓Full Stack Developer",
  "frontend development": "🎨Frontend Development",
  reactnative: "⚛️Reactnative",
  elk: "Elk",
  "spring boot": "Spring Boot",
  liquid: "🎨Liquid",
  "community manager": "💼Community Manager",
  sidekiq: "Sidekiq",
  dynamodb: "Dynamodb",
  ember: "🐹Ember",
  iphone: "iPhone",
  oracle: "🔷Oracle",
  ppc: "🔷Ppc",
  pytest: "🧪Pytest",
  express: "🧩Express",
  tdd: "Tdd",
  "site reliability": "Site Reliability",
  "growth hacker": "🚀Growth Hacker",
  nestjs: "Nestjs",
  rxjs: "Rxjs",
  contract: "📋Contract",
  online: "Online",
  "digital media": "Digital Media",
  "product owner": "📦Product Owner",
  social: "♾️Social",
  apps: "Apps",
  cryptocurrency: "🏅Cryptocurrency",
  biotech: "📡Biotech",
  "non profit": "Non Profit",
  gitlab: "👩‍🔬Gitlab",
  technology: "🔷Technology",
  gaming: "Gaming",
  "account executive": "💼Account Executive",
  "ui design": "🎨UI Design",
  customer: "🎧Customer",
  "remote work": "🏝Remote Work",
  chatbot: "🔷Chatbot",
  argocd: "♾️Argocd",
  "software testing": "🧪Software Testing",
  mongo: "🍃Mongo",
  nlp: "NLP",
  "html css": "🔡HTML CSS",
  "manual testing": "🧪Manual Testing",
  test: "🧪Test",
  "software design": "🎨Software Design",
};
import { useEffect, useState } from "react";
import styles from "./../styles/home.module.css";
export default function Search({ setSearchTerms }) {
  const [val, setVal] = useState("");
  const [display, setDisplay] = useState(false);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const values = Object.entries(allTags).filter(([index]) => {
      if (index.toLowerCase().includes(val.toLowerCase())) {
        return true;
      }
    });
    setKeywords(values.slice(0, 10));
  }, [val]);
  return (
    <>
      <div className={styles.search}>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <span>
          <input
            type="search"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => setDisplay(true)}
            onBlur={(e) => {
              setTimeout(() => {
                setDisplay(false);
              }, 500);
            }}
          />
        </span>
      </div>
      {display && (
        <div className={styles.searchOptions}>
          {keywords.map(([prop, val]) => {
            return (
              <div
                key={prop}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "10px 0px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSearchTerms([prop]);
                  setDisplay(false);
                }}
              >
                {val}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
