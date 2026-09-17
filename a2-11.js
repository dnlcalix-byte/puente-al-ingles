/* ============================================================
   LECCIÓN A2-11 · Deporte y ejercicio
   Reparto: Emma, en la cima del volcán, el 7 de febrero. La lectura
   reúne los seis puntos de la Fase 1 —go/play/do con deportes, el
   -ing como sujeto, be able to, el superlativo con present perfect,
   los números grandes y feel like + -ing— en nosotros, ella, él y
   ellos.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Deportes y actividades", items:[
    ["football","ˈfʊtbɔːl","fútbol","fútbol"],["basketball","ˈbæskɪtbɔːl","baloncesto","básketbol"],
    ["swimming","ˈswɪmɪŋ","natación","suíming"],["running","ˈrʌnɪŋ","correr","ráning"],
    ["cycling","ˈsaɪklɪŋ","ciclismo","sáikling"],["yoga","ˈjoʊɡə","yoga","ióuga"],
    ["climbing","ˈklaɪmɪŋ","escalada","kláiming"],["exercise","ˈeksərsaɪz","ejercicio","éksersais"],
    ["training","ˈtreɪnɪŋ","entrenamiento","tréining"],["team","tiːm","equipo","tíim"]
  ]},
  {g:"La montaña", items:[
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],["top","tɑːp","cima","tap"],
    ["uphill","ˌʌpˈhɪl","cuesta arriba","apjíl"],["downhill","ˌdaʊnˈhɪl","cuesta abajo","daunjíl"],
    ["path","pæθ","sendero","paz"],["rock","rɑːk","roca","rak"],
    ["step","step","paso","step"],["metre","ˈmiːtər","metro","míitar"],
    ["kilometre","kɪˈlɑːmɪtər","kilómetro","kilámitar"],["view","vjuː","vista","viú"]
  ]},
  {g:"Poder y no poder", items:[
    ["be able to","biː ˈeɪbl tuː","ser capaz de","bi éibl tu"],["wasn't able to","ˈwʌznt ˈeɪbl tuː","no pude","uásnt éibl tu"],
    ["will be able to","wɪl biː ˈeɪbl tuː","podré","uíl bi éibl tu"],["to manage","tuː ˈmænɪdʒ","lograr","tu mánich"],
    ["to give up","tuː ɡɪv ʌp","rendirse","tu guiv ap"],["to keep going","tuː kiːp ˈɡoʊɪŋ","seguir adelante","tu kíip góing"],
    ["out of breath","aʊt əv breθ","sin aliento","áut av brez"],["exhausted","ɪɡˈzɔːstɪd","agotado","igsóstid"],
    ["fit","fɪt","en forma","fit"],["strong","strɔːŋ","fuerte","strong"]
  ]},
  {g:"Lo que te apetece", items:[
    ["I feel like…","aɪ fiːl laɪk","me apetece…","ái fíil láik"],["I don't feel like…","aɪ doʊnt fiːl laɪk","no me apetece…","ái dóunt fíil láik"],
    ["once a week","wʌns ə wiːk","una vez por semana","uáns a uíik"],["twice a month","twaɪs ə mʌnθ","dos veces al mes","tuáis a manz"],
    ["hardly ever","ˈhɑːrdli ˈevər","casi nunca","járdli évar"],["mostly","ˈmoʊstli","en su mayoría","móustli"],
    ["honestly","ˈɑːnɪstli","sinceramente","ánistli"],["at the same time","æt ðə seɪm taɪm","a la vez","at da séim táim"],
    ["five weeks later","faɪv wiːks ˈleɪtər","cinco semanas después","fáiv uíiks léitar"],["in a straight line","ɪn ə streɪt laɪn","en línea recta","in a stréit láin"]
  ]}
];

const PRONKEY = [
  ["z","La <i>th</i> sin voz de <i>path</i> y <i>breath</i>.","path &rarr; paz"],
  ["ing","La <i>g</i> final no suena: es una <i>n</i> nasal.","climbing &rarr; kláiming"],
  ["b muda","La <i>b</i> de <i>climb</i> no se pronuncia.","climb &rarr; kláim"],
  ["gh muda","En <i>straight</i> la <i>gh</i> no suena.","straight &rarr; stréit"],
  ["j","Aire por la garganta, sin raspar.","uphill &rarr; apjíl"],
  ["v","Labio de abajo contra los dientes de arriba.","view &rarr; viú"],
  ["ch","Como en «coche».","manage &rarr; mánich"],
  ["ió","La <i>y</i> inicial: como la <i>i</i> de «hielo».","yoga &rarr; ióuga"],
  ["r final","Apenas se toca; nunca vibra.","metre &rarr; míitar"]
];

const VERBS = [
  ["to climb","reg","climb · climbs","climbed","will climb","subir, escalar"],
  ["to train","reg","train · trains","trained","will train","entrenar"],
  ["to reach","reg","reach · reaches","reached","will reach","alcanzar, llegar a"],
  ["to count","reg","count · counts","counted","will count","contar"],
  ["to manage","reg","manage · manages","managed","will manage","lograr"],
  ["to prepare","reg","prepare · prepares","prepared","will prepare","preparar"],
  ["to swim","irr","swim · swims","swam","will swim","nadar"],
  ["to run","irr","run · runs","ran","will run","correr"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to sit down","irr","sit down · sits down","sat down","will sit down","sentarse"],
  ["to take","irr","take · takes","took","will take","tomar; tardar"],
  ["to give up","irr","give up · gives up","gave up","will give up","rendirse"]
];

const GRAMMAR = [
  {t:"GO, PLAY y DO con los deportes", s:"tres verbos, tres familias",
   p:"El español dice «hacer» o «jugar» para casi todo. El inglés reparte los deportes en tres grupos, y el verbo lo decide el <b>tipo de actividad</b>, no el gusto de cada uno.",
   table:{head:["Verbo","Qué tipo","Ejemplos"], rows:[
     ["play","juegos con pelota o contra alguien","play football, play tennis, play chess"],
     ["go","actividades que acaban en -ing","go swimming, go running, go climbing"],
     ["do","el resto: artes marciales y ejercicio","do yoga, do exercise, do karate"],
     ["—","los tres con el deporte sin artículo","<span class='wrong'>play the football</span>"]
   ]},
   aviso:["La regla del <i>-ing</i> funciona casi siempre","Si el deporte acaba en <b>-ing</b>, va con <b>go</b>: <i>go cycling</i>, <i>go dancing</i>, <i>go shopping</i>. Sirve incluso para actividades que no son deporte."]},

  {t:"El verbo en -ing como sujeto", s:"Climbing is hard",
   p:"Cuando una acción es el <b>sujeto</b> de la frase, el inglés la pone en <b>-ing</b>. El español usa el infinitivo («subir es duro»), y traducirlo literalmente da una frase rota.",
   chips:[["Climbing is hard.","Subir es duro."],["Counting steps helps.","Contar pasos ayuda."],["Going down took four hours.","Bajar tardó cuatro horas."],["Swimming is good exercise.","Nadar es buen ejercicio."]],
   aviso:["Nunca con <i>to</i> al principio","<span class='wrong'>To climb is hard.</span> existe en textos antiguos y suena a traducción. Lo natural hoy es <span class='right'>Climbing is hard.</span>"]},

  {t:"BE ABLE TO", s:"el CAN que sí tiene tiempos",
   p:"<b>Can</b> sólo tiene dos formas: <i>can</i> y <i>could</i>. Para el resto de los tiempos hace falta <b>be able to</b>, que se conjuga como cualquier verbo normal.",
   table:{head:["Tiempo","Con can","Con be able to"], rows:[
     ["Presente","I can walk.","I am able to walk."],
     ["Pasado","I could walk.","I was able to walk."],
     ["Futuro","—","I will be able to walk."],
     ["Present perfect","—","I have been able to walk."]
   ]},
   aviso:["<i>Could</i> y <i>was able to</i> no son idénticos","<b>Could</b> es la habilidad general: <i>I could swim at five</i>. <b>Was able to</b> es lograrlo en una ocasión concreta: <i>the path was terrible, but we were able to reach the top</i>."]},

  {t:"El superlativo con present perfect", s:"the best thing I've ever done",
   p:"Una de las estructuras que más suben la nota en el IELTS Speaking, y se construye siempre igual: <b>the + superlativo + sustantivo + I have ever + participio</b>.",
   chips:[["the hardest thing I've ever done","lo más duro que he hecho"],["the best food I've ever eaten","la mejor comida que he comido"],["the highest mountain I've ever climbed","la montaña más alta que he subido"],["the worst film I've ever seen","la peor película que he visto"]],
   aviso:["<i>Ever</i> va dentro, no al final","<span class='wrong'>the hardest thing I've done ever</span> &nbsp;&rarr;&nbsp; <span class='right'>the hardest thing I've <b>ever</b> done</span>. Entre el auxiliar y el participio, como siempre."]},

  {t:"Los números grandes y las medidas", s:"2,870 metres",
   p:"Leer una cifra alta en voz alta tiene sus reglas, y ninguna es obvia para un hispanohablante.",
   table:{head:["Cifra","Se lee","Ojo con"], rows:[
     ["2,870","two thousand eight hundred and seventy","la coma separa miles"],
     ["1,400","fourteen hundred","también vale así, y es lo normal"],
     ["140","a hundred and forty","el <i>and</i> es obligatorio"],
     ["8 km","eight kilometres","<span class='wrong'>eights kilometres</span>"],
     ["5 h","five hours","—"]
   ]},
   aviso:["<i>Hundred</i> y <i>thousand</i> no llevan plural","<span class='wrong'>two thousands</span> &nbsp;&rarr;&nbsp; <span class='right'>two thousand</span>. Sólo se pluralizan sin número delante: <i>thousands of people</i>."]},

  {t:"FEEL LIKE + -ing", s:"apetecer",
   p:"El español tiene un verbo para esto —«apetecer»— y el inglés usa una fórmula fija. Detrás de <i>like</i> hay una preposición, así que el verbo va en <b>-ing</b>.",
   chips:[["I feel like eating.","Me apetece comer."],["I don't feel like walking.","No me apetece caminar."],["Do you feel like a coffee?","¿Te apetece un café?"],["I felt like giving up.","Me daban ganas de rendirme."]],
   aviso:["No confundir con <i>feel like</i> de parecer","<b>I feel like eating</b> = me apetece comer. <b>I feel like a tourist</b> = me siento como un turista. Con verbo es apetecer; con sustantivo, parecerse."]}
];

/* Emma (A) y David (B) en la cima del volcán, el 7 de febrero */
const DIALOGUE = [
 {s:"A", ipa:"stɑːp lʊk bɪˈhaɪnd juː doʊnt seɪ ˈeniθɪŋ dʒʌst lʊk", p:"stap. luk bijáind iú. dóunt séi énizing, chast luk",
  b:[["Stop.","Para."],["Look behind you.","Mira atrás."],["Don't say anything,","No digas nada,"],["just look.","sólo mira."]]},
 {s:"B", ipa:"ðæts ðə hoʊl ˈkʌntri", p:"dats da jóul kántri",
  b:[["That's","Eso es"],["the whole country.","el país entero."]]},
 {s:"A", ipa:"ðæts ðə hoʊl ˈkʌntri tuː ˈθaʊzənd eɪt ˈhʌndrəd ænd ˈsevnti ˈmiːtərz", p:"dats da jóul kántri. tu zóusand éit jándred and sévnti míitars",
  b:[["That's the whole country.","Eso es el país entero."],["Two thousand","Dos mil"],["eight hundred and seventy","ochocientos setenta"],["metres.","metros."]],
  n:"<b>Two thousand</b>, sin plural. Y el <i>and</i> antes de las decenas es obligatorio."},
 {s:"B", ipa:"ænd wi wɔːkt ɔːl əv ɪt", p:"and ui uókt ol av it",
  b:[["And we walked","¿Y caminamos"],["all of it?","todo eso?"]]},
 {s:"A", ipa:"wi ˈstɑːrtɪd æt ˈfɔːrtiːn ˈhʌndrəd soʊ wi klaɪmd əˈbaʊt ˈfɔːrtiːn ˈhʌndrəd ænd ˈsevnti", p:"ui startid at fórtiin jándred, sóu ui kláimd abáut fórtiin jándred and sévnti",
  b:[["We started","Empezamos"],["at fourteen hundred,","a mil cuatrocientos,"],["so we climbed","así que subimos"],["about fourteen hundred and seventy.","unos mil cuatrocientos setenta."]],
  n:"<b>Fourteen hundred</b> es la forma normal de leer 1.400 cuando es una medida."},
 {s:"B", ipa:"ðɪs ɪz ðə ˈhɑːrdɪst θɪŋ aɪv ˈevər dʌn", p:"dis is da járdist zing áiv évar dan",
  b:[["This is the hardest thing","Esto es lo más duro"],["I've ever done.","que he hecho."]],
  n:"<b>The hardest thing I've ever done</b>: <i>ever</i> va entre el auxiliar y el participio."},
 {s:"A", ipa:"ɪts ðə ˈhɑːrdɪst θɪŋ aɪv dʌn ðɪs jɪr ænd aɪv dʌn ə lɑːt əv ˈklaɪmɪŋ", p:"its da járdist zing áiv dan dis íer, and áiv dan a lat av kláiming",
  b:[["It's the hardest thing","Es lo más duro"],["I've done this year,","que he hecho este año,"],["and I've done a lot of climbing.","y he escalado bastante."]]},
 {s:"B", ipa:"æt ðə θɜːrd ˈaʊər aɪ ˈwʌznt ˈeɪbl tuː θɪŋk aɪ ˈoʊnli ˈkaʊntɪd steps", p:"at da zerd áuar ái uásnt éibl tu zink. ái óunli káuntid steps",
  b:[["At the third hour","A la tercera hora"],["I wasn't able to think.","no fui capaz de pensar."],["I only counted steps.","Sólo conté pasos."]],
  n:"<b>Wasn't able to</b>: una ocasión concreta. <i>Couldn't</i> sonaría a incapacidad general."},
 {s:"A", ipa:"ˈkaʊntɪŋ steps ɪz wʌt ˈevribɑːdi dʌz ˈwɔːkɪŋ ˌʌpˈhɪl fɔːr faɪv ˈaʊərz ˈɪznt ə spɔːrt", p:"káunting steps is uát évribadi das. uóking apjíl for fáiv áuars ísnt a sport",
  b:[["Counting steps","Contar pasos"],["is what everybody does.","es lo que hace todo el mundo."],["Walking uphill for five hours","Caminar cuesta arriba cinco horas"],["isn't a sport.","no es un deporte."]],
  n:"Dos sujetos en <b>-ing</b> seguidos. En español serían infinitivos."},
 {s:"B", ipa:"duː juː duː ə lɑːt əv spɔːrt ɪn ˈaɪərlənd", p:"du iú du a lat av sport in Áiarland",
  b:[["Do you do a lot of sport","¿Haces mucho deporte"],["in Ireland?","en Irlanda?"]]},
 {s:"A", ipa:"aɪ pleɪ ˈfʊtbɔːl ˈbædli aɪ ɡoʊ ˈswɪmɪŋ ɪn koʊld ˈwɔːtər ænd aɪ duː ˈjoʊɡə wʌns ə wiːk", p:"ái pléi fútbol bádli, ái góu suíming in kóuld uóter, and ái du ióuga uáns a uíik",
  b:[["I play football badly,","Juego fútbol mal,"],["I go swimming","voy a nadar"],["in cold water,","en agua fría,"],["and I do yoga","y hago yoga"],["once a week.","una vez por semana."]],
  n:"Los tres verbos en una línea: <b>play</b> con pelota, <b>go</b> con <i>-ing</i>, <b>do</b> con el resto."},
 {s:"B", ipa:"ɡoʊ pleɪ ænd duː haʊ duː juː noʊ wɪtʃ wʌn", p:"góu, pléi and du. jáu du iú nóu uích uán",
  b:[["Go, play and do.","Go, play y do."],["How do you know","¿Cómo sabes"],["which one?","cuál va?"]]},
 {s:"A", ipa:"bɔːl ɡeɪmz teɪk pleɪ æˈktɪvətiz wɪð ˈaɪ en dʒiː teɪk ɡoʊ ðə rest teɪk duː ˈmoʊstli", p:"bol guéims téik «play». aktívitis uid -ing téik «go». da rest téik «do». móustli",
  b:[["Ball games take play.","Los juegos de pelota llevan play."],["Activities with -ing take go.","Las actividades en -ing llevan go."],["The rest take do.","El resto lleva do."],["Mostly.","Más o menos."]]},
 {s:"B", ipa:"ˈmoʊstli", p:"móustli",
  b:[["Mostly.","Más o menos."]]},
 {s:"A", ipa:"ˈɪŋɡlɪʃ ɪz ˈmoʊstli ɑːr juː ˈeɪbl tuː wɔːk daʊn ɔːr duː wi sliːp hɪr", p:"ínglish is móustli. ar iú éibl tu uók dáun, or du ui slíip jíar",
  b:[["English is mostly.","El inglés es «más o menos»."],["Are you able to walk down,","¿Puedes bajar caminando,"],["or do we sleep here?","o dormimos aquí?"]]},
 {s:"B", ipa:"aɪ fiːl laɪk ˈsliːpɪŋ hɪr ˈɑːnɪstli", p:"ái fíil láik slíiping jíar, ánistli",
  b:[["I feel like sleeping here,","Me apetece dormir aquí,"],["honestly.","sinceramente."]],
  n:"<b>Feel like + -ing</b>: apetecer. Con sustantivo sería «parecerse a»."},
 {s:"A", ipa:"ˈevribɑːdi dʌz æt ðə tɑːp ɪn ˈtwenti ˈmɪnɪts juːl fiːl laɪk ˈiːtɪŋ", p:"évribadi das at da tap. in tuénti mínits iúl fíil láik íiting",
  b:[["Everybody does at the top.","A todos les pasa en la cima."],["In twenty minutes","En veinte minutos"],["you'll feel like eating.","te va a apetecer comer."]]},
 {s:"B", ipa:"aɪ fiːl laɪk ˈiːtɪŋ naʊ æz wel ˈkevɪn hæz ðə tʃiːz", p:"ái fíil láik íiting náu as uel. Kévin jas da chíis",
  b:[["I feel like eating now","Me apetece comer ya"],["as well.","también."],["Kevin has the cheese.","Kevin tiene el queso."]]},
 {s:"A", ipa:"ˈkevɪn ɪz tuː ˈhʌndrəd ˈmiːtərz bɪˈloʊ ʌs ˈteɪkɪŋ ˈfoʊtoʊz əv ə rɑːk", p:"Kévin is tu jándred míitars bilóu as, téiking fóutous av a rak",
  b:[["Kevin is two hundred metres","Kevin está doscientos metros"],["below us,","más abajo,"],["taking photos of a rock.","tomando fotos de una roca."]]},
 {s:"B", ipa:"əv ˈkɔːrs hi ɪz ˈemə θæŋk juː fɔːr ˈweɪtɪŋ ənˈtɪl ˈfebrueri", p:"av kórs ji is. Éma, zánk iú for uéiting antíl fébrueri",
  b:[["Of course he is.","Cómo no."],["Emma, thank you","Emma, gracias"],["for waiting until February.","por esperar hasta febrero."]]},
 {s:"A", ipa:"aɪ ˈwʌznt ˈeɪbl tuː duː ɪt əˈloʊn ænd juː ˈwɜːrnt wel ɪn ˈdʒænjueri", p:"ái uásnt éibl tu du it alóun. and iú uérnt uel in chániueri",
  b:[["I wasn't able to do it","No era capaz de hacerlo"],["alone.","sola."],["And you weren't well","Y tú no estabas bien"],["in January.","en enero."]]},
 {s:"B", ipa:"aɪ noʊ ˈdɑːktərz ˈɔːrdərz", p:"ái nóu. dáktars órdars",
  b:[["I know.","Lo sé."],["Doctor's orders.","Órdenes de la doctora."]]},
 {s:"A", ipa:"best ˈdɑːktər ɪn ðə striːt raɪt eɪt kɪˈlɑːmɪtərz daʊn ænd aɪ wɑːnt ə ˈkɑːfi", p:"best dáktar in da stríit. ráit: éit kilámitars dáun, and ái uánt a káfi",
  b:[["Best doctor in the street.","La mejor doctora de la calle."],["Right:","A ver:"],["eight kilometres down,","ocho kilómetros para abajo,"],["and I want a coffee.","y yo quiero un café."]]},
 {s:"B", ipa:"eɪt kɪˈlɑːmɪtərz ˈɡoʊɪŋ daʊn ɪz ðə pɑːrt ˈnoʊbɑːdi ˈfoʊtoʊɡrɑːfs", p:"éit kilámitars. góing dáun is da part nóubadi fóutograhfs",
  b:[["Eight kilometres.","Ocho kilómetros."],["Going down","Bajar"],["is the part","es la parte"],["nobody photographs.","que nadie fotografía."]],
  n:"Otra vez el <b>-ing</b> como sujeto: <i>going down is…</i>"}
];

const LECTURA = {
  titulo: "Two thousand eight hundred and seventy metres",
  entradilla: "El volcán, cinco semanas más tarde de lo previsto. El texto pone a trabajar lo de la Fase 1: <i>go</i>, <i>play</i> y <i>do</i> con los deportes, el <i>-ing</i> como sujeto, <i>be able to</i>, el superlativo con <i>ever</i> y los números grandes. Cada párrafo cambia de persona.",
  parrafos: [
    "We climbed the volcano on the seventh of February, five weeks later than the plan. We started at four in the morning at fourteen hundred metres and we reached the top at nine. It is two thousand eight hundred and seventy metres high, and it is the hardest thing I have ever done.",
    "Emma has climbed a lot of mountains and she says this one was the hardest of her year. She does yoga once a week, she goes swimming in Irish water, and she plays football badly. None of that prepares you for five hours uphill.",
    "Kevin wasn't able to walk in a straight line after the fourth hour, but he was able to take a hundred and forty photographs. Thirty of them are of the same rock. He says climbing is easy and walking down is the real sport.",
    "At the top nobody spoke for two minutes. Then everybody felt like eating at the same time, and Pablo and Nico ate half the cheese before we sat down. Going down took four hours. Counting steps is what you do when thinking stops working."
  ],
  glosario: [
    ["climbed","klaɪmd","subimos","kláimd"],
    ["has climbed","hæz klaɪmd","ha subido","jas kláimd"],
    ["started","ˈstɑːrtɪd","empezamos","startid"],
    ["reached","riːtʃt","llegamos a","ríicht"],
    ["says","sez","dice","ses"],
    ["does yoga","dʌz ˈjoʊɡə","hace yoga","das ióuga"],
    ["goes swimming","ɡoʊz ˈswɪmɪŋ","va a nadar","góus suíming"],
    ["plays football","pleɪz ˈfʊtbɔːl","juega fútbol","pléis fútbol"],
    ["prepares","prɪˈperz","prepara","pripérs"],
    ["wasn't able to","ˈwʌznt ˈeɪbl tuː","no fue capaz de","uásnt éibl tu"],
    ["was able to","wʌz ˈeɪbl tuː","fue capaz de","uás éibl tu"],
    ["spoke","spoʊk","habló","spóuk"],
    ["felt like","felt laɪk","les apeteció","felt láik"],
    ["ate","eɪt","se comieron","éit"],
    ["sat down","sæt daʊn","nos sentamos","sat dáun"],
    ["took","tʊk","tardó","tuk"],
    ["stops working","stɑːps ˈwɜːrkɪŋ","deja de funcionar","staps uérking"],
    ["climbing","ˈklaɪmɪŋ","subir","kláiming"],
    ["walking down","ˈwɔːkɪŋ daʊn","bajar caminando","uóking dáun"],
    ["going down","ˈɡoʊɪŋ daʊn","bajar","góing dáun"],
    ["counting steps","ˈkaʊntɪŋ steps","contar pasos","káunting steps"],
    ["thinking","ˈθɪŋkɪŋ","pensar","zínking"],
    ["I have ever done","aɪ hæv ˈevər dʌn","que he hecho nunca","ái jav évar dan"],
    ["the hardest","ðə ˈhɑːrdɪst","lo más duro","da járdist"],
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],
    ["mountains","ˈmaʊntənz","montañas","máuntens"],
    ["top","tɑːp","cima","tap"],
    ["uphill","ˌʌpˈhɪl","cuesta arriba","apjíl"],
    ["metres","ˈmiːtərz","metros","míitars"],
    ["fourteen hundred","ˈfɔːrtiːn ˈhʌndrəd","mil cuatrocientos","fórtiin jándred"],
    ["two thousand","tuː ˈθaʊzənd","dos mil","tu zóusand"],
    ["a hundred and forty","ə ˈhʌndrəd ænd ˈfɔːrti","ciento cuarenta","a jándred and fórti"],
    ["photographs","ˈfoʊtəɡrɑːfs","fotografías","fótagrahfs"],
    ["rock","rɑːk","roca","rak"],
    ["seventy","ˈsevnti","setenta","sévnti"],
    ["high","haɪ","de altura","jái"],
    ["eating","ˈiːtɪŋ","comer","íiting"],
    ["straight line","streɪt laɪn","línea recta","stréit láin"],
    ["sport","spɔːrt","deporte","sport"],
    ["cheese","tʃiːz","queso","chíis"],
    ["water","ˈwɔːtər","agua","uóter"],
    ["Irish","ˈaɪrɪʃ","irlandesa","áirish"],
    ["once a week","wʌns ə wiːk","una vez por semana","uáns a uíik"],
    ["five weeks later","faɪv wiːks ˈleɪtər","cinco semanas después","fáiv uíiks léitar"],
    ["fourth hour","fɔːrθ ˈaʊər","cuarta hora","forz áuar"],
    ["four hours","fɔːr ˈaʊərz","cuatro horas","for áuars"],
    ["two minutes","tuː ˈmɪnɪts","dos minutos","tu mínits"],
    ["half","hæf","la mitad de","jaf"],
    ["thirty","ˈθɜːrti","treinta","zérti"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["none of that","nʌn əv ðæt","nada de eso","nan av dat"],
    ["at the same time","æt ðə seɪm taɪm","a la vez","at da séim táim"],
    ["the real sport","ðə rɪəl spɔːrt","el deporte de verdad","da ríal sport"],
    ["easy","ˈiːzi","fácil","íisi"],
    ["plan","plæn","plan","plan"],
    ["February","ˈfebrueri","febrero","fébrueri"],
    ["seventh","ˈsevnθ","siete, séptimo","sévnz"]
  ],
  preguntas: [
    { q:"How high is the volcano?",
      ops:["1,400 metres","2,870 metres","870 metres"], ok:1,
      pista:"Primer párrafo. La otra cifra es la altura a la que empezaron a caminar." },
    { q:"What was Kevin able to do after the fourth hour?",
      ops:["Walk in a straight line","Cook for everybody","Take photographs"], ok:2,
      pista:"Tercer párrafo: el texto dice primero lo que <i>no</i> era capaz de hacer." },
    { q:"What happened at the top?",
      ops:["Nobody spoke for two minutes","They slept for an hour","They went down immediately"], ok:0,
      pista:"Cuarto párrafo, primera frase: el hambre llegó después." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-11"] = {
  meta: {
    id: "a2-11", nivel: "A2", numero: 11,
    titulo: "Deporte y ejercicio",
    descriptor: "Puedo hablar de los deportes que practico y con qué frecuencia, decir de qué fui o no fui capaz, y contar una experiencia física con cifras y medidas.",
    escena: "Emma & David · la cima del volcán, el 7 de febrero a las nueve de la mañana",
    personajeIA: "Emma", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
