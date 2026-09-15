/* ============================================================
   LECCIÓN A1-16 · Vacaciones (pasado irregular)
   Reparto: Ana, la hermana de David, la noche que vuelve del viaje.
   La lectura recoge los seis puntos de gramática y los doce verbos
   irregulares de la Fase 1, repartidos entre yo, ella, ellos y él.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El viaje", items:[
    ["trip","trɪp","viaje","trip"],["holiday","ˈhɑːlɪdeɪ","vacaciones","jálidei"],
    ["flight","flaɪt","vuelo","fláit"],["ticket","ˈtɪkɪt","boleto","tíket"],
    ["suitcase","ˈsuːtkeɪs","maleta","súutkeis"],["backpack","ˈbækpæk","mochila","bákpak"],
    ["passport","ˈpæspɔːrt","pasaporte","pásport"],["map","mæp","mapa","map"],
    ["bus station","bʌs ˈsteɪʃn","terminal de buses","bas stéishon"],["airport","ˈerpɔːrt","aeropuerto","érport"]
  ]},
  {g:"Verbos irregulares en pasado", items:[
    ["went","went","fui, fuimos","uént"],["saw","sɔː","vi, vimos","sóo"],
    ["took","tʊk","tomé, tomamos","tuk"],["ate","eɪt","comí, comimos","éit"],
    ["drank","dræŋk","bebí, bebimos","dránk"],["got","ɡɑːt","conseguí, llegué","gat"],
    ["came","keɪm","vine, vinieron","kéim"],["bought","bɔːt","compré, compró","bóot"],
    ["left","left","salí, salieron","left"],["flew","fluː","volé, volaron","flúu"],
    ["swam","swæm","nadé, nadaron","suám"],["slept","slept","dormí, durmieron","slept"],
    ["found","faʊnd","encontré, encontró","fáund"],["met","met","conocí, conocimos","met"],
    ["woke up","woʊk ʌp","me desperté","uóuk ap"],["paid","peɪd","pagué, pagó","péid"]
  ]},
  {g:"Dónde estuvimos", items:[
    ["island","ˈaɪlənd","isla","áiland"],["beach","biːtʃ","playa","bíich"],
    ["sea","siː","mar","síi"],["sand","sænd","arena","sand"],
    ["mountain","ˈmaʊntən","montaña","máunten"],["ruins","ˈruːɪnz","ruinas","rúuins"],
    ["hotel","hoʊˈtel","hotel","joutél"],["room","ruːm","habitación","rúum"],
    ["boat","boʊt","bote, lancha","bóut"],["market","ˈmɑːrkɪt","mercado","márket"]
  ]},
  {g:"Cómo estuvo", items:[
    ["amazing","əˈmeɪzɪŋ","increíble","améising"],["boring","ˈbɔːrɪŋ","aburrido","bóoring"],
    ["expensive","ɪkˈspensɪv","caro","ikspénsiv"],["cheap","tʃiːp","barato","chíip"],
    ["far","fɑːr","lejos","far"],["near","nɪr","cerca","níar"],
    ["full","fʊl","lleno","ful"],["safe","seɪf","seguro","séif"],
    ["How long…?","haʊ lɔːŋ","¿cuánto tiempo?","jáu long"],["How far…?","haʊ fɑːr","¿a qué distancia?","jáu far"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, sin raspar.","how &rarr; jáu"],
  ["z","Lengua entre los dientes, sin voz.","thank &rarr; zánk"],
  ["sh","Como pedir silencio.","station &rarr; stéishon"],
  ["ch","Como en «coche».","beach &rarr; bíich"],
  ["v","Labio de abajo contra los dientes de arriba.","expensive &rarr; ikspénsiv"],
  ["óo","Vocal larga y abierta, como un «o» estirada.","saw &rarr; sóo"],
  ["úu","Vocal larga, labios muy cerrados.","flew &rarr; flúu"],
  ["r final","Apenas se toca; nunca vibra.","far &rarr; far"],
  ["-ght","La <i>gh</i> es muda: <i>bought</i> suena «bóot».","bought &rarr; bóot"]
];

const VERBS = [
  ["to go","irr","go · goes","went","will go","ir"],
  ["to see","irr","see · sees","saw","will see","ver"],
  ["to take","irr","take · takes","took","will take","tomar, llevar"],
  ["to eat","irr","eat · eats","ate","will eat","comer"],
  ["to drink","irr","drink · drinks","drank","will drink","beber"],
  ["to get","irr","get · gets","got","will get","conseguir, llegar"],
  ["to come","irr","come · comes","came","will come","venir"],
  ["to buy","irr","buy · buys","bought","will buy","comprar"],
  ["to leave","irr","leave · leaves","left","will leave","salir, dejar"],
  ["to fly","irr","fly · flies","flew","will fly","volar"],
  ["to swim","irr","swim · swims","swam","will swim","nadar"],
  ["to sleep","irr","sleep · sleeps","slept","will sleep","dormir"]
];

const GRAMMAR = [
  {t:"El pasado irregular", s:"no hay regla: hay lista",
   p:"En la lección anterior el pasado era <b>-ed</b> para todo. Estos verbos no lo hacen: cambian de forma y hay que memorizarlos. La buena noticia es que, como los regulares, <b>son iguales para todas las personas</b>: <i>I went, she went, they went</i>.",
   table:{head:["Infinitivo","Pasado","Español"], rows:[
     ["go","went","ir"],
     ["see","saw","ver"],
     ["take","took","tomar"],
     ["eat","ate","comer"],
     ["buy","bought","comprar"],
     ["come","came","venir"],
     ["sleep","slept","dormir"],
     ["fly","flew","volar"]
   ]},
   aviso:["Son los verbos más usados del idioma","No es mala suerte: los irregulares son irregulares <b>porque</b> se usan muchísimo. Doce verbos bien memorizados cubren la mitad de lo que dirás en pasado."]},

  {t:"La negación y la pregunta", s:"didn't + verbo base",
   p:"Aquí no cambia nada respecto a la lección anterior: <b>did</b> se lleva la marca de pasado y el verbo irregular <b>vuelve a su forma base</b>.",
   table:{head:["Función","Ejemplo"], rows:[
     ["Afirmativo","We went to the island."],
     ["Negativo","We didn't go to the island."],
     ["Pregunta","Did you go to the island?"],
     ["Respuesta corta","Yes, I did. / No, I didn't."]
   ]},
   aviso:["El error clásico de esta lección","<span class='wrong'>I didn't went.</span> &nbsp;&rarr;&nbsp; <span class='right'>I didn't go.</span> &nbsp; <span class='wrong'>Did you saw it?</span> &nbsp;&rarr;&nbsp; <span class='right'>Did you see it?</span> El pasado ya está en <i>did</i>."]},

  {t:"Había: THERE WAS / THERE WERE", s:"el pasado de there is / there are",
   p:"El español usa una sola palabra, <i>había</i>, para singular y plural. El inglés distingue: <b>there was</b> para uno, <b>there were</b> para varios.",
   table:{head:["Presente","Pasado","Ejemplo"], rows:[
     ["there is","there was","There was a small hotel."],
     ["there are","there were","There were six rooms."],
     ["there isn't","there wasn't","There wasn't enough time."],
     ["Is there…?","Was there…?","Was there a beach?"]
   ]},
   aviso:["Nunca lleva <i>did</i>","<span class='wrong'>Did there be a hotel?</span> &nbsp;&rarr;&nbsp; <span class='right'>Was there a hotel?</span> Es el verbo <i>to be</i>: se invierte solo."]},

  {t:"Cuánto y cuán lejos", s:"How long? How far? How much?",
   p:"Tres preguntas que necesitarás en cualquier viaje. Todas se construyen igual: <b>How + palabra + did + sujeto + verbo base</b>.",
   chips:[["How long did you stay?","¿Cuánto tiempo se quedaron?"],["How far is the beach?","¿A qué distancia está la playa?"],["How much did it cost?","¿Cuánto costó?"],["How many rooms were there?","¿Cuántas habitaciones había?"]],
   aviso:["<i>How long</i> no es «qué tan largo»","Pregunta por <b>duración</b>, no por medidas. Para la distancia se usa <i>how far</i>."]},

  {t:"Las preposiciones del viaje", s:"to, in, at, by, on",
   p:"El inglés es muy estricto aquí y el español no ayuda, porque casi todo se dice con «a» o «en».",
   table:{head:["Preposición","Se usa para","Ejemplo"], rows:[
     ["go to","destino","We went to Roatán."],
     ["arrive in","llegar a una ciudad o país","We arrived in Honduras."],
     ["arrive at","llegar a un lugar concreto","We arrived at the hotel."],
     ["stay at","alojarse","We stayed at a small hotel."],
     ["by bus / by plane","medio de transporte","We travelled by bus."],
     ["on foot","a pie","We went on foot."]
   ]},
   aviso:["<i>Go</i> nunca lleva <i>to</i> delante de <i>home</i>","<span class='wrong'>We went to home.</span> &nbsp;&rarr;&nbsp; <span class='right'>We went home.</span> <i>Home</i> funciona como un adverbio, no como un lugar."]},

  {t:"Cuánto se tardó: IT TOOK", s:"it took + persona + tiempo",
   p:"Para decir cuánto se tarda en algo, el inglés usa <b>take</b>, no <i>be</i>. La estructura no tiene equivalente literal en español, así que conviene aprenderla entera.",
   chips:[["It took us eight hours.","Nos tomó ocho horas."],["It took an hour.","Tardó una hora."],["How long did it take?","¿Cuánto tardó?"],["It didn't take long.","No tardó mucho."]],
   aviso:["No se dice <i>it was eight hours</i>","<span class='wrong'>The trip was eight hours for us.</span> &nbsp;&rarr;&nbsp; <span class='right'>It took us eight hours.</span>"]}
];

/* Ana (A, la hermana) vuelve de Roatán y David (B) la interroga */
const DIALOGUE = [
 {s:"A", ipa:"aɪm hoʊm aɪm soʊ taɪərd", p:"áim jóum. áim sóu táiard",
  b:[["I'm home!","¡Ya llegué!"],["I'm so tired.","Estoy muy cansada."]],
  n:"<b>I'm home</b>, sin <i>to</i>. <i>Home</i> no se trata como un lugar sino como un adverbio."},
 {s:"B", ipa:"ˈfaɪnəli haʊ wʌz ðə trɪp", p:"fáinali. jáu uás da trip",
  b:[["Finally!","¡Por fin!"],["How was","¿Qué tal estuvo"],["the trip?","el viaje?"]],
  n:"<b>How was…?</b> El pasado de <i>to be</i> se invierte solo: nunca <span class='wrong'>did it was</span>."},
 {s:"A", ipa:"ɪt wʌz əˈmeɪzɪŋ wi went tuː roʊəˈtɑːn ænd wi swæm ˈevri deɪ", p:"it uás améising. ui uént tu Roatán and ui suám évri déi",
  b:[["It was","Estuvo"],["amazing.","increíble."],["We went","Fuimos"],["to Roatán","a Roatán"],["and we swam","y nadamos"],["every day.","todos los días."]],
  n:"<b>Went</b> es el pasado de <i>go</i>; <b>swam</b>, el de <i>swim</i>. Ninguno lleva <i>-ed</i>."},
 {s:"B", ipa:"dɪd juː flaɪ ɔːr dɪd juː teɪk ðə bʌs", p:"did iú flái, or did iú téik da bas",
  b:[["Did you fly","¿Volaron"],["or","o"],["did you take","tomaron"],["the bus?","el bus?"]],
  n:"Tras <b>did</b>, el verbo vuelve a su forma base: <i>fly</i>, <i>take</i>. Nunca <span class='wrong'>did you flew</span>."},
 {s:"A", ipa:"wi tʊk ðə bʌs ɪt tʊk ʌs eɪt ˈaʊərz", p:"ui tuk da bas. it tuk as éit áuars",
  b:[["We took","Tomamos"],["the bus.","el bus."],["It took us","Nos tomó"],["eight hours.","ocho horas."]],
  n:"Dos usos de <b>took</b> seguidos: «tomamos el bus» y «nos tomó ocho horas». La segunda estructura no existe igual en español."},
 {s:"B", ipa:"eɪt ˈaʊərz wʌz ɪt ɪkˈspensɪv", p:"éit áuars. uás it ikspénsiv",
  b:[["Eight hours!","¡Ocho horas!"],["Was it","¿Fue"],["expensive?","caro?"]]},
 {s:"A", ipa:"noʊ ɪt ˈwʌznt ðə ˈtɪkɪt wʌz tʃiːp bʌt ðə hoʊˈtel wʌz ɪkˈspensɪv", p:"nóu, it uásnt. da tíket uás chíip, bat da joutél uás ikspénsiv",
  b:[["No, it wasn't.","No, no lo fue."],["The ticket","El boleto"],["was cheap,","fue barato,"],["but","pero"],["the hotel","el hotel"],["was expensive.","fue caro."]]},
 {s:"B", ipa:"wer dɪd juː sliːp ðə fɜːrst naɪt", p:"uér did iú slíip da ferst náit",
  b:[["Where did you sleep","¿Dónde durmieron"],["the first night?","la primera noche?"]],
  n:"<b>Did you sleep</b>, no <span class='wrong'>did you slept</span>."},
 {s:"A", ipa:"wi slept æt ə smɔːl hoʊˈtel nɪr ðə biːtʃ ðer wɜːr ˈoʊnli sɪks ruːmz", p:"ui slept at a smóol joutél níar da bíich. der uér óunli siks rúums",
  b:[["We slept","Dormimos"],["at a small hotel","en un hotel pequeño"],["near the beach.","cerca de la playa."],["There were","Había"],["only six rooms.","sólo seis habitaciones."]],
  n:"<b>Stay at / sleep at</b> para un lugar concreto. Y <b>there were</b> porque <i>rooms</i> es plural."},
 {s:"B", ipa:"ˈoʊnli sɪks wʌz ɪt fʊl", p:"óunli siks. uás it ful",
  b:[["Only six?","¿Sólo seis?"],["Was it full?","¿Estaba lleno?"]]},
 {s:"A", ipa:"jes ɪt wʌz ðer wʌz ə ˈfæməli frʌm ˈkænədə ænd wi met ˈserəz ˈkʌzn", p:"iés, it uás. der uás a fámili from Kánada, and ui met Séras kásn",
  b:[["Yes, it was.","Sí, lo estaba."],["There was","Había"],["a family","una familia"],["from Canada,","de Canadá,"],["and we met","y conocimos"],["Sarah's cousin.","al primo de Sarah."]],
  n:"<b>There was</b> en singular, <b>there were</b> en plural. El español dice «había» en los dos casos."},
 {s:"B", ipa:"ˈrɪəli dɪd juː tɔːk tuː hɪm", p:"ríili. did iú tok tu jim",
  b:[["Really?","¿En serio?"],["Did you talk","¿Hablaron"],["to him?","con él?"]]},
 {s:"A", ipa:"wi dɪd wi eɪt təˈɡeðər ɑːn ˈfraɪdeɪ ænd hi bɔːt ʌs ə ˈkɑːfi", p:"ui did. ui éit tuguéder an fráidei, and ji bóot as a káfi",
  b:[["We did.","Sí."],["We ate","Comimos"],["together","juntos"],["on Friday","el viernes"],["and he bought us","y él nos compró"],["a coffee.","un café."]],
  n:"<b>Bought</b> suena «bóot»: la <i>gh</i> es muda."},
 {s:"B", ipa:"wʌt dɪd juː iːt", p:"uát did iú íit",
  b:[["What did you eat?","¿Qué comieron?"]]},
 {s:"A", ipa:"wi eɪt fɪʃ ænd raɪs ænd aɪ dræŋk θriː ˈɡlɑːsɪz əv ˈwɔːtər", p:"ui éit fish and ráis, and ái dránk zri glásis av uóter",
  b:[["We ate","Comimos"],["fish and rice,","pescado y arroz,"],["and I drank","y yo bebí"],["three glasses","tres vasos"],["of water.","de agua."]]},
 {s:"B", ipa:"ænd ˈpɑːbloʊ ænd ˈniːkoʊ dɪd ðeɪ ɡoʊ wɪð juː", p:"and Páblou and Níkou. did déi góu uid iú",
  b:[["And Pablo and Nico?","¿Y Pablo y Nico?"],["Did they go","¿Fueron"],["with you?","con ustedes?"]]},
 {s:"A", ipa:"ðeɪ keɪm ɑːn ˈsætərdeɪ ðeɪ left ðə ˈsɪti æt faɪv ɪn ðə ˈmɔːrnɪŋ", p:"déi kéim an sáterdei. déi left da síti at fáiv in da mórning",
  b:[["They came","Vinieron"],["on Saturday.","el sábado."],["They left","Salieron"],["the city","de la ciudad"],["at five","a las cinco"],["in the morning.","de la mañana."]],
  n:"<b>Leave</b> significa salir <i>de</i> un sitio y no necesita preposición: <i>they left the city</i>."},
 {s:"B", ipa:"pʊr ðem dɪd ðeɪ laɪk ðə ˈaɪlənd", p:"púr dem. did déi láik da áiland",
  b:[["Poor them.","Pobres."],["Did they like","¿Les gustó"],["the island?","la isla?"]]},
 {s:"A", ipa:"ðeɪ lʌvd ɪt ðeɪ swæm ɔːl ˌɑːftərˈnuːn ænd ðen ðeɪ slept ɑːn ðə sænd", p:"déi lavd it. déi suám ol afternúun, and den déi slept an da sand",
  b:[["They loved it.","Les encantó."],["They swam","Nadaron"],["all afternoon","toda la tarde"],["and then","y luego"],["they slept","durmieron"],["on the sand.","en la arena."]],
  n:"Un regular y dos irregulares en la misma línea: <b>loved</b>, <b>swam</b>, <b>slept</b>."},
 {s:"B", ipa:"aɪ sɔː ðer ˈfoʊtoʊz ðə siː wʌz ˈbjuːtɪfl", p:"ái sóo der fóutous. da síi uás biútiful",
  b:[["I saw","Vi"],["their photos.","sus fotos."],["The sea","El mar"],["was beautiful.","estaba hermoso."]]},
 {s:"A", ipa:"ɪt wʌz wi ˈdɪdnt wɑːnt tuː ɡoʊ hoʊm", p:"it uás. ui dídnt uánt tu góu jóum",
  b:[["It was.","Lo estaba."],["We didn't want","No queríamos"],["to go home.","volver a casa."]],
  n:"<b>Go home</b>, sin <i>to</i> delante de <i>home</i>."},
 {s:"B", ipa:"haʊ lɔːŋ dɪd juː steɪ ðer", p:"jáu long did iú stéi der",
  b:[["How long","¿Cuánto tiempo"],["did you stay","se quedaron"],["there?","allá?"]],
  n:"<b>How long</b> pregunta por duración. Para distancia sería <i>how far</i>."},
 {s:"A", ipa:"sɪks deɪz aɪ bɔːt juː ə ʃɜːrt ænd ə mæp əv ðə ˈaɪlənd", p:"siks déis. ái bóot iú a shert and a map av da áiland",
  b:[["Six days.","Seis días."],["I bought you","Te compré"],["a shirt","una camisa"],["and a map","y un mapa"],["of the island.","de la isla."]]},
 {s:"B", ipa:"θæŋk juː nekst jɪr aɪ wɑːnt tuː ɡoʊ tuː", p:"zánk iú. nekst íer ái uánt tu góu túu",
  b:[["Thank you!","¡Gracias!"],["Next year","El año que viene"],["I want to go","quiero ir"],["too.","yo también."]]}
];

const LECTURA = {
  titulo: "The island week",
  entradilla: "El viaje de Ana contado entero en pasado. El texto reúne todo lo de la Fase 1: los doce verbos irregulares, la negación con <i>didn't</i>, <i>there was</i> frente a <i>there were</i>, las preposiciones de viaje y la estructura <i>it took</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Last month we went to Roatán for a week. We didn't fly, because the flight was too expensive: we took the bus and it took us eight hours. I slept for three hours and I woke up in a different world. The sea was green, the sand was white, and there wasn't a single cloud in the sky.",
    "My sister Ana found the hotel on the internet. She paid for two rooms and she got a good price, because it was not the high season. There were only six rooms and a very small kitchen. She says it was the best hotel of her life, but she says that about every hotel.",
    "Pablo and Nico came on Saturday. They left the city at five in the morning and they arrived at two in the afternoon. They swam all afternoon, they ate fish on the beach and then they slept on the sand for an hour. Nobody woke them up.",
    "Mr. Ortega was on the island too, with his wife. He saw us at the market and he bought us a coffee. \"Did you go to the ruins?\" he asked. We didn't go: there wasn't enough time. We came home on Sunday night, and this morning everybody wanted to see the photos."
  ],
  glosario: [
    ["went","went","fuimos","uént"],
    ["didn't fly","ˈdɪdnt flaɪ","no volamos","dídnt flái"],
    ["fly","flaɪ","volar","flái"],
    ["took","tʊk","tomamos; tardó","tuk"],
    ["slept","slept","dormí, durmieron","slept"],
    ["woke up","woʊk ʌp","me desperté","uóuk ap"],
    ["found","faʊnd","encontró","fáund"],
    ["paid","peɪd","pagó","péid"],
    ["got","ɡɑːt","consiguió","gat"],
    ["says","sez","dice","ses"],
    ["came","keɪm","vinieron","kéim"],
    ["left","left","salieron de","left"],
    ["arrived","əˈraɪvd","llegaron","aráivd"],
    ["swam","swæm","nadaron","suám"],
    ["ate","eɪt","comieron","éit"],
    ["saw","sɔː","vio","sóo"],
    ["bought","bɔːt","compró","bóot"],
    ["asked","æskt","preguntó","askt"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["woke them up","woʊk ðem ʌp","los despertó","uóuk dem ap"],
    ["there wasn't","ðer ˈwʌznt","no había","der uásnt"],
    ["there were","ðer wɜːr","había (plural)","der uér"],
    ["Roatán","ˌroʊəˈtɑːn","Roatán (isla de Honduras)","roatán"],
    ["island","ˈaɪlənd","isla","áiland"],
    ["flight","flaɪt","vuelo","fláit"],
    ["sea","siː","mar","síi"],
    ["sand","sænd","arena","sand"],
    ["cloud","klaʊd","nube","kláud"],
    ["sky","skaɪ","cielo","skái"],
    ["green","ɡriːn","verde","gríin"],
    ["white","waɪt","blanco","uáit"],
    ["internet","ˈɪntərnet","internet","íntarnet"],
    ["price","praɪs","precio","práis"],
    ["high season","haɪ ˈsiːzn","temporada alta","jái síisn"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchin"],
    ["life","laɪf","vida","láif"],
    ["rooms","ruːmz","habitaciones","rúums"],
    ["hotel","hoʊˈtel","hotel","joutél"],
    ["city","ˈsɪti","ciudad","síti"],
    ["beach","biːtʃ","playa","bíich"],
    ["fish","fɪʃ","pescado","fish"],
    ["hour","ˈaʊər","hora","áuar"],
    ["hours","ˈaʊərz","horas","áuars"],
    ["market","ˈmɑːrkɪt","mercado","márket"],
    ["coffee","ˈkɑːfi","café","káfi"],
    ["ruins","ˈruːɪnz","ruinas","rúuins"],
    ["wife","waɪf","esposa","uáif"],
    ["photos","ˈfoʊtoʊz","fotos","fóutous"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["enough","ɪˈnʌf","suficiente","ináf"],
    ["single","ˈsɪŋɡl","sola, único","síngl"],
    ["different","ˈdɪfrənt","distinto","dífrent"],
    ["world","wɜːrld","mundo","uérld"],
    ["expensive","ɪkˈspensɪv","caro","ikspénsiv"],
    ["last month","læst mʌnθ","el mes pasado","last manz"]
  ],
  preguntas: [
    { q:"How did they travel to Roatán?",
      ops:["By plane","By bus","By boat"], ok:1,
      pista:"Primer párrafo: explica por qué no tomaron la otra opción." },
    { q:"Why did Ana get a good price for the rooms?",
      ops:["Because it was not the high season","Because the hotel was old","Because she knew the owner"], ok:0,
      pista:"Segundo párrafo, justo después de <i>she got a good price</i>." },
    { q:"Did they visit the ruins?",
      ops:["Yes, on Saturday","Yes, with Mr. Ortega","No, there wasn't enough time"], ok:2,
      pista:"Cuarto párrafo: Mr. Ortega lo pregunta y David contesta." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-16"] = {
  meta: {
    id: "a1-16", nivel: "A1", numero: 16,
    titulo: "Vacaciones (pasado irregular)",
    descriptor: "Puedo contar un viaje pasado con los verbos irregulares más frecuentes, decir cuánto duró y preguntar por la experiencia de otra persona.",
    escena: "Ana & David · la sala de casa, la noche que Ana vuelve de Roatán",
    personajeIA: "Ana", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
