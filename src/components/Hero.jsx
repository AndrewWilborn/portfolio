export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="Andrew Wilborn Head Shot" className="object-cover object-center h-full w-full" src="/AndrewWilbornHeadShot.jpg"/>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-3">Andrew Wilborn</h1>
              <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam repellat suscipit repudiandae nesciunt facere libero aspernatur et? Facilis recusandae distinctio dolor ad, dolores perferendis, sapiente eum maiores suscipit nihil deleniti?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}