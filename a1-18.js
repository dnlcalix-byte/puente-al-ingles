/* ============================================================
   LECCIÓN A1-18 · En el restaurante
   Reparto: Diego, el camarero, la noche que la familia sale a cenar
   por el cumpleaños de Ana. La lectura recoge los seis puntos de la
   Fase 1 —would like, contables, some/any, how much/how many— en
   primera, tercera y plural.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"En la mesa", items:[
    ["table","ˈteɪbl","mesa","téibl"],["menu","ˈmenjuː","menú","méniu"],
    ["waiter","ˈweɪtər","camarero","uéitar"],["bill","bɪl","cuenta","bil"],
    ["tip","tɪp","propina","tip"],["fork","fɔːrk","tenedor","fork"],
    ["knife","naɪf","cuchillo","náif"],["spoon","spuːn","cuchara","spúun"],
    ["napkin","ˈnæpkɪn","servilleta","nápkin"],["plate","pleɪt","plato","pléit"]
  ]},
  {g:"Para comer", items:[
    ["starter","ˈstɑːrtər","entrada","stártar"],["main course","meɪn kɔːrs","plato fuerte","méin kors"],
    ["dessert","dɪˈzɜːrt","postre","disért"],["soup","suːp","sopa","súup"],
    ["salad","ˈsæləd","ensalada","sálad"],["chicken","ˈtʃɪkɪn","pollo","chíkin"],
    ["beef","biːf","carne de res","bíif"],["beans","biːnz","frijoles","bíins"],
    ["vegetables","ˈvedʒtəblz","verduras","véchtabls"],["bread","bred","pan","bred"]
  ]},
  {g:"Para beber", items:[
    ["water","ˈwɔːtər","agua","uóter"],["juice","dʒuːs","jugo","chúus"],
    ["lemonade","ˌleməˈneɪd","limonada","lemonéid"],["tea","tiː","té","tíi"],
    ["still water","stɪl ˈwɔːtər","agua sin gas","stil uóter"],["sparkling","ˈspɑːrklɪŋ","con gas","spárkling"],
    ["glass","ɡlæs","vaso","glas"],["bottle","ˈbɑːtl","botella","bátl"],
    ["ice","aɪs","hielo","áis"],["cold","koʊld","frío","kóuld"]
  ]},
  {g:"Frases del restaurante", items:[
    ["I'd like…","aɪd laɪk","quisiera…","áid láik"],["Can I have…?","kæn aɪ hæv","¿me trae…?","kan ái jav"],
    ["Would you like…?","wʊd juː laɪk","¿le gustaría…?","uúd iú láik"],["Anything else?","ˈeniθɪŋ els","¿algo más?","énizing els"],
    ["That's all","ðæts ɔːl","eso es todo","dats ol"],["How much is it?","haʊ mʌtʃ ɪz ɪt","¿cuánto es?","jáu mach is it"],
    ["The bill, please","ðə bɪl pliːz","la cuenta, por favor","da bil plíis"],["for me","fɔːr miː","para mí","for mi"],
    ["to share","tuː ʃer","para compartir","tu shér"],["Here you are","hɪr juː ɑːr","aquí tiene","jíar iú ar"]
  ]}
];

const PRONKEY = [
  ["sh","Como pedir silencio.","share &rarr; shér"],
  ["ch","Como en «coche». También suena así la <i>j</i> de <i>juice</i>.","chicken &rarr; chíkin"],
  ["j","Aire por la garganta, sin raspar.","have &rarr; jav"],
  ["z","Lengua entre los dientes, sin voz.","anything &rarr; énizing"],
  ["v","Labio de abajo contra los dientes de arriba.","vegetables &rarr; véchtabls"],
  ["k muda","La <i>k</i> de <i>kn-</i> no se pronuncia nunca.","knife &rarr; náif"],
  ["úu","Vocal larga, labios muy cerrados.","soup &rarr; súup"],
  ["r final","Apenas se toca; nunca vibra.","waiter &rarr; uéitar"],
  ["'d","<b>would</b> contraído: se oye apenas una <i>d</i> pegada al pronombre.","I'd like &rarr; áid láik"]
];

const VERBS = [
  ["to order","reg","order · orders","ordered","will order","pedir, encargar"],
  ["to book","reg","book · books","booked","will book","reservar"],
  ["to serve","reg","serve · serves","served","will serve","servir"],
  ["to taste","reg","taste · tastes","tasted","will taste","probar, saber a"],
  ["to share","reg","share · shares","shared","will share","compartir"],
  ["to recommend","reg","recommend · recommends","recommended","will recommend","recomendar"],
  ["to finish","reg","finish · finishes","finished","will finish","terminar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to have","irr","have · has","had","will have","tomar, tener"],
  ["to drink","irr","drink · drinks","drank","will drink","beber"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"],
  ["to pay","irr","pay · pays","paid","will pay","pagar"]
];

const GRAMMAR = [
  {t:"WOULD LIKE: querer con educación", s:"I'd like… / Would you like…?",
   p:"Pedir con <i>I want</i> suena brusco, casi a exigencia. La forma normal en un restaurante —y en casi cualquier sitio— es <b>would like</b>, que se contrae en <b>'d like</b>.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Pedir una cosa","'d like + sustantivo","I'd like the soup."],
     ["Pedir una acción","'d like + to + verbo","I'd like to see the menu."],
     ["Ofrecer","Would you like…?","Would you like a dessert?"],
     ["Aceptar / rechazar","Yes, please. / No, thank you.","— Would you like ice? — No, thank you."]
   ]},
   aviso:["<i>I'd like</i> no es <i>I like</i>","<b>I like fish</b> = me gusta el pescado, en general. <b>I'd like fish</b> = quiero pescado, ahora. Una letra cambia el sentido entero."]},

  {t:"Contables e incontables", s:"a fork, some bread",
   p:"El inglés divide los sustantivos en dos grupos y los trata distinto. Los <b>contables</b> se pueden numerar y llevan <i>a/an</i> y plural. Los <b>incontables</b> no: no tienen plural y nunca llevan <i>a/an</i>.",
   table:{head:["Contables","Incontables"], rows:[
     ["a plate, two plates","water"],
     ["a bottle, three bottles","bread"],
     ["a vegetable, some vegetables","rice"],
     ["a glass, four glasses","meat, soup, coffee"]
   ]},
   aviso:["El error más común de esta lección","<span class='wrong'>I'd like a bread.</span> &nbsp;&rarr;&nbsp; <span class='right'>I'd like some bread.</span> Para contar un incontable hay que envasarlo: <i>a piece of bread</i>, <i>a glass of water</i>, <i>a bowl of rice</i>."]},

  {t:"SOME y ANY", s:"afirmativo frente a negativo y pregunta",
   p:"Las dos significan «algo de» o «algunos», pero no se reparten al azar.",
   table:{head:["Frase","Se usa","Ejemplo"], rows:[
     ["Afirmativa","some","We have some bread."],
     ["Negativa","any","They didn't want any dessert."],
     ["Pregunta","any","Is there any salad?"],
     ["Ofrecer o pedir","some","Would you like some water?"]
   ]},
   aviso:["La excepción que sí importa","En <b>ofrecimientos y peticiones</b> se usa <i>some</i> aunque sea pregunta: <i>Can I have <b>some</b> bread?</i> Con <i>any</i> sonaría a que dudas de que haya."]},

  {t:"Pedir con cortesía", s:"Can I / Could I / May I",
   p:"Tres niveles de la misma petición. Todos van con <b>verbo base</b> y ninguno lleva <i>to</i>.",
   chips:[["Can I have the bill?","¿Me trae la cuenta?"],["Could I have some water?","¿Podría traerme agua?"],["Could we see the menu?","¿Podríamos ver el menú?"],["May I sit here?","¿Puedo sentarme aquí?"]],
   aviso:["<i>Could</i> no es pasado aquí","En una petición, <b>could</b> no habla del pasado: sólo suena más suave que <i>can</i>. Es la forma que más se oye en un restaurante."]},

  {t:"HOW MUCH y HOW MANY", s:"depende de si se puede contar",
   p:"Misma pregunta en español —«cuánto»—, dos palabras distintas en inglés.",
   table:{head:["Se usa","Con","Ejemplo"], rows:[
     ["How much","incontables y dinero","How much water do you want?"],
     ["How much","el precio","How much is the bill?"],
     ["How many","contables en plural","How many people are there?"],
     ["a lot of","los dos","a lot of bread, a lot of plates"]
   ]},
   aviso:["Para el precio siempre <i>how much</i>","<span class='wrong'>How many is it?</span> &nbsp;&rarr;&nbsp; <span class='right'>How much is it?</span> El dinero es incontable en inglés."]},

  {t:"Las comidas van sin artículo", s:"have breakfast, have dinner",
   p:"El español dice «el desayuno», «la cena». El inglés, cuando habla de la comida como acto, <b>no pone artículo</b>. Y el verbo no es <i>take</i> sino <b>have</b>.",
   chips:[["We had dinner at eight.","Cenamos a las ocho."],["I have breakfast at seven.","Desayuno a las siete."],["Let's have lunch together.","Almorcemos juntos."],["What's for dinner?","¿Qué hay de cena?"]],
   aviso:["Nunca <i>take a dinner</i>","<span class='wrong'>We took the dinner.</span> &nbsp;&rarr;&nbsp; <span class='right'>We had dinner.</span> <i>Take</i> es tomar en el sentido de agarrar, no de comer."]}
];

/* Diego (A, el camarero) atiende a David (B) la noche del cumpleaños */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈiːvnɪŋ duː juː hæv ə ˌrezərˈveɪʃn", p:"gud íivning. du iú jav a reservéishon",
  b:[["Good evening.","Buenas noches."],["Do you have","¿Tienen"],["a reservation?","reservación?"]]},
 {s:"B", ipa:"jes ə ˈteɪbl fɔːr faɪv ðə neɪm ɪz ænˈdrɑːde", p:"iés. a téibl for fáiv. da néim is Andráde",
  b:[["Yes,","Sí,"],["a table for five.","una mesa para cinco."],["The name is","El nombre es"],["Andrade.","Andrade."]]},
 {s:"A", ipa:"ˈpɜːrfɪkt ðɪs weɪ pliːz hɪr ɪz ðə ˈmenjuː", p:"pérfect. dis uéi, plíis. jíar is da méniu",
  b:[["Perfect.","Perfecto."],["This way, please.","Por aquí, por favor."],["Here is","Aquí tiene"],["the menu.","el menú."]]},
 {s:"B", ipa:"θæŋk juː kʊd wi hæv sʌm ˈwɔːtər fɜːrst", p:"zánk iú. kud ui jav sam uóter ferst",
  b:[["Thank you.","Gracias."],["Could we have","¿Nos podría traer"],["some water","agua"],["first?","primero?"]],
  n:"<b>Could we have</b> + verbo base, sin <i>to</i>. Y <b>some</b> aunque sea pregunta, porque es una petición."},
 {s:"A", ipa:"əv ˈkɔːrs stɪl ɔːr ˈspɑːrklɪŋ", p:"av kórs. stil or spárkling",
  b:[["Of course.","Por supuesto."],["Still","¿Sin gas"],["or sparkling?","o con gas?"]]},
 {s:"B", ipa:"stɪl pliːz ænd ə ˌleməˈneɪd fɔːr maɪ ˈsɪstər", p:"stil, plíis. and a lemonéid for mái sístar",
  b:[["Still, please.","Sin gas, por favor."],["And a lemonade","Y una limonada"],["for my sister.","para mi hermana."]],
  n:"<b>A lemonade</b> lleva artículo porque aquí significa «un vaso de limonada»: ya está contado."},
 {s:"A", ipa:"ˈvɛri ɡʊd ɑːr juː ˈredi tuː ˈɔːrdər", p:"véri gud. ar iú rédi tu órdar",
  b:[["Very good.","Muy bien."],["Are you ready","¿Están listos"],["to order?","para pedir?"]]},
 {s:"B", ipa:"ˈɔːlmoʊst wʌt duː juː ˌrekəˈmend", p:"ólmoust. uát du iú rekoménd",
  b:[["Almost.","Casi."],["What do you recommend?","¿Qué nos recomienda?"]]},
 {s:"A", ipa:"ðə fɪʃ ɪz ˈvɛri ɡʊd təˈdeɪ ænd ðə ˈtʃɪkɪn suːp ɪz aʊər haʊs ˈstɑːrtər", p:"da fish is véri gud tudéi, and da chíkin súup is áuar jáus stártar",
  b:[["The fish","El pescado"],["is very good","está muy bueno"],["today,","hoy,"],["and the chicken soup","y la sopa de pollo"],["is our house starter.","es la entrada de la casa."]]},
 {s:"B", ipa:"aɪd laɪk ðə suːp ðen ænd ðə fɪʃ fɔːr maɪ ˈmʌðər", p:"áid láik da súup, den. and da fish for mái máder",
  b:[["I'd like","Quisiera"],["the soup,","la sopa,"],["then.","entonces."],["And the fish","Y el pescado"],["for my mother.","para mi madre."]],
  n:"<b>I'd like</b>, no <span class='wrong'>I want</span>. Y ojo: <i>I'd like</i> es «quiero ahora», mientras que <i>I like</i> sería «me gusta en general»."},
 {s:"A", ipa:"haʊ wʊd juː laɪk ðə fɪʃ wɪð raɪs ɔːr wɪð ˈvedʒtəblz", p:"jáu uúd iú láik da fish: uid ráis or uid véchtabls",
  b:[["How would you like","¿Cómo desea"],["the fish,","el pescado,"],["with rice","con arroz"],["or with vegetables?","o con verduras?"]]},
 {s:"B", ipa:"wɪð raɪs pliːz ɪz ðer ˈeni ˈsæləd wɪð ɪt", p:"uid ráis, plíis. is der éni sálad uid it",
  b:[["With rice, please.","Con arroz, por favor."],["Is there any salad","¿Viene con ensalada"],["with it?","el plato?"]],
  n:"Pregunta normal, no petición: aquí sí toca <b>any</b>."},
 {s:"A", ipa:"ðer ɪz ə smɔːl ˈsæləd jes ˈeniθɪŋ fɔːr ðə ˈtʃɪldrən", p:"der is a smóol sálad, iés. énizing for da chíldren",
  b:[["There is","Viene"],["a small salad,","una ensalada pequeña,"],["yes.","sí."],["Anything","¿Algo"],["for the children?","para los niños?"]]},
 {s:"B", ipa:"ðeɪ doʊnt wɑːnt ˈeni suːp ðeɪd laɪk sʌm ˈtʃɪkɪn ænd biːnz", p:"déi dóunt uánt éni súup. déid láik sam chíkin and bíins",
  b:[["They don't want","No quieren"],["any soup.","sopa."],["They'd like","Quisieran"],["some chicken","pollo"],["and beans.","y frijoles."]],
  n:"Negativo con <b>any</b>, afirmativo con <b>some</b>, en la misma respuesta."},
 {s:"A", ipa:"noʊ ˈprɑːbləm ænd tuː drɪŋk", p:"nóu práblem. and tu drink",
  b:[["No problem.","No hay problema."],["And to drink?","¿Y para beber?"]]},
 {s:"B", ipa:"tuː ˈdʒuːsɪz fɔːr ðem pliːz ðæts ɔːl fɔːr naʊ", p:"tu chúusis for dem, plíis. dats ol for náu",
  b:[["Two juices","Dos jugos"],["for them, please.","para ellos, por favor."],["That's all","Eso es todo"],["for now.","por ahora."]]},
 {s:"A", ipa:"wʊd juː laɪk tuː siː ðə dɪˈzɜːrt ˈmenjuː ˈleɪtər", p:"uúd iú láik tu síi da disért méniu léitar",
  b:[["Would you like","¿Les gustaría"],["to see","ver"],["the dessert menu","el menú de postres"],["later?","más tarde?"]],
  n:"<b>Would you like to + verbo</b> cuando se ofrece una acción, no una cosa."},
 {s:"B", ipa:"jes pliːz ɪts maɪ ˈsɪstərz ˈbɜːrθdeɪ", p:"iés, plíis. its mái sístars bérzdei",
  b:[["Yes, please.","Sí, por favor."],["It's my sister's","Es el cumpleaños"],["birthday.","de mi hermana."]]},
 {s:"A", ipa:"ðen wi hæv ə keɪk wɪð ə ˈkændl doʊnt ˈwʌri", p:"den ui jav a kéik uid a kándl. dóunt uóri",
  b:[["Then we have","Entonces tenemos"],["a cake","un pastel"],["with a candle.","con una vela."],["Don't worry.","No se preocupe."]]},
 {s:"B", ipa:"ˈpɜːrfɪkt θæŋk juː ˈvɛri mʌtʃ", p:"pérfect. zánk iú véri mach",
  b:[["Perfect.","Perfecto."],["Thank you","Muchas"],["very much.","gracias."]]},
 {s:"A", ipa:"hɪr ɪz jʊr suːp ˈkerfl ðə pleɪt ɪz hɑːt", p:"jíar is iór súup. kérful: da pléit is jat",
  b:[["Here is","Aquí tiene"],["your soup.","su sopa."],["Careful,","Cuidado,"],["the plate is hot.","el plato está caliente."]]},
 {s:"B", ipa:"ɪt smelz ɡreɪt kʊd aɪ hæv sʌm bred pliːz", p:"it smels gréit. kud ái jav sam bred, plíis",
  b:[["It smells great.","Huele muy bien."],["Could I have","¿Me podría traer"],["some bread,","pan,"],["please?","por favor?"]],
  n:"<b>Some bread</b>: <i>bread</i> es incontable, así que nunca <span class='wrong'>a bread</span>."},
 {s:"A", ipa:"hɪr juː ɑːr aɪl brɪŋ mɔːr ɪn ə ˈmɪnɪt", p:"jíar iú ar. áil bring mor in a mínit",
  b:[["Here you are.","Aquí tiene."],["I'll bring more","Le traigo más"],["in a minute.","en un minuto."]],
  n:"<b>I'll bring</b>: decisión tomada en ese instante, por eso <i>will</i> y no <i>going to</i>."},
 {s:"B", ipa:"θæŋk juː ænd ðə bɪl æt ðə end pliːz", p:"zánk iú. and da bil at da end, plíis",
  b:[["Thank you.","Gracias."],["And the bill","Y la cuenta"],["at the end,","al final,"],["please.","por favor."]]}
];

const LECTURA = {
  titulo: "Dinner for five",
  entradilla: "La cena de cumpleaños contada al día siguiente. El texto reúne lo estudiado en la Fase 1: <i>would like</i>, contables e incontables, <i>some</i> frente a <i>any</i>, <i>how much</i> frente a <i>how many</i>, y las comidas sin artículo. Cada párrafo cambia de persona.",
  parrafos: [
    "On Saturday night we had dinner at a restaurant in the centre. My mother booked a table for five, because it was Ana's birthday. The waiter brought us some water and some bread, and we read the menu for ten minutes. I ordered the chicken soup and then a fish with rice.",
    "Ana didn't want any soup. She would like to eat less meat this year, so she asked for a big salad and some vegetables. She drank two lemonades and she says the salad was excellent. She also ate half of my fish, but that is another story.",
    "Pablo and Nico shared everything. They ordered some chicken, some beans and a lot of bread, and they finished in fifteen minutes. They didn't want any dessert, which is very strange, because they always want dessert.",
    "The waiter was very kind. He recommended the fish, he brought a cake with a candle for Ana, and he didn't charge us for it. How much was the bill? Sixty dollars for five people. My mother paid and we left him a good tip."
  ],
  glosario: [
    ["had dinner","hæd ˈdɪnər","cenamos","jad dínar"],
    ["booked","bʊkt","reservó","bukt"],
    ["brought","brɔːt","trajo","bróot"],
    ["read","red","leímos","red"],
    ["ordered","ˈɔːrdərd","pedí, pidieron","órdard"],
    ["asked for","æskt fɔːr","pidió","askt for"],
    ["drank","dræŋk","bebió","dránk"],
    ["ate","eɪt","comió","éit"],
    ["says","sez","dice","ses"],
    ["shared","ʃerd","compartieron","shérd"],
    ["finished","ˈfɪnɪʃt","terminaron","fínisht"],
    ["recommended","ˌrekəˈmendɪd","recomendó","rekoméndid"],
    ["charge","tʃɑːrdʒ","cobrar","charch"],
    ["paid","peɪd","pagó","péid"],
    ["left","left","le dejamos","left"],
    ["would like","wʊd laɪk","quisiera","uúd láik"],
    ["didn't want","ˈdɪdnt wɑːnt","no quiso, no quisieron","dídnt uánt"],
    ["any soup","ˈeni suːp","nada de sopa","éni súup"],
    ["any dessert","ˈeni dɪˈzɜːrt","ningún postre","éni disért"],
    ["some water","sʌm ˈwɔːtər","agua","sam uóter"],
    ["some bread","sʌm bred","pan","sam bred"],
    ["some vegetables","sʌm ˈvedʒtəblz","verduras","sam véchtabls"],
    ["a lot of","ə lɑːt əv","mucho, mucha","a lat av"],
    ["How much","haʊ mʌtʃ","cuánto","jáu mach"],
    ["restaurant","ˈrestrɑːnt","restaurante","réstrant"],
    ["centre","ˈsentər","centro","séntar"],
    ["table","ˈteɪbl","mesa","téibl"],
    ["waiter","ˈweɪtər","camarero","uéitar"],
    ["menu","ˈmenjuː","menú","méniu"],
    ["soup","suːp","sopa","súup"],
    ["chicken","ˈtʃɪkɪn","pollo","chíkin"],
    ["fish","fɪʃ","pescado","fish"],
    ["rice","raɪs","arroz","ráis"],
    ["salad","ˈsæləd","ensalada","sálad"],
    ["meat","miːt","carne","míit"],
    ["beans","biːnz","frijoles","bíins"],
    ["bread","bred","pan","bred"],
    ["dessert","dɪˈzɜːrt","postre","disért"],
    ["cake","keɪk","pastel","kéik"],
    ["candle","ˈkændl","vela","kándl"],
    ["lemonades","ˌleməˈneɪdz","limonadas","lemonéids"],
    ["bill","bɪl","cuenta","bil"],
    ["tip","tɪp","propina","tip"],
    ["dollars","ˈdɑːlərz","dólares","dálars"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["half","hæf","la mitad","jaf"],
    ["less","les","menos","les"],
    ["excellent","ˈeksələnt","excelente","éksalent"],
    ["strange","streɪndʒ","raro","stréinch"],
    ["kind","kaɪnd","amable","káind"],
    ["another","əˈnʌðər","otra","anáder"],
    ["story","ˈstɔːri","historia","stóri"],
    ["this year","ðɪs jɪr","este año","dis íer"]
  ],
  preguntas: [
    { q:"Why did they book a table for five?",
      ops:["Because it was Ana's birthday","Because the restaurant was full","Because they had guests from Canada"], ok:0,
      pista:"Primer párrafo: la razón va justo después de <i>because</i>." },
    { q:"What did Ana order?",
      ops:["Chicken soup and fish","A big salad and some vegetables","Only a dessert"], ok:1,
      pista:"Segundo párrafo: explica primero lo que <i>no</i> quiso." },
    { q:"What did the waiter do for Ana?",
      ops:["He gave her a free lemonade","He paid the bill","He brought a cake and didn't charge for it"], ok:2,
      pista:"Cuarto párrafo: tres cosas amables, y una de ellas era gratis." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-18"] = {
  meta: {
    id: "a1-18", nivel: "A1", numero: 18,
    titulo: "En el restaurante",
    descriptor: "Puedo reservar una mesa, pedir comida y bebida con fórmulas de cortesía, preguntar por el precio y pedir la cuenta.",
    escena: "Diego, el camarero & David · restaurante del centro, cena de cumpleaños de Ana",
    personajeIA: "Diego, el camarero", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
