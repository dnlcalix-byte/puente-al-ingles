/* ============================================================
   LECCIÓN A1-17 · Planes: going to
   Reparto: Pablo (con Nico al fondo) organizando una fiesta sorpresa
   para el cumpleaños de Ana. La lectura repasa todo lo de la Fase 1:
   las tres formas de going to, el contraste con will y las expresiones
   de tiempo futuro, en primera, tercera y plural.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Cuándo va a pasar", items:[
    ["tomorrow","təˈmɑːroʊ","mañana","tumárou"],["tonight","təˈnaɪt","esta noche","tunáit"],
    ["next week","nekst wiːk","la semana que viene","nekst uíik"],["next Saturday","nekst ˈsætərdeɪ","el sábado que viene","nekst sáterdei"],
    ["this weekend","ðɪs ˈwiːkend","este fin de semana","dis uíkend"],["in two days","ɪn tuː deɪz","dentro de dos días","in tu déis"],
    ["soon","suːn","pronto","súun"],["later","ˈleɪtər","más tarde","léitar"],
    ["early","ˈɜːrli","temprano","érli"],["on Friday","ɑːn ˈfraɪdeɪ","el viernes","an fráidei"]
  ]},
  {g:"Organizar algo", items:[
    ["plan","plæn","plan","plan"],["party","ˈpɑːrti","fiesta","párti"],
    ["surprise","sərˈpraɪz","sorpresa","sorpráis"],["birthday","ˈbɜːrθdeɪ","cumpleaños","bérzdei"],
    ["invitation","ˌɪnvɪˈteɪʃn","invitación","invitéishon"],["guest","ɡest","invitado","guest"],
    ["cake","keɪk","pastel","kéik"],["present","ˈpreznt","regalo","présent"],
    ["balloon","bəˈluːn","globo","balúun"],["list","lɪst","lista","list"]
  ]},
  {g:"Lo que hay que hacer", items:[
    ["invite","ɪnˈvaɪt","invitar","inváit"],["bring","brɪŋ","traer","bring"],
    ["decorate","ˈdekəreɪt","decorar","dékoreit"],["prepare","prɪˈper","preparar","pripér"],
    ["order","ˈɔːrdər","encargar, pedir","órdar"],["borrow","ˈbɑːroʊ","pedir prestado","bárou"],
    ["choose","tʃuːz","elegir","chúus"],["arrive","əˈraɪv","llegar","aráiv"],
    ["hide","haɪd","esconder","jáid"],["guess","ɡes","adivinar","gues"]
  ]},
  {g:"Proponer y aceptar", items:[
    ["Let's…","lets","vamos a…","lets"],["Shall we…?","ʃæl wiː","¿nos…?","shal ui"],
    ["Good idea","ɡʊd aɪˈdɪə","buena idea","gud aidía"],["No problem","noʊ ˈprɑːbləm","no hay problema","nóu práblem"],
    ["Are you sure?","ɑːr juː ʃʊr","¿estás seguro?","ar iú shur"],["Of course","əv ˈkɔːrs","por supuesto","av kórs"],
    ["Maybe","ˈmeɪbi","quizá","méibi"],["It's a deal","ɪts ə diːl","trato hecho","its a díil"],
    ["I think so","aɪ θɪŋk soʊ","creo que sí","ái zink sóu"],["Don't worry","doʊnt ˈwʌri","no te preocupes","dóunt uóri"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, sin raspar.","hide &rarr; jáid"],
  ["z","Lengua entre los dientes, sin voz.","birthday &rarr; bérzdei"],
  ["sh","Como pedir silencio.","invitation &rarr; invitéishon"],
  ["ch","Como en «coche».","choose &rarr; chúus"],
  ["v","Labio de abajo contra los dientes de arriba.","invite &rarr; inváit"],
  ["gónna","<b>going to</b> se contrae al hablar: suena «gónna» ante verbo.","I'm going to go &rarr; áim gónna góu"],
  ["úu","Vocal larga, labios muy cerrados.","soon &rarr; súun"],
  ["r final","Apenas se toca; nunca vibra.","later &rarr; léitar"],
  ["s de plural","Tras sonido sonoro suena <b>s</b> sonora, casi «z».","balloons &rarr; balúuns"]
];

const VERBS = [
  ["to plan","reg","plan · plans","planned","will plan","planear"],
  ["to invite","reg","invite · invites","invited","will invite","invitar"],
  ["to decorate","reg","decorate · decorates","decorated","will decorate","decorar"],
  ["to prepare","reg","prepare · prepares","prepared","will prepare","preparar"],
  ["to order","reg","order · orders","ordered","will order","encargar"],
  ["to borrow","reg","borrow · borrows","borrowed","will borrow","pedir prestado"],
  ["to arrive","reg","arrive · arrives","arrived","will arrive","llegar"],
  ["to guess","reg","guess · guesses","guessed","will guess","adivinar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"],
  ["to hide","irr","hide · hides","hid","will hide","esconder"],
  ["to make","irr","make · makes","made","will make","hacer"]
];

const GRAMMAR = [
  {t:"BE GOING TO: el plan ya decidido", s:"am / is / are + going to + verbo base",
   p:"Esta estructura no habla del futuro en abstracto: habla de <b>lo que ya está decidido</b>. La parte que cambia es el verbo <i>to be</i>; <i>going to</i> nunca cambia y el verbo que sigue va siempre en forma base.",
   table:{head:["Persona","Forma","Ejemplo"], rows:[
     ["I","am going to","I am going to buy the drinks."],
     ["he / she / it","is going to","She is going to arrive at eight."],
     ["you / we / they","are going to","They are going to decorate the garden."]
   ]},
   aviso:["El verbo de después no lleva nada","<span class='wrong'>She is going to arrives.</span> &nbsp;&rarr;&nbsp; <span class='right'>She is going to arrive.</span> La <i>-s</i> de tercera persona ya está en <i>is</i>."]},

  {t:"Negar y preguntar", s:"se mueve el TO BE, nunca el GOING",
   p:"Como el verbo conjugado es <b>to be</b>, todo gira alrededor de él: el <i>not</i> se le pega detrás y en la pregunta se pone delante del sujeto. <i>Did</i> y <i>do</i> no pintan nada aquí.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Afirmativo","sujeto + be + going to","We are going to start at seven."],
     ["Negativo","sujeto + be + not + going to","We aren't going to use balloons."],
     ["Pregunta","be + sujeto + going to","Are you going to help us?"],
     ["Respuesta corta","Yes, I am. / No, I'm not.","— Is she going to come? — Yes, she is."]
   ]},
   aviso:["Nunca con <i>do</i>","<span class='wrong'>Do you going to help?</span> &nbsp;&rarr;&nbsp; <span class='right'>Are you going to help?</span>"]},

  {t:"GOING TO frente a WILL", s:"plan frente a decisión del momento",
   p:"Los dos hablan del futuro, pero no del mismo futuro. <b>Going to</b> es lo que ya estaba decidido o lo que se ve venir; <b>will</b> es lo que decides mientras hablas o lo que crees que pasará.",
   table:{head:["Se usa","Cuándo","Ejemplo"], rows:[
     ["going to","plan hecho de antes","We are going to make a party."],
     ["going to","hay pruebas a la vista","Look at those clouds: it's going to rain."],
     ["will","decisión en ese instante","— We need drinks. — OK, I'll buy them."],
     ["will","predicción u opinión","I think she will guess."]
   ]},
   aviso:["La prueba del algodón","Si puedes decir «ya lo tenía pensado», es <b>going to</b>. Si acabas de decidirlo en ese segundo, es <b>will</b>."]},

  {t:"El presente continuo para citas fijas", s:"I'm meeting Ana at six",
   p:"Cuando el plan tiene <b>hora y lugar acordados con otra persona</b>, el inglés suele usar el presente continuo, igual que el español usa el presente: «mañana <i>ceno</i> con ella».",
   chips:[["I'm meeting Pablo at six.","Quedo con Pablo a las seis."],["She's coming on Saturday.","Viene el sábado."],["We're having dinner at eight.","Cenamos a las ocho."],["What are you doing tonight?","¿Qué haces esta noche?"]],
   aviso:["Necesita un tiempo explícito","Sin <i>at six</i> o <i>on Saturday</i>, la frase vuelve a significar «ahora mismo». El complemento de tiempo es lo que la convierte en plan."]},

  {t:"Las expresiones de tiempo futuro", s:"tomorrow, next, in, on, tonight",
   p:"Casi todas van sin preposición, y ahí es donde el hispanohablante se equivoca por traducir literalmente.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["next Saturday","<span class='wrong'>the next Saturday</span>","el sábado que viene"],
     ["tomorrow morning","<span class='wrong'>in the tomorrow</span>","mañana por la mañana"],
     ["tonight","<span class='wrong'>this night</span>","esta noche"],
     ["in two days","<span class='wrong'>after two days</span>","dentro de dos días"],
     ["on Friday","<span class='wrong'>in Friday</span>","el viernes"]
   ]},
   aviso:["<i>In</i> mirando al futuro significa «dentro de»","<i>In two days</i> no es «en dos días de trabajo», es «dentro de dos días»."]},

  {t:"Proponer algo", s:"Let's / Shall we / Why don't we",
   p:"Tres maneras de invitar al otro a hacer algo contigo. Las tres van seguidas de <b>verbo base</b>.",
   chips:[["Let's make a list.","Hagamos una lista."],["Shall we start now?","¿Empezamos ya?"],["Why don't we ask her?","¿Por qué no le preguntamos?"],["Do you want to help?","¿Quieres ayudar?"]],
   aviso:["<i>Let's</i> es <i>let us</i>","Incluye siempre al que habla. Si quieres pedirle algo sólo a la otra persona, es <i>Can you…?</i>, no <i>let's</i>."]}
];

/* Pablo (A) recluta a David (B) para la fiesta sorpresa de Ana */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd kʌm hɪr ˈniːkoʊ ænd aɪ ɑːr ˈɡoʊɪŋ tuː duː ˈsʌmθɪŋ bɪɡ", p:"déivid, kam jíar. Níkou and ái ar góing tu du sámzing big",
  b:[["David, come here.","David, ven acá."],["Nico and I","Nico y yo"],["are going to do","vamos a hacer"],["something big.","algo grande."]],
  n:"<b>Nico and I are</b>: dos sujetos suman plural, así que el verbo es <i>are</i>, no <i>am</i>."},
 {s:"B", ipa:"ˈsʌmθɪŋ bɪɡ wʌt ɑːr juː ˈɡoʊɪŋ tuː duː", p:"sámzing big. uát ar iú góing tu du",
  b:[["Something big?","¿Algo grande?"],["What are you going to do?","¿Qué van a hacer?"]],
  n:"La pregunta mueve el <b>are</b> delante del sujeto. <i>Going to</i> se queda quieto."},
 {s:"A", ipa:"wɪr ˈɡoʊɪŋ tuː meɪk ə sərˈpraɪz ˈpɑːrti fɔːr ˈænə hɜːr ˈbɜːrθdeɪ ɪz ɑːn ˈsætərdeɪ", p:"uír góing tu méik a sorpráis párti for Ána. jer bérzdei is an sáterdei",
  b:[["We're going to make","Vamos a hacer"],["a surprise party","una fiesta sorpresa"],["for Ana.","para Ana."],["Her birthday","Su cumpleaños"],["is on Saturday.","es el sábado."]],
  n:"<b>On Saturday</b>, nunca <span class='wrong'>in Saturday</span>."},
 {s:"B", ipa:"ðæts ə ɡreɪt aɪˈdɪə huː ɑːr juː ˈɡoʊɪŋ tuː ɪnˈvaɪt", p:"dats a gréit aidía. ju ar iú góing tu inváit",
  b:[["That's a great idea.","Es una gran idea."],["Who are you going to invite?","¿A quién van a invitar?"]]},
 {s:"A", ipa:"ˈserə ˈkevɪn ˈmɪsɪz ˈkæstro ænd ðə ˈneɪbərz əˈbaʊt ˈtwenti ˈpiːpl", p:"Séra, Kévin, mísis Kástro and da néibars. abáut tuénti píipl",
  b:[["Sarah, Kevin,","Sarah, Kevin,"],["Mrs Castro","la señora Castro"],["and the neighbours.","y los vecinos."],["About twenty people.","Unas veinte personas."]]},
 {s:"B", ipa:"ˈtwenti wer ɑːr juː ˈɡoʊɪŋ tuː pʊt ðem ɔːl", p:"tuénti. uér ar iú góing tu put dem ol",
  b:[["Twenty!","¡Veinte!"],["Where are you going to put","¿Dónde los van a meter"],["them all?","a todos?"]]},
 {s:"A", ipa:"ɪn ðə ˈɡɑːrdn ɪt ˈɪznt ˈɡoʊɪŋ tuː reɪn aɪ sɔː ðə ˈfɔːrkæst", p:"in da gárden. it ísnt góing tu réin: ái sóo da fórkast",
  b:[["In the garden.","En el jardín."],["It isn't going to rain:","No va a llover:"],["I saw the forecast.","vi el pronóstico."]],
  n:"<b>It isn't going to rain</b> con pruebas a la vista: el pronóstico. Con <i>will</i> sería una simple opinión."},
 {s:"B", ipa:"ænd ðə keɪk ɑːr juː ˈɡoʊɪŋ tuː baɪ wʌn", p:"and da kéik. ar iú góing tu bái uán",
  b:[["And the cake?","¿Y el pastel?"],["Are you going to buy one?","¿Van a comprar uno?"]]},
 {s:"A", ipa:"noʊ wi ˈɑːrnt ˈniːkoʊ ɪz ˈɡoʊɪŋ tuː meɪk ɪt hiːz ə ɡʊd kʊk", p:"nóu, ui árnt. Níkou is góing tu méik it. jíis a gud kuk",
  b:[["No, we aren't.","No, no vamos."],["Nico is going to make it.","Nico lo va a hacer."],["He's a good cook.","Es buen cocinero."]],
  n:"Respuesta corta con el mismo <i>to be</i>: <b>No, we aren't</b>. Nunca <span class='wrong'>no, we don't</span>."},
 {s:"B", ipa:"ˈrɪəli ðen aɪm ˈɡoʊɪŋ tuː iːt tuː ˈpiːsɪz", p:"ríili. den áim góing tu íit tu píisis",
  b:[["Really?","¿En serio?"],["Then","Entonces"],["I'm going to eat","me voy a comer"],["two pieces.","dos pedazos."]]},
 {s:"A", ipa:"tuː ˈpiːsɪz ðen wɪr ˈɡoʊɪŋ tuː niːd ə ˈvɛri bɪɡ keɪk", p:"tu píisis. den uír góing tu níid a véri big kéik",
  b:[["Two pieces?","¿Dos pedazos?"],["Then we're going to need","Entonces vamos a necesitar"],["a very big cake.","un pastel muy grande."]]},
 {s:"B", ipa:"wʌt taɪm ɪz ɪt ˈɡoʊɪŋ tuː stɑːrt", p:"uát táim is it góing tu start",
  b:[["What time","¿A qué hora"],["is it going to start?","va a empezar?"]]},
 {s:"A", ipa:"æt ˈsevn bʌt ˈænə ɪz ˈɡoʊɪŋ tuː əˈraɪv æt eɪt soʊ ˈevriwʌn hæz tuː kʌm ˈɜːrli", p:"at sévn. bat Ána is góing tu aráiv at éit, sóu évriuan jas tu kam érli",
  b:[["At seven.","A las siete."],["But Ana","Pero Ana"],["is going to arrive","va a llegar"],["at eight,","a las ocho,"],["so everyone","así que todos"],["has to come early.","tienen que venir temprano."]],
  n:"<b>Is going to arrive</b>, sin <i>-s</i> en <i>arrive</i>: la tercera persona ya está marcada en <i>is</i>."},
 {s:"B", ipa:"haʊ ɑːr juː ˈɡoʊɪŋ tuː brɪŋ hɜːr tuː ðə ˈɡɑːrdn", p:"jáu ar iú góing tu bring jer tu da gárden",
  b:[["How are you going to bring her","¿Cómo la van a llevar"],["to the garden?","al jardín?"]]},
 {s:"A", ipa:"aɪm ˈɡoʊɪŋ tuː tel hɜːr ðæt ˈmɪstər ɔːrˈteɪɡə wɑːnts tuː siː hɜːr", p:"áim góing tu tel jer dat míster Ortéga uánts tu síi jer",
  b:[["I'm going to tell her","Le voy a decir"],["that Mr. Ortega","que el señor Ortega"],["wants to see her.","quiere verla."]]},
 {s:"B", ipa:"ʃiːz ˈɡoʊɪŋ tuː noʊ ʃi ˈɔːlweɪz noʊz", p:"shíis góing tu nóu. shi ólueis nóus",
  b:[["She's going to know.","Se va a dar cuenta."],["She always knows.","Siempre se da cuenta."]],
  n:"Contraste limpio: <b>she's going to know</b> es una predicción con base; <b>she always knows</b> es un hábito, presente simple."},
 {s:"A", ipa:"ˈmeɪbi ɑːr juː ˈɡoʊɪŋ tuː help ʌs", p:"méibi. ar iú góing tu jelp as",
  b:[["Maybe.","Quizá."],["Are you going to help us?","¿Nos vas a ayudar?"]]},
 {s:"B", ipa:"əv ˈkɔːrs aɪm ˈɡoʊɪŋ tuː baɪ ðə drɪŋks təˈmɑːroʊ", p:"av kórs. áim góing tu bái da drinks tumárou",
  b:[["Of course.","Por supuesto."],["I'm going to buy","Voy a comprar"],["the drinks","las bebidas"],["tomorrow.","mañana."]],
  n:"<b>Tomorrow</b> va suelto, sin preposición: nunca <span class='wrong'>in tomorrow</span>."},
 {s:"A", ipa:"ˈpɜːrfɪkt ˈniːkoʊ ɪz ˈɡoʊɪŋ tuː brɪŋ hɪz ˈspiːkərz", p:"pérfect. Níkou is góing tu bring jis spíikars",
  b:[["Perfect.","Perfecto."],["Nico is going to bring","Nico va a traer"],["his speakers.","sus bocinas."]]},
 {s:"B", ipa:"ɡʊd lets meɪk ə lɪst təˈnaɪt", p:"gud. lets méik a list tunáit",
  b:[["Good.","Bien."],["Let's make a list","Hagamos una lista"],["tonight.","esta noche."]],
  n:"<b>Let's + verbo base</b>: <i>let's make</i>, nunca <span class='wrong'>let's to make</span>."},
 {s:"A", ipa:"lets duː ɪt naʊ aɪm ˈɡoʊɪŋ tuː raɪt ˈevriθɪŋ daʊn", p:"lets du it náu. áim góing tu ráit évrizing dáun",
  b:[["Let's do it now.","Hagámosla ahora."],["I'm going to write","Voy a apuntar"],["everything down.","todo."]]},
 {s:"B", ipa:"ɑːr wi ˈɡoʊɪŋ tuː tel maɪ ˈmʌðər", p:"ar ui góing tu tel mái máder",
  b:[["Are we going to tell","¿Le vamos a decir"],["my mother?","a mi mamá?"]]},
 {s:"A", ipa:"jes wi ɑːr ʃiːz ˈɡoʊɪŋ tuː kʊk ðə fuːd", p:"iés, ui ar. shíis góing tu kuk da fúud",
  b:[["Yes, we are.","Sí."],["She's going to cook","Ella va a cocinar"],["the food.","la comida."]]},
 {s:"B", ipa:"ðen ɪts ˈɡoʊɪŋ tuː biː ə ɡreɪt ˈpɑːrti", p:"den its góing tu bi a gréit párti",
  b:[["Then","Entonces"],["it's going to be","va a ser"],["a great party.","una gran fiesta."]]}
];

const LECTURA = {
  titulo: "A surprise for Ana",
  entradilla: "El plan completo de la fiesta, escrito con lo que acabas de estudiar: las tres formas de <i>going to</i>, el contraste con <i>will</i> y las expresiones de tiempo futuro. Cada párrafo cambia de persona, y el último vuelve al presente simple para que veas la diferencia.",
  parrafos: [
    "Next Saturday is Ana's birthday and we are going to make a surprise party in the garden. I am going to buy the drinks on Friday, and I am not going to say a word to her. We are going to start at seven, because she is going to arrive at eight.",
    "Nico is going to make the cake. He says he is a good cook, but last year he made one and nobody ate it. This time Mrs. Castro is going to help him. She is going to bring the sugar and the eggs from her shop, and she is not going to charge us anything.",
    "Pablo and Kevin are going to decorate the garden on Saturday morning. They are going to put lights in the trees and twenty chairs on the grass. They are not going to use balloons, because the wind always breaks them.",
    "Is Ana going to guess? Probably. She always knows everything before everybody. My mother is going to cook the food, and she is going to tell her that we have guests from Canada. That is almost true: Sarah is coming on Saturday, and she is Canadian."
  ],
  glosario: [
    ["going to","ˈɡoʊɪŋ tuː","va a, vamos a","góing tu"],
    ["are going to","ɑːr ˈɡoʊɪŋ tuː","van a, vamos a","ar góing tu"],
    ["is going to","ɪz ˈɡoʊɪŋ tuː","va a","is góing tu"],
    ["am going to","æm ˈɡoʊɪŋ tuː","voy a","am góing tu"],
    ["is not going to","ɪz nɑːt ˈɡoʊɪŋ tuː","no va a","is nat góing tu"],
    ["are not going to","ɑːr nɑːt ˈɡoʊɪŋ tuː","no van a","ar nat góing tu"],
    ["is coming","ɪz ˈkʌmɪŋ","viene (plan fijo)","is káming"],
    ["buy","baɪ","comprar","bái"],
    ["say","seɪ","decir","séi"],
    ["start","stɑːrt","empezar","start"],
    ["arrive","əˈraɪv","llegar","aráiv"],
    ["make","meɪk","hacer","méik"],
    ["made","meɪd","hizo","méid"],
    ["ate","eɪt","comió","éit"],
    ["help","help","ayudar","jelp"],
    ["bring","brɪŋ","traer","bring"],
    ["charge","tʃɑːrdʒ","cobrar","charch"],
    ["decorate","ˈdekəreɪt","decorar","dékoreit"],
    ["put","pʊt","poner","put"],
    ["use","juːz","usar","iúus"],
    ["breaks","breɪks","rompe","bréiks"],
    ["guess","ɡes","adivinar","gues"],
    ["knows","noʊz","sabe","nóus"],
    ["cook","kʊk","cocinar; cocinero","kuk"],
    ["tell","tel","decirle","tel"],
    ["birthday","ˈbɜːrθdeɪ","cumpleaños","bérzdei"],
    ["surprise party","sərˈpraɪz ˈpɑːrti","fiesta sorpresa","sorpráis párti"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],
    ["drinks","drɪŋks","bebidas","drinks"],
    ["word","wɜːrd","palabra","uérd"],
    ["cake","keɪk","pastel","kéik"],
    ["sugar","ˈʃʊɡər","azúcar","shúgar"],
    ["eggs","eɡz","huevos","egs"],
    ["shop","ʃɑːp","tienda","shap"],
    ["lights","laɪts","luces","láits"],
    ["trees","triːz","árboles","tríis"],
    ["chairs","tʃerz","sillas","chérs"],
    ["grass","ɡræs","césped","gras"],
    ["balloons","bəˈluːnz","globos","balúuns"],
    ["wind","wɪnd","viento","uínd"],
    ["food","fuːd","comida","fúud"],
    ["guests","ɡests","invitados","guests"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["almost","ˈɔːlmoʊst","casi","ólmoust"],
    ["true","truː","cierto","trúu"],
    ["Canadian","kəˈneɪdiən","canadiense","kanéidian"],
    ["next Saturday","nekst ˈsætərdeɪ","el sábado que viene","nekst sáterdei"],
    ["last year","læst jɪr","el año pasado","last íer"],
    ["this time","ðɪs taɪm","esta vez","dis táim"]
  ],
  preguntas: [
    { q:"What time is the party going to start?",
      ops:["At seven","At eight","At six"], ok:0,
      pista:"Primer párrafo: una hora es la del inicio y la otra, la de la llegada de Ana." },
    { q:"Who is going to make the cake?",
      ops:["Mrs. Castro","David","Nico"], ok:2,
      pista:"Segundo párrafo, primera frase. La otra persona sólo ayuda." },
    { q:"Why aren't they going to use balloons?",
      ops:["Because they are expensive","Because the wind always breaks them","Because Ana doesn't like them"], ok:1,
      pista:"Tercer párrafo: la razón va después de <i>because</i>." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-17"] = {
  meta: {
    id: "a1-17", nivel: "A1", numero: 17,
    titulo: "Planes: going to",
    descriptor: "Puedo hablar de planes ya decididos, proponer actividades a otra persona y situarlas en el tiempo futuro cercano.",
    escena: "Pablo & David · el patio de la casa, organizando la fiesta sorpresa de Ana",
    personajeIA: "Pablo", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
