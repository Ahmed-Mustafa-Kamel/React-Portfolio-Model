import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
        {/* section title */}
        <h2 className=" my-20 text-center text-4xl">Projects</h2>
          {/* /section title */}
          
          {/* Projects */}

          <div>
              {PROJECTS.map((project, index) => (
                <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
                  {/* images of projects */}
                    <div className=" w-full lg:w-1/4">
                    <img src={project.image}
                      width={200}
                      height={200}
                      alt={project.title}
                      className=" mb-8 rounded"
                      />
                    </div>
                  {/* //images of projects */}
                  
                  <div className="w-full max-w-xl lg:w-3/4">

                    <h6 className=" mb-2 font-semibold">{project.title}</h6>
                    <p className=" mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className=" mr-2 bg-neutral-900 rounded px-2 text-sm py-1 font-medium text-purple-900">{tech}</span>
                    ))}
                  </div>

                  </div>
              ))}
          </div>

          {/* /Projects */}
    </div>
  )
}

export default Projects