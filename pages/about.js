import Skills from "../components/about/Skills.js";
import Layout from "../components/Layout.js";
import Tools from "../components/about/Tools.js";

export default function About() {
  return (
    <Layout metaTitle="About Me - Neeraj panchal">
      <>
        <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3 xl:w-[54rem]">
          <p className="text-center text-4xl font-semibold capitalize">
            <span className="font-poppins font-medium text-lg uppercase text-green dark:text-mustard">
              about me
            </span>
            <br />
            here&#39;s my story
          </p>
          <div className="mt-6 leading-7">
            <p className="mb-6">
              Hi, I&#39;m Neeraj panchal. I&#39;m a front-end web developer from
              India. I enjoy seeking out creative solutions to complex problems.
              It was back in late 2022 when I got interested in Web Development
              and decided to learn HTML & CSS. Fast forward to today, I learned
              various web technologies and their best practices and built
              several fun and exciting projects.
            </p>
            <p className="mb-6">
              I love programming because it is so practical, and I can solve
              real-world challenges with it. For me, programming is a tool to
              express myself in a creative way. Plus, there is so much to
              explore that always keeps me excited!
            </p>
            
            <p className="mb-6">
              Feel free to reach out and say hello at:{" "}
              <a
                href="mailto:neerajpanchal004@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-green underline font-medium dark:text-mustard"
              >
                neerajpanchal004@gmail.com
              </a>
            </p>
          </div>
          <Skills />
          <Tools />

        </section>
      </>
    </Layout>
  );
}
