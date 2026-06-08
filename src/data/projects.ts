// SAP Bosch Prototypes
import SAP_Fiori from "../../content/SAP_Bosch_Prototypes/SAP_Fiori.jpg";
import SAP_Object from "../../content/SAP_Bosch_Prototypes/SAP_Object.jpg";
import SAP_Overview from "../../content/SAP_Bosch_Prototypes/SAP_Overview.jpg";

// BIRD App
import BIRD_Moodboard from "../../content/BIRD_App/BIRD_Moodboard.jpg";
import BIRD_Screen from "../../content/BIRD_App/BIRD_Screen.jpg";
import BIRD_Sketch from "../../content/BIRD_App/BIRD_Sketch.jpg";
import BIRD_Video from "../../content/BIRD_App/BIRD_Video.mp4";

// Blitz & Donner Science Game
import Game_Arduino from "../../content/Blitz_&_Donner_Science_Game/Game_Arduino.jpg";
import Game_Figma1 from "../../content/Blitz_&_Donner_Science_Game/Game_Figma1.jpg";
import Game_Figma2 from "../../content/Blitz_&_Donner_Science_Game/Game_Figma2.jpg";
import Game_Illustrator from "../../content/Blitz_&_Donner_Science_Game/Game_Illustrator.jpg";
import Game_Storyboard from "../../content/Blitz_&_Donner_Science_Game/Game_Storyboard.jpg";
import Game_Thumbnail from "../../content/Blitz_&_Donner_Science_Game/Game_Thumbnail.jpg";
import Game_Video from "../../content/Blitz_&_Donner_Science_Game/Game_Video.mov";

// Breuninger Beyond App
import Beyond_Screen_Vouchers from "../../content/Breuninger_Beyond_App/Beyond_Screen_Vouchers.jpg";
import Beyond_Thumbnail from "../../content/Breuninger_Beyond_App/Beyond_Thumbnail.jpg";

// Festo User Testing & Research
import Festo_Diagrams from "../../content/Festo_User_Testing_&_Research/Festo_Diagrams.jpg";
import Festo_Login from "../../content/Festo_User_Testing_&_Research/Festo_Login.jpg";
import Festo_Table from "../../content/Festo_User_Testing_&_Research/Festo_Table.jpg";

export type ProjectSize = "lg" | "md" | "sm" | "wide" | "tall";

export type CaseStudySection = {
  heading: string;
  body: string;
  image?: {
    src: string;
    caption: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  role: string;
  tools: string[];
  cover: string; // gradient class
  image: string; // cover image path
  accent: "pink" | "green" | "neutral";
  size: ProjectSize;
  layoutVariant: 1 | 2 | 3 | 4 | 5;
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "sap-design-bosch",
    title: "SAP Design for Bosch",
    category: "Prototyping",
    description: "Designing new SAP Fiori applications for enterprise workflows at Bosch Digital.",
    year: "2026",
    role: "UX Design",
    tools: ["Figma", "Miro"],
    cover: "from-green/55 via-green/20 to-background",
    image: SAP_Overview,
    accent: "green",
    size: "wide",
    layoutVariant: 1,
    caseStudy: [
      {
        heading: "Introduction",
        body: "During my six-month internship as a UX Design Intern at Bosch Digital in 2026, I worked on several SAP-related enterprise UX projects with a strong focus on Figma prototyping, Miro workflows and AI-supported design processes.\n\nDue to confidentiality, this case study does not show internal project content, real customer data or detailed workflows. Instead, the visuals are represented through neutral example screens."
      },
      {
        heading: "Context",
        body: "The projects were developed in the context of Bosch Digital, SAP and customer-related enterprise workflows. I worked on around ten SAP prototypes and several Miro boards, mainly using the SAP Fiori design system.\n\nSome projects focused on factory management, others on customer complaint processes. The goal was to translate complex workflows and customer requirements into clear, structured and presentable UX concepts.",
        image: { src: SAP_Fiori, caption: "Figma Library · SAP Fiori" }
      },
      {
        heading: "Challenge",
        body: "The main challenge was understanding complex enterprise workflows and turning them into usable interface concepts. I had to balance customer wishes, technical limitations, SAP-specific design patterns and the needs of non-designers involved in the process.\n\nAnother important challenge was making abstract requirements visible early, so that customers could discuss, understand and refine ideas before development."
      },
      {
        heading: "My Role",
        body: "I worked in a two-person team with my supervisor. My main responsibility was creating the Figma prototypes and Miro boards.\n\nMy tasks included:\n\n* creating SAP Fiori-based Figma prototypes\n* translating customer feedback into UX concepts\n* structuring requirements and user stories in Miro\n* preparing prototype presentations\n* working with AI-supported tools such as Stitch\n* exploring Figma MCP Server with Visual Studio Code\n* supporting AI-assisted design and development workflows"
      },
      {
        heading: "Process",
        body: "Together with my supervisor, I helped develop an AI-supported design sprint in Miro. The sprint was designed to help customers collect requirements, user stories and design criteria within a short workshop format.\n\nThese inputs could then be transformed into first visual ideas using AI tools, wireframes and exported Figma components. This made it easier to involve customers early and move faster from requirements to prototype concepts.",
        image: { src: SAP_Overview, caption: "Figma Template · Standard Overview Page" }
      },
      {
        heading: "Outcome",
        body: "I created around ten SAP-related Figma prototypes and several Miro boards. The concepts were presented to customers and are being further developed internally.\n\nThe design sprint formats and workflows I contributed to are still being used in different Bosch working environments, including SAP Fiori and Microsoft Fluent 2 contexts.",
        image: { src: SAP_Object, caption: "Figma Template · Standard Object Page" }
      },
      {
        heading: "Learnings",
        body: "This project taught me how UX design works in complex enterprise environments. I learned how to understand workflows, communicate with non-designers, present prototypes and translate customer needs into structured design concepts.\n\nI also gained practical experience with SAP Fiori, AI-supported prototyping and the connection between design and development. The project showed me that strong UX in enterprise software is not about visual effects, but about clarity, structure and collaboration."
      }
    ]
  },
  {
    slug: "bird-app",
    title: "BIRD App",
    category: "UX Prototype",
    description: "Educational search experience design for the platform 'Bildungsraum Digital'.",
    year: "2025",
    role: "UX & Visual Design",
    tools: ["Figma"],
    cover: "from-pink/70 via-pink-soft to-background",
    image: BIRD_Screen,
    accent: "pink",
    size: "tall",
    layoutVariant: 2,
    caseStudy: [
      {
        heading: "Introduction",
        body: "BIRD is a mobile app concept for the educational platform “Bildungsraum Digital”. The project was developed in the fourth semester as part of the Application Design course.\n\nThe task was to design a learning and orientation app for users who are looking for universities, degree programs and suitable educational paths. Since there was no existing design system or visual direction, the project required both conceptual development and a new visual foundation."
      },
      {
        heading: "Context",
        body: "The project started as a team of two. A persona and user story map were provided as a starting point. Together, we developed the initial moodboard, defined the app’s character and established shared design goals for the visual direction.\n\nAfter this initial concept phase, I independently developed the search area of the app. The sketches, user flow, Figma prototype, custom components and interaction ideas shown in this case study were created by me.",
        image: { src: BIRD_Screen, caption: "BIRD App Prototype · Homescreen" }
      },
      {
        heading: "Challenge",
        body: "The main challenge was making a complex decision-making process feel clear and manageable. Choosing a university or degree program can quickly become overwhelming, especially when users have to compare many different options, locations and requirements.\n\nThe interface needed to guide users step by step without limiting their freedom. It had to feel structured, supportive and trustworthy while still allowing users to explore independently."
      },
      {
        heading: "My Role",
        body: "My main responsibility was the conceptual and visual development of the search experience. While the moodboard and initial design direction were developed together, the complete search prototype was my own work.\n\nMy tasks included:\n\n* developing the search concept and interaction logic\n* creating low-fidelity sketches for the search flow\n* designing the search, filter and map experience\n* creating the clickable Figma prototype\n* building custom UI components\n* designing the screen layouts and visual system\n* translating the concept into a consistent mobile interface"
      },
      {
        heading: "Process",
        body: "The process started with the provided persona and user story map. Together with my teammate, I defined design goals such as clarity, guidance, autonomy and confidence. These goals became the conceptual foundation for the app’s tone and visual direction.\n\nI then focused on the search user flow. Before moving into high-fidelity design, I created low-fidelity sketches to explore how users could move from initial orientation to filtered results, map views and detailed information.\n\nBased on these sketches, I developed the final Figma prototype. Since there was no existing design system, I created the necessary components, interface elements and screen layouts myself. The final prototype combines search, filters, map-based exploration and detail pages into one coherent mobile experience.",
        image: { src: BIRD_Moodboard, caption: "Process Excerpt · Design Goals" }
      },
      {
        heading: "Visual Ideation",
        body: "Before moving into the final interface, I used hand-drawn sketches to map out the core interactions. This helped me to visualize the flow and ensure a seamless experience.",
        image: { src: BIRD_Sketch, caption: "Process Excerpt · Interaction Sketches" }
      },
      {
        heading: "Outcome",
        body: "The final result is a clickable Figma prototype for the BIRD app’s search experience. It includes a complete user flow from initial search to filtered results, location-based map views and detailed educational information.\n\nThe prototype shows how users can explore universities, degree programs and educational paths in a structured but flexible way. It also demonstrates a visual direction and custom component system for a possible future BIRD mobile app.",
        image: { src: BIRD_Video, caption: "Prototype Presentation · Search Flow" }
      },
      {
        heading: "Learnings",
        body: "This project taught me how important structure is in application design. I learned how to turn an abstract user need into a concrete user flow and how early sketches can help test interaction ideas before investing time in high-fidelity screens.\n\nI also gained experience in building a mobile interface from scratch, creating custom components and designing an experience that supports users through complex decisions without overwhelming them."
      }
    ]
  },
  {
    slug: "blitz-donner",
    title: "Blitz & Donner",
    category: "Soft- and Hardware development",
    description: "An interactive learning installation about thunderstorms, combining visuals, sound and physical interaction.",
    year: "2026",
    role: "UX Design, Programming, Hardware",
    tools: ["Arduino", "Figma", "Illustrator"],
    cover: "from-pink/60 via-green/25 to-background",
    image: Game_Thumbnail,
    accent: "pink",
    size: "tall",
    layoutVariant: 3,
    caseStudy: [
      {
        heading: "Introduction",
        body: "“Blitz & Donner” is an interactive learning installation about thunderstorms. The project was developed in the Interactive Tools course and designed for an exhibition context.\n\nThe goal was to make a scientific topic understandable through interaction, sound, visuals and a physical interface. Instead of explaining thunderstorms only through text, the installation lets users experience the connection between lightning, thunder, distance and safety behavior."
      },
      {
        heading: "Context",
        body: "The project focuses on children aged 9 to 14. At this age, basic scientific concepts are already introduced in school, but abstract physical processes can still be difficult to understand.\n\nThe installation explains how thunderstorms form, why lightning and thunder are perceived at different times and how people can protect themselves during a storm. The final submission included a physical box with Arduino hardware, Processing code and a project video.",
        image: { src: Game_Thumbnail, caption: "Blitz & Donner Game · Start Screen" }
      },
      {
        heading: "Challenge",
        body: "The main challenge was connecting a scientific explanation with an engaging interactive experience. The topic had to be understandable, but not too text-heavy or technical.\n\nI also had to combine different layers: visual storytelling, sound design, physical input, Arduino communication and Processing animations. The interaction needed to feel intuitive, while the technical system had to stay stable."
      },
      {
        heading: "My Role",
        body: "I developed the project independently, from concept to final prototype.\n\nMy tasks included:\n\n* defining the topic and learning goal\n* creating the storyboard and interaction flow\n* designing the visual style in Figma and Illustrator\n* building the Processing application\n* connecting Arduino input and output\n* implementing button, potentiometer and LED interaction\n* designing and constructing the physical box\n* documenting the process and creating the final submission video"
      },
      {
        heading: "Process",
        body: "The project started with the question of which scientific topic could be explained in a visual and interactive way. I chose thunderstorms because lightning and thunder naturally combine light, sound and time-based interaction.\n\nI first created hand-drawn storyboards to define the flow of the experience. The application is structured like a small story: the sky gets darker, rain starts, warm air rises, electrical charges separate, lightning appears and thunder follows with a delay.",
        image: { src: Game_Storyboard, caption: "Blitz & Donner Game · Storyboard Excerpt" }
      },
      {
        heading: "Visual Design",
        body: "After the storyboard phase, I designed the screens and graphic elements in Figma and Illustrator. The visual style is friendly and playful, inspired by soft shapes and game-like learning environments. I wanted the installation to feel inviting rather than frightening.",
        image: { src: Game_Figma1, caption: "Blitz & Donner Game · Figma Screens 1" }
      },
      {
        heading: "Interface Elements",
        body: "The visual language was consistently applied to all screens and assets, ensuring a unified and engaging experience for children.",
        image: { src: Game_Figma2, caption: "Blitz & Donner Game · Figma Screens 2" }
      },
      {
        heading: "Illustrations",
        body: "I created custom digital illustrations to explain the physical processes in a simple and visually appealing way.",
        image: { src: Game_Illustrator, caption: "Blitz & Donner Game · Digital Illustrations" }
      },
      {
        heading: "Hardware Integration",
        body: "The technical implementation was built with Processing and Arduino. The button is used to move through the learning phases, the potentiometer allows users to enter values or choose options, and the LED gives physical feedback when lightning appears.",
        image: { src: Game_Arduino, caption: "Blitz & Donner Game · Arduino Circuit Diagram" }
      },
      {
        heading: "Outcome",
        body: "The final result was an interactive Arduino-Processing installation presented as a physical box. It included a custom-built wooden housing, a designed cover, physical controls, LED feedback, sound effects, animated screens and a complete interactive learning flow.\n\nThe project combined digital storytelling with tangible interaction and showed how scientific content can be made more accessible through multisensory design.",
        image: { src: Game_Video, caption: "Final Game · interactive Arduino Controller" }
      },
      {
        heading: "Learnings",
        body: "This project taught me how complex interactive installations can become when design, code and hardware have to work together. I learned how important clear structure is, both in the visual flow and in the code.\n\nI gained experience with Processing, Arduino, serial communication, state-based screen logic, animation timing and physical prototyping. I also learned how to use AI as a support tool for code structure and debugging while still making my own design, concept and interaction decisions."
      }
    ]
  },
  {
    slug: "breuninger-beyond",
    title: "Breuninger Beyond App",
    category: "Review and Improvement",
    description: "UX redesign of the loyalty area for the Breuninger mobile app to improve usability and clarity.",
    year: "2026",
    role: "UX Design, User Research",
    tools: ["Figma"],
    cover: "from-foreground/85 via-foreground/45 to-background",
    image: Beyond_Thumbnail,
    accent: "neutral",
    size: "wide",
    layoutVariant: 4,
    caseStudy: [
      {
        heading: "Introduction",
        body: "Breuninger Beyond is a UX redesign project for the loyalty area of the Breuninger app. The project was developed in the Advanced Usability Engineering course in collaboration with Breuninger designers.\n\nThe goal was to analyze the existing “Mein Beyond” area, identify usability problems and improve the user experience through a redesigned interactive Figma prototype. Due to the internal project context, this case study focuses on my role, process and learnings rather than showing confidential details."
      },
      {
        heading: "Context",
        body: "The project was created in a team of four and focused on the Beyond member hub inside the Breuninger app. This area includes information such as points, member status, benefits, the Breuninger Card and vouchers.\n\nWe analyzed the existing app experience using Nielsen’s usability heuristics and looked at key user scenarios such as checking points, understanding the loyalty status and redeeming vouchers. The aim was to create a clearer structure, reduce cognitive load and make important information easier to access.",
        image: { src: Beyond_Thumbnail, caption: "Beyond by Breuninger · Banner Ad" }
      },
      {
        heading: "Challenge",
        body: "The main challenge was improving the experience without losing the premium and minimal character of the Breuninger brand. The existing visual design already felt high-quality, but the information architecture was partly unclear.\n\nEspecially the connection between the Beyond area, points, card functions and vouchers was not immediately understandable. The challenge was to simplify the structure, reduce unnecessary complexity and make central actions more efficient."
      },
      {
        heading: "My Role",
        body: "The project was a group effort, but my main focus was the conceptual and visual development of the voucher area. I also contributed central ideas for the overall structure and visual direction of the redesign.\n\nMy tasks included:\n\n* analyzing UX problems in the existing Beyond area\n* developing concepts for the voucher experience\n* creating sketches, paper prototypes and Figma drafts\n* working with the Breuninger Figma design library\n* designing the voucher overview and voucher detail sheets\n* contributing to the redesigned account and card experience\n* refining all screens at the end of the process\n* unifying interactions, pressed states, transitions and prototype connections"
      },
      {
        heading: "Process",
        body: "The process started with a heuristic analysis of the existing app screens. We identified problems such as unclear information hierarchy, inconsistent presentation of related elements and high cognitive load.\n\nBased on this analysis, we moved into an iterative concept phase. We used Crazy 8 sketches, paper prototypes, Figma drafts and feedback from Breuninger designers to explore different solutions. I focused especially on the voucher area and tested different structures before developing the final version.\n\nThe prototype was tested in three stages: with a paper prototype, an early Figma prototype and a near-final Figma prototype. The feedback helped us simplify the voucher logic, reduce information density and make the use cases more flexible.",
        image: { src: Beyond_Screen_Vouchers, caption: "Beyond App · Current Interface - Vouchers" }
      },
      {
        heading: "Outcome",
        body: "The final result was an interactive Figma prototype for a redesigned Beyond experience. The prototype included a clearer account structure, a more accessible voucher overview, improved voucher detail sheets and a more efficient card scanning flow.\n\nMy voucher concept improved the comparison and use of vouchers, especially in shopping and checkout situations. I also revised the overall prototype interactions to create a more consistent and polished experience."
      },
      {
        heading: "Learnings",
        body: "This project taught me how important information architecture and consistency are in UX design. I learned how to work with an existing brand and design system while still improving usability and structure.\n\nI also gained experience in heuristic analysis, iterative prototyping, usability testing and collaboration with external design professionals. The project helped me understand how small interaction details, clear hierarchies and consistent prototype behavior can strongly influence the perceived quality of an app."
      }
    ]
  },
  {
    slug: "festo-ux-review",
    title: "Festo UX Review",
    category: "User Research & Testing",
    description: "Evaluating the usability of Festo’s login system across connected platforms to improve Single Sign-On and trust.",
    year: "2026",
    role: "User Research, User Testing",
    tools: ["Figjam"],
    cover: "from-green/65 via-pink/25 to-background",
    image: Festo_Login,
    accent: "green",
    size: "md",
    layoutVariant: 5,
    caseStudy: [
      {
        heading: "Introduction",
        body: "This project focused on evaluating the usability of Festo’s login system across multiple connected platforms: Festo LX, Festo.com and FluidSIM. The project was developed in the Human-Computer Interaction context and followed a full usability research process.\n\nThe goal was to understand how first-time users experience registration, login, logout, Single Sign-On, password changes and saved password behavior. Instead of redesigning the interface directly, the focus was on identifying usability problems and deriving clear improvement recommendations."
      },
      {
        heading: "Context",
        body: "The study examined the login and onboarding experience across connected Festo platforms. Users had to understand registration, central account logic, Single Sign-On, logout states, password changes and stored passwords.\n\nThe research process included planning the test setup, creating realistic task scenarios, conducting remote usability tests, documenting observations, evaluating quantitative data and translating the findings into recommendations.",
        image: { src: Festo_Login, caption: "Festo.com · Login Screen" }
      },
      {
        heading: "Challenge",
        body: "The main challenge was that login systems often seem simple, but strongly influence trust, orientation and perceived product quality.\n\nIn this case, users had to move between several platforms while understanding whether they were interacting with one system, a central account or separate login states. The challenge was to identify where users felt uncertain, where the system logic was unclear and how the experience could become more transparent, consistent and cognitively easier to follow."
      },
      {
        heading: "My Role",
        body: "My main contribution was the quantitative evaluation of the usability study. I analyzed and interpreted the INTUI and AttrakDiff results, connected them with the qualitative observations and helped translate the data into findings about usability, intuitiveness and perceived product quality.\n\nI also contributed to structuring the research findings so they could be compared across participants and related back to the evaluation goals.\n\nMy tasks included:\n\n* analyzing INTUI questionnaire results\n* interpreting AttrakDiff data\n* connecting quantitative metrics with qualitative observations\n* supporting the evaluation of usability problems\n* helping structure findings across participants\n* contributing to the final recommendations"
      },
      {
        heading: "Process",
        body: "We began by mapping the login experience and preparing the usability test structure in FigJam. The board documented the project chronologically, starting with research planning, platform flows, interface screenshots, task preparation and moderation material.\n\nFor the usability test, we created a structured moderation guide including an introduction, consent information, a Thinking Aloud exercise, realistic task scenarios, a final interview and standardized questionnaires.\n\nThe tests were conducted remotely via Zoom with screen sharing. After the sessions, we reviewed the recordings, documented observations, identified Critical Incidents and grouped recurring usability issues into broader themes.",
        image: { src: Festo_Diagrams, caption: "Quantitative Findings · INTUI & AttrakDiff Diagrams" }
      },
      {
        heading: "Qualitative Data",
        body: "To support the qualitative findings, we also used quantitative methods such as Task Success Rate, INTUI and AttrakDiff, which provided a more reliable picture of the user experience.",
        image: { src: Festo_Table, caption: "Qualitative Findings Excerpt · Segmentation Table" }
      },
      {
        heading: "Outcome",
        body: "The system was perceived as visually clear, structured and professionally designed. However, several usability issues appeared repeatedly throughout the login and onboarding flow. The Single Sign-On logic was not always clearly communicated, password requirements were not visible early enough, and error messages were not always helpful.\n\nBased on these findings, we identified improvement areas such as clearer SSO communication, more transparent system status feedback, and a more consistent login and logout experience across platforms."
      },
      {
        heading: "Learnings",
        body: "This project showed me how strongly small moments of uncertainty can affect the perceived usability of a system, especially in sensitive processes like authentication. I learned that a system can work technically, but still feel unclear if users do not understand the logic behind the process. I also learned how quantitative UX methods can strengthen qualitative observations."
      }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
