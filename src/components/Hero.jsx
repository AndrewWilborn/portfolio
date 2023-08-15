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
              <p className="leading-relaxed text-base mb-4">As a software engineer I'm always looking to learn new technologies.  At UCF I obtained a computer science degree and developed some excellent fundamentals as a coder, and at Boca Code I gained practical knowledge that has allowed me to apply those fundamentals with cutting edge technologies such as Next.js, Tailwind CSS and Express APIs.</p>
              <a href="/Wilborn-Andrew-Resume.pdf" target="_blank" rel="noreferrer" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                Resume
              </a>
              <a href="https://github.com/AndrewWilborn" target="_blank" rel="noreferrer" className="mx-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792">
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                  </path>
                </svg>
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