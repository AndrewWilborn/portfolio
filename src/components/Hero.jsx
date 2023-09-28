export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="Andrew Wilborn Head Shot" className="object-cover object-center h-full w-full" src="/AndrewWilbornHeadShot.jpg" />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h1 className="text-gray-900 text-5xl title-font font-medium mb-2">Andrew Wilborn</h1>
              <h2 className="text-indigo-500 text-2xl title-font font-medium mb-3">Software Engineer</h2>
              <p className="leading-relaxed text-base mb-4">As a software engineer I'm always looking to learn new technologies.  At UCF I obtained a computer science degree and developed some excellent fundamentals as a coder, and at Boca Code I gained practical knowledge that has allowed me to apply those fundamentals with cutting edge technologies such as Next.js, Tailwind CSS and Express APIs.  I have since gone on to teach myself .NET and Angular.  I love working with APIs, SQL and JavaScript Frameworks and am always looking to expand my skillset.  After Boca Code merged with 4Geeks Academy, I was brought on as a full time teaching assistant.</p>
              <a href="/Wilborn-Andrew-Resume.pdf" target="_blank" rel="noreferrer" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                Resume
              </a>
              <a href="https://github.com/AndrewWilborn" target="_blank" rel="noreferrer" className="mx-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/andrew-wilborn/" target="_blank" rel="noreferrer" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}