/* ============================================================
   LECCIÓN A1-07 · En la tienda: precios
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Dinero y precios", items:[
    ["money","ˈmʌni","dinero","máni"],["price","praɪs","precio","práis"],
    ["dollar","ˈdɑːlər","dólar","dálar"],["cent","sent","centavo","sent"],
    ["cheap","tʃiːp","barato","chíip"],["expensive","ɪkˈspensɪv","caro","ikspénsiv"],
    ["change","tʃeɪndʒ","cambio, vuelto","chéinch"],["receipt","rɪˈsiːt","recibo","risíit"],
    ["cash","kæʃ","efectivo","kash"],["card","kɑːrd","tarjeta","kard"],
    ["discount","ˈdɪskaʊnt","descuento","dískaunt"],["free","friː","gratis","fríi"]
  ]},
  {g:"En la tienda", items:[
    ["shop","ʃɑːp","tienda","shap"],["market","ˈmɑːrkɪt","mercado","márket"],
    ["customer","ˈkʌstəmər","cliente","kástamar"],["shop assistant","ʃɑːp əˈsɪstənt","dependiente","shap asístant"],
    ["bag","bæɡ","bolsa","bag"],["box","bɑːks","caja","baks"],
    ["size","saɪz","talla, tamaño","sáis"],["queue","kjuː","fila","kiú"],
    ["open","ˈoʊpən","abierto","óupen"],["closed","kloʊzd","cerrado","klóusd"]
  ]},
  {g:"Cosas que se compran", items:[
    ["shirt","ʃɜːrt","camisa","shert"],["shoes","ʃuːz","zapatos","shúus"],
    ["phone","foʊn","teléfono","fóun"],["notebook","ˈnoʊtbʊk","cuaderno","nóutbuk"],
    ["pen","pen","bolígrafo","pen"],["ticket","ˈtɪkɪt","boleto","tíket"],
    ["gift","ɡɪft","regalo","guift"],["umbrella","ʌmˈbrelə","paraguas","ambréla"]
  ]},
  {g:"Señalar y valorar", items:[
    ["this","ðɪs","este, esta","dis"],["that","ðæt","ese, esa","dat"],
    ["these","ðiːz","estos, estas","díis"],["those","ðoʊz","esos, esas","dóus"],
    ["How much","haʊ mʌtʃ","cuánto cuesta","jáu mach"],["too","tuː","demasiado","túu"],
    ["enough","ɪˈnʌf","suficiente","ináf"],["perfect","ˈpɜːrfɪkt","perfecto","pérfect"],
    ["another","əˈnʌðər","otro","anáder"],["the same","ðə seɪm","el mismo","da séim"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","how &rarr; jáu"],
  ["z","Lengua entre los dientes, sin voz.","thanks &rarr; zánks"],
  ["d","En <i>this</i>, <i>that</i>, <i>these</i>, <i>those</i>: lengua entre los dientes, con voz.","those &rarr; dóus"],
  ["sh","Como pedir silencio.","shirt &rarr; shert"],
  ["ch","Como en «coche».","cheap &rarr; chíip"],
  ["k + iú","La <i>q</i> de <i>queue</i> suena «kiú»: el resto de letras no se pronuncian.","queue &rarr; kiú"],
  ["v","Labio de abajo contra los dientes de arriba.","expensive &rarr; ikspénsiv"],
  ["íi úu óo","Vocal doble = vocal larga.","shoes &rarr; shúus"],
  ["letras mudas","La <i>p</i> de <i>receipt</i> no se pronuncia.","receipt &rarr; risíit"]
];

const VERBS = [
  ["to buy","irr","buy · buys","bought","will buy","comprar"],
  ["to sell","irr","sell · sells","sold","will sell","vender"],
  ["to pay","reg","pay · pays","paid","will pay","pagar"],
  ["to cost","irr","cost · costs","cost","will cost","costar"],
  ["to take","irr","take · takes","took","will take","llevarse"],
  ["to try on","reg","try on · tries on","tried on","will try on","probarse"],
  ["to look for","reg","look for · looks for","looked for","will look for","buscar"],
  ["to help","reg","help · helps","helped","will help","ayudar"],
  ["to give","irr","give · gives","gave","will give","dar"],
  ["to spend","irr","spend · spends","spent","will spend","gastar"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"]
];

const GRAMMAR = [
  {t:"Preguntar el precio", s:"How much is / are",
   p:"<b>How much</b> pregunta el precio, y el verbo concuerda con lo que se compra: <i>is</i> en singular, <i>are</i> en plural.",
   table:{head:["Qué se compra","Pregunta","Respuesta"], rows:[
     ["una cosa","How much is this shirt?","It's ten dollars."],
     ["varias cosas","How much are these shoes?","They're forty dollars."],
     ["el total","How much is it?","That's fifteen dollars."]
   ]},
   aviso:["El precio no lleva plural en el verbo español","Decimos «¿cuánto cuestan?» pero también «¿cuánto es?». En inglés hay que decidir: <b>is</b> o <b>are</b> según el objeto, no según el importe."]},

  {t:"Esto, eso, estos, esos", s:"this, that, these, those",
   p:"Cuatro palabras que dependen de dos cosas a la vez: si está cerca o lejos, y si es una o varias.",
   table:{head:["","Cerca","Lejos"], rows:[
     ["Singular","this shirt (esta camisa)","that shirt (esa camisa)"],
     ["Plural","these shoes (estos zapatos)","those shoes (esos zapatos)"]
   ]},
   aviso:["Los plurales suenan casi igual","<b>These</b> (díis) y <b>this</b> (dis) se confunden al oído. La diferencia está en la vocal larga del plural. Practícalos en pareja."]},

  {t:"Demasiado no es muy", s:"too vs very",
   p:"<b>Very</b> refuerza; <b>too</b> señala un problema. <i>Very expensive</i> es «muy caro» y puede que lo compres. <i>Too expensive</i> es «demasiado caro» y no lo compras.",
   chips:[["It's very big","Es muy grande"],["It's too big","Es demasiado grande (no sirve)"],["It's big enough","Es suficientemente grande"],["It isn't big enough","No es suficientemente grande"]],
   aviso:["<i>Too</i> tiene otro significado","Al final de una frase, <b>too</b> significa «también»: <i>I want one too</i>. Delante de un adjetivo, significa «demasiado». La posición decide."]},

  {t:"Enough va después", s:"enough",
   p:"Al revés que en español, <b>enough</b> se coloca <b>detrás</b> del adjetivo, no delante.",
   chips:[["cheap enough","suficientemente barato"],["big enough","suficientemente grande"],["enough money","suficiente dinero"]],
   aviso:["Detrás del adjetivo, delante del sustantivo","<span class='wrong'>enough cheap</span> &nbsp;&rarr;&nbsp; <span class='right'>cheap <b>enough</b></span>. Pero con un sustantivo sí va delante: <b>enough money</b>."]},

  {t:"Pedir ayuda y ofrecerla", s:"Can I…? / Can you…?",
   p:"<b>Can</b> nunca cambia de forma y el verbo que le sigue va sin <i>to</i>. Es el modal más útil de A1.",
   chips:[["Can I help you?","¿Le puedo ayudar?"],["Can I try it on?","¿Me lo puedo probar?"],["Can you give me a bag?","¿Me da una bolsa?"],["Can I pay by card?","¿Puedo pagar con tarjeta?"]],
   aviso:["Sin <i>to</i> después de <i>can</i>","<span class='wrong'>Can I to help you?</span> &nbsp;&rarr;&nbsp; <span class='right'>Can I help you?</span> Y tampoco lleva <i>-s</i> en tercera persona: <i>she can</i>, nunca <span class='wrong'>she cans</span>."]},

  {t:"Los precios se leen distinto", s:"$15.50",
   p:"El punto decimal se lee <b>point</b>, o directamente se separan las dos partes. Y la moneda va al final al hablar, aunque el símbolo se escriba delante.",
   chips:[["$15","fifteen dollars"],["$15.50","fifteen fifty"],["$0.99","ninety-nine cents"],["$100","a hundred dollars"]],
   aviso:["Escrito delante, dicho detrás","Se escribe <b>$15</b> pero se dice <b>fifteen dollars</b>. Nunca <span class='wrong'>dollars fifteen</span>."]}
];

/* Sarah (A) y David (B) en el mercado */
const DIALOGUE = [
 {s:"A", ipa:"lʊk æt ðoʊz ʃɜːrts ðeɪ ɑːr ˈbjuːtɪfl", p:"luk at dóus sherts. déi ar biútiful",
  b:[["Look at","Mira"],["those","esas"],["shirts.","camisas."],["They are","Son"],["beautiful.","hermosas."]],
  n:"<b>Those</b> porque están lejos y son varias. Si tuvieras una en la mano sería <i>this shirt</i>."},
 {s:"B", ipa:"jes ˈrɪəli naɪs haʊ mʌtʃ ɑːr ðeɪ", p:"yes, ríili náis. jáu mach ar déi",
  b:[["Yes,","Sí,"],["really","muy"],["nice.","bonitas."],["How much","¿Cuánto"],["are they?","cuestan?"]],
  n:"Plural, así que <b>are</b>. Con una sola camisa sería <i>How much is it?</i>"},
 {s:"A", ipa:"ðə praɪs seɪz ˈtwenti faɪv ˈdɑːlərz", p:"da práis ses tuénti fáiv dálars",
  b:[["The price","El precio"],["says","dice"],["twenty-five","veinticinco"],["dollars.","dólares."]]},
 {s:"B", ipa:"ðæts tuː ɪkˈspensɪv fɔːr miː", p:"dats túu ikspénsiv for míi",
  b:[["That is","Eso es"],["too","demasiado"],["expensive","caro"],["for me.","para mí."]],
  n:"<b>Too expensive</b>: demasiado, o sea que no lo compra. Si dijera <i>very expensive</i> podría comprarlo igualmente."},
 {s:"A", ipa:"lʊk ðɪs wʌn ɪz ˈtʃiːpər ˈfɪftiːn ˈdɑːlərz", p:"luk, dis uán is chíiper: fiftíin dálars",
  b:[["Look,","Mira,"],["this one","esta"],["is","es"],["cheaper:","más barata:"],["fifteen","quince"],["dollars.","dólares."]]},
 {s:"B", ipa:"ˈfɪftiːn ɔːr ˈfɪfti aɪ ˈnevər hɪr ðə ˈdɪfrəns", p:"fiftíin or fífti. ái névar jíer da dífrens",
  b:[["Fifteen","¿Quince"],["or","o"],["fifty?","cincuenta?"],["I never","Nunca"],["hear","oigo"],["the difference.","la diferencia."]],
  n:"La pareja <i>-teen</i> / <i>-ty</i> otra vez. En una tienda equivocarse cuesta dinero de verdad."},
 {s:"A", ipa:"ˈfɪftiːn ðə ˈæksent ɪz ɑːn ðə lɑːst pɑːrt", p:"fiftíin. da áksent is an da last part",
  b:[["Fifteen.","Quince."],["The accent","El acento"],["is","está"],["on the last part.","en la última parte."]]},
 {s:"B", ipa:"ɡʊd ðæts tʃiːp ɪˈnʌf kæn aɪ traɪ ɪt ɑːn", p:"gud. dats chíip ináf. kan ái trái it an",
  b:[["Good.","Bien."],["That is","Eso es"],["cheap enough.","suficientemente barato."],["Can I try it on?","¿Me la puedo probar?"]],
  n:"<b>Cheap enough</b>: <i>enough</i> va <b>detrás</b> del adjetivo. Y <b>can</b> no lleva <i>to</i> después."},
 {s:"A", ipa:"æsk ðə ʃɑːp əˈsɪstənt ʃi ɪz ɑːn ðə left", p:"ask da shap asístant. shi is an da left",
  b:[["Ask","Pregúntale"],["the shop assistant.","a la dependienta."],["She is","Está"],["on the left.","a la izquierda."]]},
 {s:"B", ipa:"ɪkˈskjuːz miː duː juː hæv ðɪs ɪn ə ˈlɑːrdʒər saɪz", p:"ikskiús míi. du iú jav dis in a lárcher sáis",
  b:[["Excuse me.","Disculpe."],["Do you have","¿Tiene"],["this","esta"],["in a larger size?","en una talla más grande?"]]},
 {s:"A", ipa:"jes wi duː wʌt saɪz ɑːr juː", p:"yes ui du. uát sáis ar iú",
  b:[["Yes, we do.","Sí, tenemos."],["What size","¿Qué talla"],["are you?","usa?"]],
  n:"<b>What size are you?</b>, literalmente «¿qué talla eres?». El inglés usa <i>to be</i> también para esto."},
 {s:"B", ipa:"aɪ æm ə ˈmiːdiəm aɪ θɪŋk", p:"ái am a míidiam, ái zink",
  b:[["I am","Soy"],["a medium,","una mediana,"],["I think.","creo."]]},
 {s:"A", ipa:"hɪr juː ɑːr ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðer", p:"jíer iú ar. da fítin rúum is óuvar der",
  b:[["Here you are.","Aquí tiene."],["The fitting room","El probador"],["is","está"],["over there.","por allá."]]},
 {s:"B", ipa:"θæŋk juː ðɪs wʌn ɪz ˈperfɪkt aɪ teɪk ɪt", p:"zánk iú. dis uán is pérfect. ái téik it",
  b:[["Thank you.","Gracias."],["This one","Esta"],["is","es"],["perfect.","perfecta."],["I take it.","Me la llevo."]]},
 {s:"A", ipa:"ðæts ˈfɪftiːn ˈdɑːlərz kæʃ ɔːr kɑːrd", p:"dats fiftíin dálars. kash or kard",
  b:[["That is","Son"],["fifteen","quince"],["dollars.","dólares."],["Cash","¿Efectivo"],["or card?","o tarjeta?"]]},
 {s:"B", ipa:"kæn aɪ peɪ baɪ kɑːrd", p:"kan ái péi bái kard",
  b:[["Can I pay","¿Puedo pagar"],["by card?","con tarjeta?"]]},
 {s:"A", ipa:"əv kɔːrs hɪr ɪz jʊr rɪˈsiːt ænd ə bæɡ", p:"av kórs. jíer is iór risíit and a bag",
  b:[["Of course.","Por supuesto."],["Here is","Aquí tiene"],["your","su"],["receipt","recibo"],["and","y"],["a bag.","una bolsa."]],
  n:"En <b>receipt</b> la <i>p</i> no se pronuncia: se dice «risíit»."},
 {s:"B", ipa:"θæŋks duː juː sel ʌmˈbreləz tuː", p:"zánks. du iú sel ambrélas túu",
  b:[["Thanks.","Gracias."],["Do you sell","¿Venden"],["umbrellas","paraguas"],["too?","también?"]],
  n:"Aquí <b>too</b> significa «también» porque va al final. Delante de un adjetivo significaría «demasiado»."},
 {s:"A", ipa:"jes ðeɪ ɑːr ˈoʊvər ðer ˈeɪt ˈdɑːlərz iːtʃ", p:"yes, déi ar óuvar der. éit dálars íich",
  b:[["Yes,","Sí,"],["they are","están"],["over there.","por allá."],["Eight","Ocho"],["dollars","dólares"],["each.","cada uno."]]},
 {s:"B", ipa:"aɪ doʊnt hæv ɪˈnʌf ˈmʌni təˈdeɪ", p:"ái dóunt jav ináf máni tudéi",
  b:[["I don't have","No tengo"],["enough","suficiente"],["money","dinero"],["today.","hoy."]],
  n:"Con sustantivo, <b>enough</b> sí va delante: <i>enough money</i>. Con adjetivo va detrás: <i>cheap enough</i>."},
 {s:"A", ipa:"ðer ɪz ə ˈdɪskaʊnt ɑːn ˈsætərdeɪ ˈtwenti pərˈsent ɔːf", p:"der is a dískaunt an sáterdei: tuénti persént of",
  b:[["There is","Hay"],["a discount","un descuento"],["on Saturday:","el sábado:"],["twenty per cent off.","veinte por ciento."]]},
 {s:"B", ipa:"ðen aɪ kʌm bæk ɑːn ˈsætərdeɪ θæŋk juː", p:"den ái kam bak an sáterdei. zánk iú",
  b:[["Then","Entonces"],["I come back","vuelvo"],["on Saturday.","el sábado."],["Thank you!","¡Gracias!"]]},
 {s:"A", ipa:"juːr ˈwelkəm hæv ə naɪs deɪ", p:"iúr uélcam. jav a náis déi",
  b:[["You're welcome.","De nada."],["Have a nice day!","¡Que tenga buen día!"]]},
 {s:"B", ipa:"juː tuː ˈserə lets ɡoʊ ænd faɪnd ə ˈkɔːfi", p:"iú túu. sára, lets góu and fáind a kófi",
  b:[["You too.","Igualmente."],["Sarah,","Sarah,"],["let's go","vamos"],["and find","a buscar"],["a coffee.","un café."]]}
];

const LECTURA = {
  titulo: "Saturday at the market",
  entradilla: "David cuenta una mañana de compras. El texto practica los precios, los demostrativos, <i>too</i> frente a <i>enough</i>, y el verbo <i>can</i>.",
  parrafos: [
    "On Saturday morning I go to the market with my mother. There is always a discount on Saturdays, so the prices are cheaper. Last week I wanted a blue shirt, but it was twenty-five dollars. That was too expensive for me, so I did not buy it. This week the same shirt is fifteen dollars, and that is cheap enough.",
    "My mother always asks the price before she buys anything. \"How much are these shoes?\" she says, and the shop assistant answers. If a thing is not cheap enough, she walks away and looks for another shop. She never pays by card at the market; she prefers cash. Today I have enough money for the shirt and an umbrella. We can buy everything and we still have change."
  ],
  glosario: [
    ["go","ɡoʊ","voy","góu"],
    ["buy","baɪ","comprar","bái"],
    ["buys","baɪz","compra","báis"],
    ["asks","æsks","pregunta","asks"],
    ["says","sez","dice","ses"],
    ["answers","ˈænsərz","responde","ánsers"],
    ["walks away","wɔːks əˈweɪ","se va","uóks auéi"],
    ["looks for","lʊks fɔːr","busca","luks for"],
    ["pays","peɪz","paga","péis"],
    ["prefers","prɪˈfɜːrz","prefiere","prifférs"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["was","wʌz","era, costaba","uás"],
    ["did not","dɪd nɑːt","no (pasado)","did nat"],
    ["still","stɪl","todavía","stil"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["anything","ˈeniθɪŋ","nada, algo","énizing"],
    ["thing","θɪŋ","cosa","zing"],
    ["last week","læst wiːk","la semana pasada","last uíik"],
    ["this week","ðɪs wiːk","esta semana","dis uíik"],
    ["blue","bluː","azul","blúu"],
    ["before","bɪˈfɔːr","antes de","bifór"],
    ["prices","ˈpraɪsɪz","precios","práisis"],
    ["cheaper","ˈtʃiːpər","más baratos","chíiper"],
    ["shoes","ʃuːz","zapatos","shúus"],
    ["shirt","ʃɜːrt","camisa","shert"],
    ["umbrella","ʌmˈbrelə","paraguas","ambréla"],
    ["mother","ˈmʌðər","madre","máder"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["Saturday","ˈsætərdeɪ","sábado","sáterdei"],
    ["Saturdays","ˈsætərdeɪz","los sábados","sáterdeis"]
  ],
  preguntas: [
    { q:"Why didn't David buy the shirt last week?",
      ops:["Because it was closed","Because it was too expensive","Because it was too big"], ok:1,
      pista:"Primer párrafo: costaba veinticinco dólares y él usa <i>too expensive</i>." },
    { q:"How does David's mother pay at the market?",
      ops:["In cash","By card","She does not pay"], ok:0,
      pista:"Segundo párrafo: dice qué prefiere y qué nunca hace." },
    { q:"What happens on Saturdays at the market?",
      ops:["The market is closed","The prices are higher","There is a discount"], ok:2,
      pista:"Está en la segunda frase del texto, y por eso los precios bajan." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-07"] = {
  meta: {
    id: "a1-07", nivel: "A1", numero: 7,
    titulo: "En la tienda: precios",
    descriptor: "Puedo desenvolverme en compras sencillas, preguntar precios y cantidades, y realizar transacciones básicas.",
    escena: "Sarah & David · en el mercado, sábado por la mañana",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
