/* ============================================================
   LECCIÓN A2-17 · Entrevista de trabajo básica
   Reparto: Miss Fuentes, jefa de recepción del Hotel Maya, que
   entrevista a David para el turno de tarde. La lectura reúne los
   seis puntos de la Fase 1 —used to, be used to, since y as, las
   preposiciones fijas del trabajo, job frente a work y la pregunta
   indirecta— en yo, ella, él, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La entrevista", items:[
    ["an interview","ən ˈɪntərvjuː","una entrevista","an íntarviu"],
    ["a candidate","ə ˈkændɪdət","un candidato","a kándidat"],
    ["a position","ə pəˈzɪʃn","un puesto","a posíshon"],
    ["a shift","ə ʃɪft","un turno","a shift"],
    ["experience","ɪkˈspɪriəns","experiencia","ikspírians"],
    ["a reference","ə ˈrefrəns","una referencia","a réfrens"],
    ["a strength","ə streŋθ","una fortaleza","a strengz"],
    ["a weakness","ə ˈwiːknəs","una debilidad","a uíiknes"],
    ["a skill","ə skɪl","una destreza","a skil"],
    ["training","ˈtreɪnɪŋ","formación","tréining"]
  ]},
  {g:"Lo que hacías antes", items:[
    ["used to","ˈjuːst tuː","antes solía","iúust tu"],
    ["to be used to","tuː biː ˈjuːst tuː","estar acostumbrado a","tu bi iúust tu"],
    ["to get used to","tuː ɡet ˈjuːst tuː","acostumbrarse a","tu guet iúust tu"],
    ["a habit","ə ˈhæbɪt","una costumbre","a jábit"],
    ["back then","bæk ðen","por aquel entonces","bak den"],
    ["at that time","æt ðæt taɪm","en aquella época","at dat táim"],
    ["no longer","noʊ ˈlɔːŋɡər","ya no","nóu lóngar"],
    ["these days","ðiːz deɪz","hoy en día","díis déis"],
    ["a summer job","ə ˈsʌmər dʒɑːb","un trabajo de verano","a sámar chab"],
    ["part-time","ˌpɑːrt ˈtaɪm","a tiempo parcial","part táim"]
  ]},
  {g:"El puesto por dentro", items:[
    ["to apply for","tuː əˈplaɪ fɔːr","solicitar","tu aplái for"],
    ["responsible for","rɪˈspɑːnsəbl fɔːr","responsable de","rispánsabl for"],
    ["to deal with","tuː diːl wɪð","ocuparse de","tu díil uid"],
    ["to report to","tuː rɪˈpɔːrt tuː","depender de","tu ripórt tu"],
    ["in charge of","ɪn tʃɑːrdʒ əv","a cargo de","in charch av"],
    ["a guest","ə ɡest","un huésped","a guest"],
    ["a complaint","ə kəmˈpleɪnt","una queja","a kompléint"],
    ["a booking","ə ˈbʊkɪŋ","una reserva","a búking"],
    ["the front desk","ðə frʌnt desk","la recepción","da frant desk"],
    ["a wage","ə weɪdʒ","un sueldo","a uéich"]
  ]},
  {g:"Dar razones", items:[
    ["since","sɪns","ya que","sins"],
    ["as","æz","como, puesto que","as"],
    ["that's why","ðæts waɪ","por eso","dats uái"],
    ["due to","duː tuː","debido a","du tu"],
    ["the reason","ðə ˈriːzn","la razón","da ríisn"],
    ["mainly","ˈmeɪnli","principalmente","méinli"],
    ["in fact","ɪn fækt","de hecho","in fakt"],
    ["for example","fɔːr ɪɡˈzæmpl","por ejemplo","for igsámpl"],
    ["I'd say","aɪd seɪ","yo diría","áid séi"],
    ["I suppose","aɪ səˈpoʊz","supongo","ái sapóus"]
  ]}
];

const PRONKEY = [
  ["used to","Aquí <i>used</i> pierde la <i>z</i> y suena con <i>s</i>.","used to &rarr; iúust tu"],
  ["dʒ","Como la <i>ch</i> pero con voz.","wage &rarr; uéich"],
  ["ŋθ","Dos consonantes seguidas al final, sin vocal en medio.","strength &rarr; strengz"],
  ["sh","Como pedir silencio.","shift &rarr; shift"],
  ["s inicial","Nunca pongas una <i>e</i> delante.","skill &rarr; skil, no «eskil»"],
  ["ea corta","En <i>weakness</i> la <i>ea</i> es larga; en <i>deal</i> también.","deal &rarr; díil"],
  ["-tion","Siempre suena <i>shon</i>.","position &rarr; posíshon"],
  ["acento a la segunda","<i>Experience</i> y <i>example</i> cargan en la segunda sílaba.","example &rarr; igsámpl"],
  ["w","Labios redondos, como la <i>u</i> de «hueso».","weakness &rarr; uíiknes"]
];

const VERBS = [
  ["to apply","reg","apply · applies","applied","will apply","solicitar"],
  ["to manage","reg","manage · manages","managed","will manage","gestionar"],
  ["to handle","reg","handle · handles","handled","will handle","manejar"],
  ["to answer","reg","answer · answers","answered","will answer","contestar"],
  ["to train","reg","train · trains","trained","will train","formar"],
  ["to solve","reg","solve · solves","solved","will solve","resolver"],
  ["to check","reg","check · checks","checked","will check","comprobar"],
  ["to start","reg","start · starts","started","will start","empezar"],
  ["to deal with","irr","deal with · deals with","dealt with","will deal with","ocuparse de"],
  ["to learn","irr","learn · learns","learnt","will learn","aprender"],
  ["to understand","irr","understand · understands","understood","will understand","entender"],
  ["to meet","irr","meet · meets","met","will meet","atender, conocer"]
];

const GRAMMAR = [
  {t:"USED TO", s:"lo que hacías antes y ya no",
   p:"Una fórmula sola para todo el pasado repetido que ya se acabó. Detrás va <b>el verbo base</b>. Y la trampa está en la negativa y la pregunta: ahí la <i>d</i> desaparece, porque se la lleva el auxiliar <i>did</i>.",
   table:{head:["Forma","Estructura","Ejemplo"], rows:[
     ["Afirmativa","used to + base","I used to work in a shop."],
     ["Negativa","didn't use to + base","I didn't use to like coffee."],
     ["Pregunta","Did … use to + base?","Did you use to study at night?"],
     ["<span class='wrong'>Mal</span>","—","<span class='wrong'>I didn't used to work.</span>"]
   ]},
   aviso:["No sirve para una sola vez","<i>Used to</i> exige repetición. Para algo que pasó una vez, pasado simple: <span class='right'>I went to Toronto last year</span>, no <span class='wrong'>I used to go to Toronto last year</span>."]},

  {t:"BE USED TO frente a USED TO", s:"una sola letra cambia el sentido",
   p:"Se parecen tanto que se confunden a diario, y significan cosas opuestas. <b>Used to + verbo base</b> habla del pasado. <b>Be used to + -ing</b> habla de estar acostumbrado, ahora.",
   table:{head:["Fórmula","Significa","Ejemplo"], rows:[
     ["used to + base","antes sí, ahora no","I used to work at night."],
     ["be used to + -ing","estoy acostumbrado","I'm used to working at night."],
     ["get used to + -ing","me estoy acostumbrando","I'm getting used to it."],
     ["be used to + sustantivo","acostumbrado a algo","She's used to guests."]
   ]},
   aviso:["El truco para no fallar","Si delante hay un verbo <i>to be</i>, detrás va <i>-ing</i>. Si no lo hay, detrás va el verbo base. <span class='wrong'>I'm used to work at night</span> quiere decir otra cosa."]},

  {t:"SINCE y AS para dar razones", s:"cuando la causa ya se sabe",
   p:"Ya usabas <i>because</i>. En la entrevista suenan mejor <b>since</b> y <b>as</b>: presentan la razón como algo ya sabido y suelen ir <b>al principio</b> de la frase.",
   chips:[["Since I live nearby, I can start early.","Como vivo cerca, puedo empezar temprano."],["As the hotel is small, we all help.","Como el hotel es pequeño, ayudamos todos."],["I speak English; that's why I applied.","Hablo inglés; por eso lo solicité."],["Due to the shift, I study in the morning.","Debido al turno, estudio por la mañana."]],
   aviso:["<i>Due to</i> no lleva frase detrás","Detrás de <i>due to</i> va un sustantivo: <span class='right'>due to the rain</span>. Para una frase entera, <i>because</i>: <span class='wrong'>due to it rained</span>."]},

  {t:"Las preposiciones fijas del trabajo", s:"apply for, responsible for, report to",
   p:"En el mundo laboral cada verbo arrastra su preposición y no admite otra. No hay lógica que memorizar: se aprenden en bloque, como una sola palabra.",
   table:{head:["Fórmula","Español","Ejemplo"], rows:[
     ["apply for","solicitar","I applied for the evening shift."],
     ["responsible for","responsable de","She's responsible for bookings."],
     ["in charge of","a cargo de","He's in charge of the front desk."],
     ["deal with","ocuparse de","I deal with complaints."],
     ["report to","depender de","You report to Miss Fuentes."]
   ]},
   aviso:["Dos que se cuelan mucho","<span class='wrong'>apply to a job</span> &rarr; <span class='right'>apply for a job</span>; <span class='wrong'>responsible of</span> &rarr; <span class='right'>responsible for</span>."]},

  {t:"JOB o WORK", s:"uno se cuenta y el otro no",
   p:"Las dos se traducen «trabajo», pero <b>job</b> es un puesto concreto y se cuenta; <b>work</b> es la actividad y no admite ni <i>a</i> ni plural. Lo mismo pasa con otras palabras de la entrevista.",
   table:{head:["Se cuenta","No se cuenta","Ejemplo"], rows:[
     ["a job, two jobs","work","I have two jobs. / I have a lot of work."],
     ["a shift","training","I did three shifts. / We had training."],
     ["a suggestion","advice","He gave me advice."],
     ["a fact","information","I need more information."],
     ["—","experience","I have experience with guests."]
   ]},
   aviso:["Nunca en plural","<span class='wrong'>I have many experiences in hotels.</span> &rarr; <span class='right'>I have a lot of experience in hotels.</span> Con plural, <i>experiences</i> significa vivencias."]},

  {t:"La pregunta indirecta", s:"Could you tell me what the hours are?",
   p:"Es el recurso más educado para preguntar, y el que más se falla: al meter la pregunta dentro de otra frase, <b>se deshace la inversión</b> y el verbo vuelve detrás del sujeto.",
   table:{head:["Directa","Indirecta","Español"], rows:[
     ["What are the hours?","Could you tell me what the hours are?","¿Cuál es el horario?"],
     ["When does it start?","Could I ask when it starts?","¿Cuándo empieza?"],
     ["Is there training?","I'd like to know if there is training.","¿Hay formación?"],
     ["Do I work weekends?","Could you tell me if I work weekends?","¿Trabajo los fines de semana?"]
   ]},
   aviso:["Sin <i>do</i> y sin cambiar el orden","<span class='wrong'>Could you tell me when does it start?</span> &rarr; <span class='right'>…when it starts?</span> Y si no hay palabra interrogativa, entra <i>if</i>."]}
];

/* Miss Fuentes (A) y David (B) en la recepción del Hotel Maya */
const DIALOGUE = [
 {s:"A", ipa:"sɪt daʊn juː əˈplaɪd fɔːr ðə ˈiːvnɪŋ ʃɪft raɪt", p:"sit dáun. iú apláid for di íivning shift, ráit",
  b:[["Sit down.","Siéntate."],["You applied for the evening shift,","Solicitaste el turno de tarde,"],["right?","¿verdad?"]],
  n:"<b>Apply for</b>, nunca <i>apply to</i>, cuando hablamos del puesto."},
 {s:"B", ipa:"jes fɔːr ˈtuːzdeɪ tuː ˈsætərdeɪ", p:"yes, for túusdei tu sáterdei",
  b:[["Yes, for Tuesday to Saturday.","Sí, de martes a sábado."]]},
 {s:"A", ipa:"tel miː əˈbaʊt jʊr wɜːrk ˌekˈspɪriəns", p:"tel mi abáut iór uérk ikspírians",
  b:[["Tell me about","Háblame de"],["your work experience.","tu experiencia laboral."]]},
 {s:"B", ipa:"aɪ juːst tuː wɜːrk ɪn maɪ ˈʌŋklz ʃɑːp ɑːn ˈsætərdeɪz", p:"ái iúust tu uérk in mái ánkls shap an sáterdeis",
  b:[["I used to work","Antes trabajaba"],["in my uncle's shop","en la tienda de mi tío"],["on Saturdays.","los sábados."]],
  n:"<b>Used to</b> + verbo base: repetido en el pasado y terminado."},
 {s:"A", ipa:"ænd juː doʊnt ˈenimɔːr", p:"and iú dóunt énimor",
  b:[["And you don't anymore?","¿Y ya no?"]]},
 {s:"B", ipa:"hiː kloʊzd ɪt lɑːst jɪr aɪ dɪdnt juːs tuː laɪk ðə ˈmɔːrnɪŋz bʌt aɪ lɜːrnt ə lɑːt", p:"ji klóusd it last íer. ái dídnt iúus tu láik da mórnings, bat ái lernt a lat",
  b:[["He closed it last year.","La cerró el año pasado."],["I didn't use to like the mornings,","No me gustaban las mañanas,"],["but I learnt a lot.","pero aprendí mucho."]],
  n:"En negativa se dice <b>didn't use to</b>, sin la <i>d</i>."},
 {s:"A", ipa:"wʌt dɪd juː diːl wɪð ðer", p:"uát did iú díil uid der",
  b:[["What did you deal with there?","¿De qué te ocupabas allí?"]]},
 {s:"B", ipa:"ˈmeɪnli kəmˈpleɪnts aɪ wɑːz ɪn tʃɑːrdʒ əv ðə fəʊn æz wel", p:"méinli kompléints. ái uás in charch av da fóun as uél",
  b:[["Mainly complaints.","Sobre todo quejas."],["I was in charge of the phone","Estaba a cargo del teléfono"],["as well.","también."]]},
 {s:"A", ipa:"ɡʊd ɑːr juː juːst tuː ˈwɜːrkɪŋ leɪt", p:"gud. ar iú iúust tu uérking léit",
  b:[["Good.","Bien."],["Are you used to working late?","¿Estás acostumbrado a trabajar hasta tarde?"]],
  n:"<b>Be used to</b> + <i>-ing</i>: estar acostumbrado, ahora."},
 {s:"B", ipa:"aɪm ˈɡetɪŋ juːst tuː ɪt aɪ stʌdi ɪn ðə ˈmɔːrnɪŋ naʊ", p:"áim guéting iúust tu it. ái stádi in da mórning náu",
  b:[["I'm getting used to it.","Me estoy acostumbrando."],["I study in the morning now.","Ahora estudio por la mañana."]]},
 {s:"A", ipa:"sɪns juː stʌdi ˈɪŋɡlɪʃ juː kæn ɑːnsər ðə ˈforən ɡests", p:"sins iú stádi ínglish, iú kan ánsar da fóren guests",
  b:[["Since you study English,","Como estudias inglés,"],["you can answer","puedes atender"],["the foreign guests.","a los huéspedes extranjeros."]],
  n:"<b>Since</b> al principio = «como», dando por sabida la razón."},
 {s:"B", ipa:"ðæts waɪ aɪ əˈplaɪd hɪr ænd nɑːt ɪn ə ʃɑːp", p:"dats uái ái apláid jíer and nat in a shap",
  b:[["That's why I applied here","Por eso lo solicité aquí"],["and not in a shop.","y no en una tienda."]]},
 {s:"A", ipa:"ˈɑːnɪst tel miː wʌn streŋθ ænd wʌn ˈwiːknəs", p:"ánist. tel mi uán strengz and uán uíiknes",
  b:[["Honest.","Sincero."],["Tell me one strength","Dime una fortaleza"],["and one weakness.","y una debilidad."]]},
 {s:"B", ipa:"aɪ stei kɑːm wɪð ˈæŋɡri ˈpiːpl aɪd seɪ ðæts ðə streŋθ", p:"ái stéi kaam uid ángri píipl. áid séi dats da strengz",
  b:[["I stay calm","Me mantengo tranquilo"],["with angry people.","con la gente enfadada."],["I'd say that's the strength.","Diría que esa es la fortaleza."]]},
 {s:"A", ipa:"ænd ðə ˈwiːknəs", p:"and da uíiknes",
  b:[["And the weakness?","¿Y la debilidad?"]]},
 {s:"B", ipa:"aɪ tɔːk tuː mʌtʃ wen aɪm ˈnɜːrvəs aɪm ˈwɜːrkɪŋ ɑːn ɪt", p:"ái tok tu mach uén áim nérvas. áim uérking an it",
  b:[["I talk too much","Hablo demasiado"],["when I'm nervous.","cuando estoy nervioso."],["I'm working on it.","Estoy trabajando en ello."]]},
 {s:"A", ipa:"æt ðə frʌnt desk ðæts nɑːt ðə wɜːrst wʌn", p:"at da frant desk, dats nat da uérst uán",
  b:[["At the front desk,","En recepción,"],["that's not the worst one.","esa no es la peor."]]},
 {s:"B", ipa:"kʊd aɪ ɑːsk hu aɪ rɪˈpɔːrt tuː", p:"kud ái ask ju ái ripórt tu",
  b:[["Could I ask","¿Puedo preguntar"],["who I report to?","de quién dependo?"]],
  n:"Pregunta indirecta: <i>who I report to</i>, no <i>who do I report to</i>."},
 {s:"A", ipa:"tuː miː ænd aɪm rɪˈspɑːnsəbl fɔːr ðə ˈbʊkɪŋz soʊ wiːl siː iːtʃ ˈʌðər ˈevri deɪ", p:"tu mi. and áim rispánsabl for da búkings, sóu uíil síi íich ádar évri déi",
  b:[["To me.","De mí."],["And I'm responsible for the bookings,","Y yo soy responsable de las reservas,"],["so we'll see each other","así que nos veremos"],["every day.","cada día."]]},
 {s:"B", ipa:"kʊd juː tel miː wen ðə ʃɪft stɑːrts", p:"kud iú tel mi uén da shift starts",
  b:[["Could you tell me","¿Podría decirme"],["when the shift starts?","cuándo empieza el turno?"]],
  n:"Otra vez sin <i>does</i> y con el verbo detrás del sujeto: <i>when the shift starts</i>."},
 {s:"A", ipa:"tuː ˈθɜːrti ˈʌntɪl ten ænd ðerz wʌn wiːk əv ˈtreɪnɪŋ ˈbiːfɔːr", p:"tu zérti antíl ten. and ders uán uíik av tréining bifór",
  b:[["Two thirty until ten.","De dos y media a diez."],["And there's one week of training","Y hay una semana de formación"],["before.","antes."]]},
 {s:"B", ipa:"ɪz ðə weɪdʒ ðə seɪm ˈdʊrɪŋ ðə ˈtreɪnɪŋ", p:"is da uéich da séim dúring da tréining",
  b:[["Is the wage the same","¿El sueldo es el mismo"],["during the training?","durante la formación?"]]},
 {s:"A", ipa:"ɪt ɪz wiː doʊnt həv mʌtʃ wɜːrk ɪn æˈprɪl soʊ ɪts ə ɡʊd mʌnθ tuː lɜːrn", p:"it is. uii dóunt jav mach uérk in éipril, sóu its a gud manz tu lern",
  b:[["It is.","Lo es."],["We don't have much work in April,","No tenemos mucho trabajo en abril,"],["so it's a good month to learn.","así que es un buen mes para aprender."]],
  n:"<b>Work</b> no se cuenta: <i>much work</i>, nunca <i>many works</i>."},
 {s:"B", ipa:"ðen aɪd laɪk tuː stɑːrt æz suːn æz juː niːd miː", p:"den áid láik tu start as súun as iú níid mi",
  b:[["Then I'd like to start","Entonces me gustaría empezar"],["as soon as you need me.","en cuanto me necesite."]]}
];

const LECTURA = {
  titulo: "The evening shift",
  entradilla: "La recepción del Hotel Maya, un martes de abril. El texto pone a trabajar lo de la Fase 1: <i>used to</i>, <i>be used to</i> con <i>-ing</i>, <i>since</i> y <i>as</i> para dar razones, las preposiciones fijas del trabajo, <i>job</i> frente a <i>work</i> y la pregunta indirecta. Cada párrafo cambia de persona.",
  parrafos: [
    "I applied for the evening shift at the Hotel Maya because the rent starts in April. I used to work in my uncle's shop on Saturdays, and I didn't use to like the mornings, but I learnt a lot there. He closed the shop last year, so now I need a job and not only a promise.",
    "Miss Fuentes asked me what I dealt with in the shop. Mainly complaints, and I was in charge of the phone as well. She wanted to know if I am used to working late. I am getting used to it, since I study in the morning now.",
    "She is responsible for the bookings and I report to her, so we will see each other every day. The shift is from two thirty until ten, and there is one week of training before it. The foreign guests arrive in the evening and nobody at the front desk speaks much English.",
    "I asked her, as politely as I could, whether the wage was the same during the training. It is. They don't have much work in April, and that is why she says it is a good month to learn. Kevin thinks the hotel will be my real classroom."
  ],
  glosario: [
    ["applied for","əˈplaɪd fɔːr","solicité","apláid for"],
    ["applied","əˈplaɪd","solicité","apláid"],
    ["evening","ˈiːvnɪŋ","tarde-noche","íivning"],
    ["shift","ʃɪft","turno","shift"],
    ["hotel","hoʊˈtel","hotel","joutél"],
    ["Maya","ˈmaɪə","Maya (nombre del hotel)","máia"],
    ["rent","rent","alquiler","rent"],
    ["starts","stɑːrts","empieza","starts"],
    ["April","ˈeɪprəl","abril","éipril"],
    ["used to","ˈjuːst tuː","antes solía","iúust tu"],
    ["work","wɜːrk","trabajar, trabajo","uérk"],
    ["uncle's","ˈʌŋklz","de mi tío","ánkls"],
    ["uncle","ˈʌŋkl","tío","ánkl"],
    ["shop","ʃɑːp","tienda","shap"],
    ["Saturdays","ˈsætərdeɪz","los sábados","sáterdeis"],
    ["didn't","ˈdɪdnt","no (pasado)","dídnt"],
    ["use to","juːs tuː","solía","iúus tu"],
    ["mornings","ˈmɔːrnɪŋz","mañanas","mórnings"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["learnt","lɜːrnt","aprendí","lernt"],
    ["closed","kloʊzd","cerró","klóusd"],
    ["last year","læst jɪr","el año pasado","last íer"],
    ["year","jɪr","año","íer"],
    ["need","niːd","necesito","níid"],
    ["job","dʒɑːb","empleo","chab"],
    ["promise","ˈprɑːmɪs","promesa","prámis"],
    ["asked","æskt","me preguntó","askt"],
    ["dealt with","delt wɪð","me ocupaba de","delt uid"],
    ["dealt","delt","traté","delt"],
    ["mainly","ˈmeɪnli","sobre todo","méinli"],
    ["complaints","kəmˈpleɪnts","quejas","kompléints"],
    ["in charge of","ɪn tʃɑːrdʒ əv","a cargo de","in charch av"],
    ["charge","tʃɑːrdʒ","cargo","charch"],
    ["phone","foʊn","teléfono","fóun"],
    ["as well","æz wel","también","as uél"],
    ["well","wel","bien","uél"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["am used to","æm ˈjuːst tuː","estoy acostumbrado a","am iúust tu"],
    ["working","ˈwɜːrkɪŋ","trabajar","uérking"],
    ["late","leɪt","tarde","léit"],
    ["getting used to","ˈɡetɪŋ ˈjuːst tuː","acostumbrándome a","guéting iúust tu"],
    ["getting","ˈɡetɪŋ","poniéndome","guéting"],
    ["since","sɪns","como, ya que","sins"],
    ["study","ˈstʌdi","estudio","stádi"],
    ["now","naʊ","ahora","náu"],
    ["responsible for","rɪˈspɑːnsəbl fɔːr","responsable de","rispánsabl for"],
    ["responsible","rɪˈspɑːnsəbl","responsable","rispánsabl"],
    ["bookings","ˈbʊkɪŋz","reservas","búkings"],
    ["report to","rɪˈpɔːrt tuː","dependo de","ripórt tu"],
    ["report","rɪˈpɔːrt","depender, informar","ripórt"],
    ["each other","iːtʃ ˈʌðər","el uno al otro","íich ádar"],
    ["each","iːtʃ","cada","íich"],
    ["other","ˈʌðər","otro","ádar"],
    ["thirty","ˈθɜːrti","treinta","zérti"],
    ["until","ənˈtɪl","hasta","antíl"],
    ["week","wiːk","semana","uíik"],
    ["training","ˈtreɪnɪŋ","formación","tréining"],
    ["foreign","ˈfɔːrən","extranjeros","fóren"],
    ["guests","ɡests","huéspedes","guests"],
    ["arrive","əˈraɪv","llegan","aráiv"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["the front desk","ðə frʌnt desk","la recepción","da frant desk"],
    ["front","frʌnt","frente","frant"],
    ["desk","desk","mostrador","desk"],
    ["speaks","spiːks","habla","spíiks"],
    ["politely","pəˈlaɪtli","educadamente","poláitli"],
    ["could","kʊd","podía","kud"],
    ["whether","ˈweðər","si","uédar"],
    ["wage","weɪdʒ","sueldo","uéich"],
    ["same","seɪm","mismo","séim"],
    ["during","ˈdʊrɪŋ","durante","dúring"],
    ["that is why","ðæt ɪz waɪ","por eso","dat is uái"],
    ["month","mʌnθ","mes","manz"],
    ["learn","lɜːrn","aprender","lern"],
    ["thinks","θɪŋks","cree","zinks"],
    ["real","ˈriːəl","de verdad","ríal"],
    ["classroom","ˈklæsruːm","aula","klásrum"],
    ["Fuentes","ˈfwentes","Fuentes (jefa de recepción)","fuéntes"],
    ["Miss","mɪs","señorita","mis"],
    ["Kevin","ˈkevɪn","Kevin (compañero)","kévin"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["there","ðer","allí","der"],
    ["much","mʌtʃ","mucho","mach"],
    ["a lot","ə lɑːt","mucho","a lat"],
    ["will be","wɪl biː","será","uíl bi"],
    ["will see","wɪl siː","veremos","uíl síi"]
  ],
  preguntas: [
    { q:"Why does David need a job now?",
      ops:["Because the rent starts in April","Because his uncle closed the shop","Because he studies in the morning"], ok:0,
      pista:"Primer párrafo, en la primera frase. Hay dos razones cerca, pero sólo una es la causa." },
    { q:"What was David in charge of in his uncle's shop?",
      ops:["The bookings","The phone","The front desk"], ok:1,
      pista:"Segundo párrafo. Se ocupaba sobre todo de quejas, y además de otra cosa." },
    { q:"Why is April a good month to learn the job?",
      ops:["Because the training lasts one week","Because the foreign guests arrive then","Because there isn't much work"], ok:2,
      pista:"Último párrafo. Miss Fuentes lo dice justo después de hablar del sueldo." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-17"] = {
  meta: {
    id: "a2-17", nivel: "A2", numero: 17,
    titulo: "Entrevista de trabajo básica",
    descriptor: "Puedo contar mi experiencia laboral, hablar de lo que hacía antes, explicar mis razones y preguntar con cortesía por el puesto.",
    escena: "Miss Fuentes & David · recepción del Hotel Maya",
    personajeIA: "Miss Fuentes", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
