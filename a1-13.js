/* ============================================================
   LECCIÓN A1-13 · Gustos: like, love, hate
   Reparto: Mr. Ortega (profesor) pregunta en clase.
   La lectura cubre yo, él, ella, nosotros y ellos.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Cuánto te gusta", items:[
    ["love","lʌv","encantar","lav"],["like","laɪk","gustar","láik"],
    ["enjoy","ɪnˈdʒɔɪ","disfrutar","inyói"],["don't mind","doʊnt maɪnd","no importar","dóunt máind"],
    ["dislike","dɪsˈlaɪk","no gustar","disláik"],["hate","heɪt","odiar","jéit"],
    ["prefer","prɪˈfɜːr","preferir","prifférr"],["favourite","ˈfeɪvərɪt","favorito","féivarit"],
    ["a lot","ə lɑːt","mucho","a lat"],["at all","ət ɔːl","en absoluto","at ol"]
  ]},
  {g:"Aficiones", items:[
    ["music","ˈmjuːzɪk","música","miúsik"],["film","fɪlm","película","film"],
    ["book","bʊk","libro","buk"],["game","ɡeɪm","juego","guéim"],
    ["sport","spɔːrt","deporte","sport"],["football","ˈfʊtbɔːl","fútbol","fútbol"],
    ["swimming","ˈswɪmɪŋ","natación","suíming"],["dancing","ˈdænsɪŋ","baile","dánsing"],
    ["reading","ˈriːdɪŋ","lectura","ríiding"],["cooking","ˈkʊkɪŋ","cocina","kúking"],
    ["travelling","ˈtrævlɪŋ","viajar","trávling"],["photography","fəˈtɑːɡrəfi","fotografía","fatágrafi"]
  ]},
  {g:"Pronombres de objeto", items:[
    ["me","miː","me, a mí","míi"],["you","juː","te, a ti","iú"],
    ["him","hɪm","lo, le (a él)","jim"],["her","hɜːr","la, le (a ella)","jer"],
    ["it","ɪt","lo (cosa)","it"],["us","ʌs","nos","as"],
    ["them","ðem","los, les","dem"]
  ]},
  {g:"Estar de acuerdo", items:[
    ["So do I","soʊ duː aɪ","yo también","sóu du ái"],["Me too","miː tuː","yo también","míi túu"],
    ["Neither do I","ˈniːðər duː aɪ","yo tampoco","níider du ái"],["Me neither","miː ˈniːðər","yo tampoco","míi níider"],
    ["Really?","ˈrɪəli","¿en serio?","ríili"],["I agree","aɪ əˈɡriː","estoy de acuerdo","ái agríi"],
    ["boring","ˈbɔːrɪŋ","aburrido","bóring"],["exciting","ɪkˈsaɪtɪŋ","emocionante","iksáiting"],
    ["relaxing","rɪˈlæksɪŋ","relajante","riláksing"],["terrible","ˈterəbl","horrible","térabl"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hate &rarr; jéit"],
  ["d","En <i>neither</i>: lengua entre los dientes, con voz.","neither &rarr; níider"],
  ["y","Como la <i>y</i> de «yo».","enjoy &rarr; inyói"],
  ["sh","Como pedir silencio.","fashion &rarr; fáshn"],
  ["v","Labio de abajo contra los dientes de arriba.","love &rarr; lav"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","swimming &rarr; suíming"],
  ["ng","La <i>n</i> se queda atrás: aparece en todos los <i>-ing</i>.","dancing &rarr; dánsing"],
  ["f","La <i>ph</i> suena <b>f</b>.","photography &rarr; fatágrafi"],
  ["tilde","La sílaba fuerte. En <i>photography</i> cae en la segunda.","photography &rarr; fatágrafi"]
];

const VERBS = [
  ["to like","reg","like · likes","liked","will like","gustar"],
  ["to love","reg","love · loves","loved","will love","encantar"],
  ["to hate","reg","hate · hates","hated","will hate","odiar"],
  ["to enjoy","reg","enjoy · enjoys","enjoyed","will enjoy","disfrutar"],
  ["to prefer","reg","prefer · prefers","preferred","will prefer","preferir"],
  ["to play","reg","play · plays","played","will play","jugar, tocar"],
  ["to listen","reg","listen · listens","listened","will listen","escuchar"],
  ["to watch","reg","watch · watches","watched","will watch","ver"],
  ["to read","irr","read · reads","read","will read","leer"],
  ["to swim","irr","swim · swims","swam","will swim","nadar"],
  ["to dance","reg","dance · dances","danced","will dance","bailar"]
];

const GRAMMAR = [
  {t:"Lo que gusta va en -ing", s:"I like swimming",
   p:"Detrás de <b>like, love, hate, enjoy</b>, el verbo va en <b>-ing</b>. En español va en infinitivo, y traducir literalmente produce una frase que no existe.",
   table:{head:["Español","Inglés","Nunca"], rows:[
     ["Me gusta nadar","I like swimming","I like swim"],
     ["Odia cocinar","He hates cooking","He hates cook"],
     ["Disfrutamos viajando","We enjoy travelling","We enjoy travel"],
     ["Me gusta el fútbol","I like football","(sustantivo: sin -ing)"]
   ]},
   aviso:["Con sustantivo no lleva <i>-ing</i>","<b>I like music</b> (sustantivo) y <b>I like listening to music</b> (verbo). El <i>-ing</i> sólo aparece cuando lo que sigue es una acción."]},

  {t:"El sujeto cambia de bando", s:"I like it",
   p:"En «me gusta», el sujeto español es <i>la cosa</i> y yo soy el complemento. En inglés es al revés: <b>yo</b> soy el sujeto y la cosa el objeto. Hay que dar la vuelta a la frase entera.",
   chips:[["I like it","Me gusta"],["She likes them","A ella le gustan"],["We don't like him","No nos cae bien"],["They love us","Les caemos muy bien"]],
   aviso:["Nunca <i>me likes</i>","<span class='wrong'>Me likes football.</span> &nbsp;&rarr;&nbsp; <span class='right'>I like football.</span> Y el verbo concuerda con la persona, no con la cosa: <b>she likes</b>, no <i>she like</i>."]},

  {t:"Pronombres de objeto", s:"me, him, her, us, them",
   p:"Después del verbo o de una preposición, los pronombres cambian de forma. Son los que ves en la tabla de vocabulario.",
   table:{head:["Sujeto","Objeto","Ejemplo"], rows:[
     ["I","me","She knows me."],
     ["he","him","I like him."],
     ["she","her","We invite her."],
     ["we","us","They help us."],
     ["they","them","I don't know them."]
   ]},
   aviso:["<i>Her</i> hace doble trabajo","<b>her</b> es a la vez objeto («la, le») y posesivo («su»). <i>I like her</i> = me cae bien ella. <i>her book</i> = su libro. Sólo el contexto lo distingue."]},

  {t:"Grados: love, like, don't mind, hate", s:"escala de gusto",
   p:"El inglés tiene una escala clara, y conviene usar toda la gama en lugar de repetir <i>I like</i>.",
   table:{head:["Nivel","Expresión","Español"], rows:[
     ["++","I love it","Me encanta"],
     ["+","I like it","Me gusta"],
     ["=","I don't mind it","No me molesta"],
     ["−","I don't like it","No me gusta"],
     ["−−","I hate it","Lo odio"]
   ]}},

  {t:"Yo también, yo tampoco", s:"So do I / Neither do I",
   p:"Para sumarse a lo que dice otro, el inglés invierte el orden: <b>So</b> o <b>Neither</b> + auxiliar + sujeto. El auxiliar es el mismo que llevaría la frase original.",
   chips:[["I like coffee. — So do I","A mí también"],["I don't like fish. — Neither do I","A mí tampoco"],["I am tired. — So am I","Yo también"],["Me too / Me neither","versión informal"]],
   aviso:["Se elige según la frase anterior","Si la frase era afirmativa, <b>So do I</b>. Si era negativa, <b>Neither do I</b>. Y si llevaba <i>to be</i>, el auxiliar cambia: <b>So am I</b>."]},

  {t:"Would like no es like", s:"I'd like ≠ I like",
   p:"Una letra de diferencia y dos significados distintos: <b>I like</b> es un gusto permanente; <b>I'd like</b> es un deseo de ahora. Y detrás de <i>would like</i> va infinitivo con <i>to</i>, no <i>-ing</i>.",
   chips:[["I like coffee","Me gusta el café (siempre)"],["I'd like a coffee","Quisiera un café (ahora)"],["I like swimming","Me gusta nadar"],["I'd like to swim","Me gustaría nadar"]],
   aviso:["Cambia también lo que va detrás","<b>like + -ing</b> pero <b>would like + to + infinitivo</b>. <span class='wrong'>I'd like swimming</span> &rarr; <span class='right'>I'd like <b>to swim</b></span>."]}
];

/* Mr. Ortega (A, el profesor) hace una encuesta de clase a David (B) */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd aɪm ˈduːɪŋ ə klæs ˈsɜːrveɪ wʌt duː juː laɪk ˈduːɪŋ", p:"déivid, áim dúuing a klas sérvei. uát du iú láik dúuing",
  b:[["David,","David,"],["I'm doing","estoy haciendo"],["a class survey.","una encuesta de clase."],["What do you like doing?","¿Qué te gusta hacer?"]],
  n:"<b>Like doing</b>, con <i>-ing</i>. En español decimos «gusta hacer», en infinitivo; el inglés exige la forma en <i>-ing</i>."},
 {s:"B", ipa:"aɪ lʌv ˈpleɪɪŋ ˈfʊtbɔːl ænd aɪ ɪnˈdʒɔɪ ˈriːdɪŋ", p:"ái lav pléiing fútbol, and ái inyói ríiding",
  b:[["I love","Me encanta"],["playing","jugar"],["football","fútbol"],["and","y"],["I enjoy","disfruto"],["reading.","leyendo."]]},
 {s:"A", ipa:"ɡʊd ænd wʌt əˈbaʊt ˈmjuːzɪk", p:"gud. and uát abáut miúsik",
  b:[["Good.","Bien."],["And","¿Y"],["what about","qué tal"],["music?","la música?"]]},
 {s:"B", ipa:"aɪ laɪk ˈmjuːzɪk bʌt aɪ heɪt ˈdænsɪŋ", p:"ái láik miúsik, bat ái jéit dánsing",
  b:[["I like","Me gusta"],["music,","la música,"],["but","pero"],["I hate","odio"],["dancing.","bailar."]],
  n:"<b>Music</b> es sustantivo y no lleva <i>-ing</i>; <b>dancing</b> es una acción y sí lo lleva. La diferencia está en lo que sigue al verbo."},
 {s:"A", ipa:"ˈrɪəli jʊr ˈsɪstər ˈænə lʌvz ɪt", p:"ríili. iór síster Ána lavs it",
  b:[["Really?","¿En serio?"],["Your sister","Tu hermana"],["Ana","Ana"],["loves it.","lo adora."]],
  n:"<b>Loves it</b>: el pronombre de objeto <i>it</i> sustituye a <i>dancing</i>. Y el verbo lleva <i>-s</i> porque el sujeto es <i>Ana</i>."},
 {s:"B", ipa:"aɪ noʊ ʃi ˈdænsɪz ˈevri ˈsætərdeɪ aɪ doʊnt ɡoʊ wɪð hɜːr", p:"ái nóu. shi dánsis évri sáterdei. ái dóunt góu uid jer",
  b:[["I know.","Lo sé."],["She dances","Ella baila"],["every Saturday.","cada sábado."],["I don't go","Yo no voy"],["with her.","con ella."]],
  n:"Después de una preposición va el pronombre de objeto: <b>with her</b>, nunca <span class='wrong'>with she</span>."},
 {s:"A", ipa:"wʌt əˈbaʊt jʊr ˈkʌznz pɑːblo ænd ˈniːko", p:"uát abáut iór kásns, Páblo and Níko",
  b:[["What about","¿Y"],["your cousins,","tus primos,"],["Pablo and Nico?","Pablo y Nico?"]]},
 {s:"B", ipa:"ðeɪ lʌv ˈswɪmɪŋ aɪ ɡoʊ wɪð ðem ˈsʌmtaɪmz", p:"déi lav suíming. ái góu uid dem sámtaims",
  b:[["They love","A ellos les encanta"],["swimming.","nadar."],["I go","Voy"],["with them","con ellos"],["sometimes.","a veces."]],
  n:"<b>Them</b> es el objeto de <i>they</i>. La familia completa de pronombres de objeto: me, you, him, her, it, us, them."},
 {s:"A", ipa:"duː juː laɪk ˈswɪmɪŋ tuː", p:"du iú láik suíming túu",
  b:[["Do you like","¿Te gusta"],["swimming","nadar"],["too?","también?"]]},
 {s:"B", ipa:"aɪ doʊnt maɪnd ɪt bʌt aɪ priˈfɜːr ˈfʊtbɔːl", p:"ái dóunt máind it, bat ái prifférr fútbol",
  b:[["I don't mind it,","No me molesta,"],["but","pero"],["I prefer","prefiero"],["football.","el fútbol."]],
  n:"<b>I don't mind</b> está en el medio de la escala: ni gusta ni disgusta. Es muy útil y poco usado por los estudiantes."},
 {s:"A", ipa:"ˈkevɪn heɪts ˈfʊtbɔːl hi seɪz ɪts ˈbɔːrɪŋ", p:"Kévin jéits fútbol. ji ses its bóring",
  b:[["Kevin","Kevin"],["hates","odia"],["football.","el fútbol."],["He says","Dice"],["it is","que es"],["boring.","aburrido."]]},
 {s:"B", ipa:"ˈbɔːrɪŋ ˈfʊtbɔːl ɪz ɪkˈsaɪtɪŋ aɪ doʊnt əˈɡriː wɪð hɪm", p:"bóring. fútbol is iksáiting. ái dóunt agríi uid jim",
  b:[["Boring?","¿Aburrido?"],["Football","El fútbol"],["is","es"],["exciting.","emocionante."],["I don't agree","No estoy de acuerdo"],["with him.","con él."]],
  n:"<b>With him</b>, objeto. Y fíjate en la pareja <i>boring</i> / <i>exciting</i>: describen la cosa, no a la persona."},
 {s:"A", ipa:"hi laɪks ˌfəˈtɑːɡrəfi hi teɪks ˈfoʊtoʊz ˈevri deɪ", p:"ji láiks fatágrafi. ji téiks fóutous évri déi",
  b:[["He likes","A él le gusta"],["photography.","la fotografía."],["He takes","Toma"],["photos","fotos"],["every day.","todos los días."]]},
 {s:"B", ipa:"ðæts ˈɪntrəstɪŋ aɪd laɪk tuː lɜːrn ðæt", p:"dats íntrestin. áid láik tu lern dat",
  b:[["That's interesting.","Eso es interesante."],["I'd like","Me gustaría"],["to learn","aprender"],["that.","eso."]],
  n:"<b>I'd like to learn</b>: con <i>would like</i> el verbo va en infinitivo con <i>to</i>, no en <i>-ing</i>."},
 {s:"A", ipa:"aɪ lʌv ˌfəˈtɑːɡrəfi tuː", p:"ái lav fatágrafi túu",
  b:[["I love","A mí también me encanta"],["photography","la fotografía"],["too.","."]]},
 {s:"B", ipa:"soʊ duː aɪ wel aɪ laɪk lʊkɪŋ æt ˈfoʊtoʊz", p:"sóu du ái. uél, ái láik lúking at fóutous",
  b:[["So do I.","Yo también."],["Well,","Bueno,"],["I like","me gusta"],["looking at","mirar"],["photos.","fotos."]],
  n:"<b>So do I</b> para sumarse a una frase afirmativa. Si fuera negativa, sería <i>Neither do I</i>."},
 {s:"A", ipa:"dəz ˈɛnɪwʌn ɪn jʊr ˈfæməli kʊk", p:"das éniuan in iór fámili kuk",
  b:[["Does anyone","¿Alguien"],["in your family","de tu familia"],["cook?","cocina?"]]},
 {s:"B", ipa:"maɪ ˈmʌðər dəz ʃi lʌvz ˈkʊkɪŋ fɔːr ʌs", p:"mái máder das. shi lavs kúking for as",
  b:[["My mother does.","Mi madre sí."],["She loves","Le encanta"],["cooking","cocinar"],["for us.","para nosotros."]],
  n:"<b>For us</b>: otra vez objeto después de preposición. Y <b>My mother does</b> es una respuesta corta con el auxiliar."},
 {s:"A", ipa:"ænd juː duː juː ɪnˈdʒɔɪ ˈkʊkɪŋ", p:"and iú. du iú inyói kúking",
  b:[["And you?","¿Y tú?"],["Do you enjoy","¿Disfrutas"],["cooking?","cocinando?"]]},
 {s:"B", ipa:"nɑːt ət ɔːl aɪ doʊnt laɪk ɪt ət ɔːl", p:"nat at ol. ái dóunt láik it at ol",
  b:[["Not at all.","En absoluto."],["I don't like it","No me gusta"],["at all.","para nada."]]},
 {s:"A", ipa:"ˈniːðər duː aɪ maɪ waɪf kʊks ət haʊm", p:"níider du ái. mái uáif kuks at jóum",
  b:[["Neither do I.","Yo tampoco."],["My wife","Mi esposa"],["cooks","cocina"],["at home.","en casa."]],
  n:"<b>Neither do I</b> porque la frase anterior era negativa. Con una afirmativa habría dicho <i>So do I</i>."},
 {s:"B", ipa:"wi ɑːr ðə seɪm ðen ˈmɪstər ɔːrˈteɪɡə", p:"ui ar da séim den, míster Ortéga",
  b:[["We are","Somos"],["the same","iguales"],["then,","entonces,"],["Mr Ortega!","señor Ortega!"]]},
 {s:"A", ipa:"wi ɑːr θæŋk juː fɔːr jʊr ˈænsərz", p:"ui ar. zánk iú for iór ánsers",
  b:[["We are.","Lo somos."],["Thank you","Gracias"],["for your answers.","por tus respuestas."]]},
 {s:"B", ipa:"juːr ˈwelkəm aɪ ɪnˈdʒɔɪd ðə ˈsɜːrveɪ", p:"iúr uélcam. ái inyóid da sérvei",
  b:[["You're welcome.","De nada."],["I enjoyed","Disfruté"],["the survey.","la encuesta."]]}
];

const LECTURA = {
  titulo: "The class survey",
  entradilla: "Los resultados de la encuesta del señor Ortega. Cada párrafo habla de una persona distinta, así que verás el verbo en todas sus formas: <i>I like</i>, <i>he likes</i>, <i>she loves</i>, <i>they hate</i>, <i>we enjoy</i>.",
  parrafos: [
    "I love playing football and I enjoy reading, but I hate dancing. I like music a lot, and I don't mind swimming. I do not like cooking at all. Mr Ortega says my answers are normal for a boy of my age.",
    "My sister Ana loves dancing. She dances every Saturday with her friends, and she also likes photography. My cousins Pablo and Nico love swimming. They swim in the river every Sunday and sometimes I go with them. My mother enjoys cooking for us, so we eat very well at home.",
    "Kevin is my classmate and he hates football. He says it is boring, but I think it is exciting, so I don't agree with him. He likes photography, like Ana, and he takes photos every day. I'd like to learn that too.",
    "Mr Ortega does not like cooking either. \"Neither do I,\" I told him, and we laughed. We are the same: we love watching films, we enjoy music, and neither of us can cook anything. At the end of the class, everybody had an answer and nobody was bored."
  ],
  glosario: [
    ["love","lʌv","me encanta","lav"],
    ["loves","lʌvz","le encanta","lavs"],
    ["likes","laɪks","le gusta","láiks"],
    ["hate","heɪt","odio","jéit"],
    ["hates","heɪts","odia","jéits"],
    ["enjoy","ɪnˈdʒɔɪ","disfruto","inyói"],
    ["enjoys","ɪnˈdʒɔɪz","disfruta","inyóis"],
    ["don't mind","doʊnt maɪnd","no me molesta","dóunt máind"],
    ["agree","əˈɡriː","estoy de acuerdo","agríi"],
    ["dances","ˈdænsɪz","baila","dánsis"],
    ["swim","swɪm","nadan","suím"],
    ["takes","teɪks","toma","téiks"],
    ["told","toʊld","dije","tóuld"],
    ["laughed","læft","reímos","laft"],
    ["had","hæd","tuvo","jad"],
    ["playing","ˈpleɪɪŋ","jugar","pléiing"],
    ["reading","ˈriːdɪŋ","leer","ríiding"],
    ["dancing","ˈdænsɪŋ","bailar","dánsing"],
    ["swimming","ˈswɪmɪŋ","nadar","suíming"],
    ["cooking","ˈkʊkɪŋ","cocinar","kúking"],
    ["watching","ˈwɑːtʃɪŋ","ver","uáching"],
    ["photography","fəˈtɑːɡrəfi","fotografía","fatágrafi"],
    ["photos","ˈfoʊtoʊz","fotos","fóutous"],
    ["films","fɪlmz","películas","films"],
    ["music","ˈmjuːzɪk","música","miúsik"],
    ["football","ˈfʊtbɔːl","fútbol","fútbol"],
    ["boring","ˈbɔːrɪŋ","aburrido","bóring"],
    ["exciting","ɪkˈsaɪtɪŋ","emocionante","iksáiting"],
    ["bored","bɔːrd","aburrido (persona)","bord"],
    ["classmate","ˈklæsmeɪt","compañero de clase","klásmeit"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["mother","ˈmʌðər","madre","máder"],
    ["friends","frendz","amigas","frends"],
    ["river","ˈrɪvər","río","rívar"],
    ["at all","ət ɔːl","en absoluto","at ol"],
    ["either","ˈiːðər","tampoco","íider"],
    ["neither","ˈniːðər","ninguno, tampoco","níider"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["answers","ˈænsərz","respuestas","ánsers"],
    ["age","eɪdʒ","edad","éich"],
    ["boy","bɔɪ","chico","bói"],
    ["normal","ˈnɔːrml","normal","nórmal"],
    ["also","ˈɔːlsoʊ","también","ólsou"]
  ],
  preguntas: [
    { q:"Who loves dancing?",
      ops:["David","Ana","Kevin"], ok:1,
      pista:"David lo odia; busca quién baila cada sábado." },
    { q:"What do Pablo and Nico do every Sunday?",
      ops:["They swim in the river","They play football","They take photos"], ok:0,
      pista:"Segundo párrafo, donde se habla de los primos en plural." },
    { q:"What do David and Mr Ortega have in common?",
      ops:["They both love football","They both like dancing","Neither of them can cook"], ok:2,
      pista:"Último párrafo: es lo que los hace «the same»." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-13"] = {
  meta: {
    id: "a1-13", nivel: "A1", numero: 13,
    titulo: "Gustos: like, love, hate",
    descriptor: "Puedo expresar lo que me gusta y lo que no, preguntar por los gustos de otros y mostrar acuerdo o desacuerdo de forma sencilla.",
    escena: "Mr. Ortega & David · encuesta de clase en el instituto",
    personajeIA: "Mr. Ortega", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
