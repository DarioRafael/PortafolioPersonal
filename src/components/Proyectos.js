import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layout, Server } from 'lucide-react';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Portfolio Personal",
            description: "Sitio web personal desarrollado con React y Tailwind CSS, implementando animaciones y diseño responsivo.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            category: "frontend",
            githubLink: "https://github.com/tu-usuario/portfolio",
            liveLink: "https://tu-portfolio.com",
            featured: true
        },
        {
            id: 2,
            title: "API REST",
            description: "API REST desarrollada con Node.js y Express, implementando autenticación JWT y documentación con Swagger.",
            image: "/api/placeholder/600/400",
            technologies: ["Node.js", "Express", "MongoDB"],
            category: "backend",
            githubLink: "https://github.com/tu-usuario/api",
            featured: true
        },
        {
            id: 3,
            title: "App Móvil",
            description: "Aplicación móvil desarrollada con Flutter para gestión de tareas y recordatorios.",
            image: "/api/placeholder/600/400",
            technologies: ["Flutter", "Dart", "Firebase"],
            category: "mobile",
            githubLink: "https://github.com/tu-usuario/app",
            liveLink: "https://play.google.com/store",
            featured: false
        }
    ];

    const categories = [
        { id: 'all', name: 'Todos', icon: <Layout /> },
        { id: 'frontend', name: 'Frontend', icon: <Code /> },
        { id: 'backend', name: 'Backend', icon: <Server /> }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
                    <p className="text-gray-400">
                        Explora algunos de los proyectos en los que he trabajado
                    </p>
                </motion.div>

                <div className="flex justify-center mb-12">
                    <div className="flex space-x-4 bg-gray-800 p-2 rounded-lg">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                                    filter === category.id
                                        ? 'bg-blue-600 text-white'
                                        : 'hover:bg-gray-700'
                                }`}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-gray-800 rounded-lg overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                {project.featured && (
                                    <div className="absolute top-4 right-4 bg-blue-600 text-sm px-3 py-1 rounded-full">
                                        Destacado
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                        <span>Código</span>
                                    </a>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsPage;