/* ============================================================
   LECCIÓN A2-04 · La ciudad: servicios y trámites
   Reparto: Rosa, en el mostrador de la compañía telefónica. David
   hace de intérprete para Julia, que necesita una tarjeta SIM. La
   lectura reúne los seis puntos de la Fase 1 —preguntas indirectas
   con WH-, con if/whether, los compuestos de some/any/no/every, el
   artículo con instituciones, los verbos de dos objetos y el
   presente de los horarios— en nosotros, ella, ellos y él.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Trámites", items:[
    ["form","fɔːrm","formulario","form"],["to fill in","tuː fɪl ɪn","rellenar","tu fil in"],
    ["to sign","tuː saɪn","firmar","tu sáin"],["signature","ˈsɪɡnətʃər","firma","sígnachar"],
    ["receipt","rɪˈsiːt","recibo","risíit"],["document","ˈdɑːkjumənt","documento","dákiument"],
    ["address","əˈdres","dirección","adrés"],["in person","ɪn ˈpɜːrsn","en persona","in pérsn"],
    ["resident","ˈrezɪdənt","residente","résident"],["visitor","ˈvɪzɪtər","visitante","vísitar"]
  ]},
  {g:"Servicios de la ciudad", items:[
    ["bank","bæŋk","banco","bank"],["post office","poʊst ˈɔːfɪs","oficina de correos","póust ófis"],
    ["town hall","taʊn hɔːl","alcaldía","táun jol"],["police station","pəˈliːs ˈsteɪʃn","estación de policía","políis stéishon"],
    ["library","ˈlaɪbreri","biblioteca","láibreri"],["chemist","ˈkemɪst","farmacia","kémist"],
    ["phone shop","foʊn ʃɑːp","tienda de telefonía","fóun shap"],["parking","ˈpɑːrkɪŋ","estacionamiento","párking"],
    ["opening hours","ˈoʊpnɪŋ ˈaʊərz","horario","óupning áuars"],["closed","kloʊzd","cerrado","klóusd"]
  ]},
  {g:"Los compuestos", items:[
    ["somewhere","ˈsʌmwer","en algún sitio","sámuer"],["anywhere","ˈeniwer","en cualquier sitio","éniuer"],
    ["nowhere","ˈnoʊwer","en ningún sitio","nóuuer"],["everywhere","ˈevriwer","en todas partes","évriuer"],
    ["something","ˈsʌmθɪŋ","algo","sámzing"],["anything","ˈeniθɪŋ","algo, nada","énizing"],
    ["nothing","ˈnʌθɪŋ","nada","názing"],["somebody","ˈsʌmbɑːdi","alguien","sámbadi"],
    ["anybody","ˈenibɑːdi","alguien, nadie","énibadi"],["everybody","ˈevribɑːdi","todos","évribadi"]
  ]},
  {g:"Preguntar con educación", items:[
    ["Could you tell me…?","kʊd juː tel miː","¿me podría decir…?","kud iú tel mi"],["Do you know if…?","duː juː noʊ ɪf","¿sabe si…?","du iú nóu if"],
    ["Excuse me","ɪkˈskjuːz miː","disculpe","ikskiús mi"],["I'm afraid not","aɪm əˈfreɪd nɑːt","me temo que no","áim afréid nat"],
    ["I'm afraid so","aɪm əˈfreɪd soʊ","me temo que sí","áim afréid sóu"],["as well","æz wel","también","as uel"],
    ["Take a seat","teɪk ə siːt","tome asiento","téik a síit"],["One last thing","wʌn læst θɪŋ","una última cosa","uán last zing"],
    ["Here you are","hɪr juː ɑːr","aquí tiene","jíar iú ar"],["except","ɪkˈsept","salvo","iksépt"]
  ]}
];

const PRONKEY = [
  ["p muda","La <i>p</i> de <i>receipt</i> no se pronuncia.","receipt &rarr; risíit"],
  ["g muda","La <i>g</i> de <i>sign</i> desaparece, pero vuelve en <i>signature</i>.","sign &rarr; sáin"],
  ["ch","Como en «coche».","signature &rarr; sígnachar"],
  ["sh","Como pedir silencio.","station &rarr; stéishon"],
  ["j","Aire por la garganta, sin raspar.","hall &rarr; jol"],
  ["z","Lengua entre los dientes, sin voz.","nothing &rarr; názing"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","everywhere &rarr; évriuer"],
  ["k","La <i>ch</i> de <i>chemist</i> suena <b>k</b>, no <i>ch</i>.","chemist &rarr; kémist"],
  ["r final","Apenas se toca; nunca vibra.","visitor &rarr; vísitar"]
];

const VERBS = [
  ["to fill in","reg","fill in · fills in","filled in","will fill in","rellenar"],
  ["to sign","reg","sign · signs","signed","will sign","firmar"],
  ["to apply","reg","apply · applies","applied","will apply","solicitar"],
  ["to explain","reg","explain · explains","explained","will explain","explicar"],
  ["to park","reg","park · parks","parked","will park","estacionar"],
  ["to open","reg","open · opens","opened","will open","abrir"],
  ["to close","reg","close · closes","closed","will close","cerrar"],
  ["to show","irr","show · shows","showed","will show","mostrar"],
  ["to give","irr","give · gives","gave","will give","dar"],
  ["to send","irr","send · sends","sent","will send","enviar"],
  ["to take","irr","take · takes","took","will take","tardar; tomar"],
  ["to leave","irr","leave · leaves","left","will leave","dejar"]
];

const GRAMMAR = [
  {t:"Las preguntas indirectas", s:"Could you tell me where the bank is?",
   p:"Una pregunta directa suena brusca en una ventanilla. La forma educada la mete <b>dentro de otra frase</b>… y eso cambia el orden: dentro ya <b>no se invierte</b> y <b>no hay <i>do</i></b>.",
   table:{head:["Directa","Indirecta"], rows:[
     ["Where is the bank?","Could you tell me where the bank <b>is</b>?"],
     ["Where do I sign?","Could you tell me where I <b>sign</b>?"],
     ["How long does it take?","Could you tell me how long it <b>takes</b>?"],
     ["What time does it open?","Do you know what time it <b>opens</b>?"]
   ]},
   aviso:["El error casi universal","<span class='wrong'>Could you tell me where is the bank?</span> &nbsp;&rarr;&nbsp; <span class='right'>…where the bank is?</span> Dentro de la pregunta indirecta el orden vuelve a ser el de una afirmación."]},

  {t:"Indirectas de sí o no", s:"Do you know IF / WHETHER…?",
   p:"Si la pregunta original era de sí o no, no hay palabra interrogativa que meter. Entonces se usa <b>if</b> (o <i>whether</i>, más formal) como enganche.",
   table:{head:["Directa","Indirecta"], rows:[
     ["Is the bank open?","Do you know <b>if</b> the bank is open?"],
     ["Does she need a passport?","Do you know <b>if</b> she needs a passport?"],
     ["Can I use it in Canada?","Do you know <b>whether</b> I can use it there?"],
     ["Did he sign it?","Could you tell me <b>if</b> he signed it?"]
   ]},
   aviso:["<i>If</i> aquí no es «si condicional»","Es el «si» de «no sé <b>si</b> vendrá», no el de «si llueve». Y detrás no se invierte nada: <span class='wrong'>if is the bank open</span> no existe."]},

  {t:"Los compuestos de some, any, no y every", s:"somewhere, anything, nobody…",
   p:"Cuatro prefijos por tres finales dan una tabla de doce palabras que cubre todo. Se reparten igual que <i>some</i> y <i>any</i>: afirmativo con <b>some-</b>, negativo y pregunta con <b>any-</b>.",
   table:{head:["","persona","cosa","lugar"], rows:[
     ["some- (afirmativo)","somebody","something","somewhere"],
     ["any- (negativo y pregunta)","anybody","anything","anywhere"],
     ["no- (ya es negativo)","nobody","nothing","nowhere"],
     ["every- (todos)","everybody","everything","everywhere"]
   ]},
   aviso:["Nunca dos negaciones","<span class='wrong'>I didn't find nothing.</span> &nbsp;&rarr;&nbsp; <span class='right'>I didn't find anything.</span> o <span class='right'>I found nothing.</span> Una negación por frase, y las de <i>no-</i> ya la traen puesta."]},

  {t:"El artículo con las instituciones", s:"go to school / go to the school",
   p:"Cuando vas a un sitio <b>para lo que ese sitio es</b>, el inglés quita el artículo. Cuando vas al edificio por otra razón, lo pone. Es una diferencia que el español no marca.",
   table:{head:["Sin artículo","Con artículo"], rows:[
     ["go to school (a estudiar)","go to the school (al edificio)"],
     ["go to hospital (a que te traten)","go to the hospital (a visitar)"],
     ["be in prison (preso)","be in the prison (de visita)"],
     ["go to bed (a dormir)","sit on the bed (sentarse)"]
   ]},
   aviso:["<i>Work</i> y <i>home</i> nunca llevan artículo","<span class='right'>go to work</span>, <span class='right'>go home</span> — y <i>home</i> tampoco lleva <i>to</i>. En cambio <i>the bank</i>, <i>the post office</i> y <i>the market</i> sí lo llevan siempre."]},

  {t:"Los verbos de dos objetos", s:"give me the form / give the form to me",
   p:"Algunos verbos llevan dos complementos: la cosa y la persona. El inglés admite dos órdenes, y el que elijas decide si aparece <b>to</b>.",
   table:{head:["Orden","Estructura","Ejemplo"], rows:[
     ["Persona primero","verbo + persona + cosa","She gave me a receipt."],
     ["Cosa primero","verbo + cosa + to + persona","She gave a receipt to me."],
     ["Con pronombre","siempre el segundo orden","I'll give it to you."],
     ["Otros verbos así","send, show, tell, buy, lend","Show me the form. / Show it to me."]
   ]},
   aviso:["Con la cosa en pronombre, el <i>to</i> es obligatorio","<span class='wrong'>Give me it.</span> &nbsp;&rarr;&nbsp; <span class='right'>Give it to me.</span> Cuando lo que das ya es un <i>it</i>, el otro orden no funciona."]},

  {t:"El presente de los horarios", s:"The bank opens at eight",
   p:"Para <b>horarios oficiales</b> —bancos, buses, vuelos, cines— el inglés usa el presente simple, incluso hablando de mañana. Es un uso distinto del de las rutinas.",
   chips:[["The bank opens at eight.","El banco abre a las ocho."],["The market closes at one.","El mercado cierra a la una."],["Our flight leaves at six tomorrow.","Nuestro vuelo sale mañana a las seis."],["The film starts in ten minutes.","La película empieza en diez minutos."]],
   aviso:["No es lo mismo que un plan personal","<i>The bus leaves at six</i> es un horario fijo. <i>I'm leaving at six</i> es tu plan. Si el horario no lo pone una institución, vuelve el presente continuo o <i>going to</i>."]}
];

/* Rosa (A) atiende a David (B), que hace de intérprete para Julia */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ teɪk ə siːt haʊ kæn aɪ help juː", p:"gud mórning. téik a síit. jáu kan ái jelp iú",
  b:[["Good morning.","Buenos días."],["Take a seat.","Tome asiento."],["How can I help you?","¿En qué le puedo ayudar?"]]},
 {s:"B", ipa:"ɡʊd ˈmɔːrnɪŋ kʊd juː tel miː haʊ aɪ kæn ɡet ə sɪm kɑːrd fɔːr maɪ frend", p:"gud mórning. kud iú tel mi jáu ái kan guet a sim kard for mái frend",
  b:[["Good morning.","Buenos días."],["Could you tell me","¿Me podría decir"],["how I can get","cómo puedo conseguir"],["a SIM card","una tarjeta SIM"],["for my friend?","para mi amiga?"]],
  n:"Pregunta indirecta: dentro va <b>how I can</b>, no <span class='wrong'>how can I</span>. El orden vuelve a ser el de una afirmación."},
 {s:"A", ipa:"əv ˈkɔːrs ɪz ʃi ə ˈrezɪdənt ɔːr ə ˈvɪzɪtər", p:"av kórs. is shi a résident or a vísitar",
  b:[["Of course.","Por supuesto."],["Is she a resident","¿Es residente"],["or a visitor?","o visitante?"]]},
 {s:"B", ipa:"ə ˈvɪzɪtər ʃi əˈraɪvd frʌm ˈkænədə ɑːn ˈθɜːrzdeɪ", p:"a vísitar. shi aráivd from Kánada an zérsdei",
  b:[["A visitor.","Visitante."],["She arrived from Canada","Llegó de Canadá"],["on Thursday.","el jueves."]]},
 {s:"A", ipa:"ðen ʃi niːdz hɜːr ˈpæspɔːrt ænd ə ˈloʊkl əˈdres duː juː hæv boʊθ", p:"den shi níids jer pásport and a lóukl adrés. du iú jav bóuz",
  b:[["Then she needs","Entonces necesita"],["her passport","su pasaporte"],["and a local address.","y una dirección local."],["Do you have both?","¿Tienen las dos cosas?"]]},
 {s:"B", ipa:"wi hæv ðə ˈpæspɔːrt duː juː noʊ ɪf maɪ əˈdres ɪz ɪˈnʌf", p:"ui jav da pásport. du iú nóu if mái adrés is ináf",
  b:[["We have the passport.","Tenemos el pasaporte."],["Do you know if","¿Sabe si"],["my address","mi dirección"],["is enough?","es suficiente?"]],
  n:"Pregunta indirecta de sí o no: la engancha <b>if</b>, y detrás no se invierte nada."},
 {s:"A", ipa:"ɪt ɪz ɪf juː lɪv æt ðæt əˈdres fɪl ɪn ðɪs fɔːrm pliːz", p:"it is, if iú liv at dat adrés. fil in dis form, plíis",
  b:[["It is,","Lo es,"],["if you live","si usted vive"],["at that address.","en esa dirección."],["Fill in this form, please.","Rellene este formulario, por favor."]]},
 {s:"B", ipa:"kʊd juː tel miː wer aɪ saɪn", p:"kud iú tel mi uér ái sáin",
  b:[["Could you tell me","¿Me podría decir"],["where I sign?","dónde firmo?"]],
  n:"<b>Where I sign</b>, no <span class='wrong'>where do I sign</span>: dentro de la indirecta desaparece el <i>do</i>."},
 {s:"A", ipa:"æt ðə ˈbɑːtəm ɑːn ðə raɪt ænd raɪt ðə ˈnʌmbər ɪn ˈkæpɪtl ˈletərz", p:"at da bátam, an da ráit. and ráit da námbar in kápitl létars",
  b:[["At the bottom,","Abajo,"],["on the right.","a la derecha."],["And write the number","Y escriba el número"],["in capital letters.","en mayúsculas."]]},
 {s:"B", ipa:"dʌn dʌz ʃi niːd ˈeniθɪŋ els", p:"dan. das shi níid énizing els",
  b:[["Done.","Listo."],["Does she need","¿Necesita"],["anything else?","algo más?"]],
  n:"<b>Anything</b> porque es pregunta. En afirmativa sería <i>something</i>."},
 {s:"A", ipa:"ˈnʌθɪŋ els bʌt ˈsʌmbɑːdi hæz tuː kʌm ɪn ˈpɜːrsn fɔːr ðə ˈfoʊtoʊ", p:"názing els. bat sámbadi jas tu kam in pérsn for da fóutou",
  b:[["Nothing else.","Nada más."],["But somebody","Pero alguien"],["has to come in person","tiene que venir en persona"],["for the photo.","para la foto."]]},
 {s:"B", ipa:"ʃiːz ˌaʊtˈsaɪd ʃiːz ˈlʊkɪŋ fɔːr ˈsʌmwer tuː pɑːrk", p:"shíis autsáid. shíis lúking for sámuer tu park",
  b:[["She's outside.","Está afuera."],["She's looking for","Está buscando"],["somewhere to park.","dónde estacionar."]]},
 {s:"A", ipa:"ɪn ðɪs striːt ðerz ˈnoʊwer tuː pɑːrk bɪˈfɔːr ten", p:"in dis stríit. ders nóuuer tu park bifór ten",
  b:[["In this street?","¿En esta calle?"],["There's nowhere to park","No hay dónde estacionar"],["before ten.","antes de las diez."]],
  n:"<b>Nowhere</b> ya es negativo: por eso el verbo va en afirmativo, <i>there's</i>."},
 {s:"B", ipa:"aɪ noʊ aɪ toʊld hɜːr ʃi ˈdɪdnt bɪˈliːv miː", p:"ái nóu. ái tóuld jer. shi dídnt bilíiv mi",
  b:[["I know.","Lo sé."],["I told her.","Se lo dije."],["She didn't believe me.","No me creyó."]]},
 {s:"A", ipa:"ˈnoʊbɑːdi bɪˈliːvz ɪt ðə fɜːrst taɪm tel hɜːr tuː liːv ðə kɑːr æt ðə ˈmɑːrkɪt", p:"nóubadi bilíivs it da ferst táim. tel jer tu líiv da kar at da márket",
  b:[["Nobody believes it","Nadie se lo cree"],["the first time.","la primera vez."],["Tell her to leave the car","Dígale que deje el carro"],["at the market.","en el mercado."]]},
 {s:"B", ipa:"aɪl send hɜːr ə ˈmesɪdʒ baɪ ðə weɪ duː juː noʊ ɪf ðə bæŋk ˈoʊpənz təˈdeɪ", p:"áil send jer a mésich. bái da uéi, du iú nóu if da bank óupns tudéi",
  b:[["I'll send her a message.","Le mando un mensaje."],["By the way,","Por cierto,"],["do you know if the bank","¿sabe si el banco"],["opens today?","abre hoy?"]],
  n:"<b>Send her a message</b>: primero la persona, después la cosa, sin <i>to</i>."},
 {s:"A", ipa:"ðə bæŋk ˈoʊpənz æt eɪt ænd ˈkloʊzɪz æt θriː ˈevri deɪ ɪkˈsept ˈsʌndeɪ", p:"da bank óupns at éit and klóusis at zri, évri déi iksépt sándei",
  b:[["The bank opens at eight","El banco abre a las ocho"],["and closes at three,","y cierra a las tres,"],["every day","todos los días"],["except Sunday.","menos el domingo."]],
  n:"Presente simple para un <b>horario oficial</b>, aunque se hable de hoy o de mañana."},
 {s:"B", ipa:"ˈpɜːrfɪkt kʊd juː tel miː haʊ lɔːŋ ðə sɪm teɪks", p:"pérfect. kud iú tel mi jáu long da sim téiks",
  b:[["Perfect.","Perfecto."],["Could you tell me","¿Me podría decir"],["how long the SIM takes?","cuánto tarda la SIM?"]]},
 {s:"A", ipa:"ˈtwenti ˈmɪnɪts ɪf ˈevriθɪŋ ɪz kəˈrekt ɡɪv miː ðə fɔːrm ænd ðə ˈpæspɔːrt", p:"tuénti mínits, if évrizing is korékt. guiv mi da form and da pásport",
  b:[["Twenty minutes,","Veinte minutos,"],["if everything is correct.","si todo está correcto."],["Give me the form","Deme el formulario"],["and the passport.","y el pasaporte."]]},
 {s:"B", ipa:"hɪr juː ɑːr kʊd juː ɡɪv miː ə rɪˈsiːt æz wel", p:"jíar iú ar. kud iú guiv mi a risíit as uel",
  b:[["Here you are.","Aquí tiene."],["Could you give me","¿Me podría dar"],["a receipt as well?","un recibo también?"]],
  n:"<b>Receipt</b> se pronuncia «risíit»: la <i>p</i> es muda."},
 {s:"A", ipa:"aɪl ɡɪv ɪt tuː juː æt ði end wɪð ðə kɑːrd", p:"áil guiv it tu iú at di end, uid da kard",
  b:[["I'll give it to you","Se lo doy"],["at the end,","al final,"],["with the card.","con la tarjeta."]],
  n:"Aquí la cosa ya es un pronombre, así que el <b>to</b> es obligatorio: <i>give it to you</i>."},
 {s:"B", ipa:"θæŋk juː wʌn læst θɪŋ duː juː noʊ ɪf ʃi kæn juːz ɪt ɪn ˈkænədə", p:"zánk iú. uán last zing: du iú nóu if shi kan iúus it in Kánada",
  b:[["Thank you.","Gracias."],["One last thing:","Una última cosa:"],["do you know if she can use it","¿sabe si la puede usar"],["in Canada?","en Canadá?"]]},
 {s:"A", ipa:"aɪm əˈfreɪd nɑːt ɪt ˈoʊnli wɜːrks hɪr ɑːsk hɜːr tuː baɪ əˈnʌðər wʌn ðer", p:"áim afréid nat. it óunli uérks jíar. ask jer tu bái anáder uán der",
  b:[["I'm afraid not.","Me temo que no."],["It only works here.","Sólo funciona aquí."],["Ask her to buy","Dígale que compre"],["another one there.","otra allá."]]},
 {s:"B", ipa:"aɪl tel hɜːr θæŋk juː ˈveri mʌtʃ fɔːr jʊr ˈpeɪʃns", p:"áil tel jer. zánk iú véri mach for iór péishens",
  b:[["I'll tell her.","Se lo diré."],["Thank you very much","Muchas gracias"],["for your patience.","por su paciencia."]]}
];

const LECTURA = {
  titulo: "The morning of the forms",
  entradilla: "Tres ventanillas en una mañana. El texto pone a trabajar lo de la Fase 1: las preguntas indirectas, <i>if</i> para las de sí o no, los compuestos de <i>some</i>, <i>any</i>, <i>no</i> y <i>every</i>, el artículo con las instituciones, los verbos de dos objetos y el presente simple de los horarios. Cada párrafo cambia de persona.",
  parrafos: [
    "On Monday morning we went to three places. First the phone shop, because Julia needed a SIM card; then the bank; then the post office, which was closed. Nobody told us that it closes on the first Monday of the month.",
    "The woman at the phone shop is called Rosa and she was extremely patient. She explained everything twice, she showed me where to sign, and she gave me a receipt at the end. She asked for a local address, because a visitor cannot get a card without one.",
    "Pablo and Nico came with us and they didn't help at all. They asked everybody where the toilet was, they found nothing to eat, and they lost my pen twice. Somebody should give those two a job, only to see what happens.",
    "Mr. Ortega says the trick with this city is the timetable. The bank opens at eight and closes at three. The market closes at one. The post office does what it wants. If you know the hours, everything takes twenty minutes; if you don't, it takes a day."
  ],
  glosario: [
    ["went","went","fuimos","uént"],
    ["needed","ˈniːdɪd","necesitaba","níidid"],
    ["told","toʊld","nos dijo","tóuld"],
    ["closes","ˈkloʊzɪz","cierra","klóusis"],
    ["opens","ˈoʊpənz","abre","óupns"],
    ["is called","ɪz kɔːld","se llama","is kold"],
    ["explained","ɪkˈspleɪnd","explicó","ikspléind"],
    ["showed","ʃoʊd","me enseñó","shóud"],
    ["gave","ɡeɪv","me dio","guéiv"],
    ["asked for","æskt fɔːr","pidió","askt for"],
    ["cannot get","ˈkænɑːt ɡet","no puede conseguir","kánat guet"],
    ["came","keɪm","vinieron","kéim"],
    ["didn't help","ˈdɪdnt help","no ayudaron","dídnt jelp"],
    ["asked","æskt","preguntaron","askt"],
    ["found","faʊnd","encontraron","fáund"],
    ["lost","lɔːst","perdieron","lost"],
    ["should give","ʃʊd ɡɪv","deberían darles","shud guiv"],
    ["says","sez","dice","ses"],
    ["takes","teɪks","tarda","téiks"],
    ["happens","ˈhæpənz","pasa","jápens"],
    ["does","dʌz","hace","das"],
    ["wants","wɑːnts","quiere","uánts"],
    ["know","noʊ","sabes","nóu"],
    ["phone shop","foʊn ʃɑːp","tienda de telefonía","fóun shap"],
    ["SIM card","sɪm kɑːrd","tarjeta SIM","sim kard"],
    ["bank","bæŋk","banco","bank"],
    ["post office","poʊst ˈɔːfɪs","oficina de correos","póust ófis"],
    ["closed","kloʊzd","cerrada","klóusd"],
    ["receipt","rɪˈsiːt","recibo","risíit"],
    ["address","əˈdres","dirección","adrés"],
    ["Rosa","ˈroʊzə","Rosa (nombre)","róusa"],
    ["local","ˈloʊkl","local, de aquí","lóukl"],
    ["visitor","ˈvɪzɪtər","visitante","vísitar"],
    ["toilet","ˈtɔɪlət","baño","tóilet"],
    ["pen","pen","bolígrafo","pen"],
    ["job","dʒɑːb","trabajo","chab"],
    ["trick","trɪk","truco","trik"],
    ["timetable","ˈtaɪmteɪbl","horario","táimteibl"],
    ["hours","ˈaʊərz","horarios","áuars"],
    ["market","ˈmɑːrkɪt","mercado","márket"],
    ["city","ˈsɪti","ciudad","síti"],
    ["places","ˈpleɪsɪz","lugares","pléisis"],
    ["month","mʌnθ","mes","manz"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["nothing","ˈnʌθɪŋ","nada","názing"],
    ["somebody","ˈsʌmbɑːdi","alguien","sámbadi"],
    ["everybody","ˈevribɑːdi","a todo el mundo","évribadi"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["extremely","ɪkˈstriːmli","sumamente","ikstríimli"],
    ["patient","ˈpeɪʃnt","paciente","péishent"],
    ["twice","twaɪs","dos veces","tuáis"],
    ["at all","æt ɔːl","en absoluto","at ol"],
    ["without","wɪˈðaʊt","sin","uidáut"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["first Monday","fɜːrst ˈmʌndeɪ","primer lunes","ferst mándei"],
    ["those two","ðoʊz tuː","esos dos","dóus tu"]
  ],
  preguntas: [
    { q:"Why was the post office closed?",
      ops:["Because it was Sunday","Because it closes on the first Monday of the month","Because there was a holiday"], ok:1,
      pista:"Primer párrafo, última frase: nadie se lo había avisado." },
    { q:"What did Rosa ask for?",
      ops:["A local address","A photo of the car","Two passports"], ok:0,
      pista:"Segundo párrafo: sin eso, un visitante no puede conseguir la tarjeta." },
    { q:"According to Mr. Ortega, what is the trick with the city?",
      ops:["Going very early","Taking a taxi","Knowing the opening hours"], ok:2,
      pista:"Cuarto párrafo: por eso enumera a qué hora abre y cierra cada sitio." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-04"] = {
  meta: {
    id: "a2-04", nivel: "A2", numero: 4,
    titulo: "La ciudad: servicios y trámites",
    descriptor: "Puedo preguntar con cortesía por un servicio de la ciudad, entender un horario, rellenar y firmar un formulario y resolver un trámite sencillo.",
    escena: "Rosa & David · mostrador de la compañía telefónica, un lunes por la mañana",
    personajeIA: "Rosa, del mostrador", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
