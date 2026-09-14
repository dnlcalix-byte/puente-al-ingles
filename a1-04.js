/* ============================================================
   LECCIÓN A1-04 · La casa y el barrio
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Las habitaciones", items:[
    ["house","haʊs","casa","jáus"],["flat","flæt","apartamento","flat"],
    ["room","ruːm","habitación, cuarto","rúum"],["living room","ˈlɪvɪŋ ruːm","sala","líving rúum"],
    ["bedroom","ˈbedruːm","dormitorio","bédrum"],["bathroom","ˈbæθruːm","baño","bázrum"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchen"],["dining room","ˈdaɪnɪŋ ruːm","comedor","dáining rúum"],
    ["garage","ɡəˈrɑːʒ","garaje","garásh"],["roof","ruːf","techo","rúuf"],
    ["floor","flɔːr","suelo, piso","flor"],["stairs","sterz","escaleras","sters"]
  ]},
  {g:"Los muebles", items:[
    ["table","ˈteɪbl","mesa","téibl"],["chair","tʃer","silla","cher"],
    ["bed","bed","cama","bed"],["sofa","ˈsoʊfə","sofá","sóufa"],
    ["door","dɔːr","puerta","dor"],["window","ˈwɪndoʊ","ventana","uíndou"],
    ["wall","wɔːl","pared","uól"],["lamp","læmp","lámpara","lamp"],
    ["fridge","frɪdʒ","refrigeradora","frich"],["shower","ˈʃaʊər","ducha","sháuar"],
    ["mirror","ˈmɪrər","espejo","mírar"],["desk","desk","escritorio","desk"]
  ]},
  {g:"El barrio", items:[
    ["street","striːt","calle","stríit"],["park","pɑːrk","parque","park"],
    ["shop","ʃɑːp","tienda","shap"],["bank","bæŋk","banco","bank"],
    ["supermarket","ˈsuːpərmɑːrkɪt","supermercado","súupermarket"],["pharmacy","ˈfɑːrməsi","farmacia","fármasi"],
    ["church","tʃɜːrtʃ","iglesia","cherch"],["bus stop","ˈbʌs stɑːp","parada de bus","bas stap"],
    ["corner","ˈkɔːrnər","esquina","kórner"],["neighbour","ˈneɪbər","vecino","néibar"],
    ["market","ˈmɑːrkɪt","mercado","márket"],["hospital","ˈhɑːspɪtl","hospital","jáspitl"]
  ]},
  {g:"Dónde está", items:[
    ["in","ɪn","dentro de","in"],["on","ɑːn","encima de","an"],
    ["under","ˈʌndər","debajo de","ánder"],["next to","ˈnekst tuː","al lado de","nekst tu"],
    ["between","bɪˈtwiːn","entre (dos)","bituíin"],["behind","bɪˈhaɪnd","detrás de","bijáind"],
    ["in front of","ɪn ˈfrʌnt əv","delante de","in front av"],["near","nɪr","cerca de","níer"],
    ["far from","fɑːr frʌm","lejos de","far from"],["opposite","ˈɑːpəzɪt","enfrente de","ápasit"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hospital &rarr; jáspitl"],
  ["z","Lengua entre los dientes, sin voz.","bathroom &rarr; bázrum"],
  ["sh","Como pedir silencio. No existe en español.","shower &rarr; sháuar"],
  ["ch","Como en «coche».","church &rarr; cherch"],
  ["sh suave","En <i>garage</i> es una <i>sh</i> con voz, como la <i>j</i> francesa.","garage &rarr; garásh"],
  ["v","Labio de abajo contra los dientes de arriba.","living &rarr; líving"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","window &rarr; uíndou"],
  ["r final","Apenas se toca. No la arrastres como en español.","corner &rarr; kórner"],
  ["íi úu óo","Vocal doble = vocal larga.","street &rarr; stríit"]
];

const VERBS = [
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to have","irr","have · has","had","will have","tener"],
  ["to live","reg","live · lives","lived","will live","vivir"],
  ["to open","reg","open · opens","opened","will open","abrir"],
  ["to close","reg","close · closes","closed","will close","cerrar"],
  ["to clean","reg","clean · cleans","cleaned","will clean","limpiar"],
  ["to sit","irr","sit · sits","sat","will sit","sentarse"],
  ["to sleep","irr","sleep · sleeps","slept","will sleep","dormir"],
  ["to cook","reg","cook · cooks","cooked","will cook","cocinar"],
  ["to walk","reg","walk · walks","walked","will walk","caminar"],
  ["to show","reg","show · shows","showed","will show","mostrar"]
];

const GRAMMAR = [
  {t:"Hay: there is y there are", s:"there is / there are",
   p:"Ya lo viste de pasada; ahora en serio. <b>There is</b> con singular, <b>there are</b> con plural. La negación añade <i>not</i> y la pregunta invierte el orden.",
   table:{head:["Función","Singular","Plural"], rows:[
     ["Afirmativo","There is a park.","There are two parks."],
     ["Negativo","There isn't a park.","There aren't any parks."],
     ["Pregunta","Is there a park?","Are there any parks?"],
     ["Respuesta corta","Yes, there is.","No, there aren't."]
   ]},
   aviso:["No confundas «hay» con «está»","<b>There is a lamp on the desk</b> = «hay una lámpara». <b>The lamp is on the desk</b> = «la lámpara está». Se usa <i>there is</i> para presentar algo nuevo, y <i>is</i> a secas para situar algo que ya conocemos."]},

  {t:"Preposiciones de lugar", s:"in, on, under, next to…",
   p:"Aquí el inglés es más preciso que el español, que resuelve casi todo con «en». Cada preposición dibuja una posición distinta.",
   table:{head:["Preposición","Posición","Ejemplo"], rows:[
     ["in","dentro","The book is in the bag."],
     ["on","tocando una superficie","The book is on the table."],
     ["under","debajo","The cat is under the bed."],
     ["next to","al lado","The bank is next to the park."],
     ["between","entre dos cosas","The shop is between the bank and the church."],
     ["in front of","delante","There is a car in front of the house."]
   ]},
   aviso:["<i>In</i> y <i>on</i> no son intercambiables","«Está en la mesa» puede ser <b>on the table</b> (encima) o <b>in the table</b> (dentro del mueble, casi nunca). El español no distingue; el inglés sí, siempre."]},

  {t:"Any en negaciones y preguntas", s:"some / any",
   p:"En frases afirmativas se usa <b>some</b>; en negativas y en preguntas, <b>any</b>. Ninguno de los dos se traduce casi nunca al español.",
   chips:[["There are some chairs","Hay (unas) sillas"],["There aren't any chairs","No hay sillas"],["Are there any chairs?","¿Hay sillas?"],["I have some books","Tengo (algunos) libros"]],
   aviso:["No se traduce, pero no se puede omitir","<span class='wrong'>Are there chairs?</span> suena incompleto. <span class='right'>Are there <b>any</b> chairs?</span> es lo natural, aunque en español no digamos nada equivalente."]},

  {t:"Preguntar cuántos hay", s:"How many … are there?",
   p:"Estructura fija: <b>How many</b> + plural + <b>are there</b>. Fíjate en que <i>there</i> va al final, no al principio.",
   chips:[["How many rooms are there?","¿Cuántas habitaciones hay?"],["How many people live here?","¿Cuántas personas viven aquí?"],["Where is the bathroom?","¿Dónde está el baño?"]],
   aviso:["El orden se invierte en la pregunta","<span class='wrong'>How many rooms there are?</span> &nbsp;&rarr;&nbsp; <span class='right'>How many rooms <b>are there</b>?</span> Es el error más frecuente de esta lección."]},

  {t:"Artículo definido: cuándo NO se pone", s:"the",
   p:"El inglés usa <b>the</b> menos que el español. Con nombres en plural y en sentido general, no lleva artículo.",
   chips:[["Houses are expensive","Las casas son caras"],["I like parks","Me gustan los parques"],["The park near my house","El parque cerca de mi casa"]],
   aviso:["Generalizar es sin artículo","<span class='wrong'>The houses are expensive.</span> si hablas de las casas en general. &nbsp;<span class='right'>Houses are expensive.</span> Con <i>the</i> te refieres a unas casas concretas."]},

  {t:"Mi, tu, nuestro: repaso con lugares", s:"posesivos",
   p:"Con lugares el posesivo sustituye al artículo: nunca van los dos juntos.",
   chips:[["my house","mi casa"],["our street","nuestra calle"],["their garage","su garaje"]],
   aviso:["Nunca artículo y posesivo juntos","<span class='wrong'>The my house</span> no existe. En español tampoco decimos «la mi casa», así que esta se te dará bien."]}
];

/* Sarah (A) y David (B) caminan por el barrio de David */
const DIALOGUE = [
 {s:"A", ipa:"soʊ ðɪs ɪz jʊr striːt ɪts ˈvɛri kwaɪət", p:"sóu, dis is iór stríit. its véri kuáiet",
  b:[["So,","Así que"],["this is","esta es"],["your","tu"],["street.","calle."],["It is","Es"],["very","muy"],["quiet.","tranquila."]]},
 {s:"B", ipa:"jes ɪt ɪz maɪ haʊs ɪz ɑːn ðə ˈkɔːrnər", p:"yes it is. mái jáus is an da kórner",
  b:[["Yes,","Sí,"],["it is.","lo es."],["My","Mi"],["house","casa"],["is","está"],["on the corner.","en la esquina."]]},
 {s:"A", ipa:"haʊ ˈmeni ruːmz ɑːr ðer ɪn jʊr haʊs", p:"jáu méni rúums ar der in iór jáus",
  b:[["How many","¿Cuántas"],["rooms","habitaciones"],["are there","hay"],["in your house?","en tu casa?"]],
  n:"Orden fijo: <b>How many + plural + are there</b>. En español decimos «¿cuántas hay?»; el inglés coloca <i>there</i> al final."},
 {s:"B", ipa:"ðer ɑːr faɪv ruːmz θriː ˈbedruːmz ə ˈkɪtʃɪn ænd ə ˈlɪvɪŋ ruːm", p:"der ar fáiv rúums: zríi bédrums, a kíchen and a líving rúum",
  b:[["There are","Hay"],["five","cinco"],["rooms:","habitaciones:"],["three","tres"],["bedrooms,","dormitorios,"],["a","una"],["kitchen","cocina"],["and","y"],["a living room.","una sala."]]},
 {s:"A", ipa:"ɪz ðer ə ˈɡɑːrdn", p:"is der a gárden",
  b:[["Is there","¿Hay"],["a","un"],["garden?","jardín?"]]},
 {s:"B", ipa:"jes ðer ɪz ɪts bɪˈhaɪnd ðə haʊs", p:"yes der is. its bijáind da jáus",
  b:[["Yes, there is.","Sí, hay."],["It is","Está"],["behind","detrás de"],["the house.","la casa."]],
  n:"Dos usos distintos seguidos: <b>there is</b> presenta algo nuevo, <b>it is</b> lo sitúa una vez que ya sabemos que existe."},
 {s:"A", ipa:"ænd wʌts ɪn ðə ˈɡɑːrdn ˈɛni triːz", p:"and uáts in da gárden. éni tríis",
  b:[["And","¿Y"],["what is","qué hay"],["in the garden?","en el jardín?"],["Any trees?","¿Algún árbol?"]]},
 {s:"B", ipa:"ðer ɑːrnt ˈɛni triːz bʌt ðer ɑːr sʌm flaʊərz", p:"der arnt éni tríis, bat der ar sam fláuars",
  b:[["There aren't","No hay"],["any","ningún"],["trees,","árbol,"],["but","pero"],["there are","hay"],["some","algunas"],["flowers.","flores."]],
  n:"<b>Any</b> en la negación, <b>some</b> en la afirmación. En español no traducimos ninguno de los dos, pero en inglés no se pueden quitar."},
 {s:"A", ipa:"wer ɪz ðə ˈkɪtʃɪn", p:"uér is da kíchen",
  b:[["Where","¿Dónde"],["is","está"],["the","la"],["kitchen?","cocina?"]]},
 {s:"B", ipa:"ɪts nekst tuː ðə ˈdaɪnɪŋ ruːm ɑːn ðə ferst flɔːr", p:"its nekst tu da dáining rúum, an da ferst flor",
  b:[["It is","Está"],["next to","al lado de"],["the dining room,","el comedor,"],["on the first floor.","en la planta baja."]]},
 {s:"A", ipa:"ɪz ðer ə ˈsuːpərmɑːrkɪt nɪr hɪr", p:"is der a súupermarket níer jíer",
  b:[["Is there","¿Hay"],["a","un"],["supermarket","supermercado"],["near here?","cerca de aquí?"]]},
 {s:"B", ipa:"jes ɪts bɪˈtwiːn ðə bæŋk ænd ðə ˈfɑːrməsi", p:"yes. its bituíin da bank and da fármasi",
  b:[["Yes.","Sí."],["It is","Está"],["between","entre"],["the bank","el banco"],["and","y"],["the pharmacy.","la farmacia."]],
  n:"<b>Between</b> siempre necesita dos referencias unidas por <i>and</i>. Con más de dos se usa <i>among</i>, que verás más adelante."},
 {s:"A", ipa:"ˈperfɪkt ænd ðə bʌs stɑːp", p:"pérfect. and da bas stap",
  b:[["Perfect.","Perfecto."],["And","¿Y"],["the","la"],["bus stop?","parada de bus?"]]},
 {s:"B", ipa:"ɪts ˈɑːpəzɪt ðə pɑːrk ˈvɛri nɪr", p:"its ápasit da park. véri níer",
  b:[["It is","Está"],["opposite","enfrente de"],["the park.","el parque."],["Very near.","Muy cerca."]]},
 {s:"A", ipa:"ɑːr jʊr ˈneɪbərz ˈfrendli", p:"ar iór néibars fréndli",
  b:[["Are","¿Son"],["your","tus"],["neighbours","vecinos"],["friendly?","amables?"]]},
 {s:"B", ipa:"jes ðeɪ ɑːr ˈmɪsɪz lopes lɪvz ɪn frʌnt əv maɪ haʊs", p:"yes déi ar. mísis Lópes livs in front av mái jáus",
  b:[["Yes, they are.","Sí, lo son."],["Mrs Lopez","La señora López"],["lives","vive"],["in front of","delante de"],["my house.","mi casa."]]},
 {s:"A", ipa:"duː juː hæv ə ˈɡærɑːʒ", p:"du iú jav a garásh",
  b:[["Do you have","¿Tienes"],["a","un"],["garage?","garaje?"]]},
 {s:"B", ipa:"noʊ wi doʊnt wi doʊnt hæv ə kɑːr ˈiːðər", p:"nóu, ui dóunt. ui dóunt jav a kar íider",
  b:[["No, we don't.","No, no tenemos."],["We don't have","No tenemos"],["a car","carro"],["either.","tampoco."]]},
 {s:"A", ipa:"haʊ duː juː ɡoʊ tuː skuːl ðen", p:"jáu du iú góu tu skúul den",
  b:[["How","¿Cómo"],["do you go","vas"],["to school","a la escuela"],["then?","entonces?"]]},
 {s:"B", ipa:"aɪ wɔːk ɪts ˈoʊnli ten ˈmɪnɪts frʌm hɪr", p:"ái uók. its óunli ten mínits from jíer",
  b:[["I walk.","Camino."],["It is","Son"],["only","solo"],["ten","diez"],["minutes","minutos"],["from here.","desde aquí."]]},
 {s:"A", ipa:"ðæts ˈlʌki ˈhaʊzɪz ɑːr ɪkˈspensɪv nɪr ðə ˈsentər", p:"dats láki. jáusis ar ikspénsiv níer da sénter",
  b:[["That is","Eso es"],["lucky.","suerte."],["Houses","Las casas"],["are","son"],["expensive","caras"],["near the centre.","cerca del centro."]],
  n:"<b>Houses are expensive</b>, sin artículo: se habla de las casas en general. Con <i>the</i> se referiría a unas casas concretas."},
 {s:"B", ipa:"aɪ noʊ maɪ ˈperənts lʌv ðɪs ˈnɛɪbərˌhʊd", p:"ái nóu. mái pérents lav dis néibarjud",
  b:[["I know.","Lo sé."],["My","Mis"],["parents","padres"],["love","adoran"],["this neighbourhood.","este barrio."]]},
 {s:"A", ipa:"kæn juː ʃoʊ miː ðə pɑːrk", p:"kan iú shóu míi da park",
  b:[["Can you show me","¿Me puedes enseñar"],["the","el"],["park?","parque?"]]},
 {s:"B", ipa:"əv kɔːrs ɪts ˈɑːpəzɪt ðə tʃɜːrtʃ lets ɡoʊ", p:"av kórs. its ápasit da cherch. lets góu",
  b:[["Of course.","Por supuesto."],["It is","Está"],["opposite","enfrente de"],["the church.","la iglesia."],["Let's go!","¡Vamos!"]]}
];

const LECTURA = {
  titulo: "The people on my street",
  entradilla: "Un recorrido por el barrio, casa por casa. Cada párrafo cambia de persona, así que <i>there is</i> y <i>there are</i> aparecen junto a <i>he has</i>, <i>she lives</i> y <i>they have</i>.",
  parrafos: [
    "I live in a small house on the corner of a quiet street. There are five rooms: three bedrooms, a kitchen and a living room. The kitchen is next to the dining room. Behind the house there is a garden. There aren't any trees in it, but there are some flowers.",
    "Luis and Marta live in front of us. They have a big house with a garage, because they have two cars. Their garden is bigger than ours and they have three dogs. The dogs sleep under the table in the kitchen, and they are never quiet.",
    "Mrs Castro lives above her shop, between the bank and the pharmacy. She has only two rooms, but she says that is enough for one person. Her window looks at the park, so she sees everybody who walks past.",
    "My grandfather Carlos has an old house near the church. He has a big kitchen and a very small bathroom. We visit him every Sunday and we help him in the garden. There isn't a bus stop near his house, so we walk. It is only ten minutes from here."
  ],
  glosario: [
    ["live","lɪv","vivo","liv"],
    ["lives","lɪvz","vive","livs"],
    ["has","hæz","tiene","jas"],
    ["have","hæv","tienen","jav"],
    ["sleep","sliːp","duermen","slíip"],
    ["says","sez","dice","ses"],
    ["looks","lʊks","da, mira","luks"],
    ["sees","siːz","ve","síis"],
    ["walks","wɔːks","pasa","uóks"],
    ["visit","ˈvɪzɪt","visitamos","vísit"],
    ["help","help","ayudamos","jelp"],
    ["walk","wɔːk","caminamos","uók"],
    ["rooms","ruːmz","habitaciones","rúums"],
    ["bedrooms","ˈbedruːmz","dormitorios","bédrums"],
    ["trees","triːz","árboles","tríis"],
    ["flowers","ˈflaʊərz","flores","fláuars"],
    ["cars","kɑːrz","carros","kars"],
    ["dogs","dɔːɡz","perros","dogs"],
    ["garage","ɡəˈrɑːʒ","garaje","garásh"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchen"],
    ["bathroom","ˈbæθruːm","baño","bázrum"],
    ["church","tʃɜːrtʃ","iglesia","cherch"],
    ["window","ˈwɪndoʊ","ventana","uíndou"],
    ["shop","ʃɑːp","tienda","shap"],
    ["bank","bæŋk","banco","bank"],
    ["pharmacy","ˈfɑːrməsi","farmacia","fármasi"],
    ["bus stop","ˈbʌs stɑːp","parada de bus","bas stap"],
    ["park","pɑːrk","parque","park"],
    ["street","striːt","calle","stríit"],
    ["corner","ˈkɔːrnər","esquina","kórner"],
    ["above","əˈbʌv","encima de","abáv"],
    ["behind","bɪˈhaɪnd","detrás de","bijáind"],
    ["between","bɪˈtwiːn","entre","bituíin"],
    ["under","ˈʌndər","debajo de","ánder"],
    ["in front of","ɪn frʌnt əv","delante de","in front av"],
    ["next to","ˈnekst tuː","al lado de","nekst tu"],
    ["near","nɪr","cerca de","níer"],
    ["past","pæst","de largo","past"],
    ["bigger","ˈbɪɡər","más grande","bíguer"],
    ["ours","ˈaʊərz","el nuestro","áuars"],
    ["their","ðer","su (de ellos)","der"],
    ["her","hɜːr","su (de ella)","jer"],
    ["his","hɪz","su (de él)","jis"],
    ["quiet","ˈkwaɪət","tranquilos","kuáiet"],
    ["enough","ɪˈnʌf","suficiente","ináf"],
    ["everybody","ˈevribɑːdi","todo el mundo","évribadi"],
    ["person","ˈpɜːrsn","persona","pérsn"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["Sunday","ˈsʌndeɪ","domingo","sándei"]
  ],
  preguntas: [
    { q:"Why do Luis and Marta have a garage?",
      ops:["Because they have two cars","Because they have three dogs","Because their house is old"], ok:0,
      pista:"Segundo párrafo: la razón va justo después de <i>because</i>." },
    { q:"What can Mrs Castro see from her window?",
      ops:["The church","The park","The river"], ok:1,
      pista:"Tercer párrafo: por eso ve a todo el que pasa." },
    { q:"How does David's family go to his grandfather's house?",
      ops:["By bus","By car","On foot"], ok:2,
      pista:"Último párrafo: no hay parada de bus cerca." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-04"] = {
  meta: {
    id: "a1-04", nivel: "A1", numero: 4,
    titulo: "La casa y el barrio",
    descriptor: "Puedo describir en términos sencillos mi vivienda, mi entorno inmediato y los lugares de mi barrio.",
    escena: "Sarah & David · paseando por el barrio de David",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
