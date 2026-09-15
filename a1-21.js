/* ============================================================
   LECCIÓN A1-21 · En el aeropuerto
   Reparto: Laura, la agente de facturación, el día que David viaja
   a Toronto. La lectura reúne los seis puntos de la Fase 1 —will
   para avisos, too much/too many, need, el orden de la frase, la
   preposición al final y las respuestas cortas— en yo, ella, ellos
   y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"En el mostrador", items:[
    ["check-in","ˈtʃek ɪn","facturación","chek-in"],["counter","ˈkaʊntər","mostrador","káuntar"],
    ["boarding pass","ˈbɔːrdɪŋ pæs","pase de abordar","bórding pas"],["passport","ˈpæspɔːrt","pasaporte","pásport"],
    ["ticket","ˈtɪkɪt","boleto","tíket"],["seat","siːt","asiento","síit"],
    ["window seat","ˈwɪndoʊ siːt","asiento de ventana","uíndou síit"],["aisle seat","aɪl siːt","asiento de pasillo","áil síit"],
    ["queue","kjuː","fila","kiú"],["flight number","flaɪt ˈnʌmbər","número de vuelo","fláit námbar"]
  ]},
  {g:"El equipaje", items:[
    ["luggage","ˈlʌɡɪdʒ","equipaje","lágich"],["hand luggage","hænd ˈlʌɡɪdʒ","equipaje de mano","jand lágich"],
    ["suitcase","ˈsuːtkeɪs","maleta","súutkeis"],["backpack","ˈbækpæk","mochila","bákpak"],
    ["bag","bæɡ","bolso, maleta","bag"],["weight","weɪt","peso","uéit"],
    ["kilo","ˈkiːloʊ","kilo","kílou"],["scales","skeɪlz","báscula","skéils"],
    ["heavy","ˈhevi","pesado","jévi"],["limit","ˈlɪmɪt","límite","límit"]
  ]},
  {g:"Por el aeropuerto", items:[
    ["gate","ɡeɪt","puerta de embarque","guéit"],["terminal","ˈtɜːrmɪnl","terminal","términl"],
    ["security","sɪˈkjʊrəti","seguridad","sikiúriti"],["departures","dɪˈpɑːrtʃərz","salidas","dipárchars"],
    ["arrivals","əˈraɪvlz","llegadas","aráivls"],["delay","dɪˈleɪ","retraso","diléi"],
    ["on time","ɑːn taɪm","a tiempo","an táim"],["duty-free","ˌduːti ˈfriː","libre de impuestos","diúti-fríi"],
    ["passenger","ˈpæsɪndʒər","pasajero","pásinchar"],["screen","skriːn","pantalla","skríin"]
  ]},
  {g:"Frases del trámite", items:[
    ["Here you are","hɪr juː ɑːr","aquí tiene","jíar iú ar"],["Just a moment","dʒʌst ə ˈmoʊmənt","un momento","chast a móument"],
    ["That's fine","ðæts faɪn","está bien","dats fáin"],["I'm afraid…","aɪm əˈfreɪd","me temo que…","áim afréid"],
    ["How many bags?","haʊ ˈmeni bæɡz","¿cuántas maletas?","jáu méni bags"],["Anything to declare?","ˈeniθɪŋ tuː dɪˈkler","¿algo que declarar?","énizing tu diklér"],
    ["Boarding starts at…","ˈbɔːrdɪŋ stɑːrts æt","el embarque empieza a las…","bórding starts at"],["Enjoy your flight","ɪnˈdʒɔɪ jʊr flaɪt","buen vuelo","inchói iór fláit"],
    ["Have a good trip","hæv ə ɡʊd trɪp","buen viaje","jav a gud trip"],["No problem","noʊ ˈprɑːbləm","no hay problema","nóu práblem"]
  ]}
];

const PRONKEY = [
  ["ch","Como en «coche». Es el sonido de la <i>gg</i> de <i>luggage</i>.","luggage &rarr; lágich"],
  ["sh","Como pedir silencio.","departures &rarr; dipárchars"],
  ["j","Aire por la garganta, sin raspar.","heavy &rarr; jévi"],
  ["v","Labio de abajo contra los dientes de arriba.","arrivals &rarr; aráivls"],
  ["z","Lengua entre los dientes, sin voz.","anything &rarr; énizing"],
  ["kiú","La <i>qu</i> de <i>queue</i>: sólo suena la primera letra.","queue &rarr; kiú"],
  ["s muda","La <i>s</i> de <i>aisle</i> no se pronuncia.","aisle &rarr; áil"],
  ["gh muda","En <i>weight</i> y <i>flight</i> la <i>gh</i> no suena.","weight &rarr; uéit"],
  ["r final","Apenas se toca; nunca vibra.","counter &rarr; káuntar"]
];

const VERBS = [
  ["to check in","reg","check in · checks in","checked in","will check in","facturar"],
  ["to board","reg","board · boards","boarded","will board","abordar"],
  ["to land","reg","land · lands","landed","will land","aterrizar"],
  ["to wait","reg","wait · waits","waited","will wait","esperar"],
  ["to weigh","reg","weigh · weighs","weighed","will weigh","pesar"],
  ["to declare","reg","declare · declares","declared","will declare","declarar"],
  ["to travel","reg","travel · travels","travelled","will travel","viajar"],
  ["to arrive","reg","arrive · arrives","arrived","will arrive","llegar"],
  ["to take off","irr","take off · takes off","took off","will take off","despegar"],
  ["to leave","irr","leave · leaves","left","will leave","salir"],
  ["to fly","irr","fly · flies","flew","will fly","volar"],
  ["to get","irr","get · gets","got","will get","llegar; conseguir"]
];

const GRAMMAR = [
  {t:"WILL: avisos, horarios y decisiones del momento", s:"The gate will close at eight",
   p:"En la lección de los planes viste <i>going to</i>. <b>Will</b> es el otro futuro y en un aeropuerto se oye todo el tiempo: los avisos, los horarios que anuncia alguien con autoridad, y lo que decides en el instante.",
   table:{head:["Uso","Ejemplo","Español"], rows:[
     ["Aviso oficial","The flight will leave at eight.","El vuelo saldrá a las ocho."],
     ["Decisión inmediata","I'll take out three kilos.","Saco tres kilos."],
     ["Predicción","You won't see much at night.","No verás mucho de noche."],
     ["Ofrecimiento","I'll help you with the bag.","Le ayudo con la maleta."]
   ]},
   aviso:["<i>Will</i> es igual para todas las personas","No cambia nunca y el verbo va en base, sin <i>to</i>: <i>he will go</i>, no <span class='wrong'>he wills to go</span>. La negación es <b>won't</b>."]},

  {t:"TOO MUCH y TOO MANY", s:"demasiado, con sustantivos",
   p:"Ya viste <i>too</i> delante de un adjetivo (<i>too heavy</i>). Delante de un <b>sustantivo</b> necesita compañía, y cuál depende de si se puede contar.",
   table:{head:["Estructura","Con","Ejemplo"], rows:[
     ["too + adjetivo","—","The suitcase is too heavy."],
     ["too much + incontable","luggage, water, time","You have too much luggage."],
     ["too many + contable plural","bags, people, hours","There are too many bags."],
     ["not enough + los dos","—","There isn't enough space."]
   ]},
   aviso:["<i>Too</i> no es <i>very</i>","<i>Very heavy</i> es un hecho; <b>too heavy</b> significa que pasa del límite y hay un problema. En el mostrador esa diferencia cuesta dinero."]},

  {t:"NEED: dos construcciones", s:"need + cosa / need to + verbo",
   p:"Si lo que hace falta es una <b>cosa</b>, va directo. Si lo que hace falta es <b>hacer algo</b>, entra <i>to</i>.",
   table:{head:["Estructura","Ejemplo","Español"], rows:[
     ["need + sustantivo","You need a passport.","Necesita un pasaporte."],
     ["need to + verbo","You need to check in.","Tiene que facturar."],
     ["negativo","You don't need to pay.","No hace falta que pague."],
     ["pregunta","Do I need to do anything else?","¿Necesito hacer algo más?"]
   ]},
   aviso:["<i>Don't need to</i> no es prohibición","Significa que <b>no hace falta</b>, no que esté prohibido. Lo prohibido se dice con <i>can't</i>: <i>you can't take that</i>."]},

  {t:"El orden de la frase inglesa", s:"sujeto · verbo · objeto · lugar · tiempo",
   p:"El inglés es mucho más rígido que el español con el orden, y en A1 esto ya decide si te entienden. La regla completa es: primero quién, luego qué hace, luego a qué, después dónde y al final cuándo.",
   table:{head:["Frase","Orden"], rows:[
     ["I checked in my suitcase at the counter at two.","sujeto · verbo · objeto · lugar · tiempo"],
     ["<span class='wrong'>I checked in at two my suitcase.</span>","el tiempo no se mete en medio"],
     ["The plane landed in Toronto at six.","sujeto · verbo · lugar · tiempo"],
     ["At two I checked in my suitcase.","el tiempo sí puede ir al principio"]
   ]},
   aviso:["Nada se mete entre el verbo y su objeto","<span class='wrong'>I speak very well English.</span> &nbsp;&rarr;&nbsp; <span class='right'>I speak English very well.</span> El objeto va pegado al verbo."]},

  {t:"La preposición al final de la pregunta", s:"Where are you flying to?",
   p:"En español la preposición va delante («¿<b>A</b> dónde vuelas?»). En inglés se queda <b>al final</b>, huérfana. Suena rarísimo al principio y es lo normal en la lengua hablada.",
   chips:[["Where are you flying to?","¿A dónde vuela?"],["Who are you travelling with?","¿Con quién viaja?"],["What is this bag for?","¿Para qué es esta bolsa?"],["Which gate are we waiting at?","¿En qué puerta esperamos?"]],
   aviso:["No se traduce el orden español","<span class='wrong'>To where are you flying?</span> Existe, pero suena a documento oficial. En la conversación real la preposición va al final."]},

  {t:"Las respuestas cortas, todas juntas", s:"se repite el auxiliar, nunca el verbo",
   p:"Es el repaso de todo A1 en una sola tabla. La respuesta corta <b>repite el auxiliar de la pregunta</b>, y sólo ése.",
   table:{head:["Pregunta","Sí","No"], rows:[
     ["Do you have a ticket?","Yes, I do.","No, I don't."],
     ["Does she travel a lot?","Yes, she does.","No, she doesn't."],
     ["Did you check in?","Yes, I did.","No, I didn't."],
     ["Are you ready?","Yes, I am.","No, I'm not."],
     ["Was the flight late?","Yes, it was.","No, it wasn't."],
     ["Can I take this bag?","Yes, you can.","No, you can't."],
     ["Will it leave on time?","Yes, it will.","No, it won't."],
     ["Is there another flight?","Yes, there is.","No, there isn't."]
   ]},
   aviso:["Nunca se repite el verbo principal","<span class='wrong'>Yes, I have a ticket.</span> como respuesta corta suena a traducción. Lo natural es <span class='right'>Yes, I do.</span>"]}
];

/* Laura (A, agente de facturación) atiende a David (B), que vuela a Toronto */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ wer ɑːr juː ˈflaɪɪŋ tuː", p:"gud mórning. uér ar iú fláiing tu",
  b:[["Good morning.","Buenos días."],["Where are you","¿A dónde"],["flying to?","vuela?"]],
  n:"La preposición se queda al final: <b>Where are you flying to?</b> Es lo normal en inglés hablado."},
 {s:"B", ipa:"tuː təˈrɑːntoʊ hɪr ɪz maɪ ˈpæspɔːrt ænd maɪ ˈtɪkɪt", p:"tu Taróntou. jíar is mái pásport and mái tíket",
  b:[["To Toronto.","A Toronto."],["Here is","Aquí tiene"],["my passport","mi pasaporte"],["and my ticket.","y mi boleto."]]},
 {s:"A", ipa:"θæŋk juː haʊ ˈmeni bæɡz ɑːr juː ˈtʃekɪŋ ɪn", p:"zánk iú. jáu méni bags ar iú chéking in",
  b:[["Thank you.","Gracias."],["How many bags","¿Cuántas maletas"],["are you checking in?","va a facturar?"]],
  n:"<b>How many</b> porque <i>bags</i> se cuenta. Con <i>luggage</i> sería <i>how much</i>."},
 {s:"B", ipa:"wʌn ðɪs ˈsuːtkeɪs ænd aɪ hæv ə ˈbækpæk wɪð miː", p:"uán. dis súutkeis. and ái jav a bákpak uid mi",
  b:[["One.","Una."],["This suitcase.","Esta maleta."],["And I have","Y llevo"],["a backpack","una mochila"],["with me.","conmigo."]]},
 {s:"A", ipa:"pʊt ðə ˈsuːtkeɪs ɑːn ðə skeɪlz pliːz aɪm əˈfreɪd ɪts tuː ˈhevi", p:"put da súutkeis an da skéils, plíis. áim afréid its tu jévi",
  b:[["Put the suitcase","Ponga la maleta"],["on the scales,","en la báscula,"],["please.","por favor."],["I'm afraid","Me temo que"],["it's too heavy.","pesa demasiado."]],
  n:"<b>Too heavy</b>, no <i>very heavy</i>: <i>too</i> significa que pasa del límite permitido."},
 {s:"B", ipa:"haʊ ˈhevi ɪz ɪt", p:"jáu jévi is it",
  b:[["How heavy","¿Cuánto"],["is it?","pesa?"]]},
 {s:"A", ipa:"ˈtwenti sɪks ˈkiːloʊz ðə ˈlɪmɪt ɪz ˈtwenti θriː", p:"tuénti-siks kílous. da límit is tuénti-zri",
  b:[["Twenty-six kilos.","Veintiséis kilos."],["The limit is","El límite es"],["twenty-three.","veintitrés."]]},
 {s:"B", ipa:"θriː ˈkiːloʊz wʌt duː aɪ niːd tuː duː", p:"zri kílous. uát du ái níid tu du",
  b:[["Three kilos.","Tres kilos."],["What do I need","¿Qué necesito"],["to do?","hacer?"]],
  n:"<b>Need to + verbo</b> cuando lo que hace falta es una acción."},
 {s:"A", ipa:"juː niːd tuː teɪk aʊt θriː ˈkiːloʊz ɔːr juː niːd tuː peɪ ˈfɔːrti ˈdɑːlərz", p:"iú níid tu téik áut zri kílous, or iú níid tu péi fórti dálars",
  b:[["You need to take out","Tiene que sacar"],["three kilos,","tres kilos,"],["or you need to pay","o tiene que pagar"],["forty dollars.","cuarenta dólares."]]},
 {s:"B", ipa:"aɪl teɪk aʊt θriː ˈkiːloʊz kæn aɪ pʊt ðem ɪn maɪ ˈbækpæk", p:"áil téik áut zri kílous. kan ái put dem in mái bákpak",
  b:[["I'll take out","Saco"],["three kilos.","tres kilos."],["Can I put them","¿Los puedo meter"],["in my backpack?","en mi mochila?"]],
  n:"<b>I'll</b>: decisión tomada en ese instante, por eso <i>will</i> y no <i>going to</i>."},
 {s:"A", ipa:"jes juː kæn bʌt nɑːt tuː ˈmeni θɪŋz ðə hænd ˈlʌɡɪdʒ ɪz ten ˈkiːloʊz", p:"iés, iú kan. bat nat tu méni zings: da jand lágich is ten kílous",
  b:[["Yes, you can.","Sí, puede."],["But not too many things:","Pero no demasiadas cosas:"],["the hand luggage","el equipaje de mano"],["is ten kilos.","son diez kilos."]],
  n:"<b>Too many things</b> porque se cuentan; <i>luggage</i>, en cambio, es incontable y pediría <i>too much</i>."},
 {s:"B", ipa:"ˈtwenti tuː pɔɪnt faɪv naʊ", p:"tuénti-tu póint fáiv náu",
  b:[["Twenty-two","Veintidós"],["point five","punto cinco"],["now.","ahora."]]},
 {s:"A", ipa:"ˈpɜːrfɪkt duː juː wɑːnt ə ˈwɪndoʊ siːt ɔːr ən aɪl siːt", p:"pérfect. du iú uánt a uíndou síit or an áil síit",
  b:[["Perfect.","Perfecto."],["Do you want","¿Quiere"],["a window seat","asiento de ventana"],["or an aisle seat?","o de pasillo?"]],
  n:"<b>Aisle</b> se pronuncia «áil»: la <i>s</i> no suena."},
 {s:"B", ipa:"ə ˈwɪndoʊ siːt pliːz aɪ wɑːnt tuː siː ðə siː", p:"a uíndou síit, plíis. ái uánt tu síi da síi",
  b:[["A window seat, please.","De ventana, por favor."],["I want to see","Quiero ver"],["the sea.","el mar."]]},
 {s:"A", ipa:"juː woʊnt siː ˈveri mʌtʃ æt naɪt bʌt əv ˈkɔːrs", p:"iú uóunt síi véri mach at náit, bat av kórs",
  b:[["You won't see","No va a ver"],["very much","gran cosa"],["at night,","de noche,"],["but of course.","pero claro que sí."]],
  n:"<b>Won't</b> es <i>will not</i>. Predicción, no plan."},
 {s:"B", ipa:"æt naɪt ðə flaɪt liːvz æt fɔːr ɪn ði ˌɑːftərˈnuːn", p:"at náit. da fláit líivs at for in di afternúun",
  b:[["At night?","¿De noche?"],["The flight leaves","El vuelo sale"],["at four","a las cuatro"],["in the afternoon.","de la tarde."]]},
 {s:"A", ipa:"aɪm əˈfreɪd ðer ɪz ə dɪˈleɪ ɪt wɪl liːv æt eɪt təˈnaɪt", p:"áim afréid der is a diléi. it uíl líiv at éit tunáit",
  b:[["I'm afraid","Me temo que"],["there is a delay.","hay un retraso."],["It will leave","Saldrá"],["at eight tonight.","a las ocho de esta noche."]],
  n:"<b>It will leave</b>: horario anunciado por quien tiene la información oficial."},
 {s:"B", ipa:"fɔːr ˈaʊərz ɪz ðer əˈnʌðər flaɪt", p:"for áuars. is der anáder fláit",
  b:[["Four hours!","¡Cuatro horas!"],["Is there","¿Hay"],["another flight?","otro vuelo?"]]},
 {s:"A", ipa:"ðer ˈɪznt aɪm əˈfreɪd bʌt ˈbɔːrdɪŋ stɑːrts æt ˈsevn fɪfˈtiːn", p:"der ísnt, áim afréid. bat bórding starts at sévn-fiftíin",
  b:[["There isn't,","No hay,"],["I'm afraid.","lo siento."],["But boarding starts","Pero el embarque empieza"],["at seven fifteen.","a las siete y cuarto."]],
  n:"Respuesta corta con el mismo auxiliar de la pregunta: <i>Is there…?</i> &rarr; <b>There isn't</b>."},
 {s:"B", ipa:"ænd wɪtʃ ɡeɪt ɪz ɪt", p:"and uích guéit is it",
  b:[["And which gate","¿Y qué puerta"],["is it?","es?"]]},
 {s:"A", ipa:"ɡeɪt ˈtwenti tuː ɪn ˈtɜːrmɪnl wʌn ðə skriːnz wɪl tel juː", p:"guéit tuénti-tu, in términl uán. da skríins uíl tel iú",
  b:[["Gate twenty-two,","Puerta veintidós,"],["in Terminal One.","en la Terminal Uno."],["The screens","Las pantallas"],["will tell you.","se lo dirán."]]},
 {s:"B", ipa:"oʊˈkeɪ duː aɪ niːd tuː duː ˈeniθɪŋ els", p:"oukéi. du ái níid tu du énizing els",
  b:[["OK.","Bien."],["Do I need to do","¿Necesito hacer"],["anything else?","algo más?"]]},
 {s:"A", ipa:"noʊ juː doʊnt hɪr ɪz jʊr ˈbɔːrdɪŋ pæs hæv ə ɡʊd trɪp", p:"nóu, iú dóunt. jíar is iór bórding pas. jav a gud trip",
  b:[["No, you don't.","No, no hace falta."],["Here is","Aquí tiene"],["your boarding pass.","su pase de abordar."],["Have a good trip.","Buen viaje."]],
  n:"<b>You don't need to</b> significa que no hace falta, no que esté prohibido."},
 {s:"B", ipa:"θæŋk juː ˈveri mʌtʃ hæv ə ɡʊd deɪ", p:"zánk iú véri mach. jav a gud déi",
  b:[["Thank you","Muchas"],["very much.","gracias."],["Have a good day.","Que tenga buen día."]]}
];

const LECTURA = {
  titulo: "Four hours at the airport",
  entradilla: "El día del viaje, contado después. El texto pone en marcha lo de la Fase 1: <i>will</i> para avisos y decisiones, <i>too much</i> frente a <i>too many</i>, las dos construcciones de <i>need</i>, el orden rígido de la frase inglesa y las respuestas cortas. Cada párrafo cambia de persona.",
  parrafos: [
    "My flight to Toronto left four hours late. I arrived at the airport at one, I checked in my suitcase at two, and then I waited and waited. The suitcase was too heavy at first — twenty-six kilos — so I took out three kilos and I put them in my backpack.",
    "The woman at the counter was very patient. She explained the problem twice, she gave me a window seat and she wrote the new time on my boarding pass. She didn't charge me anything. \"You won't see much at night,\" she said, and she was right.",
    "Pablo and Nico came to the airport with me. They didn't need a ticket, of course: they came for the escalators and the duty-free shop. They ate two hamburgers, they took thirty photos and they asked me for money three times.",
    "We waited near gate twenty-two. The screens said \"delayed\" for three hours and then they said \"boarding\". The plane took off at ten past eight and it landed in Toronto at six in the morning. Sarah was there, with a coffee in each hand."
  ],
  glosario: [
    ["left","left","salió","left"],
    ["arrived","əˈraɪvd","llegué","aráivd"],
    ["checked in","tʃekt ɪn","facturé","chekt in"],
    ["waited","ˈweɪtɪd","esperé, esperamos","uéitid"],
    ["took out","tʊk aʊt","saqué","tuk áut"],
    ["took off","tʊk ɔːf","despegó","tuk of"],
    ["took","tʊk","tomaron","tuk"],
    ["put","pʊt","metí","put"],
    ["explained","ɪkˈspleɪnd","explicó","ikspléind"],
    ["gave","ɡeɪv","me dio","guéiv"],
    ["wrote","roʊt","escribió","róut"],
    ["charge","tʃɑːrdʒ","cobrar","charch"],
    ["said","sed","dijo, decían","sed"],
    ["came","keɪm","vinieron","kéim"],
    ["didn't need","ˈdɪdnt niːd","no necesitaban","dídnt níid"],
    ["ate","eɪt","comieron","éit"],
    ["asked for","æskt fɔːr","me pidieron","askt for"],
    ["landed","ˈlændɪd","aterrizó","lándid"],
    ["won't see","woʊnt siː","no verás","uóunt síi"],
    ["too heavy","tuː ˈhevi","demasiado pesada","tu jévi"],
    ["flight","flaɪt","vuelo","fláit"],
    ["woman","ˈwʊmən","mujer","uúman"],
    ["airport","ˈerpɔːrt","aeropuerto","érport"],
    ["suitcase","ˈsuːtkeɪs","maleta","súutkeis"],
    ["backpack","ˈbækpæk","mochila","bákpak"],
    ["kilos","ˈkiːloʊz","kilos","kílous"],
    ["counter","ˈkaʊntər","mostrador","káuntar"],
    ["window seat","ˈwɪndoʊ siːt","asiento de ventana","uíndou síit"],
    ["boarding pass","ˈbɔːrdɪŋ pæs","pase de abordar","bórding pas"],
    ["boarding","ˈbɔːrdɪŋ","embarque","bórding"],
    ["gate","ɡeɪt","puerta de embarque","guéit"],
    ["screens","skriːnz","pantallas","skríins"],
    ["delayed","dɪˈleɪd","retrasado","diléid"],
    ["late","leɪt","tarde","léit"],
    ["plane","pleɪn","avión","pléin"],
    ["ticket","ˈtɪkɪt","boleto","tíket"],
    ["escalators","ˈeskəleɪtərz","escaleras mecánicas","éskaleitars"],
    ["duty-free shop","ˌduːti ˈfriː ʃɑːp","tienda libre de impuestos","diúti-fríi shap"],
    ["hamburgers","ˈhæmbɜːrɡərz","hamburguesas","jámberguers"],
    ["photos","ˈfoʊtoʊz","fotos","fóutous"],
    ["money","ˈmʌni","dinero","máni"],
    ["problem","ˈprɑːbləm","problema","práblem"],
    ["patient","ˈpeɪʃnt","paciente","péishent"],
    ["right","raɪt","tenía razón","ráit"],
    ["twice","twaɪs","dos veces","tuáis"],
    ["three times","θriː taɪmz","tres veces","zri táims"],
    ["at first","æt fɜːrst","al principio","at ferst"],
    ["ten past eight","ten pæst eɪt","las ocho y diez","ten past éit"],
    ["each hand","iːtʃ hænd","cada mano","íich jand"],
    ["coffee","ˈkɑːfi","café","káfi"],
    ["near","nɪr","cerca de","níar"],
    ["hours","ˈaʊərz","horas","áuars"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["of course","əv ˈkɔːrs","por supuesto","av kórs"]
  ],
  preguntas: [
    { q:"Why was there a problem with the suitcase?",
      ops:["It was too heavy","It was too big","It was open"], ok:0,
      pista:"Primer párrafo: el texto da hasta el número de kilos." },
    { q:"Why did Pablo and Nico go to the airport?",
      ops:["To travel to Toronto","For the escalators and the duty-free shop","To work there"], ok:1,
      pista:"Tercer párrafo: el texto aclara primero que no necesitaban boleto." },
    { q:"What time did the plane take off?",
      ops:["At four in the afternoon","At six in the morning","At ten past eight"], ok:2,
      pista:"Cuarto párrafo. Las otras dos horas también aparecen en el texto, pero son otra cosa." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-21"] = {
  meta: {
    id: "a1-21", nivel: "A1", numero: 21,
    titulo: "En el aeropuerto",
    descriptor: "Puedo facturar el equipaje, entender los avisos de horario y puerta, resolver un problema de peso y preguntar lo que necesito saber antes de volar.",
    escena: "Laura, agente de facturación & David · mostrador del aeropuerto, vuelo a Toronto",
    personajeIA: "Laura, la agente de facturación", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
