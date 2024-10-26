import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Aquí irá tu lógica de envío de formulario
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Aquí puedes agregar tu lógica de notificación de éxito
    };

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            content: "dariorafa29@gmail.com",
            link: "mailto:dariorafa29@gmail.com"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Teléfono",
            content: "+52 (834) 257-7041",
            link: "tel:+528342577041"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Ubicación",
            content: "Cd. Victoria, Tamaulipas, México"
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="h-6 w-6" />,
            link: "https://github.com/DarioRafael",
            name: "GitHub"
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            link: "https://www.linkedin.com/in/dariorafaelgarciabarcenas/",
            name: "LinkedIn"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl font-bold text-center mb-4">Contáctame</h1>
                    <p className="text-gray-400 text-center mb-12">
                        ¿Tienes alguna pregunta o propuesta? No dudes en contactarme
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800 p-6 rounded-lg text-center"
                            >
                                <div className="flex justify-center mb-4 text-blue-400">
                                    {info.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{info.title}</h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {info.content}
                                    </a>
                                ) : (
                                    <p className="text-gray-400">{info.content}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                <span>Enviar Mensaje</span>
                                <Send className="h-5 w-5" />
                            </button>
                        </motion.form>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gray-800 p-8 rounded-lg"
                        >
                            <h3 className="text-xl font-bold mb-6">Sígueme en redes sociales</h3>
                            <div className="space-y-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {social.icon}
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8">
                                <h4 className="font-semibold mb-4">Horario de estudio</h4>
                                <p className="text-gray-400">Lunes - Viernes</p>
                                <p className="text-gray-400">1:00 PM - 7:00 PM</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;