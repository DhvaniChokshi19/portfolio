import React from 'react';
import { Github, ExternalLink, Brain, TrendingUp, ShoppingBag, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
        title: "PRIME - PRL Research Information Metrics Engine",
        description: "Developed a full-stack Research Information Management System (RIMS) serving 500+ daily active users. Built with modern web technologies for efficient research data management and analytics.",
        icon: <Database className="w-8 h-8" />,
        technologies: ["React.js", "Tailwind CSS", "Django", "MySQL", "Apache2"],
        gradient: "from-orange-500 to-red-600",
        bgColor: "bg-red-800",
        features: [
          "500+ daily active users",
          "Full-stack RIMS implementation",
          "Research data analytics"
        ]
      },
    {
      title: "AI-Enabled Air Pollution Forecasting System",
      description: "Developed an AI-based AQI forecasting system using 10 years of daily air quality data from Vapi. Built and evaluated LSTM, BiLSTM and CNN-GRU models, achieving best results with CNN-GRU (15-day) and BiLSTM (5-day) forecasts.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "LSTM", "CNN-GRU"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-slate-900",
      features: [
        "Handled missing data with EMA for lowest RMSE and MAE",
        "10 years of daily air quality data processing",
        "Multiple deep learning model comparison"
      ]
    },
    {
      title: "Pennywise",
      description: "Built a comprehensive personal finance tracker with real-time income and expense monitoring, budget setting, and financial goal tracking. Features user authentication, interactive charts and detailed reports for trend analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["ReactJS", "Firebase", "HTML/CSS", "Git", "Charts.js"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-emerald-900",
      // link: "#",
      features: [
        "Real-time financial monitoring",
        "Interactive charts and reports",
        "Budget setting and goal tracking"
      ]
    },
    {
      title: "Online Jewellery Website",
      description: "Developed a full-stack e-commerce platform for jewelry with modern web technologies, featuring product catalog, shopping cart, user management, and secure payment processing.",
      icon: <ShoppingBag className="w-8 h-8" />,
      technologies: ["MongoDB", "Express", "ReactJS", "NodeJS", "Git"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-900",
      // link: "#",
      features: [
        "Full-stack MERN implementation",
        "Secure payment processing",
        "Product catalog management"
      ]
    },
    
  ];

  return (
    <div id='Projects' className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">A collection of my latest work in AI, web development, and full-stack applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`${project.bgColor} rounded-xl p-5 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a 
                      href={project.link}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <div className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    <Github className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6 relative z-10">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="relative z-10">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900 rounded-full border border-gray-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;