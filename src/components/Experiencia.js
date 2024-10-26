import React from 'react';

const Experience = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-6 text-blue-400">Experiencia</h1>
            <p className="mb-8 text-gray-400">
                Aunque no cuento con experiencia laboral formal, he adquirido valiosas habilidades a lo largo de mi trayectoria en el desarrollo de aplicaciones y proyectos personales. En especial, he trabajado con el lenguaje Java desde que ingresé a la universidad, y continúo perfeccionando mis conocimientos en este área. Recientemente, completé el curso Java ONE de Oracle con Alura, lo que me permitió pulir aún más mis habilidades en Java.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Habilidades Adquiridas</h2>
            <ul className="list-disc list-inside text-gray-400">
                <li>Desarrollo y programación en Java, con un enfoque en prácticas recomendadas.</li>
                <li>Conocimientos de SQL para la gestión y manipulación de bases de datos.</li>
                <li>Autoaprendizaje de JavaScript, Python y Dart, ampliando mi versatilidad como desarrollador.</li>
                <li>Familiaridad con nuevas tecnologías como Azure y AWS.</li>
                <li>Comprensión de conceptos REST y creación de backends eficientes.</li>
                <li>Resolución de problemas y debugging eficaz en proyectos.</li>
            </ul>
        </div>
    );
};

export default Experience;
