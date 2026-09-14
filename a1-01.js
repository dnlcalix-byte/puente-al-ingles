/* ============================================================
   LECCIÓN A1-01 · Saludos y presentaciones
   Para crear una lección nueva: copia este archivo, cambia el id
   y el meta, y sustituye los cinco bloques de datos. El motor no
   se toca nunca.
   ============================================================ */
(function(){
/* ============================================================
   DATOS DE LA LECCIÓN A1-01
   ============================================================ */
/* [inglés, AFI, español, pronunciación aproximada en letras españolas] */
const VOCAB = [
  {g:"Saludos y despedidas", items:[
    ["hello","həˈloʊ","hola","jelóu"],["hi","haɪ","hola (informal)","jái"],
    ["good morning","ɡʊd ˈmɔːrnɪŋ","buenos días","gud mórning"],["good afternoon","ɡʊd ˌæftərˈnuːn","buenas tardes","gud afternúun"],
    ["good evening","ɡʊd ˈiːvnɪŋ","buenas noches (al llegar)","gud íivning"],["goodbye","ɡʊdˈbaɪ","adiós","gudbái"],
    ["see you later","siː juː ˈleɪtər","hasta luego","síi iú léiter"],["have a good day","hæv ə ɡʊd ˈdeɪ","que tengas buen día","jav a gud déi"]
  ]},
  {g:"Fórmulas de cortesía", items:[
    ["please","pliːz","por favor","plíis"],["thank you","ˈθæŋk juː","gracias","zánk iú"],["thanks","θæŋks","gracias (informal)","zánks"],
    ["nice to meet you","naɪs tə ˈmiːt juː","mucho gusto","náis tu míit iú"],["good luck","ɡʊd ˈlʌk","buena suerte","gud lák"],
    ["yes","jes","sí","yes"],["no","noʊ","no","nóu"]
  ]},
  {g:"Identidad y lugar", items:[
    ["name","neɪm","nombre","néim"],["student","ˈstuːdnt","estudiante","stúudent"],["teacher","ˈtiːtʃər","profesor(a)","tíicher"],
    ["city","ˈsɪti","ciudad","síti"],["country","ˈkʌntri","país","kántri"],["office","ˈɑːfɪs","oficina","áafis"],
    ["class","klæs","clase","klas"],["English","ˈɪŋɡlɪʃ","inglés","ínglish"],["Spanish","ˈspænɪʃ","español","spánish"]
  ]},
  {g:"Descripción y matices", items:[
    ["fine","faɪn","bien","fáin"],["well","wel","bien (adverbio)","uél"],["very","ˈveri","muy","véri"],
    ["beautiful","ˈbjuːtɪfl","hermoso/a","biútiful"],["small","smɔːl","pequeño/a","smóol"],["interesting","ˈɪntrəstɪŋ","interesante","íntrestin"],
    ["too","tuː","también","túu"],["only","ˈoʊnli","solo, solamente","óunli"],["now","naʊ","ahora","náu"]
  ]},
  {g:"Palabras interrogativas", items:[
    ["how","haʊ","cómo","jáu"],["what","wʌt","qué, cuál","uát"],["where","wer","dónde","uér"],["how old","haʊ ˈoʊld","qué edad","jáu óuld"]
  ]},
  {g:"Números de la lección", items:[
    ["nine","naɪn","nueve","náin"],["twenty-two","ˈtwenti ˈtuː","veintidós","tuénti túu"],["twenty-four","ˈtwenti ˈfɔːr","veinticuatro","tuénti fóor"]
  ]}
];

/* Clave de lectura de la transcripción aproximada */
const PRONKEY = [
  ["j","El aire sale por la garganta, suave, como un suspiro. <b>No</b> es la <i>j</i> fuerte de «jamón».","hello &rarr; jelóu"],
  ["z","La punta de la lengua asoma <b>entre los dientes</b>. No suena como <i>s</i> ni como <i>z</i> española.","thank &rarr; zánk"],
  ["d","En <i>that</i>, <i>this</i>: misma lengua entre los dientes, pero con voz. Es una <i>d</i> muy blanda.","that &rarr; dat"],
  ["sh","Como el sonido de «Shakira» o al pedir silencio. No existe en español.","Spanish &rarr; spánish"],
  ["v","Labio de abajo contra los dientes de arriba, vibrando. <b>No</b> es una <i>b</i>.","very &rarr; véri"],
  ["u + vocal","Suena como la <i>w</i> inglesa, igual que en «huevo».","well &rarr; uél"],
  ["r","Muy suave, la lengua <b>no vibra</b> y no toca el paladar. Nunca como la <i>rr</i>.","work &rarr; uérk"],
  ["íi úu óo","Vocal doble = vocal <b>larga</b>: sostén el sonido el doble de tiempo.","please &rarr; plíis"],
  ["tilde","Marca la sílaba fuerte. En inglés el acento cambia el significado, no solo el ritmo.","student &rarr; stúudent"]
];

const VERBS = [
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to have","irr","have · has","had","will have","tener, haber"],
  ["to do","irr","do · does","did","will do","hacer (y auxiliar)"],
  ["to live","reg","live · lives","lived","will live","vivir"],
  ["to study","reg","study · studies","studied","will study","estudiar"],
  ["to work","reg","work · works","worked","will work","trabajar"],
  ["to thank","reg","thank · thanks","thanked","will thank","agradecer"],
  ["to meet","irr","meet · meets","met","will meet","conocer, encontrarse"],
  ["to see","irr","see · sees","saw","will see","ver"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to come","irr","come · comes","came","will come","venir"]
];

const GRAMMAR = [
  {t:"Pronombres personales sujeto", s:"subject pronouns",
   p:"En inglés el sujeto es obligatorio: nunca se omite, aunque la terminación del verbo ya lo indique en español. «Soy estudiante» exige decir <b>I</b> am a student.",
   chips:[["I","yo"],["you","tú / usted / ustedes"],["he","él"],["she","ella"],["it","ello (cosas, animales)"],["we","nosotros"],["they","ellos / ellas"]],
   aviso:["El error número uno","<span class='wrong'>Am a student.</span> &nbsp;&rarr;&nbsp; <span class='right'>I am a student.</span> Sin sujeto, la frase no existe en inglés."]},

  {t:"Verbo TO BE en presente", s:"am / is / are",
   p:"Un solo verbo cubre <i>ser</i> y <i>estar</i>. La negación se forma añadiendo <b>not</b> después del verbo; la pregunta, invirtiendo el orden sujeto–verbo.",
   table:{head:["Sujeto","Afirmativo","Contracción","Negativo","Pregunta"], rows:[
     ["I","I am","I'm","I am not (I'm not)","Am I …?"],
     ["you / we / they","you are","you're","you are not (aren't)","Are you …?"],
     ["he / she / it","he is","he's","he is not (isn't)","Is he …?"]
   ]}},

  {t:"Adjetivos posesivos", s:"my, your, his, her…",
   p:"No concuerdan con el objeto poseído sino con el poseedor, y jamás cambian de número: <i>my name</i>, <i>my names</i>.",
   chips:[["my","mi"],["your","tu / su"],["his","su (de él)"],["her","su (de ella)"],["its","su (de ello)"],["our","nuestro/a"],["their","su (de ellos)"]],
   aviso:["Dos formas de presentarse","<b>My name is David</b> (literal: «mi nombre es David») o <b>I'm David</b>. Ambas son correctas; la segunda es más frecuente en conversación."]},

  {t:"Artículos a / an", s:"artículo indefinido",
   p:"<b>a</b> ante sonido consonántico, <b>an</b> ante sonido vocálico. Decide el <i>sonido</i>, no la letra: <i>an office</i>, pero <i>a university</i> (/juː/).",
   chips:[["a student","un estudiante"],["a city","una ciudad"],["an office","una oficina"],["an English class","una clase de inglés"]],
   aviso:["Obligatorio ante profesiones","<span class='wrong'>I am student.</span> &nbsp;&rarr;&nbsp; <span class='right'>I am a student.</span> El español lo omite; el inglés no."]},

  {t:"Preguntas con palabra interrogativa", s:"WH- questions",
   p:"Estructura fija: <b>WH- + to be + sujeto</b>. La palabra interrogativa abre siempre la frase, y en inglés solo se escribe un signo de interrogación, al final.",
   chips:[["What is your name?","¿Cuál es tu nombre?"],["Where are you from?","¿De dónde eres?"],["How are you?","¿Cómo estás?"],["How old are you?","¿Qué edad tienes?"]],
   aviso:["Preposición al final","En <b>Where are you <u>from</u>?</b> la preposición cierra la pregunta. El español la coloca al inicio («¿<u>De</u> dónde…?»). Es una inversión que hay que automatizar."]},

  {t:"Presente simple con el auxiliar DO", s:"do / does · don't / doesn't",
   p:"Para verbos que no son <i>to be</i>, la pregunta y la negación necesitan el auxiliar <b>do</b> (o <b>does</b> en tercera persona). El auxiliar no se traduce: es solo un andamio gramatical.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Afirmativo","sujeto + verbo","I study English."],
     ["Negativo","sujeto + do not / does not + verbo","I do not (don't) work."],
     ["Pregunta","Do / Does + sujeto + verbo","Do you work?"],
     ["Respuesta corta","Yes, I do. / No, I don't.","— Do you work? — No, I don't."]
   ]},
   aviso:["El auxiliar se lleva la «s»","<span class='wrong'>Does she works?</span> &nbsp;&rarr;&nbsp; <span class='right'>Does she work?</span> Si <i>does</i> ya marca la tercera persona, el verbo principal vuelve al infinitivo."]}
];

/* Guion: A = Sarah (IA) · B = David (estudiante) */
const DIALOGUE = [
 {s:"A", ipa:"həˈloʊ ɡʊd ˈmɔːrnɪŋ", p:"¡jelóu! gud mórning", b:[["Hello!","¡Hola!"],["Good","Buenos"],["morning.","días."]]},
 {s:"B", ipa:"ɡʊd ˈmɔːrnɪŋ haʊ ɑːr juː", p:"gud mórning. jáu ar iú", b:[["Good","Buenos"],["morning.","días."],["How","¿Cómo"],["are","estás"],["you?","tú?"]]},
 {s:"A", ipa:"aɪ æm faɪn θæŋk juː ænd juː", p:"ái am fáin, zánk iú. and iú", b:[["I","Yo"],["am","estoy"],["fine,","bien,"],["thank you.","gracias."],["And","¿Y"],["you?","tú?"]]},
 {s:"B", ipa:"aɪ æm ˈveri wel θæŋks", p:"ái am véri uél, zánks", b:[["I","Yo"],["am","estoy"],["very","muy"],["well,","bien,"],["thanks.","gracias."]]},
 {s:"A", ipa:"maɪ neɪm ɪz ˈserə wʌt ɪz jʊr neɪm", p:"mái néim is sára. uát is iór néim", b:[["My","Mi"],["name","nombre"],["is","es"],["Sarah.","Sarah."],["What","¿Cuál"],["is","es"],["your","tu"],["name?","nombre?"]]},
 {s:"B", ipa:"maɪ neɪm ɪz ˈdeɪvɪd naɪs tə ˈmiːt juː", p:"mái néim is déivid. náis tu míit iú",
  b:[["My","Mi"],["name","nombre"],["is","es"],["David.","David."],["Nice to meet you.","Mucho gusto."]],
  n:"<b>Nice to meet you</b> es una fórmula fija. Literalmente sería «agradable conocerte»: no intentes traducirla palabra por palabra, memorízala como un bloque."},
 {s:"A", ipa:"naɪs tə ˈmiːt juː tuː", p:"náis tu míit iú túu", b:[["Nice to meet you","Mucho gusto"],["too.","también."]]},
 {s:"B", ipa:"wer ɑːr juː frʌm", p:"uér ar iú from", b:[["Where","¿De dónde"],["are you from?","eres tú?"]],
  n:"La preposición <b>from</b> cierra la pregunta en inglés, mientras que el «de» español la abre. Compara: «<b>¿De</b> dónde eres?» / «Where are you <b>from</b>?»"},
 {s:"A", ipa:"aɪ æm frʌm ˈkænədə aɪ lɪv ɪn təˈrɑːntoʊ", p:"ái am from kánada. ái liv in torónto", b:[["I","Yo"],["am","soy"],["from","de"],["Canada.","Canadá."],["I","Yo"],["live","vivo"],["in","en"],["Toronto.","Toronto."]]},
 {s:"B", ipa:"aɪ æm frʌm hɑnˈdʊrəs aɪ lɪv ɪn təˌɡuːsɪˈɡælpə", p:"ái am from jondúras. ái liv in teguisigálpa", b:[["I","Yo"],["am","soy"],["from","de"],["Honduras.","Honduras."],["I","Yo"],["live","vivo"],["in","en"],["Tegucigalpa.","Tegucigalpa."]]},
 {s:"A", ipa:"ðæt ɪz ə ˈbjuːtɪfl ˈsɪti", p:"dat is a biútiful síti", b:[["That","Esa"],["is","es"],["a","una"],["beautiful","hermosa"],["city.","ciudad."]],
  n:"En inglés el adjetivo va <b>antes</b> del sustantivo: <i>beautiful city</i> = «ciudad hermosa». El orden español invertido es un error muy común."},
 {s:"B", ipa:"θæŋk juː ɑːr juː ə ˈstuːdnt hɪr", p:"zánk iú. ar iú a stúudent jíer", b:[["Thank you.","Gracias."],["Are","¿Eres"],["you","tú"],["a","un"],["student","estudiante"],["here?","aquí?"]]},
 {s:"A", ipa:"jes aɪ æm aɪ ˈstʌdi ˈɪŋɡlɪʃ ænd ˈspænɪʃ", p:"yes, ái am. ái stádi ínglish and spánish", b:[["Yes,","Sí,"],["I am.","lo soy."],["I","Yo"],["study","estudio"],["English","inglés"],["and","y"],["Spanish.","español."]]},
 {s:"B", ipa:"aɪ æm ə ˈstuːdnt tuː aɪ ˈstʌdi ˈɪŋɡlɪʃ", p:"ái am a stúudent túu. ái stádi ínglish", b:[["I","Yo"],["am","soy"],["a","un"],["student","estudiante"],["too.","también."],["I","Yo"],["study","estudio"],["English.","inglés."]]},
 {s:"A", ipa:"haʊ oʊld ɑːr juː", p:"jáu óuld ar iú", b:[["How old","¿Cuántos años"],["are you?","tienes?"]],
  n:"Literalmente «¿qué tan viejo eres?». El inglés usa <b>to be</b> para la edad, no «tener»."},
 {s:"B", ipa:"aɪ æm ˈtwenti ˈtuː jɪrz oʊld ænd juː", p:"ái am tuénti túu íers óuld. and iú", b:[["I am","Tengo"],["twenty-two","veintidós"],["years old.","años."],["And","¿Y"],["you?","tú?"]],
  n:"Fórmula obligatoria: <b>I am … years old</b>. <span class='wrong'>I have 22 years</span> es incorrecto y delata al hispanohablante de inmediato."},
 {s:"A", ipa:"aɪ æm ˈtwenti ˈfɔːr duː juː wɜːrk", p:"ái am tuénti fóor. du iú uérk", b:[["I am","Tengo"],["twenty-four.","veinticuatro."],["Do you work?","¿Tú trabajas?"]],
  n:"<b>Do</b> es el auxiliar de pregunta: no se traduce, solo señala que viene una interrogación."},
 {s:"B", ipa:"noʊ aɪ duː nɑːt wɜːrk aɪ ˈoʊnli ˈstʌdi", p:"nóu, ái du nat uérk. ái óunli stádi", b:[["No,","No,"],["I","yo"],["do not","no"],["work.","trabajo."],["I","Yo"],["only","solo"],["study.","estudio."]]},
 {s:"A", ipa:"aɪ wɜːrk ɪn ə smɔːl ˈɑːfɪs ɑːn ˈmʌndeɪz", p:"ái uérk in a smóol áafis on mándeis", b:[["I","Yo"],["work","trabajo"],["in","en"],["a","una"],["small","pequeña"],["office","oficina"],["on Mondays.","los lunes."]]},
 {s:"B", ipa:"ðæt ɪz ˈɪntrəstɪŋ ɪz jʊr klæs naʊ", p:"dat is íntrestin. is iór klas náu", b:[["That","Eso"],["is","es"],["interesting.","interesante."],["Is","¿Es"],["your","tu"],["class","clase"],["now?","ahora?"]]},
 {s:"A", ipa:"jes ɪt ɪz maɪ klæs ɪz æt naɪn əˈklɑːk", p:"yes, it is. mái klas is at náin oklók", b:[["Yes,","Sí,"],["it is.","lo es."],["My","Mi"],["class","clase"],["is","es"],["at","a"],["nine","las nueve"],["o'clock.","en punto."]]},
 {s:"B", ipa:"ɡʊd lʌk ˈserə siː juː ˈleɪtər", p:"gud lák, sára. síi iú léiter", b:[["Good luck,","Buena suerte,"],["Sarah.","Sarah."],["See you later!","¡Hasta luego!"]]},
 {s:"A", ipa:"θæŋk juː ˈdeɪvɪd ɡʊdˈbaɪ", p:"zánk iú, déivid. gudbái", b:[["Thank you,","Gracias,"],["David.","David."],["Goodbye!","¡Adiós!"]]},
 {s:"B", ipa:"ɡʊdˈbaɪ hæv ə ɡʊd deɪ", p:"gudbái! jav a gud déi", b:[["Goodbye!","¡Adiós!"],["Have a good day!","¡Que tengas un buen día!"]]}
];
DIALOGUE.forEach(l => { l.en = l.b.map(x => x[0]).join(" "); l.es = l.b.map(x => x[1]).join(" "); });

/* ============================================================
   LECTURA FLUIDA
   Dos párrafos que sólo usan estructuras ya enseñadas en la lección.
   El glosario cubre las palabras que el texto necesita y que no están
   en VOCAB ni en VERBS, para que toda palabra con contenido sea tocable.
   Mismo formato que VOCAB: [inglés, AFI, español, pronunciación figurada].
   ============================================================ */
const LECTURA = {
  titulo: "David and Sarah",
  entradilla: "David se presenta y habla de su amiga Sarah. Todo el texto usa el vocabulario y las estructuras de esta lección: verbo <i>to be</i>, presente simple y la <i>-s</i> de tercera persona.",
  parrafos: [
    "My name is David. I am twenty-two years old and I am from Honduras. I live in Tegucigalpa with my family. It is a beautiful city and I like it very much. I am a student at a language school. I study English and Spanish. My English class is at nine o'clock in the morning.",
    "Sarah is my friend. She is from Canada and she lives in Toronto. She is twenty-four years old. She is a student too, but she also works. She works in a small office on Mondays. Sarah is very kind. Every morning she says, \"Good morning, David! How are you?\" And I say, \"I am fine, thank you.\" Now we are good friends."
  ],
  glosario: [
    /* Formas verbales: van aquí y no en VERBS para que la tarjeta muestre
       también pronunciación, no sólo la traducción. */
    ["am","æm","soy, estoy","am"],
    ["is","ɪz","es, está","is"],
    ["are","ɑːr","eres, son, están","ar"],
    ["live","lɪv","vivo, vives","liv"],
    ["lives","lɪvz","vive","livs"],
    ["study","ˈstʌdi","estudio, estudias","stádi"],
    ["work","wɜːrk","trabajo, trabajas","uérk"],
    ["works","wɜːrks","trabaja","uérks"],
    /* Palabras gramaticales que el texto necesita */
    ["I","aɪ","yo","ái"],
    ["you","juː","tú, usted","iú"],
    ["a","ə","un, una","a"],
    ["the","ðə","el, la, los, las","da"],
    ["from","frʌm","de, desde","from"],
    ["good","ɡʊd","bueno, buena","gud"],
    ["thank","θæŋk","agradecer","zánk"],
    ["and","ænd","y","and"],
    ["with","wɪð","con","uid"],
    ["family","ˈfæməli","familia","fámili"],
    ["like","laɪk","gustar","láik"],
    ["much","mʌtʃ","mucho","mach"],
    ["language school","ˈlæŋɡwɪdʒ skuːl","escuela de idiomas","lánguich skúul"],
    ["school","skuːl","escuela","skúul"],
    ["friend","frend","amigo, amiga","frend"],
    ["friends","frendz","amigos, amigas","frends"],
    ["but","bʌt","pero","bat"],
    ["also","ˈɔːlsoʊ","también","ólsou"],
    ["kind","kaɪnd","amable","káind"],
    ["every","ˈevri","cada","évri"],
    ["say","seɪ","decir","séi"],
    ["says","sez","dice","ses"],
    ["she","ʃiː","ella","shii"],
    ["we","wiː","nosotros, nosotras","uii"],
    ["it","ɪt","ello, lo","it"],
    ["my","maɪ","mi","mái"],
    ["at","æt","en, a","at"],
    ["in","ɪn","en","in"],
    ["on","ɑːn","en (con días)","an"],
    ["old","oʊld","de edad","óuld"],
    ["years","jɪrz","años","íers"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["Mondays","ˈmʌndeɪz","los lunes","mándeis"],
    ["o'clock","əˈklɑːk","en punto","oklók"]
  ],
  preguntas: [
    { q:"Where does David live?",
      ops:["In Toronto","In Tegucigalpa","In Canada"], ok:1,
      pista:"Primer párrafo: «I live in Tegucigalpa with my family»." },
    { q:"When is David's English class?",
      ops:["At eight o'clock","In the afternoon","At nine o'clock"], ok:2,
      pista:"Última frase del primer párrafo." },
    { q:"Does Sarah work?",
      ops:["Yes, on Mondays","No, she only studies","Yes, every day"], ok:0,
      pista:"Segundo párrafo: «She works in a small office on Mondays»." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-01"] = {
  meta: {
    id: "a1-01",
    nivel: "A1",
    numero: 1,
    titulo: "Saludos y presentaciones",
    descriptor: "Puedo presentarme y presentar a otros, pedir y dar información personal básica sobre mi domicilio, mis pertenencias y las personas que conozco.",
    escena: "Sarah & David · cafetería del instituto",
    personajeIA: "Sarah",
    personajeAlumno: "David"
  },
  VOCAB: VOCAB, PRONKEY: PRONKEY, VERBS: VERBS, GRAMMAR: GRAMMAR,
  DIALOGUE: DIALOGUE, LECTURA: LECTURA
};
})();
