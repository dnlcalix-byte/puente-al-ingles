/* ============================================================
   LECCIÓN A1-08 · El clima
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Cómo está el tiempo", items:[
    ["weather","ˈweðər","tiempo, clima","uéder"],["sunny","ˈsʌni","soleado","sáni"],
    ["cloudy","ˈklaʊdi","nublado","kláudi"],["rainy","ˈreɪni","lluvioso","réini"],
    ["windy","ˈwɪndi","ventoso","uíndi"],["foggy","ˈfɑːɡi","con niebla","fógui"],
    ["stormy","ˈstɔːrmi","tormentoso","stórmi"],["dry","draɪ","seco","drái"],
    ["wet","wet","mojado, húmedo","uét"],["humid","ˈhjuːmɪd","húmedo","jiúmid"]
  ]},
  {g:"Fenómenos", items:[
    ["sun","sʌn","sol","san"],["rain","reɪn","lluvia","réin"],
    ["cloud","klaʊd","nube","kláud"],["wind","wɪnd","viento","uínd"],
    ["snow","snoʊ","nieve","snóu"],["storm","stɔːrm","tormenta","storm"],
    ["fog","fɑːɡ","niebla","fog"],["sky","skaɪ","cielo","skái"],
    ["temperature","ˈtemprətʃər","temperatura","témprachar"],["degree","dɪˈɡriː","grado","digríi"]
  ]},
  {g:"Estaciones y meses", items:[
    ["season","ˈsiːzn","estación","síisn"],["spring","sprɪŋ","primavera","spring"],
    ["summer","ˈsʌmər","verano","sámar"],["autumn","ˈɔːtəm","otoño","ótam"],
    ["winter","ˈwɪntər","invierno","uínter"],["dry season","draɪ ˈsiːzn","estación seca","drái síisn"],
    ["rainy season","ˈreɪni ˈsiːzn","estación lluviosa","réini síisn"]
  ]},
  {g:"Frío, calor y grados", items:[
    ["hot","hɑːt","caluroso","jat"],["warm","wɔːrm","templado, cálido","uórm"],
    ["cool","kuːl","fresco","kúul"],["cold","koʊld","frío","kóuld"],
    ["freezing","ˈfriːzɪŋ","helado","fríising"],["terrible","ˈterəbl","terrible","térabl"],
    ["nice","naɪs","agradable","náis"],["What's it like","wʌts ɪt laɪk","cómo está","uáts it láik"],
    ["outside","ˌaʊtˈsaɪd","afuera","autsáid"],["inside","ˌɪnˈsaɪd","adentro","insáid"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hot &rarr; jat"],
  ["d","En <i>weather</i>: lengua entre los dientes, con voz.","weather &rarr; uéder"],
  ["z","Lengua entre los dientes, sin voz.","thirty &rarr; zérti"],
  ["sh","Como pedir silencio.","sunshine &rarr; sánshain"],
  ["ch","Como en «coche».","temperature &rarr; témprachar"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","wind &rarr; uínd"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","spring &rarr; spring"],
  ["s sonora","En <i>season</i> la <i>s</i> del medio zumba, como un moscardón.","season &rarr; síisn"],
  ["letras mudas","La <i>n</i> de <i>autumn</i> no se pronuncia.","autumn &rarr; ótam"]
];

const VERBS = [
  ["to rain","reg","rain · rains","rained","will rain","llover"],
  ["to snow","reg","snow · snows","snowed","will snow","nevar"],
  ["to shine","irr","shine · shines","shone","will shine","brillar"],
  ["to blow","irr","blow · blows","blew","will blow","soplar"],
  ["to wear","irr","wear · wears","wore","will wear","llevar puesto"],
  ["to stay","reg","stay · stays","stayed","will stay","quedarse"],
  ["to go out","irr","go out · goes out","went out","will go out","salir"],
  ["to need","reg","need · needs","needed","will need","necesitar"],
  ["to feel","irr","feel · feels","felt","will feel","sentir"],
  ["to change","reg","change · changes","changed","will change","cambiar"],
  ["to hate","reg","hate · hates","hated","will hate","odiar"]
];

const GRAMMAR = [
  {t:"El sujeto vacío: IT", s:"it's sunny",
   p:"Para hablar del tiempo, la hora o la distancia, el inglés pone un sujeto que no significa nada: <b>it</b>. No es «ello»; simplemente ocupa el hueco, porque toda frase inglesa necesita un sujeto.",
   chips:[["It's sunny","Hace sol"],["It's cold","Hace frío"],["It's raining","Está lloviendo"],["It's ten o'clock","Son las diez"]],
   aviso:["No se traduce, pero no se puede quitar","<span class='wrong'>Is very cold today.</span> &nbsp;&rarr;&nbsp; <span class='right'><b>It's</b> very cold today.</span> El español no tiene sujeto en «hace frío»; el inglés lo exige."]},

  {t:"Hacer frío es SER frío", s:"to be + adjetivo",
   p:"El español usa «hacer» para el tiempo; el inglés usa <b>to be</b> con un adjetivo. No existe ningún verbo «hacer» aquí.",
   table:{head:["Español","Inglés","Literalmente"], rows:[
     ["Hace sol","It's sunny","Está soleado"],
     ["Hace frío","It's cold","Está frío"],
     ["Hace mucho calor","It's very hot","Está muy caluroso"],
     ["Hace viento","It's windy","Está ventoso"]
   ]},
   aviso:["Nunca con <i>make</i> ni con <i>do</i>","<span class='wrong'>It makes cold.</span> &nbsp;&rarr;&nbsp; <span class='right'>It is cold.</span> Traducir «hacer» literalmente es uno de los errores que más delatan."]},

  {t:"Presente continuo: lo que pasa ahora", s:"to be + -ing",
   p:"Se forma con <b>to be + verbo-ing</b> y sirve para lo que ocurre <b>en este momento</b>. Compáralo con el presente simple, que es para lo habitual.",
   table:{head:["Tiempo","Cuándo se usa","Ejemplo"], rows:[
     ["Presente simple","costumbre","It rains a lot in June."],
     ["Presente continuo","ahora mismo","It is raining now."],
     ["Presente simple","hecho general","I don't like the cold."],
     ["Presente continuo","en este instante","I am wearing a coat."]
   ]},
   aviso:["Los dos son «presente» en español","«Llueve mucho en junio» y «está lloviendo» se distinguen en español por el contexto; en inglés son dos tiempos verbales distintos y confundirlos se nota."]},

  {t:"La ortografía del -ing", s:"raining, getting, making",
   p:"Tres reglas, las mismas que necesitarás toda la vida.",
   table:{head:["Regla","Ejemplo"], rows:[
     ["Caso general: +ing","rain &rarr; raining"],
     ["Termina en -e muda: se quita","make &rarr; making"],
     ["Vocal + consonante final tónica: se dobla","get &rarr; getting · swim &rarr; swimming"]
   ]}},

  {t:"Preguntar por el tiempo", s:"What's the weather like?",
   p:"La pregunta lleva un <b>like</b> al final que no significa «gustar» ni se traduce. Es una estructura fija: apréndela entera.",
   chips:[["What's the weather like?","¿Qué tiempo hace?"],["What's it like outside?","¿Cómo está afuera?"],["It's lovely","Está estupendo"],["It's terrible","Está horrible"]],
   aviso:["Ese <i>like</i> no es el verbo","<span class='wrong'>What is the weather?</span> pregunta qué <i>es</i> el clima, no cómo está. La forma correcta lleva <b>like</b> al final, siempre."]},

  {t:"Grados y temperatura", s:"degrees",
   p:"La temperatura se dice con <b>degrees</b>, y en los países anglosajones suele ir en Fahrenheit. Ojo con el bajo cero.",
   chips:[["It's thirty degrees","Hace treinta grados"],["It's minus five","Hace cinco bajo cero"],["It's below zero","Está bajo cero"],["How hot is it?","¿Cuánto calor hace?"]]}
];

/* Sarah (A) y David (B) hablan del clima */
const DIALOGUE = [
 {s:"A", ipa:"wʌts ðə ˈweðər laɪk ɪn hɑnˈdʊrəs", p:"uáts da uéder láik in jondúras",
  b:[["What's the weather like","¿Qué tiempo hace"],["in Honduras?","en Honduras?"]],
  n:"Estructura fija: <b>What's ... like?</b> Ese <i>like</i> no es el verbo «gustar» y no se traduce."},
 {s:"B", ipa:"ɪts ˈsʌni ˈɔːlmoʊst ˈevri deɪ ænd ˈvɛri wɔːrm", p:"its sáni ólmoust évri déi, and véri uórm",
  b:[["It is","Hace"],["sunny","sol"],["almost","casi"],["every day","cada día"],["and","y"],["very","mucho"],["warm.","calor."]],
  n:"<b>It is sunny</b>, literalmente «está soleado». El español dice «hace sol»; el inglés no usa ningún verbo «hacer» aquí."},
 {s:"A", ipa:"dəz ɪt reɪn ə lɑːt", p:"das it réin a lat",
  b:[["Does it rain","¿Llueve"],["a lot?","mucho?"]]},
 {s:"B", ipa:"jes frʌm meɪ tuː noʊˈvembər ðæts ðə ˈreɪni ˈsiːzn", p:"yes, from méi tu nouvémbar. dats da réini síisn",
  b:[["Yes,","Sí,"],["from May","de mayo"],["to November.","a noviembre."],["That's","Esa es"],["the rainy season.","la estación lluviosa."]]},
 {s:"A", ipa:"soʊ juː doʊnt hæv fɔːr ˈsiːznz", p:"sóu iú dóunt jav for síisns",
  b:[["So","Entonces"],["you don't have","no tienen"],["four","cuatro"],["seasons?","estaciones?"]]},
 {s:"B", ipa:"noʊ wi hæv tuː ðə draɪ wʌn ænd ðə ˈreɪni wʌn", p:"nóu, ui jav túu: da drái uán and da réini uán",
  b:[["No,","No,"],["we have","tenemos"],["two:","dos:"],["the dry one","la seca"],["and","y"],["the rainy one.","la lluviosa."]]},
 {s:"A", ipa:"ˈɪntrəstɪŋ ɪn ˈkænədə wi hæv fɔːr", p:"íntrestin. in kánada ui jav for",
  b:[["Interesting.","Interesante."],["In Canada","En Canadá"],["we have","tenemos"],["four.","cuatro."]]},
 {s:"B", ipa:"ɪz ɪt ˈrɪəli koʊld ɪn ˈwɪntər", p:"is it ríili kóuld in uínter",
  b:[["Is it","¿Hace"],["really","de verdad"],["cold","frío"],["in winter?","en invierno?"]]},
 {s:"A", ipa:"ˈfriːzɪŋ ˈsʌmtaɪmz ɪts ˈmaɪnəs ˈtwenti dɪˈɡriːz", p:"fríising. sámtaims its máinas tuénti digríis",
  b:[["Freezing.","Helado."],["Sometimes","A veces"],["it is","hace"],["minus twenty","veinte bajo cero"],["degrees.","grados."]]},
 {s:"B", ipa:"ˈmaɪnəs ˈtwenti aɪ kɑːnt ɪˈmædʒɪn ðæt", p:"máinas tuénti. ái kant imáchin dat",
  b:[["Minus twenty!","¡Veinte bajo cero!"],["I can't","No puedo"],["imagine","imaginar"],["that.","eso."]]},
 {s:"A", ipa:"ænd ɪt snoʊz ə lɑːt ðə skaɪ ɪz waɪt fɔːr mʌnθs", p:"and it snóus a lat. da skái is uáit for manzs",
  b:[["And","Y"],["it snows","nieva"],["a lot.","mucho."],["The sky","El cielo"],["is","está"],["white","blanco"],["for months.","durante meses."]]},
 {s:"B", ipa:"lʊk aʊtˈsaɪd ɪts ˈreɪnɪŋ naʊ", p:"luk autsáid. its réining náu",
  b:[["Look outside.","Mira afuera."],["It is raining","Está lloviendo"],["now.","ahora."]],
  n:"<b>It is raining</b> es presente continuo: ocurre en este momento. <i>It rains</i> sería la costumbre general."},
 {s:"A", ipa:"soʊ ɪt duːz ænd ðə wɪnd ɪz ˈbloʊɪŋ hɑːrd", p:"sóu it das. and da uínd is blóuing jard",
  b:[["So it does.","Pues sí."],["And","Y"],["the wind","el viento"],["is blowing","está soplando"],["hard.","fuerte."]]},
 {s:"B", ipa:"duː juː hæv ən ʌmˈbrelə", p:"du iú jav an ambréla",
  b:[["Do you have","¿Tienes"],["an","un"],["umbrella?","paraguas?"]]},
 {s:"A", ipa:"noʊ aɪ doʊnt aɪ æm ˈwerɪŋ ə ˈdʒækɪt ðoʊ", p:"nóu, ái dóunt. ái am uéring a yáket dóu",
  b:[["No, I don't.","No, no tengo."],["I am wearing","Llevo puesta"],["a jacket","una chaqueta"],["though.","eso sí."]],
  n:"Otro presente continuo: <b>I am wearing</b> es lo que lleva puesto <i>ahora</i>. <i>I wear</i> sería lo que suele ponerse."},
 {s:"B", ipa:"lets weɪt hɪr ɪt ˈnevər reɪnz fɔːr lɔːŋ", p:"lets uéit jíer. it névar réins for long",
  b:[["Let's wait","Esperemos"],["here.","aquí."],["It never rains","Nunca llueve"],["for long.","por mucho tiempo."]]},
 {s:"A", ipa:"duː juː laɪk ðə reɪn", p:"du iú láik da réin",
  b:[["Do you like","¿Te gusta"],["the rain?","la lluvia?"]]},
 {s:"B", ipa:"aɪ lʌv ɪt ɪts kuːl ænd ðə eər ɪz kliːn ˈæftər", p:"ái lav it. its kúul and da éar is klíin áfter",
  b:[["I love it.","Me encanta."],["It is","Está"],["cool","fresco"],["and","y"],["the air","el aire"],["is","está"],["clean","limpio"],["after.","después."]]},
 {s:"A", ipa:"aɪ heɪt ðə hjuːˈmɪdəti hɪr ɪts ˈɔːlweɪz wet", p:"ái jéit da jiumíditi jíer. its ólueis uét",
  b:[["I hate","Odio"],["the humidity","la humedad"],["here.","de aquí."],["It is","Está"],["always","siempre"],["wet.","húmedo."]]},
 {s:"B", ipa:"jes bʌt wi ˈnevər niːd ə koʊt", p:"yes, bat ui névar níid a kóut",
  b:[["Yes,","Sí,"],["but","pero"],["we never need","nunca necesitamos"],["a coat.","un abrigo."]]},
 {s:"A", ipa:"ðæts truː wʌts ðə ˈtemprətʃər təˈdeɪ", p:"dats trúu. uáts da témprachar tudéi",
  b:[["That is true.","Eso es cierto."],["What is","¿Cuál es"],["the temperature","la temperatura"],["today?","hoy?"]]},
 {s:"B", ipa:"əˈbaʊt ˈθɜːrti dɪˈɡriːz ə ˈnɔːrml deɪ", p:"abáut zérti digríis. a nórmal déi",
  b:[["About","Unos"],["thirty","treinta"],["degrees.","grados."],["A normal day.","Un día normal."]]},
 {s:"A", ipa:"ˈθɜːrti ɪn ˈkænədə ðæts ə hɑːt ˈsʌmər deɪ", p:"zérti. in kánada dats a jat sámar déi",
  b:[["Thirty!","¡Treinta!"],["In Canada","En Canadá"],["that is","eso es"],["a hot","un caluroso"],["summer day.","día de verano."]]},
 {s:"B", ipa:"ðə sʌn ɪz ˈkʌmɪŋ aʊt lets ɡoʊ", p:"da san is káming áut. lets góu",
  b:[["The sun","El sol"],["is coming out.","está saliendo."],["Let's go!","¡Vamos!"]]}
];

const LECTURA = {
  titulo: "One storm, four reactions",
  entradilla: "El clima de Honduras y el de Canadá, y lo que está pasando ahora mismo en la calle. El texto alterna presente simple —lo habitual— y presente continuo —lo que ocurre en este momento—, que es justo la distinción de esta lección.",
  parrafos: [
    "In Honduras we do not have four seasons. We have two: the dry season and the rainy season. From May to November it rains almost every afternoon, and the air is very humid. The rest of the year it is sunny and warm, about thirty degrees. We never need a coat here, and I never wear one.",
    "Sarah says that Canada is very different. In winter it snows a lot and sometimes the temperature is minus twenty degrees. The sky is white for months and people wear big coats. She hates the humidity here, but she loves our December.",
    "Right now it is raining outside and the wind is blowing hard. Pablo and Nico are waiting under a tree because they are not carrying an umbrella. They always forget it. Ana is watching them from the window and she is laughing.",
    "Mr. Ortega is closing his shop early today. He checks the sky every morning and he knows this storm well. \"It never rains for long here,\" he says. In twenty minutes the sun comes back, the street dries, and everybody goes out again."
  ],
  glosario: [
    ["rains","reɪnz","llueve","réins"],
    ["raining","ˈreɪnɪŋ","lloviendo","réining"],
    ["snows","snoʊz","nieva","snóus"],
    ["blowing","ˈbloʊɪŋ","soplando","blóuing"],
    ["waiting","ˈweɪtɪŋ","esperando","uéiting"],
    ["carrying","ˈkæriɪŋ","llevando","káriing"],
    ["watching","ˈwɑːtʃɪŋ","mirando","uáching"],
    ["laughing","ˈlæfɪŋ","riéndose","láfing"],
    ["closing","ˈkloʊzɪŋ","cerrando","klóusing"],
    ["wear","wer","me pongo, llevan","uér"],
    ["hates","heɪts","odia","jéits"],
    ["loves","lʌvz","le encanta","lavs"],
    ["says","sez","dice","ses"],
    ["checks","tʃeks","revisa","cheks"],
    ["forget","fərˈɡet","olvidar","forguét"],
    ["comes back","kʌmz bæk","vuelve","kams bak"],
    ["dries","draɪz","se seca","dráis"],
    ["goes out","ɡoʊz aʊt","sale","góus aut"],
    ["need","niːd","necesitamos","níid"],
    ["seasons","ˈsiːznz","estaciones","síisns"],
    ["dry","draɪ","seca","drái"],
    ["rainy","ˈreɪni","lluviosa","réini"],
    ["humid","ˈhjuːmɪd","húmedo","jiúmid"],
    ["humidity","hjuːˈmɪdəti","humedad","jiumíditi"],
    ["sunny","ˈsʌni","soleado","sáni"],
    ["warm","wɔːrm","cálido","uórm"],
    ["coat","koʊt","abrigo","kóut"],
    ["coats","koʊts","abrigos","kóuts"],
    ["storm","stɔːrm","tormenta","storm"],
    ["sky","skaɪ","cielo","skái"],
    ["air","er","aire","éar"],
    ["wind","wɪnd","viento","uínd"],
    ["sun","sʌn","sol","san"],
    ["tree","triː","árbol","trí"],
    ["window","ˈwɪndoʊ","ventana","uíndou"],
    ["street","striːt","calle","stríit"],
    ["degrees","dɪˈɡriːz","grados","digríis"],
    ["temperature","ˈtemprətʃər","temperatura","témprachar"],
    ["winter","ˈwɪntər","invierno","uínter"],
    ["afternoon","ˌæftərˈnuːn","tarde","afternin"],
    ["outside","ˌaʊtˈsaɪd","afuera","autsáid"],
    ["under","ˈʌndər","debajo de","ándar"],
    ["different","ˈdɪfrənt","diferente","dífrent"],
    ["right now","raɪt naʊ","ahora mismo","ráit náu"],
    ["for long","fɔːr lɔːŋ","por mucho tiempo","for long"],
    ["early","ˈɜːrli","temprano","érli"],
    ["again","əˈɡen","otra vez","aguén"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["rest","rest","resto","rest"],
    ["white","waɪt","blanco","uáit"],
    ["months","mʌnθs","meses","manzs"],
    ["hard","hɑːrd","fuerte","jard"],
    ["well","wel","bien","uel"]
  ],
  preguntas: [
    { q:"How many seasons are there in Honduras?",
      ops:["Four","Two","One"], ok:1,
      pista:"Primera y segunda frase del texto." },
    { q:"Why are Pablo and Nico under a tree?",
      ops:["Because they are not carrying an umbrella","Because they are waiting for the bus","Because the sun is very hot"], ok:0,
      pista:"Tercer párrafo: mira el presente continuo en negativo." },
    { q:"What does Mr. Ortega say about the storm?",
      ops:["That it is going to snow","That his shop is closed all day","That it never rains for long"], ok:2,
      pista:"Cuarto párrafo: es lo que dice entre comillas." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-08"] = {
  meta: {
    id: "a1-08", nivel: "A1", numero: 8,
    titulo: "El clima",
    descriptor: "Puedo describir el tiempo atmosférico y las estaciones con expresiones sencillas, y decir qué está ocurriendo en este momento.",
    escena: "Sarah & David · resguardados de la lluvia en la entrada del instituto",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
