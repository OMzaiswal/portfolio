// import Image from "next/image";

export default function Home() {
  return (
   <main className="flex flex-col items-center text-gray-800 py-12 px-6 gap-y-20 h-auto mb-50">
    <section className="text-2xl flex flex-col lg:flex-row space-y-2 space-x-10 items-center max-w-4xl mx-auto">
      <img src="me.jpg" alt="" className="rounded-full h-48 w-48 lg:h-72 lg:w-72"/>
      <div className="space-y-1  max-w-xl text-white">
        <p>Hi there 👋</p>
        <h1 className="text-4xl "> I'm <span className="text-green-600">Om Jaiswal</span></h1>
        <p className="text-gray-400 text-md">Full-stack developer specializing in modern frontend development.
          Creating fast, intuitive user interfaces supported by stable backend logic
          and real-world features like payments and dashboards. <br />
          <i className="text-sm">(hello@om108.work  &  omjaiswal2552@gmail.com)</i>
        </p>
        <div className="flex gap-5">
          <a href="gmailto:omjaiswal2552@gmail.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"></path><path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/om-jaiswal-40b19419a/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </a>
          <a href="https://github.com/OMzaiswal" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>    
    <section className="max-w-4xl mx-auto space-y-4 text-center">
      <h2 className="text-3xl font-semibold text-white lg:text-start">Tech Stack & Tools</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">

        {[
          { name: "React", icon: "devicon-react-original-wordmark colored", link: "https://react.dev" },
          { name: "Next.js", icon: "devicon-nextjs-original-wordmark", link: "https://nextjs.org" },
          { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored", link: "https://nodejs.org" },
          { name: "Express", icon: "devicon-express-original", link: "https://expressjs.com" },
          { name: "HTML", icon: "devicon-html5-plain-wordmark colored", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
          { name: 'CSS', icon: "devicon-css3-plain-wordmark colored", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
          { name: "Tailwind", icon: "devicon-tailwindcss-original colored", link: "https://tailwindcss.com" },
          { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
          { name: "TypeScript", icon: "devicon-typescript-plain colored", link: "https://www.typescriptlang.org" },
          { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark colored", link: "https://www.mongodb.com/" },
          { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark colored", link: "https://www.postgresql.org" },
          { name: "Prisma", icon: "devicon-prisma-original", link: "https://www.prisma.io" },
          { name: "Firebase", icon: "devicon-firebase-plain colored", link: "https://firebase.google.com" },
          { name: "Docker", icon: "devicon-docker-plain-wordmark colored", link: "https://www.docker.com" },
          { name: "Guthub", icon: "devicon-github-original-wordmark", link: "https://github.com" },
          { name: "Postman", icon: "devicon-postman-plain colored", link: "https://postman.com" },
        ].map((tech) => (
          <div className="flex flex-col items-center text-white hover:scale-105" key={tech.name}>
            <a href={tech.link} target="_blank">
              <i className={`${tech.icon} text-8xl hover:scale-110 transition-transform`}></i>
            </a>
          </div>
        ))}

      </div>
    </section>

    <section className="max-w-4xl m-auto space-y-4 ">
      <h2 className="text-3xl font-semibold text-white lg:text-start">Projects</h2>
      <div className="space-y-12">
        <li>
          <a href="https://hungerbox.online" target="_blank" className="text-blue-400 text-lg">🍔 HungerBox - Food Delivery App</a>
          <a href="https://github.com/OMzaiswal/Food-delivery-app" className="text-blue-500 ml-8">GitHub</a>
          <div className="flex flex-col gap-4 mt-1">
            <img src="hungerbox.png" alt="HungerBox" className=""/>
            <div className="text-md">
              <p className="text-gray-300"> - Full-stack food delivery platform with authentication, admin panel,
              Firebase image storage, and mock Stripe payments.</p>
            </div>
          </div>
        </li>
        <li className="space-y-4">
          <a href="" className="text-blue-400 text-lg mb-1">GRLab - Freelance Client project</a>
          <img src="grl.png" alt="Grl" />
          <p className="text-gray-300">Tech & Tools - React, TypeScript, Node.js, Express.js, postgreSQL, prisma, firebase, vercel, railway</p>
        </li>
        <li>
          <a href="https://ai-chatbot.om108.work" target="_blank" className="text-blue-400 text-lg">AI Live Chat Support Agent</a>
          <a href="https://github.com/OMzaiswal/AI-chat-bot" className="text-blue-500 ml-8">GitHub</a>
          <div className="flex flex-col gap-4 mt-1">
            <img src="ai-chatbot-ss.png" alt="AI chatbot" className=""/>
            <div className="text-md">
              <p className="text-gray-300"> - An AI-powered customer support chat application.
                    This project simulates a real-world live chat widget where an AI agent answers
                    customer questions using a real LLM API, persists conversations, and gracefully handles failures.</p>
            </div>
          </div>
        </li>
        <li>
          <a href="https://ai.om108.work" target="_blank" className="text-blue-400 text-lg">AI Image Editor</a>
          <a href="https://github.com/OMzaiswal/ai-image-editor" className="text-blue-500 ml-8">GitHub</a>
          <div className="flex flex-col gap-4 mt-1">
            <img src="ai-image-editor.png" alt="AI chatbot" className=""/>
            <div className="text-md">
              <p className="text-gray-300"> - A full-stack AI-powered image editing application that 
                allows users to modify images using natural language prompts.</p>
            </div>
          </div>
        </li>
      </div>
    </section>
   </main>
  );
}
