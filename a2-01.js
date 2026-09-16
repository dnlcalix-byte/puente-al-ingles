/* ============================================================
   LECCIÓN A2-01 · Reencuentro: ponerse al día
   Arranca A2 donde terminó A1: diciembre, y Sarah aterriza en
   Tegucigalpa con Julia. La lectura reúne los seis puntos de la
   Fase 1 —la segunda tanda de irregulares, could, when + pasado,
   as soon as / until, las exclamaciones y las preguntas de
   seguimiento— en yo, ella, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El reencuentro", items:[
    ["to land","tuː lænd","aterrizar","tu land"],["arrivals hall","əˈraɪvlz hɔːl","sala de llegadas","aráivls jol"],
    ["to pick up","tuː pɪk ʌp","ir a recoger","tu pik ap"],["to hug","tuː hʌɡ","abrazar","tu jag"],
    ["to shout","tuː ʃaʊt","gritar","tu sháut"],["crowd","kraʊd","multitud","kráud"],
    ["at last","æt læst","por fin","at last"],["news","nuːz","noticias","núus"],
    ["to change","tuː tʃeɪndʒ","cambiar","tu chéinch"],["the same as always","ðə seɪm æz ˈɔːlweɪz","igual que siempre","da séim as ólueis"]
  ]},
  {g:"Irregulares, segunda tanda", items:[
    ["brought","brɔːt","trajo","bróot"],["caught","kɔːt","agarró, tomó","kóot"],
    ["felt","felt","se sintió","felt"],["found","faʊnd","encontró","fáund"],
    ["kept","kept","guardó, siguió","kept"],["lost","lɔːst","perdió","lost"],
    ["paid","peɪd","pagó","péid"],["sent","sent","envió","sent"],
    ["spoke","spoʊk","habló","spóuk"],["told","toʊld","le dijo","tóuld"],
    ["won","wʌn","ganó","uán"],["could","kʊd","podía, pude","kud"]
  ]},
  {g:"Ponerse al día", items:[
    ["What's new?","wʌts nuː","¿qué hay de nuevo?","uáts núu"],["Tell me everything","tel miː ˈevriθɪŋ","cuéntamelo todo","tel mi évrizing"],
    ["Really?","ˈrɪəli","¿en serio?","ríili"],["How come?","haʊ kʌm","¿cómo así?","jáu kam"],
    ["No way!","noʊ weɪ","¡no puede ser!","nóu uéi"],["Guess what","ɡes wʌt","adivina qué","gues uát"],
    ["That sounds like…","ðæt saʊndz laɪk","eso suena a…","dat sáunds láik"],["And then?","ænd ðen","¿y luego?","and den"],
    ["in the end","ɪn ði end","al final","in di end"],["by the way","baɪ ðə weɪ","por cierto","bái da uéi"]
  ]},
  {g:"Situar el relato", items:[
    ["as soon as","æz suːn æz","en cuanto","as súun as"],["until","ənˈtɪl","hasta que","antíl"],
    ["at first","æt fɜːrst","al principio","at ferst"],["straight away","streɪt əˈweɪ","enseguida","stréit auéi"],
    ["the day before yesterday","ðə deɪ bɪˈfɔːr ˈjestərdeɪ","anteayer","da déi bifór iésterdei"],["that morning","ðæt ˈmɔːrnɪŋ","aquella mañana","dat mórning"],
    ["later that day","ˈleɪtər ðæt deɪ","más tarde ese día","léitar dat déi"],["two years ago","tuː jɪrz əˈɡoʊ","hace dos años","tu íers agóu"],
    ["last time","læst taɪm","la última vez","last táim"],["for two hours","fɔːr tuː ˈaʊərz","durante dos horas","for tu áuars"]
  ]}
];

const PRONKEY = [
  ["óo","Vocal larga y abierta. Es el sonido de <i>-ought</i> y <i>-aught</i>.","brought &rarr; bróot"],
  ["j","Aire por la garganta, sin raspar.","hug &rarr; jag"],
  ["z","Lengua entre los dientes, sin voz.","everything &rarr; évrizing"],
  ["ch","Como en «coche».","change &rarr; chéinch"],
  ["sh","Como pedir silencio.","shout &rarr; sháut"],
  ["v","Labio de abajo contra los dientes de arriba.","arrivals &rarr; aráivls"],
  ["gh muda","En <i>brought</i>, <i>caught</i> y <i>thought</i> la <i>gh</i> no suena.","caught &rarr; kóot"],
  ["l muda","La <i>l</i> de <i>could</i>, <i>would</i> y <i>should</i> no se pronuncia.","could &rarr; kud"],
  ["r final","Apenas se toca; nunca vibra.","later &rarr; léitar"]
];

const VERBS = [
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to catch","irr","catch · catches","caught","will catch","agarrar, tomar"],
  ["to feel","irr","feel · feels","felt","will feel","sentir"],
  ["to find","irr","find · finds","found","will find","encontrar"],
  ["to keep","irr","keep · keeps","kept","will keep","guardar, seguir"],
  ["to lose","irr","lose · loses","lost","will lose","perder"],
  ["to pay","irr","pay · pays","paid","will pay","pagar"],
  ["to send","irr","send · sends","sent","will send","enviar"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to tell","irr","tell · tells","told","will tell","decirle a alguien"],
  ["to win","irr","win · wins","won","will win","ganar"],
  ["can","irr","can · can","could","will be able to","poder, saber"]
];

const GRAMMAR = [
  {t:"Irregulares, segunda tanda", s:"los doce que faltaban para contar tu vida",
   p:"En A1 memorizaste doce. Con estos doce más cubres prácticamente cualquier relato en pasado. Fíjate en el patrón: muchos acaban en <b>-ought / -aught</b> o cambian la vocal por una <b>e</b>.",
   table:{head:["Infinitivo","Pasado","Se pronuncia","Español"], rows:[
     ["bring","brought","bróot","traer"],
     ["catch","caught","kóot","agarrar"],
     ["feel","felt","felt","sentir"],
     ["keep","kept","kept","guardar"],
     ["lose","lost","lost","perder"],
     ["send","sent","sent","enviar"],
     ["speak","spoke","spóuk","hablar"],
     ["win","won","uán","ganar"]
   ]},
   aviso:["<i>Won</i> no rima con <i>own</i>","Se pronuncia <b>uán</b>, exactamente igual que <i>one</i>. Y <i>lost</i> no lleva <i>-ed</i>: <span class='wrong'>losed</span> no existe."]},

  {t:"COULD: el pasado de CAN", s:"could / couldn't",
   p:"<b>Could</b> se comporta igual que <i>can</i>: no lleva <i>-s</i>, no necesita <i>did</i> y va seguido de <b>verbo base</b>. Sirve para la habilidad pasada y para lo que fue posible o imposible.",
   table:{head:["Función","Ejemplo","Español"], rows:[
     ["Habilidad pasada","I could swim at five.","Sabía nadar a los cinco."],
     ["Imposibilidad","I couldn't find you.","No pude encontrarte."],
     ["Pregunta","Could you see the gate?","¿Podías ver la puerta?"],
     ["Petición (no es pasado)","Could you help me?","¿Me podrías ayudar?"]
   ]},
   aviso:["<i>Could</i> no siempre es pasado","En una petición —<i>Could you repeat that?</i>— sólo suena más educado que <i>can</i>. El contexto decide, no la forma."]},

  {t:"WHEN + pasado", s:"dos cosas, una detrás de otra",
   p:"<b>When</b> une dos frases en pasado y marca cuál pasó primero. La parte del <i>when</i> puede ir delante o detrás; si va delante, lleva coma.",
   table:{head:["Frase","Qué pasó primero"], rows:[
     ["When she arrived, the office was empty.","llegó &rarr; encontró la oficina vacía"],
     ["The office was empty when she arrived.","lo mismo, otro orden"],
     ["When I saw her jacket, I shouted.","vio la chaqueta &rarr; gritó"],
     ["<span class='wrong'>When she will arrive…</span>","el <i>when</i> nunca lleva futuro"]
   ]},
   aviso:["Detrás de <i>when</i> no hay futuro","Ni siquiera hablando del futuro: <span class='right'>When she arrives, I'll call you.</span>, nunca <span class='wrong'>when she will arrive</span>. El inglés usa presente donde el español usa subjuntivo."]},

  {t:"AS SOON AS, UNTIL, BEFORE, AFTER", s:"colocar los hechos en el tiempo",
   p:"Cuatro conectores que ordenan un relato. Los cuatro funcionan como <i>when</i>: introducen una frase entera con su sujeto y su verbo.",
   table:{head:["Conector","Significa","Ejemplo"], rows:[
     ["as soon as","en cuanto","As soon as I saw her, I shouted."],
     ["until","hasta que","She didn't stop until last night."],
     ["before","antes de que","We left before the rain started."],
     ["after","después de que","After we arrived, everybody ate."]
   ]},
   aviso:["<i>Until</i> con verbo, <i>till</i> en el habla","Y ojo con el negativo: <b>didn't stop until ten</b> significa que paró a las diez, no que no parara. El español lo dice igual, pero cuesta oírlo."]},

  {t:"Las exclamaciones", s:"What a…! / How…!",
   p:"Dos moldes muy cortos que dan naturalidad inmediata a la conversación. Se diferencian en lo que va detrás: <b>what</b> lleva sustantivo, <b>how</b> lleva adjetivo.",
   table:{head:["Molde","Ejemplo","Español"], rows:[
     ["What a + sustantivo singular","What a morning!","¡Vaya mañana!"],
     ["What + sustantivo plural o incontable","What beautiful mountains!","¡Qué montañas tan bonitas!"],
     ["How + adjetivo","How beautiful!","¡Qué bonito!"],
     ["How + adjetivo + sujeto + verbo","How tired you look!","¡Qué cansado se te ve!"]
   ]},
   aviso:["El artículo es lo que decide","<span class='wrong'>What beautiful!</span> &nbsp;&rarr;&nbsp; <span class='right'>How beautiful!</span> &nbsp;·&nbsp; <span class='wrong'>How a morning!</span> &nbsp;&rarr;&nbsp; <span class='right'>What a morning!</span>"]},

  {t:"Mantener viva la conversación", s:"las preguntas de seguimiento",
   p:"Ponerse al día no es soltar un discurso: es reaccionar. Estas cinco piezas son las que hacen que el otro siga contando, y en el IELTS Speaking se valoran como fluidez.",
   chips:[["Really?","¿En serio?"],["And then?","¿Y luego?"],["How come?","¿Cómo así?"],["No way!","¡No puede ser!"],["What happened next?","¿Qué pasó después?"],["That sounds like him.","Eso suena muy propio de él."]],
   aviso:["<i>How come?</i> no invierte","Es la única pregunta del inglés que se construye como una afirmación: <span class='right'>How come you didn't call?</span>, nunca <span class='wrong'>how come didn't you call</span>."]}
];

/* Sarah (A) aterriza en Tegucigalpa y David (B) la recoge */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd ˈoʊvər hɪr aɪ ˈkʊdnt faɪnd juː ɪn ɔːl ðoʊz ˈpiːpl", p:"déivid, óuvar jíar. ái kúdnt fáind iú in ol dóus píipl",
  b:[["David! Over here!","¡David! ¡Aquí!"],["I couldn't find you","No podía encontrarte"],["in all those people.","entre toda esa gente."]],
  n:"<b>Couldn't</b> + verbo base. La <i>l</i> no se pronuncia: «kúdnt»."},
 {s:"B", ipa:"ˈserə ˈwelkəm tuː hɑːnˈdʊrəs haʊ wʌz ðə flaɪt", p:"Séra. uélkam tu Jandúras. jáu uás da fláit",
  b:[["Sarah!","¡Sarah!"],["Welcome to Honduras.","Bienvenida a Honduras."],["How was the flight?","¿Qué tal el vuelo?"]]},
 {s:"A", ipa:"lɔːŋ bʌt faɪn ˈdʒuːliə slept ðə hoʊl weɪ ʃiːz stɪl ˈlʊkɪŋ fɔːr hɜːr ˈsuːtkeɪs", p:"long, bat fáin. Chúlia slept da jóul uéi. shíis stil lúking for jer súutkeis",
  b:[["Long, but fine.","Largo, pero bien."],["Julia slept","Julia durmió"],["the whole way.","todo el camino."],["She's still looking for","Sigue buscando"],["her suitcase.","su maleta."]]},
 {s:"B", ipa:"doʊnt ˈwʌri ɪt ˈɔːlweɪz teɪks ˈtwenti ˈmɪnɪts soʊ tel miː ˈevriθɪŋ", p:"dóunt uóri, it ólueis téiks tuénti mínits. sóu, tel mi évrizing",
  b:[["Don't worry,","No te preocupes,"],["it always takes","siempre tarda"],["twenty minutes.","veinte minutos."],["So, tell me everything.","Cuéntamelo todo."]]},
 {s:"A", ipa:"koʊld ˈveri koʊld ɪt snoʊd ðə deɪ bɪˈfɔːr ˈjestərdeɪ ænd ðə ˈbʌsɪz stɑːpt", p:"kóuld. véri kóuld. it snóud da déi bifór iésterdei, and da básis stapt",
  b:[["Cold.","Frío."],["Very cold.","Muchísimo frío."],["It snowed","Nevó"],["the day before yesterday","anteayer"],["and the buses stopped.","y los buses pararon."]]},
 {s:"B", ipa:"ˈrɪəli ðə hoʊl ˈsɪti", p:"ríili. da jóul síti",
  b:[["Really?","¿En serio?"],["The whole city?","¿La ciudad entera?"]],
  n:"<b>Really?</b> es la pregunta de seguimiento más barata y la que más se usa."},
 {s:"A", ipa:"ˈɔːlmoʊst aɪ wɔːkt tuː wɜːrk fɔːr tuː ˈaʊərz wen aɪ əˈraɪvd ˈnoʊbɑːdi wʌz ðer", p:"ólmoust. ái uókt tu uérk for tu áuars. uén ái aráivd, nóubadi uás der",
  b:[["Almost.","Casi."],["I walked to work","Caminé al trabajo"],["for two hours.","durante dos horas."],["When I arrived,","Cuando llegué,"],["nobody was there.","no había nadie."]],
  n:"<b>When I arrived, …</b> La frase del <i>when</i> va primero y lleva coma."},
 {s:"B", ipa:"tuː ˈaʊərz ɪn ðə snoʊ wʌt ə ˈmɔːrnɪŋ", p:"tu áuars in da snóu. uát a mórning",
  b:[["Two hours in the snow!","¡Dos horas en la nieve!"],["What a morning.","Vaya mañana."]],
  n:"<b>What a + sustantivo</b>. Con un adjetivo solo sería <i>How terrible!</i>"},
 {s:"A", ipa:"ɪt wʌz ˈterəbl ænd ðen ðə ˈɔːfɪs kloʊzd æt mɪdˈdeɪ", p:"it uás térabl. and den di ófis klóusd at midéi",
  b:[["It was terrible.","Fue horrible."],["And then","Y luego"],["the office closed","la oficina cerró"],["at midday.","al mediodía."]]},
 {s:"B", ipa:"əv ˈkɔːrs ɪt dɪd ænd jʊr ˈbrʌðər dɪd hi faɪnd ə dʒɑːb ɪn ði end", p:"av kórs it did. and iór bráder: did ji fáind a chab in di end",
  b:[["Of course it did.","Cómo no."],["And your brother?","¿Y tu hermano?"],["Did he find a job","¿Encontró trabajo"],["in the end?","al final?"]]},
 {s:"A", ipa:"hi dɪd hi sent miː ə ˈfoʊtoʊ əv hɪz desk ɑːn ðə fɜːrst deɪ", p:"ji did. ji sent mi a fóutou av jis desk an da ferst déi",
  b:[["He did.","Sí."],["He sent me a photo","Me mandó una foto"],["of his desk","de su escritorio"],["on the first day.","el primer día."]],
  n:"<b>Sent</b>, no <span class='wrong'>sended</span>. Y la respuesta corta repite el auxiliar: <i>he did</i>."},
 {s:"B", ipa:"aɪ rɪˈmembər hɪm hi ˈkʊdnt stɑːp ˈtɔːkɪŋ əˈbaʊt ˈfʊtbɔːl", p:"ái rimémbar jim. ji kúdnt stap tóking abáut fútbol",
  b:[["I remember him.","Me acuerdo de él."],["He couldn't stop","No paraba"],["talking about football.","de hablar de fútbol."]]},
 {s:"A", ipa:"hi stɪl kɑːnt sʌm θɪŋz doʊnt tʃeɪndʒ ænd juː juː pæst eɪ wʌn", p:"ji stil kant. sam zings dóunt chéinch. and iú: iú past éi-uán",
  b:[["He still can't.","Sigue sin poder."],["Some things don't change.","Hay cosas que no cambian."],["And you:","¿Y tú?"],["you passed A1!","¡Aprobaste A1!"]]},
 {s:"B", ipa:"aɪ dɪd ˈmɪstər ɔːrˈteɪɡə æskt miː twelv ˈkwestʃənz ænd aɪ ˈænsərd ɔːl əv ðem", p:"ái did. míster Ortéga askt mi tuélv kuéschons, and ái ánsard ol av dem",
  b:[["I did.","Sí."],["Mr. Ortega asked me","El señor Ortega me hizo"],["twelve questions","doce preguntas"],["and I answered","y contesté"],["all of them.","todas."]]},
 {s:"A", ipa:"aɪ njuː juː kʊd duː ɪt haʊ kʌm juː ˈnevər toʊld miː ðə mɑːrk", p:"ái niú iú kud du it. jáu kam iú névar tóuld mi da mark",
  b:[["I knew","Sabía"],["you could do it.","que podías."],["How come","¿Cómo así"],["you never told me","nunca me dijiste"],["the mark?","la nota?"]],
  n:"<b>How come</b> no invierte: se construye como una afirmación, a diferencia de <i>why didn't you…?</i>"},
 {s:"B", ipa:"bɪˈkɔːz hi ˈdɪdnt ɡɪv miː wʌn hi dʒʌst sed ˈwelkəm tuː eɪ tuː", p:"bikóos ji dídnt guiv mi uán. ji chast sed «uélkam tu éi-tu»",
  b:[["Because he didn't give me one.","Porque no me dio ninguna."],["He just said","Sólo dijo:"],["\"Welcome to A2\".","«Bienvenido a A2»."]]},
 {s:"A", ipa:"ðæt saʊndz laɪk hɪm soʊ wʌts ðə plæn fɔːr ðɪs wiːk", p:"dat sáunds láik jim. sóu, uáts da plan for dis uíik",
  b:[["That sounds like him.","Eso suena muy propio de él."],["So, what's the plan","Y bien, ¿cuál es el plan"],["for this week?","para esta semana?"]]},
 {s:"B", ipa:"ɑːn ˈsætərdeɪ ˈluːɪs ænd ˈmɑːrtəz ˌænɪˈvɜːrsəri ˈtwenti jɪrz", p:"an sáterdei, Luís and Mártas aniversari. tuénti íers",
  b:[["On Saturday,","El sábado,"],["Luis and Marta's anniversary.","el aniversario de Luis y Marta."],["Twenty years.","Veinte años."]]},
 {s:"A", ipa:"ˈtwenti wʌt ə ˈnʌmbər duː aɪ niːd tuː brɪŋ ˈsʌmθɪŋ", p:"tuénti. uát a námbar. du ái níid tu bring sámzing",
  b:[["Twenty!","¡Veinte!"],["What a number.","Vaya número."],["Do I need to bring","¿Necesito llevar"],["something?","algo?"]]},
 {s:"B", ipa:"ˈoʊnli jɔːrˈself ˈmɪsɪz ˈkæstro ˈstɑːrtɪd ˈkʊkɪŋ ɑːn ˈtuːzdeɪ ænd ʃiːz stɪl ɪn ðə ˈkɪtʃɪn", p:"óunli iorsélf. mísis Kástro stártid kúking an túusdei, and shíis stil in da kíchin",
  b:[["Only yourself.","Sólo a ti misma."],["Mrs. Castro started cooking","La señora Castro empezó a cocinar"],["on Tuesday","el martes"],["and she's still","y sigue"],["in the kitchen.","en la cocina."]]},
 {s:"A", ipa:"aɪ lʌv ðɪs striːt ɔːlˈredi oʊ hɪrz ˈdʒuːliə wɪð ðə ˈsuːtkeɪs", p:"ái lav dis stríit olrédi. óu, jíars Chúlia, uid da súutkeis",
  b:[["I love this street already.","Ya me encanta esta calle."],["Oh — here's Julia,","Ah, aquí viene Julia,"],["with the suitcase.","con la maleta."]]},
 {s:"B", ipa:"ˈfaɪnəli ˈdʒuːliə ˈwelkəm haʊ wʌz jʊr fɜːrst flaɪt tuː ˈsentrəl əˈmerɪkə", p:"fáinali. Chúlia, uélkam. jáu uás iór ferst fláit tu séntral América",
  b:[["Finally.","Por fin."],["Julia, welcome.","Julia, bienvenida."],["How was your first flight","¿Qué tal tu primer vuelo"],["to Central America?","a Centroamérica?"]]},
 {s:"A", ipa:"ʃiːl tel juː ɪn ðə kɑːr æz suːn æz ʃi siːz ðə ˈmaʊntənz ʃi woʊnt stɑːp ˈtɔːkɪŋ", p:"shíil tel iú in da kar. as súun as shi síis da máuntens, shi uóunt stap tóking",
  b:[["She'll tell you","Te lo contará"],["in the car.","en el carro."],["As soon as she sees","En cuanto vea"],["the mountains,","las montañas,"],["she won't stop talking.","no va a parar de hablar."]],
  n:"<b>As soon as she sees</b>, en presente aunque hable del futuro. Detrás de estos conectores el inglés nunca pone <i>will</i>."},
 {s:"B", ipa:"ðen lets ɡoʊ ðə kɑːr ɪz ˌaʊtˈsaɪd ænd maɪ ˈmʌðər ɪz ˈweɪtɪŋ wɪð lʌntʃ", p:"den lets góu. da kar is autsáid, and mái máder is uéiting uid lanch",
  b:[["Then let's go.","Pues vamos."],["The car is outside,","El carro está afuera,"],["and my mother is waiting","y mi mamá está esperando"],["with lunch.","con el almuerzo."]]}
];

const LECTURA = {
  titulo: "December, and everybody is back",
  entradilla: "El día que Sarah y Julia aterrizan en Tegucigalpa. El texto pone a trabajar lo de la Fase 1: la segunda tanda de verbos irregulares, <i>could</i> y <i>couldn't</i>, las frases con <i>when</i>, los conectores <i>as soon as</i> y <i>until</i>, y las exclamaciones. Cada párrafo cambia de persona.",
  parrafos: [
    "Sarah and Julia landed on Thursday afternoon. I couldn't find them at first, because three flights arrived together and the hall was full of people. As soon as I saw Sarah's yellow jacket, I shouted her name, and half the airport turned around.",
    "Sarah told me everything in the car. It snowed in Toronto the day before yesterday and the buses stopped, so she walked to work for two hours. When she arrived, the office was empty: they closed it at midday. What a morning.",
    "Her brother finally found a job. He sent her a photo of his desk on the first day, and he looks very serious in it. Two years ago he couldn't speak about anything except football. Some things change; that one didn't.",
    "Mrs. Castro started cooking on Tuesday and she didn't stop until last night. She made food for forty people, because Luis and Marta are celebrating twenty years on Saturday. Julia looked at the mountains until we got home, and she didn't say a word. Then she said: \"How beautiful.\""
  ],
  glosario: [
    ["landed","ˈlændɪd","aterrizaron","lándid"],
    ["couldn't find","ˈkʊdnt faɪnd","no podía encontrar","kúdnt fáind"],
    ["couldn't speak","ˈkʊdnt spiːk","no podía hablar","kúdnt spíik"],
    ["arrived","əˈraɪvd","llegaron","aráivd"],
    ["shouted","ˈʃaʊtɪd","grité","sháutid"],
    ["turned around","tɜːrnd əˈraʊnd","se dio la vuelta","ternd aráund"],
    ["told","toʊld","me contó","tóuld"],
    ["snowed","snoʊd","nevó","snóud"],
    ["stopped","stɑːpt","pararon","stapt"],
    ["walked","wɔːkt","caminó","uókt"],
    ["closed","kloʊzd","cerraron","klóusd"],
    ["found","faʊnd","encontró","fáund"],
    ["sent","sent","le mandó","sent"],
    ["looks","lʊks","se ve","luks"],
    ["change","tʃeɪndʒ","cambian","chéinch"],
    ["started","ˈstɑːrtɪd","empezó","stártid"],
    ["didn't stop","ˈdɪdnt stɑːp","no paró","dídnt stap"],
    ["made","meɪd","hizo","méid"],
    ["celebrating","ˈseləbreɪtɪŋ","celebran","sélabreiting"],
    ["looked at","lʊkt æt","miró","lukt at"],
    ["got home","ɡɑːt hoʊm","llegamos a casa","gat jóum"],
    ["didn't say","ˈdɪdnt seɪ","no dijo","dídnt séi"],
    ["said","sed","dijo","sed"],
    ["as soon as","æz suːn æz","en cuanto","as súun as"],
    ["until","ənˈtɪl","hasta","antíl"],
    ["at first","æt fɜːrst","al principio","at ferst"],
    ["the day before yesterday","ðə deɪ bɪˈfɔːr ˈjestərdeɪ","anteayer","da déi bifór iésterdei"],
    ["two years ago","tuː jɪrz əˈɡoʊ","hace dos años","tu íers agóu"],
    ["last night","læst naɪt","anoche","last náit"],
    ["What a morning","wʌt ə ˈmɔːrnɪŋ","vaya mañana","uát a mórning"],
    ["How beautiful","haʊ ˈbjuːtɪfl","qué hermoso","jáu biútiful"],
    ["flights","flaɪts","vuelos","fláits"],
    ["hall","hɔːl","sala","jol"],
    ["jacket","ˈdʒækɪt","chaqueta","chákit"],
    ["yellow","ˈjeloʊ","amarilla","iélou"],
    ["airport","ˈerpɔːrt","aeropuerto","érport"],
    ["half","hæf","la mitad de","jaf"],
    ["brother","ˈbrʌðər","hermano","bráder"],
    ["job","dʒɑːb","trabajo","chab"],
    ["desk","desk","escritorio","desk"],
    ["photo","ˈfoʊtoʊ","foto","fóutou"],
    ["football","ˈfʊtbɔːl","fútbol","fútbol"],
    ["except","ɪkˈsept","salvo","iksépt"],
    ["serious","ˈsɪriəs","serio","sírias"],
    ["empty","ˈempti","vacía","émpti"],
    ["midday","mɪdˈdeɪ","mediodía","midéi"],
    ["office","ˈɔːfɪs","oficina","ófis"],
    ["mountains","ˈmaʊntənz","montañas","máuntens"],
    ["word","wɜːrd","palabra","uérd"],
    ["forty","ˈfɔːrti","cuarenta","fórti"],
    ["twenty years","ˈtwenti jɪrz","veinte años","tuénti íers"],
    ["together","təˈɡeðər","a la vez","tuguéder"],
    ["finally","ˈfaɪnəli","por fin","fáinali"],
    ["full of","fʊl əv","lleno de","ful av"]
  ],
  preguntas: [
    { q:"Why couldn't David find them at first?",
      ops:["Because their flight was late","Because three flights arrived together and the hall was full","Because he was at the wrong airport"], ok:1,
      pista:"Primer párrafo: la razón va después de <i>because</i>." },
    { q:"What happened in Toronto the day before yesterday?",
      ops:["It snowed and the buses stopped","The office moved","Her brother lost his job"], ok:0,
      pista:"Segundo párrafo, segunda frase. Las otras dos opciones mezclan cosas del texto." },
    { q:"What did Julia do on the way home?",
      ops:["She talked about the flight","She slept in the car","She looked at the mountains without saying a word"], ok:2,
      pista:"Cuarto párrafo: dormir fue durante el vuelo, no en el carro." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-01"] = {
  meta: {
    id: "a2-01", nivel: "A2", numero: 1,
    titulo: "Reencuentro: ponerse al día",
    descriptor: "Puedo contar lo que me ha pasado desde la última vez que vi a alguien, reaccionar a lo que me cuenta y mantener viva la conversación.",
    escena: "Sarah & David · sala de llegadas del aeropuerto de Tegucigalpa, un jueves de diciembre",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
