const svg = "/img/svg";
const mySkills = [
  {
    title: "Environment",
    skills: [
      { svg: `${svg}/win64.svg`, title: "Windows", note: "" },
      { svg: `${svg}/vscode.svg`, title: "VS Code", note: "" },
      { svg: `${svg}/github.svg`, title: "Github", note: "" },
      { svg: `${svg}/npm.svg`, title: "NPM", note: "" },
    ],
  },
  {
    title: "Front-end",
    skills: [
      { svg: `${svg}/html5.svg`, title: "HTML5", note: null },
      { svg: `${svg}/css3.svg`, title: "CSS3", note: null },
      { svg: `${svg}/sass.svg`, title: "SCSS", note: null },
      { svg: `${svg}/js.svg`, title: "Javascript", note: null },
      { svg: `${svg}/react.svg`, title: "React", note: null },
      { svg: `${svg}/redux.svg`, title: "Redux", note: "basics" },
      { svg: `${svg}/next.svg`, title: "Next", note: "learning" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { svg: `${svg}/nodejs.svg`, title: "Node", note: "basics" },
      { svg: `${svg}/expressjs.svg`, title: "Express", note: "basics" },
      { svg: `${svg}/mongoose.svg`, title: "Mongoose", note: "basics" },
      { svg: `${svg}/mongodb.svg`, title: "MongoDB", note: "basics" },
      { svg: `${svg}/next.svg`, title: "Next", note: "learning" },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { svg: `${svg}/ps.svg`, title: "Photoshop", note: null },
      { svg: `${svg}/ai.svg`, title: "Illustrator", note: null },
      { svg: `${svg}/xd.svg`, title: "Experience Design", note: null },
    ],
  },
];

export default mySkills;
