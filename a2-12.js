/* ============================================================
   LECCIÓN A2-12 · Consejos: should y ought to
   Reparto: Mr. Ortega, en febrero, decidiendo cómo sigue David
   cuando Sarah se vaya. La lectura reúne los seis puntos de la
   Fase 1 —should/ought to/had better, should de suposición,
   suggest y recommend, los consejos impersonales, otherwise y
   would para suavizar— en él, yo, ella y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Dar un consejo", items:[
    ["should","ʃʊd","deberías","shud"],["shouldn't","ˈʃʊdnt","no deberías","shúdnt"],
    ["ought to","ˈɔːt tuː","deberías","óot tu"],["had better","hæd ˈbetər","más te vale","jad bétar"],
    ["I suggest","aɪ səˈdʒest","sugiero","ái sachést"],["I recommend","aɪ ˌrekəˈmend","recomiendo","ái rekoménd"],
    ["It's better to","ɪts ˈbetər tuː","es mejor","its bétar tu"],["It's worth","ɪts wɜːrθ","vale la pena","its uérz"],
    ["My advice is","maɪ ədˈvaɪs ɪz","mi consejo es","mái adváis is"],["I'd start with","aɪd stɑːrt wɪð","yo empezaría por","áid start uid"]
  ]},
  {g:"Estudiar un idioma", items:[
    ["listening","ˈlɪsnɪŋ","comprensión oral","lísning"],["speaking","ˈspiːkɪŋ","expresión oral","spíiking"],
    ["reading","ˈriːdɪŋ","lectura","ríiding"],["writing","ˈraɪtɪŋ","escritura","ráiting"],
    ["habit","ˈhæbɪt","hábito","jábit"],["practice","ˈpræktɪs","práctica","práktis"],
    ["to record","tuː rɪˈkɔːrd","grabar","tu rikórd"],["out loud","aʊt laʊd","en voz alta","áut láud"],
    ["every single day","ˈevri ˈsɪŋɡl deɪ","todos los días sin falta","évri síngl déi"],["progress","ˈprɑːɡres","progreso","prágres"]
  ]},
  {g:"Consecuencias", items:[
    ["otherwise","ˈʌðərwaɪz","si no","áderuais"],["that way","ðæt weɪ","así","dat uéi"],
    ["as a result","æz ə rɪˈzʌlt","como resultado","as a risált"],["in the end","ɪn ði end","al final","in di end"],
    ["without noticing","wɪˈðaʊt ˈnoʊtɪsɪŋ","sin darte cuenta","uidáut nóutising"],["to keep up","tuː kiːp ʌp","mantener el ritmo","tu kíip ap"],
    ["to give up","tuː ɡɪv ʌp","abandonar","tu guiv ap"],["to stick to","tuː stɪk tuː","ceñirse a","tu stik tu"],
    ["ahead of","əˈhed əv","por delante de","ajéd av"],["by September","baɪ sepˈtembər","para septiembre","bái septémbar"]
  ]},
  {g:"Responder a un consejo", items:[
    ["All right","ɔːl raɪt","de acuerdo","ol ráit"],["You're right","jʊr raɪt","tienes razón","iór ráit"],
    ["I'll try","aɪl traɪ","lo intentaré","áil trái"],["Good point","ɡʊd pɔɪnt","buen punto","gud póint"],
    ["Fair enough","fer ɪˈnʌf","me parece justo","fér ináf"],["That sounds strange","ðæt saʊndz streɪndʒ","suena raro","dat sáunds stréinch"],
    ["I don't think so","aɪ doʊnt θɪŋk soʊ","no creo","ái dóunt zink sóu"],["Let me think","let miː θɪŋk","déjame pensar","let mi zink"],
    ["one more thing","wʌn mɔːr θɪŋ","una cosa más","uán mor zing"],["Then","ðen","entonces","den"]
  ]}
];

const PRONKEY = [
  ["l muda","La <i>l</i> de <i>should</i> y <i>would</i> no se pronuncia.","should &rarr; shud"],
  ["gh muda","La <i>gh</i> de <i>ought</i> no suena.","ought &rarr; óot"],
  ["z","La <i>th</i> sin voz de <i>worth</i>.","worth &rarr; uérz"],
  ["d suave","La <i>th</i> con voz de <i>otherwise</i>.","otherwise &rarr; áderuais"],
  ["ch","Como en «coche».","suggest &rarr; sachést"],
  ["sh","Como pedir silencio.","should &rarr; shud"],
  ["v","Labio de abajo contra los dientes de arriba.","advice &rarr; adváis"],
  ["'d","<b>would</b> contraído: apenas una <i>d</i>.","I'd start &rarr; áid start"],
  ["r final","Apenas se toca; nunca vibra.","better &rarr; bétar"]
];

const VERBS = [
  ["to suggest","reg","suggest · suggests","suggested","will suggest","sugerir"],
  ["to recommend","reg","recommend · recommends","recommended","will recommend","recomendar"],
  ["to advise","reg","advise · advises","advised","will advise","aconsejar"],
  ["to record","reg","record · records","recorded","will record","grabar"],
  ["to judge","reg","judge · judges","judged","will judge","juzgar"],
  ["to practise","reg","practise · practises","practised","will practise","practicar"],
  ["to notice","reg","notice · notices","noticed","will notice","darse cuenta"],
  ["to keep","irr","keep · keeps","kept","will keep","mantener"],
  ["to stick to","irr","stick to · sticks to","stuck to","will stick to","ceñirse a"],
  ["to become","irr","become · becomes","became","will become","convertirse en"],
  ["to read","irr","read · reads","read","will read","leer"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"]
];

const GRAMMAR = [
  {t:"SHOULD, OUGHT TO y HAD BETTER", s:"tres grados del mismo consejo",
   p:"Los tres van seguidos de <b>verbo base</b> y los tres aconsejan, pero no con la misma fuerza. <i>Had better</i> es el más fuerte: lleva una amenaza implícita.",
   table:{head:["Fórmula","Fuerza","Ejemplo"], rows:[
     ["should","consejo normal","You should listen every day."],
     ["ought to","igual, algo más formal","You ought to choose two things."],
     ["had better ('d better)","urgente, casi advertencia","You'd better start tonight."],
     ["Negativo","shouldn't / had better not","You'd better not wait."]
   ]},
   aviso:["<i>Had better</i> no es pasado","Aunque lleve <i>had</i>, habla del presente y del futuro inmediato. Y va con verbo base, sin <i>to</i>: <span class='wrong'>you'd better to start</span> no existe."]},

  {t:"SHOULD de suposición", s:"lo que es razonable esperar",
   p:"El segundo oficio de <b>should</b> no es aconsejar: es decir que algo <b>es lógico que ocurra</b>. El español lo traduce con «debería» o «a estas alturas ya».",
   chips:[["You should be at B1 by September.","Deberías estar en B1 para septiembre."],["They should be here by now.","Ya deberían estar aquí."],["It shouldn't take long.","No debería tardar mucho."],["The bus should arrive at six.","El bus debería llegar a las seis."]],
   aviso:["El contexto decide cuál de los dos es","<i>You should study</i> es un consejo. <i>You should be tired</i> es una deducción: es lógico que lo estés. La forma es idéntica."]},

  {t:"SUGGEST y RECOMMEND", s:"los dos verbos que no llevan persona detrás",
   p:"En español decimos «te sugiero», «me recomendó». En inglés esos dos verbos <b>no aceptan la persona directamente detrás</b>, y ése es uno de los errores más constantes del hispanohablante.",
   table:{head:["Se dice","No se dice"], rows:[
     ["I suggest listening every day.","<span class='wrong'>I suggest you to listen.</span>"],
     ["I suggest that you listen.","<span class='wrong'>I suggest me a book.</span>"],
     ["I recommend Emma.","<span class='wrong'>I recommend you Emma.</span>"],
     ["I'd recommend starting tonight.","<span class='wrong'>I recommend you to start.</span>"]
   ]},
   aviso:["Detrás va <i>-ing</i> o <i>that</i>","<b>Suggest</b> y <b>recommend</b> admiten sustantivo, verbo en <i>-ing</i> o una frase con <i>that</i>. Lo único que no admiten es <i>persona + to</i>. Para eso están <i>advise</i> y <i>tell</i>: <i>he advised me to start</i>."]},

  {t:"Los consejos impersonales", s:"It's better to… / It's worth + -ing",
   p:"Cuando no quieres señalar a nadie, el consejo se despersonaliza. Fíjate en lo que pide cada fórmula detrás.",
   table:{head:["Fórmula","Detrás va","Ejemplo"], rows:[
     ["It's better to","to + verbo","It's better to start with conversations."],
     ["It's worth","verbo en -ing","It's worth doing for a month."],
     ["The best thing is to","to + verbo","The best thing is to record yourself."],
     ["There's no point in","verbo en -ing","There's no point in waiting."]
   ]},
   aviso:["<i>Worth</i> nunca lleva <i>to</i>","<span class='wrong'>It's worth to try.</span> &nbsp;&rarr;&nbsp; <span class='right'>It's worth trying.</span> Es una preposición disfrazada, y detrás de preposición siempre <i>-ing</i>."]},

  {t:"Las consecuencias", s:"otherwise, or, that way",
   p:"Un consejo se vuelve convincente cuando dices qué pasa si no se sigue. Tres conectores hacen ese trabajo.",
   table:{head:["Conector","Significa","Ejemplo"], rows:[
     ["otherwise","si no, en caso contrario","Start tonight; otherwise you'll stop."],
     ["or","si no (más directo)","Start tonight, or you'll stop."],
     ["that way","así, de esa manera","Record yourself. That way you keep the habit."],
     ["as a result","como resultado","He practised daily; as a result, he passed."]
   ]},
   aviso:["<i>Otherwise</i> abre frase nueva","Lleva punto y coma o punto delante, no coma sola. Y no es lo mismo que <i>if not</i>, que sí une dentro de la misma frase."]},

  {t:"WOULD para suavizar", s:"I'd start with… / I'd recommend…",
   p:"Añadir <b>would</b> convierte una orden en una opinión. Es la diferencia entre sonar tajante y sonar útil, y en el IELTS Speaking se nota.",
   table:{head:["Directo","Suavizado con would"], rows:[
     ["Start with listening.","I'd start with listening."],
     ["Choose Emma.","I'd recommend Emma."],
     ["That is a bad idea.","I wouldn't do that."],
     ["Do it now.","I'd do it now, if I were you."]
   ]},
   aviso:["<i>I'd</i> aquí es <i>I would</i>, no <i>I had</i>","Las dos se contraen igual. Se distinguen por lo que viene detrás: <i>I'd start</i> (verbo base) es <b>would</b>; <i>I'd started</i> (participio) sería <i>had</i>."]}
];

/* Mr. Ortega (A) planifica con David (B) los meses que vienen */
const DIALOGUE = [
 {s:"A", ipa:"soʊ juː pæst eɪ wʌn ɪn dɪˈsembər ænd juːv dʌn hæf əv eɪ tuː wʌt naʊ", p:"sóu. iú past éi-uán in disémbar, and iúv dan jaf av éi-tu. uát náu",
  b:[["So.","Bien."],["You passed A1 in December","Aprobaste A1 en diciembre"],["and you've done half of A2.","y llevas media A2."],["What now?","¿Y ahora qué?"]]},
 {s:"B", ipa:"ðæts waɪ aɪm hɪr wʌt ʃʊd aɪ duː nekst", p:"dats uái áim jíar. uát shud ái du nekst",
  b:[["That's why I'm here.","Por eso estoy aquí."],["What should I do next?","¿Qué debería hacer ahora?"]],
  n:"<b>Should</b> + verbo base, sin <i>to</i>."},
 {s:"A", ipa:"fɜːrst ˈkwestʃən haʊ mʌtʃ taɪm duː juː hæv ˈevri deɪ", p:"ferst kuéschon: jáu mach táim du iú jav évri déi",
  b:[["First question:","Primera pregunta:"],["how much time do you have","¿cuánto tiempo tienes"],["every day?","cada día?"]]},
 {s:"B", ipa:"ən ˈaʊər ən ˈaʊər ænd ə hæf ɑːn ɡʊd deɪz", p:"an áuar. an áuar and a jaf an gud déis",
  b:[["An hour.","Una hora."],["An hour and a half","Una hora y media"],["on good days.","los días buenos."]]},
 {s:"A", ipa:"ðen juː ˈʃʊdnt traɪ tuː duː ˈevriθɪŋ juː ˈɔːt tuː tʃuːz tuː θɪŋz ænd duː ðem wel", p:"den iú shúdnt trái tu du évrizing. iú óot tu chúus tu zings and du dem uel",
  b:[["Then you shouldn't try","Entonces no deberías intentar"],["to do everything.","hacerlo todo."],["You ought to choose two things","Deberías elegir dos cosas"],["and do them well.","y hacerlas bien."]],
  n:"<b>Ought to</b> es el único de los tres que lleva <i>to</i> dentro de la fórmula."},
 {s:"B", ipa:"wɪtʃ tuː", p:"uích tu",
  b:[["Which two?","¿Cuáles dos?"]]},
 {s:"A", ipa:"aɪd stɑːrt wɪð ˈlɪsnɪŋ ænd ˈspiːkɪŋ jʊr ˈriːdɪŋ ɪz ɔːlˈredi əˈhed əv ðem", p:"áid start uid lísning and spíiking. iór ríiding is olrédi ajéd av dem",
  b:[["I'd start with listening","Yo empezaría por la escucha"],["and speaking.","y el habla."],["Your reading is already","Tu lectura ya va"],["ahead of them.","por delante."]],
  n:"<b>I'd start</b> = <i>I would start</i>: convierte la orden en opinión."},
 {s:"B", ipa:"ˈevribɑːdi sez ˈlɪsnɪŋ ɪz ðə ˈhɑːrdɪst", p:"évribadi ses lísning is da járdist",
  b:[["Everybody says","Todo el mundo dice"],["listening is the hardest.","que la escucha es lo más difícil."]]},
 {s:"A", ipa:"ˈevribɑːdi ɪz raɪt aɪ səˈdʒest ˈlɪsnɪŋ tuː ˈsʌmθɪŋ ˈevri ˈsɪŋɡl deɪ ˈiːvn ten ˈmɪnɪts", p:"évribadi is ráit. ái sachést lísning tu sámzing évri síngl déi, íivn ten mínits",
  b:[["Everybody is right.","Todo el mundo tiene razón."],["I suggest listening","Sugiero escuchar"],["to something","algo"],["every single day,","todos los días sin falta,"],["even ten minutes.","aunque sean diez minutos."]],
  n:"<b>I suggest listening</b>, con <i>-ing</i>. Nunca <span class='wrong'>I suggest you to listen</span>."},
 {s:"B", ipa:"ʃʊd aɪ juːz ðə nuːz", p:"shud ái iúus da núus",
  b:[["Should I use","¿Debería usar"],["the news?","las noticias?"]]},
 {s:"A", ipa:"nɑːt jet ðə nuːz ɪz fæst ɪts ˈbetər tuː stɑːrt wɪð ˌkɑːnvərˈseɪʃnz", p:"nat iet. da núus is fast. its bétar tu start uid konverséishons",
  b:[["Not yet.","Todavía no."],["The news is fast.","Las noticias van rápido."],["It's better to start","Es mejor empezar"],["with conversations.","con conversaciones."]],
  n:"<b>It's better to</b> + verbo base con <i>to</i>. Y <i>news</i> lleva verbo en singular."},
 {s:"B", ipa:"ænd ˈspiːkɪŋ aɪ doʊnt hæv ˈenibɑːdi tuː spiːk tuː wen ˈserə ɡoʊz bæk", p:"and spíiking. ái dóunt jav énibadi tu spíik tu uén Séra góus bak",
  b:[["And speaking?","¿Y el habla?"],["I don't have anybody","No tengo a nadie"],["to speak to","con quien hablar"],["when Sarah goes back.","cuando Sarah se regrese."]]},
 {s:"A", ipa:"wen dʌz ʃi ɡoʊ bæk", p:"uén das shi góu bak",
  b:[["When does she go back?","¿Cuándo se regresa?"]]},
 {s:"B", ipa:"ðə ˈtwentiəθ", p:"da tuéntiaz",
  b:[["The twentieth.","El veinte."]]},
 {s:"A", ipa:"ðen juːd ˈbetər faɪnd ˈsʌmbɑːdi bɪˈfɔːr ðə ˈtwentiəθ ˈʌðərwaɪz juːl stɑːp fɔːr tuː mʌnθs", p:"den iúd bétar fáind sámbadi bifór da tuéntiaz. áderuais iúl stap for tu manzs",
  b:[["Then you'd better find somebody","Entonces más te vale encontrar a alguien"],["before the twentieth.","antes del veinte."],["Otherwise you'll stop","Si no, vas a parar"],["for two months.","dos meses."]],
  n:"<b>You'd better</b> + verbo base: el consejo más fuerte de los tres. Y <b>otherwise</b> abre la consecuencia."},
 {s:"B", ipa:"ˈemə ænd tɑːm ɑːr hɪr ənˈtɪl mɑːrtʃ tuː", p:"Éma and Tom ar jíar antíl march túu",
  b:[["Emma and Tom","Emma y Tom"],["are here until March","están aquí hasta marzo"],["too.","también."]]},
 {s:"A", ipa:"tɑːm riːdz ˈemə tɔːks aɪd ˌrekəˈmend ˈemə", p:"Tom ríids. Éma toks. áid rekoménd Éma",
  b:[["Tom reads.","Tom lee."],["Emma talks.","Emma habla."],["I'd recommend Emma.","Yo recomendaría a Emma."]],
  n:"<b>I'd recommend Emma</b>, sin <i>you</i> en medio: nunca <span class='wrong'>I recommend you Emma</span>."},
 {s:"B", ipa:"ænd ˈæftər mɑːrtʃ", p:"and áftar march",
  b:[["And after March?","¿Y después de marzo?"]]},
 {s:"A", ipa:"rɪˈkɔːrd jɔːrˈself faɪv ˈmɪnɪts ə deɪ wʌn ˈkwestʃən aʊt laʊd ðæt weɪ juː kiːp ðə ˈhæbɪt", p:"rikórd iorsélf. fáiv mínits a déi, uán kuéschon, áut láud. dat uéi iú kíip da jábit",
  b:[["Record yourself.","Grábate."],["Five minutes a day,","Cinco minutos al día,"],["one question, out loud.","una pregunta, en voz alta."],["That way you keep the habit.","Así mantienes el hábito."]]},
 {s:"B", ipa:"ðæt saʊndz streɪndʒ", p:"dat sáunds stréinch",
  b:[["That sounds strange.","Eso suena raro."]]},
 {s:"A", ipa:"ɪt ɪz streɪndʒ ɪts ɔːlsoʊ ðə ˈoʊnli θɪŋ ðæt wɜːrks ɪts wɜːrθ ˈduːɪŋ fɔːr ə mʌnθ", p:"it is stréinch. its ólsou da óunli zing dat uérks. its uérz dúing for a manz",
  b:[["It is strange.","Es raro."],["It's also the only thing","También es lo único"],["that works.","que funciona."],["It's worth doing","Vale la pena hacerlo"],["for a month.","un mes."]],
  n:"<b>It's worth doing</b>, con <i>-ing</i>. Nunca <span class='wrong'>it's worth to do</span>."},
 {s:"B", ipa:"ɔːl raɪt ˈlɪsnɪŋ ˈevri deɪ ˈspiːkɪŋ wɪð ˈemə rɪˈkɔːrdɪŋ ˈæftər mɑːrtʃ", p:"ol ráit. lísning évri déi, spíiking uid Éma, rikórding áftar march",
  b:[["All right.","De acuerdo."],["Listening every day,","Escuchar todos los días,"],["speaking with Emma,","hablar con Emma,"],["recording after March.","grabarme después de marzo."]]},
 {s:"A", ipa:"ænd wʌn mɔːr θɪŋ juː ʃʊd biː æt biː wʌn baɪ sepˈtembər ɪf juː kiːp ðɪs ʌp", p:"and uán mor zing: iú shud bi at bi-uán bái septémbar, if iú kíip dis ap",
  b:[["And one more thing:","Y una cosa más:"],["you should be at B1","deberías estar en B1"],["by September,","para septiembre,"],["if you keep this up.","si mantienes el ritmo."]],
  n:"Aquí <b>should</b> no aconseja: predice lo razonable. Es su segundo oficio."},
 {s:"B", ipa:"sepˈtembər ðen aɪd ˈbetər stɑːrt təˈnaɪt", p:"septémbar. den áid bétar start tunáit",
  b:[["September.","Septiembre."],["Then I'd better start","Entonces más me vale empezar"],["tonight.","esta noche."]]}
];

const LECTURA = {
  titulo: "What Mr. Ortega said",
  entradilla: "Veinte minutos de despacho y un plan para seis meses. El texto pone a trabajar lo de la Fase 1: <i>should</i>, <i>ought to</i> y <i>had better</i>, el <i>should</i> de suposición, <i>suggest</i> y <i>recommend</i> sin persona detrás, los consejos impersonales y <i>otherwise</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Mr. Ortega gave me twenty minutes and three pieces of advice. He said I shouldn't try to do everything, and that I ought to choose two things and do them well. He suggests listening to something every single day, even for ten minutes.",
    "I have an hour a day, an hour and a half on good days. It isn't much, so the plan has to be small. I'd better start tonight, because I know myself: if I wait until Monday, Monday becomes March without noticing.",
    "Sarah goes back to Canada on the twentieth, and she has already packed half her suitcase. After that I need somebody to speak to, and Mr. Ortega recommends Emma. Tom reads; Emma talks. That is exactly what I need. Emma and Tom are here until the end of March, and when I asked, they both said yes before I finished the question.",
    "After March I should record myself: five minutes a day, one question, out loud. It sounds strange, and it is strange, but it's worth doing for a month before I judge it. Otherwise I stop for two months, and everybody in this street knows how that story ends."
  ],
  glosario: [
    ["gave","ɡeɪv","me dio","guéiv"],
    ["said","sed","dijo","sed"],
    ["shouldn't try","ˈʃʊdnt traɪ","no debería intentar","shúdnt trái"],
    ["ought to choose","ˈɔːt tuː tʃuːz","debería elegir","óot tu chúus"],
    ["suggests","səˈdʒests","sugiere","sachésts"],
    ["recommends","ˌrekəˈmendz","recomienda","rekoménds"],
    ["I'd better","aɪd ˈbetər","más me vale","áid bétar"],
    ["should record","ʃʊd rɪˈkɔːrd","debería grabar","shud rikórd"],
    ["it's worth doing","ɪts wɜːrθ ˈduːɪŋ","vale la pena hacerlo","its uérz dúing"],
    ["listening to","ˈlɪsnɪŋ tuː","escuchar","lísning tu"],
    ["goes back","ɡoʊz bæk","se regresa","góus bak"],
    ["need","niːd","necesito","níid"],
    ["reads","riːdz","lee","ríids"],
    ["talks","tɔːks","habla","toks"],
    ["sounds strange","saʊndz streɪndʒ","suena raro","sáunds stréinch"],
    ["judge","dʒʌdʒ","juzgarlo","chach"],
    ["wait","weɪt","espero","uéit"],
    ["becomes","bɪˈkʌmz","se convierte en","bikáms"],
    ["stop","stɑːp","paro","stap"],
    ["knows","noʊz","sabe","nóus"],
    ["ends","endz","termina","ends"],
    ["otherwise","ˈʌðərwaɪz","si no","áderuais"],
    ["without noticing","wɪˈðaʊt ˈnoʊtɪsɪŋ","sin darme cuenta","uidáut nóutising"],
    ["pieces of advice","ˈpiːsɪz əv ədˈvaɪs","consejos","píisis av adváis"],
    ["advice","ədˈvaɪs","consejo","adváis"],
    ["has packed","hæz pækt","ha empacado","jas pakt"],
    ["packed","pækt","empacado","pakt"],
    ["suitcase","ˈsuːtkeɪs","maleta","súutkeis"],
    ["half","hæf","la mitad de","jaf"],
    ["asked","æskt","pregunté","askt"],
    ["both said","boʊθ sed","los dos dijeron","bóuz sed"],
    ["both","boʊθ","los dos","bóuz"],
    ["yes","jes","que sí","iés"],
    ["finished","ˈfɪnɪʃt","terminé","fínisht"],
    ["every single day","ˈevri ˈsɪŋɡl deɪ","todos los días sin falta","évri síngl déi"],
    ["ten minutes","ten ˈmɪnɪts","diez minutos","ten mínits"],
    ["five minutes","faɪv ˈmɪnɪts","cinco minutos","fáiv mínits"],
    ["an hour","ən ˈaʊər","una hora","an áuar"],
    ["an hour and a half","ən ˈaʊər ænd ə hæf","una hora y media","an áuar and a jaf"],
    ["twenty minutes","ˈtwenti ˈmɪnɪts","veinte minutos","tuénti mínits"],
    ["two months","tuː mʌnθs","dos meses","tu manzs"],
    ["a month","ə mʌnθ","un mes","a manz"],
    ["the twentieth","ðə ˈtwentiəθ","el veinte","da tuéntiaz"],
    ["the end of March","ði end əv mɑːrtʃ","finales de marzo","di end av march"],
    ["myself","maɪˈself","a mí mismo","maisélf"],
    ["out loud","aʊt laʊd","en voz alta","áut láud"],
    ["question","ˈkwestʃən","pregunta","kuéschon"],
    ["plan","plæn","plan","plan"],
    ["small","smɔːl","pequeño","smóol"],
    ["strange","streɪndʒ","raro","stréinch"],
    ["exactly","ɪɡˈzæktli","exactamente","igsáktli"],
    ["street","striːt","calle","stríit"],
    ["story","ˈstɔːri","historia","stóri"],
    ["Canada","ˈkænədə","Canadá","kánada"],
    ["March","mɑːrtʃ","marzo","march"],
    ["Monday","ˈmʌndeɪ","lunes","mándei"],
    ["tonight","təˈnaɪt","esta noche","tunáit"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["everybody","ˈevribɑːdi","todo el mundo","évribadi"],
    ["somebody","ˈsʌmbɑːdi","alguien","sámbadi"],
    ["something","ˈsʌmθɪŋ","algo","sámzing"],
    ["good days","ɡʊd deɪz","días buenos","gud déis"],
    ["two things","tuː θɪŋz","dos cosas","tu zings"]
  ],
  preguntas: [
    { q:"What does Mr. Ortega suggest doing every day?",
      ops:["Reading the news","Listening to something","Writing an essay"], ok:1,
      pista:"Primer párrafo, última frase: aunque sean diez minutos." },
    { q:"Why does he recommend Emma and not Tom?",
      ops:["Because Tom reads and Emma talks","Because Tom is leaving earlier","Because Emma is a teacher"], ok:0,
      pista:"Tercer párrafo: el texto los resume en tres palabras cada uno." },
    { q:"What should David do after March?",
      ops:["Stop for two months","Find a new teacher","Record himself five minutes a day"], ok:2,
      pista:"Cuarto párrafo: le suena raro, y aun así piensa probarlo un mes." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-12"] = {
  meta: {
    id: "a2-12", nivel: "A2", numero: 12,
    titulo: "Consejos: should y ought to",
    descriptor: "Puedo dar y recibir consejos con distintos grados de fuerza, recomendar algo con las estructuras correctas y explicar qué pasa si el consejo no se sigue.",
    escena: "Mr. Ortega & David · su despacho en febrero, planificando los seis meses siguientes",
    personajeIA: "Mr. Ortega", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
