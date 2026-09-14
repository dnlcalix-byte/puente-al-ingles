/* ============================================================
   LECCIÓN A1-05 · Comida y bebida
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Comida básica", items:[
    ["bread","bred","pan","bred"],["rice","raɪs","arroz","ráis"],
    ["beans","biːnz","frijoles","bíins"],["cheese","tʃiːz","queso","chíis"],
    ["egg","eɡ","huevo","eg"],["meat","miːt","carne","míit"],
    ["chicken","ˈtʃɪkɪn","pollo","chíken"],["fish","fɪʃ","pescado","fish"],
    ["soup","suːp","sopa","súup"],["salad","ˈsæləd","ensalada","sálad"],
    ["sugar","ˈʃʊɡər","azúcar","shúgar"],["salt","sɔːlt","sal","solt"]
  ]},
  {g:"Frutas y verduras", items:[
    ["fruit","fruːt","fruta","frúut"],["apple","ˈæpl","manzana","ápl"],
    ["banana","bəˈnænə","banano","banána"],["orange","ˈɔːrɪndʒ","naranja","óorinch"],
    ["tomato","təˈmeɪtoʊ","tomate","toméitou"],["potato","pəˈteɪtoʊ","papa","potéitou"],
    ["onion","ˈʌnjən","cebolla","ánion"],["vegetables","ˈvedʒtəblz","verduras","véchtabls"]
  ]},
  {g:"Bebidas y comidas del día", items:[
    ["water","ˈwɔːtər","agua","uóter"],["milk","mɪlk","leche","milk"],
    ["coffee","ˈkɔːfi","café","kófi"],["tea","tiː","té","tíi"],
    ["juice","dʒuːs","jugo","yúus"],["breakfast","ˈbrekfəst","desayuno","brékfast"],
    ["lunch","lʌntʃ","almuerzo","lanch"],["dinner","ˈdɪnər","cena","díner"],
    ["glass","ɡlæs","vaso","glas"],["cup","kʌp","taza","kap"],
    ["plate","pleɪt","plato","pléit"],["bill","bɪl","cuenta","bil"]
  ]},
  {g:"Describir y pedir", items:[
    ["hungry","ˈhʌŋɡri","hambriento","jángri"],["thirsty","ˈθɜːrsti","sediento","zérsti"],
    ["delicious","dɪˈlɪʃəs","delicioso","dilíshas"],["sweet","swiːt","dulce","suíit"],
    ["hot","hɑːt","caliente, picante","jat"],["cold","koʊld","frío","kóuld"],
    ["I would like","aɪ wʊd laɪk","quisiera","ái uud láik"],["Can I have","kæn aɪ hæv","¿me trae?","kan ái jav"],
    ["a lot of","ə lɑːt əv","mucho, muchos","a lat av"],["a little","ə ˈlɪtl","un poco","a lítl"],
    ["a few","ə fjuː","unos pocos","a fiú"],["favourite","ˈfeɪvərɪt","favorito","féivarit"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hungry &rarr; jángri"],
  ["z","Lengua entre los dientes, sin voz.","thirsty &rarr; zérsti"],
  ["sh","Como pedir silencio. Ojo: <i>sugar</i> empieza por <i>sh</i>, no por <i>s</i>.","sugar &rarr; shúgar"],
  ["ch","Como en «coche».","cheese &rarr; chíis"],
  ["y","Como la <i>y</i> de «yo».","juice &rarr; yúus"],
  ["v","Labio de abajo contra los dientes de arriba.","vegetables &rarr; véchtabls"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","water &rarr; uóter"],
  ["íi úu óo","Vocal doble = vocal larga.","beans &rarr; bíins"],
  ["tilde","La sílaba fuerte. En <i>banana</i> cae en el medio, no al final.","banana &rarr; banána"]
];

const VERBS = [
  ["to eat","irr","eat · eats","ate","will eat","comer"],
  ["to drink","irr","drink · drinks","drank","will drink","beber"],
  ["to cook","reg","cook · cooks","cooked","will cook","cocinar"],
  ["to want","reg","want · wants","wanted","will want","querer"],
  ["to need","reg","need · needs","needed","will need","necesitar"],
  ["to try","reg","try · tries","tried","will try","probar, intentar"],
  ["to order","reg","order · orders","ordered","will order","pedir"],
  ["to pay","reg","pay · pays","paid","will pay","pagar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to buy","irr","buy · buys","bought","will buy","comprar"],
  ["to prefer","reg","prefer · prefers","preferred","will prefer","preferir"]
];

const GRAMMAR = [
  {t:"Contables e incontables", s:"countable / uncountable",
   p:"El inglés divide los alimentos en dos clases y las trata distinto. Los <b>contables</b> tienen plural (<i>an apple, two apples</i>). Los <b>incontables</b> no tienen plural ni llevan <i>a/an</i> (<i>water, rice, bread</i>).",
   table:{head:["Tipo","Ejemplos","Se dice"], rows:[
     ["Contable","apple, egg, tomato","an apple · three eggs"],
     ["Incontable","water, rice, bread, milk","some water · a lot of rice"],
     ["Incontable, contado","water, coffee","a glass of water · two cups of coffee"]
   ]},
   aviso:["El error clásico del hispanohablante","<span class='wrong'>I want a bread.</span> &nbsp;&rarr;&nbsp; <span class='right'>I want <b>some</b> bread.</span> o <span class='right'>a <b>piece of</b> bread</span>. <i>Bread</i> no se puede contar en inglés, aunque «un pan» sí exista en español."]},

  {t:"Some y any con comida", s:"some / any",
   p:"<b>Some</b> en afirmativas, <b>any</b> en negativas y preguntas. La excepción importante: en un ofrecimiento o una petición se usa <b>some</b> aunque sea pregunta.",
   chips:[["There is some milk","Hay leche"],["There isn't any milk","No hay leche"],["Is there any milk?","¿Hay leche?"],["Would you like some coffee?","¿Quieres café?"]],
   aviso:["La excepción del ofrecimiento","Al ofrecer o pedir se dice <b>some</b>, no <i>any</i>: <b>Would you like some tea?</b> y <b>Can I have some water?</b> Usar <i>any</i> ahí suena frío o extrañado."]},

  {t:"Mucho y poco", s:"a lot of, a little, a few",
   p:"La cantidad también depende de si el nombre es contable o no. <b>A few</b> sólo con contables; <b>a little</b> sólo con incontables; <b>a lot of</b> con los dos.",
   table:{head:["Cantidad","Contables","Incontables"], rows:[
     ["mucho/s","a lot of apples","a lot of rice"],
     ["poco/s","a few apples","a little rice"],
     ["¿cuánto?","How many apples?","How much rice?"]
   ]},
   aviso:["<i>How many</i> o <i>how much</i>","<span class='wrong'>How much apples?</span> &nbsp;&rarr;&nbsp; <span class='right'>How <b>many</b> apples?</span> Si tiene plural, va <i>many</i>. El español usa «cuánto» para todo."]},

  {t:"Pedir con cortesía", s:"I'd like / Can I have",
   p:"<b>I want</b> es correcto pero suena brusco al pedir. En un restaurante se usa <b>I'd like</b> (contracción de <i>I would like</i>) o <b>Can I have</b>.",
   chips:[["I'd like a coffee, please","Quisiera un café, por favor"],["Can I have the bill?","¿Me trae la cuenta?"],["Would you like a dessert?","¿Desea postre?"],["I'll have the fish","Voy a tomar el pescado"]],
   aviso:["<i>I want</i> no es de mala educación, pero sí seco","En español «quiero un café» es normal. La traducción literal <b>I want a coffee</b> suena exigente en inglés; con <i>I'd like</i> queda natural."]},

  {t:"Tener hambre es SER hambriento", s:"to be hungry",
   p:"El inglés usa <b>to be</b> con estos estados, no <i>to have</i>. Es el mismo caso que <i>I am twenty years old</i>.",
   chips:[["I am hungry","Tengo hambre"],["Are you thirsty?","¿Tienes sed?"],["She is cold","Ella tiene frío"],["We are tired","Estamos cansados"]],
   aviso:["Nunca con <i>have</i>","<span class='wrong'>I have hunger.</span> &nbsp;&rarr;&nbsp; <span class='right'>I am hungry.</span> Delata al hispanohablante igual que <i>I have 22 years</i>."]},

  {t:"Gustos: like y favourite", s:"I like / my favourite",
   p:"Con <b>like</b>, lo que gusta va en plural si es contable: <i>I like apples</i>, no <i>I like apple</i>. Y el sujeto es quien disfruta, al revés que en español.",
   chips:[["I like fish","Me gusta el pescado"],["I don't like onions","No me gustan las cebollas"],["Do you like coffee?","¿Te gusta el café?"],["My favourite food is rice","Mi comida favorita es el arroz"]],
   aviso:["El sujeto cambia de bando","En «me gusta el pescado», el sujeto es <i>el pescado</i>. En <b>I like fish</b>, el sujeto soy <b>yo</b>. Hay que darle la vuelta a la frase entera."]}
];

/* Sarah (A) y David (B) en una cafetería */
const DIALOGUE = [
 {s:"A", ipa:"aɪ æm ˈrɪəli ˈhʌŋɡri ɑːr juː", p:"ái am ríili jángri. ar iú",
  b:[["I am","Tengo"],["really","mucha"],["hungry.","hambre."],["Are you?","¿Y tú?"]],
  n:"<b>I am hungry</b>, literalmente «estoy hambriento». El inglés usa <i>to be</i> donde el español usa «tener»."},
 {s:"B", ipa:"jes aɪ æm ænd ˈvɛri ˈθɜːrsti tuː", p:"yes ái am. and véri zérsti túu",
  b:[["Yes, I am.","Sí, tengo."],["And","Y"],["very","mucha"],["thirsty","sed"],["too.","también."]]},
 {s:"A", ipa:"wʌt wʊd juː laɪk fɔːr lʌntʃ", p:"uát uud iú láik for lanch",
  b:[["What","¿Qué"],["would you like","quisieras"],["for lunch?","de almuerzo?"]]},
 {s:"B", ipa:"aɪd laɪk sʌm tʃɪkɪn wɪð raɪs ænd biːnz", p:"áid láik sam chíken uid ráis and bíins",
  b:[["I'd like","Quisiera"],["some","—"],["chicken","pollo"],["with","con"],["rice","arroz"],["and beans.","y frijoles."]],
  n:"<b>I'd like</b> es <i>I would like</i>. Y <b>some</b> no se traduce, pero acompaña a los incontables como <i>chicken</i> y <i>rice</i>."},
 {s:"A", ipa:"ɪz ðer ˈɛni fɪʃ ɑːn ðə menjuː", p:"is der éni fish an da méniu",
  b:[["Is there","¿Hay"],["any","—"],["fish","pescado"],["on the menu?","en el menú?"]],
  n:"En la pregunta va <b>any</b>, no <i>some</i>. En español no decimos nada equivalente, pero en inglés no se puede omitir."},
 {s:"B", ipa:"jes bʌt aɪ doʊnt laɪk fɪʃ aɪ pəˈfɜːr tʃɪkɪn", p:"yes, bat ái dóunt láik fish. ái priférr chíken",
  b:[["Yes,","Sí,"],["but","pero"],["I don't like","no me gusta"],["fish.","el pescado."],["I prefer","Prefiero"],["chicken.","el pollo."]],
  n:"<b>I don't like fish</b>: el sujeto es <i>I</i>. En español el sujeto es «el pescado». Hay que darle la vuelta a la frase."},
 {s:"A", ipa:"haʊ mʌtʃ raɪs duː juː wɑːnt", p:"jáu mach ráis du iú uánt",
  b:[["How much","¿Cuánto"],["rice","arroz"],["do you want?","quieres?"]]},
 {s:"B", ipa:"ʤʌst ə ˈlɪtl ænd ə fjuː vedʒtəblz pliːz", p:"yast a lítl. and a fiú véchtabls, plíis",
  b:[["Just","Solo"],["a little.","un poco."],["And","Y"],["a few","unas pocas"],["vegetables,","verduras,"],["please.","por favor."]],
  n:"<b>A little</b> con incontables (<i>rice</i>) y <b>a few</b> con contables (<i>vegetables</i>). No son intercambiables."},
 {s:"A", ipa:"ænd tuː drɪŋk", p:"and tu drink",
  b:[["And","¿Y"],["to drink?","para beber?"]]},
 {s:"B", ipa:"kæn aɪ hæv ə ɡlæs əv ˈwɔːtər ænd sʌm ˈɔːrɪndʒ dʒuːs", p:"kan ái jav a glas av uóter and sam óorinch yúus",
  b:[["Can I have","¿Me puede traer"],["a glass of","un vaso de"],["water","agua"],["and","y"],["some","un poco de"],["orange juice?","jugo de naranja?"]],
  n:"<i>Water</i> es incontable: no se dice <span class='wrong'>a water</span> sino <b>a glass of water</b>."},
 {s:"A", ipa:"aɪ wɑːnt ə ˈkɔːfi wɪð ə ˈlɪtl ˈʃʊɡər", p:"ái uánt a kófi uid a lítl shúgar",
  b:[["I want","Quiero"],["a coffee","un café"],["with","con"],["a little","un poco de"],["sugar.","azúcar."]]},
 {s:"B", ipa:"ˈkɔːfi ɪn ðə ˈiːvnɪŋ juː ɑːr breɪv", p:"kófi in da íivning. iú ar bréiv",
  b:[["Coffee","¿Café"],["in the evening?","por la noche?"],["You are","Eres"],["brave.","valiente."]]},
 {s:"A", ipa:"aɪ lʌv ˈkɔːfi ɪts maɪ ˈfeɪvərɪt drɪŋk", p:"ái lav kófi. its mái féivarit drink",
  b:[["I love","Me encanta"],["coffee.","el café."],["It is","Es"],["my","mi"],["favourite","bebida"],["drink.","favorita."]]},
 {s:"B", ipa:"duː juː iːt bred fɔːr ˈbrekfəst ɪn ˈkænədə", p:"du iú íit bred for brékfast in kánada",
  b:[["Do you eat","¿Comen"],["bread","pan"],["for breakfast","de desayuno"],["in Canada?","en Canadá?"]]},
 {s:"A", ipa:"jes wi duː bred wɪð tʃiːz ɔːr eɡz", p:"yes ui du. bred uid chíis or egs",
  b:[["Yes, we do.","Sí, comemos."],["Bread","Pan"],["with","con"],["cheese","queso"],["or","o"],["eggs.","huevos."]]},
 {s:"B", ipa:"hɪr wi iːt biːnz ænd eɡz ˈɛvri ˈmɔːrnɪŋ", p:"jíer ui íit bíins and egs évri mórning",
  b:[["Here","Aquí"],["we eat","comemos"],["beans","frijoles"],["and","y"],["eggs","huevos"],["every morning.","cada mañana."]]},
 {s:"A", ipa:"ðæt saʊndz dɪˈlɪʃəs ɪz ɪt hɑːt", p:"dat sáunds dilíshas. is it jat",
  b:[["That sounds","Eso suena"],["delicious.","delicioso."],["Is it","¿Es"],["hot?","picante?"]],
  n:"<b>Hot</b> significa las dos cosas: «caliente» y «picante». El contexto decide."},
 {s:"B", ipa:"ə ˈlɪtl bʌt nɑːt ˈvɛri hɑːt", p:"a lítl, bat nat véri jat",
  b:[["A little,","Un poco,"],["but","pero"],["not","no"],["very","muy"],["hot.","picante."]]},
 {s:"A", ipa:"aɪ wɑːnt tuː traɪ ɪt sʌm deɪ", p:"ái uánt tu trái it sam déi",
  b:[["I want","Quiero"],["to try it","probarlo"],["some day.","algún día."]]},
 {s:"B", ipa:"kʌm tuː maɪ haʊs maɪ ˈmʌðər kʊks ˈvɛri wel", p:"kam tu mái jáus. mái máder kuks véri uél",
  b:[["Come","Ven"],["to my house.","a mi casa."],["My","Mi"],["mother","madre"],["cooks","cocina"],["very well.","muy bien."]]},
 {s:"A", ipa:"aɪd lʌv tuː θæŋk juː kæn wi hæv ðə bɪl", p:"áid lav tu. zánk iú. kan ui jav da bil",
  b:[["I'd love to.","Me encantaría."],["Thank you.","Gracias."],["Can we have","¿Nos trae"],["the bill?","la cuenta?"]]},
 {s:"B", ipa:"aɪ peɪ təˈdeɪ juː peɪ nekst taɪm", p:"ái péi tudéi. iú péi nekst táim",
  b:[["I pay","Yo pago"],["today.","hoy."],["You pay","Tú pagas"],["next time.","la próxima vez."]]},
 {s:"A", ipa:"ðæts ˈvɛri kaɪnd əv juː θæŋk juː", p:"dats véri káind av iú. zánk iú",
  b:[["That is","Eso es"],["very","muy"],["kind of you.","amable de tu parte."],["Thank you!","¡Gracias!"]]},
 {s:"B", ipa:"juːr ˈwelkəm lets iːt aɪ æm ˈstɑːrvɪŋ", p:"iúr uélcam. lets íit, ái am stárving",
  b:[["You're welcome.","De nada."],["Let's eat,","Comamos,"],["I am starving!","¡me muero de hambre!"]]}
];

const LECTURA = {
  titulo: "Breakfast in Honduras",
  entradilla: "David explica qué se desayuna en su país. El texto practica contables e incontables, <i>some</i> y <i>any</i>, las cantidades y el verbo <i>like</i>.",
  parrafos: [
    "In Honduras we eat beans and eggs for breakfast almost every morning. My mother cooks them with a little cheese and some bread. I always drink a glass of orange juice, but my father prefers coffee. He drinks two cups every morning. My sister does not like beans, so she eats fruit: a banana or an apple.",
    "Lunch is the big meal of the day. We often have chicken with rice and a few vegetables. There isn't any fish in my house because I don't like it. In the evening we eat a light dinner: soup or a salad with tomato and onion. My favourite food is rice with chicken. It is not expensive and it is delicious."
  ],
  glosario: [
    ["eat","iːt","comemos","íit"],
    ["eats","iːts","come","íits"],
    ["cooks","kʊks","cocina","kuks"],
    ["drink","drɪŋk","bebo","drink"],
    ["drinks","drɪŋks","bebe","drinks"],
    ["prefers","prɪˈfɜːrz","prefiere","prifférs"],
    ["like","laɪk","gusta","láik"],
    ["have","hæv","tomamos","jav"],
    ["them","ðem","los","dem"],
    ["almost","ˈɔːlmoʊst","casi","ólmoust"],
    ["always","ˈɔːlweɪz","siempre","ólueis"],
    ["often","ˈɔːfn","a menudo","ófn"],
    ["light","laɪt","ligera","láit"],
    ["meal","miːl","comida (del día)","míil"],
    ["food","fuːd","comida","fúud"],
    ["big","bɪɡ","principal, grande","big"],
    ["expensive","ɪkˈspensɪv","cara","ikspénsiv"],
    ["cups","kʌps","tazas","kaps"],
    ["glass","ɡlæs","vaso","glas"],
    ["mother","ˈmʌðər","madre","máder"],
    ["father","ˈfɑːðər","padre","fáder"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["morning","ˈmɔːrnɪŋ","mañana","mórning"],
    ["evening","ˈiːvnɪŋ","tarde-noche","íivning"],
    ["every","ˈevri","cada","évri"]
  ],
  preguntas: [
    { q:"What does David's father drink in the morning?",
      ops:["Orange juice","Two cups of coffee","Milk"], ok:1,
      pista:"El jugo de naranja lo bebe David; el padre prefiere otra cosa." },
    { q:"Why isn't there any fish in David's house?",
      ops:["Because his sister doesn't like beans","Because it is expensive","Because David doesn't like it"], ok:2,
      pista:"Segundo párrafo: la razón la da con <i>because I don't like it</i>." },
    { q:"What is David's favourite food?",
      ops:["Rice with chicken","Soup and salad","Beans and eggs"], ok:0,
      pista:"Lo dice en la penúltima frase del texto." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-05"] = {
  meta: {
    id: "a1-05", nivel: "A1", numero: 5,
    titulo: "Comida y bebida",
    descriptor: "Puedo pedir y ofrecer comida y bebida, y describir de forma sencilla mis hábitos alimentarios y mis gustos.",
    escena: "Sarah & David · en una cafetería, a la hora del almuerzo",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
