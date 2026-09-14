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

/* ============================================================
   GLOSARIO BASE · palabras funcionales comunes a todo el curso
   Lo usa la lectura de cualquier lección, así que el glosario de
   cada lección sólo necesita traer su vocabulario específico.
   El glosario de la lección tiene prioridad sobre éste.
   Formato: [inglés, AFI, español, pronunciación figurada]
   ============================================================ */
const GLOSARIO_BASE = [
  /* Pronombres */
  ["I","aɪ","yo","ái"],["you","juː","tú, usted","iú"],["he","hiː","él","jíi"],
  ["she","ʃiː","ella","shii"],["it","ɪt","ello, lo","it"],["we","wiː","nosotros","uii"],
  ["they","ðeɪ","ellos, ellas","déi"],["me","miː","mí","míi"],["him","hɪm","lo, le (a él)","jim"],
  ["her","hɜːr","la, le, su (de ella)","jer"],["us","ʌs","nos","as"],["them","ðem","los, les","dem"],
  /* Posesivos */
  ["my","maɪ","mi, mis","mái"],["your","jʊr","tu, tus","iór"],["his","hɪz","su (de él)","jis"],
  ["its","ɪts","su (de ello)","its"],["our","ˈaʊər","nuestro","áuar"],["their","ðer","su (de ellos)","der"],
  /* Verbo to be y auxiliares */
  ["am","æm","soy, estoy","am"],["is","ɪz","es, está","is"],["are","ɑːr","eres, son, están","ar"],
  ["was","wʌz","era, estaba","uás"],["were","wɜːr","eran, estaban","uér"],
  ["have","hæv","tengo, tienes","jav"],["has","hæz","tiene","jas"],["had","hæd","tenía, tuvo","jad"],
  ["do","duː","hacer; auxiliar","du"],["does","dʌz","hace; auxiliar","das"],["did","dɪd","hizo; auxiliar","did"],
  ["don't","doʊnt","no (auxiliar)","dóunt"],["doesn't","ˈdʌznt","no (3ª persona)","dásnt"],
  ["isn't","ˈɪznt","no es, no está","ísnt"],["aren't","ɑːrnt","no son, no están","arnt"],
  ["wasn't","ˈwʌznt","no era, no estaba","uásnt"],["can't","kænt","no puede","kant"],
  ["can","kæn","poder","kan"],["will","wɪl","(futuro)","uíl"],["not","nɑːt","no","nat"],
  /* Artículos, conjunciones y partículas */
  ["a","ə","un, una","a"],["an","æn","un, una","an"],["the","ðə","el, la, los, las","da"],
  ["and","ænd","y","and"],["or","ɔːr","o","or"],["but","bʌt","pero","bat"],["so","soʊ","así que","sóu"],
  ["because","bɪˈkɔːz","porque","bicós"],["also","ˈɔːlsoʊ","también","ólsou"],["too","tuː","también","túu"],
  ["very","ˈveri","muy","véri"],["only","ˈoʊnli","solamente","óunli"],["really","ˈrɪəli","de verdad","ríili"],
  ["yes","jes","sí","yes"],["no","noʊ","no","nóu"],["of","əv","de","av"],
  /* Preposiciones */
  ["in","ɪn","en","in"],["on","ɑːn","en, sobre","an"],["at","æt","en, a","at"],
  ["to","tuː","a, hacia","tu"],["from","frʌm","de, desde","from"],["with","wɪð","con","uid"],
  ["for","fɔːr","para, por","for"],["about","əˈbaʊt","sobre, acerca de","abáut"],
  /* Interrogativos */
  ["what","wʌt","qué","uát"],["where","wer","dónde","uér"],["when","wen","cuándo","uén"],
  ["who","huː","quién","jú"],["why","waɪ","por qué","uái"],["how","haʊ","cómo","jáu"],
  ["which","wɪtʃ","cuál","uích"],["whose","huːz","de quién","júus"],
  /* Demostrativos y cantidad */
  ["this","ðɪs","este, esta","dis"],["that","ðæt","ese, esa","dat"],
  ["these","ðiːz","estos, estas","díis"],["those","ðoʊz","esos, esas","dóus"],
  ["there","ðer","allí; hay","der"],["here","hɪr","aquí","jíer"],
  ["some","sʌm","algunos","sam"],["any","ˈeni","algún, ningún","éni"],["all","ɔːl","todo","ol"],
  ["many","ˈmeni","muchos","méni"],["much","mʌtʃ","mucho","mach"],["more","mɔːr","más","mor"],
  /* Números 1–20 */
  ["one","wʌn","uno","uán"],["two","tuː","dos","túu"],["three","θriː","tres","zríi"],
  ["four","fɔːr","cuatro","fóor"],["five","faɪv","cinco","fáiv"],["six","sɪks","seis","siks"],
  ["seven","ˈsevn","siete","sévn"],["eight","eɪt","ocho","éit"],["nine","naɪn","nueve","náin"],
  ["ten","ten","diez","ten"],["eleven","ɪˈlevn","once","ilévn"],["twelve","twelv","doce","tuélv"],
  ["thirteen","ˌθɜːrˈtiːn","trece","zertíin"],["fourteen","ˌfɔːrˈtiːn","catorce","fortíin"],
  ["fifteen","ˌfɪfˈtiːn","quince","fiftíin"],["twenty","ˈtwenti","veinte","tuénti"],
  /* Conectores y comodines que salen en casi todos los textos */
  ["if","ɪf","si","if"],["by","baɪ","por, con","bái"],["than","ðæn","que (comparando)","dan"],
  ["know","noʊ","saber, conocer","nóu"],["knows","noʊz","sabe","nóus"],
  ["a lot","ə lɑːt","mucho","a lat"],["minus","ˈmaɪnəs","menos, bajo cero","máinas"],
  ["even","ˈiːvn","incluso","íivn"],["still","stɪl","todavía","stil"],
  ["maybe","ˈmeɪbi","quizá","méibi"],["always","ˈɔːlweɪz","siempre","ólueis"],
  ["never","ˈnevər","nunca","névar"],["sometimes","ˈsʌmtaɪmz","a veces","sámtaims"],
  ["every","ˈevri","cada","évri"],["then","ðen","luego","den"],
  ["here","hɪr","aquí","jíer"],["over there","ˈoʊvər ðer","por allá","óuvar der"],
  /* Meses que faltaban */
  ["August","ˈɔːɡəst","agosto","ógast"],["September","sepˈtembər","septiembre","septémbar"],
  ["October","ɑːkˈtoʊbər","octubre","aktóubar"],["November","noʊˈvembər","noviembre","nouvémbar"],
  ["December","dɪˈsembər","diciembre","disémbar"],
  /* Fórmulas frecuentes */
  ["thank you","ˈθæŋk juː","gracias","zánk iú"],["please","pliːz","por favor","plíis"],
  ["of course","əv ˈkɔːrs","por supuesto","av kórs"],["sorry","ˈsɑːri","perdón","sári"],
  ["name","neɪm","nombre","néim"],["people","ˈpiːpl","personas, gente","píipl"],
  ["day","deɪ","día","déi"],["today","təˈdeɪ","hoy","tudéi"],["time","taɪm","tiempo, hora","táim"],
  ["good","ɡʊd","bueno","gud"],["big","bɪɡ","grande","big"],["small","smɔːl","pequeño","smóol"],
  ["new","nuː","nuevo","núu"],["old","oʊld","viejo; de edad","óuld"]
];
