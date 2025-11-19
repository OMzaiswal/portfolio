// import Image from "next/image";

export default function Home() {
  return (
   <main className="flex flex-col items-center text-gray-800 py-12 px-6 gap-y-8">
    <section className="text-2xl flex flex-col lg:flex-row space-y-2 space-x-10 items-center max-w-4xl mx-auto">
      <img src="me.jpg" alt="" className="rounded-full h-48 w-48 lg:h-72 lg:w-72"/>
      <div className="space-y-1  max-w-xl">
        <p>Hi there 👋</p>
        <h1 className="text-4xl"> I'm <span className="text-green-600">Om Jaiswal</span></h1>
        <p className="text-gray-600 text-md">Full-stack developer specializing in modern frontend development.
          Creating fast, intuitive user interfaces supported by stable backend logic
          and real-world features like payments and dashboards.
      </p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto space-y-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 lg:text-start">Tech Stack</h2>
      <div className="flex flex-wrap gap-4 justify-center text-gray-600">
        {['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'TailwindCSS', 
          'JavaScript', 'TypeScript', 'PostgreSQL', 'PrismaORM', 'MongoDB', 'AWS', 'Docker', 
          'K8s'].map((item) => (
            <span className="border px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:text-blue-600">{item}</span>
          ))}
      </div>
    </section>
    
   </main>
  );
}
