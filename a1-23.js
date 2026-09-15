/* ============================================================
   LECCIÓN A1-23 · Una llamada telefónica
   Reparto: Carmen, la recepcionista de la clínica de la Dra. Reyes.
   David ha vuelto de Toronto con un resfriado. La lectura reúne los
   seis puntos de la Fase 1 —this is, can I speak to, los phrasal
   verbs del teléfono, dejar recado, deletrear y pedir repetición—
   en yo, ella, ellos y ella otra vez.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La llamada", items:[
    ["phone call","foʊn kɔːl","llamada","fóun kol"],["to ring","tuː rɪŋ","sonar; llamar","tu ring"],
    ["to answer","tuː ˈænsər","contestar","tu ánsar"],["line","laɪn","línea","láin"],
    ["number","ˈnʌmbər","número","námbar"],["extension","ɪkˈstenʃn","extensión","iksténshon"],
    ["voicemail","ˈvɔɪsmeɪl","buzón de voz","vóismeil"],["mobile","ˈmoʊbl","celular","móubl"],
    ["engaged","ɪnˈɡeɪdʒd","ocupada (la línea)","inguéichd"],["wrong number","rɔːŋ ˈnʌmbər","número equivocado","rong námbar"]
  ]},
  {g:"Frases al teléfono", items:[
    ["Can I speak to…?","kæn aɪ spiːk tuː","¿puedo hablar con…?","kan ái spíik tu"],["Speaking","ˈspiːkɪŋ","con él, con ella","spíiking"],
    ["Who's calling?","huːz ˈkɔːlɪŋ","¿de parte de quién?","júus kóling"],["This is…","ðɪs ɪz","le habla…","dis is"],
    ["Hold on","hoʊld ɑːn","espere","jóuld an"],["I'll put you through","aɪl pʊt juː θruː","le paso","áil put iú zrúu"],
    ["She's not in","ʃiːz nɑːt ɪn","no está","shíis nat in"],["Can I leave a message?","kæn aɪ liːv ə ˈmesɪdʒ","¿puedo dejar un recado?","kan ái líiv a mésich"],
    ["I'll call back","aɪl kɔːl bæk","vuelvo a llamar","áil kol bak"],["Go ahead","ɡoʊ əˈhed","adelante","góu ajéd"]
  ]},
  {g:"La cita", items:[
    ["appointment","əˈpɔɪntmənt","cita","apóintment"],["available","əˈveɪləbl","disponible","avéilabl"],
    ["urgent","ˈɜːrdʒənt","urgente","érchent"],["to book","tuː bʊk","reservar","tu buk"],
    ["to cancel","tuː ˈkænsl","cancelar","tu kánsl"],["full","fʊl","lleno","ful"],
    ["patient","ˈpeɪʃnt","paciente","péishent"],["file","faɪl","expediente","fáil"],
    ["cold","koʊld","resfriado","kóuld"],["medicine","ˈmedɪsn","medicina","médisn"]
  ]},
  {g:"Deletrear y precisar", items:[
    ["to spell","tuː spel","deletrear","tu spel"],["letter","ˈletər","letra","létar"],
    ["double","ˈdʌbl","doble","dábl"],["capital","ˈkæpɪtl","mayúscula","kápitl"],
    ["surname","ˈsɜːrneɪm","apellido","sérneim"],["first name","fɜːrst neɪm","nombre","ferst néim"],
    ["Sorry?","ˈsɑːri","¿perdón?","sári"],["Could you repeat that?","kʊd juː rɪˈpiːt ðæt","¿lo puede repetir?","kud iú ripíit dat"],
    ["More slowly, please","mɔːr ˈsloʊli pliːz","más despacio, por favor","mor slóuli plíis"],["That's right","ðæts raɪt","así es","dats ráit"]
  ]}
];

const PRONKEY = [
  ["ch","Como en «coche». Es el sonido de la <i>g</i> de <i>message</i>.","message &rarr; mésich"],
  ["sh","Como pedir silencio.","extension &rarr; iksténshon"],
  ["j","Aire por la garganta, sin raspar.","hold on &rarr; jóuld an"],
  ["z","Lengua entre los dientes, sin voz.","through &rarr; zrúu"],
  ["v","Labio de abajo contra los dientes de arriba.","available &rarr; avéilabl"],
  ["oh","El cero se lee «óu», como la letra O.","2204 &rarr; tu tu óu for"],
  ["double","Dos cifras iguales se leen <i>double</i>.","22 &rarr; dábl tu"],
  ["r final","Apenas se toca; nunca vibra.","number &rarr; námbar"],
  ["l sola","Al final de sílaba casi no se oye la vocal: «dábl», no «dábel».","double &rarr; dábl"]
];

const VERBS = [
  ["to call","reg","call · calls","called","will call","llamar"],
  ["to answer","reg","answer · answers","answered","will answer","contestar"],
  ["to dial","reg","dial · dials","dialled","will dial","marcar"],
  ["to repeat","reg","repeat · repeats","repeated","will repeat","repetir"],
  ["to book","reg","book · books","booked","will book","reservar"],
  ["to cancel","reg","cancel · cancels","cancelled","will cancel","cancelar"],
  ["to wait","reg","wait · waits","waited","will wait","esperar"],
  ["to spell","irr","spell · spells","spelt","will spell","deletrear"],
  ["to ring","irr","ring · rings","rang","will ring","sonar, llamar"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to hang up","irr","hang up · hangs up","hung up","will hang up","colgar"],
  ["to hear","irr","hear · hears","heard","will hear","oír"]
];

const GRAMMAR = [
  {t:"Al teléfono no se dice I AM", s:"This is David. / It's David.",
   p:"Es la regla más rara y la más útil de esta lección. Para identificarse por teléfono, el inglés usa <b>this is</b> o <b>it's</b>, nunca <i>I am</i>. Y para preguntar quién es al otro lado, tampoco se usa <i>who are you</i>.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["This is David.","<span class='wrong'>I am David.</span>","Soy David."],
     ["Is that Carmen?","<span class='wrong'>Are you Carmen?</span>","¿Es Carmen?"],
     ["Who's calling?","<span class='wrong'>Who are you?</span>","¿De parte de quién?"],
     ["— Is Dr. Reyes there? — Speaking.","—","— ¿Está la doctora? — Con ella."]
   ]},
   aviso:["<i>Speaking</i> lo dice quien contesta","Si preguntan por ti y eres tú, la respuesta de una palabra es <b>Speaking</b>. Decir <span class='wrong'>I am</span> sonaría muy raro."]},

  {t:"Pedir hablar con alguien", s:"Can I speak to…? / Is … there?",
   p:"Tres niveles de la misma petición, del más informal al más formal. Todos llevan la preposición <b>to</b> pegada a <i>speak</i>.",
   chips:[["Is Ana there, please?","¿Está Ana?"],["Can I speak to Dr. Reyes?","¿Puedo hablar con la doctora Reyes?"],["Could I speak to Dr. Reyes, please?","¿Podría hablar con la doctora Reyes?"],["I'm calling about my appointment.","Llamo por mi cita."]],
   aviso:["<i>Speak to</i>, no <i>speak with</i>","Las dos existen, pero al teléfono lo normal es <b>speak to</b>. Y nunca <span class='wrong'>speak Dr. Reyes</span>: la preposición es obligatoria."]},

  {t:"Los phrasal verbs del teléfono", s:"hold on, call back, hang up, put through",
   p:"En la lección de tecnología viste los que se parten (<i>turn it on</i>). Éstos son distintos: la mayoría <b>no lleva objeto</b>, así que no hay nada que partir. Sólo uno, <i>put through</i>, mete a la persona en medio.",
   table:{head:["Phrasal verb","Significa","Ejemplo"], rows:[
     ["hold on","esperar sin colgar","Hold on, please."],
     ["hang up","colgar","She hung up immediately."],
     ["call back","devolver la llamada","I'll call back later."],
     ["put someone through","pasar la llamada","I'll put you through."]
   ]},
   aviso:["<i>Hang up</i> no es colgar el teléfono en un gancho","Significa terminar la llamada. Y ojo con <b>hang up on someone</b>: eso es colgarle a alguien en la cara."]},

  {t:"Dejar un recado", s:"Can I leave a message? / Can you tell her that…?",
   p:"Aquí aparece por primera vez algo que verás mucho más adelante: contar lo que alguien dijo. De momento basta con la fórmula <b>tell + persona + that + frase</b>.",
   table:{head:["Función","Fórmula","Ejemplo"], rows:[
     ["Ofrecer","Can I take a message?","¿Quiere dejar un recado?"],
     ["Pedir","Can I leave a message?","¿Puedo dejar un recado?"],
     ["El recado","Can you tell her that…","Can you tell her that I called?"],
     ["Pedir la llamada","Can you ask her to call me?","¿Le puede decir que me llame?"]
   ]},
   aviso:["<i>Tell</i> lleva persona; <i>say</i>, no","<span class='right'>Tell <b>her</b> that I called.</span> &nbsp;·&nbsp; <span class='right'>Say that I called.</span> &nbsp;&rarr;&nbsp; <span class='wrong'>Say her that I called.</span> es el error clásico."]},

  {t:"Deletrear y leer números", s:"A for America · double two · oh",
   p:"Por teléfono nadie entiende un apellido a la primera. Deletrear es una destreza de supervivencia, y los números tienen sus propias costumbres.",
   table:{head:["Situación","Se dice","Ejemplo"], rows:[
     ["Aclarar una letra","<i>letra</i> for <i>palabra</i>","A for America, D for David"],
     ["Dos cifras iguales","double + cifra","22 &rarr; double two"],
     ["El cero","oh","2204 &rarr; two two oh four"],
     ["Confirmar","Is that right?","— 2264. — Is that right?"]
   ]},
   aviso:["Los números de teléfono van de uno en uno","No se leen como cantidades: 2264 es <b>two two six four</b>, no <span class='wrong'>two thousand two hundred…</span>"]},

  {t:"Pedir que repitan", s:"Sorry? · Could you repeat that?",
   p:"No entender es normal y decirlo es parte de hablar bien. Lo que <b>no</b> hay que hacer es callarse y decir que sí.",
   chips:[["Sorry?","¿Perdón?"],["Could you repeat that, please?","¿Lo puede repetir, por favor?"],["Could you speak more slowly?","¿Puede hablar más despacio?"],["How do you spell that?","¿Cómo se escribe?"],["Sorry, I don't understand.","Perdón, no entiendo."]],
   aviso:["<i>Sorry?</i> con entonación ascendente","Una sola palabra, subiendo la voz al final, es la manera más natural de pedir que repitan. <span class='wrong'>What?</span> a secas suena brusco."]}
];

/* Carmen (A, recepcionista de la clínica) atiende a David (B) */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ ˈdɑːktər ˈreɪəs ˈklɪnɪk haʊ kæn aɪ help juː", p:"gud mórning, dáktar Réyis klínik. jáu kan ái jelp iú",
  b:[["Good morning,","Buenos días,"],["Dr. Reyes' clinic.","clínica de la doctora Reyes."],["How can I help you?","¿En qué le puedo ayudar?"]]},
 {s:"B", ipa:"ɡʊd ˈmɔːrnɪŋ kæn aɪ spiːk tuː ˈdɑːktər ˈreɪəs pliːz", p:"gud mórning. kan ái spíik tu dáktar Réyis, plíis",
  b:[["Good morning.","Buenos días."],["Can I speak to","¿Puedo hablar con"],["Dr. Reyes,","la doctora Reyes,"],["please?","por favor?"]],
  n:"<b>Speak to</b>, con preposición obligatoria. Nunca <span class='wrong'>speak Dr. Reyes</span>."},
 {s:"A", ipa:"aɪm əˈfreɪd ʃiːz wɪð ə ˈpeɪʃnt huːz ˈkɔːlɪŋ", p:"áim afréid shíis uid a péishent. júus kóling",
  b:[["I'm afraid","Me temo que"],["she's with a patient.","está con un paciente."],["Who's calling?","¿De parte de quién?"]],
  n:"<b>Who's calling?</b>, no <span class='wrong'>who are you?</span>, que sonaría casi agresivo."},
 {s:"B", ipa:"ðɪs ɪz ˈdeɪvɪd ænˈdrɑːde aɪm wʌn əv hɜːr ˈpeɪʃnts", p:"dis is Déivid Andráde. áim uán av jer péishents",
  b:[["This is David Andrade.","Le habla David Andrade."],["I'm one of","Soy uno de"],["her patients.","sus pacientes."]],
  n:"Al teléfono, <b>this is</b> para identificarse. <span class='wrong'>I am David</span> es el error de todo hispanohablante."},
 {s:"A", ipa:"wʌn ˈmoʊmənt pliːz aɪl lʊk fɔːr jʊr faɪl kʊd juː spel jʊr ˈsɜːrneɪm", p:"uán móument, plíis. áil luk for iór fáil. kud iú spel iór sérneim",
  b:[["One moment, please.","Un momento, por favor."],["I'll look for your file.","Busco su expediente."],["Could you spell","¿Me podría deletrear"],["your surname?","su apellido?"]]},
 {s:"B", ipa:"ænˈdrɑːde eɪ en diː ɑːr eɪ diː iː", p:"Andráde. éi-en-di-ar-éi-di-íi",
  b:[["Andrade.","Andrade."],["A-N-D-R-A-D-E.","A-N-D-R-A-D-E."]]},
 {s:"A", ipa:"ˈsɑːri kʊd juː rɪˈpiːt ðæt mɔːr ˈsloʊli", p:"sári. kud iú ripíit dat mor slóuli",
  b:[["Sorry?","¿Perdón?"],["Could you repeat that","¿Lo podría repetir"],["more slowly?","más despacio?"]],
  n:"<b>Sorry?</b> subiendo la voz es la forma más natural de pedir que repitan."},
 {s:"B", ipa:"eɪ fɔːr əˈmerɪkə en diː ɑːr eɪ diː iː ænˈdrɑːde", p:"éi for América, en, di, ar, éi, di, íi. Andráde",
  b:[["A for America,","A de América,"],["N, D, R, A, D, E.","N, D, R, A, D, E."],["Andrade.","Andrade."]],
  n:"<b>A for America</b>: la fórmula estándar para aclarar una letra por teléfono."},
 {s:"A", ipa:"θæŋk juː aɪ hæv ɪt ɪz ɪt ˈɜːrdʒənt", p:"zánk iú. ái jav it. is it érchent",
  b:[["Thank you.","Gracias."],["I have it.","Ya lo tengo."],["Is it urgent?","¿Es urgente?"]]},
 {s:"B", ipa:"nɑːt ˈɜːrdʒənt bʌt aɪ fiːl bæd aɪ keɪm bæk frʌm ˈkænədə ɑːn ˈsʌndeɪ wɪð ə ˈterəbl koʊld", p:"nat érchent, bat ái fíil bad. ái kéim bak from Kánada an sándei uid a térabl kóuld",
  b:[["Not urgent,","No es urgente,"],["but I feel bad.","pero me siento mal."],["I came back","Volví"],["from Canada on Sunday","de Canadá el domingo"],["with a terrible cold.","con un resfriado terrible."]]},
 {s:"A", ipa:"wʊd juː laɪk ən əˈpɔɪntmənt ðɪs wiːk", p:"uúd iú láik an apóintment dis uíik",
  b:[["Would you like","¿Quisiera"],["an appointment","una cita"],["this week?","esta semana?"]]},
 {s:"B", ipa:"jes pliːz duː juː hæv ˈeniθɪŋ ɑːn ˈtuːzdeɪ", p:"iés, plíis. du iú jav énizing an túusdei",
  b:[["Yes, please.","Sí, por favor."],["Do you have anything","¿Tiene algo"],["on Tuesday?","el martes?"]]},
 {s:"A", ipa:"ˈtuːzdeɪ ɪz fʊl aɪ hæv ˈwenzdeɪ æt hɑːf pæst ten ɔːr ˈθɜːrzdeɪ æt fɔːr", p:"túusdei is ful. ái jav uénsdei at jaf past ten, or zérsdei at for",
  b:[["Tuesday is full.","El martes está lleno."],["I have Wednesday","Tengo miércoles"],["at half past ten","a las diez y media"],["or Thursday at four.","o jueves a las cuatro."]]},
 {s:"B", ipa:"ˈwenzdeɪ pliːz hɑːf pæst ten ɪz ˈpɜːrfɪkt", p:"uénsdei, plíis. jaf past ten is pérfect",
  b:[["Wednesday, please.","Miércoles, por favor."],["Half past ten","Las diez y media"],["is perfect.","me viene perfecto."]]},
 {s:"A", ipa:"ˈveri ɡʊd wʌts jʊr foʊn ˈnʌmbər", p:"véri gud. uáts iór fóun námbar",
  b:[["Very good.","Muy bien."],["What's your","¿Cuál es su"],["phone number?","número de teléfono?"]]},
 {s:"B", ipa:"ɪts ˈdʌbl tuː sɪks fɔːr oʊ naɪn wʌn θriː", p:"its dábl-tu, siks, for, óu, náin, uán, zri",
  b:[["It's double two,","Es dos dos,"],["six, four,","seis, cuatro,"],["oh, nine,","cero, nueve,"],["one, three.","uno, tres."]],
  n:"<b>Double two</b> para el 22 y <b>oh</b> para el cero. Los números se leen de uno en uno."},
 {s:"A", ipa:"tuː tuː sɪks fɔːr oʊ naɪn wʌn θriː ɪz ðæt raɪt", p:"tu-tu, siks, for, óu, náin, uán, zri. is dat ráit",
  b:[["Two two, six, four,","Dos dos, seis, cuatro,"],["oh, nine, one, three.","cero, nueve, uno, tres."],["Is that right?","¿Es correcto?"]]},
 {s:"B", ipa:"ðæts raɪt", p:"dats ráit",
  b:[["That's right.","Así es."]]},
 {s:"A", ipa:"ˈpɜːrfɪkt ænd ɪf juː kɑːnt kʌm pliːz kɔːl bæk ænd ˈkænsl", p:"pérfect. and if iú kant kam, plíis kol bak and kánsl",
  b:[["Perfect.","Perfecto."],["And if you can't come,","Y si no puede venir,"],["please call back","por favor vuelva a llamar"],["and cancel.","y cancele."]],
  n:"<b>Call back</b> no lleva objeto: no hay nada que meter en medio."},
 {s:"B", ipa:"əv ˈkɔːrs wʌn mɔːr θɪŋ kæn aɪ liːv ə ˈmesɪdʒ fɔːr ðə ˈdɑːktər", p:"av kórs. uán mor zing: kan ái líiv a mésich for da dáktar",
  b:[["Of course.","Por supuesto."],["One more thing:","Una cosa más:"],["can I leave a message","¿puedo dejar un recado"],["for the doctor?","para la doctora?"]]},
 {s:"A", ipa:"əv ˈkɔːrs ɡoʊ əˈhed", p:"av kórs. góu ajéd",
  b:[["Of course.","Por supuesto."],["Go ahead.","Adelante."]]},
 {s:"B", ipa:"kæn juː tel hɜːr ðæt aɪ tʊk ðə ˈmedɪsn frʌm læst jɪr ænd ɪt ˈdɪdnt wɜːrk", p:"kan iú tel jer dat ái tuk da médisn from last íer, and it dídnt uérk",
  b:[["Can you tell her","¿Le puede decir"],["that I took the medicine","que tomé la medicina"],["from last year,","del año pasado,"],["and it didn't work?","y no me hizo efecto?"]],
  n:"<b>Tell her that…</b> El verbo <i>tell</i> siempre lleva a quién. Con <i>say</i> sería <i>say that…</i>, sin persona."},
 {s:"A", ipa:"aɪl tel hɜːr doʊnt teɪk ˈeniθɪŋ els bɪˈfɔːr ˈwenzdeɪ", p:"áil tel jer. dóunt téik énizing els bifór uénsdei",
  b:[["I'll tell her.","Se lo diré."],["Don't take anything else","No tome nada más"],["before Wednesday.","antes del miércoles."]]},
 {s:"B", ipa:"θæŋk juː ˈveri mʌtʃ hæv ə ɡʊd deɪ", p:"zánk iú véri mach. jav a gud déi",
  b:[["Thank you","Muchas"],["very much.","gracias."],["Have a good day.","Que tenga buen día."]]}
];

const LECTURA = {
  titulo: "The phone never stops",
  entradilla: "Cuatro maneras distintas de tratar un teléfono, en una sola familia. El texto usa lo de la Fase 1: <i>this is</i> para identificarse, deletrear, los phrasal verbs <i>call back</i> y <i>hang up</i>, el recado con <i>tell someone that</i> y las fórmulas para pedir repetición. Cada párrafo cambia de persona.",
  parrafos: [
    "I called the clinic on Monday morning, because I came back from Canada with a terrible cold. A woman answered and asked me to spell my surname. I spelt it twice, slowly: nobody writes Andrade correctly the first time.",
    "The receptionist is called Carmen and she is extremely patient. She looked for my file, she found an appointment on Wednesday at half past ten, and she repeated my phone number to me before she hung up. She never sounds tired, and she answers that phone two hundred times a day.",
    "Pablo and Nico don't call anybody. They send messages, or they send a voice note of forty seconds. When the phone rings, they look at it and they wait. \"If it's important, they will call back,\" they say. Kevin is the same: he never answers a call, but he answers a message in four seconds.",
    "My mother is the opposite. She calls, and if nobody answers she calls again. Last week she rang me in Toronto at two in the morning. \"Is everything OK?\" I asked. \"Of course,\" she said. \"I only wanted to hear your voice.\" We talked for an hour."
  ],
  glosario: [
    ["called","kɔːld","llamé, llamó","kold"],
    ["calls","kɔːlz","llama","kols"],
    ["call back","kɔːl bæk","devolver la llamada","kol bak"],
    ["answered","ˈænsərd","contestó","ánsard"],
    ["answers","ˈænsərz","contesta","ánsars"],
    ["asked me to spell","æskt miː tuː spel","me pidió que deletreara","askt mi tu spel"],
    ["spelt","spelt","lo deletreé","spelt"],
    ["writes","raɪts","escribe","ráits"],
    ["looked for","lʊkt fɔːr","buscó","lukt for"],
    ["found","faʊnd","encontró","fáund"],
    ["repeated","rɪˈpiːtɪd","repitió","ripíitid"],
    ["hung up","hʌŋ ʌp","colgó","jang ap"],
    ["sounds","saʊndz","suena","sáunds"],
    ["send","send","mandan","send"],
    ["rings","rɪŋz","suena","rings"],
    ["rang","ræŋ","me llamó","rang"],
    ["wait","weɪt","esperan","uéit"],
    ["say","seɪ","dicen","séi"],
    ["said","sed","dijo","sed"],
    ["asked","æskt","pregunté","askt"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["hear","hɪr","oír","jíar"],
    ["came back","keɪm bæk","volví","kéim bak"],
    ["clinic","ˈklɪnɪk","clínica","klínik"],
    ["cold","koʊld","resfriado","kóuld"],
    ["surname","ˈsɜːrneɪm","apellido","sérneim"],
    ["receptionist","rɪˈsepʃənɪst","recepcionista","risépshonist"],
    ["file","faɪl","expediente","fáil"],
    ["appointment","əˈpɔɪntmənt","cita","apóintment"],
    ["phone","foʊn","teléfono","fóun"],
    ["phone number","foʊn ˈnʌmbər","número de teléfono","fóun námbar"],
    ["messages","ˈmesɪdʒɪz","mensajes","mésichis"],
    ["voice note","vɔɪs noʊt","nota de voz","vóis nóut"],
    ["voice","vɔɪs","voz","vóis"],
    ["OK","ˌoʊˈkeɪ","bien","oukéi"],
    ["talked","tɔːkt","hablamos","tokt"],
    ["message","ˈmesɪdʒ","mensaje","mésich"],
    ["the same","ðə seɪm","igual","da séim"],
    ["an hour","ən ˈaʊər","una hora","an áuar"],
    ["seconds","ˈsekəndz","segundos","sékonds"],
    ["patient","ˈpeɪʃnt","paciente","péishent"],
    ["extremely","ɪkˈstriːmli","sumamente","ikstríimli"],
    ["tired","ˈtaɪərd","cansada","táiard"],
    ["twice","twaɪs","dos veces","tuáis"],
    ["slowly","ˈsloʊli","despacio","slóuli"],
    ["correctly","kəˈrektli","bien, correctamente","koréktli"],
    ["the first time","ðə fɜːrst taɪm","a la primera","da ferst táim"],
    ["two hundred","tuː ˈhʌndrəd","doscientas","tu jándred"],
    ["times","taɪmz","veces","táims"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["anybody","ˈenibɑːdi","a nadie","énibadi"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["important","ɪmˈpɔːrtnt","importante","impórtant"],
    ["sometimes","ˈsʌmtaɪmz","a veces","sámtaims"],
    ["opposite","ˈɑːpəzɪt","lo contrario","ápasit"],
    ["again","əˈɡen","otra vez","aguén"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["last week","læst wiːk","la semana pasada","last uíik"],
    ["Carmen","ˈkɑːrmen","Carmen (nombre)","kármen"],
    ["Andrade","ænˈdrɑːde","Andrade (apellido)","andráde"]
  ],
  preguntas: [
    { q:"Why did David call the clinic?",
      ops:["To cancel an appointment","Because he came back from Canada with a cold","To speak to Carmen"], ok:1,
      pista:"Primer párrafo: la razón va después de <i>because</i>, en la primera frase." },
    { q:"What do Pablo and Nico do when the phone rings?",
      ops:["They look at it and wait","They answer immediately","They turn the phone off"], ok:0,
      pista:"Tercer párrafo: tienen una teoría sobre lo que es importante." },
    { q:"Why did David's mother call at two in the morning?",
      ops:["Because there was an emergency","Because she forgot the time","Because she wanted to hear his voice"], ok:2,
      pista:"Cuarto párrafo: es la última frase del texto." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-23"] = {
  meta: {
    id: "a1-23", nivel: "A1", numero: 23,
    titulo: "Una llamada telefónica",
    descriptor: "Puedo hacer y recibir una llamada sencilla: identificarme, pedir hablar con alguien, deletrear mis datos, concertar una cita y dejar un recado.",
    escena: "Carmen, recepcionista de la clínica & David · una llamada el lunes por la mañana",
    personajeIA: "Carmen, la recepcionista", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
