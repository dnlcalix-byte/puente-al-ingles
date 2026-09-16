/* ============================================================
   LECCIÓN A2-05 · Experiencias: present perfect
   Reparto: Emma, la estudiante irlandesa, haciendo balance de su
   año en un café del centro. La lectura reúne los seis puntos de la
   Fase 1 —have/has + participio, la lista de participios, el
   contraste con el pasado simple, ever/never, been frente a gone y
   los marcadores que obligan al pasado— en ella, yo, él y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Hablar de experiencias", items:[
    ["ever","ˈevər","alguna vez","évar"],["never","ˈnevər","nunca","névar"],
    ["before","bɪˈfɔːr","antes","bifór"],["once","wʌns","una vez","uáns"],
    ["twice","twaɪs","dos veces","tuáis"],["a few times","ə fjuː taɪmz","unas cuantas veces","a fiú táims"],
    ["in my life","ɪn maɪ laɪf","en mi vida","in mái láif"],["for the first time","fɔːr ðə fɜːrst taɪm","por primera vez","for da ferst táim"],
    ["at some point","æt sʌm pɔɪnt","en algún momento","at sam póint"],["so far","soʊ fɑːr","hasta ahora","sóu far"]
  ]},
  {g:"Los participios", items:[
    ["been","bɪn","estado, ido","bin"],["gone","ɡɔːn","ido (y sigue allá)","gon"],
    ["done","dʌn","hecho","dan"],["seen","siːn","visto","síin"],
    ["eaten","ˈiːtn","comido","íitn"],["taken","ˈteɪkən","tomado","téiken"],
    ["written","ˈrɪtn","escrito","rítn"],["spoken","ˈspoʊkən","hablado","spóuken"],
    ["given","ˈɡɪvn","dado","guívn"],["known","noʊn","conocido, sabido","nóun"]
  ]},
  {g:"Lugares y planes", items:[
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],["coast","koʊst","costa","kóust"],
    ["beach","biːtʃ","playa","bíich"],["ruins","ˈruːɪnz","ruinas","rúuins"],
    ["stairs","sterz","escaleras","stérs"],["flat","flæt","apartamento","flat"],
    ["taxi driver","ˈtæksi ˈdraɪvər","taxista","táksi dráivar"],["passport","ˈpæspɔːrt","pasaporte","pásport"],
    ["trip","trɪp","viaje","trip"],["baleadas","ˌbɑːleˈɑːdəs","baleadas","baleádas"]
  ]},
  {g:"Reaccionar", items:[
    ["No way!","noʊ weɪ","¡no puede ser!","nóu uéi"],["What happened?","wʌt ˈhæpənd","¿qué pasó?","uát jápend"],
    ["Not at all","nɑːt æt ɔːl","para nada","nat at ol"],["Completely","kəmˈpliːtli","completamente","kompliítli"],
    ["Wise","waɪz","sabia decisión","uáis"],["like that","laɪk ðæt","así","láik dat"],
    ["I tried","aɪ traɪd","lo intenté","ái tráid"],["That's enough","ðæts ɪˈnʌf","con eso basta","dats ináf"],
    ["as I expected","æz aɪ ɪkˈspektɪd","como esperaba","as ái ikspéktid"],["the good half","ðə ɡʊd hæf","la mitad buena","da gud jaf"]
  ]}
];

const PRONKEY = [
  ["'ve","<b>have</b> contraído: apenas una <i>v</i> pegada al pronombre.","I've seen &rarr; áiv síin"],
  ["'s","<b>has</b> contraído suena como una <i>s</i>; no confundir con <i>is</i>.","he's been &rarr; jíis bin"],
  ["-en","La terminación de muchos participios se come la vocal.","eaten &rarr; íitn"],
  ["v","Labio de abajo contra los dientes de arriba.","never &rarr; névar"],
  ["z","Lengua entre los dientes, sin voz.","think &rarr; zink"],
  ["ch","Como en «coche».","beach &rarr; bíich"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","wise &rarr; uáis"],
  ["k muda","La <i>k</i> de <i>known</i> no se pronuncia.","known &rarr; nóun"],
  ["r final","Apenas se toca; nunca vibra.","driver &rarr; dráivar"]
];

const VERBS = [
  ["to travel","reg","travel · travels","travelled","will travel","viajar"],
  ["to expect","reg","expect · expects","expected","will expect","esperar, prever"],
  ["to climb","reg","climb · climbs","climbed","will climb","subir, escalar"],
  ["to accept","reg","accept · accepts","accepted","will accept","aceptar"],
  ["to happen","reg","happen · happens","happened","will happen","pasar"],
  ["to learn","reg","learn · learns","learned","will learn","aprender"],
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to eat","irr","eat · eats","ate","will eat","comer"],
  ["to take","irr","take · takes","took","will take","llevar, tomar"],
  ["to write","irr","write · writes","wrote","will write","escribir"],
  ["to meet","irr","meet · meets","met","will meet","conocer"],
  ["to become","irr","become · becomes","became","will become","volverse"]
];

const GRAMMAR = [
  {t:"El present perfect", s:"have / has + participio",
   p:"Es un tiempo que el español casi no tiene en el mismo sitio. No sitúa nada en el pasado: dice que algo <b>forma parte de tu experiencia</b> o que sigue teniendo efecto ahora.",
   table:{head:["Persona","Forma","Ejemplo"], rows:[
     ["I / you / we / they","have + participio","I have travelled a lot."],
     ["he / she / it","has + participio","She has learned Spanish."],
     ["Negativo","haven't / hasn't","He hasn't been to the beach."],
     ["Pregunta","Have / Has + sujeto + participio","Have you eaten there?"]
   ]},
   aviso:["El participio no es el pasado","<span class='wrong'>I have went</span> &nbsp;&rarr;&nbsp; <span class='right'>I have gone</span>. Los verbos irregulares tienen <b>tres</b> formas: <i>go, went, gone</i>. La tercera es la que va con <i>have</i>."]},

  {t:"Las tres formas del verbo", s:"la tercera columna que faltaba",
   p:"Hasta ahora usabas dos: infinitivo y pasado. El present perfect obliga a aprender la tercera. En los regulares coincide con el pasado (<i>worked / worked</i>); en los irregulares, a veces sí y a veces no.",
   table:{head:["Infinitivo","Pasado","Participio"], rows:[
     ["be","was / were","been"],
     ["go","went","gone"],
     ["do","did","done"],
     ["see","saw","seen"],
     ["eat","ate","eaten"],
     ["take","took","taken"],
     ["write","wrote","written"],
     ["speak","spoke","spoken"],
     ["buy","bought","bought"],
     ["find","found","found"]
   ]},
   aviso:["Muchos irregulares no cambian dos veces","<i>bought, found, kept, sent, told, paid, lost</i> tienen la misma forma en pasado y participio. Los que de verdad hay que vigilar son los que acaban en <b>-en</b> o <b>-ne</b>."]},

  {t:"Present perfect o pasado simple", s:"la pregunta es cuándo, no qué",
   p:"Ésta es la decisión de toda la lección. Si el momento <b>está dicho o se sobreentiende</b>, va pasado simple. Si sólo cuenta <b>que pasó alguna vez</b>, va present perfect.",
   table:{head:["Present perfect","Pasado simple"], rows:[
     ["I have been to Roatán.","I went to Roatán in August."],
     ["She has lost her passport.","She lost it in September."],
     ["Have you eaten there?","Did you eat there yesterday?"],
     ["experiencia, sin fecha","hecho con fecha"]
   ]},
   aviso:["En cuanto aparece la fecha, cambia el tiempo","<span class='wrong'>I have gone to Roatán last year.</span> &nbsp;&rarr;&nbsp; <span class='right'>I went to Roatán last year.</span> El present perfect y una fecha del pasado no caben en la misma frase."]},

  {t:"EVER y NEVER", s:"las dos palabras de la experiencia",
   p:"<b>Ever</b> vive en las preguntas y significa «alguna vez en tu vida». <b>Never</b> es su respuesta negativa y ya lleva la negación dentro. Los dos van <b>entre el auxiliar y el participio</b>.",
   chips:[["Have you ever eaten baleadas?","¿Has comido baleadas alguna vez?"],["I have never met anybody like that.","Nunca he conocido a nadie así."],["Have you ever been to Ireland?","¿Has estado en Irlanda alguna vez?"],["She has never seen snow.","Nunca ha visto nieve."]],
   aviso:["<i>Never</i> no admite compañía","<span class='wrong'>I haven't never been.</span> &nbsp;&rarr;&nbsp; <span class='right'>I have never been.</span> Con <i>never</i> el verbo va en afirmativo, igual que en presente simple."]},

  {t:"BEEN o GONE", s:"la diferencia está en dónde estás ahora",
   p:"El mismo verbo <i>go</i> tiene dos participios en la práctica, y eligen cosas distintas.",
   table:{head:["Forma","Significa","Ejemplo"], rows:[
     ["has been to","fue y ya volvió","She has been to Copán twice."],
     ["has gone to","fue y todavía está allá","Tom has gone to the beach."],
     ["have been in","lleva aquí un tiempo","I have been in this city all week."],
     ["<span class='wrong'>has been at Copán</span>","la preposición es <i>to</i>","—"]
   ]},
   aviso:["Si la persona está contigo, es <i>been</i>","No puedes decirle a alguien que está delante que <i>has gone</i>: eso significaría que no ha vuelto."]},

  {t:"Las palabras que obligan al pasado simple", s:"yesterday, ago, last, in 2024, when",
   p:"Hay marcadores que cierran el tiempo. En cuanto aparecen, la frase <b>no puede</b> ir en present perfect.",
   table:{head:["Obligan a pasado simple","Piden present perfect"], rows:[
     ["yesterday, last week, in September","ever, never, before"],
     ["two days ago, in 2024","twice, a few times, so far"],
     ["when I was a child","in my life, at some point"],
     ["What time did it happen?","Have you ever…?"]
   ]},
   aviso:["Un truco que funciona casi siempre","Si puedes contestar <i>when?</i> con una fecha concreta, usa pasado simple. Si la respuesta natural es «alguna vez», usa present perfect."]}
];

/* Emma (A) hace balance de su año, en un café del centro, con David (B) */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd sɪt daʊn aɪv ˈɔːrdərd juː ə ˈkɑːfi ɔːlˈredi", p:"déivid, sit dáun. áiv órdard iú a káfi olrédi",
  b:[["David! Sit down.","¡David! Siéntate."],["I've ordered you a coffee","Ya te pedí un café"],["already.","—"]],
  n:"<b>I've</b> es <i>I have</i>. En el habla apenas se oye una <i>v</i>."},
 {s:"B", ipa:"θæŋk juː soʊ hæz ðɪs jɪr bɪn wʌt juː ɪkˈspektɪd", p:"zánk iú. sóu, jas dis íer bin uát iú ikspéktid",
  b:[["Thank you.","Gracias."],["So — has this year been","¿Y qué? ¿Ha sido este año"],["what you expected?","lo que esperabas?"]],
  n:"<b>Has … been</b>: el participio de <i>be</i> es <i>been</i>, no <span class='wrong'>was</span>."},
 {s:"A", ipa:"nɑːt æt ɔːl ɪts bɪn mʌtʃ ˈbetər aɪv lɜːrnd mɔːr ˈspænɪʃ ðæn ˈɪŋɡlɪʃ hɪr", p:"nat at ol. its bin mach bétar. áiv lernd mor spánish dan ínglish jíar",
  b:[["Not at all.","Para nada."],["It's been much better.","Ha sido mucho mejor."],["I've learned more Spanish","He aprendido más español"],["than English here.","que inglés aquí."]]},
 {s:"B", ipa:"jʊr ˈspænɪʃ ɪz ˈveri ɡʊd naʊ hæv juː ˈtrævld mʌtʃ", p:"iór spánish is véri gud náu. jav iú trávld mach",
  b:[["Your Spanish is very good now.","Tu español está muy bueno ya."],["Have you travelled much?","¿Has viajado mucho?"]]},
 {s:"A", ipa:"ə lɑːt aɪv bɪn tuː koʊˈpɑːn tuː roʊəˈtɑːn ænd tuː ðə nɔːrθ koʊst", p:"a lat. áiv bin tu Kopán, tu Roatán and tu da norz kóust",
  b:[["A lot.","Mucho."],["I've been to Copán,","He estado en Copán,"],["to Roatán","en Roatán"],["and to the north coast.","y en la costa norte."]],
  n:"<b>Been to</b>, siempre con <i>to</i>. Y <i>been</i> porque ya volvió."},
 {s:"B", ipa:"hæv juː ˈevər ˈiːtn ˌbɑːleˈɑːdəs æt θriː ɪn ðə ˈmɔːrnɪŋ", p:"jav iú évar íitn baleádas at zri in da mórning",
  b:[["Have you ever eaten","¿Has comido alguna vez"],["baleadas","baleadas"],["at three in the morning?","a las tres de la mañana?"]],
  n:"<b>Ever</b> va en medio: entre el auxiliar y el participio."},
 {s:"A", ipa:"twaɪs ˈkevɪn tʊk ʌs ðə fɜːrst taɪm aɪv ˈnevər ˈiːtn ˈeniθɪŋ ˈbetər", p:"tuáis. Kévin tuk as da ferst táim. áiv névar íitn énizing bétar",
  b:[["Twice!","¡Dos veces!"],["Kevin took us","Kevin nos llevó"],["the first time.","la primera vez."],["I've never eaten","Nunca he comido"],["anything better.","nada mejor."]],
  n:"Contraste perfecto: <b>took</b> en pasado porque hay un momento concreto; <b>I've never eaten</b> en perfecto porque habla de toda su vida."},
 {s:"B", ipa:"ðæts ðə kəˈrekt ˈænsər ænd wʌt duː juː wɑːnt tuː duː bɪˈfɔːr juː ɡoʊ hoʊm", p:"dats da korékt ánsar. and uát du iú uánt tu du bifór iú góu jóum",
  b:[["That's the correct answer.","Esa es la respuesta correcta."],["And what do you want to do","¿Y qué quieres hacer"],["before you go home?","antes de volver a casa?"]]},
 {s:"A", ipa:"aɪ wɑːnt tuː klaɪm ə vɑːlˈkeɪnoʊ aɪv siːn ˈfoʊtoʊz aɪv ˈtɔːkt əˈbaʊt ɪt bʌt aɪ ˈhævnt dʌn ɪt", p:"ái uánt tu kláim a volkéinou. áiv síin fóutous, áiv tokt abáut it, bat ái jávnt dan it",
  b:[["I want to climb a volcano.","Quiero subir un volcán."],["I've seen photos,","He visto fotos,"],["I've talked about it,","he hablado de ello,"],["but I haven't done it.","pero no lo he hecho."]]},
 {s:"B", ipa:"wi kæn duː ðæt ɪn ˈdʒænjueri hæz tɑːm klaɪmd ˈeniθɪŋ", p:"ui kan du dat in chániueri. jas Tom kláimd énizing",
  b:[["We can do that in January.","Podemos hacerlo en enero."],["Has Tom climbed anything?","¿Tom ha subido algo?"]]},
 {s:"A", ipa:"tɑːm hæz klaɪmd ðə sterz tuː aʊər flæt ænd hi sez ðæts ɪˈnʌf", p:"Tom jas kláimd da stérs tu áuar flat, and ji ses dats ináf",
  b:[["Tom has climbed the stairs","Tom ha subido las escaleras"],["to our flat","hasta nuestro apartamento"],["and he says","y dice"],["that's enough.","que con eso basta."]]},
 {s:"B", ipa:"ðæt saʊndz laɪk tɑːm hæv juː hæd ˈeni ˈprɑːbləmz ðɪs jɪr", p:"dat sáunds láik Tom. jav iú jad éni práblems dis íer",
  b:[["That sounds like Tom.","Eso suena muy propio de Tom."],["Have you had any problems","¿Has tenido algún problema"],["this year?","este año?"]]},
 {s:"A", ipa:"wʌn aɪ lɔːst maɪ ˈpæspɔːrt ɪn sepˈtembər", p:"uán. ái lost mái pásport in septémbar",
  b:[["One.","Uno."],["I lost my passport","Perdí el pasaporte"],["in September.","en septiembre."]],
  n:"Aparece la fecha y el tiempo cambia: <b>I lost</b>, no <span class='wrong'>I have lost … in September</span>."},
 {s:"B", ipa:"juː lɔːst jʊr ˈpæspɔːrt wʌt ˈhæpənd", p:"iú lost iór pásport. uát jápend",
  b:[["You lost your passport!","¡Perdiste el pasaporte!"],["What happened?","¿Qué pasó?"]]},
 {s:"A", ipa:"aɪ left ɪt ɪn ə ˈtæksi ðə ˈdraɪvər brɔːt ɪt tuː ðə skuːl tuː deɪz ˈleɪtər", p:"ái left it in a táksi. da dráivar bróot it tu da skúul tu déis léitar",
  b:[["I left it in a taxi.","Lo dejé en un taxi."],["The driver brought it","El taxista lo llevó"],["to the school","a la escuela"],["two days later.","dos días después."]]},
 {s:"B", ipa:"noʊ weɪ dɪd juː peɪ hɪm ˈsʌmθɪŋ", p:"nóu uéi. did iú péi jim sámzing",
  b:[["No way.","No puede ser."],["Did you pay him","¿Le pagaste"],["something?","algo?"]]},
 {s:"A", ipa:"aɪ traɪd hi ˈdɪdnt əkˈsept ˈeniθɪŋ aɪv ˈnevər met ˈenibɑːdi laɪk ðæt ɪn maɪ laɪf", p:"ái tráid. ji dídnt aksépt énizing. áiv névar met énibadi láik dat in mái láif",
  b:[["I tried.","Lo intenté."],["He didn't accept anything.","No aceptó nada."],["I've never met anybody","Nunca he conocido a nadie"],["like that in my life.","así en mi vida."]],
  n:"<b>In my life</b> es la marca del present perfect: no cierra el tiempo, lo abre entero."},
 {s:"B", ipa:"θɪŋz laɪk ðæt ˈhæpən hɪr hæv juː toʊld jʊr ˈperənts", p:"zings láik dat jápen jíar. jav iú tóuld iór pérents",
  b:[["Things like that happen here.","Aquí pasan esas cosas."],["Have you told your parents?","¿Se lo has contado a tus papás?"]]},
 {s:"A", ipa:"aɪv toʊld ðem ðə ɡʊd hæf ðeɪ doʊnt noʊ əˈbaʊt ðə ˈpæspɔːrt", p:"áiv tóuld dem da gud jaf. déi dóunt nóu abáut da pásport",
  b:[["I've told them","Les he contado"],["the good half.","la mitad buena."],["They don't know","No saben"],["about the passport.","lo del pasaporte."]]},
 {s:"B", ipa:"waɪz duː juː θɪŋk juːv tʃeɪndʒd ðɪs jɪr", p:"uáis. du iú zink iúv chéinchd dis íer",
  b:[["Wise.","Sabia decisión."],["Do you think","¿Crees que"],["you've changed this year?","has cambiado este año?"]]},
 {s:"A", ipa:"kəmˈpliːtli aɪv bɪˈkʌm ˈsloʊər ænd mʌtʃ ˈlaʊdər", p:"kompliítli. áiv bikám slóuar and mach láudar",
  b:[["Completely.","Completamente."],["I've become","Me he vuelto"],["slower","más lenta"],["and much louder.","y mucho más ruidosa."]]},
 {s:"B", ipa:"ˈsloʊər ænd ˈlaʊdər ðæts hɑːnˈdʊrəs", p:"slóuar and láudar. dats Jandúras",
  b:[["Slower and louder.","Más lenta y más ruidosa."],["That's Honduras.","Eso es Honduras."]]},
 {s:"A", ipa:"ɪt ɪz hæv juː ˈevər θɔːt əˈbaʊt ˈvɪzɪtɪŋ ˈaɪərlənd", p:"it is. jav iú évar zot abáut vísiting Áiarland",
  b:[["It is.","Lo es."],["Have you ever thought","¿Has pensado alguna vez"],["about visiting Ireland?","en visitar Irlanda?"]],
  n:"Tras una preposición, el verbo va en <i>-ing</i>: <b>about visiting</b>."},
 {s:"B", ipa:"ˈevri deɪ bʌt fɜːrst ðə vɑːlˈkeɪnoʊ", p:"évri déi. bat ferst, da volkéinou",
  b:[["Every day.","Todos los días."],["But first,","Pero primero,"],["the volcano.","el volcán."]]}
];

const LECTURA = {
  titulo: "Emma's year",
  entradilla: "Balance de doce meses. El texto pone a trabajar lo de la Fase 1: <i>have / has</i> + participio, la tercera forma de los verbos, el contraste con el pasado simple cuando aparece una fecha, <i>ever</i> y <i>never</i>, y <i>been</i> frente a <i>gone</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Emma arrived in September, and she says this year has been much better than she expected. She has learned more Spanish than English, and that was not the plan. She has travelled a lot: she has been to Copán, to Roatán and to the north coast.",
    "I have never eaten baleadas at three in the morning, but Emma has, twice. Kevin took them the first time, after a party in August. We have all done that at some point in our lives; she just did it in her first month here.",
    "Tom has climbed the stairs to their flat and he says that is enough. He hasn't been to the volcano, he hasn't seen the coast, and he doesn't want to go anywhere. He has read eleven books this year and he is perfectly happy.",
    "Emma lost her passport in September. She left it in a taxi, and the driver brought it to the school two days later. She tried to pay him and he didn't accept anything. \"I have never met anybody like that in my life,\" she says. She hasn't told her parents about it."
  ],
  glosario: [
    ["has been","hæz bɪn","ha sido, ha estado","jas bin"],
    ["has learned","hæz lɜːrnd","ha aprendido","jas lernd"],
    ["has travelled","hæz ˈtrævld","ha viajado","jas trávld"],
    ["has climbed","hæz klaɪmd","ha subido","jas kláimd"],
    ["has read","hæz red","ha leído","jas red"],
    ["hasn't been","ˈhæznt bɪn","no ha estado","jásnt bin"],
    ["hasn't seen","ˈhæznt siːn","no ha visto","jásnt síin"],
    ["hasn't told","ˈhæznt toʊld","no les ha contado","jásnt tóuld"],
    ["have never eaten","hæv ˈnevər ˈiːtn","nunca he comido","jav névar íitn"],
    ["have never met","hæv ˈnevər met","nunca he conocido","jav névar met"],
    ["have done","hæv dʌn","hemos hecho","jav dan"],
    ["arrived","əˈraɪvd","llegó","aráivd"],
    ["expected","ɪkˈspektɪd","esperaba","ikspéktid"],
    ["took","tʊk","los llevó","tuk"],
    ["did","dɪd","lo hizo","did"],
    ["lost","lɔːst","perdió","lost"],
    ["left","left","lo dejó","left"],
    ["brought","brɔːt","lo llevó","bróot"],
    ["tried","traɪd","intentó","tráid"],
    ["didn't accept","ˈdɪdnt əkˈsept","no aceptó","dídnt aksépt"],
    ["says","sez","dice","ses"],
    ["wants","wɑːnts","quiere","uánts"],
    ["baleadas","ˌbɑːleˈɑːdəs","baleadas","baleádas"],
    ["north coast","nɔːrθ koʊst","costa norte","norz kóust"],
    ["coast","koʊst","costa","kóust"],
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],
    ["stairs","sterz","escaleras","stérs"],
    ["flat","flæt","apartamento","flat"],
    ["taxi","ˈtæksi","taxi","táksi"],
    ["driver","ˈdraɪvər","conductor","dráivar"],
    ["passport","ˈpæspɔːrt","pasaporte","pásport"],
    ["Copán","koʊˈpɑːn","Copán (ruinas mayas)","kopán"],
    ["pay","peɪ","pagarle","péi"],
    ["school","skuːl","escuela","skúul"],
    ["parents","ˈperənts","padres","pérents"],
    ["books","bʊks","libros","buks"],
    ["eleven","ɪˈlevn","once","ilévn"],
    ["party","ˈpɑːrti","fiesta","párti"],
    ["plan","plæn","plan","plan"],
    ["twice","twaɪs","dos veces","tuáis"],
    ["never","ˈnevər","nunca","névar"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["anybody","ˈenibɑːdi","nadie","énibadi"],
    ["anywhere","ˈeniwer","a ningún sitio","éniuer"],
    ["at some point","æt sʌm pɔɪnt","en algún momento","at sam póint"],
    ["in our lives","ɪn ˈaʊər laɪvz","en la vida","in áuar láivs"],
    ["in my life","ɪn maɪ laɪf","en mi vida","in mái láif"],
    ["the first time","ðə fɜːrst taɪm","la primera vez","da ferst táim"],
    ["first month","fɜːrst mʌnθ","primer mes","ferst manz"],
    ["two days later","tuː deɪz ˈleɪtər","dos días después","tu déis léitar"],
    ["like that","laɪk ðæt","así","láik dat"],
    ["enough","ɪˈnʌf","suficiente","ináf"],
    ["perfectly","ˈpɜːrfɪktli","perfectamente","pérfictli"],
    ["happy","ˈhæpi","feliz","jápi"],
    ["just","dʒʌst","simplemente","chast"],
    ["September","sepˈtembər","septiembre","septémbar"],
    ["August","ˈɔːɡəst","agosto","ógast"]
  ],
  preguntas: [
    { q:"What has Emma learned more of this year?",
      ops:["English","Spanish","Portuguese"], ok:1,
      pista:"Primer párrafo: ella misma dice que no era el plan." },
    { q:"What does Tom say about the stairs?",
      ops:["That climbing them is enough","That they are broken","That he climbs them every day"], ok:0,
      pista:"Tercer párrafo, primera frase: es su idea de hacer montañismo." },
    { q:"What happened with Emma's passport?",
      ops:["She never found it","She bought a new one","A taxi driver brought it to the school"], ok:2,
      pista:"Cuarto párrafo: y no aceptó nada a cambio." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-05"] = {
  meta: {
    id: "a2-05", nivel: "A2", numero: 5,
    titulo: "Experiencias: present perfect",
    descriptor: "Puedo hablar de lo que he hecho alguna vez en mi vida, preguntar por la experiencia de otra persona y distinguirlo de lo que ocurrió en una fecha concreta.",
    escena: "Emma & David · un café del centro, haciendo balance del año",
    personajeIA: "Emma", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
