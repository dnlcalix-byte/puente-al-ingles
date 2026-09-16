/* ============================================================
   LECCIÓN A2-08 · En el supermercado
   Reparto: Kevin, comprando provisiones para subir el volcán el
   sábado. La lectura reúne los seis puntos de la Fase 1 —which
   frente a what, one y ones, more/less/fewer, los adjetivos en -ed
   y en -ing, instead of / as well as / apart from, y las fórmulas
   para recordar algo— en nosotros, él, él otra vez y ellos.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"En el supermercado", items:[
    ["aisle","aɪl","pasillo","áil"],["trolley","ˈtrɑːli","carrito","tráli"],
    ["basket","ˈbæskɪt","canasta","báskit"],["shelf","ʃelf","estante","shelf"],
    ["checkout","ˈtʃekaʊt","caja","chékaut"],["queue","kjuː","fila","kiú"],
    ["offer","ˈɔːfər","oferta","ófar"],["label","ˈleɪbl","etiqueta","léibl"],
    ["expiry date","ɪkˈspaɪri deɪt","fecha de vencimiento","ikspáiri déit"],["receipt","rɪˈsiːt","recibo","risíit"]
  ]},
  {g:"Productos", items:[
    ["bread","bred","pan","bred"],["cheese","tʃiːz","queso","chíis"],
    ["biscuits","ˈbɪskɪts","galletas","bískits"],["chocolate","ˈtʃɑːklət","chocolate","chóklat"],
    ["water","ˈwɔːtər","agua","uóter"],["salt","sɔːlt","sal","solt"],
    ["litre","ˈliːtər","litro","líitar"],["torch","tɔːrtʃ","linterna","torch"],
    ["shoes","ʃuːz","zapatos","shúus"],["crumbs","krʌmz","migas","krams"]
  ]},
  {g:"Elegir y comparar", items:[
    ["which one","wɪtʃ wʌn","cuál","uích uán"],["this one","ðɪs wʌn","este","dis uán"],
    ["that one","ðæt wʌn","ese","dat uán"],["the big ones","ðə bɪɡ wʌnz","los grandes","da big uáns"],
    ["instead of","ɪnˈsted əv","en vez de","instéd av"],["as well as","æz wel æz","además de","as uel as"],
    ["apart from","əˈpɑːrt frʌm","aparte de","apárt from"],["the same","ðə seɪm","lo mismo","da séim"],
    ["fewer","ˈfjuːər","menos (contables)","fiúar"],["less","les","menos (incontables)","les"]
  ]},
  {g:"Cómo te sientes y cómo es", items:[
    ["bored","bɔːrd","aburrido (yo)","bord"],["boring","ˈbɔːrɪŋ","aburrido (eso)","bóoring"],
    ["tired","ˈtaɪərd","cansado","táiard"],["tiring","ˈtaɪərɪŋ","cansador","táiaring"],
    ["excited","ɪkˈsaɪtɪd","emocionado","iksáitid"],["exciting","ɪkˈsaɪtɪŋ","emocionante","iksáiting"],
    ["surprised","sərˈpraɪzd","sorprendido","sorpráisd"],["surprising","sərˈpraɪzɪŋ","sorprendente","sorpráising"],
    ["interested","ˈɪntrəstɪd","interesado","íntrastid"],["interesting","ˈɪntrəstɪŋ","interesante","íntrasting"]
  ]}
];

const PRONKEY = [
  ["s muda","La <i>s</i> de <i>aisle</i> no se pronuncia.","aisle &rarr; áil"],
  ["kiú","<i>Queue</i>: sólo suena la primera letra.","queue &rarr; kiú"],
  ["ch","Como en «coche».","cheese &rarr; chíis"],
  ["sh","Como pedir silencio.","shelf &rarr; shelf"],
  ["p muda","La <i>p</i> de <i>receipt</i> no se pronuncia.","receipt &rarr; risíit"],
  ["ing","La <i>g</i> final no suena: es una <i>n</i> nasal.","boring &rarr; bóoring"],
  ["-ed = id","Tras <i>t</i> o <i>d</i>, la <i>-ed</i> añade sílaba.","excited &rarr; iksáitid"],
  ["sílaba comida","<i>Chocolate</i> pierde una sílaba entera al hablar.","chocolate &rarr; chóklat"],
  ["r final","Apenas se toca; nunca vibra.","litre &rarr; líitar"]
];

const VERBS = [
  ["to compare","reg","compare · compares","compared","will compare","comparar"],
  ["to weigh","reg","weigh · weighs","weighed","will weigh","pesar"],
  ["to melt","reg","melt · melts","melted","will melt","derretirse"],
  ["to remind","reg","remind · reminds","reminded","will remind","recordarle a alguien"],
  ["to pack","reg","pack · packs","packed","will pack","empacar"],
  ["to climb","reg","climb · climbs","climbed","will climb","subir"],
  ["to explain","reg","explain · explains","explained","will explain","explicar"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"],
  ["to forget","irr","forget · forgets","forgot","will forget","olvidar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to cost","irr","cost · costs","cost","will cost","costar"],
  ["to spend","irr","spend · spends","spent","will spend","pasar; gastar"]
];

const GRAMMAR = [
  {t:"WHICH o WHAT", s:"depende de si hay lista",
   p:"Las dos preguntan «qué» o «cuál», pero no se eligen al azar. <b>Which</b> se usa cuando las opciones son <b>pocas y conocidas</b>; <b>what</b>, cuando el campo está abierto.",
   table:{head:["Se usa","Cuándo","Ejemplo"], rows:[
     ["which","opciones a la vista","Which water do you want, this one or that one?"],
     ["which","grupo cerrado","Which aisle is the bread in?"],
     ["what","campo abierto","What do we need?"],
     ["what","sin lista previa","What is your name?"]
   ]},
   aviso:["El español no marca esta diferencia","«¿Qué agua quieres?» puede ser <i>which</i> o <i>what</i> según el contexto. Si estás señalando dos botellas, es <b>which</b> siempre."]},

  {t:"ONE y ONES", s:"para no repetir el sustantivo",
   p:"El inglés no deja el adjetivo solo como el español. Donde nosotros decimos «el grande», el inglés necesita un sustantivo de relleno: <b>one</b> en singular, <b>ones</b> en plural.",
   table:{head:["Español","Inglés","No se dice"], rows:[
     ["el grande","the big one","<span class='wrong'>the big</span>"],
     ["los pequeños","the small ones","<span class='wrong'>the smalls</span>"],
     ["éste","this one","<span class='wrong'>this</span> (señalando)"],
     ["el de dos litros","the two-litre one","—"]
   ]},
   aviso:["Con incontables no hay <i>one</i>","<span class='wrong'>the fresh one</span> para el pan no funciona: los incontables se quedan solos, <span class='right'>the fresh bread</span> o simplemente <i>the fresh</i>."]},

  {t:"MORE, LESS y FEWER", s:"comparar cantidades, no adjetivos",
   p:"En la lección de los comparativos comparabas adjetivos. Ahora se comparan <b>sustantivos</b>, y la palabra cambia según se puedan contar o no.",
   table:{head:["Palabra","Con","Ejemplo"], rows:[
     ["more","los dos","more biscuits · more water"],
     ["fewer","contables","fewer crumbs, fewer people"],
     ["less","incontables","less weight, less sugar"],
     ["than","el segundo término","fewer crumbs than the big ones"]
   ]},
   aviso:["<i>Less people</i> se oye, pero no es correcto","Si lo puedes contar, es <b>fewer</b>. Lo dicen mal hasta los nativos, y en el IELTS Writing cuenta como error."]},

  {t:"Los adjetivos en -ED y en -ING", s:"bored o boring",
   p:"Dos adjetivos salen del mismo verbo y significan cosas distintas. El de <b>-ed</b> describe <b>cómo te sientes</b>; el de <b>-ing</b>, <b>cómo es la cosa</b> que provoca ese sentimiento.",
   table:{head:["-ED (la persona)","-ING (la cosa)"], rows:[
     ["I'm bored.","The film is boring."],
     ["I'm tired.","The climb is tiring."],
     ["We're excited.","The trip is exciting."],
     ["Nobody was surprised.","The answer wasn't surprising."]
   ]},
   aviso:["El error que da más risa","<span class='wrong'>I am boring.</span> no significa que estés aburrido: significa que <b>tú</b> aburres a los demás. La forma correcta es <span class='right'>I am bored</span>."]},

  {t:"INSTEAD OF, AS WELL AS, APART FROM", s:"en vez de, además de, aparte de",
   p:"Tres conectores que sustituyen, suman o excluyen. Los tres acaban en preposición, así que el verbo que venga detrás va en <b>-ing</b>.",
   table:{head:["Conector","Significa","Ejemplo"], rows:[
     ["instead of","sustituye","We took the small ones instead of the big ones."],
     ["as well as","suma","Julia is coming as well as Emma."],
     ["apart from","excluye o añade","Apart from the cheese, we have everything."],
     ["+ verbo","siempre -ing","instead of buying chocolate"]
   ]},
   aviso:["<i>As well</i> al final, <i>as well as</i> en medio","<span class='right'>Julia is coming as well.</span> (al final, sin nada detrás) &nbsp;·&nbsp; <span class='right'>Julia as well as Emma</span> (uniendo dos cosas)."]},

  {t:"Recordar y avisar", s:"Don't forget to… / Remember to… / Make sure…",
   p:"Tres fórmulas para que el otro no se deje nada. Las dos primeras llevan <b>to + verbo</b>; la tercera, una frase entera.",
   chips:[["Don't forget the cheese.","No olvides el queso."],["Don't forget to bring a torch.","No olvides traer una linterna."],["Remember to pack good shoes.","Acuérdate de meter buenos zapatos."],["Make sure you sleep tonight.","Asegúrate de dormir esta noche."]],
   aviso:["<i>Remember to do</i> frente a <i>remember doing</i>","<b>Remember to bring it</b> = acuérdate de traerlo (aún no lo has hecho). <b>I remember bringing it</b> = recuerdo haberlo traído. El <i>-ing</i> mira al pasado."]}
];

/* Kevin (A) y David (B) comprando para subir el volcán el sábado */
const DIALOGUE = [
 {s:"A", ipa:"raɪt vɑːlˈkeɪnoʊ fuːd wɪtʃ aɪl ɪz ðə bred ɪn", p:"ráit. volkéinou fúud. uích áil is da bred in",
  b:[["Right.","Bien."],["Volcano food.","Comida para el volcán."],["Which aisle is the bread in?","¿En qué pasillo está el pan?"]],
  n:"<b>Which</b> porque los pasillos son un grupo cerrado y numerado."},
 {s:"B", ipa:"aɪl fɔːr wʌt duː wi niːd ɪɡˈzæktli", p:"áil for. uát du ui níid igsáktli",
  b:[["Aisle four.","Pasillo cuatro."],["What do we need,","¿Qué necesitamos,"],["exactly?","exactamente?"]],
  n:"<b>What</b> porque el campo está abierto: puede ser cualquier cosa."},
 {s:"A", ipa:"bred tʃiːz ˈwɔːtər ænd ˈsʌmθɪŋ swiːt nɑːt ˈtʃɑːklət ɪt melts", p:"bred, chíis, uóter, and sámzing suíit. nat chóklat: it melts",
  b:[["Bread, cheese, water,","Pan, queso, agua"],["and something sweet.","y algo dulce."],["Not chocolate:","Chocolate no:"],["it melts.","se derrite."]]},
 {s:"B", ipa:"ðiːz ˈbɪskɪts ðen ðə bɪɡ wʌnz ɔːr ðə smɔːl wʌnz", p:"díis bískits, den. da big uáns or da smóol uáns",
  b:[["These biscuits, then.","Estas galletas, entonces."],["The big ones","¿Las grandes"],["or the small ones?","o las pequeñas?"]],
  n:"<b>Ones</b> obligatorio: el inglés no deja el adjetivo solo."},
 {s:"A", ipa:"ðə smɔːl wʌnz ˈfjuːər krʌmz les weɪt", p:"da smóol uáns. fiúar krams, les uéit",
  b:[["The small ones.","Las pequeñas."],["Fewer crumbs,","Menos migas,"],["less weight.","menos peso."]],
  n:"<b>Fewer</b> con lo contable (<i>crumbs</i>), <b>less</b> con lo incontable (<i>weight</i>)."},
 {s:"B", ipa:"ˈfjuːər ænd les ɪz ðer ə ˈdɪfrəns", p:"fiúar and les. is der a dífrens",
  b:[["Fewer and less.","Fewer y less."],["Is there a difference?","¿Hay diferencia?"]]},
 {s:"A", ipa:"ˈfjuːər fɔːr θɪŋz juː kaʊnt les fɔːr θɪŋz juː doʊnt", p:"fiúar for zings iú káunt, les for zings iú dóunt",
  b:[["Fewer for things you count,","Fewer para lo que se cuenta,"],["less for things you don't.","less para lo que no."]]},
 {s:"B", ipa:"aɪl rɪˈmembər ðæt wɪtʃ ˈwɔːtər duː juː wɑːnt ðɪs wʌn ɔːr ðæt wʌn", p:"áil rimémbar dat. uích uóter du iú uánt: dis uán or dat uán",
  b:[["I'll remember that.","Me acordaré."],["Which water do you want:","¿Cuál agua quieres:"],["this one or that one?","esta o esa?"]]},
 {s:"A", ipa:"ðæt wʌn ɪts tuː ˈliːtərz ɪnˈsted əv wʌn ænd ɪt kɔːsts ðə seɪm", p:"dat uán. its tu líitars instéd av uán, and it kosts da séim",
  b:[["That one.","Esa."],["It's two litres","Son dos litros"],["instead of one","en vez de uno"],["and it costs the same.","y cuesta lo mismo."]]},
 {s:"B", ipa:"dʌn doʊnt fərˈɡet ðə tʃiːz", p:"dan. dóunt forguét da chíis",
  b:[["Done.","Listo."],["Don't forget the cheese.","No olvides el queso."]]},
 {s:"A", ipa:"aɪ ˈnevər fərˈɡet tʃiːz wer ɪz ɪt", p:"ái névar forguét chíis. uér is it",
  b:[["I never forget cheese.","Nunca olvido el queso."],["Where is it?","¿Dónde está?"]]},
 {s:"B", ipa:"aɪl sɪks nekst tuː ðə eɡz ɪz ˈemə ˈkʌmɪŋ ɑːn ˈsætərdeɪ", p:"áil siks, nekst tu da egs. is Éma káming an sáterdei",
  b:[["Aisle six,","Pasillo seis,"],["next to the eggs.","al lado de los huevos."],["Is Emma coming on Saturday?","¿Emma viene el sábado?"]]},
 {s:"A", ipa:"ʃi ɪz ˈdʒuːliə ɪz ˈkʌmɪŋ æz wel ænd tɑːm sed noʊ", p:"shi is. Chúlia is káming as uel, and Tom sed nóu",
  b:[["She is.","Sí."],["Julia is coming as well,","Julia también viene,"],["and Tom said no.","y Tom dijo que no."]],
  n:"<b>As well</b> al final de la frase. Para unir dos nombres haría falta <i>as well as</i>."},
 {s:"B", ipa:"tɑːm sed noʊ aɪm ʃɑːkt", p:"Tom sed nóu. áim shakt",
  b:[["Tom said no?","¿Tom dijo que no?"],["I'm shocked.","Qué sorpresa."]],
  n:"<b>Shocked</b>, con <i>-ed</i>, porque describe cómo se siente él."},
 {s:"A", ipa:"ˈnoʊbɑːdi ɪz ʃɑːkt tɑːm faɪndz ðə sterz ˈtaɪərɪŋ", p:"nóubadi is shakt. Tom fáinds da stérs táiaring",
  b:[["Nobody is shocked.","Nadie está sorprendido."],["Tom finds the stairs","A Tom las escaleras"],["tiring.","le cansan."]],
  n:"<b>Tiring</b>, con <i>-ing</i>, porque describe cómo son las escaleras."},
 {s:"B", ipa:"ɪˈlevn bʊks ðɪs jɪr ænd ˈzɪroʊ vɑːlˈkeɪnoʊz", p:"ilévn buks dis íer and síirou volkéinous",
  b:[["Eleven books this year","Once libros este año"],["and zero volcanoes.","y cero volcanes."]]},
 {s:"A", ipa:"hi sez ˈklaɪmɪŋ ɪz ˈbɔːrɪŋ ænd bʊks ˈɑːrnt", p:"ji ses kláiming is bóoring and buks árnt",
  b:[["He says climbing is boring","Dice que subir es aburrido"],["and books aren't.","y los libros no."]]},
 {s:"B", ipa:"hiːz nɑːt rɔːŋ əˈbaʊt ðə ˈklaɪmɪŋ meɪk ʃʊr juː brɪŋ ɡʊd ʃuːz", p:"jíis nat rong abáut da kláiming. méik shur iú bring gud shúus",
  b:[["He's not wrong","No está equivocado"],["about the climbing.","en lo de subir."],["Make sure you bring","Asegúrate de traer"],["good shoes.","buenos zapatos."]],
  n:"<b>Make sure</b> + frase entera, sin <i>to</i>."},
 {s:"A", ipa:"aɪv ɡɑːt ðem rɪˈmembər tuː brɪŋ ə tɔːrtʃ wi stɑːrt æt fɔːr ɪn ðə ˈmɔːrnɪŋ", p:"áiv gat dem. rimémbar tu bring a torch: ui start at for in da mórning",
  b:[["I've got them.","Ya los tengo."],["Remember to bring a torch:","Acuérdate de traer linterna:"],["we start at four","salimos a las cuatro"],["in the morning.","de la mañana."]],
  n:"<b>Remember to bring</b>: mira al futuro. <i>Remember bringing</i> miraría al pasado."},
 {s:"B", ipa:"æt fɔːr naʊ aɪm ðə taɪərd wʌn ænd wi ˈhævnt ˈstɑːrtɪd", p:"at for. náu áim da táiard uán, and ui jávnt startid",
  b:[["At four?","¿A las cuatro?"],["Now I'm the tired one","Ahora el cansado soy yo"],["and we haven't started.","y ni hemos empezado."]]},
 {s:"A", ipa:"juːl biː ɪkˈsaɪtɪd æt ðə tɑːp ˈevribɑːdi ɪz", p:"iúl bi iksáitid at da tap. évribadi is",
  b:[["You'll be excited","Vas a estar emocionado"],["at the top.","allá arriba."],["Everybody is.","Todos lo están."]]},
 {s:"B", ipa:"ɪkˈsaɪtɪd ænd ɪɡˈzɔːstɪd raɪt ˈeniθɪŋ els əˈpɑːrt frʌm ðə tʃiːz", p:"iksáitid and igsóstid. ráit: énizing els apárt from da chíis",
  b:[["Excited and exhausted.","Emocionado y agotado."],["Right:","A ver:"],["anything else","¿algo más"],["apart from the cheese?","aparte del queso?"]]},
 {s:"A", ipa:"sɔːlt ænd meɪk ʃʊr juː doʊnt brɪŋ ˈpɑːbloʊz ˈbækpæk əˈɡen", p:"solt. and méik shur iú dóunt bring Páblous bákpak aguén",
  b:[["Salt.","Sal."],["And make sure you don't bring","Y asegúrate de no traer"],["Pablo's backpack again.","otra vez la mochila de Pablo."]]},
 {s:"B", ipa:"ðæt wʌz wʌn taɪm wʌn taɪm ænd ˈnoʊbɑːdi hæz fərˈɡɑːtn ɪt", p:"dat uás uán táim. uán táim, and nóubadi jas forgátn it",
  b:[["That was one time.","Eso fue una vez."],["One time,","Una vez,"],["and nobody has forgotten it.","y nadie lo ha olvidado."]]}
];

const LECTURA = {
  titulo: "Shopping for a volcano",
  entradilla: "Una hora de supermercado para una caminata de un día. El texto pone a trabajar lo de la Fase 1: <i>which</i> frente a <i>what</i>, <i>one</i> y <i>ones</i>, <i>fewer</i> frente a <i>less</i>, los adjetivos en <i>-ed</i> y en <i>-ing</i>, y los conectores <i>instead of</i>, <i>as well</i> y <i>apart from</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "We spent an hour in the supermarket buying food for Saturday. Kevin wanted bread, cheese, water and something sweet, but not chocolate, because it melts. We took the small biscuits instead of the big ones: they make fewer crumbs and they weigh less.",
    "Kevin is the most organised person I know. He compared two bottles of water, he chose the one with two litres because it cost the same, and he explained the difference between fewer and less while we were in the queue. Nobody asked him, but it was useful.",
    "Tom isn't coming. He finds climbing boring and stairs tiring, and he says eleven books were enough exercise for one year. Nobody was surprised. Emma is coming, and Julia is coming as well, which makes six of us.",
    "We start at four in the morning, so Kevin reminded me three times: good shoes, a torch and salt. Apart from that, we only need to sleep tonight. Pablo and Nico want to come as well, but nobody has forgotten the backpack, so they are still waiting for an answer."
  ],
  glosario: [
    ["spent","spent","pasamos","spent"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["melts","melts","se derrite","melts"],
    ["took","tʊk","llevamos","tuk"],
    ["make","meɪk","hacen","méik"],
    ["weigh","weɪ","pesan","uéi"],
    ["compared","kəmˈperd","comparó","kompérd"],
    ["chose","tʃoʊz","eligió","chóus"],
    ["cost","kɔːst","costaba","kost"],
    ["explained","ɪkˈspleɪnd","explicó","ikspléind"],
    ["asked","æskt","le preguntó","askt"],
    ["finds","faɪndz","le resulta","fáinds"],
    ["says","sez","dice","ses"],
    ["reminded","rɪˈmaɪndɪd","me recordó","rimáindid"],
    ["has forgotten","hæz fərˈɡɑːtn","ha olvidado","jas forgátn"],
    ["are waiting","ɑːr ˈweɪtɪŋ","están esperando","ar uéiting"],
    ["the small biscuits","ðə smɔːl ˈbɪskɪts","las galletas pequeñas","da smóol bískits"],
    ["the big ones","ðə bɪɡ wʌnz","las grandes","da big uáns"],
    ["the one","ðə wʌn","la que","da uán"],
    ["instead of","ɪnˈsted əv","en vez de","instéd av"],
    ["as well","æz wel","también","as uel"],
    ["apart from","əˈpɑːrt frʌm","aparte de","apárt from"],
    ["fewer crumbs","ˈfjuːər krʌmz","menos migas","fiúar krams"],
    ["less","les","menos","les"],
    ["boring","ˈbɔːrɪŋ","aburrido","bóoring"],
    ["tiring","ˈtaɪərɪŋ","cansador","táiaring"],
    ["surprised","sərˈpraɪzd","sorprendido","sorpráisd"],
    ["organised","ˈɔːrɡənaɪzd","organizada","órganaisd"],
    ["useful","ˈjuːsfl","útil","iúsful"],
    ["supermarket","ˈsuːpərmɑːrkɪt","supermercado","súupermarket"],
    ["queue","kjuː","fila","kiú"],
    ["buying","ˈbaɪɪŋ","comprando","báiing"],
    ["most","moʊst","el más","móust"],
    ["difference","ˈdɪfrəns","diferencia","dífrens"],
    ["bottles","ˈbɑːtlz","botellas","bátls"],
    ["litres","ˈliːtərz","litros","líitars"],
    ["bread","bred","pan","bred"],
    ["cheese","tʃiːz","queso","chíis"],
    ["chocolate","ˈtʃɑːklət","chocolate","chóklat"],
    ["biscuits","ˈbɪskɪts","galletas","bískits"],
    ["salt","sɔːlt","sal","solt"],
    ["torch","tɔːrtʃ","linterna","torch"],
    ["shoes","ʃuːz","zapatos","shúus"],
    ["backpack","ˈbækpæk","mochila","bákpak"],
    ["stairs","sterz","escaleras","stérs"],
    ["climbing","ˈklaɪmɪŋ","subir","kláiming"],
    ["exercise","ˈeksərsaɪz","ejercicio","éksersais"],
    ["books","bʊks","libros","buks"],
    ["volcano","vɑːlˈkeɪnoʊ","volcán","volkéinou"],
    ["answer","ˈænsər","respuesta","ánsar"],
    ["hour","ˈaʊər","hora","áuar"],
    ["three times","θriː taɪmz","tres veces","zri táims"],
    ["six of us","sɪks əv ʌs","seis en total","siks av as"],
    ["tonight","təˈnaɪt","esta noche","tunáit"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["something sweet","ˈsʌmθɪŋ swiːt","algo dulce","sámzing suíit"],
    ["which makes","wɪtʃ meɪks","lo que hace","uích méiks"]
  ],
  preguntas: [
    { q:"Why didn't they buy chocolate?",
      ops:["Because it melts","Because it was expensive","Because Kevin doesn't like it"], ok:0,
      pista:"Primer párrafo: la razón va después de <i>because</i>." },
    { q:"Why did they choose the small biscuits?",
      ops:["They were cheaper","Fewer crumbs and less weight","There were no big ones"], ok:1,
      pista:"Primer párrafo, última frase. Fíjate en las dos palabras para «menos»." },
    { q:"Why isn't Tom coming?",
      ops:["He is working that day","He has no shoes","He finds climbing boring"], ok:2,
      pista:"Tercer párrafo: y considera que once libros ya son bastante ejercicio." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-08"] = {
  meta: {
    id: "a2-08", nivel: "A2", numero: 8,
    titulo: "En el supermercado",
    descriptor: "Puedo elegir entre opciones, comparar productos y cantidades, describir cómo me siento frente a cómo es algo, y avisar a otra persona de lo que no debe olvidar.",
    escena: "Kevin & David · supermercado, comprando para subir el volcán el sábado",
    personajeIA: "Kevin", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
