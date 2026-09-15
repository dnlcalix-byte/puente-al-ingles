/* ============================================================
   LECCIÓN A1-20 · Tecnología cotidiana
   Reparto: Kevin, el compañero australiano, arreglando el teléfono
   de David. La lectura reúne los seis puntos de la Fase 1 —phrasal
   verbs separables, preposiciones fijas, sustantivos compuestos,
   infinitivo de finalidad, for + -ing e incontables— en yo, él,
   ellos, ella y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Los aparatos", items:[
    ["phone","foʊn","teléfono","fóun"],["laptop","ˈlæptɑːp","computadora portátil","láptap"],
    ["tablet","ˈtæblət","tableta","táblet"],["screen","skriːn","pantalla","skríin"],
    ["keyboard","ˈkiːbɔːrd","teclado","kíibord"],["charger","ˈtʃɑːrdʒər","cargador","chárchar"],
    ["cable","ˈkeɪbl","cable","kéibl"],["headphones","ˈhedfoʊnz","audífonos","jédfouns"],
    ["camera","ˈkæmrə","cámara","kámra"],["battery","ˈbætəri","batería","bátari"]
  ]},
  {g:"Lo que se hace", items:[
    ["turn on","tɜːrn ɑːn","encender","tern an"],["turn off","tɜːrn ɔːf","apagar","tern of"],
    ["plug in","plʌɡ ɪn","enchufar","plag in"],["log in","lɔːɡ ɪn","iniciar sesión","log in"],
    ["download","ˌdaʊnˈloʊd","descargar","daunlóud"],["upload","ˌʌpˈloʊd","subir","aplóud"],
    ["send","send","enviar","send"],["delete","dɪˈliːt","borrar","dilíit"],
    ["save","seɪv","guardar","séiv"],["share","ʃer","compartir","shér"]
  ]},
  {g:"Internet y aplicaciones", items:[
    ["app","æp","aplicación","ap"],["password","ˈpæswɜːrd","contraseña","pásuerd"],
    ["message","ˈmesɪdʒ","mensaje","mésich"],["email","ˈiːmeɪl","correo","íimeil"],
    ["file","faɪl","archivo","fáil"],["link","lɪŋk","enlace","link"],
    ["network","ˈnetwɜːrk","red","nétuerk"],["wifi","ˈwaɪfaɪ","wifi","uáifai"],
    ["account","əˈkaʊnt","cuenta","akáunt"],["update","ˈʌpdeɪt","actualización","ápdeit"]
  ]},
  {g:"Cuando falla", items:[
    ["It doesn't work","ɪt ˈdʌznt wɜːrk","no funciona","it dásnt uérk"],["slow","sloʊ","lento","slóu"],
    ["broken","ˈbroʊkən","roto","bróuken"],["frozen","ˈfroʊzn","congelado, trabado","fróusn"],
    ["signal","ˈsɪɡnəl","señal","sígnal"],["restart","ˌriːˈstɑːrt","reiniciar","ristárt"],
    ["Try again","traɪ əˈɡen","inténtalo otra vez","trái aguén"],["out of battery","aʊt əv ˈbætəri","sin batería","áut av bátari"],
    ["information","ˌɪnfərˈmeɪʃn","información","informéishon"],["advice","ədˈvaɪs","consejo","adváis"]
  ]}
];

const PRONKEY = [
  ["ch","Como en «coche». Es el sonido de la <i>g</i> de <i>charger</i>.","charger &rarr; chárchar"],
  ["sh","Como pedir silencio.","share &rarr; shér"],
  ["j","Aire por la garganta, sin raspar.","headphones &rarr; jédfouns"],
  ["v","Labio de abajo contra los dientes de arriba.","save &rarr; séiv"],
  ["z","Lengua entre los dientes, sin voz.","password &rarr; pásuerd"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","wifi &rarr; uáifai"],
  ["íi","Vocal larga y tensa; no es la <i>i</i> corta.","screen &rarr; skríin"],
  ["r final","Apenas se toca; nunca vibra.","computer &rarr; kampiúutar"],
  ["a floja","La vocal débil del final de palabra, casi muda.","camera &rarr; kámra"]
];

const VERBS = [
  ["to download","reg","download · downloads","downloaded","will download","descargar"],
  ["to upload","reg","upload · uploads","uploaded","will upload","subir"],
  ["to save","reg","save · saves","saved","will save","guardar"],
  ["to delete","reg","delete · deletes","deleted","will delete","borrar"],
  ["to share","reg","share · shares","shared","will share","compartir"],
  ["to connect","reg","connect · connects","connected","will connect","conectar"],
  ["to charge","reg","charge · charges","charged","will charge","cargar; cobrar"],
  ["to restart","reg","restart · restarts","restarted","will restart","reiniciar"],
  ["to send","irr","send · sends","sent","will send","enviar"],
  ["to write","irr","write · writes","wrote","will write","escribir"],
  ["to read","irr","read · reads","read","will read","leer"],
  ["to lose","irr","lose · loses","lost","will lose","perder"]
];

const GRAMMAR = [
  {t:"Los phrasal verbs separables", s:"turn the phone on / turn it on",
   p:"Un verbo más una partícula forman un significado nuevo: <i>turn</i> es girar, pero <b>turn on</b> es encender. Muchos de ellos se pueden <b>partir</b>, y el objeto se mete en medio.",
   table:{head:["Forma","Correcto","Español"], rows:[
     ["Sustantivo detrás","Turn on the phone.","Enciende el teléfono."],
     ["Sustantivo en medio","Turn the phone on.","Enciende el teléfono."],
     ["Pronombre en medio","Turn it on.","Enciéndelo."],
     ["Pronombre detrás","<span class='wrong'>Turn on it.</span>","—"]
   ]},
   aviso:["Con pronombre, el verbo se parte siempre","Con un sustantivo tienes las dos opciones, pero con <i>it</i>, <i>them</i>, <i>him</i> sólo una: <span class='right'>turn it off</span>, nunca <span class='wrong'>turn off it</span>."]},

  {t:"Los verbos con preposición fija", s:"log in to, click on, listen to",
   p:"Otros verbos llevan siempre la misma preposición y ahí no hay nada que decidir: se memorizan juntos, como una sola palabra. La preposición casi nunca coincide con la del español.",
   chips:[["log in to the account","entrar en la cuenta"],["click on the link","hacer clic en el enlace"],["connect to the wifi","conectarse al wifi"],["search for a video","buscar un video"],["listen to music","escuchar música"],["look for the charger","buscar el cargador"]],
   aviso:["<i>Search</i> y <i>look</i> piden <i>for</i>","En español «buscar algo» va sin preposición; en inglés lleva <b>for</b> obligatoriamente: <i>I'm looking <b>for</b> my phone</i>."]},

  {t:"Los sustantivos compuestos", s:"phone number, charger cable",
   p:"El inglés pega dos sustantivos y el <b>primero funciona como adjetivo</b>: describe al segundo. La regla de oro es que el importante es el último, y que el primero <b>nunca lleva plural</b>.",
   table:{head:["Inglés","Español","Qué es en realidad"], rows:[
     ["a phone number","un número de teléfono","un número"],
     ["a charger cable","un cable de cargador","un cable"],
     ["a laptop screen","la pantalla de la portátil","una pantalla"],
     ["a password manager","un gestor de contraseñas","un gestor"]
   ]},
   aviso:["El primer sustantivo se queda en singular","<span class='wrong'>a cars park</span> &nbsp;&rarr;&nbsp; <span class='right'>a car park</span>. Aunque haya cien coches, la palabra que describe va en singular."]},

  {t:"El infinitivo de finalidad", s:"I use my phone to study",
   p:"Para decir <b>para qué</b> haces algo, el inglés usa simplemente <b>to + verbo</b>. No hace falta <i>for</i>, y meterlo es uno de los errores más marcados del hispanohablante.",
   chips:[["I use it to study.","Lo uso para estudiar."],["She came to help.","Vino a ayudar."],["I need an app to learn verbs.","Necesito una app para aprender verbos."],["He turned it on to see the time.","Lo encendió para ver la hora."]],
   aviso:["Nunca <i>for</i> delante de un verbo","<span class='wrong'>I use it for study.</span> &nbsp;&rarr;&nbsp; <span class='right'>I use it <b>to</b> study.</span>"]},

  {t:"FOR + -ing: para qué sirve una cosa", s:"This app is for learning verbs",
   p:"Hay un caso en que sí entra <b>for</b>: cuando describes <b>la función de un objeto</b>, no el propósito de una persona. Y entonces el verbo va en <b>-ing</b>, no en infinitivo.",
   table:{head:["Quién actúa","Estructura","Ejemplo"], rows:[
     ["Una persona","to + verbo","I use this app to learn verbs."],
     ["Un objeto","for + verbo-ing","This app is for learning verbs."],
     ["Una persona","to + verbo","She opened the laptop to write."],
     ["Un objeto","for + verbo-ing","A keyboard is for writing."]
   ]},
   aviso:["La prueba rápida","Si el sujeto es una persona que quiere algo, <b>to</b>. Si el sujeto es una cosa y estás explicando para qué sirve, <b>for + -ing</b>."]},

  {t:"Incontables que en español son contables", s:"information, advice, software, news",
   p:"Ya viste los incontables de la comida. En tecnología hay un grupo pequeño que engaña mucho, porque en español sí tienen plural.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["some information","<span class='wrong'>informations</span>","informaciones"],
     ["some advice","<span class='wrong'>advices</span>","consejos"],
     ["the software","<span class='wrong'>the softwares</span>","los programas"],
     ["the news is good","<span class='wrong'>the news are</span>","las noticias son"]
   ]},
   aviso:["Para contarlos hay que envasarlos","<i>a piece of information</i>, <i>a piece of advice</i>. Y <b>news</b>, aunque acabe en <i>-s</i>, es singular: <i>the news <b>is</b> good</i>."]}
];

/* Kevin (A) rescata el teléfono de David (B) en el patio del instituto */
const DIALOGUE = [
 {s:"A", ipa:"wʌts rɔːŋ wɪð jʊr foʊn jʊr ˈlʊkɪŋ æt ɪt laɪk ən ˈenəmi", p:"uáts rong uid iór fóun. iór lúking at it láik an énami",
  b:[["What's wrong","¿Qué le pasa"],["with your phone?","a tu teléfono?"],["You're looking at it","Lo estás mirando"],["like an enemy.","como a un enemigo."]]},
 {s:"B", ipa:"ɪt ˈdʌznt wɜːrk aɪ kɑːnt kəˈnekt tuː ðə ˈwaɪfaɪ", p:"it dásnt uérk. ái kant kanékt tu da uáifai",
  b:[["It doesn't work.","No funciona."],["I can't connect","No me puedo conectar"],["to the wifi.","al wifi."]],
  n:"<b>Connect to</b>: la preposición es fija y va siempre."},
 {s:"A", ipa:"tɜːrn ɪt ɔːf ænd tɜːrn ɪt ɑːn əˈɡen ðæt sɑːlvz hɑːf ðə ˈprɑːbləmz ɪn ðə wɜːrld", p:"tern it of and tern it an aguén. dat solvs jaf da práblems in da uérld",
  b:[["Turn it off","Apágalo"],["and turn it on","y enciéndelo"],["again.","otra vez."],["That solves","Eso resuelve"],["half the problems","la mitad de los problemas"],["in the world.","del mundo."]],
  n:"Con pronombre el verbo se parte obligatoriamente: <b>turn it off</b>, nunca <span class='wrong'>turn off it</span>."},
 {s:"B", ipa:"aɪ tɜːrnd ɪt ɔːf twaɪs ˈnʌθɪŋ", p:"ái ternd it of tuáis. názing",
  b:[["I turned it off","Lo apagué"],["twice.","dos veces."],["Nothing.","Nada."]]},
 {s:"A", ipa:"oʊˈkeɪ klɪk ɑːn ðə ˈsetɪŋz ænd lʊk fɔːr ðə ˈnetwɜːrk", p:"oukéi. klik an da sétings and luk for da nétuerk",
  b:[["OK.","Bien."],["Click on","Haz clic en"],["the settings","los ajustes"],["and look for","y busca"],["the network.","la red."]],
  n:"<b>Click on</b> y <b>look for</b>: dos preposiciones fijas seguidas. En español ninguna de las dos se traduce igual."},
 {s:"B", ipa:"aɪ siː θriː ˈnetwɜːrks wɪtʃ wʌn", p:"ái síi zri nétuerks. uích uán",
  b:[["I see","Veo"],["three networks.","tres redes."],["Which one?","¿Cuál?"]]},
 {s:"A", ipa:"ðə wʌn wɪð ðə neɪm əv ðə skuːl duː juː hæv ðə ˈpæswɜːrd", p:"da uán uid da néim av da skúul. du iú jav da pásuerd",
  b:[["The one","La que tiene"],["with the name","el nombre"],["of the school.","de la escuela."],["Do you have","¿Tienes"],["the password?","la contraseña?"]]},
 {s:"B", ipa:"aɪ hæv ɪt hɪr ɪts ə lɔːŋ wʌn wɪð ˈnʌmbərz ænd ˈkæpɪtl ˈletərz", p:"ái jav it jíar. its a long uán, uid námbars and kápitl létars",
  b:[["I have it here.","La tengo aquí."],["It's a long one,","Es larga,"],["with numbers","con números"],["and capital letters.","y mayúsculas."]]},
 {s:"A", ipa:"taɪp ɪt ˈsloʊli wʌn rɔːŋ ˈletər ænd ɪt ˈdʌznt kəˈnekt", p:"táip it slóuli. uán rong létar and it dásnt kanékt",
  b:[["Type it slowly.","Escríbela despacio."],["One wrong letter","Una letra mal"],["and it doesn't connect.","y no conecta."]]},
 {s:"B", ipa:"ɪt sez kəˈnektɪd θæŋk juː", p:"it ses «kanéktid». zánk iú",
  b:[["It says","Dice"],["\"connected\".","«conectado»."],["Thank you!","¡Gracias!"]]},
 {s:"A", ipa:"ɡʊd naʊ wʌt duː juː juːz ðə foʊn fɔːr", p:"gud. náu, uát du iú iúus da fóun for",
  b:[["Good.","Bien."],["Now,","Ahora,"],["what do you use","¿para qué usas"],["the phone for?","el teléfono?"]],
  n:"La preposición se va al final de la pregunta: <b>What do you use it <b>for</b>?</b> Es lo normal en inglés hablado."},
 {s:"B", ipa:"tuː ˈstʌdi ˈmoʊstli aɪ hæv ən æp fɔːr ˈlɜːrnɪŋ vɜːrbz", p:"tu stádi, móustli. ái jav an ap for lérning verbs",
  b:[["To study,","Para estudiar,"],["mostly.","sobre todo."],["I have an app","Tengo una aplicación"],["for learning verbs.","para aprender verbos."]],
  n:"Las dos formas en una línea: <b>to study</b> porque es lo que quiere él; <b>for learning</b> porque es para lo que sirve la app."},
 {s:"A", ipa:"ɪz ɪt ɡʊd aɪ niːd ˈsʌmθɪŋ tuː ˈpræktɪs ˈlɪsnɪŋ", p:"is it gud. ái níid sámzing tu práktis lísning",
  b:[["Is it good?","¿Es buena?"],["I need something","Necesito algo"],["to practise listening.","para practicar la escucha."]]},
 {s:"B", ipa:"ɪts ˈvɛri ɡʊd aɪl ʃer ðə lɪŋk wɪð juː", p:"its véri gud. áil shér da link uid iú",
  b:[["It's very good.","Es muy buena."],["I'll share","Te comparto"],["the link","el enlace"],["with you.","a ti."]]},
 {s:"A", ipa:"send ɪt baɪ ˈiːmeɪl nɑːt baɪ ˈmesɪdʒ aɪ luːz ˈmesɪdʒɪz", p:"send it bái íimeil, nat bái mésich. ái lúus mésichis",
  b:[["Send it","Mándamelo"],["by email,","por correo,"],["not by message.","no por mensaje."],["I lose messages.","Yo pierdo los mensajes."]]},
 {s:"B", ipa:"baɪ ˈiːmeɪl ðen wʌts jʊr əˈdres", p:"bái íimeil, den. uáts iór adrés",
  b:[["By email, then.","Por correo, entonces."],["What's your address?","¿Cuál es tu dirección?"]]},
 {s:"A", ipa:"ɪts ɑːn maɪ kɑːrd ænd ˌdaʊnˈloʊd ðə njuː ˈʌpdeɪt təˈnaɪt", p:"its an mái kard. and daunlóud da niú ápdeit tunáit",
  b:[["It's on my card.","Está en mi tarjeta."],["And download","Y descarga"],["the new update","la actualización nueva"],["tonight.","esta noche."]]},
 {s:"B", ipa:"waɪ ðə foʊn wɜːrks naʊ", p:"uái. da fóun uérks náu",
  b:[["Why?","¿Por qué?"],["The phone works now.","El teléfono ya funciona."]]},
 {s:"A", ipa:"bɪˈkɔːz ði oʊld ˈsɔːftwer ɪz sloʊ ænd ðə ˈbætəri daɪz ˈfæstər", p:"bikóos di óuld sóftuer is slóu, and da bátari dáis fástar",
  b:[["Because","Porque"],["the old software","el programa viejo"],["is slow,","es lento,"],["and the battery","y la batería"],["dies faster.","se acaba más rápido."]],
  n:"<b>Software</b> es incontable: nunca <span class='wrong'>softwares</span>, y el verbo va en singular."},
 {s:"B", ipa:"ɪz ðæt truː", p:"is dat trúu",
  b:[["Is that true?","¿Eso es cierto?"]]},
 {s:"A", ipa:"ɪts truː maɪ ˈlæptɑːp wʌz ðə seɪm aɪ rɪˈstɑːrtɪd ɪt aɪ ˈʌpdeɪtɪd ɪt ænd naʊ ɪts ə ˈdɪfrənt məˈʃiːn", p:"its trúu. mái láptap uás da séim. ái ristártid it, ái ápdeitid it, and náu its a dífrent mashíin",
  b:[["It's true.","Es cierto."],["My laptop","Mi portátil"],["was the same.","estaba igual."],["I restarted it,","La reinicié,"],["I updated it,","la actualicé,"],["and now","y ahora"],["it's a different machine.","es otra máquina."]]},
 {s:"B", ipa:"ðen aɪl duː ɪt təˈnaɪt wer ɪz maɪ ˈtʃɑːrdʒər ˈkeɪbl", p:"den áil du it tunáit. uér is mái chárchar kéibl",
  b:[["Then I'll do it","Entonces lo hago"],["tonight.","esta noche."],["Where is","¿Dónde está"],["my charger cable?","mi cable del cargador?"]],
  n:"<b>Charger cable</b>: dos sustantivos juntos, el primero describe al segundo y va en singular."},
 {s:"A", ipa:"ɪn jʊr ˈbækpæk aɪ sɔː ɪt ðer ðɪs ˈmɔːrnɪŋ", p:"in iór bákpak. ái sóo it der dis mórning",
  b:[["In your backpack.","En tu mochila."],["I saw it there","Lo vi ahí"],["this morning.","esta mañana."]]},
 {s:"B", ipa:"juː ɑːr ˈbetər ðæn ði ˈɪntərnet ˈkevɪn", p:"iú ar bétar dan di íntarnet, Kévin",
  b:[["You are better","Eres mejor"],["than the internet,","que el internet,"],["Kevin.","Kevin."]]}
];

const LECTURA = {
  titulo: "One street, four screens",
  entradilla: "Quién usa qué y para qué, en una sola calle. El texto pone a trabajar lo de la Fase 1: los phrasal verbs separables, las preposiciones fijas, los sustantivos compuestos, el infinitivo de finalidad, <i>for + -ing</i> y los incontables como <i>advice</i> y <i>software</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "My phone is four years old and it doesn't work very well. The battery dies at two in the afternoon and the screen is broken in one corner. I use it to study, mostly: I have an app for learning verbs, and I read the news on it every morning.",
    "Kevin knows everything about technology. He turned my phone off and on, he connected it to the school wifi and he found the problem in five minutes. He says the old software is slow, so he downloaded the update for me. He didn't charge me anything, of course.",
    "Pablo and Nico use their phones for other things. They listen to music, they share videos and they send fifty messages a day. They never read an email. \"Email is for old people,\" they say, and then they ask me for the wifi password.",
    "My mother has a new tablet and she is learning fast. She writes messages with one finger, but she writes them. Last week she downloaded an app to learn English, and now she asks me for advice every night. We are all students in this house."
  ],
  glosario: [
    ["doesn't work","ˈdʌznt wɜːrk","no funciona","dásnt uérk"],
    ["works","wɜːrks","funciona","uérks"],
    ["dies","daɪz","se acaba","dáis"],
    ["use","juːz","uso, usan","iúus"],
    ["read","riːd","leo, leen","ríid"],
    ["knows","noʊz","sabe","nóus"],
    ["turned off","tɜːrnd ɔːf","apagó","ternd of"],
    ["turned on","tɜːrnd ɑːn","encendió","ternd an"],
    ["connected","kəˈnektɪd","conectó","kanéktid"],
    ["found","faʊnd","encontró","fáund"],
    ["says","sez","dice","ses"],
    ["downloaded","ˌdaʊnˈloʊdɪd","descargó","daunlóudid"],
    ["charge","tʃɑːrdʒ","cobrar","charch"],
    ["listen to","ˈlɪsn tuː","escuchan","lísn tu"],
    ["share","ʃer","comparten","shér"],
    ["send","send","mandan","send"],
    ["ask for","æsk fɔːr","piden","ask for"],
    ["writes","raɪts","escribe","ráits"],
    ["is learning","ɪz ˈlɜːrnɪŋ","está aprendiendo","is lérning"],
    ["to study","tuː ˈstʌdi","para estudiar","tu stádi"],
    ["to learn","tuː lɜːrn","para aprender","tu lern"],
    ["for learning","fɔːr ˈlɜːrnɪŋ","para aprender (función)","for lérning"],
    ["for old people","fɔːr oʊld ˈpiːpl","para gente mayor","for óuld píipl"],
    ["phone","foʊn","teléfono","fóun"],
    ["phones","foʊnz","teléfonos","fóuns"],
    ["battery","ˈbætəri","batería","bátari"],
    ["screen","skriːn","pantalla","skríin"],
    ["corner","ˈkɔːrnər","esquina","kórnar"],
    ["app","æp","aplicación","ap"],
    ["mostly","ˈmoʊstli","sobre todo","móustli"],
    ["verbs","vɜːrbz","verbos","verbs"],
    ["turned","tɜːrnd","apagó, encendió","ternd"],
    ["off","ɔːf","apagado (partícula)","of"],
    ["on","ɑːn","encendido (partícula)","an"],
    ["other","ˈʌðər","otras","ádar"],
    ["things","θɪŋz","cosas","zings"],
    ["news","nuːz","noticias","núus"],
    ["technology","tekˈnɑːlədʒi","tecnología","teknálachi"],
    ["software","ˈsɔːftwer","programas","sóftuer"],
    ["update","ˈʌpdeɪt","actualización","ápdeit"],
    ["wifi","ˈwaɪfaɪ","wifi","uáifai"],
    ["password","ˈpæswɜːrd","contraseña","pásuerd"],
    ["messages","ˈmesɪdʒɪz","mensajes","mésichis"],
    ["email","ˈiːmeɪl","correo","íimeil"],
    ["videos","ˈvɪdioʊz","videos","vídious"],
    ["music","ˈmjuːzɪk","música","miúsik"],
    ["tablet","ˈtæblət","tableta","táblet"],
    ["finger","ˈfɪŋɡər","dedo","fínguer"],
    ["advice","ədˈvaɪs","consejo","adváis"],
    ["problem","ˈprɑːbləm","problema","práblem"],
    ["broken","ˈbroʊkən","rota","bróuken"],
    ["slow","sloʊ","lento","slóu"],
    ["fast","fæst","rápido","fast"],
    ["old","oʊld","viejo","óuld"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["students","ˈstuːdnts","estudiantes","stúudents"],
    ["last week","læst wiːk","la semana pasada","last uíik"],
    ["every night","ˈevri naɪt","cada noche","évri náit"],
    ["of course","əv ˈkɔːrs","por supuesto","av kórs"]
  ],
  preguntas: [
    { q:"What does David use his phone for?",
      ops:["To play games","To study and read the news","To share videos"], ok:1,
      pista:"Primer párrafo, última frase. Los videos son de otros." },
    { q:"What did Kevin do with the phone?",
      ops:["He bought a new battery","He sold it","He connected it and downloaded the update"], ok:2,
      pista:"Segundo párrafo: hizo tres cosas y no cobró nada." },
    { q:"What does David's mother ask him for?",
      ops:["Advice","Money","Her charger"], ok:0,
      pista:"Cuarto párrafo, penúltima frase. Es un incontable." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-20"] = {
  meta: {
    id: "a1-20", nivel: "A1", numero: 20,
    titulo: "Tecnología cotidiana",
    descriptor: "Puedo explicar un problema con un aparato, seguir instrucciones sencillas para resolverlo y decir para qué uso cada cosa.",
    escena: "Kevin & David · el patio del instituto, con un teléfono que no conecta",
    personajeIA: "Kevin", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
