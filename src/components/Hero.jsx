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
              <p className="leading-relaxed text-base mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam repellat suscipit repudiandae nesciunt facere libero aspernatur et? Facilis recusandae distinctio dolor ad, dolores perferendis, sapiente eum maiores suscipit nihil deleniti?</p>
              <a href="/Wilborn-Andrew-Resume.pdf" target="_blank" rel="noreferrer" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center text-base font-semibold shadow-md rounded-lg">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}