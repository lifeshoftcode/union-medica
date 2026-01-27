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
        mision: "Proporcionar servicios de salud especializados de alta calidad, con un enfoque humano, ético y profesional, apoyados en tecnología de vanguardia y un equipo médico comprometido con la excelencia.",
        vision: "Ser el referente de salud privada en la República Dominicana y el Caribe, reconocido por nuestra calidad médica, innovación constante y calidez humana.",
        valores: [
            { titulo: "Ética", desc: "Actuamos con honestidad y principios morales en cada atención." },
            { titulo: "Humanismo", desc: "El bienestar del paciente es nuestra prioridad absoluta." },
            { titulo: "Excelencia", desc: "Buscamos incansablemente la mejora continua." },
            { titulo: "Trabajo en Equipo", desc: "Sinergia profesional para mejores diagnósticos." }
        ],
        historia: [
            { year: "1994", title: "Fundación", desc: "Un grupo de médicos visionarios decide crear un centro de salud de excelencia en Santiago, naciendo bajo el concepto de 'La Excelencia al Alcance de Todos'." },
            { year: "1997", title: "Apertura", desc: "Inicia operaciones formales como uno de los centros más modernos del Cibao." },
            { year: "2000-2015", title: "Expansión Continua", desc: "Se inauguran las Torres A, B y C, consolidando servicios de hospitalización y diagnósticos avanzados." },
            { year: "2023", title: "Torre E", desc: "Inauguración de la Torre E, el complejo hospitalario más moderno de la región con quirófanos inteligentes y oncología avanzada." }
        ]
    },
    servicios_24h: [
        "Emergencia de Adultos",
        "Emergencia Pediátrica",
        "Farmacia (Torre C)",
        "Laboratorio Clínico (Torre C)",
        "Banco de Sangre",
        "Servicio de Ambulancias"
    ],
    especialidades: [
        "Alergología e Inmunología",
        "Anestesiología",
        "Cardiología (Adultos y Pediátrica)",
        "Cirugía General y Especializada",
        "Clínica del Dolor",
        "Dermatología",
        "Endocrinología",
        "Gastroenterología",
        "Ginecología y Obstetricia",
        "Hematología",
        "Infectología",
        "Nefrología (Hemodiálisis)",
        "Neumología",
        "Neurología",
        "Oftalmología",
        "Oncología",
        "Ortopedia y Traumatología",
        "Otorrinolaringología",
        "Pediatría",
        "Psicología y Psiquiatría",
        "Urología"
    ],
    centros_especializados: [
        { nombre: "Unidad Respiratoria Integral (URI)", descripcion: "Centro especializado en enfermedades pulmonares, asma y apnea del sueño." },
        { nombre: "Centro de Oncología y Radioterapia", descripcion: "Tratamientos avanzados contra el cáncer con tecnología de punta en la Torre E." },
        { nombre: "Unidad de Hemodiálisis", descripcion: "Atención integral para pacientes con insuficiencia renal." },
        { nombre: "Unidad de Cuidados Intensivos (UCI)", descripcion: "Equipada con monitoreo constante para adultos, niños y neonatos." }
    ],
    fundacion: {
        nombre: "Fundación Unión Médica",
        mision: "Impulsar proyectos sociales y de salud para los más necesitados.",
        descripcion: "Brazo social de la clínica que realiza operativos médicos gratuitos, programas de prevención de enfermedades y apoyo económico para cirugías complejas en pacientes vulnerables.",
        eventos: ["Operativos Médicos Nacionales", "Bazar Anual de Recaudación", "Charlas de Prevención en Comunidades"]
    },
    redes_sociales: [
        { nombre: "Instagram", url: "https://www.instagram.com/clinicaunionmedica/" },
        { nombre: "Facebook", url: "https://www.facebook.com/clinicaunionmedica/" },
        { nombre: "YouTube", url: "https://www.youtube.com/@clinicaunionmedica" },
        { nombre: "LinkedIn", url: "https://www.linkedin.com/company/clinica-union-medica-del-norte/" }
    ],
    seguros_aceptados: [
        "SeNaSa (Régimen Contributivo y Subsidiado)",
        "ARS Humano / Primera ARS",
        "Mapfre Salud ARS",
        "ARS Universal",
        "ARS Reservas",
        "ARS Monumental",
        "ARS Simag",
        "ARS Futuro",
        "ARS Renacer",
        "ARS ASEMAP",
        "Seguros Banreservas"
    ],
    infraestructura: {
        tours: [
            { nombre: "Torre A", servicios: "Consultas externas de múltiples especialidades, laboratorio principal y oficinas administrativas." },
            { nombre: "Torre B", servicios: "Áreas de hospitalización, cirugía de corta estancia y farmacia ambulatoria." },
            { nombre: "Torre C", servicios: "Unidades de Cuidados Intensivos (UCI), imágenes diagnósticas 24h y Laboratorio de Emergencia." },
            { nombre: "Torre E", servicios: "Quirófanos inteligentes, Centro de Oncología, Medicina Avanzada y suites de hospitalización premium." }
        ],
        detalles: "Contamos con más de 60,000 metros cuadrados de construcción dedicados a la salud integral."
    },
    horarios: [
        { area: "Resonancia", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm · (D) Por Citas" },
        { area: "Tomografía y Sonografía", horario: "(L-V) 7:00 am - 8:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre A)", horario: "(L-V) 7:00 am - 7:00 pm · (S) 8:00 am - 1:00 pm" },
        { area: "Rayos X (Torre C)", horario: "(L-V) 7:00 am - 7:00 pm" },
        { area: "Tomografía (Torre D)", horario: "(L-V) 8:00 am - 7:00 pm" },
        { area: "Densitometría", horario: "(L-V) 8:00 am - 5:00 pm" },
        { area: "Banco de Sangre", horario: "24 horas (L-D)" },
        { area: "Farmacia (Torre A)", horario: "(L-V) 7:20 am - 8:40 pm · (S) 8:00 am - 8:40 pm" },
        { area: "Farmacia (Torre C)", horario: "24 horas (L-D)" },
        { area: "Cafetería", horario: "(L-V) 7:00 am - 8:00 pm · (S-D) 8:00 am - 4:45 pm" },
        { area: "Laboratorio Principal", horario: "(L-V) 6:30 am - 7:00 pm · (S) 7:00 am - 1:00 pm" },
        { area: "Laboratorio (Torre C)", horario: "24 horas (L-D)" },
        { area: "Centro de Vacunación", horario: "(L-V) 8:00 am - 6:00 pm · (S) 8:00 am - 12:00 pm" },
        { area: "Hemodiálisis", horario: "(L-S) 7:00 am - 9:00 pm" },
        { area: "Oficinas Administrativas", horario: "(L-V) 8:00 am - 5:30 pm · (S) 8:00 am - 12:00 pm" }
    ],
    servicios_destacados: [
        { nombre: "Segunda Opinión Médica", descripcion: "Servicio para obtener diagnósticos remotos de expertos internacionales y locales." },
        { nombre: "Residencias Médicas", descripcion: "Programas de docencia avalados por MISPAS y PUCMM para formación de especialistas." },
        { nombre: "Turismo de Salud", descripcion: "Atención especializada para pacientes internacionales con coordinación de viajes y estadía." }
    ]
};


