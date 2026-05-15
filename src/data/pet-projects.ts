export interface PetProject {
  title: string;
  image?: string;
  description: string;
}

export const petProjects: PetProject[] = [
  {
    title: "Tools",
    image: "/projects/goggles.jpg",
    description:
      'My minimal version of the Robot Operating System, <a href="https://github.com/antonioterpin/tinyros" target="_blank" rel="noopener">TinyROS</a>, and a logging tool I use in every project lately, <a href="https://github.com/antonioterpin/goggles" target="_blank" rel="noopener">Goggles</a>.',
  },
  {
    title: "LLM misc",
    image: "/projects/cardsgpt.gif",
    description:
      'Some random LLM projects: a <a href="https://www.cardsgpt.ai" target="_blank" rel="noopener">Chrome extension</a> that turns your conversations with ChatGPT into flashcards, and a <a href="https://eli-5-eight.vercel.app/?q=Prompt%20Engineering" target="_blank" rel="noopener">let-me-google-that-for-you</a> powered by LLMs.',
  },
  {
    title: "Computer Vision misc",
    image: "/projects/evo/evo.png",
    description:
      'In 2021 I worked at the <a href="https://rpg.ifi.uzh.ch" target="_blank" rel="noopener">Robotics and Perception Group</a> with <a href="https://danielgehrig18.github.io" target="_blank" rel="noopener">Daniel Gehrig</a> and <a href="https://rpg.ifi.uzh.ch/people_scaramuzza.html" target="_blank" rel="noopener">Davide Scaramuzza</a> on the open-sourcing of an <a href="https://github.com/uzh-rpg/rpg_dvs_evo_open" target="_blank" rel="noopener">event-based visual odometry pipeline</a>. Before that, I built a <a href="https://github.com/antonioterpin/visual-odometry-mono" target="_blank" rel="noopener">visual odometry pipeline</a> from scratch in Matlab with Antonio Arbues (2020), and a <a href="https://github.com/antonioterpin/wavelet_ml" target="_blank" rel="noopener">steel defect detector</a> using wavelets and Bayesian optimization with <a href="https://github.com/claudioverardo" target="_blank" rel="noopener">Claudio Verardo</a> (2019, mostly to play with wavelets).',
  },
  {
    title: "Virtual Reality misc",
    image: "/projects/vr/logo_steam.jpeg",
    description:
      'In 2018 I worked on VR projects during the <a href="https://www.uqido.com/en/" target="_blank" rel="noopener">Uqido</a> academy of immersive technologies. We built a <a href="https://github.com/uqidoacademy/PhysiotherapyVR" target="_blank" rel="noopener">VR physiotherapist</a> and an <a href="https://github.com/uqidoacademy/Ikea_Alice" target="_blank" rel="noopener">Alice in wonderland scene</a>. The thing that got me most excited was CUDA.',
  },
  {
    title: "Trivia Patente",
    image: "/projects/trivia-patente/icon.png",
    description:
      'In high school (2016–2018), with Luigi Donadel and Gabriel Ciulei, we built an app to prepare for the Italian driving licence theory exam by playing with friends. <a href="https://github.com/triviapatente/ios" target="_blank" rel="noopener">iOS app in Swift</a>, <a href="https://github.com/triviapatente/android" target="_blank" rel="noopener">Android app in Java</a>, <a href="https://github.com/triviapatente/backend" target="_blank" rel="noopener">backend in Python</a>, and many cool <a href="https://github.com/triviapatente/daemons" target="_blank" rel="noopener">JavaScript daemons</a> for when we had no users. We got to 100 eventually — lesson: iterate with your customers.',
  },
  {
    title: "Java misc",
    image: "/projects/java-stuff/icon.png",
    description:
      'In high school (2015–2016) I built many small Java projects to learn: a CG simulation of the iconic <a href="https://github.com/antonioterpin/turtle-vs-hare" target="_blank" rel="noopener">race between the turtle and the hare</a>, a <a href="https://github.com/antonioterpin/java-maze" target="_blank" rel="noopener">2-player maze game</a>, an <a href="https://github.com/antonioterpin/enigma" target="_blank" rel="noopener">Enigma machine</a> (after I saw <a href="https://en.wikipedia.org/wiki/The_Imitation_Game" target="_blank" rel="noopener">The Imitation Game</a>), a <a href="https://github.com/antonioterpin/java-application-server" target="_blank" rel="noopener">chat server</a>, a barebone <a href="https://github.com/antonioterpin/java-search-engine" target="_blank" rel="noopener">search engine</a>… most of the rest I sadly lost.',
  },
];
