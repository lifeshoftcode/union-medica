/**
 * Base de conocimientos estática de la Clínica Unión Médica del Norte.
 * Extraída de las páginas institucionales para alimentar al asistente virtual.
 */

export const CLINIC_KNOWLEDGE = {
    institucion: {
        nombre: "Clínica Unión Médica del Norte (UMN)",
        ubicacion: "Av. Juan Pablo Duarte 176, Santiago de los Caballeros, República Dominicana.",
        contacto: {
            central: "(809) 226-8686",
            email: "info@clinicaunionmedica.com",
            web: "www.clinicaunionmedica.com"
        },
        mision: "Proporcionar servicios de salud especializados de alta calidad, con un enfoque humano, ético y profesional, apoyados en tecnología de vanguardia.",
        vision: "Ser el referente de salud privada en la República Dominicana y el Caribe, reconocido por nuestra calidad médica, innovación constante y calidez humana.",
        valores: ["Ética", "Humanismo", "Excelencia", "Trabajo en Equipo"]
    },
    infraestructura: {
        tours: [
            { nombre: "Torre A", servicios: "Consultas externas, laboratorio principal y oficinas administrativas." },
            { nombre: "Torre B", servicios: "Hospitalización, cirugía especializada y farmacia." },
            { nombre: "Torre C", servicios: "Unidades de Cuidados Intensivos (UCI), diagnósticos de alta tecnología y Laboratorio 24h." },
            { nombre: "Torre E", servicios: "Nueva torre quirúrgica, oncología, medicina avanzada y quirófanos inteligentes." }
        ],
        detalles: "Contamos con más de 60,000 metros cuadrados de construcción dedicados a la salud."
    },
    horarios: [
        { area: "Resonancia", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm · (D) Por Citas" },
        { area: "Tomografía y Sonografía", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre A)", horario: "(L-V) 7:00 am - 7:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre C)", horario: "(L-V) 7:00 am - 7:00 pm" },
        { area: "Tomografía (Torre D)", horario: "(L-V) 8:00 am - 7:00 pm" },
        { area: "Densitometría", horario: "(L-V) 8:00 am - 5:00 pm" },
        { area: "Banco de Sangre", horario: "(L-D) 24 horas" },
        { area: "Farmacia (Torre A)", horario: "(L-V) 7:20 am - 8:40 pm · (S) 8:00 am - 8:40 pm" },
        { area: "Farmacia (Torre C)", horario: "(L-D) 24 horas" },
        { area: "Cafetería", horario: "(L-V) 7:00 am - 8:00 pm · (S-D) 8:00 am - 4:45 pm" },
        { area: "Laboratorio Principal", horario: "(L-V) 6:30 am - 7:00 pm · (S) 7:00 am - 1:00 pm" },
        { area: "Laboratorio (Torre C)", horario: "(L-V) 7:00 am - 7:00 pm · (S) 7:00 am - 1:00 pm" },
        { area: "Centro de Vacunación", horario: "(L-V) 8:00 am - 6:00 pm · (S) 8:00 am - 12:00 pm" },
        { area: "Hemodiálisis", horario: "(L-S) 7:00 am - 9:00 pm" },
        { area: "Oficinas Administrativas", horario: "(L-V) 8:00 am - 5:30 pm · (S) 8:00 am - 12:00 pm" }
    ],
    servicios_destacados: [
        { nombre: "Segunda Opinión Médica", descripcion: "Servicio para obtener diagnósticos remotos de expertos internacionales y locales." },
        { nombre: "Residencias Médicas", descripcion: "Programas de docencia avalados por MISPAS y PUCMM para formación de especialistas." }
    ]
};
