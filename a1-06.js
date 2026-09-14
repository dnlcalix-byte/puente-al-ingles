/* ============================================================
   LECCIÓN A1-06 · Rutina diaria
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Acciones de la mañana", items:[
    ["wake up","weɪk ʌp","despertarse","uéik ap"],["get up","ɡet ʌp","levantarse","guet ap"],
    ["take a shower","teɪk ə ˈʃaʊər","ducharse","téik a sháuar"],["brush my teeth","brʌʃ maɪ tiːθ","cepillarme los dientes","brash mái tíiz"],
    ["get dressed","ɡet drest","vestirse","guet drest"],["have breakfast","hæv ˈbrekfəst","desayunar","jav brékfast"],
    ["leave home","liːv hoʊm","salir de casa","líiv jóum"],["catch the bus","kætʃ ðə bʌs","tomar el bus","kach da bas"]
  ]},
  {g:"Acciones del día", items:[
    ["go to work","ɡoʊ tuː wɜːrk","ir al trabajo","góu tu uérk"],["start work","stɑːrt wɜːrk","empezar a trabajar","start uérk"],
    ["have lunch","hæv lʌntʃ","almorzar","jav lanch"],["finish","ˈfɪnɪʃ","terminar","fínish"],
    ["come home","kʌm hoʊm","volver a casa","kam jóum"],["do homework","duː ˈhoʊmwɜːrk","hacer la tarea","du jóumuerk"],
    ["have dinner","hæv ˈdɪnər","cenar","jav díner"],["watch TV","wɑːtʃ ˌtiː ˈviː","ver la tele","uách ti vi"],
    ["go to bed","ɡoʊ tuː bed","acostarse","góu tu bed"],["fall asleep","fɔːl əˈsliːp","quedarse dormido","fol aslíip"]
  ]},
  {g:"Con qué frecuencia", items:[
    ["always","ˈɔːlweɪz","siempre","ólueis"],["usually","ˈjuːʒuəli","normalmente","iúshuali"],
    ["often","ˈɔːfn","a menudo","ófn"],["sometimes","ˈsʌmtaɪmz","a veces","sámtaims"],
    ["hardly ever","ˈhɑːrdli ˈevər","casi nunca","járdli évar"],["never","ˈnevər","nunca","névar"],
    ["every day","ˈevri deɪ","todos los días","évri déi"],["once a week","wʌns ə wiːk","una vez por semana","uáns a uíik"],
    ["twice a week","twaɪs ə wiːk","dos veces por semana","tuáis a uíik"]
  ]},
  {g:"Describir la rutina", items:[
    ["routine","ruːˈtiːn","rutina","rutíin"],["tired","ˈtaɪərd","cansado","táiard"],
    ["free time","friː taɪm","tiempo libre","fríi táim"],["weekday","ˈwiːkdeɪ","día laborable","uíkdei"],
    ["at the same time","ət ðə seɪm taɪm","a la misma hora","at da séim táim"],["before","bɪˈfɔːr","antes de","bifór"],
    ["after","ˈæftər","después de","áfter"],["then","ðen","luego","den"],
    ["first","fɜːrst","primero","ferst"],["finally","ˈfaɪnəli","por último","fáinali"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","have &rarr; jav"],
  ["z","Lengua entre los dientes, sin voz.","teeth &rarr; tíiz"],
  ["sh","Como pedir silencio.","shower &rarr; sháuar"],
  ["ch","Como en «coche».","watch &rarr; uách"],
  ["sh con voz","En <i>usually</i>, una <i>sh</i> vibrada, como la <i>j</i> francesa.","usually &rarr; iúshuali"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","wake &rarr; uéik"],
  ["r final","Apenas se toca, nunca vibra.","never &rarr; névar"],
  ["íi úu óo","Vocal doble = vocal larga.","leave &rarr; líiv"],
  ["tilde","La sílaba fuerte. En <i>routine</i> cae al final.","routine &rarr; rutíin"]
];

const VERBS = [
  ["to get up","irr","get up · gets up","got up","will get up","levantarse"],
  ["to have","irr","have · has","had","will have","tener; tomar"],
  ["to go","irr","go · goes","went","will go","ir"],
  ["to start","reg","start · starts","started","will start","empezar"],
  ["to finish","reg","finish · finishes","finished","will finish","terminar"],
  ["to watch","reg","watch · watches","watched","will watch","ver, mirar"],
  ["to study","reg","study · studies","studied","will study","estudiar"],
  ["to catch","irr","catch · catches","caught","will catch","tomar, atrapar"],
  ["to leave","irr","leave · leaves","left","will leave","salir"],
  ["to come","irr","come · comes","came","will come","venir"],
  ["to sleep","irr","sleep · sleeps","slept","will sleep","dormir"]
];

const GRAMMAR = [
  {t:"El presente simple, completo", s:"present simple",
   p:"Es el tiempo de lo que se hace habitualmente. Sólo cambia en la tercera persona, que añade <b>-s</b>. Todo lo demás es el infinitivo pelado.",
   table:{head:["Persona","Afirmativo","Negativo","Pregunta"], rows:[
     ["I / you / we / they","I work","I don't work","Do you work?"],
     ["he / she / it","she works","she doesn't work","Does she work?"]
   ]},
   aviso:["Un solo sitio para la marca de persona","<span class='wrong'>She doesn't works.</span> &nbsp;&rarr;&nbsp; <span class='right'>She doesn't work.</span> Si <i>doesn't</i> ya lleva la <i>-s</i>, el verbo vuelve a su forma base. La marca va una vez, nunca dos."]},

  {t:"La ortografía de la tercera persona", s:"-s, -es, -ies",
   p:"La <b>-s</b> de <i>he/she/it</i> tiene tres formas según cómo termine el verbo.",
   table:{head:["Termina en","Se añade","Ejemplo"], rows:[
     ["caso general","-s","work &rarr; works"],
     ["-s, -sh, -ch, -x, -o","-es","watch &rarr; watches · go &rarr; goes"],
     ["consonante + y","-ies","study &rarr; studies"],
     ["vocal + y","-s","play &rarr; plays"]
   ]},
   aviso:["Olvidar la <i>-s</i> es el error número uno en A1","Se te entenderá igual, pero marca el nivel al instante. En el Speaking del IELTS lo notan desde la primera frase."]},

  {t:"Adverbios de frecuencia: dónde van", s:"always, usually, never…",
   p:"Van <b>antes del verbo principal</b>, pero <b>después de</b> <i>to be</i>. Es la única regla que hay que recordar, y es rígida.",
   table:{head:["Caso","Posición","Ejemplo"], rows:[
     ["verbo normal","antes","I always get up at six."],
     ["verbo to be","después","I am always tired."],
     ["con auxiliar","en medio","I don't usually work."]
   ]},
   aviso:["No van al final","<span class='wrong'>I get up early always.</span> &nbsp;&rarr;&nbsp; <span class='right'>I <b>always</b> get up early.</span> El español los mueve con libertad; el inglés no."]},

  {t:"Never ya es negativo", s:"never",
   p:"<b>Never</b> niega por sí solo. El verbo va en afirmativo, porque el inglés no admite doble negación.",
   chips:[["I never drink coffee","Nunca bebo café"],["She never works on Sunday","Nunca trabaja el domingo"],["I don't ever drink coffee","(alternativa válida)"]],
   aviso:["Doble negación prohibida","<span class='wrong'>I don't never drink coffee.</span> &nbsp;&rarr;&nbsp; <span class='right'>I never drink coffee.</span> En español «no bebo nunca» es correcto; en inglés, no."]},

  {t:"Preguntar por la rutina", s:"What time…? How often…?",
   p:"Dos preguntas que necesitarás a diario. Ambas usan el auxiliar <b>do / does</b>.",
   chips:[["What time do you get up?","¿A qué hora te levantas?"],["How often do you study?","¿Con qué frecuencia estudias?"],["When does she work?","¿Cuándo trabaja ella?"],["Do you always walk?","¿Siempre caminas?"]],
   aviso:["El auxiliar no desaparece","<span class='wrong'>What time you get up?</span> &nbsp;&rarr;&nbsp; <span class='right'>What time <b>do</b> you get up?</span> Sin <i>do</i> la pregunta no está formada."]},

  {t:"Ordenar el relato", s:"first, then, after that, finally",
   p:"Para contar una rutina en orden hacen falta conectores. Son los mismos que usarás en el Writing del IELTS para describir un proceso.",
   chips:[["First, I get up","Primero me levanto"],["Then I have breakfast","Luego desayuno"],["After that, I go to work","Después voy al trabajo"],["Finally, I go to bed","Por último me acuesto"]]}
];

/* Sarah (A) y David (B) comparan sus rutinas */
const DIALOGUE = [
 {s:"A", ipa:"wʌt taɪm duː juː ˈjuːʒuəli ɡet ʌp", p:"uát táim du iú iúshuali guet ap",
  b:[["What time","¿A qué hora"],["do you","—"],["usually","normalmente"],["get up?","te levantas?"]],
  n:"<b>Usually</b> va entre el auxiliar y el verbo. En español lo pondríamos al principio o al final; aquí su sitio es ése."},
 {s:"B", ipa:"aɪ ˈɔːlweɪz ɡet ʌp æt sɪks ɑːn ˈwiːkdeɪz", p:"ái ólueis guet ap at siks an uíkdeis",
  b:[["I","Yo"],["always","siempre"],["get up","me levanto"],["at","a"],["six","las seis"],["on weekdays.","entre semana."]]},
 {s:"A", ipa:"ðæts ˈɜːrli wʌt duː juː duː ferst", p:"dats érli. uát du iú du ferst",
  b:[["That is","Eso es"],["early.","temprano."],["What","¿Qué"],["do you do","haces"],["first?","primero?"]]},
 {s:"B", ipa:"ferst aɪ teɪk ə ˈʃaʊər ðen aɪ hæv ˈbrekfəst", p:"ferst ái téik a sháuar. den ái jav brékfast",
  b:[["First","Primero"],["I take a shower.","me ducho."],["Then","Luego"],["I have","tomo"],["breakfast.","el desayuno."]],
  n:"<b>Take a shower</b> y <b>have breakfast</b>: el inglés usa verbos comodín donde el español tiene un verbo propio, «ducharse» y «desayunar»."},
 {s:"A", ipa:"dəz jʊr ˈsɪstər ɡet ʌp æt ðə seɪm taɪm", p:"das iór síster guet ap at da séim táim",
  b:[["Does","¿"],["your sister","Tu hermana"],["get up","se levanta"],["at the same time?","a la misma hora?"]]},
 {s:"B", ipa:"noʊ ʃi ˈdʌznt ʃi ɡets ʌp æt ˈsevn", p:"nóu, shi dásnt. shi guets ap at sévn",
  b:[["No, she doesn't.","No, no se levanta."],["She","Ella"],["gets up","se levanta"],["at","a"],["seven.","las siete."]],
  n:"Dos formas seguidas: <b>doesn't get</b> sin ese, y <b>gets</b> con ese. La marca de tercera persona va una sola vez."},
 {s:"A", ipa:"haʊ duː juː ɡoʊ tuː skuːl", p:"jáu du iú góu tu skúul",
  b:[["How","¿Cómo"],["do you go","vas"],["to school?","a la escuela?"]]},
 {s:"B", ipa:"aɪ ˈjuːʒuəli wɔːk bʌt ˈsʌmtaɪmz aɪ kætʃ ðə bʌs", p:"ái iúshuali uók, bat sámtaims ái kach da bas",
  b:[["I","Yo"],["usually","normalmente"],["walk,","camino,"],["but","pero"],["sometimes","a veces"],["I catch","tomo"],["the bus.","el bus."]]},
 {s:"A", ipa:"haʊ ˈɔːfn duː juː stʌdi ˈɪŋɡlɪʃ", p:"jáu ófn du iú stádi ínglish",
  b:[["How often","¿Con qué frecuencia"],["do you study","estudias"],["English?","inglés?"]]},
 {s:"B", ipa:"ˈevri deɪ aɪ ˈnevər mɪs ə klæs", p:"évri déi. ái névar mis a klas",
  b:[["Every day.","Todos los días."],["I","Yo"],["never","nunca"],["miss","falto a"],["a class.","una clase."]],
  n:"<b>I never miss</b>, en afirmativo. <i>Never</i> ya es la negación, y el inglés no permite negar dos veces."},
 {s:"A", ipa:"aɪ æm ɪmˈprest aɪ ˈhɑːrdli ˈevər stʌdi æt naɪt", p:"ái am imprést. ái járdli évar stádi at náit",
  b:[["I am","Estoy"],["impressed.","impresionada."],["I","Yo"],["hardly ever","casi nunca"],["study","estudio"],["at night.","de noche."]]},
 {s:"B", ipa:"wen duː juː duː jʊr ˈhoʊmwɜːrk ðen", p:"uén du iú du iór jóumuerk den",
  b:[["When","¿Cuándo"],["do you do","haces"],["your homework","tu tarea"],["then?","entonces?"]],
  n:"<b>Do you do</b>: el primero es auxiliar y el segundo es el verbo «hacer». Se repiten y los dos son necesarios."},
 {s:"A", ipa:"ɪn ðə ˈæftərnuːn aɪ æm ˈɔːlweɪz ˈtaɪərd æt naɪt", p:"in da afternúun. ái am ólueis táiard at náit",
  b:[["In the afternoon.","Por la tarde."],["I am","Estoy"],["always","siempre"],["tired","cansada"],["at night.","de noche."]],
  n:"Con <i>to be</i> el adverbio va <b>después</b>: <b>I am always tired</b>, no <span class='wrong'>I always am tired</span>."},
 {s:"B", ipa:"wʌt taɪm duː juː hæv ˈdɪnər", p:"uát táim du iú jav díner",
  b:[["What time","¿A qué hora"],["do you have","cenas"],["dinner?","?"]]},
 {s:"A", ipa:"ˈjuːʒuəli æt ˈsevn ðen aɪ wɑːtʃ ˌtiː ˈviː fɔːr ən ˈaʊər", p:"iúshuali at sévn. den ái uách ti vi for an áuar",
  b:[["Usually","Normalmente"],["at seven.","a las siete."],["Then","Luego"],["I watch TV","veo la tele"],["for an hour.","una hora."]]},
 {s:"B", ipa:"ænd wʌt taɪm duː juː ɡoʊ tuː bed", p:"and uát táim du iú góu tu bed",
  b:[["And","¿Y"],["what time","a qué hora"],["do you go","te acuestas"],["to bed?","?"]]},
 {s:"A", ipa:"əˈbaʊt ɪˈlevn aɪ fɔːl əˈsliːp ˈvɛri fæst", p:"abáut ilévn. ái fol aslíip véri fast",
  b:[["About","Sobre"],["eleven.","las once."],["I","Me"],["fall asleep","duermo"],["very fast.","muy rápido."]]},
 {s:"B", ipa:"aɪ doʊnt aɪ riːd bɪˈfɔːr aɪ sliːp", p:"ái dóunt. ái ríid bifór ái slíip",
  b:[["I don't.","Yo no."],["I read","Leo"],["before","antes de"],["I sleep.","dormir."]]},
 {s:"A", ipa:"duː juː wɜːrk ɑːn ˈsætərdeɪz", p:"du iú uérk an sáterdeis",
  b:[["Do you work","¿Trabajas"],["on Saturdays?","los sábados?"]]},
 {s:"B", ipa:"noʊ maɪ ˈruːtiːn ɪz ˈdɪfrənt æt ðə ˈwiːkend", p:"nóu. mái rutíin is dífrent at da uíkend",
  b:[["No.","No."],["My","Mi"],["routine","rutina"],["is","es"],["different","diferente"],["at the weekend.","el fin de semana."]]},
 {s:"A", ipa:"wʌt duː juː duː ɪn jʊr friː taɪm", p:"uát du iú du in iór fríi táim",
  b:[["What","¿Qué"],["do you do","haces"],["in your free time?","en tu tiempo libre?"]]},
 {s:"B", ipa:"aɪ pleɪ ˈfʊtbɔːl twaɪs ə wiːk wɪð maɪ ˈkʌzn", p:"ái pléi fútbol tuáis a uíik uid mái kásn",
  b:[["I play","Juego"],["football","fútbol"],["twice a week","dos veces por semana"],["with my cousin.","con mi primo."]]},
 {s:"A", ipa:"ðæt saʊndz ɡreɪt aɪ ˈnevər pleɪ ˈeni spɔːrt", p:"dat sáunds gréit. ái névar pléi éni sport",
  b:[["That sounds","Eso suena"],["great.","genial."],["I","Yo"],["never","nunca"],["play","practico"],["any sport.","ningún deporte."]]},
 {s:"B", ipa:"kʌm wɪð ʌs ɑːn ˈsʌndeɪ wi stɑːrt æt naɪn", p:"kam uid as an sándei. ui start at náin",
  b:[["Come with us","Ven con nosotros"],["on Sunday.","el domingo."],["We start","Empezamos"],["at nine.","a las nueve."]]}
];

const LECTURA = {
  titulo: "Four routines, one street",
  entradilla: "Cuatro rutinas distintas, una por párrafo. Ésta es la lectura donde más se practica la <i>-s</i> de tercera persona: cuéntala mientras lees, porque aparece en casi todas las frases sobre Ana, Mr. Ortega y el abuelo.",
  parrafos: [
    "I always get up at six o'clock on weekdays. First I take a shower, then I have breakfast with my family. I usually walk to school, but sometimes I catch the bus when it is late. I never miss a class and I study English every day.",
    "My sister Ana gets up at seven, so she has breakfast alone. She takes the bus at half past seven and she starts work at eight. She finishes at one and she comes home for lunch. In the afternoon she rests, and at night she watches TV for an hour. She hardly ever goes to bed after eleven.",
    "Mr Ortega has a very different routine. He wakes up at five, he runs in the park for half an hour and then he drives to school. He arrives before everybody and he opens the classroom. He always says that a teacher never rests.",
    "My cousins Pablo and Nico study in the afternoon, so their mornings are free. They play football twice a week and they swim in the river on Sundays. My grandfather does not work any more: he reads in the garden every morning and he sleeps after lunch. We all have dinner together on Sunday, and that is the only hour of the week when nobody is busy."
  ],
  glosario: [
    ["get up","ɡet ʌp","me levanto","guet ap"],
    ["gets up","ɡets ʌp","se levanta","guets ap"],
    ["wakes up","weɪks ʌp","se despierta","uéiks ap"],
    ["take","teɪk","tomo","téik"],
    ["takes","teɪks","toma","téiks"],
    ["walk","wɔːk","camino","uók"],
    ["catch","kætʃ","tomo","kach"],
    ["miss","mɪs","falto a","mis"],
    ["starts","stɑːrts","empieza","starts"],
    ["finishes","ˈfɪnɪʃɪz","termina","fínishes"],
    ["comes","kʌmz","vuelve","kams"],
    ["rests","rests","descansa","rests"],
    ["watches","ˈwɑːtʃɪz","ve","uáchis"],
    ["goes","ɡoʊz","se va","góus"],
    ["runs","rʌnz","corre","rans"],
    ["drives","draɪvz","conduce","dráivs"],
    ["arrives","əˈraɪvz","llega","aráivs"],
    ["opens","ˈoʊpənz","abre","óupens"],
    ["says","sez","dice","ses"],
    ["play","pleɪ","juegan","pléi"],
    ["swim","swɪm","nadan","suím"],
    ["reads","riːdz","lee","ríids"],
    ["sleeps","sliːps","duerme","slíips"],
    ["study","ˈstʌdi","estudian","stádi"],
    ["shower","ˈʃaʊər","ducha","sháuar"],
    ["breakfast","ˈbrekfəst","desayuno","brékfast"],
    ["lunch","lʌntʃ","almuerzo","lanch"],
    ["dinner","ˈdɪnər","cena","díner"],
    ["routine","ruːˈtiːn","rutina","rutíin"],
    ["routines","ruːˈtiːnz","rutinas","rutíins"],
    ["weekdays","ˈwiːkdeɪz","días laborables","uíkdeis"],
    ["mornings","ˈmɔːrnɪŋz","mañanas","mórnings"],
    ["classroom","ˈklæsruːm","aula","klásrum"],
    ["football","ˈfʊtbɔːl","fútbol","fútbol"],
    ["river","ˈrɪvər","río","rívar"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],
    ["park","pɑːrk","parque","park"],
    ["alone","əˈloʊn","sola","alóun"],
    ["together","təˈɡeðər","juntos","tuguéder"],
    ["free","friː","libres","fríi"],
    ["busy","ˈbɪzi","ocupado","bísi"],
    ["different","ˈdɪfrənt","diferente","dífrent"],
    ["hardly ever","ˈhɑːrdli ˈevər","casi nunca","járdli évar"],
    ["twice a week","twaɪs ə wiːk","dos veces por semana","tuáis a uíik"],
    ["half an hour","hæf ən ˈaʊər","media hora","jaf an áuar"],
    ["half past","hæf pæst","y media","jaf past"],
    ["any more","ˈeni mɔːr","ya no","éni mor"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["Sundays","ˈsʌndeɪz","los domingos","sándeis"],
    ["late","leɪt","tarde","léit"]
  ],
  preguntas: [
    { q:"Why does Ana have breakfast alone?",
      ops:["Because she gets up one hour after David","Because she does not like her family","Because she works at night"], ok:0,
      pista:"Compara la hora del primer párrafo con la del segundo." },
    { q:"What does Mr Ortega do before he drives to school?",
      ops:["He opens the classroom","He runs in the park","He watches TV"], ok:1,
      pista:"Tercer párrafo: se levanta a las cinco y hace algo durante media hora." },
    { q:"When is nobody in the family busy?",
      ops:["On Sunday, at dinner","On Saturday morning","Every night at eleven"], ok:0,
      pista:"Es la última frase del texto." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-06"] = {
  meta: {
    id: "a1-06", nivel: "A1", numero: 6,
    titulo: "Rutina diaria",
    descriptor: "Puedo describir con frases sencillas mi rutina diaria, decir con qué frecuencia hago las cosas y preguntar por la rutina de otros.",
    escena: "Sarah & David · comparando sus rutinas en el descanso",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
