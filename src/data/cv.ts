export const CVData = {
  user: {
    name: 'Roman',
    lastName: 'Horobets',
    position: 'Software Engineer',
    connect: [
      {
        email: 'mentikorasan@gmail.com'
      },
      {
        linkedin: 'https://www.linkedin.com/in/rhoro/',
      },
      {
        github: 'https://github.com/mentikora'
      },
    ],
  },
  summaryOfExperience: [
    'Software Engineer specialized in React and modern web development practices.',
    'Skilled in building scalable, high-performance applications with a focus on user experience and maintainability.',
    'Expertise in core front-end technologies: HTML5, CSS3, JavaScript, TypeScript, and CSS frameworks like Bootstrap and Material UI.',
    'Proficient with CSS preprocessors (SASS, SCSS), media queries, and responsive layouts for optimal performance across all devices.',
    'Unit testing experience using Jest to ensure code reliability and high test coverage.',
    'Extensive experience with version control systems (Git), following best practices such as GitFlow.',
    'Advanced knowledge of state management tools like React Query, Zustand, Jotai',
    'Deep understanding of modern build tools such as Vite, and NPM for efficient development and deployment pipelines.',
    'Design tools proficiency: Photoshop and Figma, enabling collaboration with design teams and implementing pixel-perfect interfaces.',
  ],
  technicalSkills: {
    frontend: [
      'JavaScript',
      'TypeScript',
      'Effect.ts',
      'React',
      'HTML',
      'Redux',
      'React Query',
      'Jinja2',
      'Handlebars',
    ],
    backend: ['Next.js', 'Prisma'], 
    styling: [
      'CSS',
      'SAS / LESS',
      'BEM / ATOMIC / CSS modules',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'Bulma',
      'Shadcn',
    ],
    testing: ['Jest'],
    tools: ['Webpack', 'Vite'],
    'design tools': ['Photoshop', 'Figma'],
    other: ['GIT', 'GIT Flow'],
    'Familiar / Actively learning': ['Python3', 'MySQL', 'Docker'],
  },
  workExperience: [
    {
      company: 'Onix-Systems',
      summary: '',
      position: 'Software Engineer',
      date: {
        from: 'September 2025',
        to: 'current',
      },
      projects: [
        {
          name: 'DLX',
          summary:
            'Internal dashboard for managing plant-specific upload cycles, secure document validationg and submission, recipient workflows, automated reminders',
          responsibilities: [
            'AI first approach - has explicit feature specs and implementation plans under specs',
            'Uses Prisma migrations and DAL/Effect.ts-based structure',
            'Worked with structured feature specs and implementation plans to deliver requirements in a clear, traceable way',
            'Built integrations with Azure services for file storage, scheduled background processing, and monitoring automation',
            'Designed database models and backend logic for upload cycles, audit logs, reminders, and status tracking',
            'Designed user experiences for upload cycles, document validation, submission statuses, recipient workflows, reminders, and audit history',
            'Configured and maintained GitHub Actions workflows for automated validation, testing, building, and deployment',
          ],
          technologies: [
            'React',
            'EffectTS',
            'NextJS',
            'Prisma',
            'MUI',
            'Azure'
          ],
        },
        {
          name: 'Glow',
          summary:
            'Refactor/redesign the React UI end-to-end in close collaboration with design partners, aligning on UX decisions, component behavior, and visual consistency across the product.',
          responsibilities: [
            'Built reusable component systems and multi-step policy / approval flows',
            'Worked deeply on information-dense dashboards and operational UX',
          ],
          technologies: [
            'React',
            'NextJS',
          ],
        },
        {
          name: 'Vive Health',
          summary:
            'The platform is built to digitize, streamline, and scale the operations of healthcare providers and DME suppliers.',
          responsibilities: [
            'Built a multi-tenant healthcare operations platform end to end',
            'Worked across product domains: inventory, reporting, billing, and access control',
            'Integrated Prisma, Supabase, Stripe, SendGrid, PDF generation, and AI tooling in a single production-scale codebase',
          ],
          technologies: [
            'React',
            'NextJS',
            'Prisma',
          ],
        },
      ],
    },
    {
      company: 'Avenga',
      summary: '',
      position: 'Software Engineer',
      date: {
        from: 'October 2021',
        to: 'May 2025',
      },
      projects: [
        {
          name: 'CDR',
          summary:
            'Advanced medical platform built for internal use, designed to securelly collect, store, and manage health data within project studies. The system streamlines data handling, and enables seamless collaboration between research teams.',
          responsibilities: [
            'Project architecture: POC -> MVP -> Production',
            'Creation of a working version of the product based on business scenarios by TDD (test driven development)',
            'Took ownership of early-stage UI/UX planning by designing low-fidelity wireframes in Figma, helping define structure and interaction patterns',
            'Contribute to team learning by sharing development tips, mentoring, architectural insights',
            'Conducted thorough code reviews to ensure maintainability, scalability, and adherence to coding standards',
          ],
          technologies: [
            'React',
            'React Query',
            'MUI',
            'Jest (react-testing-library + cucumber)',
            'Python',
          ],
        },
      ],
    },
    {
      company: 'Rolique',
      summary:
        'Development of sites of varying complexity with different technologies (participation in more than 20 projects)',
      position: 'Software Engineer',
      date: {
        from: 'July 2017',
        to: 'October 2021',
      },
      projects: [
        {
          name: 'Werksters',
          summary: 'Marketplace for the cleaning market',
          responsibilities: [
            'Led the migration of a legacy project to modern technologies, and enhancing the admin dashboard',
            'PR reviews, mentoring new team members',
            'Discussing with the back-end team about REST API',
          ],
          technologies: ['React', 'Redux', 'MUI', 'PHP'],
        },
        {
          name: 'Fazemodels',
          summary: 'Service that allows agencies to market their models',
          responsibilities: [
            'Project architecture: MVP',
            'Much attention was paid to the interface and ease of use',
            "Communication directly with the client, BA, and design team about app's UX and features",
          ],
          technologies: ['React', 'Redux', 'MUI', 'NodeJS'],
        },
        {
          name: 'Schleuniger',
          summary:
            'Leading solutions supplier to the wire processing and testing industry',
          responsibilities: [
            'Creating and implementing custom theme',
            'Pixel perfect',
          ],
          technologies: ['HTML', 'SCSS', 'jQuery', 'Drupal8'],
        },
        {
          name: 'Internal app',
          summary: "App for company's recruiters",
          responsibilities: [
            'Project architecture: MVP',
            'Building UI and communication with Salesforce API and Twilio',
          ],
          technologies: ['React Native', 'Salesforce', 'Twilio API'],
        },
      ],
    },
    {
      company: 'TicketsUA',
      summary: '',
      position: 'Software Engineer',
      date: {
        from: 'June 2016',
        to: 'July 2017',
      },
      projects: [
        {
          name: 'Internal app',
          summary: 'Developed a TV monitoring project featuring an information dashboard for a sales ticket call center, providing real-time tracking of performance, KPIs, and operational efficiency.',
          responsibilities: [
            'Creating UI of a monitoring system for TVs, features discussion',
          ],
          technologies: ['React', 'SCSS', 'Ruby on Rails'],
        },
      ],
    },
    {
      company: 'Ki-technology',
      summary: '',
      position: 'Software Engineer',
      date: {
        from: 'December 2013',
        to: 'June 2016',
      },
      projects: [
        {
          name: 'Adster',
          summary: 'Developed an ad platform with a dashboard where users can create banners for ticket sales (train, bus, flight, etc), generate HTML code for integration, and track performance and revenue.',
          responsibilities: [
            'Built custom UI and logic for front-end',
            'Communication, discussion of new product features, and development in general',
          ],
          technologies: ['React', 'SCSS', 'Ruby on Rails'],
        },
      ],
    },
    {
      company: 'Welldo Agency',
      summary:
        'Participated in more than 30 projects most of which were from Ukrainian customers such as Subaru Lviv, Ford Ukraine, Era Parts',
      position: 'Software Engineer',
      date: {
        from: 'April 2011',
        to: 'December 2013',
      },
      projects: [],
    },
    {
      company: 'Personal Projects',
      position: 'Full-Stack Software Engineer',
      date: {
        from: '',
        to: 'Present',
      },
      projects: [
        {
          name: 'Garage Management App',
          summary:
            'A non-commercial SaaS-style platform for a single automotive repair shop, created to digitize customers, vehicles, service records, repair orders, employees, and maintenance workflows while practicing business analysis, product design, and full-stack engineering through a realistic garage-management domain.',
          responsibilities: [
            'Owned the full product lifecycle across business analysis, domain research, product planning, UX, frontend, backend, database design, DevOps, and testing',
          ],
          technologies: [
            'React',
            'TypeScript',
            'NextJS',
            'MUI',
            'Firebase',
            'Docker',
            'GitHub Actions',
          ],
        },
        {
          name: 'Huntdon',
          summary:
            'Small World of Warcraft: The Burning Crusade hunter addon built in Lua as an AI-assisted learning project.',
          responsibilities: [
            'Used AI-assisted development to define hunter-specific addon behavior, explore Lua and World of Warcraft UI APIs, and test iterations directly in the game client',
          ],
          technologies: ['Lua', 'World of Warcraft Addon API'],
        },
        {
          name: 'n8n workflow',
          summary:
            'Small n8n automation that collects cigar review input from a form, sends it to an AI model for structured review text, processes the output with JavaScript, and stores the result in a spreadsheet.',
          responsibilities: [
            'Built an AI-assisted n8n workflow connecting form submission, model prompting, JavaScript transformation, and spreadsheet persistence',
          ],
          technologies: ['n8n', 'JavaScript', 'AI Model', 'Google Sheets'],
        },
      ],
    },
  ],
  education: [
    'English - Intermediate High',
    'Course - MongoDB Basics, 2019',
    'Course - Cursor Education, 2016',
    'Technical College of the National University "Lviv Polytechnic"',
  ],
  additionalInfo: [
    'DEV Challenge, JavaScript (Hard), Finalist, 2023 - Participated in the final part',
    'DEV Challenge, JavaScript (Hard), Pre-finalist, 2022 - Participated in the pre-final part',
    'DEV Challenge, HTML/CSS, Finalist, 2018 - Participated in the final part',
  ],
}
