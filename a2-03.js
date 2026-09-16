/* ============================================================
   LECCIÓN A2-03 · Comparativos y superlativos
   Reparto: Julia, la compañera de piso de Sarah, en su primer paseo
   por Tegucigalpa. La lectura reúne los seis puntos de la Fase 1
   —el comparativo, el superlativo, los irregulares, as…as, than +
   pronombre y los modificadores— en ella, yo, ellos y él.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Comparar", items:[
    ["bigger","ˈbɪɡər","más grande","bíguer"],["smaller","ˈsmɔːlər","más pequeño","smólar"],
    ["cheaper","ˈtʃiːpər","más barato","chíiper"],["more expensive","mɔːr ɪkˈspensɪv","más caro","mor ikspénsiv"],
    ["better","ˈbetər","mejor","bétar"],["worse","wɜːrs","peor","uérs"],
    ["the best","ðə best","el mejor","da best"],["the worst","ðə wɜːrst","el peor","da uérst"],
    ["than","ðæn","que (comparando)","dan"],["as … as","æz æz","tan … como","as as"]
  ]},
  {g:"La ciudad, comparada", items:[
    ["hill","hɪl","cerro, loma","jil"],["steep","stiːp","empinado","stíip"],
    ["loud","laʊd","ruidoso","láud"],["quiet","ˈkwaɪət","tranquilo","kuáiet"],
    ["crowded","ˈkraʊdɪd","lleno de gente","kráudid"],["safe","seɪf","seguro","séif"],
    ["clean","kliːn","limpio","klíin"],["busy","ˈbɪzi","concurrido","bísi"],
    ["traffic","ˈtræfɪk","tráfico","tráfik"],["view","vjuː","vista","viú"]
  ]},
  {g:"Medir la diferencia", items:[
    ["much","mʌtʃ","mucho más","mach"],["far","fɑːr","muchísimo más","far"],
    ["a lot","ə lɑːt","bastante más","a lat"],["a bit","ə bɪt","un poco más","a bit"],
    ["slightly","ˈslaɪtli","ligeramente","sláitli"],["twice as much","twaɪs æz mʌtʃ","el doble","tuáis as mach"],
    ["almost","ˈɔːlmoʊst","casi","ólmoust"],["exactly","ɪɡˈzæktli","exactamente","igsáktli"],
    ["the same as","ðə seɪm æz","igual que","da séim as"],["nearly","ˈnɪrli","casi","níarli"]
  ]},
  {g:"Dar la opinión", items:[
    ["I think","aɪ θɪŋk","creo que","ái zink"],["in my opinion","ɪn maɪ əˈpɪnjən","en mi opinión","in mái apínion"],
    ["I agree","aɪ əˈɡriː","estoy de acuerdo","ái agríi"],["I don't agree","aɪ doʊnt əˈɡriː","no estoy de acuerdo","ái dóunt agríi"],
    ["It depends","ɪt dɪˈpendz","depende","it dipénds"],["for me","fɔːr miː","para mí","for mi"],
    ["honestly","ˈɑːnɪstli","sinceramente","ánistli"],["actually","ˈæktʃuəli","en realidad","ákchuali"],
    ["definitely","ˈdefɪnətli","sin duda","définitli"],["I mean it","aɪ miːn ɪt","lo digo en serio","ái míin it"]
  ]}
];

const PRONKEY = [
  ["d suave","La <i>th</i> de <i>than</i> y <i>the</i> es sonora: lengua entre los dientes, con voz.","than &rarr; dan"],
  ["z","La otra <i>th</i>, sin voz.","think &rarr; zink"],
  ["ar final","El <i>-er</i> del comparativo suena como una <i>a</i> floja con eco de <i>r</i>.","bigger &rarr; bíguer"],
  ["ch","Como en «coche».","cheaper &rarr; chíiper"],
  ["sh","Como pedir silencio.","should &rarr; shud"],
  ["v","Labio de abajo contra los dientes de arriba.","view &rarr; viú"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","worse &rarr; uérs"],
  ["íi","Vocal larga y tensa; no es la <i>i</i> corta.","steep &rarr; stíip"],
  ["gh muda","En <i>slightly</i> y <i>night</i> la <i>gh</i> no suena.","slightly &rarr; sláitli"]
];

const VERBS = [
  ["to compare","reg","compare · compares","compared","will compare","comparar"],
  ["to prefer","reg","prefer · prefers","preferred","will prefer","preferir"],
  ["to agree","reg","agree · agrees","agreed","will agree","estar de acuerdo"],
  ["to complain","reg","complain · complains","complained","will complain","quejarse"],
  ["to explain","reg","explain · explains","explained","will explain","explicar"],
  ["to climb","reg","climb · climbs","climbed","will climb","subir"],
  ["to taste","reg","taste · tastes","tasted","will taste","saber a, probar"],
  ["to cost","irr","cost · costs","cost","will cost","costar"],
  ["to grow","irr","grow · grows","grew","will grow","crecer, cultivarse"],
  ["to feel","irr","feel · feels","felt","will feel","sentir"],
  ["to think","irr","think · thinks","thought","will think","pensar"],
  ["to eat","irr","eat · eats","ate","will eat","comer"]
];

const GRAMMAR = [
  {t:"El comparativo", s:"-er para los cortos, more para los largos",
   p:"La regla se decide contando <b>sílabas</b>, no por el significado. Una sílaba o dos terminadas en <i>-y</i>: se añade <b>-er</b>. Lo demás: <b>more</b> delante. Y detrás va siempre <b>than</b>.",
   table:{head:["Adjetivo","Comparativo","Regla"], rows:[
     ["big","bigger","una sílaba: se dobla la consonante"],
     ["cheap","cheaper","una sílaba: +er"],
     ["busy","busier","dos sílabas en -y: -ier"],
     ["quiet","quieter","dos sílabas, excepción frecuente"],
     ["expensive","more expensive","tres o más sílabas: more"],
     ["crowded","more crowded","dos sílabas que no acaban en -y: more"]
   ]},
   aviso:["Nunca los dos a la vez","<span class='wrong'>more bigger</span> &nbsp;&rarr;&nbsp; <span class='right'>bigger</span>. Y el español «más … que» se dice con <b>than</b>, no con <i>that</i>: <span class='right'>bigger than Toronto</span>."]},

  {t:"El superlativo", s:"the -est / the most",
   p:"Mismo criterio de sílabas, pero con <b>the</b> obligatorio delante. El superlativo compara a uno contra <b>todo un grupo</b>.",
   table:{head:["Adjetivo","Comparativo","Superlativo"], rows:[
     ["cheap","cheaper","the cheapest"],
     ["busy","busier","the busiest"],
     ["steep","steeper","the steepest"],
     ["expensive","more expensive","the most expensive"],
     ["crowded","more crowded","the most crowded"]
   ]},
   aviso:["El <i>the</i> no se cae","<span class='wrong'>It's biggest city.</span> &nbsp;&rarr;&nbsp; <span class='right'>It's <b>the</b> biggest city.</span> Y el grupo se marca con <i>in</i> o <i>of</i>: <i>the busiest day <b>of</b> the week</i>, <i>the tallest man <b>in</b> the street</i>."]},

  {t:"Los irregulares", s:"good, bad, far",
   p:"Tres adjetivos muy usados se salen de la regla. No hay nada que razonar: se memorizan.",
   table:{head:["Adjetivo","Comparativo","Superlativo","Español"], rows:[
     ["good","better","the best","bueno"],
     ["bad","worse","the worst","malo"],
     ["far","further / farther","the furthest","lejos"],
     ["much / many","more","the most","mucho"],
     ["little","less","the least","poco"]
   ]},
   aviso:["<i>Worse</i> no lleva <i>than</i> dentro","Se dice <b>worse than</b>, no <span class='wrong'>more worse</span> ni <span class='wrong'>worser</span>. Y <i>better</i> es comparativo: para el superlativo hace falta <i>the best</i>."]},

  {t:"AS … AS: la igualdad", s:"tan … como",
   p:"Cuando las dos cosas son iguales, no se usa el comparativo sino <b>as + adjetivo + as</b>. En negativo significa «menos que», y es la forma que más se oye.",
   table:{head:["Frase","Significa"], rows:[
     ["It's as warm as yesterday.","Hace el mismo calor que ayer."],
     ["It's not as bad as it sounds.","No es tan malo como suena."],
     ["Nothing tastes as good as that mango.","Nada sabe tan bien como ese mango."],
     ["She eats twice as much fruit.","Come el doble de fruta."]
   ]},
   aviso:["El adjetivo va en su forma normal","<span class='wrong'>as better as</span> &nbsp;&rarr;&nbsp; <span class='right'>as good as</span>. Dentro de <i>as … as</i> el adjetivo <b>no</b> se compara."]},

  {t:"THAN + pronombre", s:"than me / than I am",
   p:"Después de <b>than</b> el inglés admite dos formas, y las dos son correctas en contextos distintos.",
   table:{head:["Forma","Registro","Ejemplo"], rows:[
     ["than me","conversación","She's taller than me."],
     ["than I am","cuidado, escrito","She's taller than I am."],
     ["<span class='wrong'>than I</span>","suena a otro siglo","—"],
     ["than she does","con verbo","He walks faster than she does."]
   ]},
   aviso:["Lo que no se puede es cortar el verbo","<span class='wrong'>He walks faster than she.</span> &nbsp;&rarr;&nbsp; <span class='right'>than she does</span> o <span class='right'>than her</span>. Con pronombre suelto, la forma de objeto."]},

  {t:"Medir la diferencia", s:"much, far, a bit, slightly",
   p:"Un comparativo a secas no dice cuánta diferencia hay. Estas palabras van <b>delante del comparativo</b> y lo gradúan.",
   table:{head:["Modificador","Fuerza","Ejemplo"], rows:[
     ["far / much","diferencia enorme","Toronto is much bigger."],
     ["a lot","diferencia grande","It's a lot cheaper here."],
     ["a bit","diferencia pequeña","The days are a bit longer."],
     ["slightly","diferencia mínima","It's slightly warmer today."]
   ]},
   aviso:["<i>Very</i> no entra aquí","<span class='wrong'>very bigger</span> &nbsp;&rarr;&nbsp; <span class='right'>much bigger</span>. <i>Very</i> acompaña al adjetivo normal (<i>very big</i>), nunca al comparativo."]}
];

/* Julia (A) y David (B), primer paseo por Tegucigalpa */
const DIALOGUE = [
 {s:"A", ipa:"ðɪs striːt ɪz mʌtʃ ˈstiːpər ðæn ɪt lʊks ɪn ˈfoʊtoʊz", p:"dis stríit is mach stíiper dan it luks in fóutous",
  b:[["This street is","Esta calle es"],["much steeper","mucho más empinada"],["than it looks","de lo que parece"],["in photos.","en las fotos."]],
  n:"<b>Much</b> delante del comparativo mide la diferencia. Nunca <span class='wrong'>very steeper</span>."},
 {s:"B", ipa:"ˈwelkəm tuː təˌɡuːsɪˈɡɑːlpə ɪts ðə ˈhɪliɪst ˈsɪti aɪ noʊ", p:"uélkam tu Tegusigálpa. its da jíliist síti ái nóu",
  b:[["Welcome to Tegucigalpa.","Bienvenida a Tegucigalpa."],["It's the hilliest city","Es la ciudad más montañosa"],["I know.","que conozco."]],
  n:"Superlativo con <b>the</b> obligatorio: <i>the hilliest</i>."},
 {s:"A", ipa:"ɪz ɪt ˈbɪɡər ðæn təˈrɑːntoʊ", p:"is it bíguer dan Taróntou",
  b:[["Is it bigger","¿Es más grande"],["than Toronto?","que Toronto?"]]},
 {s:"B", ipa:"noʊ təˈrɑːntoʊ ɪz mʌtʃ ˈbɪɡər bʌt ðɪs ɪz ˈlaʊdər", p:"nóu, Taróntou is mach bíguer. bat dis is láudar",
  b:[["No, Toronto is","No, Toronto es"],["much bigger.","mucho más grande."],["But this is louder.","Pero esta es más ruidosa."]]},
 {s:"A", ipa:"ɪts ˈdefɪnətli ˈlaʊdər ænd ˈwɔːrmər ɪts ˈtwenti eɪt dɪˈɡriːz ɪn dɪˈsembər", p:"its définitli láudar. and uórmar: its tuénti-éit digríis in disémbar",
  b:[["It's definitely louder.","Sin duda es más ruidosa."],["And warmer:","Y más cálida:"],["it's twenty-eight degrees","hace veintiocho grados"],["in December.","en diciembre."]]},
 {s:"B", ipa:"ɪz ðæt ɡʊd ɔːr bæd", p:"is dat gud or bad",
  b:[["Is that","¿Eso es"],["good or bad?","bueno o malo?"]]},
 {s:"A", ipa:"ðə best θɪŋ ðæt ˈhæpənd tuː miː ðɪs jɪr ɪn təˈrɑːntoʊ ɪts ˈmaɪnəs ten təˈdeɪ", p:"da best zing dat jápend tu mi dis íer. in Taróntou its máinas ten tudéi",
  b:[["The best thing","Lo mejor"],["that happened to me","que me ha pasado"],["this year.","este año."],["In Toronto","En Toronto"],["it's minus ten today.","hoy hace diez bajo cero."]]},
 {s:"B", ipa:"ˈmaɪnəs ten ðæts wɜːrs ðæn aɪ ˌɪmˈædʒɪnd", p:"máinas ten. dats uérs dan ái imáchind",
  b:[["Minus ten!","¡Diez bajo cero!"],["That's worse","Eso es peor"],["than I imagined.","de lo que imaginaba."]],
  n:"<b>Worse</b>, irregular. Nunca <span class='wrong'>more bad</span> ni <span class='wrong'>badder</span>."},
 {s:"A", ipa:"ɪts nɑːt æz bæd æz ɪt saʊndz ðə wɜːrst pɑːrt ˈɪznt ðə koʊld ɪts ðə dɑːrk", p:"its nat as bad as it sáunds. da uérst part ísnt da kóuld: its da dark",
  b:[["It's not as bad","No es tan malo"],["as it sounds.","como suena."],["The worst part","Lo peor"],["isn't the cold:","no es el frío:"],["it's the dark.","es la oscuridad."]],
  n:"Dentro de <b>as … as</b> el adjetivo va normal: <i>as bad as</i>, no <span class='wrong'>as worse as</span>."},
 {s:"B", ipa:"ðə dɑːrk", p:"da dark",
  b:[["The dark?","¿La oscuridad?"]]},
 {s:"A", ipa:"ɪn dɪˈsembər ðə sʌn ɡoʊz daʊn æt hɑːf pæst fɔːr hɪr ɪts stɪl laɪt æt sɪks", p:"in disémbar da san góus dáun at jaf past for. jíar its stil láit at siks",
  b:[["In December","En diciembre"],["the sun goes down","el sol se pone"],["at half past four.","a las cuatro y media."],["Here it's still light","Aquí todavía hay luz"],["at six.","a las seis."]]},
 {s:"B", ipa:"aɪ ˈnevər θɔːt əˈbaʊt ðæt soʊ ðə deɪz ɑːr ˈlɔːŋɡər hɪr", p:"ái névar zot abáut dat. sóu da déis ar lónguer jíar",
  b:[["I never thought","Nunca lo había pensado."],["about that.","—"],["So the days","Así que los días"],["are longer here.","son más largos aquí."]]},
 {s:"A", ipa:"ə bɪt ˈlɔːŋɡər jes ænd ðə fuːd ɪz fɑːr ˈbetər", p:"a bit lónguer, iés. and da fúud is far bétar",
  b:[["A bit longer, yes.","Un poco más largos, sí."],["And the food","Y la comida"],["is far better.","es muchísimo mejor."]],
  n:"<b>A bit</b> mide poco, <b>far</b> mide mucho. Los dos van delante del comparativo."},
 {s:"B", ipa:"ˈbetər ðæn ɪn ˈkænədə ˈrɪəli", p:"bétar dan in Kánada. ríili",
  b:[["Better than in Canada?","¿Mejor que en Canadá?"],["Really?","¿En serio?"]]},
 {s:"A", ipa:"ðə fruːt ɪz ˈnʌθɪŋ ɪn təˈrɑːntoʊ teɪsts æz ɡʊd æz ðæt ˈmæŋɡoʊ", p:"da frúut is. názing in Taróntou téists as gud as dat mángou",
  b:[["The fruit is.","La fruta sí."],["Nothing in Toronto","Nada en Toronto"],["tastes as good","sabe tan bien"],["as that mango.","como ese mango."]]},
 {s:"B", ipa:"ðæts ði ˈiːziɪst ˈkɑːmplɪment juː kæn ɡɪv ə hɑːnˈdʊrən", p:"dats di íisiist kámpliment iú kan guiv a Jandúran",
  b:[["That's the easiest compliment","Ese es el cumplido más fácil"],["you can give","que le puedes hacer"],["a Honduran.","a un hondureño."]]},
 {s:"A", ipa:"aɪ miːn ɪt ɪz ðə ˈmɑːrkɪt fɑːr frʌm hɪr", p:"ái míin it. is da márket far from jíar",
  b:[["I mean it.","Lo digo en serio."],["Is the market","¿Está el mercado"],["far from here?","lejos de aquí?"]]},
 {s:"B", ipa:"nɑːt æz fɑːr æz juː θɪŋk ten ˈmɪnɪts bʌt ðə læst pɑːrt ɪz ðə ˈstiːpɪst", p:"nat as far as iú zink. ten mínits, bat da last part is da stíipist",
  b:[["Not as far as you think.","No tan lejos como crees."],["Ten minutes,","Diez minutos,"],["but the last part","pero la última parte"],["is the steepest.","es la más empinada."]]},
 {s:"A", ipa:"mɔːr hɪlz", p:"mor jils",
  b:[["More hills.","Más cerros."]]},
 {s:"B", ipa:"ˈɔːlweɪz mɔːr hɪlz ˈserə sez aʊər striːt ɪz ðə ˈhɑːrdɪst wɔːk əv hɜːr laɪf", p:"ólueis mor jils. Séra ses áuar stríit is da járdist uók av jer láif",
  b:[["Always more hills.","Siempre más cerros."],["Sarah says","Sarah dice"],["our street is","que nuestra calle es"],["the hardest walk","la caminata más dura"],["of her life.","de su vida."]],
  n:"El grupo del superlativo se marca con <b>of</b> o con <b>in</b>: <i>the hardest walk <b>of</b> her life</i>."},
 {s:"A", ipa:"ˈserə ɪz nɑːt æz fɪt æz ʃi θɪŋks", p:"Séra is nat as fit as shi zinks",
  b:[["Sarah is not as fit","Sarah no está tan en forma"],["as she thinks.","como cree."]]},
 {s:"B", ipa:"doʊnt tel hɜːr ðæt", p:"dóunt tel jer dat",
  b:[["Don't tell her that.","No le digas eso."]]},
 {s:"A", ipa:"aɪm ˈtelɪŋ juː ænd juː ɑːr mʌtʃ ˈkwaɪətər ðæn ʃi ɪz", p:"áim téling iú. and iú ar mach kuáietar dan shi is",
  b:[["I'm telling you.","Te lo digo a ti."],["And you are","Y tú eres"],["much quieter","mucho más callado"],["than she is.","que ella."]],
  n:"<b>Than she is</b>, con verbo. Con pronombre suelto sería <i>than her</i>; lo que no vale es <span class='wrong'>than she</span>."},
 {s:"B", ipa:"truː kʌm ɑːn ðə ˈmɑːrkɪt ˈkloʊzɪz æt wʌn ænd ɪts ðə ˈbɪziɪst deɪ əv ðə wiːk", p:"trúu. kam an: da márket klóusis at uán, and its da bísiist déi av da uíik",
  b:[["True.","Cierto."],["Come on:","Vamos:"],["the market closes at one,","el mercado cierra a la una,"],["and it's the busiest day","y es el día más concurrido"],["of the week.","de la semana."]]}
];

const LECTURA = {
  titulo: "Two cities, one December",
  entradilla: "Tegucigalpa vista por alguien que llegó hace dos días. El texto pone a trabajar lo de la Fase 1: el comparativo con <i>-er</i> y con <i>more</i>, el superlativo, los irregulares <i>better / worse</i>, la igualdad con <i>as … as</i>, <i>than</i> con pronombre y los modificadores <i>much</i>, <i>far</i> y <i>a bit</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Julia says Tegucigalpa is louder than Toronto and much warmer. Today it is twenty-eight degrees here and minus ten there, and for her that is the best thing that happened this year. She walks slower than us because of the hills, but she never complains.",
    "Toronto is bigger, of course. But our days in December are longer: the sun goes down at half past four there and at six here. I never thought about that until Julia explained it. The cold isn't the worst part of her winter; the dark is.",
    "Pablo and Nico are the loudest people on this street, and they think they are the fastest too. Yesterday they climbed to the market with Julia and they arrived five minutes later than she did. Nobody talked about it again.",
    "Mr. Ortega says the fruit here is far better than anywhere else, and he is not an easy man to please. This time Julia agrees with him. \"Nothing in Toronto tastes as good as that mango,\" she said. Sarah is quieter than Julia, but she eats twice as much fruit, and we carried six mangoes home."
  ],
  glosario: [
    ["louder","ˈlaʊdər","más ruidosa","láudar"],
    ["warmer","ˈwɔːrmər","más cálida","uórmar"],
    ["bigger","ˈbɪɡər","más grande","bíguer"],
    ["longer","ˈlɔːŋɡər","más largos","lónguer"],
    ["slower","ˈsloʊər","más despacio","slóuar"],
    ["quieter","ˈkwaɪətər","más callada","kuáietar"],
    ["later","ˈleɪtər","más tarde","léitar"],
    ["better","ˈbetər","mejor","bétar"],
    ["the best","ðə best","lo mejor","da best"],
    ["the worst","ðə wɜːrst","lo peor","da uérst"],
    ["the loudest","ðə ˈlaʊdɪst","los más ruidosos","da láudist"],
    ["the fastest","ðə ˈfæstɪst","los más rápidos","da fástist"],
    ["as good as","æz ɡʊd æz","tan bueno como","as gud as"],
    ["twice as much","twaɪs æz mʌtʃ","el doble de","tuáis as mach"],
    ["than","ðæn","que","dan"],
    ["much","mʌtʃ","mucho más","mach"],
    ["far","fɑːr","muchísimo más","far"],
    ["says","sez","dice","ses"],
    ["said","sed","dijo","sed"],
    ["walks","wɔːks","camina","uóks"],
    ["complains","kəmˈpleɪnz","se queja","kompléins"],
    ["thought","θɔːt","pensé","zot"],
    ["think","θɪŋk","creen","zink"],
    ["explained","ɪkˈspleɪnd","lo explicó","ikspléind"],
    ["climbed","klaɪmd","subieron","kláimd"],
    ["arrived","əˈraɪvd","llegaron","aráivd"],
    ["talked about","tɔːkt əˈbaʊt","hablaron de","tokt abáut"],
    ["agrees","əˈɡriːz","está de acuerdo","agríis"],
    ["tastes","teɪsts","sabe","téists"],
    ["eats","iːts","come","íits"],
    ["goes down","ɡoʊz daʊn","se pone","góus dáun"],
    ["degrees","dɪˈɡriːz","grados","digríis"],
    ["minus ten","ˈmaɪnəs ten","diez bajo cero","máinas ten"],
    ["hills","hɪlz","cerros","jils"],
    ["sun","sʌn","sol","san"],
    ["days","deɪz","días","déis"],
    ["cold","koʊld","frío","kóuld"],
    ["dark","dɑːrk","oscuridad","dark"],
    ["winter","ˈwɪntər","invierno","uínter"],
    ["fruit","fruːt","fruta","frúut"],
    ["mango","ˈmæŋɡoʊ","mango","mángou"],
    ["market","ˈmɑːrkɪt","mercado","márket"],
    ["thing","θɪŋ","cosa","zing"],
    ["part","pɑːrt","parte","part"],
    ["easy","ˈiːzi","fácil","íisi"],
    ["man","mæn","hombre","man"],
    ["please","pliːz","complacer","plíis"],
    ["carried","ˈkærid","cargamos","kárid"],
    ["home","hoʊm","a casa","jóum"],
    ["six","sɪks","seis","siks"],
    ["mangoes","ˈmæŋɡoʊz","mangos","mángous"],
    ["street","striːt","calle","stríit"],
    ["people","ˈpiːpl","gente","píipl"],
    ["nothing","ˈnʌθɪŋ","nada","názing"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["anywhere else","ˈeniwer els","en ningún otro sitio","éniuer els"],
    ["this time","ðɪs taɪm","esta vez","dis táim"],
    ["because of","bɪˈkɔːz əv","por, a causa de","bikóos av"],
    ["of course","əv ˈkɔːrs","por supuesto","av kórs"],
    ["five minutes","faɪv ˈmɪnɪts","cinco minutos","fáiv mínits"],
    ["half past four","hɑːf pæst fɔːr","las cuatro y media","jaf past for"],
    ["yesterday","ˈjestərdeɪ","ayer","iésterdei"],
    ["again","əˈɡen","otra vez","aguén"]
  ],
  preguntas: [
    { q:"Why does Julia walk slower than the others?",
      ops:["Because of the hills","Because she is tired","Because she is looking at the shops"], ok:0,
      pista:"Primer párrafo, última frase: la razón va después de <i>because of</i>." },
    { q:"What is the worst part of winter for Julia?",
      ops:["The cold","The dark","The snow"], ok:1,
      pista:"Segundo párrafo: el texto dice primero lo que <i>no</i> es lo peor." },
    { q:"What happened when Pablo and Nico went to the market?",
      ops:["They got lost","They arrived first","They arrived five minutes later than Julia"], ok:2,
      pista:"Tercer párrafo: creían que eran los más rápidos." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-03"] = {
  meta: {
    id: "a2-03", nivel: "A2", numero: 3,
    titulo: "Comparativos y superlativos",
    descriptor: "Puedo comparar lugares, personas y cosas, decir cuál destaca sobre todas las demás y matizar cuánta diferencia hay.",
    escena: "Julia & David · cuesta arriba hacia el mercado, el primer paseo por Tegucigalpa",
    personajeIA: "Julia", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
