/* ============================================================
   LECCIÓN A2-10 · Salud: síntomas y consejos
   Reparto: Dr. Reyes, dos días antes del volcán, con un David que
   se ha despertado sin voz. La lectura reúne los seis puntos de la
   Fase 1 —feel/look/sound + adjetivo, el artículo de las
   enfermedades, something wrong with, too/enough + to, get +
   adjetivo y las colocaciones— en yo, ella, ellos y él.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Síntomas", items:[
    ["a sore throat","ə sɔːr θroʊt","dolor de garganta","a sor zróut"],["a headache","ə ˈhedeɪk","dolor de cabeza","a jédeik"],
    ["a cough","ə kɔːf","tos","a kof"],["a temperature","ə ˈtemprətʃər","fiebre","a témprachar"],
    ["flu","fluː","gripe","flúu"],["a cold","ə koʊld","resfriado","a kóuld"],
    ["dizzy","ˈdɪzi","mareado","dísi"],["to swallow","tuː ˈswɑːloʊ","tragar","tu suálou"],
    ["to ache","tuː eɪk","doler","tu éik"],["to hurt","tuː hɜːrt","doler","tu jert"]
  ]},
  {g:"En la consulta", items:[
    ["doctor","ˈdɑːktər","médico","dáktar"],["appointment","əˈpɔɪntmənt","cita","apóintment"],
    ["antibiotic","ˌæntibaɪˈɑːtɪk","antibiótico","antibaiátik"],["pill","pɪl","pastilla","pil"],
    ["prescription","prɪˈskrɪpʃn","receta médica","priskrípshon"],["every eight hours","ˈevri eɪt ˈaʊərz","cada ocho horas","évri éit áuars"],
    ["to rest","tuː rest","descansar","tu rest"],["serious","ˈsɪriəs","grave","sírias"],
    ["ear","ɪr","oído, oreja","íar"],["mouth","maʊθ","boca","máuz"]
  ]},
  {g:"Cómo te ves y te sientes", items:[
    ["to feel","tuː fiːl","sentirse","tu fíil"],["to look","tuː lʊk","verse, parecer","tu luk"],
    ["to sound","tuː saʊnd","sonar","tu sáund"],["to seem","tuː siːm","parecer","tu síim"],
    ["terrible","ˈterəbl","fatal","térabl"],["fine","faɪn","bien","fáin"],
    ["worse","wɜːrs","peor","uérs"],["better","ˈbetər","mejor","bétar"],
    ["ill","ɪl","enfermo","il"],["well","wel","sano, bien","uel"]
  ]},
  {g:"Lo que se hace con esto", items:[
    ["to take medicine","tuː teɪk ˈmedɪsn","tomar medicina","tu téik médisn"],["to make an appointment","tuː meɪk ən əˈpɔɪntmənt","pedir cita","tu méik an apóintment"],
    ["to get better","tuː ɡet ˈbetər","mejorar","tu guet bétar"],["to get worse","tuː ɡet wɜːrs","empeorar","tu guet uérs"],
    ["to catch a cold","tuː kætʃ ə koʊld","resfriarse","tu kach a kóuld"],["to stay in bed","tuː steɪ ɪn bed","quedarse en cama","tu stéi in bed"],
    ["something wrong","ˈsʌmθɪŋ rɔːŋ","algo mal","sámzing rong"],["Nothing serious","ˈnʌθɪŋ ˈsɪriəs","nada grave","názing sírias"],
    ["Open your mouth","ˈoʊpən jʊr maʊθ","abra la boca","óupn iór máuz"],["Take care","teɪk ker","cuídate","téik ker"]
  ]}
];

const PRONKEY = [
  ["z","La <i>th</i> sin voz de <i>throat</i> y <i>mouth</i>.","throat &rarr; zróut"],
  ["k","La <i>ch</i> de <i>ache</i> y <i>headache</i> suena <b>k</b>.","headache &rarr; jédeik"],
  ["f","La <i>gh</i> de <i>cough</i> suena <b>f</b>.","cough &rarr; kof"],
  ["ch","Como en «coche».","temperature &rarr; témprachar"],
  ["sh","Como pedir silencio.","prescription &rarr; priskrípshon"],
  ["j","Aire por la garganta, sin raspar.","hurt &rarr; jert"],
  ["v","Labio de abajo contra los dientes de arriba.","every &rarr; évri"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","swallow &rarr; suálou"],
  ["r final","Apenas se toca; nunca vibra.","doctor &rarr; dáktar"]
];

const VERBS = [
  ["to rest","reg","rest · rests","rested","will rest","descansar"],
  ["to cough","reg","cough · coughs","coughed","will cough","toser"],
  ["to swallow","reg","swallow · swallows","swallowed","will swallow","tragar"],
  ["to check","reg","check · checks","checked","will check","revisar"],
  ["to plan","reg","plan · plans","planned","will plan","planear"],
  ["to hurt","irr","hurt · hurts","hurt","will hurt","doler"],
  ["to feel","irr","feel · feels","felt","will feel","sentirse"],
  ["to get","irr","get · gets","got","will get","ponerse, volverse"],
  ["to catch","irr","catch · catches","caught","will catch","agarrar, pillar"],
  ["to find","irr","find · finds","found","will find","encontrar"],
  ["to give","irr","give · gives","gave","will give","dar"],
  ["to wake up","irr","wake up · wakes up","woke up","will wake up","despertarse"]
];

const GRAMMAR = [
  {t:"FEEL, LOOK, SOUND, SEEM", s:"verbos que piden adjetivo, no adverbio",
   p:"Estos cuatro verbos no describen una acción sino un <b>estado percibido</b>, así que van seguidos de <b>adjetivo</b>, igual que <i>to be</i>. En español metemos un adverbio o un «como»; en inglés, no.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["You look terrible.","<span class='wrong'>You look terribly.</span>","Te ves fatal."],
     ["I feel worse.","<span class='wrong'>I feel badly.</span>","Me siento peor."],
     ["It sounds bad.","<span class='wrong'>It sounds badly.</span>","Suena mal."],
     ["She seems tired.","—","Parece cansada."]
   ]},
   aviso:["Con sustantivo entra <i>like</i>","<span class='right'>It sounds <b>like</b> the flu.</span> &nbsp;·&nbsp; <span class='right'>You look <b>like</b> your father.</span> Adjetivo &rarr; directo; sustantivo &rarr; con <i>like</i>."]},

  {t:"El artículo de las enfermedades", s:"a cold, flu, toothache",
   p:"No hay una regla bonita: se memoriza por grupos. Unas enfermedades llevan <b>a</b>, otras van desnudas y otras llevan <b>the</b>.",
   table:{head:["Con A","Sin artículo","Con THE"], rows:[
     ["a cold","flu","the flu (en inglés americano)"],
     ["a headache","toothache (británico)","the measles"],
     ["a cough","asthma","—"],
     ["a temperature","cancer","—"]
   ]},
   aviso:["El verbo es <i>have</i>, no <i>be</i>","<span class='wrong'>I am cold.</span> significa que tienes frío. <span class='right'>I have a cold.</span> es que estás resfriado. Una palabra de diferencia y dos cosas distintas."]},

  {t:"SOMETHING WRONG WITH", s:"cuando algo no anda bien",
   p:"Una estructura fija que sirve para personas, cuerpos y máquinas. Fíjate en que <b>wrong</b> va detrás del pronombre, nunca delante.",
   chips:[["There's something wrong with my ear.","Algo me pasa en el oído."],["What's wrong?","¿Qué pasa?"],["What's wrong with him?","¿Qué le pasa?"],["There's nothing wrong with it.","No le pasa nada."]],
   aviso:["El orden es fijo","<span class='wrong'>something of wrong</span> y <span class='wrong'>wrong something</span> no existen. Con <i>something</i>, <i>anything</i> y <i>nothing</i>, el adjetivo siempre va <b>detrás</b>."]},

  {t:"TOO … TO y … ENOUGH TO", s:"demasiado para, lo bastante para",
   p:"Dos estructuras espejo. <b>Too</b> va delante del adjetivo y dice que <b>pasa del límite</b>; <b>enough</b> va detrás y dice que <b>llega al mínimo</b>. Las dos enganchan con <b>to + verbo</b>.",
   table:{head:["Estructura","Ejemplo","Español"], rows:[
     ["too + adjetivo + to","You're too ill to climb.","Estás demasiado enfermo para subir."],
     ["adjetivo + enough + to","I'm well enough to travel.","Estoy lo bastante bien para viajar."],
     ["too + adjetivo + for","This is too hard for me.","Esto es muy difícil para mí."],
     ["enough + sustantivo","enough time to rest","tiempo suficiente para descansar"]
   ]},
   aviso:["<i>Enough</i> cambia de sitio","Detrás del <b>adjetivo</b> (<i>well enough</i>) pero delante del <b>sustantivo</b> (<i>enough time</i>). Es la única palabra del inglés que hace eso."]},

  {t:"GET + adjetivo", s:"el verbo del cambio",
   p:"<b>Get</b> con un adjetivo no significa «conseguir»: significa <b>volverse</b>, pasar de un estado a otro. Es uno de los verbos más útiles del idioma y casi nadie lo enseña así.",
   chips:[["to get better","mejorar"],["to get worse","empeorar"],["to get tired","cansarse"],["to get cold","enfriarse"],["to get ready","prepararse"],["to get old","hacerse viejo"]],
   aviso:["<i>Be</i> es el estado, <i>get</i> es el cambio","<b>I am tired</b> = estoy cansado. <b>I get tired</b> = me canso. El español usa un verbo reflexivo donde el inglés usa <i>get</i>."]},

  {t:"Las palabras que van juntas", s:"take medicine, no drink medicine",
   p:"Cada idioma decide qué verbo acompaña a qué sustantivo, y no hay lógica que valga. Estas parejas hay que aprenderlas enteras; en el IELTS se puntúan como vocabulario.",
   table:{head:["Se dice","El español dice","No se dice"], rows:[
     ["take medicine","tomar medicina","<span class='wrong'>drink medicine</span>"],
     ["make an appointment","pedir cita","<span class='wrong'>ask an appointment</span>"],
     ["catch a cold","resfriarse","<span class='wrong'>take a cold</span>"],
     ["have a temperature","tener fiebre","<span class='wrong'>have fever</span>"],
     ["stay in bed","guardar cama","<span class='wrong'>stay in the bed</span>"]
   ]},
   aviso:["Apréndelas como bloques","Memorizar <i>medicine</i> por separado no sirve de nada si luego le pones el verbo equivocado. Anota siempre el verbo y el sustantivo juntos."]}
];

/* Dr. Reyes (A) revisa a David (B), dos días antes del volcán */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ ˈdeɪvɪd sɪt daʊn juː lʊk ˈterəbl", p:"gud mórning, déivid. sit dáun. iú luk térabl",
  b:[["Good morning, David.","Buenos días, David."],["Sit down.","Siéntate."],["You look terrible.","Te ves fatal."]],
  n:"<b>Look + adjetivo</b>, no adverbio: nunca <span class='wrong'>you look terribly</span>."},
 {s:"B", ipa:"θæŋk juː ˈdɑːktər aɪ fiːl wɜːrs ðæn aɪ lʊk", p:"zánk iú, dáktar. ái fíil uérs dan ái luk",
  b:[["Thank you, doctor.","Gracias, doctora."],["I feel worse","Me siento peor"],["than I look.","de lo que me veo."]]},
 {s:"A", ipa:"ðæts ˈseɪɪŋ ə lɑːt wʌts rɔːŋ", p:"dats séiing a lat. uáts rong",
  b:[["That's saying a lot.","Eso es decir mucho."],["What's wrong?","¿Qué te pasa?"]]},
 {s:"B", ipa:"maɪ θroʊt hɜːrts ænd aɪ hæv ə ˈhedeɪk ɪt ˈstɑːrtɪd ɑːn ˈwenzdeɪ", p:"mái zróut jerts and ái jav a jédeik. it startid an uénsdei",
  b:[["My throat hurts","Me duele la garganta"],["and I have a headache.","y tengo dolor de cabeza."],["It started on Wednesday.","Empezó el miércoles."]],
  n:"<b>I have a headache</b>, con artículo. Pero <i>I have flu</i> va desnudo."},
 {s:"A", ipa:"ˈoʊpən jʊr maʊθ jes dʌz ɪt hɜːrt wen juː ˈswɑːloʊ", p:"óupn iór máuz. iés. das it jert uén iú suálou",
  b:[["Open your mouth.","Abre la boca."],["Yes.","Ya."],["Does it hurt","¿Te duele"],["when you swallow?","al tragar?"]]},
 {s:"B", ipa:"ɪt hɜːrts wen aɪ ˈswɑːloʊ wen aɪ tɔːk ænd wen aɪ θɪŋk əˈbaʊt ˈswɑːloʊɪŋ", p:"it jerts uén ái suálou, uén ái tok, and uén ái zink abáut suálouing",
  b:[["It hurts when I swallow,","Me duele al tragar,"],["when I talk","al hablar"],["and when I think about swallowing.","y al pensar en tragar."]]},
 {s:"A", ipa:"duː juː hæv ə ˈtemprətʃər", p:"du iú jav a témprachar",
  b:[["Do you have","¿Tienes"],["a temperature?","fiebre?"]]},
 {s:"B", ipa:"ˈθɜːrti eɪt ðɪs ˈmɔːrnɪŋ ænd aɪm taɪərd ɪˈnʌf tuː sliːp ˈstændɪŋ ʌp", p:"zérti-éit dis mórning. and áim táiard ináf tu slíip stánding ap",
  b:[["Thirty-eight this morning.","Treinta y ocho esta mañana."],["And I'm tired enough","Y estoy lo bastante cansado"],["to sleep standing up.","para dormir de pie."]],
  n:"<b>Tired enough to</b>: <i>enough</i> va detrás del adjetivo y engancha con <i>to</i>."},
 {s:"A", ipa:"ɪt saʊndz laɪk ðə fluː bʌt jʊr θroʊt lʊks laɪk ˈsʌmθɪŋ els ˈeni kɔːf", p:"it sáunds láik da flúu, bat iór zróut luks láik sámzing els. éni kof",
  b:[["It sounds like the flu,","Suena a gripe,"],["but your throat","pero tu garganta"],["looks like something else.","parece otra cosa."],["Any cough?","¿Tos?"]],
  n:"Con sustantivo entra <b>like</b>: <i>sounds like the flu</i>, no <span class='wrong'>sounds the flu</span>."},
 {s:"B", ipa:"ə ˈlɪtl æt naɪt ˈnʌθɪŋ ˈsɪriəs", p:"a lítl at náit. názing sírias",
  b:[["A little at night.","Un poco de noche."],["Nothing serious.","Nada grave."]],
  n:"<b>Nothing serious</b>: con <i>nothing</i> el adjetivo va detrás."},
 {s:"A", ipa:"ðerz ˈsʌmθɪŋ rɔːŋ wɪð jʊr left ɪr tuː dʌz ɪt hɜːrt", p:"ders sámzing rong uid iór left íar túu. das it jert",
  b:[["There's something wrong","Hay algo mal"],["with your left ear too.","en tu oído izquierdo también."],["Does it hurt?","¿Te duele?"]]},
 {s:"B", ipa:"naʊ ðæt juː seɪ ɪt jes", p:"náu dat iú séi it, iés",
  b:[["Now that you say it,","Ahora que lo dice,"],["yes.","sí."]]},
 {s:"A", ipa:"əv ˈkɔːrs ɪt dʌz jʊr tuː ɪl tuː klaɪm ˈeniθɪŋ ɑːn ˈsætərdeɪ", p:"av kórs it das. iór tu il tu kláim énizing an sáterdei",
  b:[["Of course it does.","Claro que sí."],["You're too ill","Estás demasiado enfermo"],["to climb anything","para subir nada"],["on Saturday.","el sábado."]],
  n:"<b>Too ill to climb</b>: <i>too</i> delante del adjetivo, y pasa del límite."},
 {s:"B", ipa:"ˈdɑːktər wiːv plænd ðɪs fɔːr ə mʌnθ", p:"dáktar, uíiv pland dis for a manz",
  b:[["Doctor,","Doctora,"],["we've planned this","llevamos planeando esto"],["for a month.","un mes."]]},
 {s:"A", ipa:"ðen plæn ɪt əˈɡen ðə vɑːlˈkeɪnoʊ ˈɪznt ˈɡoʊɪŋ ˈeniwer", p:"den plan it aguén. da volkéinou ísnt góing éniuer",
  b:[["Then plan it again.","Pues vuelvan a planearlo."],["The volcano","El volcán"],["isn't going anywhere.","no se va a ningún lado."]]},
 {s:"B", ipa:"ˈemə ɪz ˈɡoʊɪŋ bæk tuː ˈaɪərlənd ɪn mɑːrtʃ", p:"Éma is góing bak tu Áiarland in march",
  b:[["Emma is going back","Emma se regresa"],["to Ireland","a Irlanda"],["in March.","en marzo."]]},
 {s:"A", ipa:"ðen ʃi kæn klaɪm ɪt ɪn ˈfebrueri wen jʊr wel ɪˈnʌf tuː ɡoʊ wɪð hɜːr", p:"den shi kan kláim it in fébrueri, uén iór uel ináf tu góu uid jer",
  b:[["Then she can climb it","Entonces lo sube"],["in February,","en febrero,"],["when you're well enough","cuando estés lo bastante bien"],["to go with her.","para ir con ella."]]},
 {s:"B", ipa:"wen wɪl aɪ biː wel ɪˈnʌf", p:"uén uíl ái bi uel ináf",
  b:[["When will I be","¿Cuándo estaré"],["well enough?","lo bastante bien?"]]},
 {s:"A", ipa:"teɪk ðɪs ˌæntibaɪˈɑːtɪk ˈevri eɪt ˈaʊərz fɔːr ˈsevn deɪz juːl ɡet ˈbetər baɪ ˈwenzdeɪ", p:"téik dis antibaiátik évri éit áuars for sévn déis. iúl guet bétar bái uénsdei",
  b:[["Take this antibiotic","Toma este antibiótico"],["every eight hours","cada ocho horas"],["for seven days.","durante siete días."],["You'll get better","Vas a mejorar"],["by Wednesday.","para el miércoles."]],
  n:"<b>Take medicine</b>, nunca <span class='wrong'>drink medicine</span>. Y <b>get better</b> es el cambio: mejorar."},
 {s:"B", ipa:"ˈwenzdeɪ ðæts fɔːr deɪz", p:"uénsdei. dats for déis",
  b:[["Wednesday.","El miércoles."],["That's four days.","Son cuatro días."]]},
 {s:"A", ipa:"fɔːr deɪz ænd ˈoʊnli ɪf juː rest ɪf juː klaɪm ɑːn ˈsætərdeɪ juː ɡet wɜːrs nɑːt ˈbetər", p:"for déis, and óunli if iú rest. if iú kláim an sáterdei, iú guet uérs, nat bétar",
  b:[["Four days,","Cuatro días,"],["and only if you rest.","y sólo si descansas."],["If you climb on Saturday,","Si subes el sábado,"],["you get worse, not better.","empeoras, no mejoras."]]},
 {s:"B", ipa:"ˌʌndərˈstʊd kæn aɪ drɪŋk ˈkɑːfi", p:"anderstúd. kan ái drink káfi",
  b:[["Understood.","Entendido."],["Can I drink coffee?","¿Puedo tomar café?"]]},
 {s:"A", ipa:"juː kæn drɪŋk ˈkɑːfi juː kɑːnt drɪŋk ˈkɑːfi æt fɔːr ɪn ðə ˈmɔːrnɪŋ ɑːn ə ˈmaʊntən", p:"iú kan drink káfi. iú kant drink káfi at for in da mórning an a máunten",
  b:[["You can drink coffee.","Puedes tomar café."],["You can't drink coffee","No puedes tomar café"],["at four in the morning","a las cuatro de la mañana"],["on a mountain.","en una montaña."]]},
 {s:"B", ipa:"ðæts ðə spəˈsɪfɪk ˈænsər aɪ wʌz əˈfreɪd əv θæŋk juː ˈdɑːktər", p:"dats da spisífik ánsar ái uás afréid av. zánk iú, dáktar",
  b:[["That's the specific answer","Esa es la respuesta concreta"],["I was afraid of.","que temía."],["Thank you, doctor.","Gracias, doctora."]]}
];

const LECTURA = {
  titulo: "Four days before the volcano",
  entradilla: "Una garganta a destiempo. El texto pone a trabajar lo de la Fase 1: <i>feel</i>, <i>look</i> y <i>sound</i> con adjetivo, el artículo de las enfermedades, <i>something wrong with</i>, <i>too … to</i> frente a <i>… enough to</i>, y <i>get</i> como verbo del cambio. Cada párrafo cambia de persona.",
  parrafos: [
    "I woke up on Wednesday with a sore throat and a headache, and on Thursday I felt worse. I looked terrible too: Ana said I looked like a photograph of myself from ten years in the future. On Friday morning I went to see Dr. Reyes.",
    "Dr. Reyes doesn't waste words. She looked at my throat, she found something wrong with my left ear, and she said I was too ill to climb anything. It sounded like the flu, but it wasn't only the flu. She gave me an antibiotic: one every eight hours for seven days.",
    "Kevin and Emma were disappointed but not surprised. They have climbed things with me before and they know I get worse before I get better. Emma says the volcano isn't going anywhere, and she is right, but she goes back to Ireland in March.",
    "Tom is delighted. He didn't want to climb anything, and now nobody is climbing anything, so he looks like a genius instead of a coward. We are going in February, if I am well enough. \"If you rest, you get better,\" the doctor said. \"If you climb, you don't.\""
  ],
  glosario: [
    ["woke up","woʊk ʌp","me desperté","uóuk ap"],
    ["felt","felt","me sentí","felt"],
    ["looked","lʊkt","me veía","lukt"],
    ["looked at","lʊkt æt","miró","lukt at"],
    ["looks like","lʊks laɪk","parece","luks láik"],
    ["sounded like","ˈsaʊndɪd laɪk","sonaba a","sáundid láik"],
    ["said","sed","dijo","sed"],
    ["says","sez","dice","ses"],
    ["found","faʊnd","encontró","fáund"],
    ["gave","ɡeɪv","me dio","guéiv"],
    ["went","went","fui","uént"],
    ["have climbed","hæv klaɪmd","han subido","jav kláimd"],
    ["get worse","ɡet wɜːrs","empeoro","guet uérs"],
    ["get better","ɡet ˈbetər","mejoro","guet bétar"],
    ["didn't want","ˈdɪdnt wɑːnt","no quería","dídnt uánt"],
    ["is climbing","ɪz ˈklaɪmɪŋ","va a subir","is kláiming"],
    ["goes back","ɡoʊz bæk","se regresa","góus bak"],
    ["are going","ɑːr ˈɡoʊɪŋ","vamos a ir","ar góing"],
    ["waste","weɪst","malgastar","uéist"],
    ["rest","rest","descansas","rest"],
    ["a sore throat","ə sɔːr θroʊt","dolor de garganta","a sor zróut"],
    ["a headache","ə ˈhedeɪk","dolor de cabeza","a jédeik"],
    ["the flu","ðə fluː","la gripe","da flúu"],
    ["something wrong","ˈsʌmθɪŋ rɔːŋ","algo mal","sámzing rong"],
    ["too ill to","tuː ɪl tuː","demasiado enfermo para","tu il tu"],
    ["well enough","wel ɪˈnʌf","lo bastante bien","uel ináf"],
    ["antibiotic","ˌæntibaɪˈɑːtɪk","antibiótico","antibaiátik"],
    ["ear","ɪr","oído","íar"],
    ["throat","θroʊt","garganta","zróut"],
    ["doctor","ˈdɑːktər","doctora","dáktar"],
    ["words","wɜːrdz","palabras","uérds"],
    ["photograph","ˈfoʊtəɡræf","fotografía","fótagraf"],
    ["future","ˈfjuːtʃər","futuro","fiúchar"],
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],
    ["mountain","ˈmaʊntən","montaña","máunten"],
    ["genius","ˈdʒiːniəs","genio","chíinias"],
    ["coward","ˈkaʊərd","cobarde","káuard"],
    ["disappointed","ˌdɪsəˈpɔɪntɪd","decepcionados","disapóintid"],
    ["surprised","sərˈpraɪzd","sorprendidos","sorpráisd"],
    ["delighted","dɪˈlaɪtɪd","encantado","diláitid"],
    ["terrible","ˈterəbl","fatal","térabl"],
    ["worse","wɜːrs","peor","uérs"],
    ["better","ˈbetər","mejor","bétar"],
    ["right","raɪt","razón","ráit"],
    ["every eight hours","ˈevri eɪt ˈaʊərz","cada ocho horas","évri éit áuars"],
    ["seven days","ˈsevn deɪz","siete días","sévn déis"],
    ["ten years","ten jɪrz","diez años","ten íers"],
    ["instead of","ɪnˈsted əv","en vez de","instéd av"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["anywhere","ˈeniwer","a ningún lado","éniuer"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["myself","maɪˈself","mí mismo","maisélf"],
    ["March","mɑːrtʃ","marzo","march"],
    ["February","ˈfebrueri","febrero","fébrueri"]
  ],
  preguntas: [
    { q:"What did Dr. Reyes find apart from the throat?",
      ops:["Something wrong with his left ear","A broken tooth","Nothing else"], ok:0,
      pista:"Segundo párrafo: hizo tres cosas seguidas, y la segunda es la respuesta." },
    { q:"Why weren't Kevin and Emma surprised?",
      ops:["Because David is always late","Because they know he gets worse before he gets better","Because the weather was bad"], ok:1,
      pista:"Tercer párrafo: ya han subido cosas con él antes." },
    { q:"Why is Tom delighted?",
      ops:["He is going alone","He found a new book","Now nobody is climbing anything"], ok:2,
      pista:"Cuarto párrafo: él nunca quiso subir, así que el retraso lo deja bien parado." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-10"] = {
  meta: {
    id: "a2-10", nivel: "A2", numero: 10,
    titulo: "Salud: síntomas y consejos",
    descriptor: "Puedo describir síntomas con precisión, entender lo que me indica un médico y hablar de cómo mejoro o empeoro.",
    escena: "Dr. Reyes & David · la consulta del barrio, dos días antes del volcán",
    personajeIA: "Dr. Reyes", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
