import React from 'react';
import { motion } from 'framer-motion';

function Certificados() {
    const certificates = [
        {
            id: 1,
            title: "Oracle Next Education",
            issuer: "Oracle & Alura Latam",
            date: "2023",
            image: "/path-to-oracle-cert.png",
            description: "Programa intensivo de desarrollo web y programación",
            skills: ["Java", "JavaScript", "HTML", "CSS"]
        },
        // Agrega más certificados aquí
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-20 px-4">
            <div className="container mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-white mb-12"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    Mis Certificaciones
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                            variants={itemVariants}
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-blue-400 mb-2">{cert.issuer}</p>
                                <p className="text-gray-400 mb-4">{cert.date}</p>
                                <p className="text-gray-300 mb-4">
                                    {cert.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Certificados;