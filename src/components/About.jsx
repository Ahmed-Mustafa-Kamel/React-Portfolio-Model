import ABOUT_IMG from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
    import { motion } from "framer-motion"

const About = () => {
  return (
      <div className="border-b border-neutral-900 p-4">
          {/* About header */}
          <h2 className=" my-20 text-center text-4xl">About <span className=" text-neutral-500"> Me</span></h2>
          {/*  */}

          <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
                {/* About Img */}
                <div className=" flex items-center justify-center">
                      <img className=" rounded-2xl" src={ABOUT_IMG} alt="about img" />
                </div>
              </motion.div>
                  {/*  */}

                  {/* about text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                          <p className=" my-2 max-w-xl py-6">{ABOUT_TEXT}</p> 
                    </div>
                  </motion.div>
                  {/*  */}
          </div>
          
    </div>
  )
}

export default About