/* ============================================================
   LECCIÓN A2-13 · Obligación: must y have to
   Reparto: Kevin, que ya hizo el IELTS, explicándole a David las
   reglas del examen. La lectura reúne los seis puntos de la Fase 1
   —must frente a have to, mustn't frente a don't have to, have to
   en todos los tiempos, can't y be allowed to, need y needn't, y el
   lenguaje de los avisos— en él, yo, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El día del examen", items:[
    ["exam","ɪɡˈzæm","examen","igsám"],["candidate","ˈkændɪdət","candidato","kándidat"],
    ["identity card","aɪˈdentəti kɑːrd","documento de identidad","aidéntiti kard"],["registration","ˌredʒɪˈstreɪʃn","inscripción","rechistréishon"],
    ["room","ruːm","sala","rúum"],["desk","desk","pupitre","desk"],
    ["headphones","ˈhedfoʊnz","audífonos","jédfouns"],["break","breɪk","descanso","bréik"],
    ["result","rɪˈzʌlt","resultado","risált"],["band","bænd","banda, puntuación","band"]
  ]},
  {g:"Obligación y permiso", items:[
    ["must","mʌst","tener que","mast"],["mustn't","ˈmʌsnt","no deber, estar prohibido","másnt"],
    ["have to","hæv tuː","tener que","jav tu"],["don't have to","doʊnt hæv tuː","no hace falta","dóunt jav tu"],
    ["had to","hæd tuː","tuve que","jad tu"],["will have to","wɪl hæv tuː","tendré que","uíl jav tu"],
    ["be allowed to","biː əˈlaʊd tuː","estar permitido","bi aláud tu"],["can't","kɑːnt","no se puede","kant"],
    ["need to","niːd tuː","necesitar","níid tu"],["needn't","ˈniːdnt","no hace falta","níidnt"]
  ]},
  {g:"Lo que se puede y no", items:[
    ["to be late","tuː biː leɪt","llegar tarde","tu bi léit"],["to leave early","tuː liːv ˈɜːrli","salir temprano","tu líiv érli"],
    ["to talk","tuː tɔːk","hablar","tu tok"],["to copy","tuː ˈkɑːpi","copiar","tu kápi"],
    ["to switch off","tuː swɪtʃ ɔːf","apagar","tu suich of"],["to hand in","tuː hænd ɪn","entregar","tu jand in"],
    ["to sit","tuː sɪt","sentarse","tu sit"],["to wait outside","tuː weɪt ˌaʊtˈsaɪd","esperar afuera","tu uéit autsáid"],
    ["allowed","əˈlaʊd","permitido","aláud"],["forbidden","fərˈbɪdn","prohibido","forbídn"]
  ]},
  {g:"El lenguaje de los avisos", items:[
    ["No smoking","noʊ ˈsmoʊkɪŋ","prohibido fumar","nóu smóuking"],["No entry","noʊ ˈentri","prohibido el paso","nóu éntri"],
    ["Please do not…","pliːz duː nɑːt","se ruega no…","plíis du nat"],["Candidates must…","ˈkændɪdəts mʌst","los candidatos deben…","kándidats mast"],
    ["Keep quiet","kiːp ˈkwaɪət","guarde silencio","kíip kuáiet"],["Mobile phones are not allowed","ˈmoʊbl foʊnz ɑːr nɑːt əˈlaʊd","no se permiten celulares","móubl fóuns ar nat aláud"],
    ["Strictly","ˈstrɪktli","estrictamente","stríktli"],["in advance","ɪn ədˈvæns","con antelación","in adváns"],
    ["on time","ɑːn taɪm","a la hora","an táim"],["Good luck","ɡʊd lʌk","suerte","gud lak"]
  ]}
];

const PRONKEY = [
  ["t muda","La <i>t</i> de <i>mustn't</i> desaparece al hablar.","mustn't &rarr; másnt"],
  ["ch","Como en «coche».","switch &rarr; suich"],
  ["sh","Como pedir silencio.","registration &rarr; rechistréishon"],
  ["j","Aire por la garganta, sin raspar.","have &rarr; jav"],
  ["z","Lengua entre los dientes, sin voz.","think &rarr; zink"],
  ["v","Labio de abajo contra los dientes de arriba.","advance &rarr; adváns"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","wait &rarr; uéit"],
  ["b muda","La <i>b</i> de <i>forbidden</i> sí suena; la de <i>climb</i>, no.","forbidden &rarr; forbídn"],
  ["r final","Apenas se toca; nunca vibra.","candidate &rarr; kándidat"]
];

const VERBS = [
  ["to allow","reg","allow · allows","allowed","will allow","permitir"],
  ["to register","reg","register · registers","registered","will register","inscribirse"],
  ["to switch off","reg","switch off · switches off","switched off","will switch off","apagar"],
  ["to hand in","reg","hand in · hands in","handed in","will hand in","entregar"],
  ["to check","reg","check · checks","checked","will check","revisar"],
  ["to arrive","reg","arrive · arrives","arrived","will arrive","llegar"],
  ["must","irr","must · must","had to","will have to","tener que"],
  ["to have to","irr","have to · has to","had to","will have to","tener que"],
  ["to leave","irr","leave · leaves","left","will leave","salir, dejar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to sit","irr","sit · sits","sat","will sit","sentarse"],
  ["to keep","irr","keep · keeps","kept","will keep","mantener"]
];

const GRAMMAR = [
  {t:"MUST y HAVE TO", s:"de dónde viene la obligación",
   p:"Las dos significan «tener que», y en la práctica se intercambian casi siempre. La diferencia útil es <b>quién impone la regla</b>: <i>must</i> suena a norma escrita o a decisión tuya; <i>have to</i>, a circunstancia externa.",
   table:{head:["Fórmula","Sensación","Ejemplo"], rows:[
     ["must","norma o convicción propia","Candidates must arrive at eight."],
     ["have to","lo impone la situación","I have to take the bus at six."],
     ["Tercera persona","has to","She has to bring her passport."],
     ["Pregunta","Do I have to…?","Do I have to bring a pen?"]
   ]},
   aviso:["<i>Must</i> no se lleva bien con las preguntas","<span class='wrong'>Must I bring a pen?</span> suena arcaico. Para preguntar se usa siempre <b>Do I have to…?</b>"]},

  {t:"MUSTN'T frente a DON'T HAVE TO", s:"prohibido frente a innecesario",
   p:"Aquí está la trampa más cara de toda la lección. Son <b>negativos de cosas distintas</b>, y confundirlos cambia el sentido por completo.",
   table:{head:["Fórmula","Significa","Ejemplo"], rows:[
     ["mustn't","está prohibido","You mustn't use your phone."],
     ["can't","está prohibido","You can't take your phone in."],
     ["don't have to","no hace falta, pero puedes","You don't have to bring a pen."],
     ["needn't","no hace falta","You needn't arrive before eight."]
   ]},
   aviso:["El error que cambia una regla en su contraria","<i>You <b>mustn't</b> talk</i> = prohibido hablar. <i>You <b>don't have to</b> talk</i> = puedes hablar o no, da igual. El español dice «no tienes que» para las dos y por eso se confunden."]},

  {t:"HAVE TO en todos los tiempos", s:"lo que MUST no puede hacer",
   p:"<b>Must</b> sólo existe en presente: no tiene pasado ni futuro. Cuando hace falta otro tiempo, se cambia a <b>have to</b>, que se conjuga como un verbo normal.",
   table:{head:["Tiempo","Forma","Ejemplo"], rows:[
     ["Presente","must / have to","I must register today."],
     ["Pasado","had to","I had to register in January."],
     ["Futuro","will have to","I'll have to register again."],
     ["Present perfect","have had to","I've had to change the date twice."]
   ]},
   aviso:["No existe <i>musted</i>","<span class='wrong'>I musted go.</span> &nbsp;&rarr;&nbsp; <span class='right'>I had to go.</span> Y en negativo pasado: <i>I didn't have to go</i> = no hacía falta ir."]},

  {t:"BE ALLOWED TO", s:"el permiso, dicho con precisión",
   p:"Cuando quieres hablar de lo que las reglas permiten —y no de lo que tú puedes hacer— la fórmula es <b>be allowed to</b>. Se conjuga con <i>to be</i>, así que sirve para cualquier tiempo.",
   chips:[["You're allowed to take water in.","Se permite entrar con agua."],["We weren't allowed to leave early.","No nos dejaron salir temprano."],["Am I allowed to use a pencil?","¿Se permite usar lápiz?"],["Mobile phones are not allowed.","No se permiten celulares."]],
   aviso:["<i>Can</i> es la versión corta","<i>You can't take it in</i> y <i>you aren't allowed to take it in</i> dicen lo mismo. La segunda es más formal y deja claro que la prohibición es una norma, no una imposibilidad física."]},

  {t:"NEED", s:"el verbo que juega en los dos bandos",
   p:"<b>Need</b> funciona de dos maneras: como verbo normal, con <i>do</i>; o como modal, sin él. La forma normal es la más frecuente hoy.",
   table:{head:["Como verbo normal","Como modal","Español"], rows:[
     ["I need to register.","—","Necesito inscribirme."],
     ["I don't need to bring a pen.","I needn't bring a pen.","No hace falta que lleve bolígrafo."],
     ["Do I need to wait?","Need I wait?","¿Hace falta esperar?"],
     ["She needs to sign it.","—","Tiene que firmarlo."]
   ]},
   aviso:["<i>Needn't</i> suena británico y formal","No es un error, pero si dudas usa <b>don't need to</b> o <b>don't have to</b>: valen en cualquier registro."]},

  {t:"El lenguaje de los avisos", s:"cómo hablan los carteles",
   p:"Los avisos públicos tienen su propia gramática: sin sujeto, sin artículos y con <i>must</i> en tercera persona. Reconocerla es media prueba de IELTS Reading.",
   table:{head:["El cartel dice","Significa"], rows:[
     ["No smoking.","You mustn't smoke here."],
     ["Please do not use mobile phones.","You mustn't use your phone."],
     ["Candidates must switch off all devices.","You have to switch everything off."],
     ["Bags are not allowed in the exam room.","You can't take your bag in."]
   ]},
   aviso:["<i>No + -ing</i> es una prohibición entera","<i>No smoking</i>, <i>no parking</i>, <i>no entry</i>. Sin verbo y sin sujeto, pero es tan tajante como un <i>mustn't</i>."]}
];

/* Kevin (A), que ya hizo el examen, prepara a David (B) */
const DIALOGUE = [
 {s:"A", ipa:"soʊ juː ˈredʒɪstərd fɔːr ˈdʒuːn ɡʊd naʊ ðə ruːlz", p:"sóu, iú réchistard for chúun. gud. náu, da rúuls",
  b:[["So, you registered for June.","Así que te inscribiste para junio."],["Good.","Bien."],["Now, the rules.","Ahora, las reglas."]]},
 {s:"B", ipa:"ɑːr ðer ə lɑːt əv ðem", p:"ar der a lat av dem",
  b:[["Are there","¿Hay"],["a lot of them?","muchas?"]]},
 {s:"A", ipa:"fɔːr ðæt ˈmætər ˈkændɪdəts mʌst əˈraɪv æt eɪt nɑːt eɪt ˈθɜːrti", p:"for dat mátar. kándidats mast aráiv at éit, nat éit-zérti",
  b:[["Four that matter.","Cuatro que importan."],["Candidates must arrive","Los candidatos deben llegar"],["at eight,","a las ocho,"],["not eight thirty.","no a las ocho y media."]],
  n:"<b>Must</b> en un aviso oficial, en tercera persona y sin <i>to</i>."},
 {s:"B", ipa:"eɪt aɪl hæv tuː teɪk ðə bʌs æt sɪks", p:"éit. áil jav tu téik da bas at siks",
  b:[["Eight.","Las ocho."],["I'll have to take the bus","Voy a tener que tomar el bus"],["at six.","a las seis."]],
  n:"<b>Must</b> no tiene futuro: para eso está <i>will have to</i>."},
 {s:"A", ipa:"juː wɪl ˈsekənd juː mʌst brɪŋ ðə seɪm aɪˈdentəti kɑːrd juː juːzd tuː ˈredʒɪstər", p:"iú uíl. sékond: iú mast bring da séim aidéntiti kard iú iúusd tu réchistar",
  b:[["You will.","Sí."],["Second:","Segundo:"],["you must bring the same identity card","debes traer el mismo documento"],["you used to register.","con el que te inscribiste."]]},
 {s:"B", ipa:"wʌt ɪf aɪ brɪŋ maɪ ˈpæspɔːrt ɪnˈsted", p:"uát if ái bring mái pásport instéd",
  b:[["What if I bring","¿Y si llevo"],["my passport instead?","el pasaporte en vez de eso?"]]},
 {s:"A", ipa:"ðen juː kɑːnt ɡoʊ ɪn ɪt hæz tuː biː ðə seɪm wʌn ɪts nɑːt ə səˈdʒestʃən", p:"den iú kant góu in. it jas tu bi da séim uán. its nat a sachéschon",
  b:[["Then you can't go in.","Entonces no entras."],["It has to be the same one.","Tiene que ser el mismo."],["It's not a suggestion.","No es una sugerencia."]]},
 {s:"B", ipa:"ˌʌndərˈstʊd wʌt əˈbaʊt ðə foʊn", p:"anderstúd. uát abáut da fóun",
  b:[["Understood.","Entendido."],["What about the phone?","¿Y el teléfono?"]]},
 {s:"A", ipa:"juː mʌst swɪtʃ ɪt ɔːf ænd liːv ɪt ˌaʊtˈsaɪd ˈmoʊbl foʊnz ɑːr nɑːt əˈlaʊd ɪn ðə ruːm", p:"iú mast suich it of and líiv it autsáid. móubl fóuns ar nat aláud in da rúum",
  b:[["You must switch it off","Debes apagarlo"],["and leave it outside.","y dejarlo afuera."],["Mobile phones are not allowed","No se permiten celulares"],["in the room.","en la sala."]],
  n:"<b>Are not allowed</b>: la prohibición dicha como norma, no como imposibilidad."},
 {s:"B", ipa:"ænd ɪf aɪ fərˈɡet ɪt ɪn maɪ ˈpɑːkɪt", p:"and if ái forguét it in mái pákit",
  b:[["And if I forget it","¿Y si se me olvida"],["in my pocket?","en el bolsillo?"]]},
 {s:"A", ipa:"ðen juː liːv ənˈfɪnɪʃt ðæts ðə wʌn ruːl juː ˈmʌsnt breɪk", p:"den iú líiv anfínisht. dats da uán rúul iú másnt bréik",
  b:[["Then you leave unfinished.","Entonces sales sin terminar."],["That's the one rule","Esa es la única regla"],["you mustn't break.","que no puedes romper."]],
  n:"<b>Mustn't</b>: está prohibido. Con <i>don't have to</i> significaría que da igual."},
 {s:"B", ipa:"ænd ðə pen duː aɪ hæv tuː brɪŋ wʌn", p:"and da pen. du ái jav tu bring uán",
  b:[["And the pen.","¿Y el bolígrafo?"],["Do I have to bring one?","¿Tengo que llevar uno?"]],
  n:"Para preguntar por la obligación se usa <b>Do I have to…?</b>, no <span class='wrong'>Must I…?</span>"},
 {s:"A", ipa:"noʊ juː doʊnt hæv tuː ðeɪ ɡɪv juː ˈevriθɪŋ juː niːdnt brɪŋ ˈeniθɪŋ æt ɔːl", p:"nóu, iú dóunt jav tu. déi guiv iú évrizing. iú níidnt bring énizing at ol",
  b:[["No, you don't have to.","No, no hace falta."],["They give you everything.","Te dan todo."],["You needn't bring anything","No necesitas traer nada"],["at all.","en absoluto."]],
  n:"<b>Don't have to</b> y <b>needn't</b> dicen lo mismo: no hace falta. No es una prohibición."},
 {s:"B", ipa:"soʊ aɪ ˈmʌsnt brɪŋ maɪ foʊn bʌt aɪ doʊnt hæv tuː brɪŋ ə pen", p:"sóu ái másnt bring mái fóun, bat ái dóunt jav tu bring a pen",
  b:[["So I mustn't bring my phone,","Entonces no debo traer el teléfono,"],["but I don't have to bring a pen.","pero no hace falta que traiga bolígrafo."]]},
 {s:"A", ipa:"ðæts ɪɡˈzæktli ɪt ˈnaɪnti ˈpɜːrsnt əv ˈpiːpl ɡet ðæt rɔːŋ", p:"dats igsáktli it. náinti pérsnt av píipl guet dat rong",
  b:[["That's exactly it.","Exacto."],["Ninety per cent of people","El noventa por ciento"],["get that wrong.","lo confunde."]]},
 {s:"B", ipa:"æm aɪ əˈlaʊd tuː teɪk ˈwɔːtər ɪn", p:"am ái aláud tu téik uóter in",
  b:[["Am I allowed","¿Se permite"],["to take water in?","entrar con agua?"]]},
 {s:"A", ipa:"jes ɪn ə klɪr ˈbɑːtl wɪðˈaʊt ə ˈleɪbl ðeɪ ɑːr ˈveri ˈstrɪktli əˈbaʊt ðæt", p:"iés, in a klíar bátl uidáut a léibl. déi ar véri stríkt abáut dat",
  b:[["Yes, in a clear bottle","Sí, en botella transparente"],["without a label.","sin etiqueta."],["They are very strict","Son muy estrictos"],["about that.","con eso."]]},
 {s:"B", ipa:"ə ˈbɑːtl wɪðˈaʊt ə ˈleɪbl ðæts spəˈsɪfɪk", p:"a bátl uidáut a léibl. dats spisífik",
  b:[["A bottle without a label.","Una botella sin etiqueta."],["That's specific.","Qué específico."]]},
 {s:"A", ipa:"aɪ hæd tuː draɪ maɪn ɪn ðə bæθruːm ɪn ˌnoʊˈvembər aɪ ˈlɜːrnd", p:"ái jad tu drái máin in da bázrum in nouvémbar. ái lernd",
  b:[["I had to dry mine","Yo tuve que secar la mía"],["in the bathroom","en el baño"],["in November.","en noviembre."],["I learned.","Aprendí."]],
  n:"<b>Had to</b>: el pasado de la obligación. <i>Must</i> no tiene pasado."},
 {s:"B", ipa:"wʌz ðer ˈeniθɪŋ els juː hæd tuː duː", p:"uás der énizing els iú jad tu du",
  b:[["Was there anything else","¿Hubo algo más"],["you had to do?","que tuvieras que hacer?"]]},
 {s:"A", ipa:"aɪ hæd tuː weɪt ˌaʊtˈsaɪd fɔːr ˈfɔːrti ˈmɪnɪts bʌt aɪ ˈdɪdnt hæv tuː peɪ əˈɡen", p:"ái jad tu uéit autsáid for fórti mínits, bat ái dídnt jav tu péi aguén",
  b:[["I had to wait outside","Tuve que esperar afuera"],["for forty minutes,","cuarenta minutos,"],["but I didn't have to pay again.","pero no tuve que pagar otra vez."]]},
 {s:"B", ipa:"smɔːl ˈmɜːrsiz ˈeniθɪŋ els", p:"smóol mérsis. énizing els",
  b:[["Small mercies.","Menos mal."],["Anything else?","¿Algo más?"]]},
 {s:"A", ipa:"wʌn θɪŋ juː mʌst sliːp ðə naɪt bɪˈfɔːr ˈevribɑːdi θɪŋks ðæt ruːl ɪz ˈɑːpʃənl", p:"uán zing: iú mast slíip da náit bifór. évribadi zinks dat rúul is ápshonl",
  b:[["One thing:","Una cosa:"],["you must sleep the night before.","tienes que dormir la noche anterior."],["Everybody thinks that rule","Todo el mundo cree que esa regla"],["is optional.","es opcional."]]},
 {s:"B", ipa:"ɪts nɑːt ˈɑːpʃənl aɪl raɪt ðæt daʊn wɪð ðə ˈʌðər fɔːr", p:"its nat ápshonl. áil ráit dat dáun uid di áder for",
  b:[["It's not optional.","No es opcional."],["I'll write that down","Lo apunto"],["with the other four.","con las otras cuatro."]]}
];

const LECTURA = {
  titulo: "The rules that matter",
  entradilla: "Lo que Kevin aprendió haciendo el examen, resumido para David. El texto pone a trabajar lo de la Fase 1: <i>must</i> frente a <i>have to</i>, la diferencia crítica entre <i>mustn't</i> y <i>don't have to</i>, <i>had to</i> como pasado, <i>be allowed to</i> y el lenguaje de los carteles. Cada párrafo cambia de persona.",
  parrafos: [
    "Kevin took the exam in November, so he knows the rules. Candidates must arrive at eight, and they must bring the same identity card they used to register. He says four rules matter and the rest are details.",
    "I mustn't take my phone into the room; that one is absolute. But I don't have to bring a pen, because they give you everything. Ninety per cent of people confuse those two sentences, and in Spanish they sound exactly the same.",
    "Water is allowed, but only in a clear bottle without a label. Kevin had to dry his in the bathroom in November because he didn't know. He also had to wait outside for forty minutes, although he didn't have to pay again.",
    "We are not allowed to leave early and we mustn't talk to anybody in the room. The last rule isn't written anywhere: you must sleep the night before. Everybody thinks that one is optional, and everybody is wrong."
  ],
  glosario: [
    ["took","tʊk","hizo","tuk"],
    ["knows","noʊz","conoce","nóus"],
    ["must arrive","mʌst əˈraɪv","deben llegar","mast aráiv"],
    ["must bring","mʌst brɪŋ","deben traer","mast bring"],
    ["must sleep","mʌst sliːp","tienes que dormir","mast slíip"],
    ["mustn't take","ˈmʌsnt teɪk","no debo llevar","másnt téik"],
    ["mustn't talk","ˈmʌsnt tɔːk","no debemos hablar","másnt tok"],
    ["don't have to","doʊnt hæv tuː","no hace falta que","dóunt jav tu"],
    ["didn't have to","ˈdɪdnt hæv tuː","no tuvo que","dídnt jav tu"],
    ["had to","hæd tuː","tuvo que","jad tu"],
    ["is allowed","ɪz əˈlaʊd","se permite","is aláud"],
    ["are not allowed","ɑːr nɑːt əˈlaʊd","no se nos permite","ar nat aláud"],
    ["used to register","juːzd tuː ˈredʒɪstər","con el que se inscribieron","iúusd tu réchistar"],
    ["give","ɡɪv","dan","guiv"],
    ["says","sez","dice","ses"],
    ["confuse","kənˈfjuːz","confunden","konfiús"],
    ["sound","saʊnd","suenan","sáund"],
    ["dry","draɪ","secar","drái"],
    ["wait","weɪt","esperar","uéit"],
    ["pay","peɪ","pagar","péi"],
    ["leave early","liːv ˈɜːrli","salir temprano","líiv érli"],
    ["thinks","θɪŋks","cree","zinks"],
    ["exam","ɪɡˈzæm","examen","igsám"],
    ["rules","ruːlz","reglas","rúuls"],
    ["candidates","ˈkændɪdəts","candidatos","kándidats"],
    ["identity card","aɪˈdentəti kɑːrd","documento de identidad","aidéntiti kard"],
    ["phone","foʊn","teléfono","fóun"],
    ["room","ruːm","sala","rúum"],
    ["pen","pen","bolígrafo","pen"],
    ["water","ˈwɔːtər","agua","uóter"],
    ["bottle","ˈbɑːtl","botella","bátl"],
    ["label","ˈleɪbl","etiqueta","léibl"],
    ["bathroom","ˈbæθruːm","baño","bázrum"],
    ["details","ˈdiːteɪlz","detalles","díiteils"],
    ["sentences","ˈsentənsɪz","frases","séntensis"],
    ["Spanish","ˈspænɪʃ","español","spánish"],
    ["clear","klɪr","transparente","klíar"],
    ["absolute","ˈæbsəluːt","absoluta","ábsaluut"],
    ["optional","ˈɑːpʃənl","opcional","ápshonl"],
    ["wrong","rɔːŋ","equivocado","rong"],
    ["written","ˈrɪtn","escrita","rítn"],
    ["anywhere","ˈeniwer","en ningún sitio","éniuer"],
    ["anybody","ˈenibɑːdi","nadie","énibadi"],
    ["everybody","ˈevribɑːdi","todo el mundo","évribadi"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["ninety per cent","ˈnaɪnti pər sent","el noventa por ciento","náinti per sent"],
    ["forty minutes","ˈfɔːrti ˈmɪnɪts","cuarenta minutos","fórti mínits"],
    ["the night before","ðə naɪt bɪˈfɔːr","la noche anterior","da náit bifór"],
    ["November","noʊˈvembər","noviembre","nouvémbar"],
    ["although","ɔːlˈðoʊ","aunque","oldóu"],
    ["exactly","ɪɡˈzæktli","exactamente","igsáktli"],
    ["the rest","ðə rest","el resto","da rest"],
    ["the same","ðə seɪm","el mismo","da séim"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["matter","ˈmætər","importar","mátar"],
    ["into","ˈɪntuː","dentro de","íntu"],
    ["last","læst","durar; última","last"],
    ["rule","ruːl","norma","rúul"]
  ],
  preguntas: [
    { q:"What must candidates bring?",
      ops:["A pen and paper","The same identity card they used to register","A bottle with a label"], ok:1,
      pista:"Primer párrafo. Dos de las opciones son justo lo contrario de lo que dice el texto." },
    { q:"What is the difference that ninety per cent of people confuse?",
      ops:["Mustn't and don't have to","Must and should","Can and could"], ok:0,
      pista:"Segundo párrafo: en español las dos frases suenan igual." },
    { q:"Which rule isn't written anywhere?",
      ops:["Arriving at eight","Leaving the phone outside","Sleeping the night before"], ok:2,
      pista:"Cuarto párrafo, última frase. Y todo el mundo la ignora." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-13"] = {
  meta: {
    id: "a2-13", nivel: "A2", numero: 13,
    titulo: "Obligación: must y have to",
    descriptor: "Puedo entender y explicar normas: lo que es obligatorio, lo que está prohibido y lo que simplemente no hace falta.",
    escena: "Kevin & David · el patio del instituto, repasando las reglas del examen",
    personajeIA: "Kevin", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
