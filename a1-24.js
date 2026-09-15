/* ============================================================
   LECCIÓN A1-24 · Repaso y examen A1
   Reparto: Mr. Ortega toma el examen oral. Final de temporada: la
   lectura recoge a todo el reparto y los cuatro tiempos del nivel.
   Los seis apartados de gramática son mapas de repaso, no materia
   nueva: es la lección donde todo A1 se ve junto.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El examen", items:[
    ["exam","ɪɡˈzæm","examen","igsám"],["oral","ˈɔːrəl","oral","óral"],
    ["written","ˈrɪtn","escrito","rítn"],["question","ˈkwestʃən","pregunta","kuéschon"],
    ["answer","ˈænsər","respuesta","ánsar"],["mark","mɑːrk","nota","mark"],
    ["to pass","tuː pæs","aprobar","tu pas"],["to fail","tuː feɪl","reprobar","tu féil"],
    ["level","ˈlevl","nivel","lévl"],["certificate","sərˈtɪfɪkət","certificado","sertífiket"]
  ]},
  {g:"Hablar de uno mismo", items:[
    ["My name is…","maɪ neɪm ɪz","me llamo…","mái néim is"],["I'm from…","aɪm frʌm","soy de…","áim from"],
    ["I live in…","aɪ lɪv ɪn","vivo en…","ái liv in"],["I study…","aɪ ˈstʌdi","estudio…","ái stádi"],
    ["I work…","aɪ wɜːrk","trabajo…","ái uérk"],["I like…","aɪ laɪk","me gusta…","ái láik"],
    ["I can…","aɪ kæn","sé, puedo…","ái kan"],["I'd like…","aɪd laɪk","quisiera…","áid láik"],
    ["I'm going to…","aɪm ˈɡoʊɪŋ tuː","voy a…","áim góing tu"],["I was…","aɪ wʌz","estuve, era…","ái uás"]
  ]},
  {g:"Conectar y organizar", items:[
    ["and","ænd","y","and"],["but","bʌt","pero","bat"],
    ["so","soʊ","así que","sóu"],["because","bɪˈkɔːz","porque","bikóos"],
    ["then","ðen","luego","den"],["also","ˈɔːlsoʊ","también","ólsou"],
    ["for example","fɔːr ɪɡˈzæmpl","por ejemplo","for igsámpl"],["of course","əv ˈkɔːrs","por supuesto","av kórs"],
    ["I think","aɪ θɪŋk","creo que","ái zink"],["in my opinion","ɪn maɪ əˈpɪnjən","en mi opinión","in mái apínion"]
  ]},
  {g:"Cuando no sabes qué decir", items:[
    ["I don't know","aɪ doʊnt noʊ","no sé","ái dóunt nóu"],["I'm not sure","aɪm nɑːt ʃʊr","no estoy seguro","áim nat shur"],
    ["How do you say…?","haʊ duː juː seɪ","¿cómo se dice…?","jáu du iú séi"],["What does … mean?","wʌt dʌz miːn","¿qué significa…?","uát das míin"],
    ["I don't understand","aɪ doʊnt ˌʌndərˈstænd","no entiendo","ái dóunt anderstánd"],["Could you repeat?","kʊd juː rɪˈpiːt","¿puede repetir?","kud iú ripíit"],
    ["Let me think","let miː θɪŋk","déjeme pensar","let mi zink"],["It's like…","ɪts laɪk","es como…","its láik"],
    ["I mean…","aɪ miːn","quiero decir…","ái míin"],["More or less","mɔːr ɔːr les","más o menos","mor or les"]
  ]}
];

const PRONKEY = [
  ["z","Lengua entre los dientes, sin voz. El sonido que no existe en español.","think &rarr; zink"],
  ["j","Aire por la garganta, sin raspar. Nunca la <i>j</i> española.","how &rarr; jáu"],
  ["sh","Como pedir silencio.","sure &rarr; shur"],
  ["ch","Como en «coche».","question &rarr; kuéschon"],
  ["v","Labio de abajo contra los dientes de arriba. No es una <i>b</i>.","level &rarr; lévl"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","work &rarr; uérk"],
  ["r final","Apenas se toca; nunca vibra.","answer &rarr; ánsar"],
  ["-ed","Suena <b>t</b>, <b>d</b> o <b>id</b> según lo que venga antes.","passed &rarr; past"],
  ["s de tercera","Suena <b>s</b>, <b>z</b> o <b>is</b> según lo que venga antes.","studies &rarr; stádis"]
];

const VERBS = [
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to have","irr","have · has","had","will have","tener"],
  ["to go","irr","go · goes","went","will go","ir"],
  ["to do","irr","do · does","did","will do","hacer"],
  ["to say","irr","say · says","said","will say","decir"],
  ["to get","irr","get · gets","got","will get","conseguir, llegar"],
  ["to make","irr","make · makes","made","will make","hacer, fabricar"],
  ["to know","irr","know · knows","knew","will know","saber, conocer"],
  ["to take","irr","take · takes","took","will take","tomar, llevar"],
  ["to see","irr","see · sees","saw","will see","ver"],
  ["to come","irr","come · comes","came","will come","venir"],
  ["to think","irr","think · thinks","thought","will think","pensar"]
];

const GRAMMAR = [
  {t:"Los cuatro tiempos de A1", s:"todo el nivel en una tabla",
   p:"Con estos cuatro tiempos ya puedes hablar de tu vida entera. Son los que entran en el examen y los que hay que tener automatizados antes de pasar a A2.",
   table:{head:["Tiempo","Para qué","Ejemplo"], rows:[
     ["Presente simple","rutinas y hechos","I get up at six. She studies English."],
     ["Presente continuo","lo que pasa ahora","I'm answering your questions."],
     ["Pasado simple","lo que pasó y terminó","I flew to Toronto. We ate at a restaurant."],
     ["Going to / will","planes y predicciones","I'm going to study A2. It will rain."]
   ]},
   aviso:["El error de nivel, no de gramática","Usar el presente para contar el pasado (<span class='wrong'>Yesterday I go to the market</span>) es lo que más baja la nota en un oral A1. El tiempo verbal es lo primero que evalúa un examinador."]},

  {t:"El auxiliar manda", s:"do · does · did · be · can · will",
   p:"Toda la gramática de A1 se resume en una idea: <b>identifica el auxiliar y ya sabes cómo negar, preguntar y responder</b>. El verbo principal no se toca.",
   table:{head:["Frase","Auxiliar","Negativo","Pregunta"], rows:[
     ["I work here.","do","I don't work here.","Do you work here?"],
     ["She works here.","does","She doesn't work here.","Does she work here?"],
     ["I worked here.","did","I didn't work here.","Did you work here?"],
     ["I am tired.","be (solo)","I'm not tired.","Are you tired?"],
     ["I can swim.","can (solo)","I can't swim.","Can you swim?"],
     ["It will rain.","will (solo)","It won't rain.","Will it rain?"]
   ]},
   aviso:["<i>Be</i>, <i>can</i> y <i>will</i> se bastan solos","No necesitan <i>do</i> para nada: se invierten ellos mismos. Los demás verbos sí lo necesitan."]},

  {t:"Las cinco formas de preguntar", s:"y la respuesta que le toca a cada una",
   p:"Toda pregunta de A1 cabe en uno de estos cinco moldes.",
   table:{head:["Molde","Ejemplo","Respuesta"], rows:[
     ["Sí/no con auxiliar","Do you live here?","Yes, I do. / No, I don't."],
     ["Sí/no con <i>be</i>","Are you nervous?","Yes, I am. / No, I'm not."],
     ["WH- + auxiliar","Where do you live?","In Tegucigalpa."],
     ["Preposición al final","Where are you from?","From Honduras."],
     ["Sobre el sujeto","Who lives here?","I do. (sin auxiliar en la pregunta)"]
   ]},
   aviso:["Cuando la pregunta es por el sujeto, no hay <i>do</i>","<span class='right'>Who lives here?</span>, no <span class='wrong'>Who does live here?</span>. Es la única pregunta de A1 que se construye como una afirmación."]},

  {t:"Artículos y cuantificadores", s:"a · the · some · any · much · many",
   p:"Cuándo poner algo delante del sustantivo, y qué poner. Es el cuadro que más se consulta en A1.",
   table:{head:["Situación","Se usa","Ejemplo"], rows:[
     ["Contable singular, primera mención","a / an","I have a question."],
     ["Ya sabemos cuál","the","The question was difficult."],
     ["Incontable o plural, afirmativo","some","We have some bread."],
     ["Incontable o plural, negativo o pregunta","any","We don't have any bread."],
     ["Cantidad, incontable","much / a lot of","How much time? A lot of time."],
     ["Cantidad, contable","many / a lot of","How many people? A lot of people."],
     ["En general, sin artículo","—","I like coffee. Life is short."]
   ]},
   aviso:["El artículo de más","<span class='wrong'>I like the coffee.</span> significa «me gusta <i>ese</i> café». Para hablar en general, el inglés no pone nada: <span class='right'>I like coffee.</span>"]},

  {t:"El mapa de las preposiciones", s:"in · on · at, de menor a mayor precisión",
   p:"Las mismas tres palabras sirven para el tiempo y para el lugar, y en los dos casos van de lo grande a lo pequeño.",
   table:{head:["","IN (lo grande)","ON (la superficie o el día)","AT (el punto exacto)"], rows:[
     ["Tiempo","in December, in 2026","on Monday, on my birthday","at six, at night"],
     ["Lugar","in Honduras, in the room","on the table, on the bus","at the station, at home"],
     ["Otras","by bus, by card","for me, for two hours","with my sister, to Toronto"]
   ]},
   aviso:["Las tres que no siguen la regla","<b>at home</b>, <b>at night</b> y <b>on foot</b> se memorizan tal cual. Y <i>home</i> después de <i>go</i> no lleva nada: <span class='right'>go home</span>."]},

  {t:"Los doce errores que más se repiten", s:"la lista para revisar antes del examen",
   p:"Todos salen de traducir del español. Si los tienes vigilados, tu inglés sube un escalón sin aprender nada nuevo.",
   table:{head:["No se dice","Se dice"], rows:[
     ["<span class='wrong'>I have 22 years.</span>","<span class='right'>I am 22.</span>"],
     ["<span class='wrong'>She work here.</span>","<span class='right'>She works here.</span>"],
     ["<span class='wrong'>I didn't went.</span>","<span class='right'>I didn't go.</span>"],
     ["<span class='wrong'>I am agree.</span>","<span class='right'>I agree.</span>"],
     ["<span class='wrong'>I have hungry.</span>","<span class='right'>I am hungry.</span>"],
     ["<span class='wrong'>Is raining.</span>","<span class='right'>It is raining.</span>"],
     ["<span class='wrong'>I like very much football.</span>","<span class='right'>I like football very much.</span>"],
     ["<span class='wrong'>People is nice.</span>","<span class='right'>People are nice.</span>"],
     ["<span class='wrong'>I use it for study.</span>","<span class='right'>I use it to study.</span>"],
     ["<span class='wrong'>a bread</span>","<span class='right'>some bread</span>"],
     ["<span class='wrong'>the woman with the blue dress</span>","<span class='right'>the woman in the blue dress</span>"],
     ["<span class='wrong'>I am David</span> (al teléfono)","<span class='right'>This is David.</span>"]
   ]},
   aviso:["Cómo se corrigen","No se corrigen estudiándolos: se corrigen <b>oyéndose</b>. Grábate un minuto hablando, escúchalo y busca sólo estos doce. En dos semanas desaparecen."]}
];

/* Mr. Ortega (A) toma el examen oral de A1 a David (B) */
const DIALOGUE = [
 {s:"A", ipa:"ɡʊd ˈmɔːrnɪŋ ˈdeɪvɪd sɪt daʊn pliːz ðɪs ɪz jʊr eɪ wʌn ˈɔːrəl ɪɡˈzæm", p:"gud mórning, déivid. sit dáun, plíis. dis is iór éi-uán óral igsám",
  b:[["Good morning, David.","Buenos días, David."],["Sit down, please.","Siéntate, por favor."],["This is your A1","Este es tu examen"],["oral exam.","oral de A1."]]},
 {s:"B", ipa:"ɡʊd ˈmɔːrnɪŋ ˈmɪstər ɔːrˈteɪɡə aɪm ə bɪt ˈnɜːrvəs", p:"gud mórning, míster Ortéga. áim a bit nérvas",
  b:[["Good morning,","Buenos días,"],["Mr. Ortega.","señor Ortega."],["I'm a bit nervous.","Estoy un poco nervioso."]],
  n:"<b>A bit</b> sólo con adjetivos negativos, como viste en la descripción de personas."},
 {s:"A", ipa:"doʊnt ˈwʌri twelv ˈkwestʃənz ænd juː kæn ɑːsk miː tuː rɪˈpiːt ˈeni əv ðem ˈredi", p:"dóunt uóri. tuélv kuéschons, and iú kan ask mi tu ripíit éni av dem. rédi",
  b:[["Don't worry.","No te preocupes."],["Twelve questions,","Doce preguntas,"],["and you can ask me","y me puedes pedir"],["to repeat any of them.","que repita cualquiera."],["Ready?","¿Listo?"]],
  n:"<b>Ask me to repeat</b>: persona + <i>to</i> + verbo, como en la lección de invitaciones."},
 {s:"B", ipa:"ˈredi", p:"rédi",
  b:[["Ready.","Listo."]]},
 {s:"A", ipa:"fɜːrst tel miː əˈbaʊt jɔːrˈself", p:"ferst, tel mi abáut iorsélf",
  b:[["First,","Primero,"],["tell me","háblame"],["about yourself.","de ti."]]},
 {s:"B", ipa:"maɪ neɪm ɪz ˈdeɪvɪd ænˈdrɑːde aɪm ˈtwenti tuː ænd aɪm frʌm təˌɡuːsɪˈɡɑːlpə aɪ lɪv wɪð maɪ ˈfæməli ænd aɪ ˈstʌdi ˈɪŋɡlɪʃ", p:"mái néim is Déivid Andráde. áim tuénti-tu and áim from Tegusigálpa. ái liv uid mái fámili and ái stádi ínglish",
  b:[["My name is","Me llamo"],["David Andrade.","David Andrade."],["I'm twenty-two","Tengo veintidós"],["and I'm from","y soy de"],["Tegucigalpa.","Tegucigalpa."],["I live with my family","Vivo con mi familia"],["and I study English.","y estudio inglés."]],
  n:"<b>I'm twenty-two</b>, no <span class='wrong'>I have twenty-two years</span>. La edad se <i>es</i>."},
 {s:"A", ipa:"ɡʊd wʌt duː juː duː ˈevri ˈmɔːrnɪŋ", p:"gud. uát du iú du évri mórning",
  b:[["Good.","Bien."],["What do you do","¿Qué haces"],["every morning?","cada mañana?"]],
  n:"Presente simple: rutina. El auxiliar es <i>do</i> y el verbo se queda en base."},
 {s:"B", ipa:"aɪ ɡet ʌp æt sɪks aɪ hæv ˈbrekfəst wɪð maɪ ˈsɪstər ænd aɪ teɪk ðə bʌs æt ˈsevn", p:"ái guet ap at siks, ái jav brékfast uid mái sístar, and ái téik da bas at sévn",
  b:[["I get up at six,","Me levanto a las seis,"],["I have breakfast","desayuno"],["with my sister","con mi hermana"],["and I take the bus","y tomo el bus"],["at seven.","a las siete."]],
  n:"<b>Have breakfast</b>, sin artículo: las comidas van desnudas."},
 {s:"A", ipa:"ænd wʌt ɑːr juː ˈduːɪŋ æt ðə ˈmoʊmənt hɪr ɪn ðɪs ruːm", p:"and uát ar iú dúing at da móument. jíar, in dis rúum",
  b:[["And what are you doing","¿Y qué estás haciendo"],["at the moment?","en este momento?"],["Here, in this room.","Aquí, en esta sala."]],
  n:"Cambio de tiempo: <b>presente continuo</b>, porque pregunta por ahora mismo."},
 {s:"B", ipa:"aɪm ˈænsərɪŋ jʊr ˈkwestʃənz ænd aɪm ˈtraɪɪŋ nɑːt tuː meɪk mɪˈsteɪks", p:"áim ánsaring iór kuéschons, and áim tráiing nat tu méik mistéiks",
  b:[["I'm answering","Estoy contestando"],["your questions","sus preguntas"],["and I'm trying","y estoy intentando"],["not to make mistakes.","no cometer errores."]]},
 {s:"A", ipa:"ˈveri ɡʊd naʊ ðə pæst wʌt dɪd juː duː læst mʌnθ", p:"véri gud. náu da past: uát did iú du last manz",
  b:[["Very good.","Muy bien."],["Now the past:","Ahora el pasado:"],["what did you do","¿qué hiciste"],["last month?","el mes pasado?"]]},
 {s:"B", ipa:"aɪ fluː tuː təˈrɑːntoʊ aɪ sɔː ˈserə wi went ˌdaʊnˈtaʊn ænd wi eɪt ɪn ə lɑːt əv ˈpleɪsɪz", p:"ái flúu tu Taróntou. ái sóo Séra, ui uént dauntáun and ui éit in a lat av pléisis",
  b:[["I flew to Toronto.","Volé a Toronto."],["I saw Sarah,","Vi a Sarah,"],["we went downtown","fuimos al centro"],["and we ate","y comimos"],["in a lot of places.","en un montón de lugares."]],
  n:"Cuatro irregulares seguidos: <b>flew, saw, went, ate</b>. Ninguno lleva <i>-ed</i>."},
 {s:"A", ipa:"wʌz ɪt ə ɡʊd trɪp", p:"uás it a gud trip",
  b:[["Was it","¿Fue"],["a good trip?","un buen viaje?"]]},
 {s:"B", ipa:"ɪt wʌz bʌt maɪ ˈsuːtkeɪs wʌz tuː ˈhevi soʊ aɪ tʊk aʊt θriː ˈkiːloʊz æt ðə ˈkaʊntər", p:"it uás. bat mái súutkeis uás tu jévi, sóu ái tuk áut zri kílous at da káuntar",
  b:[["It was.","Lo fue."],["But my suitcase","Pero mi maleta"],["was too heavy,","pesaba demasiado,"],["so I took out","así que saqué"],["three kilos","tres kilos"],["at the counter.","en el mostrador."]],
  n:"<b>Too heavy</b> y el conector <b>so</b> para la consecuencia."},
 {s:"A", ipa:"ænd wʌt ɑːr juː ˈɡoʊɪŋ tuː duː nekst mʌnθ", p:"and uát ar iú góing tu du nekst manz",
  b:[["And what are you going to do","¿Y qué vas a hacer"],["next month?","el mes que viene?"]]},
 {s:"B", ipa:"aɪm ˈɡoʊɪŋ tuː ˈstʌdi fɔːr eɪ tuː ænd ɪn dɪˈsembər ˈserə ɪz ˈɡoʊɪŋ tuː ˈvɪzɪt ʌs", p:"áim góing tu stádi for éi-tu, and in disémbar Séra is góing tu vísit as",
  b:[["I'm going to study","Voy a estudiar"],["for A2,","para A2,"],["and in December","y en diciembre"],["Sarah is going to visit us.","Sarah va a visitarnos."]],
  n:"<b>Going to</b> porque los dos son planes ya decididos."},
 {s:"A", ipa:"kæn juː kʊk", p:"kan iú kuk",
  b:[["Can you cook?","¿Sabes cocinar?"]]},
 {s:"B", ipa:"ə ˈlɪtl aɪ kæn meɪk raɪs ænd eɡz aɪ kɑːnt meɪk ə keɪk maɪ ˈkʌzn ˈniːkoʊ ɪz ˈbetər", p:"a lítl. ái kan méik ráis and egs. ái kant méik a kéik: mái kásn Níkou is bétar",
  b:[["A little.","Un poco."],["I can make","Sé hacer"],["rice and eggs.","arroz y huevos."],["I can't make a cake:","No sé hacer un pastel:"],["my cousin Nico is better.","mi primo Nico es mejor."]]},
 {s:"A", ipa:"wʌt duː juː laɪk ˈduːɪŋ æt ðə ˈwiːkend", p:"uát du iú láik dúing at da uíkend",
  b:[["What do you like doing","¿Qué te gusta hacer"],["at the weekend?","el fin de semana?"]],
  n:"Tras <b>like</b>, el otro verbo va en <i>-ing</i>."},
 {s:"B", ipa:"aɪ laɪk ˈpleɪɪŋ ˈfʊtbɔːl ænd aɪ lʌv ˈsliːpɪŋ aɪ doʊnt laɪk ˈɡetɪŋ ʌp ˈɜːrli", p:"ái láik pléing fútbol and ái lav slíiping. ái dóunt láik guéting ap érli",
  b:[["I like playing football","Me gusta jugar fútbol"],["and I love sleeping.","y me encanta dormir."],["I don't like","No me gusta"],["getting up early.","levantarme temprano."]]},
 {s:"A", ipa:"læst ˈkwestʃən dɪˈskraɪb ˈsʌmbɑːdi ɪn ðɪs skuːl", p:"last kuéschon. diskráib sámbadi in dis skúul",
  b:[["Last question.","Última pregunta."],["Describe somebody","Describe a alguien"],["in this school.","de esta escuela."]]},
 {s:"B", ipa:"hiːz tɔːl hi hæz ɡreɪ her ænd ə strɔːŋ vɔɪs ænd ˈevribɑːdi θɪŋks hi ɪz strɪkt hi ˈɪznt", p:"jíis tol, ji jas gréi jér and a strong vóis, and évribadi zinks ji is strikt. ji ísnt",
  b:[["He's tall,","Es alto,"],["he has grey hair","tiene el pelo canoso"],["and a strong voice,","y una voz fuerte,"],["and everybody thinks","y todo el mundo cree"],["he is strict.","que es estricto."],["He isn't.","No lo es."]],
  n:"<b>He is</b> con los adjetivos, <b>he has</b> con los rasgos: el reparto de la lección 19."},
 {s:"A", ipa:"ðæt ɪz ə ˈveri ɡʊd ˈænsər juː pæs ˈdeɪvɪd ˈwelkəm tuː eɪ tuː", p:"dat is a véri gud ánsar. iú pas, déivid. uélkam tu éi-tu",
  b:[["That is","Esa es"],["a very good answer.","una muy buena respuesta."],["You pass, David.","Apruebas, David."],["Welcome to A2.","Bienvenido a A2."]]},
 {s:"B", ipa:"θæŋk juː ðen aɪm ˈɡoʊɪŋ tuː ˈseləbreɪt æt ˈmɪsɪz ˈkæstroʊz ænd juː ɑːr ˌɪnˈvaɪtɪd", p:"zánk iú. den áim góing tu sélabreit at mísis Kástros, and iú ar inváitid",
  b:[["Thank you.","Gracias."],["Then I'm going to celebrate","Entonces voy a celebrarlo"],["at Mrs. Castro's,","en casa de la señora Castro,"],["and you are invited.","y usted está invitado."]],
  n:"<b>At Mrs. Castro's</b>: el genitivo de lugar, sin la palabra <i>house</i>."}
];

const LECTURA = {
  titulo: "One year on this street",
  entradilla: "El final de la temporada: un año entero contado con los cuatro tiempos del nivel. Presente simple para lo que sigue igual, pasado para lo que ocurrió, <i>going to</i> y <i>will</i> para lo que viene. Si entiendes este texto sin ayuda, A1 está cerrado.",
  parrafos: [
    "One year ago I needed ten seconds to say my own name in English. Today I passed my A1 exam. I answered twelve questions about my routine, my last trip and my plans, and I only asked Mr. Ortega to repeat one of them.",
    "Ana came back from Roatán with two hundred photos and a sunburn. Pablo and Nico ate half the cake at her birthday party and they danced until late. Mrs. Castro heard the noise from her shop and she didn't say anything, because she was there too.",
    "Kevin repaired my phone in five minutes and he never charged me anything. Tom and Emma arrived from Ireland in September, and now they speak Spanish very well. Mr. Ortega says the same thing to everybody: study every day, and speak before you are ready.",
    "Next month I am going to start A2. In December Sarah is going to fly here, Luis and Marta are going to celebrate twenty years together, and the whole street is going to be at that party. I will not be nervous this time. Well — probably not."
  ],
  glosario: [
    ["needed","ˈniːdɪd","necesitaba","níidid"],
    ["passed","pæst","aprobé","past"],
    ["answered","ˈænsərd","contesté","ánsard"],
    ["asked","æskt","le pedí","askt"],
    ["repeat","rɪˈpiːt","repetir","ripíit"],
    ["came back","keɪm bæk","volvió","kéim bak"],
    ["ate","eɪt","se comieron","éit"],
    ["danced","dænst","bailaron","danst"],
    ["heard","hɜːrd","oyó","jerd"],
    ["didn't say","ˈdɪdnt seɪ","no dijo","dídnt séi"],
    ["repaired","rɪˈperd","arregló","ripérd"],
    ["charged","tʃɑːrdʒd","cobró","charchd"],
    ["arrived","əˈraɪvd","llegaron","aráivd"],
    ["speak","spiːk","hablan","spíik"],
    ["says","sez","dice","ses"],
    ["study","ˈstʌdi","estudia","stádi"],
    ["am going to start","æm ˈɡoʊɪŋ tuː stɑːrt","voy a empezar","am góing tu start"],
    ["is going to fly","ɪz ˈɡoʊɪŋ tuː flaɪ","va a volar","is góing tu flái"],
    ["are going to celebrate","ɑːr ˈɡoʊɪŋ tuː ˈseləbreɪt","van a celebrar","ar góing tu sélabreit"],
    ["is going to be","ɪz ˈɡoʊɪŋ tuː biː","va a estar","is góing tu bi"],
    ["will not be","wɪl nɑːt biː","no estaré","uíl nat bi"],
    ["one year ago","wʌn jɪr əˈɡoʊ","hace un año","uán íer agóu"],
    ["seconds","ˈsekəndz","segundos","sékonds"],
    ["own","oʊn","propio","óun"],
    ["exam","ɪɡˈzæm","examen","igsám"],
    ["questions","ˈkwestʃənz","preguntas","kuéschons"],
    ["routine","ruːˈtiːn","rutina","rutíin"],
    ["trip","trɪp","viaje","trip"],
    ["plans","plænz","planes","plans"],
    ["photos","ˈfoʊtoʊz","fotos","fóutous"],
    ["sunburn","ˈsʌnbɜːrn","quemadura de sol","sánbern"],
    ["half","hæf","la mitad de","jaf"],
    ["cake","keɪk","pastel","kéik"],
    ["birthday party","ˈbɜːrθdeɪ ˈpɑːrti","fiesta de cumpleaños","bérzdei párti"],
    ["noise","nɔɪz","ruido","nóis"],
    ["shop","ʃɑːp","tienda","shap"],
    ["phone","foʊn","teléfono","fóun"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["street","striːt","calle","stríit"],
    ["party","ˈpɑːrti","fiesta","párti"],
    ["twenty years","ˈtwenti jɪrz","veinte años","tuénti íers"],
    ["together","təˈɡeðər","juntos","tuguéder"],
    ["whole","hoʊl","entera","jóul"],
    ["nervous","ˈnɜːrvəs","nervioso","nérvas"],
    ["ready","ˈredi","listo","rédi"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["the same thing","ðə seɪm θɪŋ","lo mismo","da séim zing"],
    ["until late","ənˈtɪl leɪt","hasta tarde","antíl léit"],
    ["this time","ðɪs taɪm","esta vez","dis táim"],
    ["next month","nekst mʌnθ","el mes que viene","nekst manz"],
    ["last trip","læst trɪp","último viaje","last trip"],
    ["September","sepˈtembər","septiembre","septémbar"],
    ["two hundred","tuː ˈhʌndrəd","doscientas","tu jándred"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["well","wel","bueno; bien","uel"]
  ],
  preguntas: [
    { q:"How many questions did David ask Mr. Ortega to repeat?",
      ops:["None","One","Twelve"], ok:1,
      pista:"Primer párrafo, última frase. Doce es otra cosa." },
    { q:"Who heard the noise from the party?",
      ops:["Mrs. Castro","Kevin","Dr. Reyes"], ok:0,
      pista:"Segundo párrafo: lo oyó desde su tienda y no dijo nada." },
    { q:"What is going to happen in December?",
      ops:["David is going to fly to Canada","Tom and Emma are going to leave","Sarah is going to fly here and there is going to be a party"], ok:2,
      pista:"Cuarto párrafo: hay tres planes y dos ocurren en diciembre." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-24"] = {
  meta: {
    id: "a1-24", nivel: "A1", numero: 24,
    titulo: "Repaso y examen A1",
    descriptor: "Puedo hablar de mí, de mi rutina, de lo que hice y de lo que voy a hacer, con los cuatro tiempos del nivel y pidiendo ayuda cuando me falta una palabra.",
    escena: "Mr. Ortega & David · el examen oral de A1, en el aula vacía",
    personajeIA: "Mr. Ortega", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
