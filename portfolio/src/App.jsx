import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Finance KPI Dashboard",
      tools: "Power BI • SQL • Excel",
      emoji: "📊",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      description:
        "Built an executive-level finance dashboard with revenue, profit margin, KPI trends, and regional business insights using Power BI and SQL.",
      impact:
        "Analyzed 500K+ financial records and automated reporting workflows for smarter decision-making.",
    },
    {
      title: "Customer Churn Analysis",
      tools: "SQL • Python • Pandas • Power BI",
      emoji: "📈",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      description:
        "Performed churn prediction and retention analysis using customer demographics, subscription patterns, and engagement behavior.",
      impact:
        "Identified high-risk customer groups and generated retention-focused insights.",
    },
    {
      title: "Healthcare Readmission Analysis",
      tools: "Python • SQL • Power BI",
      emoji: "🏥",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      description:
        "Explored patient readmission patterns, medication trends, and hospital performance using healthcare datasets.",
      impact:
        "Generated insights into patient risk factors and treatment efficiency.",
    },
    {
      title: "Sales Performance Analytics",
      tools: "Excel • SQL • Power BI",
      emoji: "💹",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
      description:
        "Developed dynamic dashboards tracking growth, category performance, and regional sales targets.",
      impact:
        "Improved reporting efficiency and performance visibility for stakeholders.",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Pandas",
    "NumPy",
    "DAX",
    "Data Visualization",
    "Dashboard Design",
    "Business Analysis",
    "MySQL",
    "Data Cleaning",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.15),transparent_30%)]"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-20 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-5">
              Data Analyst Portfolio
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
              Vishal Kumar
            </h1>

            <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-8 leading-snug">
              Transforming Data Into Business Growth & Insights
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Aspiring Data Analyst with strong expertise in SQL, Python,
              Power BI, Excel, and dashboard storytelling. Passionate about
              solving business problems using analytics and turning raw data
              into impactful insights.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-cyan-500/20">
                View Projects
              </button>

              <button className="border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

            <div className="relative overflow-hidden rounded-[40px] border border-gray-800 shadow-2xl shadow-cyan-500/20 bg-white/5 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Data Analyst"
                className="w-full max-w-md h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-gray-700 rounded-3xl p-5">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🧠</div>

                  <div>
                    <h3 className="text-2xl font-bold">Data Analyst</h3>
                    <p className="text-gray-400">
                      SQL • Python • Power BI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative px-6 md:px-20 py-24 border-t border-gray-900">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[7px] text-cyan-400 text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Building Analytics Solutions That Drive Decisions
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I specialize in data analytics, dashboard development, business
              intelligence, and data storytelling. I enjoy creating analytics
              solutions that help businesses understand trends, improve
              performance, and make data-driven decisions.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My goal is to become a high-impact Data Analyst by combining
              technical expertise with business understanding.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["4+", "Projects Completed"],
              ["500K+", "Rows Analyzed"],
              ["SQL", "Advanced Queries"],
              ["BI", "Dashboard Expertise"],
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-[30px] shadow-2xl"
              >
                <h3 className="text-5xl font-black text-cyan-400 mb-3">
                  {item[0]}
                </h3>

                <p className="text-gray-400 text-lg">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="px-6 md:px-20 py-24 border-t border-gray-900">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-bold">Technical Expertise</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-700 text-lg shadow-xl hover:border-cyan-400 transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 md:px-20 py-24 border-t border-gray-900">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm mb-4">
            Portfolio Projects
          </p>

          <h2 className="text-5xl font-bold">Featured Work</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-[35px] bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-2xl hover:border-cyan-400 transition-all duration-300"
            >
              <div className="overflow-hidden h-72 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-5 right-5 text-5xl bg-black/50 rounded-2xl px-4 py-2 backdrop-blur-md">
                  {project.emoji}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-cyan-400 font-medium mb-5">
                  {project.tools}
                </p>

                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>

                <div className="bg-black/60 border border-gray-800 rounded-2xl p-5">
                  <p className="text-gray-300 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-20 py-28 border-t border-gray-900 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            Open to Data Analyst opportunities, internships, freelance
            analytics projects, and collaborations.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20">
              💼 LinkedIn
            </button>

            <button className="flex items-center gap-3 border border-gray-700 hover:border-cyan-400 px-8 py-4 rounded-2xl font-semibold transition-all hover:bg-cyan-400/10">
              💻 GitHub
            </button>

            <button className="flex items-center gap-3 border border-gray-700 hover:border-cyan-400 px-8 py-4 rounded-2xl font-semibold transition-all hover:bg-cyan-400/10">
              ✉️ Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
