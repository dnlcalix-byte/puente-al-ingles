/* ============================================================
   LECCIÓN A1-15 · El fin de semana (pasado regular)
   Reparto: Mrs. Castro, la vecina de la tienda, el lunes por la mañana.
   La lectura recorre yo, él, ella, nosotros y ellos en pasado.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Cuándo pasó", items:[
    ["yesterday","ˈjestərdeɪ","ayer","iésterdei"],["last night","læst naɪt","anoche","last náit"],
    ["last week","læst wiːk","la semana pasada","last uíik"],["last weekend","læst ˈwiːkend","el fin de semana pasado","last uíkend"],
    ["two days ago","tuː deɪz əˈɡoʊ","hace dos días","tu déis agóu"],["this morning","ðɪs ˈmɔːrnɪŋ","esta mañana","dis mórning"],
    ["then","ðen","entonces","den"],["after that","ˈæftər ðæt","después de eso","áfter dat"],
    ["before","bɪˈfɔːr","antes","bifór"],["finally","ˈfaɪnəli","por fin","fáinali"]
  ]},
  {g:"Verbos del fin de semana", items:[
    ["visited","ˈvɪzɪtɪd","visité","vísitid"],["watched","wɑːtʃt","vi","uácht"],
    ["played","pleɪd","jugué","pléid"],["worked","wɜːrkt","trabajé","uérkt"],
    ["walked","wɔːkt","caminé","uókt"],["cooked","kʊkt","cociné","kukt"],
    ["cleaned","kliːnd","limpié","klíind"],["helped","helpt","ayudé","jelpt"],
    ["listened","ˈlɪsnd","escuché","lísnd"],["studied","ˈstʌdid","estudié","stádid"],
    ["danced","dænst","bailé","danst"],["rested","ˈrestɪd","descansé","réstid"]
  ]},
  {g:"El fin de semana", items:[
    ["party","ˈpɑːrti","fiesta","párti"],["beach","biːtʃ","playa","bíich"],
    ["river","ˈrɪvər","río","rívar"],["match","mætʃ","partido","mach"],
    ["concert","ˈkɑːnsərt","concierto","kánsert"],["birthday","ˈbɜːrθdeɪ","cumpleaños","bérzdei"],
    ["guest","ɡest","invitado","guest"],["neighbour","ˈneɪbər","vecino","néibar"],
    ["noise","nɔɪz","ruido","nóis"],["fun","fʌn","diversión","fan"]
  ]},
  {g:"Cómo estuvo", items:[
    ["was","wʌz","era, estuvo","uás"],["were","wɜːr","eran, estuvieron","uér"],
    ["great","ɡreɪt","genial","gréit"],["awful","ˈɔːfl","horrible","óful"],
    ["tired","ˈtaɪərd","cansado","táiard"],["happy","ˈhæpi","feliz","jápi"],
    ["late","leɪt","tarde","léit"],["quiet","ˈkwaɪət","tranquilo","kuáiet"],
    ["busy","ˈbɪzi","ocupado","bísi"],["How was it?","haʊ wʌz ɪt","¿qué tal estuvo?","jáu uás it"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","how &rarr; jáu"],
  ["z","Lengua entre los dientes, sin voz.","birthday &rarr; bérzdei"],
  ["ch","Como en «coche».","beach &rarr; bíich"],
  ["sh","Como pedir silencio.","washed &rarr; uásht"],
  ["-ed = t","Tras sonido sordo (<i>k, p, s, ch, sh, f</i>) la <i>-ed</i> suena <b>t</b>.","worked &rarr; uérkt"],
  ["-ed = d","Tras sonido sonoro o vocal, suena <b>d</b>.","played &rarr; pléid"],
  ["-ed = id","Sólo tras <i>t</i> o <i>d</i> se añade una sílaba.","visited &rarr; vísitid"],
  ["v","Labio de abajo contra los dientes de arriba.","visited &rarr; vísitid"],
  ["r final","Apenas se toca, nunca vibra.","river &rarr; rívar"]
];

const VERBS = [
  ["to work","reg","work · works","worked","will work","trabajar"],
  ["to play","reg","play · plays","played","will play","jugar"],
  ["to watch","reg","watch · watches","watched","will watch","ver"],
  ["to visit","reg","visit · visits","visited","will visit","visitar"],
  ["to clean","reg","clean · cleans","cleaned","will clean","limpiar"],
  ["to cook","reg","cook · cooks","cooked","will cook","cocinar"],
  ["to help","reg","help · helps","helped","will help","ayudar"],
  ["to listen","reg","listen · listens","listened","will listen","escuchar"],
  ["to study","reg","study · studies","studied","will study","estudiar"],
  ["to dance","reg","dance · dances","danced","will dance","bailar"],
  ["to be","irr","am / is · are","was / were","will be","ser, estar"]
];

const GRAMMAR = [
  {t:"El pasado simple regular", s:"-ed para todas las personas",
   p:"Aquí el inglés es mucho más fácil que el español: el pasado regular se forma añadiendo <b>-ed</b>, y es <b>igual para todas las personas</b>. No hay conjugación que memorizar.",
   table:{head:["Persona","Presente","Pasado"], rows:[
     ["I","I work","I worked"],
     ["you","you work","you worked"],
     ["he / she","he works","he worked"],
     ["we / they","we work","we worked"]
   ]},
   aviso:["Desaparece la <i>-s</i> de tercera persona","En pasado no hay <i>works</i> ni nada parecido: <b>he worked</b>, igual que <i>I worked</i>. La única forma es <i>-ed</i>."]},

  {t:"La ortografía del -ed", s:"worked, lived, studied, stopped",
   p:"Cuatro reglas, las mismas que ya viste con el <i>-ing</i>.",
   table:{head:["Regla","Ejemplo"], rows:[
     ["Caso general: +ed","work &rarr; worked"],
     ["Termina en -e: sólo +d","live &rarr; lived"],
     ["Consonante + y: -ied","study &rarr; studied"],
     ["Vocal + consonante tónica: se dobla","stop &rarr; stopped"]
   ]}},

  {t:"Las tres pronunciaciones del -ed", s:"/t/ /d/ /ɪd/",
   p:"Se escribe siempre igual pero se pronuncia de tres maneras. Esto <b>no es un detalle</b>: es de lo que más mide el IELTS Listening y lo que más marca el acento al hablar.",
   table:{head:["Suena","Cuándo","Ejemplos"], rows:[
     ["t","tras k, p, s, ch, sh, f","worked, helped, washed, danced"],
     ["d","tras vocal o sonido sonoro","played, cleaned, listened, lived"],
     ["id","sólo tras t o d","visited, wanted, rested, needed"]
   ]},
   aviso:["Sólo <i>-id</i> añade una sílaba","<b>worked</b> tiene una sílaba, no dos: «uérkt», nunca <span class='wrong'>uórked</span>. Únicamente <i>visited</i> y sus compañeros ganan sílaba."]},

  {t:"La negación y la pregunta en pasado", s:"didn't / did",
   p:"Aparece un auxiliar nuevo: <b>did</b>. Y como él se lleva la marca de pasado, el verbo principal <b>vuelve a su forma base</b>.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Afirmativo","sujeto + verbo-ed","I worked yesterday."],
     ["Negativo","didn't + verbo base","I didn't work yesterday."],
     ["Pregunta","Did + sujeto + verbo base","Did you work yesterday?"],
     ["Respuesta corta","Yes, I did. / No, I didn't.","— Did she call? — No, she didn't."]
   ]},
   aviso:["La marca de pasado va una sola vez","<span class='wrong'>I didn't worked.</span> &nbsp;&rarr;&nbsp; <span class='right'>I didn't work.</span> Es el mismo principio de <i>doesn't work</i>: si el auxiliar ya lo marca, el verbo se queda desnudo."]},

  {t:"El pasado de TO BE", s:"was / were",
   p:"<b>To be</b> sigue yendo por libre: tiene dos formas en pasado y no usa <i>did</i> ni para negar ni para preguntar.",
   table:{head:["Persona","Pasado","Negativo","Pregunta"], rows:[
     ["I / he / she / it","was","wasn't","Was I…?"],
     ["you / we / they","were","weren't","Were you…?"]
   ]},
   aviso:["<i>To be</i> nunca lleva <i>did</i>","<span class='wrong'>Did you were tired?</span> &nbsp;&rarr;&nbsp; <span class='right'>Were you tired?</span> El verbo <i>to be</i> se invierte solo, como en presente."]},

  {t:"Hace dos días: AGO", s:"ago",
   p:"<b>Ago</b> va <b>detrás</b> del tiempo, no delante, y siempre con pasado simple.",
   chips:[["two days ago","hace dos días"],["a week ago","hace una semana"],["ten minutes ago","hace diez minutos"],["last night","anoche"]],
   aviso:["Detrás, no delante","<span class='wrong'>ago two days</span> &nbsp;&rarr;&nbsp; <span class='right'>two days <b>ago</b></span>. Y ojo: <i>last night</i> no lleva <i>ago</i> ni preposición: nunca <span class='wrong'>in last night</span>."]}
];

/* Mrs. Castro (A, la vecina de la tienda) pregunta a David (B) el lunes */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ ˈdeɪvɪd haʊ wɑːz jʊr ˈwiːkend", p:"gud mórning, déivid. jáu uás iór uíkend",
  b:[["Good morning, David.","Buenos días, David."],["How was","¿Qué tal estuvo"],["your weekend?","tu fin de semana?"]],
  n:"<b>How was…?</b> El pasado de <i>to be</i> no necesita <i>did</i>: se invierte solo, igual que en presente."},
 {s:"B", ipa:"ɪt wɑːz ɡreɪt ˈmɪsɪz ˈkæstro wi ˈvɪzɪtɪd maɪ ˈɡrænfɑːðər", p:"it uás gréit, mísis Kástro. ui vísitid mái gránfader",
  b:[["It was","Estuvo"],["great,","genial,"],["Mrs Castro.","señora Castro."],["We visited","Visitamos"],["my grandfather.","a mi abuelo."]],
  n:"<b>Visited</b> se pronuncia «vísitid», con sílaba extra, porque el verbo acaba en <i>t</i>."},
 {s:"A", ipa:"ˈlʌvli ænd wʌt dɪd juː duː ðer", p:"lávli. and uát did iú du der",
  b:[["Lovely.","Qué bien."],["And","¿Y"],["what did you do","qué hicieron"],["there?","allá?"]],
  n:"<b>Did you do</b>: el primer <i>did</i> es el auxiliar de pasado y el segundo <i>do</i> es el verbo, en forma base."},
 {s:"B", ipa:"wi ˈhelpt hɪm ɪn ðə ˈɡɑːrdn ænd aɪ kʊkt fɔːr ˈevriwʌn", p:"ui jelpt jim in da gárden, and ái kukt for évriuan",
  b:[["We helped him","Lo ayudamos"],["in the garden","en el jardín"],["and","y"],["I cooked","yo cociné"],["for everyone.","para todos."]],
  n:"<b>Helped</b> y <b>cooked</b> suenan «jelpt» y «kukt», con <i>t</i> final y una sola sílaba."},
 {s:"A", ipa:"juː kʊkt ˈrɪəli aɪ θɔːt juː heɪtɪd ˈkʊkɪŋ", p:"iú kukt. ríili. ái zot iú jéitid kúking",
  b:[["You cooked?","¿Cocinaste?"],["Really?","¿En serio?"],["I thought","Creía que"],["you hated","odiabas"],["cooking.","cocinar."]]},
 {s:"B", ipa:"aɪ duː bʌt maɪ ˈmʌðər wɑːz taɪərd soʊ aɪ ˈhelpt", p:"ái du. bat mái máder uás táiard, sóu ái jelpt",
  b:[["I do.","Y lo odio."],["But","Pero"],["my mother","mi madre"],["was","estaba"],["tired,","cansada,"],["so","así que"],["I helped.","ayudé."]],
  n:"<b>Was</b> para singular, <b>were</b> para plural. Aquí <i>my mother was</i>."},
 {s:"A", ipa:"ðæts ə ɡʊd sʌn dɪd ˈænə ɡoʊ wɪð juː", p:"dats a gud san. did Ána góu uid iú",
  b:[["That's a good son.","Eso es un buen hijo."],["Did Ana go","¿Fue Ana"],["with you?","con ustedes?"]],
  n:"<b>Did Ana go</b>, no <span class='wrong'>did Ana went</span>. El auxiliar ya marca el pasado; el verbo va en base."},
 {s:"B", ipa:"noʊ ʃi ˈdɪdnt ʃi ˈstʌdid ɔːl ˈsætərdeɪ", p:"nóu, shi dídnt. shi stádid ol sáterdei",
  b:[["No, she didn't.","No, no fue."],["She studied","Ella estudió"],["all Saturday.","todo el sábado."]],
  n:"<b>Studied</b>: consonante + <i>y</i> pasa a <i>-ied</i>. Se pronuncia «stádid»."},
 {s:"A", ipa:"ʃi ˈɔːlweɪz ˈstʌdiz ænd jʊr ˈkʌznz", p:"shi ólueis stádis. and iór kásns",
  b:[["She always studies.","Ella siempre estudia."],["And your cousins?","¿Y tus primos?"]]},
 {s:"B", ipa:"ðeɪ pleɪd ˈfʊtbɔːl ɑːn ˈsʌndeɪ ænd ðen ðeɪ wɔːkt tuː ðə ˈrɪvər", p:"déi pléid fútbol an sándei, and den déi uókt tu da rívar",
  b:[["They played","Ellos jugaron"],["football","fútbol"],["on Sunday","el domingo"],["and then","y luego"],["they walked","caminaron"],["to the river.","hasta el río."]],
  n:"<b>Played</b> suena «pléid», con <i>d</i>; <b>walked</b> suena «uókt», con <i>t</i>. Se escriben igual y suenan distinto."},
 {s:"A", ipa:"ðə ˈrɪvər wɑːz ɪt koʊld", p:"da rívar. uás it kóuld",
  b:[["The river.","El río."],["Was it cold?","¿Estaba fría?"]]},
 {s:"B", ipa:"ðeɪ sed ɪt wɑːz ˈperfɪkt bʌt aɪ ˈdɪdnt ɡoʊ", p:"déi sed it uás pérfect. bat ái dídnt góu",
  b:[["They said","Dijeron"],["it was","que estaba"],["perfect.","perfecta."],["But","Pero"],["I didn't go.","yo no fui."]]},
 {s:"A", ipa:"waɪ nɑːt", p:"uái nat",
  b:[["Why","¿Por"],["not?","qué no?"]]},
 {s:"B", ipa:"aɪ ˈwɜːrkt ɑːn ˈsʌndeɪ ˈmɔːrnɪŋ ænd ðen aɪ ˈrestɪd", p:"ái uérkt an sándei mórning, and den ái réstid",
  b:[["I worked","Trabajé"],["on Sunday morning","el domingo por la mañana"],["and then","y luego"],["I rested.","descansé."]],
  n:"Contraste perfecto: <b>worked</b> es «uérkt», una sílaba; <b>rested</b> es «réstid», dos, porque acaba en <i>t</i>."},
 {s:"A", ipa:"ænd ðə pɑːrti aɪ hɜːrd ə lɑːt əv nɔɪz ɑːn ˈsætərdeɪ naɪt", p:"and da párti. ái jerd a lat av nóis an sáterdei náit",
  b:[["And the party?","¿Y la fiesta?"],["I heard","Oí"],["a lot of noise","mucho ruido"],["on Saturday night.","el sábado por la noche."]]},
 {s:"B", ipa:"aɪm ˈsɑːri ðæt wɑːz maɪ ˈkʌznz ðeɪ ˈdænst ənˈtɪl leɪt", p:"áim sári. dat uás mái kásns. déi danst antíl léit",
  b:[["I'm sorry.","Lo siento."],["That was","Eran"],["my cousins.","mis primos."],["They danced","Bailaron"],["until late.","hasta tarde."]],
  n:"<b>That was</b> singular, <b>they danced</b> plural. Y <i>danced</i> suena «danst», con <i>t</i>."},
 {s:"A", ipa:"doʊnt ˈwʌri aɪ ˈlɪsnd tuː ðə ˈmjuːzɪk ɪt wɑːz ɡʊd", p:"dóunt uóri. ái lísnd tu da miúsik. it uás gud",
  b:[["Don't worry.","No te preocupes."],["I listened","Escuché"],["to the music.","la música."],["It was good.","Estuvo buena."]]},
 {s:"B", ipa:"wi ˈkliːnd ðə haʊs ˈjestərdeɪ ɪt wɑːz ə mes", p:"ui klíind da jáus iésterdei. it uás a mes",
  b:[["We cleaned","Limpiamos"],["the house","la casa"],["yesterday.","ayer."],["It was","Era"],["a mess.","un desastre."]]},
 {s:"A", ipa:"wɜːr juː ɔːl ˈvɛri taɪərd ɑːn ˈsʌndeɪ naɪt", p:"uér iú ol véri táiard an sándei náit",
  b:[["Were you all","¿Estaban todos"],["very tired","muy cansados"],["on Sunday night?","el domingo por la noche?"]],
  n:"Plural: <b>were</b>. Y otra vez sin <i>did</i>, porque es el verbo <i>to be</i>."},
 {s:"B", ipa:"wi wɜːr bʌt wi wɜːr ˈhæpi tuː", p:"ui uér. bat ui uér jápi túu",
  b:[["We were.","Lo estábamos."],["But","Pero"],["we were","estábamos"],["happy","felices"],["too.","también."]]},
 {s:"A", ipa:"ðæts ðə best kaɪnd əv ˈwiːkend", p:"dats da best káind av uíkend",
  b:[["That's","Ese es"],["the best kind","el mejor tipo"],["of weekend.","de fin de semana."]]},
 {s:"B", ipa:"ɪt wɑːz wʌt əˈbaʊt juː dɪd juː rest", p:"it uás. uát abáut iú. did iú rest",
  b:[["It was.","Lo fue."],["What about you?","¿Y usted?"],["Did you rest?","¿Descansó?"]]},
 {s:"A", ipa:"noʊ aɪ ˈdɪdnt aɪ ˈwɜːrkt ɪn ðə ʃɑːp ɔːl ˈwiːkend", p:"nóu, ái dídnt. ái uérkt in da shap ol uíkend",
  b:[["No, I didn't.","No, no descansé."],["I worked","Trabajé"],["in the shop","en la tienda"],["all weekend.","todo el fin de semana."]]},
 {s:"B", ipa:"ðen juː niːd ə ˈhɑːlɪdeɪ ˈmɪsɪz ˈkæstro", p:"den iú níid a jálidei, mísis Kástro",
  b:[["Then","Entonces"],["you need","usted necesita"],["a holiday,","unas vacaciones,"],["Mrs Castro!","señora Castro!"]]}
];

const LECTURA = {
  titulo: "Everybody's weekend",
  entradilla: "El lunes por la mañana, cada vecino cuenta su fin de semana. Todo el texto está en pasado simple regular: fíjate en cómo la misma terminación <i>-ed</i> suena de tres maneras distintas.",
  parrafos: [
    "Last weekend was busy for everyone on my street. On Saturday we visited my grandfather and helped him in the garden. My mother was tired, so I cooked for everyone. I hate cooking, but somebody had to do it. In the evening we cleaned the house, because it was a mess.",
    "My sister Ana did not come with us. She studied all Saturday for her exam. She always studies, and she never rests. My cousins Pablo and Nico played football on Sunday and then they walked to the river. They said the water was perfect, but I didn't go: I worked on Sunday morning and after that I rested.",
    "On Saturday night my cousins danced until late at our house and the neighbours heard the noise. This morning Mrs Castro asked me about it. I was worried, but she wasn't angry: she listened to the music from her window and she liked it.",
    "Mrs Castro didn't rest at all. She worked in her shop all weekend, from Friday to Sunday. \"Then you need a holiday,\" I told her, and she laughed. We were all very tired on Sunday night, but we were happy too. That is the best kind of weekend."
  ],
  glosario: [
    ["visited","ˈvɪzɪtɪd","visitamos","vísitid"],
    ["helped","helpt","ayudamos","jelpt"],
    ["cooked","kʊkt","cociné","kukt"],
    ["cleaned","kliːnd","limpiamos","klíind"],
    ["studied","ˈstʌdid","estudió","stádid"],
    ["studies","ˈstʌdiz","estudia","stádis"],
    ["played","pleɪd","jugaron","pléid"],
    ["walked","wɔːkt","caminaron","uókt"],
    ["worked","wɜːrkt","trabajé","uérkt"],
    ["rested","ˈrestɪd","descansé","réstid"],
    ["rests","rests","descansa","rests"],
    ["danced","dænst","bailaron","danst"],
    ["listened","ˈlɪsnd","escuchó","lísnd"],
    ["liked","laɪkt","le gustó","láikt"],
    ["asked","æskt","preguntó","askt"],
    ["laughed","læft","se rió","laft"],
    ["heard","hɜːrd","oyeron","jerd"],
    ["said","sed","dijeron","sed"],
    ["told","toʊld","dije","tóuld"],
    ["had","hæd","tuvo","jad"],
    ["was","wʌz","era, estaba","uás"],
    ["were","wɜːr","estábamos, eran","uér"],
    ["wasn't","ˈwʌznt","no estaba","uásnt"],
    ["didn't","ˈdɪdnt","no (pasado)","dídnt"],
    ["did not","dɪd nɑːt","no (pasado)","did nat"],
    ["weekend","ˈwiːkend","fin de semana","uíkend"],
    ["neighbours","ˈneɪbərz","vecinos","néibars"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],
    ["river","ˈrɪvər","río","rívar"],
    ["noise","nɔɪz","ruido","nóis"],
    ["window","ˈwɪndoʊ","ventana","uíndou"],
    ["shop","ʃɑːp","tienda","shap"],
    ["exam","ɪɡˈzæm","examen","igsám"],
    ["holiday","ˈhɑːlɪdeɪ","vacaciones","jálidei"],
    ["mess","mes","desastre","mes"],
    ["busy","ˈbɪzi","ocupado","bísi"],
    ["worried","ˈwɜːrid","preocupado","uérid"],
    ["angry","ˈæŋɡri","enojada","ángri"],
    ["tired","ˈtaɪərd","cansados","táiard"],
    ["happy","ˈhæpi","felices","jápi"],
    ["somebody","ˈsʌmbɑːdi","alguien","sámbadi"],
    ["everyone","ˈevriwʌn","todos","évriuan"],
    ["late","leɪt","tarde","léit"],
    ["best","best","mejor","best"],
    ["kind","kaɪnd","tipo","káind"],
    ["water","ˈwɔːtər","agua","uóter"],
    ["this morning","ðɪs ˈmɔːrnɪŋ","esta mañana","dis mórning"],
    ["last weekend","læst ˈwiːkend","el fin de semana pasado","last uíkend"]
  ],
  preguntas: [
    { q:"Why did David cook on Saturday?",
      ops:["Because he loves cooking","Because his mother was tired","Because Ana asked him"], ok:1,
      pista:"Primer párrafo: él mismo dice que odia cocinar, pero alguien tenía que hacerlo." },
    { q:"What did Pablo and Nico do on Sunday?",
      ops:["They studied for an exam","They worked in the shop","They played football and walked to the river"], ok:2,
      pista:"Segundo párrafo, donde se habla de los primos en plural." },
    { q:"How did Mrs Castro react to the noise?",
      ops:["She was angry with the neighbours","She listened to the music and liked it","She called the police"], ok:1,
      pista:"Tercer párrafo: David estaba preocupado, pero ella no lo estaba." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-15"] = {
  meta: {
    id: "a1-15", nivel: "A1", numero: 15,
    titulo: "El fin de semana (pasado regular)",
    descriptor: "Puedo contar con frases sencillas lo que hice en el pasado reciente y preguntar a otros por sus actividades.",
    escena: "Mrs. Castro & David · lunes por la mañana, frente a la tienda",
    personajeIA: "Mrs. Castro", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
