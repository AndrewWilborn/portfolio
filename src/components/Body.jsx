import Card from "./Card";
import projects from "../projects.json"

export default function Body() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            projects.map(project =>
              <Card project={project} key={project.id} />
            )
          }
        </div>
      </div>
    </section>
  )
}