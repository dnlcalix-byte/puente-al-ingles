/* ============================================================
   LECCIÓN A1-19 · Descripción de personas
   Reparto: Mr. Ortega encarga a David que recoja a dos estudiantes
   nuevos y se los describe. La lectura reúne los seis puntos de la
   Fase 1 —be frente a have, have got, look like frente a be like,
   with/in, intensificadores y adjetivos compuestos— en él, ella,
   ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El físico", items:[
    ["tall","tɔːl","alto","tol"],["short","ʃɔːrt","bajo; corto","short"],
    ["thin","θɪn","delgado","zin"],["strong","strɔːŋ","fuerte","strong"],
    ["young","jʌŋ","joven","iang"],["old","oʊld","mayor, viejo","óuld"],
    ["medium height","ˈmiːdiəm haɪt","estatura media","míidiam jáit"],["good-looking","ɡʊd ˈlʊkɪŋ","guapo","gud lúking"],
    ["age","eɪdʒ","edad","éich"],["face","feɪs","cara","féis"]
  ]},
  {g:"El pelo y la cara", items:[
    ["hair","her","pelo","jér"],["eyes","aɪz","ojos","áis"],
    ["blond","blɑːnd","rubio","bland"],["dark","dɑːrk","oscuro, moreno","dark"],
    ["red hair","red her","pelo pelirrojo","red jér"],["curly","ˈkɜːrli","rizado","kérli"],
    ["straight","streɪt","liso","stréit"],["bald","bɔːld","calvo","bold"],
    ["beard","bɪrd","barba","bíard"],["glasses","ˈɡlæsɪz","lentes","glásis"]
  ]},
  {g:"El carácter", items:[
    ["kind","kaɪnd","amable","káind"],["funny","ˈfʌni","divertido","fáni"],
    ["serious","ˈsɪriəs","serio","sírias"],["shy","ʃaɪ","tímido","shái"],
    ["friendly","ˈfrendli","simpático","fréndli"],["quiet","ˈkwaɪət","callado","kuáiet"],
    ["patient","ˈpeɪʃnt","paciente","péishent"],["clever","ˈklevər","listo","klévar"],
    ["lazy","ˈleɪzi","perezoso","léisi"],["hard-working","hɑːrd ˈwɜːrkɪŋ","trabajador","jard uérking"]
  ]},
  {g:"Preguntar y precisar", items:[
    ["What does he look like?","wʌt dʌz hiː lʊk laɪk","¿cómo es (físicamente)?","uát das ji luk láik"],
    ["What is he like?","wʌt ɪz hiː laɪk","¿cómo es (de carácter)?","uát is ji láik"],
    ["How old is he?","haʊ oʊld ɪz hiː","¿cuántos años tiene?","jáu óuld is ji"],
    ["very","ˈveri","muy","véri"],["quite","kwaɪt","bastante","kuáit"],
    ["a bit","ə bɪt","un poco","a bit"],["really","ˈrɪəli","de verdad, muy","ríili"],
    ["the same","ðə seɪm","el mismo, igual","da séim"],["the opposite","ði ˈɑːpəzɪt","lo contrario","di ápasit"],
    ["not at all","nɑːt æt ɔːl","para nada","nat at ol"]
  ]}
];

const PRONKEY = [
  ["z","Lengua entre los dientes, sin voz. Nunca es una <i>s</i>.","thin &rarr; zin"],
  ["j","Aire por la garganta, sin raspar.","hair &rarr; jér"],
  ["sh","Como pedir silencio.","shy &rarr; shái"],
  ["ch","Como en «coche».","age &rarr; éich"],
  ["v","Labio de abajo contra los dientes de arriba.","clever &rarr; klévar"],
  ["ai","Diptongo cerrado, como en «aire».","eyes &rarr; áis"],
  ["r final","Apenas se toca; nunca vibra.","hair &rarr; jér"],
  ["gh muda","En <i>straight</i> y <i>height</i> la <i>gh</i> no suena.","straight &rarr; stréit"],
  ["l final","Lengua atrás, sonido hueco, casi una <i>u</i>.","tall &rarr; tol"]
];

const VERBS = [
  ["to look","reg","look · looks","looked","will look","parecer; mirar"],
  ["to seem","reg","seem · seems","seemed","will seem","parecer"],
  ["to describe","reg","describe · describes","described","will describe","describir"],
  ["to remember","reg","remember · remembers","remembered","will remember","recordar"],
  ["to smile","reg","smile · smiles","smiled","will smile","sonreír"],
  ["to recognise","reg","recognise · recognises","recognised","will recognise","reconocer"],
  ["to talk","reg","talk · talks","talked","will talk","hablar"],
  ["to wear","irr","wear · wears","wore","will wear","llevar puesto"],
  ["to have","irr","have · has","had","will have","tener"],
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to know","irr","know · knows","knew","will know","conocer, saber"],
  ["to think","irr","think · thinks","thought","will think","pensar"]
];

const GRAMMAR = [
  {t:"BE para lo que se es, HAVE para lo que se tiene", s:"He is tall. He has blue eyes.",
   p:"El reparto es sencillo y estricto: <b>to be</b> con los adjetivos que describen a la persona entera, <b>to have</b> con las partes del cuerpo y los rasgos. El problema es que el español mezcla los dos y hay que desmontar la costumbre.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["He is tall.","<span class='wrong'>He has tall.</span>","Es alto."],
     ["He has blue eyes.","<span class='wrong'>He is blue eyes.</span>","Tiene los ojos azules."],
     ["She is twenty.","<span class='wrong'>She has twenty years.</span>","Tiene veinte años."],
     ["He has a beard.","<span class='wrong'>He is beard.</span>","Tiene barba."]
   ]},
   aviso:["La edad es el error número uno","En inglés la edad es algo que <b>se es</b>, no algo que se tiene: <i>I <b>am</b> twenty-two</i>. Y la palabra <i>years</i> normalmente ni aparece."]},

  {t:"HAVE GOT: la otra forma de tener", s:"He's got dark hair",
   p:"En conversación —sobre todo en inglés británico— <b>have got</b> sustituye a <i>have</i> para la posesión y los rasgos. Significa exactamente lo mismo, pero se conjuga como <i>have</i> y no necesita <i>do</i> para negar ni preguntar.",
   table:{head:["Función","have","have got"], rows:[
     ["Afirmativo","He has a beard.","He's got a beard."],
     ["Negativo","He doesn't have a beard.","He hasn't got a beard."],
     ["Pregunta","Does he have a beard?","Has he got a beard?"],
     ["Respuesta corta","Yes, he does.","Yes, he has."]
   ]},
   aviso:["No se mezclan las dos formas","<span class='wrong'>Does he have got a beard?</span> &nbsp;&rarr;&nbsp; <span class='right'>Has he got a beard?</span> O <i>have</i> con <i>do</i>, o <i>have got</i> sin él. Nunca los dos."]},

  {t:"LOOK LIKE frente a BE LIKE", s:"dos preguntas que suenan igual",
   p:"Una letra de diferencia y dos preguntas distintas. Es la confusión clásica de esta lección.",
   table:{head:["Pregunta","Pregunta por","Respuesta típica"], rows:[
     ["What does he look like?","el físico","He's tall, with red hair."],
     ["What is he like?","el carácter","He's quiet and very kind."],
     ["What does he like?","los gustos","He likes football."],
     ["How is he?","cómo está hoy","He's fine, thank you."]
   ]},
   aviso:["<i>Like</i> aquí no es «gustar»","En <i>look like</i> y <i>be like</i>, la palabra <i>like</i> significa «como», no «gustar». Por eso <i>What does he like?</i> pregunta otra cosa completamente distinta."]},

  {t:"Describir con WITH y con IN", s:"the man with the beard",
   p:"Para señalar a alguien entre varias personas no hace falta una frase entera: basta una preposición. <b>With</b> para lo que la persona tiene; <b>in</b> para lo que lleva puesto.",
   chips:[["the man with the beard","el hombre de la barba"],["the girl with glasses","la chica de lentes"],["the woman in the blue dress","la mujer del vestido azul"],["the boy in the red jacket","el niño de la chaqueta roja"]],
   aviso:["<i>In</i>, no <i>with</i>, para la ropa","<span class='wrong'>the woman with the blue dress</span> &nbsp;&rarr;&nbsp; <span class='right'>the woman <b>in</b> the blue dress</span>. Con <i>with</i> sonaría a que lleva el vestido en la mano."]},

  {t:"Graduar el adjetivo", s:"very, quite, a bit, really",
   p:"Cuatro palabritas que van <b>delante del adjetivo</b> y cambian la intensidad. La que hay que vigilar es <i>a bit</i>.",
   table:{head:["Intensificador","Fuerza","Ejemplo"], rows:[
     ["really / very","mucho","She's really funny."],
     ["quite","bastante","He's quite tall."],
     ["a bit","un poco","He's a bit shy."],
     ["not very","poco","He's not very patient."]
   ]},
   aviso:["<i>A bit</i> sólo con lo negativo","Se dice <i>a bit shy</i>, <i>a bit tired</i>, <i>a bit boring</i>, pero no <span class='wrong'>a bit beautiful</span>. Para lo bueno se usa <i>quite</i>."]},

  {t:"Los adjetivos compuestos", s:"good-looking, dark-haired",
   p:"El inglés une dos palabras con un guion y fabrica un adjetivo nuevo. El truco está en que <b>la segunda palabra no lleva plural</b>, aunque describa algo que en español iría en plural.",
   chips:[["good-looking","guapo"],["dark-haired","de pelo oscuro"],["blue-eyed","de ojos azules"],["hard-working","trabajador"]],
   aviso:["Sin plural dentro del adjetivo","<span class='wrong'>a blue-eyes girl</span> &nbsp;&rarr;&nbsp; <span class='right'>a blue-eyed girl</span>. Dentro del guion el sustantivo se queda en singular y se le añade <i>-ed</i>."]}
];

/* Mr. Ortega (A) encarga a David (B) recoger a dos estudiantes nuevos */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd aɪ niːd ə ˈfeɪvər ə njuː ˈstuːdnt əˈraɪvz təˈmɑːroʊ", p:"déivid, ái níid a féivar. a niú stúudent aráivs tumárou",
  b:[["David,","David,"],["I need a favour.","necesito un favor."],["A new student","Un estudiante nuevo"],["arrives tomorrow.","llega mañana."]]},
 {s:"B", ipa:"əv ˈkɔːrs duː juː wɑːnt miː tuː miːt hɪm æt ðə bʌs ˈsteɪʃn", p:"av kórs. du iú uánt mi tu míit jim at da bas stéishon",
  b:[["Of course.","Por supuesto."],["Do you want me","¿Quiere que"],["to meet him","lo recoja"],["at the bus station?","en la terminal?"]]},
 {s:"A", ipa:"jes pliːz hɪz neɪm ɪz tɑːm ænd hiːz frʌm ˈaɪərlənd", p:"iés, plíis. jis néim is Tom and jíis from Áiarland",
  b:[["Yes, please.","Sí, por favor."],["His name is Tom","Se llama Tom"],["and he's","y es"],["from Ireland.","de Irlanda."]]},
 {s:"B", ipa:"wʌt dʌz hiː lʊk laɪk", p:"uát das ji luk láik",
  b:[["What does he","¿Cómo es él"],["look like?","físicamente?"]],
  n:"<b>Look like</b> pregunta por el aspecto. Con <i>What is he like?</i> preguntarías por el carácter."},
 {s:"A", ipa:"hiːz tɔːl ænd θɪn ænd hi hæz ʃɔːrt red her", p:"jíis tol and zin, and ji jas short red jér",
  b:[["He's tall","Es alto"],["and thin,","y delgado,"],["and he has","y tiene"],["short red hair.","el pelo corto y pelirrojo."]],
  n:"<b>He is</b> con los adjetivos, <b>he has</b> con las partes del cuerpo. Nunca <span class='wrong'>he is red hair</span>."},
 {s:"B", ipa:"red her ðen ɪts ˈiːzi dʌz hi wer ˈɡlæsɪz", p:"red jér. den its íisi. das ji uér glásis",
  b:[["Red hair?","¿Pelirrojo?"],["Then it's easy.","Entonces es fácil."],["Does he wear","¿Usa"],["glasses?","lentes?"]]},
 {s:"A", ipa:"hi dʌz jes smɔːl raʊnd ˈɡlæsɪz ænd hiːz ɡɑːt ə bɪrd", p:"ji das, iés. smóol ráund glásis. and jíis gat a bíard",
  b:[["He does, yes.","Sí, usa."],["Small round glasses.","Lentes redondos y pequeños."],["And he's got","Y tiene"],["a beard.","barba."]],
  n:"<b>He's got</b> es <i>he has got</i>: lo mismo que <i>he has</i>, pero es lo que se oye al hablar."},
 {s:"B", ipa:"haʊ oʊld ɪz hi", p:"jáu óuld is ji",
  b:[["How old","¿Cuántos años"],["is he?","tiene?"]],
  n:"La edad va con <b>to be</b>: <i>how old <b>is</b> he</i>, nunca <span class='wrong'>how many years has he</span>."},
 {s:"A", ipa:"hiːz ˈtwenti fɔːr hi lʊks ˈjʌŋɡər bʌt hiːz ˈtwenti fɔːr", p:"jíis tuénti-fór. ji luks iánguer, bat jíis tuénti-fór",
  b:[["He's twenty-four.","Tiene veinticuatro."],["He looks younger,","Parece más joven,"],["but he's twenty-four.","pero tiene veinticuatro."]]},
 {s:"B", ipa:"ænd wʌt ɪz hi laɪk", p:"and uát is ji láik",
  b:[["And what is he like?","¿Y cómo es de carácter?"]],
  n:"Misma palabra <i>like</i>, otra pregunta: aquí sí es el carácter."},
 {s:"A", ipa:"hiːz ˈveri ˈkwaɪət ænd ə bɪt ʃaɪ bʌt hiːz ˈrɪəli ˈfrendli", p:"jíis véri kuáiet and a bit shái, bat jíis ríili fréndli",
  b:[["He's very quiet","Es muy callado"],["and a bit shy,","y un poco tímido,"],["but he's","pero es"],["really friendly.","muy simpático."]],
  n:"<b>A bit</b> sólo con adjetivos negativos: <i>a bit shy</i>, sí; <span class='wrong'>a bit friendly</span>, no."},
 {s:"B", ipa:"ˈkwaɪət ɪz ɡʊd maɪ ˈkʌznz ɑːr nɑːt ˈkwaɪət æt ɔːl", p:"kuáiet is gud. mái kásns ar nat kuáiet at ol",
  b:[["Quiet is good.","Callado está bien."],["My cousins","Mis primos"],["are not quiet","no son callados"],["at all.","para nada."]]},
 {s:"A", ipa:"aɪ noʊ jʊr ˈkʌznz ˈnoʊbɑːdi ɪz ˈkwaɪət nekst tuː ðem", p:"ái nóu iór kásns. nóubadi is kuáiet nekst tu dem",
  b:[["I know your cousins.","Conozco a tus primos."],["Nobody is quiet","Nadie está callado"],["next to them.","al lado de ellos."]]},
 {s:"B", ipa:"ɪz hi ˈkʌmɪŋ əˈloʊn", p:"is ji káming alóun",
  b:[["Is he coming","¿Viene"],["alone?","solo?"]]},
 {s:"A", ipa:"noʊ hɪz ˈsɪstər ɪz ˈkʌmɪŋ tuː hɜːr neɪm ɪz ˈemə", p:"nóu. jis sístar is káming túu. jer néim is Éma",
  b:[["No.","No."],["His sister","Su hermana"],["is coming too.","viene también."],["Her name is Emma.","Se llama Emma."]]},
 {s:"B", ipa:"wʌt dʌz ʃi lʊk laɪk", p:"uát das shi luk láik",
  b:[["What does she","¿Y ella cómo es"],["look like?","físicamente?"]]},
 {s:"A", ipa:"ʃiːz ʃɔːrt wɪð lɔːŋ dɑːrk her ænd ɡriːn aɪz ʃiːz ˈtwenti", p:"shíis short, uid long dark jér and gríin áis. shíis tuénti",
  b:[["She's short,","Es baja,"],["with long dark hair","de pelo largo y oscuro"],["and green eyes.","y ojos verdes."],["She's twenty.","Tiene veinte."]],
  n:"<b>With</b> para lo que la persona tiene. Para la ropa sería <i>in</i>: <i>the girl in the red jacket</i>."},
 {s:"B", ipa:"duː ðeɪ lʊk laɪk ˈbrʌðər ænd ˈsɪstər", p:"du déi luk láik bráder and sístar",
  b:[["Do they look like","¿Se parecen"],["brother and sister?","a hermanos?"]]},
 {s:"A", ipa:"nɑːt æt ɔːl ʃiːz dɑːrk ˈheərd ænd hiːz red ˈheərd bʌt ðeɪ hæv ðə seɪm smaɪl", p:"nat at ol. shíis dark-jérd and jíis red-jérd. bat déi jav da séim smáil",
  b:[["Not at all.","Para nada."],["She's dark-haired","Ella es de pelo oscuro"],["and he's red-haired.","y él, pelirrojo."],["But they have","Pero tienen"],["the same smile.","la misma sonrisa."]],
  n:"<b>Dark-haired</b>: dentro del guion, <i>hair</i> va en singular y se le añade <i>-ed</i>."},
 {s:"B", ipa:"ðə seɪm smaɪl ðæts ə ɡʊd dɪˈteɪl", p:"da séim smáil. dats a gud dítail",
  b:[["The same smile.","La misma sonrisa."],["That's a good detail.","Ese es un buen detalle."]]},
 {s:"A", ipa:"ˈemə ɪz ði ˈɑːpəzɪt əv tɑːm ʃiːz ˈfʌni ænd ʃi tɔːks ə lɑːt", p:"Éma is di ápasit av Tom. shíis fáni and shi toks a lat",
  b:[["Emma is the opposite","Emma es lo contrario"],["of Tom.","de Tom."],["She's funny","Es divertida"],["and she talks a lot.","y habla mucho."]]},
 {s:"B", ipa:"ðen ðə trɪp hoʊm ɪz ˈɡoʊɪŋ tuː biː ˈɪntrəstɪŋ", p:"den da trip jóum is góing tu bi íntrasting",
  b:[["Then the trip home","Entonces el viaje de regreso"],["is going to be","va a ser"],["interesting.","interesante."]]},
 {s:"A", ipa:"wʌn mɔːr θɪŋ tɑːm ɪz ˈwerɪŋ ə bluː ˈdʒækɪt təˈdeɪ ʃi toʊld miː", p:"uán mor zing. Tom is uéring a blúu chákit tudéi: shi tóuld mi",
  b:[["One more thing.","Una cosa más."],["Tom is wearing","Tom lleva puesta"],["a blue jacket today;","una chaqueta azul hoy;"],["she told me.","ella me lo dijo."]]},
 {s:"B", ipa:"ˈpɜːrfɪkt ə tɔːl mæn wɪð ə bɪrd ɪn ə bluː ˈdʒækɪt aɪl faɪnd hɪm", p:"pérfect. a tol man uid a bíard, in a blúu chákit. áil fáind jim",
  b:[["Perfect.","Perfecto."],["A tall man","Un hombre alto"],["with a beard,","con barba,"],["in a blue jacket.","de chaqueta azul."],["I'll find him.","Lo encuentro."]],
  n:"<b>With</b> la barba, <b>in</b> la chaqueta. Las dos preposiciones en la misma frase."}
];

const LECTURA = {
  titulo: "The two from Ireland",
  entradilla: "David describe a los dos estudiantes nuevos y, de paso, a medio barrio. El texto usa lo estudiado en la Fase 1: <i>be</i> frente a <i>have</i>, <i>have got</i>, <i>look like</i> frente a <i>be like</i>, las descripciones con <i>with</i> y con <i>in</i>, los intensificadores y los adjetivos compuestos. Cada párrafo cambia de persona.",
  parrafos: [
    "Tom is the new student. He is tall and thin, and he has short red hair and a beard. He wears small round glasses and he is twenty-four, but he looks younger. He is quiet and a bit shy, and he never speaks first.",
    "His sister Emma is the opposite. She is short, with long dark hair and green eyes, and she is only twenty. She is very funny and she talks a lot. They don't look like brother and sister, but they have got the same smile.",
    "We met them at the bus station on Monday. I looked for a tall man with a beard, in a blue jacket, and I found him in two minutes. They were tired, because the journey took nine hours, but they were really happy.",
    "Mr. Ortega is a serious man with grey hair and a strong voice, and everybody thinks he is strict. He isn't. Mrs. Castro says he is the kindest person on our street. Now Tom and Emma live in her house, and she is very happy about that."
  ],
  glosario: [
    ["is","ɪz","es","is"],
    ["has","hæz","tiene","jas"],
    ["have got","hæv ɡɑːt","tienen","jav gat"],
    ["wears","werz","usa, lleva puesto","uérs"],
    ["looks","lʊks","parece","luks"],
    ["look like","lʊk laɪk","parecerse a","luk láik"],
    ["speaks","spiːks","habla","spíiks"],
    ["talks","tɔːks","habla","toks"],
    ["says","sez","dice","ses"],
    ["thinks","θɪŋks","cree","zinks"],
    ["met","met","conocimos, recogimos","met"],
    ["looked for","lʊkt fɔːr","busqué","lukt for"],
    ["found","faʊnd","encontré","fáund"],
    ["took","tʊk","duró","tuk"],
    ["live","lɪv","viven","liv"],
    ["tall","tɔːl","alto","tol"],
    ["thin","θɪn","delgado","zin"],
    ["short","ʃɔːrt","baja; corto","short"],
    ["red hair","red her","pelo pelirrojo","red jér"],
    ["dark","dɑːrk","oscuro","dark"],
    ["long","lɔːŋ","largo","long"],
    ["grey","ɡreɪ","gris, canoso","gréi"],
    ["green","ɡriːn","verdes","gríin"],
    ["beard","bɪrd","barba","bíard"],
    ["glasses","ˈɡlæsɪz","lentes","glásis"],
    ["round","raʊnd","redondos","ráund"],
    ["eyes","aɪz","ojos","áis"],
    ["smile","smaɪl","sonrisa","smáil"],
    ["voice","vɔɪs","voz","vóis"],
    ["younger","ˈjʌŋɡər","más joven","iánguer"],
    ["quiet","ˈkwaɪət","callado","kuáiet"],
    ["shy","ʃaɪ","tímido","shái"],
    ["funny","ˈfʌni","divertida","fáni"],
    ["serious","ˈsɪriəs","serio","sírias"],
    ["strict","strɪkt","estricto","strikt"],
    ["strong","strɔːŋ","fuerte","strong"],
    ["kindest","ˈkaɪndɪst","la más amable","káindist"],
    ["tired","ˈtaɪərd","cansados","táiard"],
    ["happy","ˈhæpi","contentos","jápi"],
    ["a bit","ə bɪt","un poco","a bit"],
    ["really","ˈrɪəli","muy, de verdad","ríili"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["opposite","ˈɑːpəzɪt","lo contrario","ápasit"],
    ["student","ˈstuːdnt","estudiante","stúudent"],
    ["sister","ˈsɪstər","hermana","sístar"],
    ["brother","ˈbrʌðər","hermano","bráder"],
    ["person","ˈpɜːrsn","persona","pérsn"],
    ["jacket","ˈdʒækɪt","chaqueta","chákit"],
    ["bus station","bʌs ˈsteɪʃn","terminal de buses","bas stéishon"],
    ["journey","ˈdʒɜːrni","viaje","chérni"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["street","striːt","calle","stríit"],
    ["house","haʊs","casa","jáus"],
    ["Tom","tɑːm","Tom (nombre)","tom"],
    ["Emma","ˈemə","Emma (nombre)","éma"],
    ["Ireland","ˈaɪərlənd","Irlanda","áiarland"],
    ["first","fɜːrst","primero","ferst"],
    ["never","ˈnevər","nunca","névar"],
    ["about that","əˈbaʊt ðæt","por eso","abáut dat"]
  ],
  preguntas: [
    { q:"What does Tom look like?",
      ops:["Short, with dark hair","Tall and thin, with red hair","Tall, with grey hair"], ok:1,
      pista:"Primer párrafo, segunda frase. Una de las opciones describe a Mr. Ortega." },
    { q:"How are Tom and Emma similar?",
      ops:["They have got the same smile","They both have red hair","They are both very quiet"], ok:0,
      pista:"Segundo párrafo: el texto dice primero en qué <i>no</i> se parecen." },
    { q:"What does Mrs. Castro say about Mr. Ortega?",
      ops:["That he is strict","That he has a strong voice","That he is the kindest person on the street"], ok:2,
      pista:"Cuarto párrafo: ella opina lo contrario de lo que cree todo el mundo." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-19"] = {
  meta: {
    id: "a1-19", nivel: "A1", numero: 19,
    titulo: "Descripción de personas",
    descriptor: "Puedo describir el aspecto físico y el carácter de una persona, preguntar por ellos y reconocer a alguien a partir de una descripción.",
    escena: "Mr. Ortega & David · el pasillo del instituto, la víspera de la llegada de dos estudiantes",
    personajeIA: "Mr. Ortega", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
