import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CodeIcon, AcademicCapIcon, TranslateIcon } from '@heroicons/react/outline';

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Hero Section con efecto parallax */}
            <section className="parallax h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <div className="max-w-3xl reveal">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Hola, soy <span className="text-blue-400">Dario Rafael</span>
                        </h1>
                        <p className="text-xl mb-8">
                            Estudiante de Ingeniería en Sistemas Computacionales | Desarrollador en Formación
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link
                                to="/projects"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                            >
                                Ver Proyectos
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors duration-300"
                            >
                                Contactar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de presentación */}
            <main className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white reveal">
                            Sobre Mí
                        </h2>

                        <div className="space-y-8">
                            <p className="reveal text-gray-300 text-lg leading-relaxed">
                                Soy Dario, estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico Nacional
                                de México Campus Cd. Victoria. Mi objetivo es sobresalir en la vida creando conexiones que
                                impulsen mi crecimiento personal. Busco aprender y adquirir conocimientos que me acerquen
                                a mi pasión por la tecnología. Estoy decidido a alcanzar nuevas alturas y contribuir al
                                avance tecnológico.
                            </p>

                            {/* Cards de especialidades */}
                            <div className="grid md:grid-cols-3 gap-6 mt-12">
                                <div className="reveal bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                                    <CodeIcon className="h-12 w-12 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Desarrollo</h3>
                                    <p className="text-gray-300">
                                        Experiencia con Java, JavaScript y Dart. Desarrollo de aplicaciones con Flutter y React.
                                    </p>
                                </div>

                                <div className="reveal bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                                    <AcademicCapIcon className="h-12 w-12 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Educación</h3>
                                    <p className="text-gray-300">
                                        Tecnológico Nacional de México Campus Cd. Victoria
                                    </p>
                                </div>

                                <div className="reveal bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                                    <TranslateIcon className="h-12 w-12 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Idiomas</h3>
                                    <p className="text-gray-300">
                                        Español nativo, actualmente mejorando mi nivel de inglés.
                                    </p>
                                </div>
                            </div>

                            {/* Sección de tecnologías */}
                            <div className="reveal mt-16">
                                <h3 className="text-2xl font-bold text-center mb-6">Tecnologías y Herramientas</h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        'Java',
                                        'JavaScript',
                                        'Dart',
                                        'Flutter',
                                        'React',
                                        'SQL',
                                        'Azure',
                                        'Git'
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;