export default function Hero() {
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="Andrew Wilborn Head Shot" class="object-cover object-center h-full w-full" src="/AndrewWilbornHeadShot.jpg"/>
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h1 class="text-gray-900 text-2xl title-font font-medium mb-3">Andrew Wilborn</h1>
              <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam repellat suscipit repudiandae nesciunt facere libero aspernatur et? Facilis recusandae distinctio dolor ad, dolores perferendis, sapiente eum maiores suscipit nihil deleniti?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}