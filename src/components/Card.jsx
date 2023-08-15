export default function Card({ project }) {
  return (
    <div className="p-4 md:w-1/3">
      <a href={project.url} target="_blank" rel="noreferrer">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.image} alt="blog" />
          <div className="p-6">
            <h3 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">{project.category}</h3>
            <h2 className="title-font text-lg font-medium text-gray-900 mb-2">{project.title}</h2>
            <p className="leading-relaxed mb-2">{project.description}</p>
            <p className="leading-relaxed mb-2">{project.technologies}</p>
          </div>
        </div>
      </a>
    </div>
  )
}