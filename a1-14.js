/* ============================================================
   LECCIÓN A1-14 · Habilidades: can y can't
   Reparto: Kevin, compañero australiano, organiza el festival.
   La lectura recorre él, ella, ellos, nosotros y yo.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Lo que se puede hacer", items:[
    ["can","kæn","poder, saber","kan"],["can't","kɑːnt","no poder","kant"],
    ["ability","əˈbɪləti","habilidad","abíliti"],["skill","skɪl","destreza","skil"],
    ["talent","ˈtælənt","talento","tálent"],["good at","ɡʊd æt","bueno en","gud at"],
    ["bad at","bæd æt","malo en","bad at"],["well","wel","bien","uél"],
    ["badly","ˈbædli","mal","bádli"],["a little","ə ˈlɪtl","un poco","a lítl"]
  ]},
  {g:"Habilidades", items:[
    ["sing","sɪŋ","cantar","sing"],["play the guitar","pleɪ ðə ɡɪˈtɑːr","tocar la guitarra","pléi da guitár"],
    ["draw","drɔː","dibujar","dro"],["paint","peɪnt","pintar","péint"],
    ["ride a bike","raɪd ə baɪk","montar en bici","ráid a báik"],["drive","draɪv","conducir","dráiv"],
    ["swim","swɪm","nadar","suím"],["run","rʌn","correr","ran"],
    ["jump","dʒʌmp","saltar","yamp"],["climb","klaɪm","escalar","kláim"],
    ["speak","spiːk","hablar (idiomas)","spíik"],["type","taɪp","escribir a máquina","táip"]
  ]},
  {g:"El festival", items:[
    ["festival","ˈfestɪvl","festival","féstival"],["show","ʃoʊ","espectáculo","shóu"],
    ["stage","steɪdʒ","escenario","stéich"],["group","ɡruːp","grupo","grúup"],
    ["practice","ˈpræktɪs","práctica, ensayo","práktis"],["rehearsal","rɪˈhɜːrsl","ensayo","rijérsal"],
    ["together","təˈɡeðər","juntos","tuguéder"],["alone","əˈloʊn","solo","alóun"],
    ["audience","ˈɔːdiəns","público","ódiens"],["nervous","ˈnɜːrvəs","nervioso","nérvas"]
  ]},
  {g:"Pedir y ofrecer", items:[
    ["Can you help me?","kæn juː help miː","¿me ayudas?","kan iú jelp míi"],["Can I try?","kæn aɪ traɪ","¿puedo probar?","kan ái trái"],
    ["of course","əv kɔːrs","por supuesto","av kórs"],["sure","ʃʊr","claro","shur"],
    ["sorry","ˈsɑːri","lo siento","sári"],["maybe","ˈmeɪbi","quizá","méibi"],
    ["easy","ˈiːzi","fácil","íisi"],["difficult","ˈdɪfɪkəlt","difícil","dífikalt"],
    ["together","təˈɡeðər","juntos","tuguéder"],["afraid","əˈfreɪd","asustado","afréid"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","help &rarr; jelp"],
  ["y","Como la <i>y</i> de «yo».","jump &rarr; yamp"],
  ["sh","Como pedir silencio.","show &rarr; shóu"],
  ["ch","Como en «coche».","stage &rarr; stéich"],
  ["v","Labio de abajo contra los dientes de arriba.","nervous &rarr; nérvas"],
  ["u + vocal","Suena como la <i>w</i> inglesa.","swim &rarr; suím"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","sing &rarr; sing"],
  ["letras mudas","La <i>b</i> de <i>climb</i> no se pronuncia.","climb &rarr; kláim"],
  ["can / can't","<i>can</i> es corta y átona; <i>can't</i> es larga y fuerte. Ahí está toda la diferencia.","can &rarr; kan · can't &rarr; kant"]
];

const VERBS = [
  ["to sing","irr","sing · sings","sang","will sing","cantar"],
  ["to draw","irr","draw · draws","drew","will draw","dibujar"],
  ["to paint","reg","paint · paints","painted","will paint","pintar"],
  ["to ride","irr","ride · rides","rode","will ride","montar"],
  ["to drive","irr","drive · drives","drove","will drive","conducir"],
  ["to swim","irr","swim · swims","swam","will swim","nadar"],
  ["to run","irr","run · runs","ran","will run","correr"],
  ["to climb","reg","climb · climbs","climbed","will climb","escalar"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to help","reg","help · helps","helped","will help","ayudar"],
  ["to practise","reg","practise · practises","practised","will practise","ensayar"]
];

const GRAMMAR = [
  {t:"CAN: el modal más simple", s:"can / can't",
   p:"<b>Can</b> no cambia nunca: ni lleva <i>-s</i> en tercera persona, ni necesita auxiliar, ni admite <i>to</i> detrás. Es el verbo más fácil del inglés y por eso el más maltratado.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Afirmativo","sujeto + can + verbo","She can swim."],
     ["Negativo","sujeto + can't + verbo","He can't drive."],
     ["Pregunta","Can + sujeto + verbo","Can you sing?"],
     ["Respuesta corta","Yes, I can. / No, I can't.","— Can you swim? — Yes, I can."]
   ]},
   aviso:["Tres errores en una sola frase","<span class='wrong'>She cans to swims.</span> &nbsp;&rarr;&nbsp; <span class='right'>She can swim.</span> Sin <i>-s</i> en <i>can</i>, sin <i>to</i>, y el verbo en forma base."]},

  {t:"Oír la diferencia: can y can't", s:"pronunciación",
   p:"Es el punto más difícil de esta lección, y sale en el IELTS Listening. En una frase normal, <b>can</b> se dice rápido y débil; <b>can't</b> se alarga y se marca.",
   chips:[["I can swim","ái kn suím (rápido)"],["I can't swim","ái kant suím (marcado)"],["Yes, I can","aquí sí suena fuerte: kán"],["No, I can't","kant, con la vocal larga"]],
   aviso:["Al final de la frase, <i>can</i> sí se marca","En <b>Yes, I can</b> la palabra va al final y se pronuncia fuerte. En medio de una frase se debilita casi hasta desaparecer. Ese contraste es lo que hay que entrenar."]},

  {t:"Ser bueno en algo", s:"good at + -ing",
   p:"La estructura es <b>be + good/bad + at + -ing</b>. Fíjate en que lleva <i>to be</i>, no <i>to have</i>, y en que el verbo va en <i>-ing</i>.",
   chips:[["I'm good at drawing","Soy bueno dibujando"],["She's bad at cooking","Ella es mala cocinando"],["Are you good at maths?","¿Se te dan bien las matemáticas?"],["He's very good at football","Es muy bueno en fútbol"]],
   aviso:["La preposición es <i>at</i>, no <i>in</i>","<span class='wrong'>good in swimming</span> &nbsp;&rarr;&nbsp; <span class='right'>good <b>at</b> swimming</span>. Y detrás siempre <i>-ing</i>, nunca infinitivo."]},

  {t:"Bien y mal: adverbios", s:"well / badly",
   p:"<b>Good</b> es adjetivo y describe cosas o personas; <b>well</b> es adverbio y describe cómo se hace algo. El español usa «bueno» y «bien» igual, así que la confusión viene del descuido, no del idioma.",
   table:{head:["Tipo","Palabra","Ejemplo"], rows:[
     ["Adjetivo","good","She is a good singer."],
     ["Adverbio","well","She sings well."],
     ["Adjetivo","bad","He is a bad driver."],
     ["Adverbio","badly","He drives badly."]
   ]},
   aviso:["<i>I'm good</i> y <i>I do it well</i>","<span class='wrong'>She sings good.</span> &nbsp;&rarr;&nbsp; <span class='right'>She sings <b>well</b>.</span> Si acompaña a un verbo, es adverbio."]},

  {t:"Can también es permiso", s:"Can I…? Can you…?",
   p:"El mismo <b>can</b> sirve para tres cosas distintas, y el contexto decide cuál.",
   table:{head:["Uso","Ejemplo","Español"], rows:[
     ["Habilidad","I can swim.","Sé nadar."],
     ["Permiso","Can I try?","¿Puedo probar?"],
     ["Petición","Can you help me?","¿Me ayudas?"],
     ["Posibilidad","We can go tomorrow.","Podemos ir mañana."]
   ]},
   aviso:["«Saber» y «poder» son el mismo verbo","En español distinguimos «sé nadar» de «puedo nadar». En inglés las dos son <b>I can swim</b>: no existe un verbo aparte para «saber hacer algo»."]},

  {t:"Un poco y nada", s:"a little / not at all",
   p:"Para matizar la habilidad, el inglés coloca estas expresiones al final de la frase.",
   chips:[["I can swim a little","Sé nadar un poco"],["I can't swim at all","No sé nadar nada"],["She speaks English very well","Habla inglés muy bien"],["He can't sing at all","No sabe cantar nada"]]}
];

/* Kevin (A, compañero australiano) recluta a David (B) para el festival */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd wi niːd ˈpiːpl fɔːr ðə skuːl ˈfestɪvl", p:"déivid, ui níid píipl for da skúul féstival",
  b:[["David,","David,"],["we need","necesitamos"],["people","gente"],["for the school festival.","para el festival de la escuela."]]},
 {s:"B", ipa:"ˈrɪəli wʌt kæn aɪ duː aɪ kɑːnt sɪŋ", p:"ríili. uát kan ái du. ái kant sing",
  b:[["Really?","¿En serio?"],["What can I do?","¿Qué puedo hacer?"],["I can't sing.","No sé cantar."]],
  n:"<b>Can</b> sirve para «saber» y para «poder». El español los distingue; el inglés usa el mismo verbo para ambos."},
 {s:"A", ipa:"kæn juː pleɪ ðə ɡɪˈtɑːr", p:"kan iú pléi da guitár",
  b:[["Can you play","¿Sabes tocar"],["the guitar?","la guitarra?"]]},
 {s:"B", ipa:"ə ˈlɪtl bʌt aɪ pleɪ ˈbædli", p:"a lítl. bat ái pléi bádli",
  b:[["A little.","Un poco."],["But","Pero"],["I play","toco"],["badly.","mal."]],
  n:"<b>Badly</b> es adverbio: describe cómo se toca. El adjetivo sería <i>bad</i>: <i>I am a bad player</i>."},
 {s:"A", ipa:"ðæts oʊˈkeɪ ˈænə kæn sɪŋ ˈvɛri wel", p:"dats oukéi. Ána kan sing véri uél",
  b:[["That's okay.","Está bien."],["Ana","Ana"],["can sing","sabe cantar"],["very well.","muy bien."]],
  n:"<b>Ana can sing</b>, sin <i>-s</i>. <i>Can</i> no cambia nunca, tampoco en tercera persona."},
 {s:"B", ipa:"maɪ ˈsɪstər jes ʃiz ə ɡʊd ˈsɪŋər", p:"mái síster. yes, shiis a gud sínguer",
  b:[["My sister?","¿Mi hermana?"],["Yes,","Sí,"],["she is","es"],["a good","una buena"],["singer.","cantante."]],
  n:"Aquí <b>good</b> porque acompaña a un sustantivo (<i>singer</i>). Con el verbo sería <i>she sings well</i>."},
 {s:"A", ipa:"kæn ʃi pleɪ ˈɛni ˈɪnstrəmənt", p:"kan shi pléi éni ínstrament",
  b:[["Can she play","¿Sabe tocar"],["any","algún"],["instrument?","instrumento?"]]},
 {s:"B", ipa:"noʊ ʃi kɑːnt bʌt ʃiz ˈvɛri ɡʊd æt ˈdænsɪŋ", p:"nóu, shi kant. bat shiis véri gud at dánsing",
  b:[["No, she can't.","No, no sabe."],["But","Pero"],["she is","es"],["very good at","muy buena"],["dancing.","bailando."]],
  n:"<b>Good at + -ing</b>. La preposición es <i>at</i>, nunca <i>in</i>, y el verbo va siempre en <i>-ing</i>."},
 {s:"A", ipa:"ˈperfɪkt ænd jʊr ˈkʌznz kæn ðeɪ duː ˈɛnɪθɪŋ", p:"pérfect. and iór kásns. kan déi du énizing",
  b:[["Perfect.","Perfecto."],["And your cousins?","¿Y tus primos?"],["Can they do anything?","¿Saben hacer algo?"]]},
 {s:"B", ipa:"ðeɪ kæn swɪm ænd rʌn fæst bʌt ðæts nɑːt ə ʃoʊ", p:"déi kan suím and ran fast. bat dats nat a shóu",
  b:[["They can swim","Saben nadar"],["and run","y correr"],["fast.","rápido."],["But","Pero"],["that is not","eso no es"],["a show.","un espectáculo."]]},
 {s:"A", ipa:"kæn ðeɪ klaɪm wi niːd ˈpiːpl fɔːr ðə steɪdʒ", p:"kan déi kláim. ui níid píipl for da stéich",
  b:[["Can they climb?","¿Saben escalar?"],["We need people","Necesitamos gente"],["for the stage.","para el escenario."]],
  n:"En <b>climb</b> la <i>b</i> final no se pronuncia: «kláim». Igual que en <i>comb</i> o <i>thumb</i>."},
 {s:"B", ipa:"jes ðeɪ kæn ænd ðeɪ ɑːr nɑːt əˈfreɪd əv ˈɛnɪθɪŋ", p:"yes déi kan. and déi ar nat afréid av énizing",
  b:[["Yes, they can.","Sí, saben."],["And","Y"],["they are not","no tienen"],["afraid of","miedo de"],["anything.","nada."]],
  n:"En la respuesta corta <b>Yes, they can</b>, la palabra <i>can</i> va al final y sí se pronuncia fuerte."},
 {s:"A", ipa:"ɡreɪt wʌt əˈbaʊt jʊr ˈɡrænfɑːðər ˈkɑːrlos", p:"gréit. uát abáut iór gránfader Kárlos",
  b:[["Great.","Genial."],["What about","¿Y"],["your grandfather","tu abuelo"],["Carlos?","Carlos?"]]},
 {s:"B", ipa:"hi kɑːnt klaɪm hiz ˈeɪti bʌt hi kæn tel ˈstɔːriz", p:"ji kant kláim, jíis éiti. bat ji kan tel stóoris",
  b:[["He can't climb,","No puede escalar,"],["he is","tiene"],["eighty.","ochenta."],["But","Pero"],["he can tell","sabe contar"],["stories.","historias."]]},
 {s:"A", ipa:"ˈstɔːriz ðæts ˈperfɪkt fɔːr ðə ˈɔːdiəns", p:"stóoris. dats pérfect for da ódiens",
  b:[["Stories!","¡Historias!"],["That is perfect","Eso es perfecto"],["for the audience.","para el público."]]},
 {s:"B", ipa:"bʌt hi ɡets ˈnɜːrvəs ɪn frʌnt əv ˈpiːpl", p:"bat ji guets nérvas in front av píipl",
  b:[["But","Pero"],["he gets","se pone"],["nervous","nervioso"],["in front of","delante de"],["people.","la gente."]]},
 {s:"A", ipa:"wi ɔːl duː kæn juː help hɪm", p:"ui ol du. kan iú jelp jim",
  b:[["We all do.","Todos nos ponemos."],["Can you help him?","¿Puedes ayudarlo?"]],
  n:"Aquí <b>can</b> es petición, no habilidad. La misma palabra, tres usos: saber, poder y pedir."},
 {s:"B", ipa:"əv kɔːrs wi kæn ˈpræktɪs təˈɡeðər æt maɪ haʊs", p:"av kórs. ui kan práktis tuguéder at mái jáus",
  b:[["Of course.","Por supuesto."],["We can practise","Podemos ensayar"],["together","juntos"],["at my house.","en mi casa."]]},
 {s:"A", ipa:"kæn aɪ kʌm tuː aɪ wɑːnt tuː lɜːrn ðə ɡɪˈtɑːr", p:"kan ái kam túu. ái uánt tu lern da guitár",
  b:[["Can I come too?","¿Puedo ir yo también?"],["I want","Quiero"],["to learn","aprender"],["the guitar.","la guitarra."]],
  n:"<b>Can I…?</b> es permiso. Y detrás de <i>want</i> va infinitivo con <i>to</i>, no <i>-ing</i>."},
 {s:"B", ipa:"ʃʊr bʌt aɪ kɑːnt tiːtʃ juː wel aɪ pleɪ ˈbædli", p:"shur. bat ái kant tíich iú uél, ái pléi bádli",
  b:[["Sure.","Claro."],["But","Pero"],["I can't teach you well,","no te puedo enseñar bien,"],["I play badly.","toco mal."]]},
 {s:"A", ipa:"ðen wi lɜːrn təˈɡeðər ðæts ˈiːzi", p:"den ui lern tuguéder. dats íisi",
  b:[["Then","Entonces"],["we learn","aprendemos"],["together.","juntos."],["That is easy.","Eso es fácil."]]},
 {s:"B", ipa:"wen ɪz ðə ˈfestɪvl kæn wi ˈpræktɪs ɑːn ˈsætərdeɪ", p:"uén is da féstival. kan ui práktis an sáterdei",
  b:[["When is","¿Cuándo es"],["the festival?","el festival?"],["Can we practise","¿Podemos ensayar"],["on Saturday?","el sábado?"]]},
 {s:"A", ipa:"jes wi kæn ðə ʃoʊ ɪz ɪn tuː wiːks", p:"yes ui kan. da shóu is in túu uíks",
  b:[["Yes, we can.","Sí, podemos."],["The show","El espectáculo"],["is","es"],["in two weeks.","en dos semanas."]]},
 {s:"B", ipa:"ðen lets stɑːrt aɪ kæn brɪŋ ðə ɡɪˈtɑːr", p:"den lets start. ái kan bring da guitár",
  b:[["Then let's start.","Entonces empecemos."],["I can bring","Puedo traer"],["the guitar.","la guitarra."]]}
];

const LECTURA = {
  titulo: "Talents for the festival",
  entradilla: "Kevin busca gente para el festival de la escuela. Cada párrafo habla de una persona distinta, con <i>can</i> y <i>can't</i> en todas las personas y con la pareja <i>good</i> / <i>well</i>.",
  parrafos: [
    "The school festival is in two weeks and Kevin needs people for the show. I can't sing at all, and I can play the guitar only a little: I play badly. But I am not afraid of the stage, so Kevin wants me in the group.",
    "My sister Ana can sing very well. She is a good singer, but she can't play any instrument. She is very good at dancing, so she can dance and sing on the same night. My cousins Pablo and Nico can swim and run fast, and they can climb too. They are not afraid of anything, so they can help with the stage.",
    "My grandfather Carlos is eighty years old. He can't climb and he can't run, but he can tell wonderful stories. The problem is that he gets nervous in front of people. Kevin asked me: \"Can you help him?\" Of course I can.",
    "We practise together at my house every Saturday. Kevin comes too, because he wants to learn the guitar and I want to learn it better. I can't teach him well, so we learn together. That is easier and much more fun. In two weeks we are all on that stage."
  ],
  glosario: [
    ["can","kæn","puedo, sabe, podemos","kan"],
    ["can't","kɑːnt","no puedo, no sabe","kant"],
    ["sing","sɪŋ","cantar","sing"],
    ["play","pleɪ","tocar","pléi"],
    ["dance","dæns","bailar","dans"],
    ["swim","swɪm","nadar","suím"],
    ["run","rʌn","correr","ran"],
    ["climb","klaɪm","escalar","kláim"],
    ["tell","tel","contar","tel"],
    ["teach","tiːtʃ","enseñar","tíich"],
    ["learn","lɜːrn","aprender","lern"],
    ["practise","ˈpræktɪs","ensayamos","práktis"],
    ["needs","niːdz","necesita","níids"],
    ["wants","wɑːnts","quiere","uánts"],
    ["asked","æskt","preguntó","askt"],
    ["gets","ɡets","se pone","guets"],
    ["comes","kʌmz","viene","kams"],
    ["help","help","ayudar","jelp"],
    ["badly","ˈbædli","mal","bádli"],
    ["well","wel","bien","uél"],
    ["better","ˈbetər","mejor","bétar"],
    ["easier","ˈiːziər","más fácil","íisiar"],
    ["good at","ɡʊd æt","bueno en","gud at"],
    ["afraid","əˈfreɪd","asustado","afréid"],
    ["nervous","ˈnɜːrvəs","nervioso","nérvas"],
    ["wonderful","ˈwʌndərfl","maravillosas","uánderful"],
    ["stories","ˈstɔːriz","historias","stóoris"],
    ["stage","steɪdʒ","escenario","stéich"],
    ["show","ʃoʊ","espectáculo","shóu"],
    ["festival","ˈfestɪvl","festival","féstival"],
    ["group","ɡruːp","grupo","grúup"],
    ["guitar","ɡɪˈtɑːr","guitarra","guitár"],
    ["instrument","ˈɪnstrəmənt","instrumento","ínstrament"],
    ["singer","ˈsɪŋər","cantante","sínguer"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["weeks","wiːks","semanas","uíks"],
    ["eighty","ˈeɪti","ochenta","éiti"],
    ["together","təˈɡeðər","juntos","tuguéder"],
    ["problem","ˈprɑːbləm","problema","prábulem"],
    ["fun","fʌn","divertido","fan"],
    ["fast","fæst","rápido","fast"],
    ["only","ˈoʊnli","solo","óunli"],
    ["at all","ət ɔːl","en absoluto","at ol"],
    ["in front of","ɪn frʌnt əv","delante de","in front av"]
  ],
  preguntas: [
    { q:"What can Ana do?",
      ops:["Sing and dance","Play the guitar","Climb and run"], ok:0,
      pista:"Segundo párrafo: canta muy bien y además es buena en otra cosa." },
    { q:"Why can't David's grandfather be alone on the stage?",
      ops:["Because he can't tell stories","Because he gets nervous in front of people","Because he is not in the group"], ok:1,
      pista:"Tercer párrafo: el problema no son sus historias." },
    { q:"Why do Kevin and David practise together?",
      ops:["Because David teaches him well","Because both want to learn the guitar","Because Ana asks them"], ok:1,
      pista:"Último párrafo: ninguno de los dos toca bien todavía." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-14"] = {
  meta: {
    id: "a1-14", nivel: "A1", numero: 14,
    titulo: "Habilidades: can y can't",
    descriptor: "Puedo decir lo que sé y no sé hacer, preguntar por las habilidades de otros, y pedir ayuda o permiso de forma sencilla.",
    escena: "Kevin & David · patio del instituto, preparando el festival",
    personajeIA: "Kevin", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
