/* ============================================================
   LECCIÓN A2-07 · Cantidades: much, many, a few
   Reparto: Ana, en el mercado a las siete de la mañana del 26 de
   diciembre. La lectura reúne los seis puntos de la Fase 1 —much y
   many en afirmativa, a few frente a few, plenty of y a couple of,
   los envases, all/most/some/none y both/either/neither— en
   nosotros, ella, ellos y ella otra vez.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Medir la cantidad", items:[
    ["a lot of","ə lɑːt əv","mucho, muchos","a lat av"],["plenty of","ˈplenti əv","de sobra","plénti av"],
    ["a couple of","ə ˈkʌpl əv","un par de","a kápl av"],["a few","ə fjuː","unos cuantos","a fiú"],
    ["few","fjuː","pocos","fiú"],["a little","ə ˈlɪtl","un poco de","a lítl"],
    ["little","ˈlɪtl","poco","lítl"],["several","ˈsevrəl","varios","sévral"],
    ["enough","ɪˈnʌf","suficiente","ináf"],["hardly any","ˈhɑːrdli ˈeni","casi nada","járdli éni"]
  ]},
  {g:"Envases y medidas", items:[
    ["a kilo of","ə ˈkiːloʊ əv","un kilo de","a kílou av"],["half a kilo","hæf ə ˈkiːloʊ","medio kilo","jaf a kílou"],
    ["a bag of","ə bæɡ əv","una bolsa de","a bag av"],["a bottle of","ə ˈbɑːtl əv","una botella de","a bátl av"],
    ["a tin of","ə tɪn əv","una lata de","a tin av"],["a packet of","ə ˈpækɪt əv","un paquete de","a pákit av"],
    ["a slice of","ə slaɪs əv","una rebanada de","a sláis av"],["a piece of","ə piːs əv","un trozo de","a píis av"],
    ["a dozen","ə ˈdʌzn","una docena","a dásn"],["each","iːtʃ","cada uno","íich"]
  ]},
  {g:"En el mercado", items:[
    ["tomatoes","təˈmeɪtoʊz","tomates","toméitous"],["avocado","ˌævəˈkɑːdoʊ","aguacate","avokádou"],
    ["rice","raɪs","arroz","ráis"],["oil","ɔɪl","aceite","óil"],
    ["sugar","ˈʃʊɡər","azúcar","shúgar"],["coffee","ˈkɑːfi","café","káfi"],
    ["eggs","eɡz","huevos","egs"],["stall","stɔːl","puesto","stol"],
    ["fresh","freʃ","fresco","fresh"],["lempiras","lemˈpiːrəs","lempiras","lempíras"]
  ]},
  {g:"Repartir el total", items:[
    ["all of","ɔːl əv","todo, todos","ol av"],["most of","moʊst əv","la mayoría de","móust av"],
    ["some of","sʌm əv","algunos de","sam av"],["none of","nʌn əv","ninguno de","nan av"],
    ["both","boʊθ","los dos","bóuz"],["either","ˈiːðər","cualquiera de los dos","íider"],
    ["neither","ˈniːðər","ninguno de los dos","níider"],["the rest","ðə rest","el resto","da rest"],
    ["anyway","ˈeniweɪ","de todos modos","éniuei"],["only","ˈoʊnli","sólo","óunli"]
  ]}
];

const PRONKEY = [
  ["sh","Como pedir silencio. La <i>s</i> de <i>sugar</i> suena así.","sugar &rarr; shúgar"],
  ["ch","Como en «coche».","each &rarr; íich"],
  ["z","La <i>th</i> sin voz de <i>both</i>.","both &rarr; bóuz"],
  ["d suave","La <i>th</i> con voz de <i>either</i> y <i>neither</i>.","either &rarr; íider"],
  ["j","Aire por la garganta, sin raspar.","hardly &rarr; járdli"],
  ["v","Labio de abajo contra los dientes de arriba.","several &rarr; sévral"],
  ["fiú","La <i>ew</i> de <i>few</i>: una <i>i</i> que se abre a <i>u</i>.","few &rarr; fiú"],
  ["l sola","Al final de sílaba se come la vocal: «bátl», no «bátel».","bottle &rarr; bátl"],
  ["r final","Apenas se toca; nunca vibra.","sugar &rarr; shúgar"]
];

const VERBS = [
  ["to weigh","reg","weigh · weighs","weighed","will weigh","pesar"],
  ["to count","reg","count · counts","counted","will count","contar"],
  ["to add","reg","add · adds","added","will add","añadir"],
  ["to need","reg","need · needs","needed","will need","necesitar"],
  ["to cost","irr","cost · costs","cost","will cost","costar"],
  ["to buy","irr","buy · buys","bought","will buy","comprar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to take","irr","take · takes","took","will take","llevarse"],
  ["to sell","irr","sell · sells","sold","will sell","vender"],
  ["to spend","irr","spend · spends","spent","will spend","gastar"],
  ["to leave","irr","leave · leaves","left","will leave","dejar"],
  ["to hurry up","reg","hurry up · hurries up","hurried up","will hurry up","darse prisa"]
];

const GRAMMAR = [
  {t:"MUCH y MANY casi no se usan en afirmativa", s:"a lot of se lleva el trabajo",
   p:"Es un detalle que casi nadie enseña y que cambia el sonido de tu inglés. <b>Much</b> y <b>many</b> viven cómodos en negativas y preguntas; en afirmativa suenan raros o muy formales, y se prefiere <b>a lot of</b>.",
   table:{head:["Frase","Natural","Forzado"], rows:[
     ["Negativa","We don't need much sugar.","—"],
     ["Pregunta","How many do we need?","—"],
     ["Afirmativa","She uses <b>a lot of</b> rice.","<span class='wrong'>She uses much rice.</span>"],
     ["Afirmativa","There were <b>a lot of</b> people.","<i>There were many people</i> (formal)"]
   ]},
   aviso:["<i>A lot of</i> sirve para todo","No distingue entre contables e incontables, así que en caso de duda es la apuesta segura. <i>Much</i> y <i>many</i> se reservan para negar y preguntar."]},

  {t:"A FEW frente a FEW", s:"el artículo cambia el sentido entero",
   p:"La misma palabra con y sin <i>a</i> dice cosas opuestas. <b>A few</b> es positivo: hay algunos, suficientes. <b>Few</b> es negativo: hay pocos, casi ninguno. Lo mismo pasa con <i>a little</i> y <i>little</i>.",
   table:{head:["Forma","Con","Significa","Ejemplo"], rows:[
     ["a few","contables","unos cuantos, y basta","We need a few things."],
     ["few","contables","pocos, y es un problema","We have few eggs."],
     ["a little","incontables","un poco, y basta","Add a little sugar."],
     ["little","incontables","poco, y es un problema","I have little patience."]
   ]},
   aviso:["La prueba del vaso","<i>A few</i> y <i>a little</i> miran el vaso medio lleno; <i>few</i> y <i>little</i>, medio vacío. Si quieres decir «pocos» sin queja, casi siempre lo que buscas es <b>a few</b>."]},

  {t:"PLENTY OF, A COUPLE OF, SEVERAL", s:"las cantidades del día a día",
   p:"Tres expresiones que se oyen constantemente y que ningún libro pone junto a <i>much</i> y <i>many</i>.",
   table:{head:["Expresión","Cuánto","Ejemplo"], rows:[
     ["plenty of","de sobra","We have plenty of money."],
     ["a couple of","dos, o casi dos","a couple of avocados"],
     ["several","varios, más de dos","several bags"],
     ["hardly any","casi nada","There's hardly any sugar left."]
   ]},
   aviso:["<i>Plenty</i> ya incluye «suficiente»","<span class='wrong'>enough plenty</span> no existe. <i>Plenty of time</i> significa tiempo de sobra, y por eso no admite refuerzo."]},

  {t:"Los envases y las medidas", s:"a kilo of, a bottle of, a slice of",
   p:"Los incontables no se pueden numerar directamente, así que el inglés los <b>envasa</b>. La fórmula es siempre la misma: <b>cantidad + of + sustantivo</b>.",
   chips:[["a kilo of tomatoes","un kilo de tomates"],["a bottle of oil","una botella de aceite"],["a bag of rice","una bolsa de arroz"],["a slice of bread","una rebanada de pan"],["half a kilo of coffee","medio kilo de café"],["a dozen eggs","una docena de huevos"]],
   aviso:["<i>A dozen</i> es la excepción","No lleva <i>of</i> delante del sustantivo: <span class='right'>a dozen eggs</span>, no <span class='wrong'>a dozen of eggs</span>. Sí lo lleva cuando el grupo ya está definido: <i>a dozen of those</i>."]},

  {t:"ALL, MOST, SOME, NONE", s:"repartir un total",
   p:"Para decir qué parte de un grupo, el inglés usa estas cuatro palabras. Llevan <b>of</b> cuando el grupo está definido, y no lo llevan cuando se habla en general.",
   table:{head:["En general","De un grupo concreto"], rows:[
     ["All tomatoes are red.","All <b>of</b> these tomatoes are red."],
     ["Most people cook at home.","Most <b>of</b> the people here cook."],
     ["Some markets open at six.","Some <b>of</b> the markets open at six."],
     ["—","None <b>of</b> them were cheap."]
   ]},
   aviso:["<i>None</i> ya es negativo","<span class='wrong'>None of them weren't cheap.</span> &nbsp;&rarr;&nbsp; <span class='right'>None of them were cheap.</span> Y en inglés cuidado se prefiere el verbo en singular: <i>none of them <b>was</b></i>."]},

  {t:"BOTH, EITHER, NEITHER", s:"cuando son exactamente dos",
   p:"Para grupos de dos, el inglés tiene palabras propias. Usar <i>all</i> o <i>none</i> con dos cosas suena mal.",
   table:{head:["Palabra","Significa","Ejemplo"], rows:[
     ["both","los dos","Both bags, please."],
     ["either","uno cualquiera de los dos","Either bag is fine."],
     ["neither","ninguno de los dos","Neither of us can cook."],
     ["both … and","tanto … como","both Pablo and Nico"]
   ]},
   aviso:["<i>Either</i> y <i>neither</i> van en singular","<span class='right'>Neither of us <b>is</b> going.</span> Aunque hablen de dos personas, el verbo va en tercera del singular. Y <i>both</i> sí es plural: <i>both <b>are</b> fine</i>."]}
];

/* Ana (A) y David (B) en el mercado, a las siete del 26 de diciembre */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd ˈhʌri ʌp ðer ɑːr tuː ˈmeni ˈpiːpl ɔːlˈredi ænd ɪts ˈoʊnli ˈsevn", p:"déivid, jári ap. der ar tu méni píipl olrédi, and its óunli sévn",
  b:[["David, hurry up.","David, apúrate."],["There are too many people","Hay demasiada gente"],["already","ya"],["and it's only seven.","y son apenas las siete."]]},
 {s:"B", ipa:"ɪts ðə ˈtwenti sɪksθ ˈevribɑːdi ɪz ˈkʊkɪŋ əˈɡen", p:"its da tuénti-síksz. évribadi is kúking aguén",
  b:[["It's the twenty-sixth.","Es veintiséis."],["Everybody is cooking","Todo el mundo está cocinando"],["again.","otra vez."]]},
 {s:"A", ipa:"ˈevribɑːdi raɪt haʊ mʌtʃ ˈmʌni duː wi hæv", p:"évribadi. ráit: jáu mach máni du ui jav",
  b:[["Everybody.","Todo el mundo."],["Right:","A ver:"],["how much money do we have?","¿cuánto dinero tenemos?"]],
  n:"<b>How much</b> con incontables. Con <i>lempiras</i> contados sería <i>how many</i>."},
 {s:"B", ipa:"fɔːr ˈhʌndrəd lemˈpiːrəs ɪz ðæt ɪˈnʌf", p:"for jándred lempíras. is dat ináf",
  b:[["Four hundred lempiras.","Cuatrocientos lempiras."],["Is that enough?","¿Alcanza?"]]},
 {s:"A", ipa:"ɪts ˈplenti wi ˈoʊnli niːd ə fjuː θɪŋz riːd miː ðə lɪst", p:"its plénti. ui óunli níid a fiú zings. ríid mi da list",
  b:[["It's plenty.","De sobra."],["We only need","Sólo necesitamos"],["a few things.","unas cuantas cosas."],["Read me the list.","Léeme la lista."]],
  n:"<b>A few</b>, con artículo: unas cuantas y suficientes. Sin artículo sonaría a queja."},
 {s:"B", ipa:"ə ˈkiːloʊ əv təˈmeɪtoʊz tuː bæɡz əv raɪs ə ˈbɑːtl əv ɔɪl ænd sʌm ˈkɑːfi", p:"a kílou av toméitous, tu bags av ráis, a bátl av óil and sam káfi",
  b:[["A kilo of tomatoes,","Un kilo de tomates,"],["two bags of rice,","dos bolsas de arroz,"],["a bottle of oil","una botella de aceite"],["and some coffee.","y café."]],
  n:"Los incontables se envasan: <b>a kilo of</b>, <b>a bag of</b>, <b>a bottle of</b>."},
 {s:"A", ipa:"ænd eɡz wi hæv ˈveri fjuː eɡz æt hoʊm", p:"and egs. ui jav véri fiú egs at jóum",
  b:[["And eggs.","Y huevos."],["We have very few eggs","Tenemos muy pocos huevos"],["at home.","en la casa."]],
  n:"<b>Few</b> sin artículo: pocos, y eso es un problema."},
 {s:"B", ipa:"fjuː ɔːr ə fjuː", p:"fiú or a fiú",
  b:[["Few","¿Pocos"],["or a few?","o unos cuantos?"]]},
 {s:"A", ipa:"fjuː tuː ðæts ðə ˈdɪfrəns ænd juː noʊ ɪt", p:"fiú. tu. dats da dífrens, and iú nóu it",
  b:[["Few.","Pocos."],["Two.","Dos."],["That's the difference","Esa es la diferencia,"],["and you know it.","y la conoces."]]},
 {s:"B", ipa:"aɪ duː naʊ haʊ ˈmeni duː wi niːd", p:"ái du náu. jáu méni du ui níid",
  b:[["I do now.","Ahora sí."],["How many do we need?","¿Cuántos necesitamos?"]]},
 {s:"A", ipa:"ə ˈdʌzn ænd ə ˈkʌpl əv ˌævəˈkɑːdoʊz ɪf ðeɪ ˈɑːrnt ɪkˈspensɪv", p:"a dásn. and a kápl av avokádous, if déi árnt ikspénsiv",
  b:[["A dozen.","Una docena."],["And a couple of avocados,","Y un par de aguacates,"],["if they aren't expensive.","si no están caros."]],
  n:"<b>A dozen eggs</b>, sin <i>of</i>; en cambio <b>a couple of</b> sí lo lleva siempre."},
 {s:"B", ipa:"ðiːz ɑːr eɪˈtiːn iːtʃ ðoʊz ɑːr twelv", p:"díis ar eitíin íich. dóus ar tuélv",
  b:[["These are eighteen each.","Estos están a dieciocho cada uno."],["Those are twelve.","Esos, a doce."]]},
 {s:"A", ipa:"ðen wi teɪk ðoʊz moʊst əv ðə wʌnz ɑːn ðæt saɪd ɑːr ˈbetər ˈeniweɪ", p:"den ui téik dóus. móust av da uáns an dat sáid ar bétar éniuei",
  b:[["Then we take those.","Entonces llevamos esos."],["Most of the ones","La mayoría de los"],["on that side","de ese lado"],["are better anyway.","son mejores de todos modos."]],
  n:"<b>Most of</b> con <i>of</i> porque el grupo está definido. En general sería <i>most avocados</i>."},
 {s:"B", ipa:"ɔːl əv ðem ɔːr ˈoʊnli sʌm", p:"ol av dem, or óunli sam",
  b:[["All of them,","¿Todos,"],["or only some?","o sólo algunos?"]]},
 {s:"A", ipa:"fɔːr ˈniːðər əv ʌs ɪz ˈɡoʊɪŋ tuː iːt sɪks ˌævəˈkɑːdoʊz", p:"for. níider av as is góing tu íit siks avokádous",
  b:[["Four.","Cuatro."],["Neither of us","Ninguno de los dos"],["is going to eat","se va a comer"],["six avocados.","seis aguacates."]],
  n:"<b>Neither of us is</b>, en singular, aunque hable de dos personas."},
 {s:"B", ipa:"aɪ kʊd traɪ", p:"ái kud trái",
  b:[["I could try.","Podría intentarlo."]]},
 {s:"A", ipa:"aɪ noʊ juː kʊd ðæts ɪɡˈzæktli waɪ wi teɪk fɔːr", p:"ái nóu iú kud. dats igsáktli uái ui téik for",
  b:[["I know you could.","Sé que podrías."],["That's exactly why","Por eso mismo"],["we take four.","llevamos cuatro."]]},
 {s:"B", ipa:"faɪn boʊθ bæɡz əv raɪs ɔːr ˈoʊnli wʌn", p:"fáin. bóuz bags av ráis, or óunli uán",
  b:[["Fine.","Bueno."],["Both bags of rice,","¿Las dos bolsas de arroz,"],["or only one?","o sólo una?"]]},
 {s:"A", ipa:"boʊθ ˈmɪsɪz ˈkæstro ˈjuːzɪz ə lɑːt əv raɪs ænd ʃi hæz ˈplenti əv ˈvɪzɪtərz ðɪs wiːk", p:"bóuz. mísis Kástro iúsis a lat av ráis, and shi jas plénti av vísitars dis uíik",
  b:[["Both.","Las dos."],["Mrs. Castro uses","La señora Castro usa"],["a lot of rice","mucho arroz"],["and she has plenty of visitors","y tiene visitas de sobra"],["this week.","esta semana."]],
  n:"<b>A lot of</b> en afirmativa: <i>much rice</i> sonaría forzado."},
 {s:"B", ipa:"truː ðerz ˈkɑːfi ˈoʊvər ðer haʊ mʌtʃ duː juː wɑːnt", p:"trúu. ders káfi óuvar der. jáu mach du iú uánt",
  b:[["True.","Cierto."],["There's coffee over there.","Allá hay café."],["How much do you want?","¿Cuánto quieres?"]]},
 {s:"A", ipa:"hæf ə ˈkiːloʊ ænd ə ˈlɪtl ˈʃʊɡər nɑːt mʌtʃ", p:"jaf a kílou. and a lítl shúgar, nat mach",
  b:[["Half a kilo.","Medio kilo."],["And a little sugar,","Y un poco de azúcar,"],["not much.","no mucho."]]},
 {s:"B", ipa:"ə ˈlɪtl ɔːr ˈlɪtl", p:"a lítl or lítl",
  b:[["A little","¿Un poco"],["or little?","o poco?"]]},
 {s:"A", ipa:"ə ˈlɪtl ɪˈnʌf fɔːr ðə wiːk jʊr ˈlɜːrnɪŋ fæst", p:"a lítl. ináf for da uíik. iór lérning fast",
  b:[["A little.","Un poco."],["Enough for the week.","Lo justo para la semana."],["You're learning fast.","Estás aprendiendo rápido."]]},
 {s:"B", ipa:"aɪ hæv ə ɡʊd ˈtiːtʃər ænd ˈveri ˈlɪtl ˈpeɪʃns lets peɪ", p:"ái jav a gud tíichar and véri lítl péishens. lets péi",
  b:[["I have a good teacher","Tengo buena maestra"],["and very little patience.","y muy poca paciencia."],["Let's pay.","Vamos a pagar."]],
  n:"<b>Very little patience</b>: sin artículo, y por eso significa «muy poca», con queja incluida."}
];

const LECTURA = {
  titulo: "Four hundred lempiras",
  entradilla: "El mercado a las siete de la mañana del 26 de diciembre. El texto pone a trabajar lo de la Fase 1: <i>a lot of</i> frente a <i>much</i>, <i>a few</i> frente a <i>few</i>, <i>plenty of</i> y <i>a couple of</i>, los envases con <i>of</i>, el reparto con <i>all / most / none</i> y las palabras de los grupos de dos. Cada párrafo cambia de persona.",
  parrafos: [
    "We went to the market at seven on the twenty-sixth, and there were already too many people. I had four hundred lempiras in my pocket and a list with eight things on it. That was plenty of money, because we only needed a few things.",
    "Ana does the shopping in this family and she is very fast. She bought a kilo of tomatoes, two bags of rice, a bottle of oil and half a kilo of coffee in eleven minutes. She never buys much sugar: a little for the week and nothing more.",
    "Pablo and Nico wanted six avocados. Pablo says he can eat three in one sitting, and he probably can. Neither of them can cook, and both of them eat like three people, so we bought four. Most of the avocados on that side of the market were better, and they cost twelve lempiras each.",
    "Mrs. Castro is cooking again this week because she has plenty of visitors. She uses a lot of rice and very few tins of anything. \"All of it fresh,\" she says, \"and none of it from a box.\" She has said the same thing for forty years."
  ],
  glosario: [
    ["went","went","fuimos","uént"],
    ["had","hæd","teníamos","jad"],
    ["needed","ˈniːdɪd","necesitábamos","níidid"],
    ["does the shopping","dʌz ðə ˈʃɑːpɪŋ","hace la compra","das da sháping"],
    ["bought","bɔːt","compró","bóot"],
    ["buys","baɪz","compra","báis"],
    ["wanted","ˈwɑːntɪd","querían","uántid"],
    ["can cook","kæn kʊk","sabe cocinar","kan kuk"],
    ["eat","iːt","comen","íit"],
    ["cost","kɔːst","costaban","kost"],
    ["uses","ˈjuːzɪz","usa","iúsis"],
    ["is cooking","ɪz ˈkʊkɪŋ","está cocinando","is kúking"],
    ["says","sez","dice","ses"],
    ["has said","hæz sed","lleva diciendo","jas sed"],
    ["too many","tuː ˈmeni","demasiada","tu méni"],
    ["plenty of","ˈplenti əv","de sobra","plénti av"],
    ["a few","ə fjuː","unas cuantas","a fiú"],
    ["very few","ˈveri fjuː","muy pocas","véri fiú"],
    ["a little","ə ˈlɪtl","un poco","a lítl"],
    ["much sugar","mʌtʃ ˈʃʊɡər","mucha azúcar","mach shúgar"],
    ["a lot of","ə lɑːt əv","mucho","a lat av"],
    ["most of","moʊst əv","la mayoría de","móust av"],
    ["all of it","ɔːl əv ɪt","todo","ol av it"],
    ["none of it","nʌn əv ɪt","nada de eso","nan av it"],
    ["neither of them","ˈniːðər əv ðem","ninguno de los dos","níider av dem"],
    ["both of them","boʊθ əv ðem","los dos","bóuz av dem"],
    ["a kilo of","ə ˈkiːloʊ əv","un kilo de","a kílou av"],
    ["half a kilo","hæf ə ˈkiːloʊ","medio kilo","jaf a kílou"],
    ["two bags of","tuː bæɡz əv","dos bolsas de","tu bags av"],
    ["a bottle of","ə ˈbɑːtl əv","una botella de","a bátl av"],
    ["tins","tɪnz","latas","tins"],
    ["box","bɑːks","caja","baks"],
    ["market","ˈmɑːrkɪt","mercado","márket"],
    ["twenty-sixth","ˌtwenti ˈsɪksθ","veintiséis","tuénti-síksz"],
    ["sixth","sɪksθ","sexto","síksz"],
    ["pocket","ˈpɑːkɪt","bolsillo","pákit"],
    ["says","sez","dice","ses"],
    ["in one sitting","ɪn wʌn ˈsɪtɪŋ","de una sentada","in uán síting"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["lempiras","lemˈpiːrəs","lempiras","lempíras"],
    ["list","lɪst","lista","list"],
    ["money","ˈmʌni","dinero","máni"],
    ["tomatoes","təˈmeɪtoʊz","tomates","toméitous"],
    ["rice","raɪs","arroz","ráis"],
    ["oil","ɔɪl","aceite","óil"],
    ["coffee","ˈkɑːfi","café","káfi"],
    ["sugar","ˈʃʊɡər","azúcar","shúgar"],
    ["avocados","ˌævəˈkɑːdoʊz","aguacates","avokádous"],
    ["visitors","ˈvɪzɪtərz","visitas","vísitars"],
    ["family","ˈfæməli","familia","fámili"],
    ["fresh","freʃ","fresco","fresh"],
    ["each","iːtʃ","cada uno","íich"],
    ["side","saɪd","lado","sáid"],
    ["eleven minutes","ɪˈlevn ˈmɪnɪts","once minutos","ilévn mínits"],
    ["eight things","eɪt θɪŋz","ocho cosas","éit zings"],
    ["four hundred","fɔːr ˈhʌndrəd","cuatrocientos","for jándred"],
    ["twelve","twelv","doce","tuélv"],
    ["the same thing","ðə seɪm θɪŋ","lo mismo","da séim zing"],
    ["forty years","ˈfɔːrti jɪrz","cuarenta años","fórti íers"],
    ["nothing more","ˈnʌθɪŋ mɔːr","nada más","názing mor"],
    ["anything","ˈeniθɪŋ","nada","énizing"]
  ],
  preguntas: [
    { q:"How much money did they have?",
      ops:["Four hundred lempiras","Twelve lempiras","Eighteen lempiras"], ok:0,
      pista:"Primer párrafo. Las otras cifras son precios de aguacates." },
    { q:"Why did they buy only four avocados?",
      ops:["They were too expensive","Neither twin can cook and both eat a lot","There were no more"], ok:1,
      pista:"Segundo dato del tercer párrafo: el texto usa las dos palabras de los grupos de dos." },
    { q:"What does Mrs. Castro say about her cooking?",
      ops:["That it takes too long","That she uses a lot of sugar","That all of it is fresh and none of it from a box"], ok:2,
      pista:"Cuarto párrafo: es lo que dice entre comillas, y lleva cuarenta años diciéndolo." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-07"] = {
  meta: {
    id: "a2-07", nivel: "A2", numero: 7,
    titulo: "Cantidades: much, many, a few",
    descriptor: "Puedo hablar de cantidades con precisión, pedir por medidas y envases, y repartir un total entre todo, la mayoría, algunos o ninguno.",
    escena: "Ana & David · el mercado a las siete de la mañana del 26 de diciembre",
    personajeIA: "Ana", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
