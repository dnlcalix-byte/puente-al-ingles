/* ============================================================
   LECCIÓN A2-09 · Recetas e instrucciones
   Reparto: Mrs. Castro dicta por fin su receta; Julia dibuja y
   David escribe. La lectura reúne los seis puntos de la Fase 1
   —las cantidades aproximadas, los adverbios en -ly, let y make +
   verbo base, keep/stop + -ing, el condicional cero y los
   incontables que se vuelven contables— en ella, yo, ella otra vez
   y ellos.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La receta", items:[
    ["dough","doʊ","masa","dóu"],["corn flour","kɔːrn ˈflaʊər","harina de maíz","korn fláuar"],
    ["leaf","liːf","hoja","líif"],["leaves","liːvz","hojas","líivs"],
    ["meat","miːt","carne","míit"],["pot","pɑːt","olla","pat"],
    ["spoon","spuːn","cuchara","spúun"],["cloth","klɔːθ","paño","kloz"],
    ["heat","hiːt","fuego, calor","jíit"],["smell","smel","olor","smel"]
  ]},
  {g:"Cantidades aproximadas", items:[
    ["about","əˈbaʊt","más o menos","abáut"],["around","əˈraʊnd","alrededor de","aráund"],
    ["roughly","ˈrʌfli","aproximadamente","ráfli"],["a pinch of","ə pɪntʃ əv","una pizca de","a pinch av"],
    ["just enough","dʒʌst ɪˈnʌf","lo justo","chast ináf"],["a spoonful","ə ˈspuːnfʊl","una cucharada","a spúunful"],
    ["more or less","mɔːr ɔːr les","más o menos","mor or les"],["up to","ʌp tuː","hasta","ap tu"],
    ["at least","æt liːst","por lo menos","at líist"],["to the top","tuː ðə tɑːp","hasta arriba","tu da tap"]
  ]},
  {g:"Cómo se hace", items:[
    ["slowly","ˈsloʊli","despacio","slóuli"],["quickly","ˈkwɪkli","rápido","kuíkli"],
    ["carefully","ˈkerfəli","con cuidado","kérfali"],["gently","ˈdʒentli","suavemente","chéntli"],
    ["well","wel","bien","uel"],["badly","ˈbædli","mal","bádli"],
    ["exactly","ɪɡˈzæktli","exactamente","igsáktli"],["easily","ˈiːzəli","fácilmente","íisali"],
    ["hard","hɑːrd","fuerte","jard"],["one by one","wʌn baɪ wʌn","uno por uno","uán bái uán"]
  ]},
  {g:"Dar la instrucción", items:[
    ["let it rest","let ɪt rest","déjalo reposar","let it rest"],["keep stirring","kiːp ˈstɜːrɪŋ","sigue removiendo","kíip stérring"],
    ["stop stirring","stɑːp ˈstɜːrɪŋ","deja de remover","stap stérring"],["don't let it","doʊnt let ɪt","no dejes que","dóunt let it"],
    ["until it's soft","ənˈtɪl ɪts sɔːft","hasta que esté blando","antíl its soft"],["cover it","ˈkʌvər ɪt","tápalo","kávar it"],
    ["off the heat","ɔːf ðə hiːt","fuera del fuego","of da jíit"],["Understood","ˌʌndərˈstʊd","entendido","anderstúd"],
    ["That's all","ðæts ɔːl","eso es todo","dats ol"],["a break","ə breɪk","un descanso","a bréik"]
  ]}
];

const PRONKEY = [
  ["ou","La <i>gh</i> de <i>dough</i> no suena y la palabra acaba en <i>ou</i>.","dough &rarr; dóu"],
  ["z","La <i>th</i> sin voz de <i>cloth</i>.","cloth &rarr; kloz"],
  ["ch","Como en «coche». Es el final de <i>pinch</i>.","pinch &rarr; pinch"],
  ["sh","Como pedir silencio.","should &rarr; shud"],
  ["j","Aire por la garganta, sin raspar.","heat &rarr; jíit"],
  ["v","Labio de abajo contra los dientes de arriba.","leaves &rarr; líivs"],
  ["-ly","La terminación del adverbio: se pega al adjetivo y ya.","slow &rarr; slowly"],
  ["f &rarr; v","<i>Leaf</i> cambia la <i>f</i> por <i>v</i> en plural.","leaf &rarr; leaves"],
  ["r final","Apenas se toca; nunca vibra.","flour &rarr; fláuar"]
];

const VERBS = [
  ["to stir","reg","stir · stirs","stirred","will stir","remover"],
  ["to boil","reg","boil · boils","boiled","will boil","hervir"],
  ["to cover","reg","cover · covers","covered","will cover","tapar"],
  ["to wash","reg","wash · washes","washed","will wash","lavar"],
  ["to dry","reg","dry · dries","dried","will dry","secar"],
  ["to add","reg","add · adds","added","will add","añadir"],
  ["to dictate","reg","dictate · dictates","dictated","will dictate","dictar"],
  ["to draw","irr","draw · draws","drew","will draw","dibujar"],
  ["to let","irr","let · lets","let","will let","dejar"],
  ["to make","irr","make · makes","made","will make","hacer, obligar"],
  ["to keep","irr","keep · keeps","kept","will keep","seguir"],
  ["to stick","irr","stick · sticks","stuck","will stick","pegarse"]
];

const GRAMMAR = [
  {t:"Las cantidades aproximadas", s:"about, around, a pinch of",
   p:"Ninguna receta de verdad da cifras exactas. El inglés tiene un juego de aproximadores que van <b>delante de la cantidad</b>, y una palabra propia para «lo justo».",
   table:{head:["Expresión","Significa","Ejemplo"], rows:[
     ["about / around","más o menos","about a kilo of flour"],
     ["roughly","aproximadamente","roughly two hours"],
     ["a pinch of","una pizca de","a pinch of salt"],
     ["just enough","lo justo, ni más ni menos","just enough water"],
     ["up to","hasta un máximo de","up to three spoons"]
   ]},
   aviso:["<i>About</i> tiene dos oficios","Delante de una cantidad significa «más o menos»; delante de un tema, «sobre». <i>About a kilo</i> y <i>about the recipe</i> no se parecen en nada."]},

  {t:"Cómo se forman los adverbios", s:"-ly, y los que se niegan a cambiar",
   p:"El adjetivo describe la cosa; el <b>adverbio</b> describe cómo se hace la acción. Casi todos se forman añadiendo <b>-ly</b>, pero hay un grupo pequeño que no.",
   table:{head:["Adjetivo","Adverbio","Regla"], rows:[
     ["slow","slowly","+ly"],
     ["careful","carefully","+ly"],
     ["easy","easily","-y pasa a -ily"],
     ["gentle","gently","-le pasa a -ly"],
     ["good","<b>well</b>","irregular"],
     ["fast","<b>fast</b>","no cambia"],
     ["hard","<b>hard</b>","no cambia"]
   ]},
   aviso:["<i>Hardly</i> no es el adverbio de <i>hard</i>","<b>He works hard</b> = trabaja duro. <b>He hardly works</b> = casi no trabaja. La <i>-ly</i> aquí cambia el significado por completo."]},

  {t:"LET y MAKE + verbo base", s:"dejar que y hacer que",
   p:"Dos verbos muy frecuentes que se construyen igual y que en español piden un «que» y un subjuntivo. En inglés no hay ni «que» ni <b>to</b>: <b>let / make + persona o cosa + verbo base</b>.",
   table:{head:["Inglés","Español"], rows:[
     ["Let it rest.","Déjalo reposar."],
     ["Let her draw.","Déjala dibujar."],
     ["The smell makes you hungry.","El olor te da hambre."],
     ["She made them wash the leaves.","Les hizo lavar las hojas."]
   ]},
   aviso:["Nunca con <i>to</i>","<span class='wrong'>Let it to rest.</span> &nbsp;&rarr;&nbsp; <span class='right'>Let it rest.</span> &nbsp;·&nbsp; <span class='wrong'>She made them to wash.</span> &nbsp;&rarr;&nbsp; <span class='right'>She made them wash.</span>"]},

  {t:"KEEP y STOP", s:"seguir haciendo, dejar de hacer",
   p:"Los dos van con <b>-ing</b>, pero <i>stop</i> tiene una trampa: con <b>to</b> significa lo contrario de lo que parece.",
   table:{head:["Estructura","Significa","Ejemplo"], rows:[
     ["keep + -ing","seguir haciendo","Keep stirring."],
     ["stop + -ing","dejar de hacer eso","Stop stirring."],
     ["stop + to + verbo","parar para hacer otra cosa","She stopped to answer the phone."],
     ["keep on + -ing","seguir, con insistencia","He keeps on asking."]
   ]},
   aviso:["La trampa de <i>stop</i>","<b>Stop stirring</b> = deja de remover. <b>Stop to stir</b> = para lo que estés haciendo <i>para</i> remover. En una cocina, esa diferencia arruina un plato."]},

  {t:"El condicional cero", s:"si + presente, presente",
   p:"Para las reglas que se cumplen siempre —las leyes de la física y las de la cocina— el inglés usa <b>presente en las dos partes</b>. No hay futuro ni condicional en ningún lado.",
   chips:[["If it sticks, you add more flour.","Si se pega, añades más harina."],["If the leaf is wet, the tamal is wet.","Si la hoja está mojada, el tamal sale mojado."],["If you heat water, it boils.","Si calientas agua, hierve."],["If I stop, it burns.","Si paro, se quema."]],
   aviso:["Detrás de <i>if</i> nunca va <i>will</i>","<span class='wrong'>If it will stick…</span> &nbsp;&rarr;&nbsp; <span class='right'>If it sticks…</span> Es la misma regla que ya viste con <i>when</i> y <i>as soon as</i>."]},

  {t:"Incontables que se vuelven contables", s:"a coffee, two waters",
   p:"Un incontable puede contarse cuando lo que cuentas son <b>porciones o clases</b>. Es lo que pasa en cualquier cafetería del mundo.",
   table:{head:["Incontable","Contable","Qué cambia"], rows:[
     ["coffee (la bebida)","two coffees","dos tazas"],
     ["water","two waters","dos botellas"],
     ["cheese","three cheeses","tres clases"],
     ["paper","a paper","un periódico o un artículo"]
   ]},
   aviso:["Sólo funciona con porciones y clases","<span class='right'>Two coffees, please.</span> en un café, sí. <span class='wrong'>I drink two coffees every day of coffee.</span> no: cuando hablas de la sustancia en general, vuelve a ser incontable."]}
];

/* Mrs. Castro (A) dicta la receta; David (B) escribe y Julia dibuja */
const DIALOGUE = [
 {s:"A", ipa:"ɑːr juː ˈredi raɪt ˈsloʊli bɪˈkɔːz aɪ ˈoʊnli seɪ ðɪs wʌns", p:"ar iú rédi. ráit slóuli, bikóos ái óunli séi dis uáns",
  b:[["Are you ready?","¿Listo?"],["Write slowly,","Escribe despacio,"],["because I only say this","porque esto lo digo"],["once.","una sola vez."]],
  n:"<b>Slowly</b> es adverbio: describe cómo se escribe, no cómo es la escritura."},
 {s:"B", ipa:"aɪm ˈredi ˈdʒuːliə hæz ði ˈʌðər ˈnoʊtbʊk", p:"áim rédi. Chúlia jas di áder nóutbuk",
  b:[["I'm ready.","Estoy listo."],["Julia has","Julia tiene"],["the other notebook.","el otro cuaderno."]]},
 {s:"A", ipa:"ɡʊd fɜːrst ðə doʊ əˈbaʊt ə ˈkiːloʊ əv kɔːrn ˈflaʊər ænd dʒʌst ɪˈnʌf ˈwɔːtər", p:"gud. ferst, da dóu: abáut a kílou av korn fláuar and chast ináf uóter",
  b:[["Good. First, the dough:","Bien. Primero, la masa:"],["about a kilo","más o menos un kilo"],["of corn flour","de harina de maíz"],["and just enough water.","y lo justo de agua."]],
  n:"<b>About</b> delante de una cantidad es «más o menos», no «sobre»."},
 {s:"B", ipa:"haʊ mʌtʃ ɪz dʒʌst ɪˈnʌf", p:"jáu mach is «chast ináf»",
  b:[["How much is","¿Cuánto es"],["\"just enough\"?","«lo justo»?"]]},
 {s:"A", ipa:"ənˈtɪl ɪt stɑːps ˈstɪkɪŋ tuː jʊr hændz ɪf ɪt stɪks juː æd mɔːr ˈflaʊər", p:"antíl it staps stíking tu iór jands. if it stiks, iú ad mor fláuar",
  b:[["Until it stops sticking","Hasta que deje de pegarse"],["to your hands.","a las manos."],["If it sticks,","Si se pega,"],["you add more flour.","añades más harina."]],
  n:"<b>Stops sticking</b> con <i>-ing</i>: deja de hacerlo. Y el condicional cero: <i>if</i> + presente, presente."},
 {s:"B", ipa:"ɪf ɪt stɪks æd mɔːr ˈflaʊər ðæts ə ruːl aɪ kæn ˈfɑːloʊ", p:"if it stiks, ad mor fláuar. dats a rúul ái kan fálou",
  b:[["If it sticks,","Si se pega,"],["add more flour.","añadir más harina."],["That's a rule","Esa es una regla"],["I can follow.","que puedo seguir."]]},
 {s:"A", ipa:"ðen let ɪt rest ˈtwenti ˈmɪnɪts ˈkʌvərd", p:"den let it rest. tuénti mínits, kávard",
  b:[["Then let it rest.","Luego déjala reposar."],["Twenty minutes,","Veinte minutos,"],["covered.","tapada."]],
  n:"<b>Let it rest</b>, sin <i>to</i>. El español mete un «que» donde el inglés no pone nada."},
 {s:"B", ipa:"let ɪt rest ˈtwenti ˈmɪnɪts ˈkʌvərd wɪð wʌt", p:"let it rest tuénti mínits. kávard uid uát",
  b:[["Let it rest twenty minutes.","Dejarla reposar veinte minutos."],["Covered with what?","¿Tapada con qué?"]]},
 {s:"A", ipa:"ə klɔːθ ə kliːn wʌn naʊ ðə miːt kʊk ɪt ˈsloʊli ˈnevər ˈkwɪkli", p:"a kloz. a klíin uán. náu da míit: kuk it slóuli, névar kuíkli",
  b:[["A cloth. A clean one.","Un paño. Uno limpio."],["Now the meat:","Ahora la carne:"],["cook it slowly,","cocínala despacio,"],["never quickly.","nunca rápido."]]},
 {s:"B", ipa:"ˈsloʊli haʊ duː aɪ noʊ wen ɪts ˈredi", p:"slóuli. jáu du ái nóu uén its rédi",
  b:[["Slowly.","Despacio."],["How do I know","¿Cómo sé"],["when it's ready?","cuándo está lista?"]]},
 {s:"A", ipa:"wen ðə smel meɪks juː ˈhʌŋɡri ɪts ˈredi ðæts ði ˈoʊnli ˈtaɪmər aɪ juːz", p:"uén da smel méiks iú jángri, its rédi. dats di óunli táimar ái iúus",
  b:[["When the smell","Cuando el olor"],["makes you hungry,","te dé hambre,"],["it's ready.","está lista."],["That's the only timer I use.","Ese es el único reloj que uso."]],
  n:"<b>Makes you hungry</b>: <i>make</i> + persona + adjetivo o verbo base, sin <i>to</i>."},
 {s:"B", ipa:"aɪm ˈraɪtɪŋ ðæt daʊn ɪɡˈzæktli æz juː sed ɪt", p:"áim ráiting dat dáun igsáktli as iú sed it",
  b:[["I'm writing that down","Eso lo estoy apuntando"],["exactly as you said it.","exactamente como lo dijo."]]},
 {s:"A", ipa:"ɡʊd æd ə pɪntʃ əv sɔːlt əˈraʊnd tuː spuːnz əv ɔɪl ænd kiːp ˈstɜːrɪŋ", p:"gud. ad a pinch av solt, aráund tu spúuns av óil, and kíip stérring",
  b:[["Good. Add a pinch of salt,","Bien. Añade una pizca de sal,"],["around two spoons of oil,","unas dos cucharadas de aceite,"],["and keep stirring.","y sigue removiendo."]]},
 {s:"B", ipa:"kiːp ˈstɜːrɪŋ fɔːr haʊ lɔːŋ", p:"kíip stérring for jáu long",
  b:[["Keep stirring","¿Seguir removiendo"],["for how long?","cuánto tiempo?"]]},
 {s:"A", ipa:"ənˈtɪl ɪts sɔːft doʊnt stɑːp ˈstɜːrɪŋ tuː ˈænsər jʊr foʊn", p:"antíl its soft. dóunt stap stérring tu ánsar iór fóun",
  b:[["Until it's soft.","Hasta que esté blanda."],["Don't stop stirring","No dejes de remover"],["to answer your phone.","para contestar el teléfono."]],
  n:"Las dos formas en una línea: <b>stop stirring</b> es dejar de remover; <b>to answer</b> dice para qué pararías."},
 {s:"B", ipa:"ˌʌndərˈstʊd foʊn ɔːf", p:"anderstúd. fóun of",
  b:[["Understood.","Entendido."],["Phone off.","Teléfono apagado."]]},
 {s:"A", ipa:"ðen ðə liːvz wɑːʃ ðem wel ænd draɪ ðem wel ɪf ðə liːf ɪz wet ðə təˈmɑːl ɪz wet", p:"den da líivs. uásh dem uel and drái dem uel. if da líif is uet, da tamál is uet",
  b:[["Then the leaves.","Luego las hojas."],["Wash them well","Lávalas bien"],["and dry them well.","y sécalas bien."],["If the leaf is wet,","Si la hoja está mojada,"],["the tamal is wet.","el tamal sale mojado."]],
  n:"<b>Well</b> es el adverbio de <i>good</i>: no existe <span class='wrong'>goodly</span>."},
 {s:"B", ipa:"wɑːʃ wel draɪ wel ˈdʒuːliə ɪz ˈdrɔːɪŋ ðə liːf ɪn hɜːr ˈnoʊtbʊk", p:"uásh uel, drái uel. Chúlia is dróoing da líif in jer nóutbuk",
  b:[["Wash well, dry well.","Lavar bien, secar bien."],["Julia is drawing the leaf","Julia está dibujando la hoja"],["in her notebook.","en su cuaderno."]]},
 {s:"A", ipa:"let hɜːr drɔː ˈdrɔːɪŋ helps naʊ ˈsɪksti əv ðem wʌn baɪ wʌn", p:"let jer dróo. dróoing jelps. náu, síksti av dem, uán bái uán",
  b:[["Let her draw.","Déjala dibujar."],["Drawing helps.","Dibujar ayuda."],["Now, sixty of them,","Ahora, sesenta,"],["one by one.","uno por uno."]]},
 {s:"B", ipa:"ˈsɪksti ænd haʊ lɔːŋ ɪn ðə pɑːt", p:"síksti. and jáu long in da pat",
  b:[["Sixty.","Sesenta."],["And how long","¿Y cuánto tiempo"],["in the pot?","en la olla?"]]},
 {s:"A", ipa:"əˈbaʊt tuː ˈaʊərz ˈwɔːtər tuː ðə tɑːp ænd doʊnt let ɪt stɑːp ˈbɔɪlɪŋ", p:"abáut tu áuars. uóter tu da tap, and dóunt let it stap bóiling",
  b:[["About two hours.","Unas dos horas."],["Water to the top,","Agua hasta arriba,"],["and don't let it","y no dejes que"],["stop boiling.","deje de hervir."]]},
 {s:"B", ipa:"doʊnt let ɪt stɑːp ˈbɔɪlɪŋ ɪz ðæt ɔːl", p:"dóunt let it stap bóiling. is dat ol",
  b:[["Don't let it stop boiling.","No dejar que deje de hervir."],["Is that all?","¿Eso es todo?"]]},
 {s:"A", ipa:"ðæts ɔːl naʊ meɪk jɔːrˈselvz tuː ˈkɑːfiz ænd stɑːp ˈraɪtɪŋ jʊr hænd ɪz ˈʃeɪkɪŋ", p:"dats ol. náu méik iorsélvs tu káfis and stap ráiting: iór jand is shéiking",
  b:[["That's all.","Eso es todo."],["Now make yourselves","Ahora háganse"],["two coffees","dos cafés"],["and stop writing:","y dejen de escribir:"],["your hand is shaking.","te tiembla la mano."]],
  n:"<b>Two coffees</b>: el café es incontable, pero dos tazas sí se cuentan."},
 {s:"B", ipa:"tuː ˈkɑːfiz ænd ə breɪk θæŋk juː ˈmɪsɪz ˈkæstro ðɪs ˈresəpi ɪɡˈzɪsts ɑːn ˈpeɪpər naʊ", p:"tu káfis and a bréik. zánk iú, mísis Kástro: dis résapi igsísts an péipar náu",
  b:[["Two coffees and a break.","Dos cafés y un descanso."],["Thank you, Mrs. Castro:","Gracias, señora Castro:"],["this recipe exists","esta receta existe"],["on paper now.","en papel ahora."]]}
];

const LECTURA = {
  titulo: "The recipe, at last",
  entradilla: "Cuarenta años de cocina, dictados en una tarde. El texto pone a trabajar lo de la Fase 1: las cantidades aproximadas, los adverbios en <i>-ly</i> y los que no cambian, <i>let</i> y <i>make</i> con verbo base, <i>keep</i> y <i>stop</i> con <i>-ing</i>, y el condicional cero. Cada párrafo cambia de persona.",
  parrafos: [
    "Mrs. Castro dictated the recipe on the twenty-seventh, and she said it only once. She speaks quickly when she is nervous, and she was nervous: forty years of doing something without writing it down make you nervous.",
    "I wrote slowly and Julia drew the leaves. The dough is about a kilo of corn flour and just enough water: if it sticks to your hands, you add more flour. Then you let it rest for twenty minutes under a clean cloth.",
    "The meat cooks slowly, never quickly, and Mrs. Castro doesn't use a clock. \"When the smell makes you hungry, it's ready,\" she says. You keep stirring until it is soft, and you don't stop stirring to answer the phone. Her sister did that in 1992 and nobody has forgotten it.",
    "Pablo and Nico arrived at the end and asked for two coffees. Mrs. Castro let them stay, but she made them wash the leaves. If the leaf is wet, the tamal is wet, so they dried them carefully, one by one. Sixty leaves, and they didn't complain once."
  ],
  glosario: [
    ["dictated","ˈdɪkteɪtɪd","dictó","díkteitid"],
    ["said","sed","la dijo","sed"],
    ["says","sez","dice","ses"],
    ["speaks","spiːks","habla","spíiks"],
    ["wrote","roʊt","escribí","róut"],
    ["drew","druː","dibujó","drúu"],
    ["sticks","stɪks","se pega","stiks"],
    ["add","æd","añades","ad"],
    ["let it rest","let ɪt rest","la dejas reposar","let it rest"],
    ["let them stay","let ðem steɪ","los dejó quedarse","let dem stéi"],
    ["make you nervous","meɪk juː ˈnɜːrvəs","te ponen nerviosa","méik iú nérvas"],
    ["makes you hungry","meɪks juː ˈhʌŋɡri","te da hambre","méiks iú jángri"],
    ["made them wash","meɪd ðem wɑːʃ","les hizo lavar","méid dem uásh"],
    ["cooks","kʊks","se cocina","kuks"],
    ["keep stirring","kiːp ˈstɜːrɪŋ","sigues removiendo","kíip stérring"],
    ["stop stirring","stɑːp ˈstɜːrɪŋ","dejas de remover","stap stérring"],
    ["arrived","əˈraɪvd","llegaron","aráivd"],
    ["asked for","æskt fɔːr","pidieron","askt for"],
    ["dried","draɪd","las secaron","dráid"],
    ["didn't complain","ˈdɪdnt kəmˈpleɪn","no se quejaron","dídnt kompléin"],
    ["has forgotten","hæz fərˈɡɑːtn","ha olvidado","jas forgátn"],
    ["slowly","ˈsloʊli","despacio","slóuli"],
    ["quickly","ˈkwɪkli","rápido","kuíkli"],
    ["carefully","ˈkerfəli","con cuidado","kérfali"],
    ["about","əˈbaʊt","más o menos","abáut"],
    ["just enough","dʒʌst ɪˈnʌf","lo justo de","chast ináf"],
    ["recipe","ˈresəpi","receta","résapi"],
    ["twenty-seventh","ˌtwenti ˈsevnθ","veintisiete","tuénti-sévnz"],
    ["seventh","ˈsevnθ","séptimo","sévnz"],
    ["doing","ˈduːɪŋ","hacer","dúing"],
    ["writing","ˈraɪtɪŋ","escribir","ráiting"],
    ["down","daʊn","(partícula de write down)","dáun"],
    ["dough","doʊ","masa","dóu"],
    ["corn flour","kɔːrn ˈflaʊər","harina de maíz","korn fláuar"],
    ["flour","ˈflaʊər","harina","fláuar"],
    ["water","ˈwɔːtər","agua","uóter"],
    ["hands","hændz","manos","jands"],
    ["cloth","klɔːθ","paño","kloz"],
    ["meat","miːt","carne","míit"],
    ["clock","klɑːk","reloj","klak"],
    ["smell","smel","olor","smel"],
    ["phone","foʊn","teléfono","fóun"],
    ["sister","ˈsɪstər","hermana","sístar"],
    ["leaves","liːvz","hojas","líivs"],
    ["leaf","liːf","hoja","líif"],
    ["tamal","təˈmɑːl","tamal","tamál"],
    ["coffees","ˈkɑːfiz","cafés","káfis"],
    ["wet","wet","mojada","uet"],
    ["soft","sɔːft","blanda","soft"],
    ["clean","kliːn","limpio","klíin"],
    ["nervous","ˈnɜːrvəs","nerviosa","nérvas"],
    ["ready","ˈredi","lista","rédi"],
    ["hungry","ˈhʌŋɡri","hambriento","jángri"],
    ["twenty minutes","ˈtwenti ˈmɪnɪts","veinte minutos","tuénti mínits"],
    ["forty years","ˈfɔːrti jɪrz","cuarenta años","fórti íers"],
    ["sixty","ˈsɪksti","sesenta","síksti"],
    ["one by one","wʌn baɪ wʌn","una por una","uán bái uán"],
    ["at the end","æt ði end","al final","at di end"],
    ["without","wɪˈðaʊt","sin","uidáut"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["once","wʌns","una vez","uáns"]
  ],
  preguntas: [
    { q:"How do you know the meat is ready?",
      ops:["After exactly one hour","When the smell makes you hungry","When it changes colour"], ok:1,
      pista:"Tercer párrafo: ella no usa reloj, así que el aviso llega por otro sentido." },
    { q:"What do you do if the dough sticks to your hands?",
      ops:["Add more flour","Add more water","Start again"], ok:0,
      pista:"Segundo párrafo: es una regla que se cumple siempre, en condicional cero." },
    { q:"What did Mrs. Castro make Pablo and Nico do?",
      ops:["Leave the kitchen","Write the recipe","Wash and dry the leaves"], ok:2,
      pista:"Cuarto párrafo: los dejó quedarse, pero a cambio de algo." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-09"] = {
  meta: {
    id: "a2-09", nivel: "A2", numero: 9,
    titulo: "Recetas e instrucciones",
    descriptor: "Puedo seguir y dar instrucciones paso a paso, indicar cantidades aproximadas y decir cómo se hace cada cosa.",
    escena: "Mrs. Castro & David · su cocina, el 27 de diciembre, dictando la receta",
    personajeIA: "Mrs. Castro", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
