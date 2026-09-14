/* ============================================================
   LECCIÓN A1-11 · Transporte y direcciones
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Medios de transporte", items:[
    ["bus","bʌs","autobús","bas"],["car","kɑːr","carro","kar"],
    ["taxi","ˈtæksi","taxi","táksi"],["train","treɪn","tren","tréin"],
    ["plane","pleɪn","avión","pléin"],["bike","baɪk","bicicleta","báik"],
    ["motorbike","ˈmoʊtərbaɪk","motocicleta","móutarbaik"],["on foot","ɑːn fʊt","a pie","an fut"],
    ["ticket","ˈtɪkɪt","boleto","tíket"],["driver","ˈdraɪvər","conductor","dráivar"]
  ]},
  {g:"Dar direcciones", items:[
    ["turn left","tɜːrn left","gira a la izquierda","tern left"],["turn right","tɜːrn raɪt","gira a la derecha","tern ráit"],
    ["go straight","ɡoʊ streɪt","sigue recto","góu stréit"],["cross","krɔːs","cruza","kros"],
    ["take the first","teɪk ðə fɜːrst","toma la primera","téik da ferst"],["go past","ɡoʊ pæst","pasa de largo","góu past"],
    ["stop","stɑːp","para","stap"],["on the left","ɑːn ðə left","a la izquierda","an da left"],
    ["on the right","ɑːn ðə raɪt","a la derecha","an da ráit"],["at the end","ət ðə end","al final","at da end"]
  ]},
  {g:"Lugares de referencia", items:[
    ["street","striːt","calle","stríit"],["avenue","ˈævənuː","avenida","ávenu"],
    ["corner","ˈkɔːrnər","esquina","kórner"],["traffic lights","ˈtræfɪk laɪts","semáforo","tráfik láits"],
    ["roundabout","ˈraʊndəbaʊt","rotonda","ráundabaut"],["bridge","brɪdʒ","puente","brich"],
    ["square","skwer","plaza","skuér"],["station","ˈsteɪʃn","estación","stéishn"],
    ["airport","ˈerpɔːrt","aeropuerto","érport"],["bus stop","ˈbʌs stɑːp","parada de bus","bas stap"]
  ]},
  {g:"Distancia y tiempo", items:[
    ["far","fɑːr","lejos","far"],["near","nɪr","cerca","níer"],
    ["block","blɑːk","cuadra","blak"],["kilometre","kɪˈlɑːmɪtər","kilómetro","kilámitar"],
    ["How far","haʊ fɑːr","a qué distancia","jáu far"],["How long","haʊ lɔːŋ","cuánto tiempo","jáu long"],
    ["It takes","ɪt teɪks","se tarda","it téiks"],["about","əˈbaʊt","unos, más o menos","abáut"],
    ["lost","lɔːst","perdido","lost"],["way","weɪ","camino","uéi"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","how &rarr; jáu"],
  ["z","Lengua entre los dientes, sin voz.","third &rarr; zerd"],
  ["sh","Como pedir silencio.","station &rarr; stéishn"],
  ["ch","Como en «coche».","bridge &rarr; brich"],
  ["k + s","La <i>x</i> de <i>taxi</i> suena «ks».","taxi &rarr; táksi"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","way &rarr; uéi"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","long &rarr; long"],
  ["r final","Apenas se toca, nunca vibra.","far &rarr; far"],
  ["tion = shn","La terminación <i>-tion</i> suena siempre «shn».","station &rarr; stéishn"]
];

const VERBS = [
  ["to go","irr","go · goes","went","will go","ir"],
  ["to take","irr","take · takes","took","will take","tomar; tardar"],
  ["to turn","reg","turn · turns","turned","will turn","girar"],
  ["to cross","reg","cross · crosses","crossed","will cross","cruzar"],
  ["to walk","reg","walk · walks","walked","will walk","caminar"],
  ["to drive","irr","drive · drives","drove","will drive","conducir"],
  ["to ride","irr","ride · rides","rode","will ride","montar"],
  ["to get to","irr","get to · gets to","got to","will get to","llegar a"],
  ["to wait","reg","wait · waits","waited","will wait","esperar"],
  ["to arrive","reg","arrive · arrives","arrived","will arrive","llegar"],
  ["to follow","reg","follow · follows","followed","will follow","seguir"]
];

const GRAMMAR = [
  {t:"El imperativo: dar instrucciones", s:"Turn left. Go straight.",
   p:"Para dar una indicación, el inglés usa el verbo <b>sin sujeto y sin nada delante</b>. Es la forma más corta del idioma, y la negación se hace con <b>don't</b>.",
   table:{head:["Función","Forma","Ejemplo"], rows:[
     ["Instrucción","verbo solo","Turn right at the corner."],
     ["Prohibición","don't + verbo","Don't cross here."],
     ["Invitación","let's + verbo","Let's take a taxi."],
     ["Cortesía","verbo + please","Wait here, please."]
   ]},
   aviso:["Es la única frase inglesa sin sujeto","Todas las demás lo exigen, hasta <i>it's raining</i>. El imperativo es la excepción: el sujeto es «tú» y se sobreentiende, igual que en español."]},

  {t:"Ir en autobús: BY", s:"by bus, by car, on foot",
   p:"El medio de transporte se marca con <b>by</b> y sin artículo. La única excepción es «a pie», que va con <b>on</b>.",
   chips:[["by bus","en autobús"],["by car","en carro"],["by train","en tren"],["on foot","a pie"]],
   aviso:["Sin artículo detrás de <i>by</i>","<span class='wrong'>by the bus</span> &nbsp;&rarr;&nbsp; <span class='right'>by bus</span>. Y ojo con la excepción: <span class='wrong'>by foot</span> &rarr; <span class='right'><b>on</b> foot</span>."]},

  {t:"¿Cómo llego a…?", s:"How do I get to…?",
   p:"La pregunta estándar para pedir indicaciones. El verbo es <b>get to</b>, que aquí significa «llegar a», no «obtener».",
   chips:[["How do I get to the station?","¿Cómo llego a la estación?"],["Where is the bank?","¿Dónde está el banco?"],["Is it far?","¿Está lejos?"],["I'm lost","Estoy perdido"]],
   aviso:["<i>Get</i> cambia de significado con la preposición","<b>get to</b> = llegar a. <b>get up</b> = levantarse. <b>get on</b> = subirse. El verbo es el mismo; la preposición lo cambia todo. Son los <i>phrasal verbs</i>, y en inglés están por todas partes."]},

  {t:"Cuánto se tarda: IT TAKES", s:"It takes twenty minutes",
   p:"Para el tiempo de un trayecto, el inglés usa otra vez el sujeto vacío <b>it</b> con el verbo <b>take</b>. Literalmente «ello toma veinte minutos».",
   chips:[["It takes ten minutes","Se tarda diez minutos"],["How long does it take?","¿Cuánto se tarda?"],["It takes me an hour","Tardo una hora"],["How far is it?","¿A qué distancia está?"]],
   aviso:["<i>How long</i> es tiempo, <i>how far</i> es distancia","«¿Cuánto hay?» en español sirve para las dos cosas. En inglés hay que elegir: <b>how long</b> pregunta minutos y <b>how far</b> pregunta kilómetros."]},

  {t:"Los ordinales en las calles", s:"the first street on the left",
   p:"Para contar calles y cruces se usan los ordinales que ya viste con las fechas, y siempre con <b>the</b> delante.",
   chips:[["the first street","la primera calle"],["the second corner","la segunda esquina"],["the third traffic lights","el tercer semáforo"],["at the end of the street","al final de la calle"]]},

  {t:"Preposiciones de movimiento", s:"to, into, across, along",
   p:"Ya conoces las de lugar; éstas indican recorrido, no posición.",
   table:{head:["Preposición","Significado","Ejemplo"], rows:[
     ["to","hacia un destino","Go to the square."],
     ["across","de un lado a otro","Walk across the bridge."],
     ["along","a lo largo de","Go along this street."],
     ["past","pasando de largo","Go past the bank."]
   ]},
   aviso:["<i>Go to home</i> no existe","Con <b>home</b> no se pone <i>to</i>: <span class='wrong'>I go to home</span> &rarr; <span class='right'>I go home</span>. Lo mismo con <i>here</i> y <i>there</i>."]}
];

/* Sarah (A) y David (B): Sarah se ha perdido y llama a David */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd aɪm lɔːst aɪ kɑːnt faɪnd ðə skuːl", p:"déivid, áim lost. ái kant fáind da skúul",
  b:[["David,","David,"],["I'm lost.","estoy perdida."],["I can't find","No encuentro"],["the school.","la escuela."]]},
 {s:"B", ipa:"doʊnt ˈwʌri wer ɑːr juː naʊ", p:"dóunt uóri. uér ar iú náu",
  b:[["Don't worry.","No te preocupes."],["Where are you","¿Dónde estás"],["now?","ahora?"]],
  n:"<b>Don't worry</b> es imperativo negativo: <i>don't</i> + verbo, sin sujeto. La única estructura inglesa que no lleva sujeto."},
 {s:"A", ipa:"aɪm ˈnɪr ə bɪɡ skwer wɪð ə tʃɜːrtʃ", p:"áim níer a big skuér uid a cherch",
  b:[["I'm near","Estoy cerca de"],["a big","una gran"],["square","plaza"],["with","con"],["a church.","una iglesia."]]},
 {s:"B", ipa:"aɪ noʊ ðæt wʌn ɑːr juː ɑːn fʊt", p:"ái nóu dat uán. ar iú an fut",
  b:[["I know that one.","Ya sé cuál es."],["Are you","¿Vas"],["on foot?","a pie?"]],
  n:"<b>On foot</b>, no <span class='wrong'>by foot</span>. Es la única excepción: todos los demás transportes van con <i>by</i>."},
 {s:"A", ipa:"jes aɪ keɪm baɪ bʌs ænd ðen aɪ wɔːkt", p:"yes, ái kéim bái bas and den ái uókt",
  b:[["Yes,","Sí,"],["I came","vine"],["by bus","en bus"],["and then","y luego"],["I walked.","caminé."]],
  n:"<b>By bus</b> sin artículo. Nunca <span class='wrong'>by the bus</span>."},
 {s:"B", ipa:"oʊˈkeɪ ɡoʊ əˈlɔːŋ ðə mɛɪn striːt tuː ðə ˈtræfɪk laɪts", p:"oukéi. góu alóng da méin stríit tu da tráfik láits",
  b:[["Okay.","Vale."],["Go along","Sigue por"],["the main street","la calle principal"],["to the traffic lights.","hasta el semáforo."]]},
 {s:"A", ipa:"ðə ˈtræfɪk laɪts oʊˈkeɪ aɪ siː ðem", p:"da tráfik láits. oukéi, ái síi dem",
  b:[["The traffic lights.","El semáforo."],["Okay,","Vale,"],["I see them.","los veo."]]},
 {s:"B", ipa:"æt ðə laɪts tɜːrn left ænd teɪk ðə ˈsekənd striːt", p:"at da láits, tern left and téik da sékand stríit",
  b:[["At the lights,","En el semáforo,"],["turn left","gira a la izquierda"],["and take","y toma"],["the second street.","la segunda calle."]],
  n:"Ordinales para contar calles, siempre con <b>the</b>: <i>the second street</i>."},
 {s:"A", ipa:"ðə ˈsekənd ɔːr ðə ferst", p:"da sékand or da ferst",
  b:[["The second","¿La segunda"],["or the first?","o la primera?"]]},
 {s:"B", ipa:"ðə ˈsekənd ðə ferst wʌn ɪz ˈvɛri smɔːl", p:"da sékand. da ferst uán is véri smóol",
  b:[["The second.","La segunda."],["The first one","La primera"],["is","es"],["very","muy"],["small.","pequeña."]]},
 {s:"A", ipa:"ɡʊd ænd ðen", p:"gud. and den",
  b:[["Good.","Bien."],["And then?","¿Y luego?"]]},
 {s:"B", ipa:"ɡoʊ pæst ðə bæŋk ænd krɔːs ðə brɪdʒ", p:"góu past da bank and kros da brich",
  b:[["Go past","Pasa de largo"],["the bank","el banco"],["and cross","y cruza"],["the bridge.","el puente."]]},
 {s:"A", ipa:"ɪz ðə skuːl ˈæftər ðə brɪdʒ", p:"is da skúul áfter da brich",
  b:[["Is the school","¿Está la escuela"],["after the bridge?","después del puente?"]]},
 {s:"B", ipa:"jes ɪts æt ðə end əv ðə striːt ɑːn ðə raɪt", p:"yes. its at da end av da stríit, an da ráit",
  b:[["Yes.","Sí."],["It's","Está"],["at the end","al final"],["of the street,","de la calle,"],["on the right.","a la derecha."]]},
 {s:"A", ipa:"haʊ lɔːŋ dəz ɪt teɪk ɑːn fʊt", p:"jáu long das it téik an fut",
  b:[["How long","¿Cuánto"],["does it take","se tarda"],["on foot?","a pie?"]],
  n:"<b>How long</b> pregunta tiempo. Para distancia sería <i>how far</i>. El español usa «cuánto» para las dos cosas."},
 {s:"B", ipa:"ɪt teɪks əˈbaʊt ten ˈmɪnɪts nɑːt far", p:"it téiks abáut ten mínits. nat far",
  b:[["It takes","Se tarda"],["about","unos"],["ten","diez"],["minutes.","minutos."],["Not far.","No está lejos."]],
  n:"Otra vez el sujeto vacío: <b>it takes</b>, literalmente «ello toma». El español dice «se tarda», sin sujeto."},
 {s:"A", ipa:"ʃʊd aɪ teɪk ə ˈtæksi ɪnˈsted", p:"shud ái téik a táksi instéd",
  b:[["Should I take","¿Debería tomar"],["a taxi","un taxi"],["instead?","mejor?"]]},
 {s:"B", ipa:"doʊnt ɪts ˈoʊnli tuː blɑːks ænd ðə ˈtræfɪk ɪz bæd", p:"dóunt. its óunli túu blaks and da tráfik is bad",
  b:[["Don't.","No."],["It's","Son"],["only","solo"],["two","dos"],["blocks","cuadras"],["and","y"],["the traffic","el tráfico"],["is bad.","está mal."]]},
 {s:"A", ipa:"oʊˈkeɪ aɪ wɔːk wʌt taɪm dəz ðə klæs stɑːrt", p:"oukéi, ái uók. uát táim das da klas start",
  b:[["Okay, I walk.","Vale, camino."],["What time","¿A qué hora"],["does the class start?","empieza la clase?"]]},
 {s:"B", ipa:"æt naɪn juː hæv ˈfɪftiːn ˈmɪnɪts", p:"at náin. iú jav fiftíin mínits",
  b:[["At nine.","A las nueve."],["You have","Tienes"],["fifteen","quince"],["minutes.","minutos."]]},
 {s:"A", ipa:"ðen aɪ rʌn siː juː ðer", p:"den ái ran. síi iú der",
  b:[["Then I run.","Entonces corro."],["See you there!","¡Nos vemos allá!"]]},
 {s:"B", ipa:"weɪt kɔːl miː ɪf juː ɡet lɔːst əˈɡen", p:"uéit. kol míi if iú guet lost aguén",
  b:[["Wait.","Espera."],["Call me","Llámame"],["if you get lost","si te pierdes"],["again.","otra vez."]]},
 {s:"A", ipa:"aɪ wɪl θæŋk juː ˈdeɪvɪd", p:"ái uíl. zánk iú, déivid",
  b:[["I will.","Lo haré."],["Thank you,","Gracias,"],["David!","David!"]]},
 {s:"B", ipa:"ɡʊd lʌk ænd doʊnt krɔːs ət ðə red laɪt", p:"gud lak. and dóunt kros at da red láit",
  b:[["Good luck.","Buena suerte."],["And don't cross","Y no cruces"],["at the red light!","con el semáforo en rojo!"]]}
];

const LECTURA = {
  titulo: "How to get to my school",
  entradilla: "David explica el camino hasta su escuela. El texto es un ejercicio de imperativos y preposiciones de movimiento: exactamente el lenguaje que pide el IELTS al describir un mapa.",
  parrafos: [
    "My school is not far from the main square. If you are at the square with the church, go along the main street to the traffic lights. At the lights, turn left and take the second street, not the first one: the first street is very small. Then go past the bank and cross the bridge.",
    "The school is at the end of that street, on the right. It takes about ten minutes on foot from the square, so do not take a taxi: it is only two blocks and the traffic is always bad in the morning. I never go by car. I come by bus every day and then I walk. The bus stop is opposite the park, near the pharmacy. If you get lost, call me and wait for me there."
  ],
  glosario: [
    ["go","ɡoʊ","ve, sigue","góu"],
    ["turn","tɜːrn","gira","tern"],
    ["take","teɪk","toma","téik"],
    ["cross","krɔːs","cruza","kros"],
    ["walk","wɔːk","camino","uók"],
    ["come","kʌm","vengo","kam"],
    ["wait","weɪt","espera","uéit"],
    ["call","kɔːl","llama","kol"],
    ["get lost","ɡet lɔːst","te pierdes","guet lost"],
    ["takes","teɪks","se tarda","téiks"],
    ["along","əˈlɔːŋ","por, a lo largo de","alóng"],
    ["past","pæst","de largo","past"],
    ["opposite","ˈɑːpəzɪt","enfrente de","ápasit"],
    ["main","meɪn","principal","méin"],
    ["square","skwer","plaza","skuér"],
    ["church","tʃɜːrtʃ","iglesia","cherch"],
    ["traffic lights","ˈtræfɪk laɪts","semáforo","tráfik láits"],
    ["lights","laɪts","semáforo","láits"],
    ["street","striːt","calle","stríit"],
    ["bridge","brɪdʒ","puente","brich"],
    ["bank","bæŋk","banco","bank"],
    ["blocks","blɑːks","cuadras","blaks"],
    ["traffic","ˈtræfɪk","tráfico","tráfik"],
    ["taxi","ˈtæksi","taxi","táksi"],
    ["bus stop","ˈbʌs stɑːp","parada de bus","bas stap"],
    ["pharmacy","ˈfɑːrməsi","farmacia","fármasi"],
    ["park","pɑːrk","parque","park"],
    ["school","skuːl","escuela","skúul"],
    ["far","fɑːr","lejos","far"],
    ["near","nɪr","cerca de","níer"],
    ["on foot","ɑːn fʊt","a pie","an fut"],
    ["second","ˈsekənd","segunda","sékand"],
    ["first","fɜːrst","primera","ferst"],
    ["right","raɪt","derecha","ráit"],
    ["left","left","izquierda","left"],
    ["end","end","final","end"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["always","ˈɔːlweɪz","siempre","ólueis"],
    ["about","əˈbaʊt","unos","abáut"]
  ],
  preguntas: [
    { q:"Which street should you take at the traffic lights?",
      ops:["The first one on the left","The second one on the left","The one across the bridge"], ok:1,
      pista:"El texto avisa expresamente de cuál NO hay que tomar y por qué." },
    { q:"How does David usually travel to school?",
      ops:["By car","By taxi","By bus and then on foot"], ok:2,
      pista:"Segundo párrafo: dice qué no hace nunca y qué hace cada día." },
    { q:"Why shouldn't you take a taxi?",
      ops:["Because it is expensive","Because it is only two blocks and the traffic is bad","Because there are no taxis"], ok:1,
      pista:"La razón va justo después de <i>do not take a taxi</i>." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-11"] = {
  meta: {
    id: "a1-11", nivel: "A1", numero: 11,
    titulo: "Transporte y direcciones",
    descriptor: "Puedo pedir y dar indicaciones sencillas para llegar a un lugar, y hablar de los medios de transporte que uso.",
    escena: "Sarah & David · Sarah se ha perdido y llama por teléfono",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
