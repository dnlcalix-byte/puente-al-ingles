/* ============================================================
   CURRÍCULO COMPLETO · 150 lecciones · MCER A1 → C1
   Una lección se marca como disponible cuando existe su archivo
   en /lecciones/<id>.js. El resto aparece bloqueado en el índice.
   ============================================================ */

const NIVELES = [
  {
    nivel: "A1",
    nombre: "Acceso",
    usuario: "Usuario básico",
    ielts: "—",
    foco: "Presentarse, entorno inmediato, presente simple y pasado de <i>to be</i>.",
    lecciones: [
      "Saludos y presentaciones", "Familia y posesiones", "Números, hora y fecha",
      "La casa y el barrio", "Comida y bebida", "Rutina diaria",
      "En la tienda: precios", "El clima", "Ropa y colores",
      "Partes del cuerpo y salud básica", "Transporte y direcciones", "Trabajos y profesiones",
      "Gustos: like, love, hate", "Habilidades: can y can't", "El fin de semana (pasado regular)",
      "Vacaciones (pasado irregular)", "Planes: going to", "En el restaurante",
      "Descripción de personas", "Tecnología cotidiana", "En el aeropuerto",
      "Invitaciones y citas", "Una llamada telefónica", "Repaso y examen A1"
    ]
  },
  {
    nivel: "A2",
    nombre: "Plataforma",
    usuario: "Usuario básico",
    ielts: "≈ 4.0",
    foco: "Rutinas, pasado simple, futuro, comparativos y descripción de experiencias.",
    lecciones: [
      "Reencuentro: ponerse al día", "Pasado continuo: qué estabas haciendo", "Comparativos y superlativos",
      "La ciudad: servicios y trámites", "Experiencias: present perfect", "Ya, todavía, nunca",
      "Cantidades: much, many, a few", "En el supermercado", "Recetas e instrucciones",
      "Salud: síntomas y consejos", "Deporte y ejercicio", "Consejos: should y ought to",
      "Obligación: must y have to", "El futuro con will: predicciones", "Primer condicional",
      "Alquilar vivienda", "Entrevista de trabajo básica", "Currículum y carta de presentación",
      "Adverbios de modo y frecuencia", "Contar una anécdota", "Cine, series y música",
      "Viajes: reservas e incidencias", "Describir procesos cotidianos", "Quejas y reclamaciones",
      "Redes sociales y mensajería", "Medio ambiente: primeros pasos", "Planes de futuro personales",
      "Repaso y examen A2"
    ]
  },
  {
    nivel: "B1",
    nombre: "Umbral",
    usuario: "Usuario independiente",
    ielts: "≈ 4.0 – 5.0",
    foco: "Opinión argumentada, condicionales y present perfect. Entra el formato IELTS.",
    lecciones: [
      "Diagnóstico IELTS: las cuatro secciones", "Opinión personal argumentada", "Segundo condicional",
      "Voz pasiva en presente y pasado", "Estilo indirecto: reported speech", "Present perfect continuous",
      "Pasado perfecto", "Modales de deducción", "Conectores de contraste y causa",
      "Educación y sistema escolar", "Trabajo y carrera profesional", "Tecnología y vida diaria",
      "IELTS Speaking Part 1: preguntas personales", "IELTS Speaking Part 2: el long turn",
      "Describir gráficos: vocabulario base", "IELTS Writing Task 1: gráfico de líneas",
      "IELTS Writing Task 1: barras y tablas", "IELTS Listening: conversación cotidiana",
      "IELTS Reading: skimming y scanning", "Phrasal verbs de alta frecuencia",
      "Salud pública y hábitos", "Transporte urbano y movilidad", "Dinero y consumo",
      "Vivienda y urbanismo", "IELTS Writing Task 2: ensayo de opinión", "Turismo y patrimonio",
      "Medios de comunicación", "Relaciones y vida social", "IELTS Speaking Part 3: discusión",
      "Corrección de errores frecuentes", "Simulacro IELTS parcial", "Repaso y examen B1"
    ]
  },
  {
    nivel: "B2",
    nombre: "Avanzado",
    usuario: "Usuario independiente",
    ielts: "≈ 5.5 – 6.5",
    foco: "Abstracción, voz pasiva, estilo indirecto y simulacros completos del examen.",
    lecciones: [
      "Diagnóstico B2 y metas de banda", "Tercer condicional y arrepentimiento", "Condicionales mixtos",
      "Voz pasiva avanzada", "Oraciones de relativo", "Inversión y énfasis",
      "Gerundios e infinitivos", "Modales perfectos y sus matices", "Colocaciones académicas",
      "Paráfrasis y sinónimos", "Registro formal e informal",
      "IELTS Writing Task 1: procesos y mapas", "IELTS Writing Task 1: comparar dos gráficos",
      "IELTS Writing Task 2: ventajas y desventajas", "IELTS Writing Task 2: problema y solución",
      "IELTS Writing Task 2: doble pregunta", "Cohesión y coherencia del párrafo",
      "IELTS Listening: monólogo académico", "IELTS Listening: mapas y diagramas",
      "IELTS Reading: True / False / Not Given", "IELTS Reading: matching headings",
      "IELTS Reading: completar resúmenes", "IELTS Speaking: fluidez y muletillas",
      "IELTS Speaking: ampliar respuestas", "Ciencia e innovación", "Globalización y cultura",
      "Crimen y justicia", "Medio ambiente y energía", "Arte y creatividad",
      "Envejecimiento y demografía", "Educación superior", "Gobierno y políticas públicas",
      "Simulacro completo: Listening y Reading", "Simulacro completo: Writing",
      "Simulacro completo: Speaking", "Repaso y examen B2"
    ]
  },
  {
    nivel: "C1",
    nombre: "Dominio operativo",
    usuario: "Usuario competente",
    ielts: "≈ 7.0 – 8.0",
    foco: "Registro académico, matiz e implicatura. Writing Task 2 y Speaking Part 3 en banda 7+.",
    lecciones: [
      "Diagnóstico C1: de banda 6.5 a 7+", "Precisión léxica y matiz", "Implicatura e inferencia",
      "Hedging: el lenguaje cauto", "Nominalización académica", "Estructuras enfáticas y cleft sentences",
      "Discurso académico escrito", "Argumentar con contraargumento", "Idioms y lenguaje figurado",
      "Entonación y prosodia", "Acentos: británico, americano, australiano",
      "IELTS Writing Task 2: de banda 7 a 8", "IELTS Writing Task 2: tesis compleja",
      "IELTS Writing Task 1: precisión en los datos", "IELTS Speaking Part 3: abstracción",
      "IELTS Speaking: especular e hipotetizar", "IELTS Reading: textos densos y ritmo",
      "IELTS Listening: acentos y velocidad", "Ética y dilemas morales", "Economía y mercados",
      "Psicología y comportamiento", "Urbanismo y futuro de las ciudades",
      "Inteligencia artificial y sociedad", "Salud mental y bienestar",
      "Sostenibilidad y política climática", "Historia y memoria colectiva", "Lengua e identidad",
      "Simulacro IELTS completo 1", "Simulacro IELTS completo 2", "Repaso y certificación C1"
    ]
  }
];

/* Aplana el currículo en una lista ordenada de lecciones con su id. */
const CURSO = [];
NIVELES.forEach(n => {
  n.lecciones.forEach((titulo, k) => {
    const numero = k + 1;
    CURSO.push({
      id: n.nivel.toLowerCase() + "-" + String(numero).padStart(2, "0"),
      nivel: n.nivel, numero, titulo,
      total: n.lecciones.length
    });
  });
});

const TOTAL_LECCIONES = CURSO.length;
const leccionPorId = id => CURSO.find(l => l.id === id) || null;
const nivelPorNombre = nv => NIVELES.find(n => n.nivel === nv) || null;
