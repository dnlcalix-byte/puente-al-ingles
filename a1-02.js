/* ============================================================
   LECCIÓN A1-02 · Familia y posesiones
   Copia de la plantilla A1-01: sólo cambian los datos.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La familia", items:[
    ["family","ˈfæməli","familia","fámili"],["mother","ˈmʌðər","madre","máder"],
    ["father","ˈfɑːðər","padre","fáder"],["parents","ˈperənts","padres","pérents"],
    ["brother","ˈbrʌðər","hermano","bráder"],["sister","ˈsɪstər","hermana","síster"],
    ["son","sʌn","hijo","san"],["daughter","ˈdɔːtər","hija","dóter"],
    ["grandmother","ˈɡrænmʌðər","abuela","gránmader"],["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["wife","waɪf","esposa","uáif"],["husband","ˈhʌzbənd","esposo","jásband"],
    ["aunt","ænt","tía","ant"],["uncle","ˈʌŋkl","tío","áncl"],
    ["cousin","ˈkʌzn","primo, prima","kásn"],["baby","ˈbeɪbi","bebé","béibi"]
  ]},
  {g:"Cosas de casa", items:[
    ["house","haʊs","casa","jáus"],["car","kɑːr","carro, coche","kar"],
    ["dog","dɔːɡ","perro","dog"],["cat","kæt","gato","kat"],
    ["phone","foʊn","teléfono","fóun"],["photo","ˈfoʊtoʊ","foto","fóutou"],
    ["book","bʊk","libro","buk"],["bag","bæɡ","bolso, mochila","bag"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],["kitchen","ˈkɪtʃɪn","cocina","kíchen"]
  ]},
  {g:"Describir", items:[
    ["big","bɪɡ","grande","big"],["old","oʊld","viejo, mayor","óuld"],
    ["young","jʌŋ","joven","iáng"],["tall","tɔːl","alto","tol"],
    ["short","ʃɔːrt","bajo, corto","short"],["funny","ˈfʌni","gracioso","fáni"],
    ["quiet","ˈkwaɪət","callado, tranquilo","kuáiet"],["busy","ˈbɪzi","ocupado","bísi"]
  ]},
  {g:"Preguntar y responder", items:[
    ["who","huː","quién","jú"],["how many","haʊ ˈmeni","cuántos","jáu méni"],
    ["there is","ðer ɪz","hay (singular)","der is"],["there are","ðer ɑːr","hay (plural)","der ar"],
    ["really","ˈrɪəli","de verdad, en serio","ríili"],["of course","əv ˈkɔːrs","por supuesto","av kórs"]
  ]},
  {g:"Números 1–10", items:[
    ["one","wʌn","uno","uán"],["two","tuː","dos","túu"],["three","θriː","tres","zríi"],
    ["four","fɔːr","cuatro","fóor"],["five","faɪv","cinco","fáiv"],["six","sɪks","seis","siks"],
    ["seven","ˈsevn","siete","sévn"],["eight","eɪt","ocho","éit"],["nine","naɪn","nueve","náin"],
    ["ten","ten","diez","ten"]
  ]}
];

const PRONKEY = [
  ["j","El aire sale por la garganta, suave. <b>No</b> es la <i>j</i> de «jamón».","husband &rarr; jásband"],
  ["z","La punta de la lengua asoma <b>entre los dientes</b>, sin voz.","three &rarr; zríi"],
  ["d","En <i>mother</i>, <i>father</i>, <i>brother</i>: lengua entre los dientes, <b>con voz</b>. Es una <i>d</i> blandísima.","mother &rarr; máder"],
  ["sh","Como el sonido de «Shakira».","short &rarr; short"],
  ["ch","Como en «coche».","kitchen &rarr; kíchen"],
  ["v","Labio de abajo contra los dientes de arriba. <b>No</b> es una <i>b</i>.","five &rarr; fáiv"],
  ["u + vocal","Suena como la <i>w</i> inglesa, igual que en «huevo».","one &rarr; uán"],
  ["ng","La <i>n</i> se queda atrás, en el velo del paladar, sin cerrar los labios.","young &rarr; iáng"],
  ["íi úu óo","Vocal doble = vocal <b>larga</b>: sostén el sonido.","three &rarr; zríi"]
];

const VERBS = [
  ["to be","irr","am / is · are","was / were","will be","ser, estar"],
  ["to have","irr","have · has","had","will have","tener"],
  ["to live","reg","live · lives","lived","will live","vivir"],
  ["to work","reg","work · works","worked","will work","trabajar"],
  ["to like","reg","like · likes","liked","will like","gustar"],
  ["to love","reg","love · loves","loved","will love","querer, encantar"],
  ["to play","reg","play · plays","played","will play","jugar, tocar"],
  ["to help","reg","help · helps","helped","will help","ayudar"],
  ["to look","reg","look · looks","looked","will look","mirar, parecer"],
  ["to know","irr","know · knows","knew","will know","saber, conocer"],
  ["to want","reg","want · wants","wanted","will want","querer"]
];

const GRAMMAR = [
  {t:"El verbo HAVE: tener", s:"have / has",
   p:"En inglés la posesión se dice con <b>have</b>. Sólo la tercera persona cambia: <b>has</b>. La pregunta y la negación necesitan el auxiliar <i>do / does</i>.",
   table:{head:["Función","Estructura","Ejemplo"], rows:[
     ["Afirmativo","I / you / we / they + have","I have two sisters."],
     ["Afirmativo 3ª","he / she / it + has","She has a big family."],
     ["Negativo","do not / does not + have","He does not have a car."],
     ["Pregunta","Do / Does + sujeto + have","Do you have a dog?"]
   ]},
   aviso:["El auxiliar se lleva la marca","<span class='wrong'>Does she has a cat?</span> &nbsp;&rarr;&nbsp; <span class='right'>Does she have a cat?</span> Si <i>does</i> ya marca la tercera persona, <i>have</i> vuelve a su forma base."]},

  {t:"El genitivo sajón", s:"'s",
   p:"Para decir «el hermano de María», el inglés invierte el orden y añade <b>'s</b> al poseedor: <i>Maria<b>'s</b> brother</i>. El poseedor va primero, siempre.",
   chips:[["my sister's dog","el perro de mi hermana"],["David's family","la familia de David"],["the baby's photo","la foto del bebé"],["my parents' house","la casa de mis padres"]],
   aviso:["Orden invertido respecto al español","El español dice «la casa <u>de</u> mi padre»; el inglés dice «<u>my father's</u> house». Nunca <span class='wrong'>the house of my father</span> para personas."]},

  {t:"Plurales", s:"-s, -es, irregulares",
   p:"La regla general es añadir <b>-s</b>. Tras <i>s, x, ch, sh</i> se añade <b>-es</b>. Y un puñado de sustantivos cambian por completo y hay que memorizarlos.",
   table:{head:["Regla","Singular","Plural"], rows:[
     ["General: +s","brother","brothers"],
     ["Termina en -s, -ch, -sh: +es","watch","watches"],
     ["Consonante + y: -ies","baby","babies"],
     ["Irregular","child","children"],
     ["Irregular","person","people"]
   ]}},

  {t:"Hay: THERE IS y THERE ARE", s:"there is / there are",
   p:"Para decir que algo existe: <b>there is</b> con singular y <b>there are</b> con plural. Fíjate en que el inglés distingue número donde el español usa siempre «hay».",
   chips:[["There is a dog","Hay un perro"],["There are four people","Hay cuatro personas"],["Is there a garden?","¿Hay jardín?"],["There isn't a car","No hay carro"]],
   aviso:["Una sola palabra en español, dos en inglés","«Hay un perro» y «hay dos perros» se dicen igual en español, pero en inglés son <b>there is</b> y <b>there are</b>. Equivocarse aquí se oye mucho."]},

  {t:"Adjetivos posesivos y pronombres", s:"my, your, his, her…",
   p:"Recuerda que no concuerdan con lo poseído sino con el poseedor, y que nunca llevan <i>-s</i>: <i>my brothers</i>, no <span class='wrong'>mys brothers</span>.",
   chips:[["my","mi"],["your","tu"],["his","su (de él)"],["her","su (de ella)"],["its","su (de ello)"],["our","nuestro"],["their","su (de ellos)"]],
   aviso:["<i>His</i> y <i>her</i> dependen del dueño","«Su hermana» es <b>his sister</b> si el dueño es hombre y <b>her sister</b> si es mujer. El español no lo distingue; el inglés sí, y siempre."]},

  {t:"Preguntar cantidad", s:"How many…?",
   p:"<b>How many</b> + sustantivo en plural + <i>do you have?</i> Sirve para todo lo que se puede contar.",
   chips:[["How many brothers do you have?","¿Cuántos hermanos tienes?"],["How many people are there?","¿Cuántas personas hay?"],["Who is she?","¿Quién es ella?"]],
   aviso:["El sustantivo va en plural","<span class='wrong'>How many brother do you have?</span> &nbsp;&rarr;&nbsp; <span class='right'>How many brother<b>s</b>…</span> Aunque la respuesta sea «uno», la pregunta va en plural."]}
];

/* Sarah (A, la IA) y David (B, el estudiante) miran fotos de familia */
const DIALOGUE = [
 {s:"A", ipa:"ɪz ðæt ə ˈfoʊtoʊ əv jʊr ˈfæməli", p:"is dat a fóutou av iór fámili",
  b:[["Is","¿Es"],["that","esa"],["a","una"],["photo","foto"],["of","de"],["your","tu"],["family?","familia?"]]},
 {s:"B", ipa:"jes ɪt ɪz ðɪs ɪz maɪ ˈfæməli ɪn teˌɡuːsɪˈɡælpə", p:"yes it is. dis is mái fámili in teguisigálpa",
  b:[["Yes,","Sí,"],["it is.","lo es."],["This","Esta"],["is","es"],["my","mi"],["family","familia"],["in","en"],["Tegucigalpa.","Tegucigalpa."]]},
 {s:"A", ipa:"haʊ ˈmeni ˈpiːpl ɑːr ðer", p:"jáu méni píipl ar der",
  b:[["How many","¿Cuántas"],["people","personas"],["are there?","hay?"]],
  n:"<b>How many</b> pide el sustantivo en plural: <i>people</i>. Y «hay» con plural es <b>there are</b>, no <i>there is</i>."},
 {s:"B", ipa:"ðer ɑːr faɪv ˈpiːpl maɪ ˈperənts maɪ tuː ˈsɪstərz ænd miː", p:"der ar fáiv píipl: mái pérents, mái túu sísters and míi",
  b:[["There are","Hay"],["five","cinco"],["people:","personas:"],["my","mis"],["parents,","padres,"],["my","mis"],["two","dos"],["sisters","hermanas"],["and","y"],["me.","yo."]]},
 {s:"A", ipa:"duː juː hæv ˈeni ˈbrʌðərz", p:"du iú jav éni bráders",
  b:[["Do you have","¿Tienes"],["any","algún"],["brothers?","hermano?"]]},
 {s:"B", ipa:"noʊ aɪ doʊnt aɪ hæv tuː ˈsɪstərz ˈoʊnli", p:"nóu, ái dóunt. ái jav túu sísters óunli",
  b:[["No,","No,"],["I don't.","no tengo."],["I","Yo"],["have","tengo"],["two","dos"],["sisters","hermanas"],["only.","solamente."]],
  n:"Respuesta corta: <b>No, I don't</b>. El inglés no repite el verbo, usa el auxiliar. Nunca <span class='wrong'>No, I have not</span> en conversación."},
 {s:"A", ipa:"ˈhuː ɪz ðə jʌŋ ˈwʊmən ɪn ðə ˈɡɑːrdn", p:"jú is da iáng uúman in da gárden",
  b:[["Who","¿Quién"],["is","es"],["the","la"],["young","joven"],["woman","mujer"],["in the garden?","del jardín?"]]},
 {s:"B", ipa:"ðæts maɪ ˈsɪstər ˈænə ʃiːz ˈtwenti jɪrz oʊld", p:"dats mái síster Ána. shiis tuénti íers óuld",
  b:[["That's","Esa es"],["my","mi"],["sister","hermana"],["Ana.","Ana."],["She is","Ella tiene"],["twenty","veinte"],["years old.","años."]]},
 {s:"A", ipa:"ʃi lʊks ˈfʌni wʌt dəz ʃi duː", p:"shi luks fáni. uát das shi du",
  b:[["She looks","Parece"],["funny.","graciosa."],["What does she do?","¿A qué se dedica?"]],
  n:"<b>She looks funny</b>: aquí <i>look</i> no es «mirar» sino «parecer». Y <b>What does she do?</b> pregunta por la ocupación, no por la acción del momento."},
 {s:"B", ipa:"ʃiz ə ˈtiːtʃər ʃi wɜːrks ɪn ə smɔːl skuːl", p:"shiis a tíicher. shi uérks in a smóol skúul",
  b:[["She is","Ella es"],["a","una"],["teacher.","profesora."],["She","Ella"],["works","trabaja"],["in","en"],["a","una"],["small","pequeña"],["school.","escuela."]]},
 {s:"A", ipa:"ænd ˈhuː ɪz ðə ˈɡrænfɑːðər wɪð ðə dɔːɡ", p:"and jú is da gránfader uid da dog",
  b:[["And","¿Y"],["who","quién"],["is","es"],["the","el"],["grandfather","abuelo"],["with the dog?","del perro?"]]},
 {s:"B", ipa:"ðæts maɪ ˈfɑːðərz ˈfɑːðər hɪz neɪm ɪz karlos", p:"dats mái fáders fáder. jis néim is Karlos",
  b:[["That's","Ese es"],["my father's","el padre de mi padre."],["father.","—"],["His","Su"],["name","nombre"],["is","es"],["Carlos.","Carlos."]],
  n:"<b>My father's father</b> = «el padre de mi padre». El poseedor va <b>primero</b> y lleva la <i>'s</i>: justo al revés que en español."},
 {s:"A", ipa:"ɪz ðə dɔːɡ hɪz", p:"is da dog jis",
  b:[["Is","¿Es"],["the","el"],["dog","perro"],["his?","suyo?"]]},
 {s:"B", ipa:"əv kɔːrs ɪts hɪz dɔːɡ hɪz neɪm ɪz maks", p:"av kórs. its jis dog. jis néim is Maks",
  b:[["Of course.","Por supuesto."],["It is","Es"],["his","su"],["dog.","perro."],["His","Su"],["name","nombre"],["is","es"],["Max.","Max."]]},
 {s:"A", ipa:"aɪ lʌv dɔːɡz duː juː hæv ə kæt tuː", p:"ái lav dogs. du iú jav a kat túu",
  b:[["I","Yo"],["love","amo"],["dogs.","los perros."],["Do you have","¿Tienes"],["a","un"],["cat","gato"],["too?","también?"]]},
 {s:"B", ipa:"noʊ wi doʊnt bʌt ðer ɪz ə ˈbeɪbi ɪn ðə ˈfoʊtoʊ", p:"nóu, ui dóunt. bat der is a béibi in da fóutou",
  b:[["No,","No,"],["we don't.","no tenemos."],["But","Pero"],["there is","hay"],["a","un"],["baby","bebé"],["in the photo.","en la foto."]]},
 {s:"A", ipa:"ˈrɪəli ˈhuːz ˈbeɪbi ɪz ɪt", p:"ríili. júus béibi is it",
  b:[["Really.","¿En serio?"],["Whose baby is it?","¿De quién es el bebé?"]],
  n:"<b>Whose</b> pregunta por el dueño: «¿de quién?». No lo confundas con <i>who's</i>, que es <i>who is</i>."},
 {s:"B", ipa:"ʃiz maɪ ˈsɪstərz ˈdɔːtər hɜːr neɪm ɪz ˈsofia", p:"shiis mái sísters dóter. jer néim is Sofía",
  b:[["She is","Ella es"],["my sister's","la hija de"],["daughter.","mi hermana."],["Her","Su"],["name","nombre"],["is","es"],["Sofía.","Sofía."]],
  n:"Aquí <b>her</b> y no <i>his</i>, porque la dueña del nombre es una niña. El español dice «su» para ambos; el inglés obliga a elegir."},
 {s:"A", ipa:"ʃiz ə ˈbjuːtɪfl ˈbeɪbi ɪz jʊr haʊs bɪɡ", p:"shiis a biútiful béibi. is iór jáus big",
  b:[["She is","Es"],["a","una"],["beautiful","hermosa"],["baby.","bebé."],["Is","¿Es"],["your","tu"],["house","casa"],["big?","grande?"]]},
 {s:"B", ipa:"ɪts nɑːt vɛri bɪɡ bʌt ɪt hæz ə ˈɡɑːrdn ænd ə bɪɡ ˈkɪtʃɪn", p:"its nat véri big, bat it jas a gárden and a big kíchen",
  b:[["It is not","No es"],["very","muy"],["big,","grande,"],["but","pero"],["it has","tiene"],["a","un"],["garden","jardín"],["and","y"],["a","una"],["big","gran"],["kitchen.","cocina."]]},
 {s:"A", ipa:"ðæt saʊndz ˈperfɪkt ɑːr jʊr ˈperənts ˈbɪzi", p:"dat sáunds pérfect. ar iór pérents bísi",
  b:[["That sounds","Eso suena"],["perfect.","perfecto."],["Are","¿Están"],["your","tus"],["parents","padres"],["busy?","ocupados?"]]},
 {s:"B", ipa:"jes ðeɪ ɑːr ðeɪ wɜːrk ˈevri deɪ bʌt ðeɪ hɛlp ʌs ɑːn ˈsʌndeɪz", p:"yes, déi ar. déi uérk évri déi, bat déi jelp as an sándeis",
  b:[["Yes,","Sí,"],["they are.","lo están."],["They","Ellos"],["work","trabajan"],["every day,","cada día,"],["but","pero"],["they help us","nos ayudan"],["on Sundays.","los domingos."]]},
 {s:"A", ipa:"jʊr ˈfæməli ɪz ˈlʌvli θæŋk juː fɔːr ðə ˈfoʊtoʊ", p:"iór fámili is lávli. zánk iú for da fóutou",
  b:[["Your","Tu"],["family","familia"],["is","es"],["lovely.","encantadora."],["Thank you","Gracias"],["for the photo.","por la foto."]]},
 {s:"B", ipa:"juːr ˈwelkəm ˈsɛrə siː juː təˈmɑːroʊ", p:"iúr uélcam, sára. síi iú tumórou",
  b:[["You're welcome,","De nada,"],["Sarah.","Sarah."],["See you tomorrow!","¡Hasta mañana!"]]}
];

const LECTURA = {
  titulo: "A photo from Tegucigalpa",
  entradilla: "David describe la foto de su familia. El texto practica <i>have / has</i>, el genitivo <i>'s</i>, los plurales y <i>there is / there are</i>, que es justo lo que acabas de estudiar.",
  parrafos: [
    "My family is not very big. There are five people in my house: my parents, my two sisters and me. My father is a quiet man and he works in an office. My mother is a teacher and she is very funny. They work every day, but they help us on Sundays.",
    "My sister Ana is twenty years old. She is tall and she loves books. My sister's daughter is a baby. Her name is Sofía and she is only one year old. We do not have a cat, but we have a dog. The dog is my grandfather's, and his name is Max. Our house has a small garden and a big kitchen. I love my family."
  ],
  glosario: [
    ["am","æm","soy, estoy","am"],
    ["is","ɪz","es, está","is"],
    ["are","ɑːr","son, están","ar"],
    ["have","hæv","tengo, tienes","jav"],
    ["has","hæz","tiene","jas"],
    ["works","wɜːrks","trabaja","uérks"],
    ["work","wɜːrk","trabajo, trabajan","uérk"],
    ["help","help","ayudan","jelp"],
    ["loves","lʌvz","le encantan","lavs"],
    ["love","lʌv","amo, quiero","lav"],
    ["I","aɪ","yo","ái"],
    ["me","miː","mí, yo","míi"],
    ["we","wiː","nosotros","uii"],
    ["she","ʃiː","ella","shii"],
    ["he","hiː","él","jíi"],
    ["they","ðeɪ","ellos, ellas","déi"],
    ["us","ʌs","nos, nosotros","as"],
    ["my","maɪ","mi, mis","mái"],
    ["her","hɜːr","su (de ella)","jer"],
    ["his","hɪz","su (de él)","jis"],
    ["our","ˈaʊər","nuestro, nuestra","áuar"],
    ["a","ə","un, una","a"],
    ["an","æn","un, una","an"],
    ["the","ðə","el, la, los, las","da"],
    ["and","ænd","y","and"],
    ["but","bʌt","pero","bat"],
    ["not","nɑːt","no","nat"],
    ["do not","duː nɑːt","no (auxiliar)","du nat"],
    ["in","ɪn","en","in"],
    ["on","ɑːn","en (con días)","an"],
    ["only","ˈoʊnli","solamente","óunli"],
    ["very","ˈveri","muy","véri"],
    ["man","mæn","hombre","man"],
    ["office","ˈɑːfɪs","oficina","áafis"],
    ["teacher","ˈtiːtʃər","profesora","tíicher"],
    ["books","bʊks","libros","buks"],
    ["people","ˈpiːpl","personas, gente","píipl"],
    ["five","faɪv","cinco","fáiv"],
    ["two","tuː","dos","túu"],
    ["one","wʌn","uno, un","uán"],
    ["twenty","ˈtwenti","veinte","tuénti"],
    ["years","jɪrz","años","íers"],
    ["year","jɪr","año","íer"],
    ["old","oʊld","de edad","óuld"],
    ["every day","ˈevri deɪ","cada día","évri déi"],
    ["Sundays","ˈsʌndeɪz","los domingos","sándeis"],
    ["name","neɪm","nombre","néim"],
    ["small","smɔːl","pequeño","smóol"],
    ["big","bɪɡ","grande","big"],
    ["tall","tɔːl","alta","tol"],
    ["quiet","ˈkwaɪət","callado","kuáiet"],
    ["funny","ˈfʌni","graciosa","fáni"],
    ["house","haʊs","casa","jáus"],
    ["garden","ˈɡɑːrdn","jardín","gárden"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchen"],
    ["family","ˈfæməli","familia","fámili"],
    ["parents","ˈperənts","padres","pérents"],
    ["sisters","ˈsɪstərz","hermanas","sísters"],
    ["sister","ˈsɪstər","hermana","síster"],
    ["father","ˈfɑːðər","padre","fáder"],
    ["mother","ˈmʌðər","madre","máder"],
    ["daughter","ˈdɔːtər","hija","dóter"],
    ["baby","ˈbeɪbi","bebé","béibi"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["dog","dɔːɡ","perro","dog"],
    ["cat","kæt","gato","kat"],
    ["there are","ðer ɑːr","hay (plural)","der ar"],
    ["there is","ðer ɪz","hay (singular)","der is"]
  ],
  preguntas: [
    { q:"How many people are there in David's house?",
      ops:["Four","Six","Five"], ok:2,
      pista:"Primera frase del texto: «There are five people in my house»." },
    { q:"Whose dog is Max?",
      ops:["David's grandfather's","David's sister's","David's"], ok:0,
      pista:"Segundo párrafo: «The dog is my grandfather's»." },
    { q:"What does David's mother do?",
      ops:["She works in an office","She is a teacher","She takes care of the baby"], ok:1,
      pista:"Primer párrafo: el padre trabaja en una oficina y la madre es otra cosa." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-02"] = {
  meta: {
    id: "a1-02",
    nivel: "A1",
    numero: 2,
    titulo: "Familia y posesiones",
    descriptor: "Puedo presentarme y presentar a otros, pedir y dar información personal básica sobre mi domicilio, mis pertenencias y las personas que conozco.",
    escena: "Sarah & David · mirando fotos de familia",
    personajeIA: "Sarah",
    personajeAlumno: "David"
  },
  VOCAB: VOCAB, PRONKEY: PRONKEY, VERBS: VERBS, GRAMMAR: GRAMMAR,
  DIALOGUE: DIALOGUE, LECTURA: LECTURA
};
})();
