const svg = "/img/svg";
const myProjects = [
  {
    id: "1",
    type: "React",
    date: "Jan 2021",
    title: "Movies",
    description:
      "Search and explore millions of movies, television shows and associated people. Check out upcoming releases, and rediscover old favourites. You can watch trailers, read biographies and learn who or what is popular - right now!  You'll even find a few gems along the way - that you never knew existed! Caution; can cause unexplained time loss.",
    preview_image: "/img/projects/tmdb-movies/preview.jpg",
    api: [
      {
        text: "TMDB",
        link: "https://www.themoviedb.org",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, text: "HTML5" },
      { image: `${svg}/css3.svg`, text: "CSS3" },
      { image: `${svg}/sass.svg`, text: "SCSS" },
      { image: `${svg}/js.svg`, text: "Javascript" },
      { image: `${svg}/react.svg`, text: "React" },
    ],
    third_party: [
      {
        text: "YouTube",
        link: "https://www.youtube.com/",
      },
      {
        text: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        text: "React Router",
        link: "https://reactrouter.com/web/guides/quick-start",
      },
      { text: "React Query", link: "https://react-query.tanstack.com/" },
    ],
    buttons: {
      primary: {
        link: "https://pux-movies.netlify.app",
        styles: "btn--primary btn--large",
        text: "Launch Website",
      },
      secondary: {
        link: "https://github.com/Dangereye/Movies",
        styles: "btn--secondary btn--large",
        text: "View Code",
      },
    },
  },
  {
    id: "2",
    type: "React",
    date: "Mar 2021",
    title: "The Weather",
    description:
      "Check the forecast where you are, or anywhere else in the world for that matter. Don't know where you are? Fear not - enabling geolocation has you covered. It's looking brighter already, eh? View conditions, precipitation and wind by the hour - in a format that suits you. I've even thrown in some pretty pictures - courtesy of Unsplash that match (somewhat reliably) current weather conditions. You're welcome!",
    preview_image: "/img/projects/the-weather/preview.jpg",
    api: [
      {
        text: "Weather",
        link: "https://www.weatherapi.com/",
      },
      {
        text: "Unsplash",
        link: "https://unsplash.com/developers",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, text: "HTML5" },
      { image: `${svg}/css3.svg`, text: "CSS3" },
      { image: `${svg}/sass.svg`, text: "SCSS" },
      { image: `${svg}/js.svg`, text: "Javascript" },
      { image: `${svg}/react.svg`, text: "React" },
    ],
    third_party: [
      {
        text: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        text: "React Router",
        link: "https://reactrouter.com/web/guides/quick-start",
      },
    ],
    buttons: {
      primary: {
        link: "https://pux-the-weather.netlify.app",
        styles: "btn--primary btn--large",
        text: "Launch Website",
      },
      secondary: {
        link: "https://github.com/Dangereye/the-weather",
        styles: "btn--secondary btn--large",
        text: "View Code",
      },
    },
  },
  {
    id: "3",
    type: "React",
    date: "Feb 2021",
    title: "Star Wars",
    description:
      "A long time ago in a galaxy far, far away... Stuff (no spoilers) went down! A team of dedicated enthusiasts over at swapi.dev have scoured the internet to collect and compile data from this remarkable tale. Rest easy - no Bothans died to bring us this information! I've presented the data with several royalty-free stock images (credited) and icons to make it a little more readable and digestible. Explore movies, people, species, vehicles, planets, starships and their relative associations.",
    preview_image: "/img/projects/star-wars/preview.jpg",
    api: [
      {
        text: "SWAPI",
        link: "https://swapi.dev/",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, text: "HTML5" },
      { image: `${svg}/css3.svg`, text: "CSS3" },
      { image: `${svg}/sass.svg`, text: "SCSS" },
      { image: `${svg}/js.svg`, text: "Javascript" },
      { image: `${svg}/react.svg`, text: "React" },
      { image: `${svg}/ps.svg`, text: "Photoshop" },
    ],
    third_party: [
      {
        text: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        text: "React Router",
        link: "https://reactrouter.com/web/guides/quick-start",
      },
    ],
    buttons: {
      primary: {
        link: "https://pux-star-wars.netlify.app",
        styles: "btn--primary btn--large",
        text: "Launch Website",
      },
      secondary: {
        link: "https://github.com/Dangereye/starwars",
        styles: "btn--secondary btn--large",
        text: "View Code",
      },
    },
  },
  {
    id: "4",
    type: "Next/React",
    date: "Sep 2021",
    title: "Portfolio",
    description:
      "Bringing it all together - acquired skills, knowledge and experience, including several (freelanced) Photoshop examples. Browse a selection of my recent projects, either live or time permitting - as code on Github.  If you like what you see and would like to collaborate on future projects? Please, drop me a message using the form provided in the contact section - I would love to hear from you!",
    preview_image: "/img/projects/portfolio/preview.jpg",
    tech: [
      { image: `${svg}/html5.svg`, text: "HTML5" },
      { image: `${svg}/css3.svg`, text: "CSS3" },
      { image: `${svg}/sass.svg`, text: "SCSS" },
      { image: `${svg}/js.svg`, text: "Javascript" },
      { image: `${svg}/react.svg`, text: "React" },
      { image: `${svg}/next.svg`, text: "Next" },
      { image: `${svg}/ps.svg`, text: "Photoshop" },
      { image: `${svg}/ai.svg`, text: "Illustrator" },
      { image: `${svg}/xd.svg`, text: "Experience Design" },
    ],
    third_party: [
      {
        text: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        text: "Sass",
        link: "https://www.npmjs.com/package/sass",
      },
      {
        text: "GSAP",
        link: "https://greensock.com/gsap",
      },
      {
        text: "Email JS",
        link: "https://www.emailjs.com/",
      },
    ],
    buttons: {
      primary: {
        type: "anchor",
        link: "https://github.com/Dangereye/portfolio-njs",
        styles: "btn--primary btn--large",
        text: "View Code",
      },
    },
  },
];

export default myProjects;
