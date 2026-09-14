/* ============================================================
   LECCIÓN A1-03 · Números, hora y fecha
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Números 11–100", items:[
    ["eleven","ɪˈlevn","once","ilévn"],["twelve","twelv","doce","tuélv"],
    ["thirteen","ˌθɜːrˈtiːn","trece","zertíin"],["fifteen","ˌfɪfˈtiːn","quince","fiftíin"],
    ["eighteen","ˌeɪˈtiːn","dieciocho","eitíin"],["twenty","ˈtwenti","veinte","tuénti"],
    ["thirty","ˈθɜːrti","treinta","zérti"],["forty","ˈfɔːrti","cuarenta","fórti"],
    ["fifty","ˈfɪfti","cincuenta","fífti"],["sixty","ˈsɪksti","sesenta","síksti"],
    ["a hundred","ə ˈhʌndrəd","cien","a jándred"]
  ]},
  {g:"La hora", items:[
    ["o'clock","əˈklɑːk","en punto","oklók"],["half past","hæf pæst","y media","jaf past"],
    ["quarter past","ˈkwɔːrtər pæst","y cuarto","kuórter past"],["quarter to","ˈkwɔːrtər tuː","menos cuarto","kuórter tu"],
    ["hour","ˈaʊər","hora","áuar"],["minute","ˈmɪnɪt","minuto","mínit"],
    ["o'clock sharp","əˈklɑːk ʃɑːrp","en punto exacto","oklók sharp"],
    ["a.m.","ˌeɪ ˈem","de la mañana","éi em"],["p.m.","ˌpiː ˈem","de la tarde o noche","pi em"]
  ]},
  {g:"Días de la semana", items:[
    ["Monday","ˈmʌndeɪ","lunes","mándei"],["Tuesday","ˈtuːzdeɪ","martes","túusdei"],
    ["Wednesday","ˈwenzdeɪ","miércoles","uénsdei"],["Thursday","ˈθɜːrzdeɪ","jueves","zérsdei"],
    ["Friday","ˈfraɪdeɪ","viernes","fráidei"],["Saturday","ˈsætərdeɪ","sábado","sáterdei"],
    ["Sunday","ˈsʌndeɪ","domingo","sándei"],["weekend","ˈwiːkend","fin de semana","uíkend"],
    ["week","wiːk","semana","uíik"]
  ]},
  {g:"Meses y fechas", items:[
    ["January","ˈdʒænjueri","enero","yániueri"],["February","ˈfebrueri","febrero","fébrueri"],
    ["March","mɑːrtʃ","marzo","march"],["April","ˈeɪprəl","abril","éipril"],
    ["May","meɪ","mayo","méi"],["June","dʒuːn","junio","yúun"],
    ["July","dʒʊˈlaɪ","julio","yulái"],["month","mʌnθ","mes","manz"],
    ["year","jɪr","año","íer"],["birthday","ˈbɜːrθdeɪ","cumpleaños","bérzdei"]
  ]},
  {g:"Momentos del día", items:[
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],["afternoon","ˌæftərˈnuːn","tarde","afternúun"],
    ["evening","ˈiːvnɪŋ","tarde-noche","íivning"],["night","naɪt","noche","náit"],
    ["today","təˈdeɪ","hoy","tudéi"],["tomorrow","təˈmɑːroʊ","mañana (día)","tumórou"],
    ["yesterday","ˈjestərdeɪ","ayer","iésterdei"],["early","ˈɜːrli","temprano","érli"],
    ["late","leɪt","tarde","léit"],["now","naʊ","ahora","náu"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave. <b>No</b> es la <i>j</i> de «jamón».","hundred &rarr; jándred"],
  ["z","Lengua <b>entre los dientes</b>, sin voz. Aparece en todos los ordinales.","thirty &rarr; zérti"],
  ["d","En <i>Wednesday</i> no: ahí la <i>d</i> es normal y la primera <b>no se pronuncia</b>.","Wednesday &rarr; uénsdei"],
  ["y","Como la <i>y</i> de «yo», un poco más marcada.","January &rarr; yániueri"],
  ["v","Labio de abajo contra los dientes de arriba.","eleven &rarr; ilévn"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","Wednesday &rarr; uénsdei"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","morning &rarr; mórning"],
  ["íi úu óo","Vocal doble = vocal <b>larga</b>.","thirteen &rarr; zertíin"],
  ["tilde","Sílaba fuerte. Ojo: <i>thirteen</i> la lleva al final y <i>thirty</i> al principio.","fifteen / fifty"]
];

const VERBS = [
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to start","reg","start · starts","started","will start","empezar"],
  ["to finish","reg","finish · finishes","finished","will finish","terminar"],
  ["to open","reg","open · opens","opened","will open","abrir"],
  ["to close","reg","close · closes","closed","will close","cerrar"],
  ["to wait","reg","wait · waits","waited","will wait","esperar"],
  ["to arrive","reg","arrive · arrives","arrived","will arrive","llegar"],
  ["to leave","irr","leave · leaves","left","will leave","salir, irse"],
  ["to meet","irr","meet · meets","met","will meet","quedar, encontrarse"],
  ["to begin","irr","begin · begins","began","will begin","comenzar"],
  ["to take","irr","take · takes","took","will take","tomar, tardar"]
];

const GRAMMAR = [
  {t:"Preguntar y decir la hora", s:"What time is it?",
   p:"La pregunta es fija: <b>What time is it?</b> La respuesta empieza siempre por <b>It's</b>, aunque en español no digamos ningún sujeto.",
   table:{head:["Reloj","Se dice","Español"], rows:[
     ["3:00","It's three o'clock.","Son las tres."],
     ["3:15","It's quarter past three.","Son las tres y cuarto."],
     ["3:30","It's half past three.","Son las tres y media."],
     ["3:45","It's quarter to four.","Son las cuatro menos cuarto."],
     ["3:20","It's three twenty.","Son las tres y veinte."]
   ]},
   aviso:["El sujeto <i>it</i> es obligatorio","<span class='wrong'>Is three o'clock.</span> &nbsp;&rarr;&nbsp; <span class='right'>It's three o'clock.</span> El inglés no deja frases sin sujeto, ni siquiera para la hora."]},

  {t:"Menos cuarto se dice «para»", s:"quarter to",
   p:"En <b>quarter to four</b>, el inglés mira <i>hacia</i> la hora siguiente: «un cuarto para las cuatro». El español resta a la hora que viene; el inglés apunta a ella. El resultado es el mismo, pero la hora que se nombra es la misma en ambos idiomas: las cuatro.",
   chips:[["quarter past six","las seis y cuarto"],["quarter to seven","las siete menos cuarto"],["ten to nine","las nueve menos diez"],["twenty past two","las dos y veinte"]]},

  {t:"Preposiciones de tiempo", s:"at, on, in",
   p:"Cada una tiene su territorio y no se intercambian. Ésta es la tabla que hay que memorizar en A1.",
   table:{head:["Preposición","Se usa con","Ejemplo"], rows:[
     ["at","horas y momentos puntuales","at six o'clock, at night"],
     ["on","días y fechas","on Monday, on May 5th"],
     ["in","meses, años, partes del día","in July, in the morning"]
   ]},
   aviso:["La excepción que siempre se falla","Se dice <b>in the morning</b>, <b>in the afternoon</b>, <b>in the evening</b>… pero <b>at night</b>. Es la única del grupo que lleva <i>at</i>."]},

  {t:"Días y meses van en mayúscula", s:"Monday, January",
   p:"En inglés los días de la semana y los meses se escriben <b>siempre con mayúscula</b>, estén donde estén en la frase. En español van en minúscula, así que es un error casi automático.",
   chips:[["on Monday","el lunes"],["in January","en enero"],["next Friday","el viernes que viene"],["every Sunday","todos los domingos"]],
   aviso:["Error de escritura, no de habla","<span class='wrong'>I work on monday in january.</span> &nbsp;&rarr;&nbsp; <span class='right'>I work on <b>M</b>onday in <b>J</b>anuary.</span> No se oye, pero en el Writing del IELTS se penaliza."]},

  {t:"Los números ordinales", s:"first, second, third…",
   p:"Para las fechas no se usa <i>one, two, three</i> sino <b>first, second, third</b>. Del cuarto en adelante casi todos se forman con <b>-th</b>; los tres primeros son irregulares.",
   table:{head:["Número","Ordinal","Se lee"], rows:[
     ["1","first (1st)","ferst"],
     ["2","second (2nd)","sécond"],
     ["3","third (3rd)","zerd"],
     ["4","fourth (4th)","forz"],
     ["5","fifth (5th)","fifz"],
     ["20","twentieth (20th)","tuéntiez"]
   ]}},

  {t:"Trece o treinta: el acento decide", s:"-teen vs -ty",
   p:"<b>Thirteen</b> y <b>thirty</b> se distinguen sólo por dónde cae el golpe de voz. Los acabados en <i>-teen</i> lo llevan al final; los acabados en <i>-ty</i>, al principio.",
   chips:[["thir<b>TEEN</b> (13)","zertíin"],["<b>THIR</b>ty (30)","zérti"],["four<b>TEEN</b> (14)","fortíin"],["<b>FOR</b>ty (40)","fórti"]],
   aviso:["Confusión muy cara en el IELTS Listening","Si te dictan un precio o una hora y confundes <i>fifteen</i> con <i>fifty</i>, pierdes el punto entero. Practica esta pareja en voz alta hasta que la oigas sin dudar."]}
];

/* Sarah (A, la IA) y David (B, el estudiante) quedan para estudiar */
const DIALOGUE = [
 {s:"A", ipa:"hɑɪ ˈdeɪvɪd wʌt taɪm ɪz ɪt", p:"jái déivid. uát táim is it",
  b:[["Hi, David.","Hola, David."],["What time is it?","¿Qué hora es?"]]},
 {s:"B", ipa:"ɪts kwɔːrtər pæst tuː", p:"its kuórter past túu",
  b:[["It is","Son"],["quarter past","y cuarto"],["two.","las dos."]],
  n:"Fíjate en el orden: el inglés dice primero los minutos y después la hora. <b>Quarter past two</b> = «las dos y cuarto»."},
 {s:"A", ipa:"wen dəz ðə ˈɪŋɡlɪʃ klæs stɑːrt", p:"uén das da ínglish klas start",
  b:[["When","¿Cuándo"],["does","—"],["the","la"],["English class","clase de inglés"],["start?","empieza?"]],
  n:"<b>Does</b> es el auxiliar de pregunta y no se traduce. El verbo principal vuelve al infinitivo: <i>start</i>, no <i>starts</i>."},
 {s:"B", ipa:"ɪt stɑːrts æt θriː əˈklɑːk", p:"it starts at zríi oklók",
  b:[["It","Ella"],["starts","empieza"],["at","a"],["three","las tres"],["o'clock.","en punto."]]},
 {s:"A", ipa:"ˈperfɪkt wi hæv ˈθɜːrti ˈmɪnɪts", p:"pérfect. ui jav zérti mínits",
  b:[["Perfect.","Perfecto."],["We","Nosotros"],["have","tenemos"],["thirty","treinta"],["minutes.","minutos."]]},
 {s:"B", ipa:"ˈθɜːrti ɔːr ˌθɜːrˈtiːn", p:"zérti or zertíin",
  b:[["Thirty","¿Treinta"],["or","o"],["thirteen?","trece?"]],
  n:"La diferencia está sólo en el acento: <b>THIR</b>ty (30) y thir<b>TEEN</b> (13). Preguntar cuando hay duda es lo normal, también entre nativos."},
 {s:"A", ipa:"ˈθɜːrti ðə wʌn wɪð ðə ˈæksent ɑːn ðə ferst", p:"zérti. da uán uid da áksent an da ferst",
  b:[["Thirty.","Treinta."],["The one","La que lleva"],["with the accent","el acento"],["on the first.","en la primera."]]},
 {s:"B", ipa:"ɡʊd ɪz ðer ə test ɑːn ˈmʌndeɪ", p:"gud. is der a test an mándei",
  b:[["Good.","Bien."],["Is there","¿Hay"],["a","un"],["test","examen"],["on","el"],["Monday?","lunes?"]]},
 {s:"A", ipa:"noʊ ðə test ɪz ɑːn ˈfraɪdeɪ ðə fɪfθ", p:"nóu. da test is an fráidei, da fifz",
  b:[["No.","No."],["The test","El examen"],["is","es"],["on","el"],["Friday,","viernes,"],["the fifth.","día cinco."]],
  n:"Con días se usa <b>on</b>: <i>on Friday</i>. Y la fecha se dice con ordinal: <b>the fifth</b>, no <i>the five</i>."},
 {s:"B", ipa:"ˈfraɪdeɪ ðæts maɪ ˈbɜːrθdeɪ", p:"fráidei. dats mái bérzdei",
  b:[["Friday.","El viernes."],["That is","Ese es"],["my","mi"],["birthday!","cumpleaños!"]]},
 {s:"A", ipa:"ˈrɪəli haʊ oʊld ɑːr juː ɑːn ˈfraɪdeɪ", p:"ríili. jáu óuld ar iú an fráidei",
  b:[["Really!","¡En serio!"],["How old","¿Cuántos años"],["are you","tendrás"],["on Friday?","el viernes?"]]},
 {s:"B", ipa:"aɪ æm ˈtwenti θriː ɑːn maɪ ˈbɜːrθdeɪ", p:"ái am tuénti zríi an mái bérzdei",
  b:[["I am","Tengo"],["twenty-three","veintitrés"],["on","en"],["my birthday.","mi cumpleaños."]]},
 {s:"A", ipa:"ˈhæpi ˈbɜːrθdeɪ ɪn ədˈvæns duː juː hæv ə ˈpɑːrti", p:"jápi bérzdei in advans. du iú jav a párti",
  b:[["Happy birthday","Feliz cumpleaños"],["in advance!","por adelantado!"],["Do you have","¿Tienes"],["a","una"],["party?","fiesta?"]]},
 {s:"B", ipa:"jes æt eɪt ɪn ðə ˈiːvnɪŋ æt maɪ haʊs", p:"yes, at éit in da íivning, at mái jáus",
  b:[["Yes,","Sí,"],["at","a"],["eight","las ocho"],["in the evening,","de la noche,"],["at my house.","en mi casa."]],
  n:"Tres preposiciones seguidas: <b>at</b> para la hora, <b>in</b> para la parte del día, <b>at</b> para el lugar. Cada una tiene su territorio."},
 {s:"A", ipa:"aɪ æm ˈbɪzi ɪn ðə ˈæftərnuːn bʌt aɪ æm friː æt naɪt", p:"ái am bísi in da afternúun, bat ái am fríi at náit",
  b:[["I am","Estoy"],["busy","ocupada"],["in the afternoon,","por la tarde,"],["but","pero"],["I am","estoy"],["free","libre"],["at night.","por la noche."]],
  n:"Aquí está la excepción: <i>in the afternoon</i> pero <b>at night</b>. Es la única parte del día que lleva <i>at</i>."},
 {s:"B", ipa:"ˈperfɪkt kʌm æt eɪt ɔːr hæf pæst eɪt", p:"pérfect. kam at éit or jaf past éit",
  b:[["Perfect.","Perfecto."],["Come","Ven"],["at","a"],["eight","las ocho"],["or","o"],["half past eight.","las ocho y media."]]},
 {s:"A", ipa:"wʌt ˈmʌnθ ɪz ɪt naʊ aɪ ɔːlweɪz fərˈɡet", p:"uát manz is it náu. ái ólueis forguét",
  b:[["What month","¿Qué mes"],["is it","es"],["now?","ahora?"],["I always","Yo siempre"],["forget.","lo olvido."]]},
 {s:"B", ipa:"ɪts dʒuːn ðə ˈfɜːrst ɪz ɑːn ˈsʌndeɪ", p:"its yúun. da ferst is an sándei",
  b:[["It is","Es"],["June.","junio."],["The first","El día uno"],["is","es"],["on","el"],["Sunday.","domingo."]]},
 {s:"A", ipa:"aɪ siː duː juː wɜːrk ɑːn ˈsætərdeɪz", p:"ái síi. du iú uérk an sáterdeis",
  b:[["I see.","Ya veo."],["Do you work","¿Trabajas"],["on Saturdays?","los sábados?"]]},
 {s:"B", ipa:"noʊ aɪ ˈstʌdi ˈevri ˈsætərdeɪ ˈmɔːrnɪŋ", p:"nóu. ái stádi évri sáterdei mórning",
  b:[["No.","No."],["I","Yo"],["study","estudio"],["every","cada"],["Saturday","sábado"],["morning.","por la mañana."]]},
 {s:"A", ipa:"ðæts ˈɜːrli duː juː weɪk ʌp æt sɪks", p:"dats érli. du iú uéik ap at siks",
  b:[["That is","Eso es"],["early.","temprano."],["Do you wake up","¿Te levantas"],["at six?","a las seis?"]]},
 {s:"B", ipa:"jes aɪ duː ðə klæs bɪˈɡɪnz æt ˈsevn ˈθɜːrti", p:"yes, ái du. da klas biguíns at sévn zérti",
  b:[["Yes,","Sí,"],["I do.","así es."],["The class","La clase"],["begins","comienza"],["at","a"],["seven thirty.","las siete y media."]]},
 {s:"A", ipa:"oʊˈkeɪ siː juː ɑːn ˈfraɪdeɪ æt eɪt", p:"oukéi. síi iú an fráidei at éit",
  b:[["Okay.","De acuerdo."],["See you","Nos vemos"],["on Friday","el viernes"],["at eight!","a las ocho!"]]},
 {s:"B", ipa:"ɡreɪt doʊnt bi leɪt ˈserə", p:"gréit. dóunt bi léit, sára",
  b:[["Great.","Genial."],["Don't be","No llegues"],["late,","tarde,"],["Sarah!","Sarah!"]]}
];

const LECTURA = {
  titulo: "Everybody's timetable",
  entradilla: "Los horarios de todo el barrio. Cada párrafo habla de una persona distinta, así que verás la hora y los días con el verbo en todas sus formas: <i>I start</i>, <i>she finishes</i>, <i>he opens</i>, <i>they study</i>, <i>we meet</i>.",
  parrafos: [
    "My week starts on Monday. I wake up at six o'clock in the morning and my English class begins at seven thirty. The class finishes at nine. On Tuesday and Thursday I work in the afternoon, from two o'clock to six.",
    "My sister Ana gets up at seven, one hour after me. She works part-time in a small school and she finishes at one o'clock. Mr Ortega, our teacher, arrives at seven every day. He opens the classroom, he waits for us and he never starts late.",
    "My cousins Pablo and Nico study in the afternoon. They begin at two and they finish at six, so they sleep until ten in the morning. On Saturdays we meet at the river at nine o'clock. We are always there before them: they arrive late every time.",
    "This month is June and my birthday is on Friday the fifth. There is a party at my house at eight o'clock at night. Ana comes at seven and she helps me. Mrs Castro closes her shop at nine, so she arrives after the others. Everybody is here before ten."
  ],
  glosario: [
    ["starts","stɑːrts","empieza","starts"],
    ["start","stɑːrt","empezar","start"],
    ["begins","bɪˈɡɪnz","empieza","biguíns"],
    ["begin","bɪˈɡɪn","empiezan","biguín"],
    ["finishes","ˈfɪnɪʃɪz","termina","fínishes"],
    ["finish","ˈfɪnɪʃ","terminan","fínish"],
    ["wake up","weɪk ʌp","despertarse","uéik ap"],
    ["gets up","ɡets ʌp","se levanta","guets ap"],
    ["arrives","əˈraɪvz","llega","aráivs"],
    ["arrive","əˈraɪv","llegan","aráiv"],
    ["opens","ˈoʊpənz","abre","óupens"],
    ["closes","ˈkloʊzɪz","cierra","klóusis"],
    ["waits","weɪts","espera","uéits"],
    ["meet","miːt","quedamos","míit"],
    ["study","ˈstʌdi","estudian","stádi"],
    ["works","wɜːrks","trabaja","uérks"],
    ["work","wɜːrk","trabajo","uérk"],
    ["sleep","sliːp","duermen","slíip"],
    ["helps","helps","ayuda","jelps"],
    ["comes","kʌmz","viene","kams"],
    ["timetable","ˈtaɪmteɪbl","horario","táimteibl"],
    ["classroom","ˈklæsruːm","aula","klásrum"],
    ["teacher","ˈtiːtʃər","profesor","tíicher"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["shop","ʃɑːp","tienda","shap"],
    ["river","ˈrɪvər","río","rívar"],
    ["party","ˈpɑːrti","fiesta","párti"],
    ["birthday","ˈbɜːrθdeɪ","cumpleaños","bérzdei"],
    ["o'clock","əˈklɑːk","en punto","oklók"],
    ["thirty","ˈθɜːrti","y media","zérti"],
    ["hour","ˈaʊər","hora","áuar"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["afternoon","ˌæftərˈnuːn","tarde","afternúun"],
    ["night","naɪt","noche","náit"],
    ["Monday","ˈmʌndeɪ","lunes","mándei"],
    ["Tuesday","ˈtuːzdeɪ","martes","túusdei"],
    ["Thursday","ˈθɜːrzdeɪ","jueves","zérsdei"],
    ["Friday","ˈfraɪdeɪ","viernes","fráidei"],
    ["Saturdays","ˈsætərdeɪz","los sábados","sáterdeis"],
    ["June","dʒuːn","junio","yúun"],
    ["fifth","fɪfθ","día cinco","fifz"],
    ["part-time","ˌpɑːrt ˈtaɪm","medio tiempo","part táim"],
    ["until","ənˈtɪl","hasta","antíl"],
    ["late","leɪt","tarde","léit"],
    ["others","ˈʌðərz","los demás","áders"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["every time","ˈevri taɪm","siempre","évri táim"],
    ["week","wiːk","semana","uíik"],
    ["month","mʌnθ","mes","manz"]
  ],
  preguntas: [
    { q:"What time does Ana get up?",
      ops:["At six","At seven","At ten"], ok:1,
      pista:"Segundo párrafo: se levanta una hora después que David." },
    { q:"Why do Pablo and Nico sleep until ten?",
      ops:["Because they study in the afternoon","Because they work at night","Because they are lazy"], ok:0,
      pista:"Tercer párrafo: su horario de clase empieza a las dos." },
    { q:"Why does Mrs Castro arrive after the others?",
      ops:["Because she lives far away","Because she closes her shop at nine","Because she does not like parties"], ok:1,
      pista:"Último párrafo: la razón está en su horario de trabajo." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-03"] = {
  meta: {
    id: "a1-03", nivel: "A1", numero: 3,
    titulo: "Números, hora y fecha",
    descriptor: "Puedo comprender y utilizar expresiones cotidianas de uso muy frecuente relacionadas con el tiempo, los horarios y las fechas.",
    escena: "Sarah & David · pasillo del instituto, antes de clase",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
