/* ============================================================
   LECCIÓN A1-09 · Ropa y colores
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Prendas de vestir", items:[
    ["clothes","kloʊz","ropa","klóus"],["shirt","ʃɜːrt","camisa","shert"],
    ["T-shirt","ˈtiː ʃɜːrt","camiseta","ti shert"],["trousers","ˈtraʊzərz","pantalones","tráusers"],
    ["jeans","dʒiːnz","vaqueros","yíins"],["dress","dres","vestido","dres"],
    ["skirt","skɜːrt","falda","skert"],["jacket","ˈdʒækɪt","chaqueta","yáket"],
    ["coat","koʊt","abrigo","kóut"],["sweater","ˈswetər","suéter","suéter"],
    ["shoes","ʃuːz","zapatos","shúus"],["boots","buːts","botas","búuts"],
    ["socks","sɑːks","calcetines","saks"],["hat","hæt","sombrero","jat"]
  ]},
  {g:"Los colores", items:[
    ["colour","ˈkʌlər","color","kálar"],["red","red","rojo","red"],
    ["blue","bluː","azul","blúu"],["green","ɡriːn","verde","gríin"],
    ["yellow","ˈjeloʊ","amarillo","iélou"],["black","blæk","negro","blak"],
    ["white","waɪt","blanco","uáit"],["grey","ɡreɪ","gris","gréi"],
    ["brown","braʊn","café, marrón","bráun"],["orange","ˈɔːrɪndʒ","naranja","óorinch"],
    ["pink","pɪŋk","rosado","pink"],["purple","ˈpɜːrpl","morado","pérpl"],
    ["dark","dɑːrk","oscuro","dark"],["light","laɪt","claro","láit"]
  ]},
  {g:"Describir la ropa", items:[
    ["new","nuː","nuevo","núu"],["old","oʊld","viejo","óuld"],
    ["clean","kliːn","limpio","klíin"],["dirty","ˈdɜːrti","sucio","dérti"],
    ["tight","taɪt","ajustado","táit"],["loose","luːs","holgado","lúus"],
    ["comfortable","ˈkʌmftəbl","cómodo","kámftabl"],["beautiful","ˈbjuːtɪfl","hermoso","biútiful"],
    ["cotton","ˈkɑːtn","algodón","kátn"],["leather","ˈleðər","cuero","léder"],
    ["favourite","ˈfeɪvərɪt","favorito","féivarit"],["It suits you","ɪt suːts juː","te queda bien","it súuts iú"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hat &rarr; jat"],
  ["d","En <i>leather</i>: lengua entre los dientes, con voz.","leather &rarr; léder"],
  ["sh","Como pedir silencio.","shirt &rarr; shert"],
  ["ch","Como en «coche».","orange &rarr; óorinch"],
  ["y","Como la <i>y</i> de «yo».","jeans &rarr; yíins"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","white &rarr; uáit"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","pink &rarr; pink"],
  ["letras mudas","En <i>clothes</i> apenas se oye la <i>th</i>: suena casi «klóus».","clothes &rarr; klóus"],
  ["r final","Apenas se toca, nunca vibra.","colour &rarr; kálar"]
];

const VERBS = [
  ["to wear","irr","wear · wears","wore","will wear","llevar puesto"],
  ["to put on","irr","put on · puts on","put on","will put on","ponerse"],
  ["to take off","irr","take off · takes off","took off","will take off","quitarse"],
  ["to try on","reg","try on · tries on","tried on","will try on","probarse"],
  ["to buy","irr","buy · buys","bought","will buy","comprar"],
  ["to look","reg","look · looks","looked","will look","parecer, verse"],
  ["to suit","reg","suit · suits","suited","will suit","quedar bien"],
  ["to wash","reg","wash · washes","washed","will wash","lavar"],
  ["to change","reg","change · changes","changed","will change","cambiarse"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"],
  ["to match","reg","match · matches","matched","will match","combinar"]
];

const GRAMMAR = [
  {t:"El adjetivo va delante y no cambia", s:"a red shirt",
   p:"Dos reglas de golpe, y las dos al revés del español: el adjetivo va <b>antes</b> del sustantivo, y <b>nunca</b> lleva plural ni femenino.",
   table:{head:["Español","Inglés","Nunca"], rows:[
     ["una camisa roja","a red shirt","a shirt red"],
     ["dos camisas rojas","two red shirts","two reds shirts"],
     ["zapatos negros","black shoes","shoes blacks"]
   ]},
   aviso:["El adjetivo es invariable, siempre","<span class='wrong'>two reds shirts</span> &nbsp;&rarr;&nbsp; <span class='right'>two red shirts</span>. La <i>-s</i> del plural va sólo en el sustantivo. Es de los errores que más cuesta quitarse."]},

  {t:"El orden de varios adjetivos", s:"a nice new blue shirt",
   p:"Cuando hay varios, el inglés sigue un orden fijo que los nativos respetan sin pensar. En A1 basta con esta versión reducida.",
   table:{head:["Orden","Tipo","Ejemplo"], rows:[
     ["1","opinión","nice, beautiful, horrible"],
     ["2","tamaño","big, small, long"],
     ["3","edad","new, old"],
     ["4","color","red, blue, black"]
   ]},
   aviso:["Suena mal, aunque se entienda","<b>a nice new blue shirt</b> es natural. <span class='wrong'>a blue new nice shirt</span> se entiende, pero delata de inmediato. No hay que memorizarlo: basta con oírlo muchas veces."]},

  {t:"Llevar puesto ahora", s:"to wear / to be wearing",
   p:"<b>Wear</b> en presente simple es lo que sueles ponerte. <b>Be wearing</b>, en continuo, es lo que llevas puesto en este momento.",
   chips:[["I wear jeans every day","Uso vaqueros todos los días"],["I'm wearing a jacket","Llevo puesta una chaqueta (ahora)"],["She wears glasses","Usa gafas"],["She's wearing a red dress","Lleva un vestido rojo (ahora)"]],
   aviso:["<i>Wear</i> no es <i>put on</i>","<b>Put on</b> es la acción de ponerse la prenda; <b>wear</b> es tenerla puesta. «Me pongo el abrigo» es <i>I put on my coat</i>; «llevo abrigo» es <i>I'm wearing a coat</i>."]},

  {t:"Prendas que siempre son plurales", s:"trousers, jeans, shoes",
   p:"Algunas prendas van <b>siempre</b> en plural en inglés, aunque sea una sola. Llevan <i>are</i>, no <i>is</i>.",
   chips:[["These trousers are new","Este pantalón es nuevo"],["My jeans are dirty","Mi vaquero está sucio"],["a pair of shoes","un par de zapatos"],["Where are my socks?","¿Dónde están mis calcetines?"]],
   aviso:["Concordancia en plural","<span class='wrong'>This trouser is new.</span> &nbsp;&rarr;&nbsp; <span class='right'>These trousers <b>are</b> new.</span> Para contarlos hace falta <b>a pair of</b>."]},

  {t:"¿De qué color es?", s:"What colour is…?",
   p:"El color se pregunta con <b>What colour</b> y se responde con <i>to be</i>. Y <i>dark</i> o <i>light</i> van delante del color.",
   chips:[["What colour is your coat?","¿De qué color es tu abrigo?"],["It's dark blue","Es azul oscuro"],["a light green shirt","una camisa verde claro"],["What colour are your shoes?","¿De qué color son tus zapatos?"]],
   aviso:["El matiz va antes del color","El español dice «azul oscuro»; el inglés, <b>dark blue</b>. Se invierte el orden, como con todos los adjetivos."]},

  {t:"Quedar bien: look y suit", s:"You look nice / It suits you",
   p:"Dos maneras de hacer un cumplido. <b>Look</b> se refiere a la persona; <b>suit</b>, a la prenda.",
   chips:[["You look nice","Te ves bien"],["That shirt suits you","Esa camisa te queda bien"],["It doesn't suit me","No me queda bien"],["They match","Combinan"]],
   aviso:["<i>Look</i> aquí no es «mirar»","<b>You look nice</b> no significa «miras bien» sino «te ves bien». Con un adjetivo detrás, <i>look</i> pasa a significar «parecer»."]}
];

/* Sarah (A) y David (B) eligen ropa para una fiesta */
const DIALOGUE = [
 {s:"A", ipa:"wʌt ɑːr juː ˈwerɪŋ tuː ðə ˈpɑːrti", p:"uát ar iú uéring tu da párti",
  b:[["What are you wearing","¿Qué te vas a poner"],["to the party?","para la fiesta?"]],
  n:"Presente continuo, <b>are you wearing</b>: aquí se refiere a un plan inmediato, no a la costumbre."},
 {s:"B", ipa:"aɪ doʊnt noʊ meɪbiː maɪ blæk dʒiːnz", p:"ái dóunt nóu. méibi mái blak yíins",
  b:[["I don't know.","No sé."],["Maybe","Quizá"],["my","mis"],["black","negros"],["jeans.","vaqueros."]],
  n:"<b>Black jeans</b>: el color va delante. Y <i>jeans</i> es siempre plural en inglés, aunque sea una sola prenda."},
 {s:"A", ipa:"ænd ə ʃɜːrt wʌt ˈkʌlər", p:"and a shert. uát kálar",
  b:[["And","¿Y"],["a shirt?","una camisa?"],["What colour?","¿De qué color?"]]},
 {s:"B", ipa:"aɪ hæv ə naɪs njuː bluː ʃɜːrt", p:"ái jav a náis núu blúu shert",
  b:[["I have","Tengo"],["a nice","una bonita"],["new","nueva"],["blue","azul"],["shirt.","camisa."]],
  n:"Tres adjetivos en orden fijo: opinión (<i>nice</i>), edad (<i>new</i>), color (<i>blue</i>). Cambiarlos de sitio suena raro."},
 {s:"A", ipa:"ðæt saʊndz ˈperfɪkt bluː sʊts juː", p:"dat sáunds pérfect. blúu súuts iú",
  b:[["That sounds","Eso suena"],["perfect.","perfecto."],["Blue","El azul"],["suits you.","te queda bien."]]},
 {s:"B", ipa:"ˈrɪəli maɪ ˈsɪstər seɪz ɪts tuː dɑːrk", p:"ríili. mái síster ses its túu dark",
  b:[["Really?","¿En serio?"],["My","Mi"],["sister","hermana"],["says","dice"],["it is","que es"],["too","demasiado"],["dark.","oscuro."]]},
 {s:"A", ipa:"ɪts nɑːt dɑːrk ɪts laɪt bluː ˈvɛri naɪs", p:"its nat dark. its láit blúu, véri náis",
  b:[["It is not","No es"],["dark.","oscuro."],["It is","Es"],["light blue,","azul claro,"],["very nice.","muy bonito."]],
  n:"<b>Light blue</b> y <b>dark blue</b>: el matiz va <i>antes</i> del color, al revés del español."},
 {s:"B", ipa:"ænd ʃuːz aɪ ˈoʊnli hæv oʊld braʊn wʌnz", p:"and shúus. ái óunli jav óuld bráun uáns",
  b:[["And shoes?","¿Y zapatos?"],["I only have","Solo tengo"],["old","viejos"],["brown","cafés"],["ones.","unos."]]},
 {s:"A", ipa:"ɑːr ðeɪ kliːn", p:"ar déi klíin",
  b:[["Are they","¿Están"],["clean?","limpios?"]],
  n:"<b>Are they</b>, en plural: <i>shoes</i> es siempre plural en inglés."},
 {s:"B", ipa:"nɑːt ˈrɪəli ðeɪ ɑːr ə bɪt ˈdɜːrti", p:"nat ríili. déi ar a bit dérti",
  b:[["Not really.","La verdad que no."],["They are","Están"],["a bit","un poco"],["dirty.","sucios."]]},
 {s:"A", ipa:"wɑːʃ ðem təˈnaɪt braʊn ˈmætʃɪz wɪð blæk", p:"uásh dem tunáit. bráun máchis uid blak",
  b:[["Wash them","Lávalos"],["tonight.","esta noche."],["Brown","El café"],["matches","combina"],["with black.","con el negro."]]},
 {s:"B", ipa:"ɡʊd aɪˈdɪə wʌt ɑːr juː ˈwerɪŋ", p:"gud aidía. uát ar iú uéring",
  b:[["Good idea.","Buena idea."],["What are you wearing?","¿Y tú qué te pones?"]]},
 {s:"A", ipa:"maɪ red dres ænd blæk buːts", p:"mái red dres and blak búuts",
  b:[["My","Mi"],["red","rojo"],["dress","vestido"],["and","y"],["black","negras"],["boots.","botas."]]},
 {s:"B", ipa:"ðə wʌn frʌm ðə ˈmɑːrkɪt ɪt lʊks ˈbjuːtɪfl", p:"da uán from da márket. it luks biútiful",
  b:[["The one","El del"],["from the market?","mercado?"],["It looks","Se ve"],["beautiful.","hermoso."]],
  n:"<b>It looks beautiful</b>: con un adjetivo detrás, <i>look</i> significa «parecer» o «verse», no «mirar»."},
 {s:"A", ipa:"θæŋk juː ɪts ˈkʌtn ænd ˈvɛri ˈkʌmftəbl", p:"zánk iú. its kátn and véri kámftabl",
  b:[["Thank you.","Gracias."],["It is","Es"],["cotton","de algodón"],["and","y"],["very","muy"],["comfortable.","cómodo."]]},
 {s:"B", ipa:"ɪz ɪt koʊld æt naɪt duː juː niːd ə ˈdʒækɪt", p:"is it kóuld at náit. du iú níid a yáket",
  b:[["Is it","¿Hace"],["cold","frío"],["at night?","de noche?"],["Do you need","¿Necesitas"],["a jacket?","una chaqueta?"]]},
 {s:"A", ipa:"aɪ ˈɔːlweɪz wer ə ˈdʒækɪt aɪ æm ˈkænədiən", p:"ái ólueis uér a yáket. ái am kanádian",
  b:[["I always wear","Siempre llevo"],["a jacket.","chaqueta."],["I am","Soy"],["Canadian!","canadiense!"]],
  n:"<b>I always wear</b> en presente simple: es su costumbre. <i>I'm wearing</i> sería lo que lleva puesto en este instante."},
 {s:"B", ipa:"faɪn maɪ ˈtraʊzərz ɑːr tuː taɪt aɪ niːd njuː wʌnz", p:"fáin. mái tráusers ar túu táit. ái níid núu uáns",
  b:[["Fine.","Bien."],["My","Mis"],["trousers","pantalones"],["are","están"],["too","demasiado"],["tight.","ajustados."],["I need new ones.","Necesito unos nuevos."]]},
 {s:"A", ipa:"ðen wer jʊr dʒiːnz ðeɪ ɑːr luːs ænd ˈkʌmftəbl", p:"den uér iór yíins. déi ar lúus and kámftabl",
  b:[["Then wear","Entonces ponte"],["your jeans.","tus vaqueros."],["They are","Son"],["loose","holgados"],["and","y"],["comfortable.","cómodos."]]},
 {s:"B", ipa:"juːr raɪt blæk dʒiːnz bluː ʃɜːrt braʊn ʃuːz", p:"iúr ráit. blak yíins, blúu shert, bráun shúus",
  b:[["You're right.","Tienes razón."],["Black jeans,","Vaqueros negros,"],["blue shirt,","camisa azul,"],["brown shoes.","zapatos cafés."]]},
 {s:"A", ipa:"ˈperfɪkt juː wɪl lʊk ˈvɛri ɡʊd", p:"pérfect. iú uíl luk véri gud",
  b:[["Perfect.","Perfecto."],["You will look","Te vas a ver"],["very good.","muy bien."]]},
 {s:"B", ipa:"wʌt taɪm duː wi miːt", p:"uát táim du ui míit",
  b:[["What time","¿A qué hora"],["do we meet?","quedamos?"]]},
 {s:"A", ipa:"æt eɪt duː nɑːt bi leɪt ænd wɑːʃ ðoʊz ʃuːz", p:"at éit. du nat bi léit. and uásh dóus shúus",
  b:[["At eight.","A las ocho."],["Do not be","No llegues"],["late.","tarde."],["And wash","Y lava"],["those shoes!","esos zapatos!"]]},
 {s:"B", ipa:"aɪ prɑːmɪs siː juː təˈnaɪt ˈserə", p:"ái prámis. síi iú tunáit, sára",
  b:[["I promise.","Lo prometo."],["See you tonight,","Nos vemos esta noche,"],["Sarah!","Sarah!"]]}
];

const LECTURA = {
  titulo: "What to wear",
  entradilla: "David decide qué ponerse para una fiesta. El texto practica el orden y la invariabilidad de los adjetivos, los colores y la diferencia entre <i>wear</i> y <i>be wearing</i>.",
  parrafos: [
    "Tonight there is a party at my house and I do not know what to wear. I have a nice new blue shirt and some black jeans. Sarah says that blue suits me, but my sister says the shirt is too dark. It is not dark; it is light blue. My brown shoes are a bit dirty, so I am washing them now. Brown matches with black, so they are a good choice.",
    "Sarah is wearing her red dress and black boots tonight. The dress is cotton and very comfortable, and it looks beautiful on her. She always wears a jacket, even in summer, because she is Canadian and she feels cold here. My trousers are too tight for me, so I am not wearing them. We meet at eight o'clock and I promise I am not late."
  ],
  glosario: [
    ["wear","wer","ponerme","uér"],
    ["wears","werz","lleva","uérs"],
    ["wearing","ˈwerɪŋ","llevando puesto","uéring"],
    ["washing","ˈwɑːʃɪŋ","lavando","uáshing"],
    ["matches","ˈmætʃɪz","combina","máchis"],
    ["suits","suːts","queda bien","súuts"],
    ["looks","lʊks","se ve","luks"],
    ["feels","fiːlz","siente","fíils"],
    ["meet","miːt","quedamos","míit"],
    ["promise","ˈprɑːmɪs","prometo","prámis"],
    ["choice","tʃɔɪs","elección","chóis"],
    ["tonight","təˈnaɪt","esta noche","tunáit"],
    ["party","ˈpɑːrti","fiesta","párti"],
    ["shirt","ʃɜːrt","camisa","shert"],
    ["jeans","dʒiːnz","vaqueros","yíins"],
    ["trousers","ˈtraʊzərz","pantalones","tráusers"],
    ["shoes","ʃuːz","zapatos","shúus"],
    ["boots","buːts","botas","búuts"],
    ["dress","dres","vestido","dres"],
    ["jacket","ˈdʒækɪt","chaqueta","yáket"],
    ["cotton","ˈkɑːtn","algodón","kátn"],
    ["comfortable","ˈkʌmftəbl","cómodo","kámftabl"],
    ["beautiful","ˈbjuːtɪfl","hermoso","biútiful"],
    ["dirty","ˈdɜːrti","sucios","dérti"],
    ["tight","taɪt","ajustados","táit"],
    ["dark","dɑːrk","oscuro","dark"],
    ["light","laɪt","claro","láit"],
    ["blue","bluː","azul","blúu"],
    ["black","blæk","negros","blak"],
    ["brown","braʊn","cafés","bráun"],
    ["red","red","rojo","red"],
    ["a bit","ə bɪt","un poco","a bit"],
    ["even","ˈiːvn","incluso","íivn"],
    ["summer","ˈsʌmər","verano","sámar"],
    ["Canadian","kəˈneɪdiən","canadiense","kanádian"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["late","leɪt","tarde","léit"]
  ],
  preguntas: [
    { q:"What colour is David's shirt?",
      ops:["Dark blue","Light blue","Brown"], ok:1,
      pista:"Su hermana dice una cosa y él la corrige en la frase siguiente." },
    { q:"Why is David washing his shoes?",
      ops:["Because they are dirty","Because they are new","Because they are too tight"], ok:0,
      pista:"Final del primer párrafo, justo antes de <i>so I am washing them</i>." },
    { q:"Why does Sarah always wear a jacket?",
      ops:["Because it is raining","Because it matches her dress","Because she feels cold here"], ok:2,
      pista:"La razón la da con <i>because</i>, y tiene que ver con su país." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-09"] = {
  meta: {
    id: "a1-09", nivel: "A1", numero: 9,
    titulo: "Ropa y colores",
    descriptor: "Puedo describir prendas de vestir y colores, decir qué llevo puesto y expresar preferencias sencillas sobre la ropa.",
    escena: "Sarah & David · eligiendo qué ponerse para una fiesta",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
