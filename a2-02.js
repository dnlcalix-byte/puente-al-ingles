/* ============================================================
   LECCIÓN A2-02 · Pasado continuo: qué estabas haciendo
   Reparto: Marta, la mañana después de su fiesta de aniversario,
   reconstruyendo el apagón. La lectura reúne los seis puntos de la
   Fase 1 —was/were + -ing, when frente a while, dos acciones a la
   vez, el decorado del relato, los verbos que no van en continuo y
   la concordancia de everybody— en yo, él, ellos y ella.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La fiesta", items:[
    ["speech","spiːtʃ","discurso","spíich"],["toast","toʊst","brindis","tóust"],
    ["candle","ˈkændl","vela","kándl"],["drawer","drɔːr","cajón","dror"],
    ["guest","ɡest","invitado","guest"],["anniversary","ˌænɪˈvɜːrsəri","aniversario","aniversari"],
    ["wedding","ˈwedɪŋ","boda","uéding"],["dark","dɑːrk","oscuro","dark"],
    ["light","laɪt","luz","láit"],["power cut","ˈpaʊər kʌt","apagón","páuar kat"]
  ]},
  {g:"Lo que estaba pasando", items:[
    ["was carrying","wʌz ˈkæriɪŋ","estaba llevando","uás káriing"],["was standing","wʌz ˈstændɪŋ","estaba parado","uás stánding"],
    ["was dancing","wʌz ˈdænsɪŋ","estaba bailando","uás dánsing"],["was talking","wʌz ˈtɔːkɪŋ","estaba hablando","uás tóking"],
    ["was listening","wʌz ˈlɪsnɪŋ","estaba escuchando","uás lísning"],["was eating","wʌz ˈiːtɪŋ","estaba comiendo"," uás íiting"],
    ["was looking for","wʌz ˈlʊkɪŋ fɔːr","estaba buscando","uás lúking for"],["were waiting","wɜːr ˈweɪtɪŋ","estaban esperando","uér uéiting"],
    ["were laughing","wɜːr ˈlæfɪŋ","se estaban riendo","uér láfing"],["were singing","wɜːr ˈsɪŋɪŋ","estaban cantando","uér sínguing"]
  ]},
  {g:"Cuándo y mientras", items:[
    ["when","wen","cuando","uén"],["while","waɪl","mientras","uáil"],
    ["suddenly","ˈsʌdnli","de repente","sádnli"],["at that moment","æt ðæt ˈmoʊmənt","en ese momento","at dat móument"],
    ["meanwhile","ˈmiːnwaɪl","mientras tanto","míinuail"],["in the middle of","ɪn ðə ˈmɪdl əv","en mitad de","in da mídl av"],
    ["just then","dʒʌst ðen","justo entonces","chast den"],["all night","ɔːl naɪt","toda la noche","ol náit"],
    ["for two minutes","fɔːr tuː ˈmɪnɪts","durante dos minutos","for tu mínits"],["again","əˈɡen","otra vez","aguén"]
  ]},
  {g:"Verbos que no van en continuo", items:[
    ["to know","tuː noʊ","saber, conocer","tu nóu"],["to want","tuː wɑːnt","querer","tu uánt"],
    ["to need","tuː niːd","necesitar","tu níid"],["to like","tuː laɪk","gustar","tu láik"],
    ["to believe","tuː bɪˈliːv","creer","tu bilíiv"],["to understand","tuː ˌʌndərˈstænd","entender","tu anderstánd"],
    ["to mean","tuː miːn","significar","tu míin"],["to belong","tuː bɪˈlɔːŋ","pertenecer","tu bilóng"],
    ["to remember","tuː rɪˈmembər","recordar","tu rimémbar"],["to seem","tuː siːm","parecer","tu síim"]
  ]}
];

const PRONKEY = [
  ["ing","La <i>g</i> final no se pronuncia: es una <i>n</i> nasal, como en «tango».","dancing &rarr; dánsing"],
  ["ch","Como en «coche».","speech &rarr; spíich"],
  ["sh","Como pedir silencio.","should &rarr; shud"],
  ["z","Lengua entre los dientes, sin voz.","everything &rarr; évrizing"],
  ["v","Labio de abajo contra los dientes de arriba.","believe &rarr; bilíiv"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","while &rarr; uáil"],
  ["ái","Diptongo cerrado, como en «aire».","light &rarr; láit"],
  ["gh muda","En <i>light</i> y <i>night</i> la <i>gh</i> no suena.","night &rarr; náit"],
  ["l sola","Al final de sílaba casi no se oye la vocal: «kándl», no «kándel».","candle &rarr; kándl"]
];

const VERBS = [
  ["to carry","reg","carry · carries","carried","will carry","llevar"],
  ["to dance","reg","dance · dances","danced","will dance","bailar"],
  ["to continue","reg","continue · continues","continued","will continue","seguir"],
  ["to notice","reg","notice · notices","noticed","will notice","darse cuenta"],
  ["to happen","reg","happen · happens","happened","will happen","pasar, ocurrir"],
  ["to move","reg","move · moves","moved","will move","moverse"],
  ["to finish","reg","finish · finishes","finished","will finish","terminar"],
  ["to stand","irr","stand · stands","stood","will stand","estar de pie"],
  ["to hold","irr","hold · holds","held","will hold","sostener"],
  ["to light","irr","light · lights","lit","will light","encender"],
  ["to go out","irr","go out · goes out","went out","will go out","apagarse; salir"],
  ["to come back","irr","come back · comes back","came back","will come back","volver"]
];

const GRAMMAR = [
  {t:"El pasado continuo", s:"was / were + verbo-ing",
   p:"Es el presente continuo con el <i>to be</i> en pasado. No habla de lo que pasó, sino de <b>lo que estaba pasando</b>: la acción vista por dentro, sin principio ni final.",
   table:{head:["Persona","Forma","Ejemplo"], rows:[
     ["I / he / she / it","was + -ing","I was carrying the cake."],
     ["you / we / they","were + -ing","They were dancing."],
     ["Negativo","wasn't / weren't + -ing","He wasn't listening."],
     ["Pregunta","Was / Were + sujeto + -ing","What were you doing?"]
   ]},
   aviso:["Es el <i>to be</i> el que se mueve","Nada de <i>did</i>: <span class='right'>Were you dancing?</span>, nunca <span class='wrong'>Did you were dancing?</span> La estructura es idéntica a la del presente continuo."]},

  {t:"WHEN y WHILE: la interrupción", s:"lo largo y lo corto",
   p:"Ésta es la razón de existir del pasado continuo. Una acción larga estaba ocurriendo y otra corta la interrumpió. La larga va en <b>continuo</b>; la corta, en <b>pasado simple</b>.",
   table:{head:["Acción","Tiempo","Conector"], rows:[
     ["La larga, de fondo","pasado continuo","while / as"],
     ["La corta, que interrumpe","pasado simple","when"],
     ["Ejemplo","I was carrying the cake when the lights went out.",""],
     ["Ejemplo","While I was carrying the cake, the lights went out.",""]
   ]},
   aviso:["La regla de oro","<b>When</b> suele traer el pasado simple; <b>while</b> suele traer el continuo. Si las cambias, cambia el sentido: <i>When the lights went out, I carried the cake</i> significa que primero se fue la luz y después la llevé."]},

  {t:"Dos acciones a la vez", s:"while … was … , … was …",
   p:"Cuando las dos acciones son largas y ocurren al mismo tiempo, <b>las dos van en continuo</b> y se unen con <i>while</i> o <i>meanwhile</i>.",
   chips:[["While she was looking for candles, we were looking for our phones.","Mientras ella buscaba velas, nosotros buscábamos el teléfono."],["He was talking and everybody was listening.","Él hablaba y todos escuchaban."],["Meanwhile, the music was playing.","Mientras tanto, la música sonaba."]],
   aviso:["<i>Meanwhile</i> va suelto","No une dos frases: abre una nueva, con punto o punto y coma delante. <i>While</i> sí une."]},

  {t:"El decorado del relato", s:"para qué sirve además de interrumpir",
   p:"El pasado continuo también sirve para <b>montar la escena</b> antes de que ocurra nada. Es lo que hacen las novelas y los relatos orales: primero el ambiente en continuo, después el suceso en simple.",
   chips:[["It was raining and the street was empty.","Llovía y la calle estaba vacía."],["Everybody was dancing.","Todo el mundo bailaba."],["The music was playing, the door was open…","La música sonaba, la puerta estaba abierta…"],["…and then the lights went out.","…y entonces se fue la luz."]],
   aviso:["Una prueba rápida al contar algo","Si tu relato en pasado sólo tiene verbos simples, suena a lista. El continuo es lo que le pone fondo. Los examinadores de IELTS lo notan enseguida."]},

  {t:"Los verbos que no van en continuo", s:"know, want, need, like, believe…",
   p:"Un grupo de verbos no describe acciones sino <b>estados</b>: lo que sabes, quieres o crees no es algo que «estés haciendo». Esos verbos <b>no se ponen en -ing</b>, ni en presente ni en pasado.",
   table:{head:["No se dice","Se dice","Español"], rows:[
     ["<span class='wrong'>I was knowing</span>","<span class='right'>I knew</span>","yo sabía"],
     ["<span class='wrong'>I am wanting</span>","<span class='right'>I want</span>","quiero"],
     ["<span class='wrong'>She was needing</span>","<span class='right'>She needed</span>","necesitaba"],
     ["<span class='wrong'>Are you understanding?</span>","<span class='right'>Do you understand?</span>","¿entiendes?"]
   ]},
   aviso:["La lista corta que hay que memorizar","<b>know, want, need, like, love, hate, believe, understand, mean, belong, seem, remember.</b> Con <i>have</i> depende: <i>I have a car</i> no, pero <i>I'm having lunch</i> sí, porque ahí es una acción."]},

  {t:"Everybody, somebody, nobody", s:"suenan a muchos y son singulares",
   p:"Aunque se refieran a un montón de gente, gramaticalmente son <b>singulares</b>: piden verbo en tercera persona.",
   table:{head:["Se dice","No se dice"], rows:[
     ["Everybody <b>was</b> listening.","<span class='wrong'>Everybody were listening.</span>"],
     ["Nobody <b>noticed</b>.","<span class='wrong'>Nobody noticed not.</span>"],
     ["Somebody <b>is</b> waiting.","<span class='wrong'>Somebody are waiting.</span>"],
     ["Everything <b>was</b> dark.","<span class='wrong'>Everything were dark.</span>"]
   ]},
   aviso:["<i>People</i> es el caso contrario","<b>People</b> sí es plural: <span class='right'>people are nice</span>. Así que <i>everybody is</i> pero <i>people are</i>, aunque signifiquen casi lo mismo."]}
];

/* Marta (A) y David (B) reconstruyen el apagón, la mañana después */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd ɡʊd ˈmɔːrnɪŋ kʌm ɪn aɪm stɪl ˈfaɪndɪŋ ˈɡlæsɪz ˈʌndər ðə ˈsoʊfə", p:"déivid, gud mórning. kam in. áim stil fáinding glásis ándar da sóufa",
  b:[["David, good morning.","David, buenos días."],["Come in.","Pasa."],["I'm still finding glasses","Todavía estoy encontrando vasos"],["under the sofa.","debajo del sofá."]]},
 {s:"B", ipa:"ɡʊd ˈmɔːrnɪŋ ˈmɑːrtə wʌt ə ˈpɑːrti haʊ ɑːr juː ˈfiːlɪŋ təˈdeɪ", p:"gud mórning, Márta. uát a párti. jáu ar iú fíiling tudéi",
  b:[["Good morning, Marta.","Buenos días, Marta."],["What a party.","Vaya fiesta."],["How are you feeling","¿Cómo se siente"],["today?","hoy?"]]},
 {s:"A", ipa:"taɪərd ænd ˈveri ˈhæpi tel miː ˈsʌmθɪŋ wer wɜːr juː wen ðə laɪts went aʊt", p:"táiard and véri jápi. tel mi sámzing: uér uér iú uén da láits uént áut",
  b:[["Tired and very happy.","Cansada y muy feliz."],["Tell me something:","Dime una cosa:"],["where were you","¿dónde estabas"],["when the lights went out?","cuando se fue la luz?"]],
  n:"<b>Where were you…?</b> El <i>to be</i> se adelanta. Y <i>went out</i>, en simple, es el suceso corto."},
 {s:"B", ipa:"ɪn ðə ˈkɪtʃɪn aɪ wʌz ˈkæriɪŋ ðə keɪk", p:"in da kíchin. ái uás káriing da kéik",
  b:[["In the kitchen.","En la cocina."],["I was carrying","Estaba llevando"],["the cake.","el pastel."]],
  n:"<b>Was carrying</b>: la acción larga, la que estaba en marcha cuando llegó la interrupción."},
 {s:"A", ipa:"noʊ wɜːr juː ˈkæriɪŋ ɪt ɪn jʊr hændz", p:"nóu. uér iú káriing it in iór jands",
  b:[["No!","¡No!"],["Were you carrying it","¿Lo llevabas"],["in your hands?","en las manos?"]]},
 {s:"B", ipa:"ɪn maɪ hændz ˈevriθɪŋ went dɑːrk ænd aɪ ˈdɪdnt muːv fɔːr ten ˈsekəndz", p:"in mái jands. évrizing uént dark, and ái dídnt múuv for ten sékonds",
  b:[["In my hands.","En las manos."],["Everything went dark","Todo se puso oscuro"],["and I didn't move","y no me moví"],["for ten seconds.","en diez segundos."]]},
 {s:"A", ipa:"ænd ðə keɪk", p:"and da kéik",
  b:[["And the cake?","¿Y el pastel?"]]},
 {s:"B", ipa:"ðə keɪk sərˈvaɪvd ˈkevɪn wʌz ˈstændɪŋ nekst tuː miː ænd hi tʊk ɪt", p:"da kéik serváivd. Kévin uás stánding nekst tu mi, and ji tuk it",
  b:[["The cake survived.","El pastel sobrevivió."],["Kevin was standing","Kevin estaba parado"],["next to me","a mi lado"],["and he took it.","y lo agarró."]],
  n:"Otra vez el par: <b>was standing</b> de fondo, <b>took</b> como acción puntual."},
 {s:"A", ipa:"ˈkevɪn seɪvz ðə deɪ əˈɡen wʌt wʌz ˈluːɪs ˈduːɪŋ", p:"Kévin séivs da déi aguén. uát uás Luís dúing",
  b:[["Kevin saves the day again.","Kevin salvando el día otra vez."],["What was Luis doing?","¿Qué estaba haciendo Luis?"]]},
 {s:"B", ipa:"hi wʌz ˈspiːkɪŋ hi wʌz ɪn ðə ˈmɪdl əv hɪz spiːtʃ əˈbaʊt juː", p:"ji uás spíiking. ji uás in da mídl av jis spíich abáut iú",
  b:[["He was speaking.","Estaba hablando."],["He was in the middle","Estaba en mitad"],["of his speech","de su discurso"],["about you.","sobre usted."]]},
 {s:"A", ipa:"əv ˈkɔːrs hi wʌz ˈtwenti jɪrz ænd hi stɪl kɑːnt ˈfɪnɪʃ ə ˈsentəns", p:"av kórs ji uás. tuénti íers, and ji stil kant fínish a séntens",
  b:[["Of course he was.","Cómo no."],["Twenty years","Veinte años"],["and he still can't finish","y todavía no puede terminar"],["a sentence.","una frase."]]},
 {s:"B", ipa:"hi ˈfɪnɪʃt ɪt ɪn ðə dɑːrk ˈnoʊbɑːdi kʊd siː hɪm bʌt ˈevribɑːdi wʌz ˈlɪsnɪŋ", p:"ji fínisht it in da dark. nóubadi kud síi jim, bat évribadi uás lísning",
  b:[["He finished it","La terminó"],["in the dark.","a oscuras."],["Nobody could see him,","Nadie podía verlo,"],["but everybody was listening.","pero todos escuchaban."]],
  n:"<b>Everybody was</b>, en singular, aunque se refiera a cincuenta personas."},
 {s:"A", ipa:"ðæts ðə best pɑːrt ænd ˈserə ænd ˈdʒuːliə", p:"dats da best part. and Séra and Chúlia",
  b:[["That's the best part.","Esa es la mejor parte."],["And Sarah and Julia?","¿Y Sarah y Julia?"]]},
 {s:"B", ipa:"ðeɪ wɜːr ˈdænsɪŋ wen ɪt ˈhæpənd ðeɪ kept ˈdænsɪŋ fɔːr tuː ˈmɪnɪts", p:"déi uér dánsing uén it jápend. déi kept dánsing for tu mínits",
  b:[["They were dancing","Estaban bailando"],["when it happened.","cuando pasó."],["They kept dancing","Siguieron bailando"],["for two minutes.","dos minutos."]]},
 {s:"A", ipa:"ɪn ðə dɑːrk", p:"in da dark",
  b:[["In the dark?","¿A oscuras?"]]},
 {s:"B", ipa:"ɪn ðə dɑːrk ˈdʒuːliə sed ðə ˈmjuːzɪk ˈdɪdnt stɑːp soʊ waɪ stɑːp", p:"in da dark. Chúlia sed da miúsik dídnt stap, sóu uái stap",
  b:[["In the dark.","A oscuras."],["Julia said","Julia dijo"],["the music didn't stop,","que la música no paró,"],["so why stop?","así que para qué parar."]]},
 {s:"A", ipa:"aɪ laɪk ðæt ɡɜːrl ænd maɪ ˈmʌðər", p:"ái láik dat guerl. and mái máder",
  b:[["I like that girl.","Me cae bien esa muchacha."],["And my mother?","¿Y mi mamá?"]],
  n:"<b>I like</b>, no <span class='wrong'>I'm liking</span>: <i>like</i> es de los verbos que no van en continuo."},
 {s:"B", ipa:"ʃi wʌz ˈlʊkɪŋ fɔːr ˈkændlz waɪl ˈevribɑːdi els wʌz ˈlʊkɪŋ fɔːr ðer foʊn", p:"shi uás lúking for kándls uáil évribadi els uás lúking for der fóun",
  b:[["She was looking for candles","Estaba buscando velas"],["while everybody else","mientras todos los demás"],["was looking for their phone.","buscaban su teléfono."]],
  n:"Dos acciones largas a la vez: las dos en continuo, unidas por <b>while</b>."},
 {s:"A", ipa:"maɪ ˈmʌðər ɪz ði ˈoʊnli ˈpɜːrsn ɪn ðɪs striːt wɪð ə plæn", p:"mái máder is di óunli pérsn in dis stríit uid a plan",
  b:[["My mother is","Mi mamá es"],["the only person","la única persona"],["in this street","de esta calle"],["with a plan.","con un plan."]]},
 {s:"B", ipa:"ʃi hæd fɔːr ˈkændlz ɪn ə drɔːr ˈænə lɪt ðem wʌn baɪ wʌn", p:"shi jad for kándls in a dror. Ána lit dem uán bái uán",
  b:[["She had four candles","Tenía cuatro velas"],["in a drawer.","en un cajón."],["Ana lit them","Ana las encendió"],["one by one.","una por una."]],
  n:"<b>Lit</b> es el pasado irregular de <i>light</i>."},
 {s:"A", ipa:"soʊ ðə ˈpɑːrti kənˈtɪnjuːd", p:"sóu da párti kantíniud",
  b:[["So the party","Así que la fiesta"],["continued.","siguió."]]},
 {s:"B", ipa:"ɪt kənˈtɪnjuːd fɔːr θriː mɔːr ˈaʊərz ðə laɪts keɪm bæk æt wʌn ænd ˈnoʊbɑːdi ˈnoʊtɪst", p:"it kantíniud for zri mor áuars. da láits kéim bak at uán, and nóubadi nóutist",
  b:[["It continued","Siguió"],["for three more hours.","tres horas más."],["The lights came back","La luz volvió"],["at one","a la una"],["and nobody noticed.","y nadie se dio cuenta."]]},
 {s:"A", ipa:"ˈnoʊbɑːdi ˈnoʊtɪst ˈtwenti jɪrz əˈɡoʊ æt aʊər ˈwedɪŋ ðə seɪm θɪŋ ˈhæpənd", p:"nóubadi nóutist. tuénti íers agóu, at áuar uéding, da séim zing jápend",
  b:[["Nobody noticed!","¡Nadie se dio cuenta!"],["Twenty years ago,","Hace veinte años,"],["at our wedding,","en nuestra boda,"],["the same thing happened.","pasó lo mismo."]]},
 {s:"B", ipa:"ðen ɪts ə trəˈdɪʃn siː juː ɪn ˈtwenti jɪrz ˈmɑːrtə", p:"den its a tradíshon. síi iú in tuénti íers, Márta",
  b:[["Then it's a tradition.","Entonces es una tradición."],["See you in twenty years,","Nos vemos en veinte años,"],["Marta.","Marta."]]}
];

const LECTURA = {
  titulo: "The night the lights went out",
  entradilla: "La fiesta de los veinte años de Luis y Marta, contada desde dentro. El texto usa lo de la Fase 1: <i>was / were + -ing</i>, la interrupción con <i>when</i>, dos acciones a la vez con <i>while</i>, el continuo como decorado del relato y la concordancia de <i>everybody</i> y <i>nobody</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "I was carrying the cake when the lights went out. I was in the kitchen, the door was open, and suddenly everything was dark. I didn't move for ten seconds. Kevin was standing next to me and he took the cake out of my hands before anything happened.",
    "Luis was giving a speech about Marta when it happened. He was talking about their first year together. He didn't stop: he finished the speech in the dark, and nobody could see him, but everybody was listening. Marta says he never finishes a sentence, so this was historic.",
    "Sarah and Julia were dancing and they kept dancing for two more minutes. \"The music didn't stop,\" Julia said, \"so why stop?\" Pablo and Nico were eating when the lights went out, and they were still eating when the lights came back.",
    "While everybody else was looking for a phone, Marta's mother was looking for candles. She had four in a drawer, and Ana lit them one by one. The party continued for three more hours. The lights came back at one in the morning and nobody noticed."
  ],
  glosario: [
    ["was carrying","wʌz ˈkæriɪŋ","estaba llevando","uás káriing"],
    ["was standing","wʌz ˈstændɪŋ","estaba parado","uás stánding"],
    ["was giving","wʌz ˈɡɪvɪŋ","estaba dando","uás guíving"],
    ["was talking","wʌz ˈtɔːkɪŋ","estaba hablando","uás tóking"],
    ["was listening","wʌz ˈlɪsnɪŋ","escuchaba","uás lísning"],
    ["were dancing","wɜːr ˈdænsɪŋ","estaban bailando","uér dánsing"],
    ["were eating","wɜːr ˈiːtɪŋ","estaban comiendo","uér íiting"],
    ["was looking for","wʌz ˈlʊkɪŋ fɔːr","estaba buscando","uás lúking for"],
    ["went out","went aʊt","se fue (la luz)","uént áut"],
    ["came back","keɪm bæk","volvió","kéim bak"],
    ["took","tʊk","agarró","tuk"],
    ["didn't move","ˈdɪdnt muːv","no me moví","dídnt múuv"],
    ["didn't stop","ˈdɪdnt stɑːp","no paró","dídnt stap"],
    ["finished","ˈfɪnɪʃt","terminó","fínisht"],
    ["finishes","ˈfɪnɪʃɪz","termina","fínishis"],
    ["kept","kept","siguieron","kept"],
    ["said","sed","dijo","sed"],
    ["says","sez","dice","ses"],
    ["had","hæd","tenía","jad"],
    ["lit","lɪt","encendió","lit"],
    ["continued","kənˈtɪnjuːd","siguió","kantíniud"],
    ["noticed","ˈnoʊtɪst","se dio cuenta","nóutist"],
    ["happened","ˈhæpənd","pasó","jápend"],
    ["could see","kʊd siː","podía ver","kud síi"],
    ["cake","keɪk","pastel","kéik"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchin"],
    ["door","dɔːr","puerta","dor"],
    ["lights","laɪts","luces","láits"],
    ["dark","dɑːrk","oscuro","dark"],
    ["seconds","ˈsekəndz","segundos","sékonds"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["hours","ˈaʊərz","horas","áuars"],
    ["speech","spiːtʃ","discurso","spíich"],
    ["sentence","ˈsentəns","frase","séntens"],
    ["historic","hɪˈstɔːrɪk","histórico","jistórik"],
    ["music","ˈmjuːzɪk","música","miúsik"],
    ["phone","foʊn","teléfono","fóun"],
    ["candles","ˈkændlz","velas","kándls"],
    ["drawer","drɔːr","cajón","dror"],
    ["party","ˈpɑːrti","fiesta","párti"],
    ["suddenly","ˈsʌdnli","de repente","sádnli"],
    ["while","waɪl","mientras","uáil"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["else","els","los demás","els"],
    ["one by one","wʌn baɪ wʌn","una por una","uán bái uán"],
    ["next to","nekst tuː","al lado de","nekst tu"],
    ["out of","aʊt əv","de","áut av"],
    ["together","təˈɡeðər","juntos","tuguéder"],
    ["first year","fɜːrst jɪr","primer año","ferst íer"],
    ["mother","ˈmʌðər","madre","máder"]
  ],
  preguntas: [
    { q:"What was David doing when the lights went out?",
      ops:["He was dancing","He was carrying the cake","He was giving a speech"], ok:1,
      pista:"Primer párrafo, primera frase. Las otras dos cosas las hacía otra gente." },
    { q:"What did Luis do in the dark?",
      ops:["He finished his speech","He stopped talking","He looked for candles"], ok:0,
      pista:"Segundo párrafo: el texto dice primero lo que <i>no</i> hizo." },
    { q:"Who found the candles?",
      ops:["Ana","Kevin","Marta's mother"], ok:2,
      pista:"Cuarto párrafo: una persona las buscó y otra las encendió." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-02"] = {
  meta: {
    id: "a2-02", nivel: "A2", numero: 2,
    titulo: "Pasado continuo: qué estabas haciendo",
    descriptor: "Puedo describir lo que estaba ocurriendo en un momento del pasado, contar qué interrumpió qué y montar el ambiente de un relato.",
    escena: "Marta & David · su sala, la mañana después de la fiesta de aniversario",
    personajeIA: "Marta", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
