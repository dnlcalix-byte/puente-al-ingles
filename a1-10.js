/* ============================================================
   LECCIÓN A1-10 · Partes del cuerpo y salud básica
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La cabeza", items:[
    ["head","hed","cabeza","jed"],["face","feɪs","cara","féis"],
    ["eye","aɪ","ojo","ái"],["ear","ɪr","oreja, oído","íer"],
    ["nose","noʊz","nariz","nóus"],["mouth","maʊθ","boca","máuz"],
    ["tooth","tuːθ","diente","túuz"],["teeth","tiːθ","dientes","tíiz"],
    ["throat","θroʊt","garganta","zróut"],["neck","nek","cuello","nek"]
  ]},
  {g:"El cuerpo", items:[
    ["body","ˈbɑːdi","cuerpo","bádi"],["arm","ɑːrm","brazo","arm"],
    ["hand","hænd","mano","jand"],["finger","ˈfɪŋɡər","dedo","fínguer"],
    ["leg","leɡ","pierna","leg"],["foot","fʊt","pie","fut"],
    ["feet","fiːt","pies","fíit"],["back","bæk","espalda","bak"],
    ["stomach","ˈstʌmək","estómago","stámak"],["heart","hɑːrt","corazón","jart"]
  ]},
  {g:"Síntomas", items:[
    ["ill","ɪl","enfermo","il"],["sick","sɪk","enfermo, mareado","sik"],
    ["pain","peɪn","dolor","péin"],["headache","ˈhedeɪk","dolor de cabeza","jédeik"],
    ["stomachache","ˈstʌməkeɪk","dolor de estómago","stámakeik"],["toothache","ˈtuːθeɪk","dolor de muelas","túuzeik"],
    ["sore throat","sɔːr θroʊt","dolor de garganta","sor zróut"],["fever","ˈfiːvər","fiebre","fíivar"],
    ["cough","kɔːf","tos","kof"],["cold","koʊld","resfriado","kóuld"],
    ["flu","fluː","gripe","flúu"],["temperature","ˈtemprətʃər","fiebre, temperatura","témprachar"]
  ]},
  {g:"Cuidarse", items:[
    ["doctor","ˈdɑːktər","médico","dáktar"],["nurse","nɜːrs","enfermera","ners"],
    ["pharmacy","ˈfɑːrməsi","farmacia","fármasi"],["medicine","ˈmedsn","medicina","médsn"],
    ["pill","pɪl","pastilla","pil"],["rest","rest","descanso","rest"],
    ["healthy","ˈhelθi","sano","jélzi"],["better","ˈbetər","mejor","bétar"],
    ["worse","wɜːrs","peor","uérs"],["appointment","əˈpɔɪntmənt","cita","apóintment"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","head &rarr; jed"],
  ["z","Lengua entre los dientes, sin voz. Sale en todo el cuerpo: <i>mouth, tooth, throat</i>.","tooth &rarr; túuz"],
  ["ch","Como en «coche».","temperature &rarr; témprachar"],
  ["f","La <i>gh</i> de <i>cough</i> suena <b>f</b>.","cough &rarr; kof"],
  ["v","Labio de abajo contra los dientes de arriba.","fever &rarr; fíivar"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","finger &rarr; fínguer"],
  ["k muda","En <i>stomach</i> la <i>ch</i> suena <b>k</b>, no «ch».","stomach &rarr; stámak"],
  ["íi úu óo","Vocal doble = vocal larga. Distingue <i>tooth</i> de <i>teeth</i>.","teeth &rarr; tíiz"],
  ["r final","Apenas se toca, nunca vibra.","doctor &rarr; dáktar"]
];

const VERBS = [
  ["to hurt","irr","hurt · hurts","hurt","will hurt","doler"],
  ["to feel","irr","feel · feels","felt","will feel","sentirse"],
  ["to rest","reg","rest · rests","rested","will rest","descansar"],
  ["to take","irr","take · takes","took","will take","tomar"],
  ["to call","reg","call · calls","called","will call","llamar"],
  ["to help","reg","help · helps","helped","will help","ayudar"],
  ["to break","irr","break · breaks","broke","will break","romper"],
  ["to cough","reg","cough · coughs","coughed","will cough","toser"],
  ["to sleep","irr","sleep · sleeps","slept","will sleep","dormir"],
  ["to get better","irr","get better · gets better","got better","will get better","mejorar"],
  ["to see","irr","see · sees","saw","will see","ver"]
];

const GRAMMAR = [
  {t:"Los plurales irregulares del cuerpo", s:"tooth → teeth",
   p:"Varias partes del cuerpo tienen plurales que no siguen ninguna regla. Hay que memorizarlos, y son de los más frecuentes del idioma.",
   table:{head:["Singular","Plural","Español"], rows:[
     ["tooth","teeth","diente / dientes"],
     ["foot","feet","pie / pies"],
     ["man","men","hombre / hombres"],
     ["woman","women","mujer / mujeres"],
     ["child","children","niño / niños"],
     ["person","people","persona / personas"]
   ]},
   aviso:["Sólo cambia la vocal, y se oye","<b>tooth</b> (túuz) y <b>teeth</b> (tíiz) se distinguen sólo por la vocal. Igual con <i>foot</i> y <i>feet</i>. Practícalos en pareja, como <i>fifteen</i> y <i>fifty</i>."]},

  {t:"Duele: hurt y ache", s:"My head hurts",
   p:"Hay dos formas de decir que algo duele, y las dos son frecuentes: con el verbo <b>hurt</b> o con el sustantivo terminado en <b>-ache</b>.",
   table:{head:["Estructura","Ejemplo","Español"], rows:[
     ["parte + hurts","My head hurts.","Me duele la cabeza."],
     ["have a + -ache","I have a headache.","Tengo dolor de cabeza."],
     ["have a sore +","I have a sore throat.","Me duele la garganta."],
     ["My + parte + hurt","My feet hurt.","Me duelen los pies."]
   ]},
   aviso:["El sujeto vuelve a cambiar de bando","En «me duele la cabeza», el sujeto es <i>la cabeza</i> y yo soy el complemento. En <b>my head hurts</b> también, pero hay que poner <b>my</b>. Lo que nunca funciona es <span class='wrong'>me hurts the head</span>."]},

  {t:"Mi cabeza, no la cabeza", s:"posesivo con el cuerpo",
   p:"Con las partes del cuerpo, el inglés usa el <b>posesivo</b> donde el español usa el artículo. Es obligatorio.",
   chips:[["My arm hurts","Me duele el brazo"],["Wash your hands","Lávate las manos"],["He broke his leg","Se rompió la pierna"],["Open your mouth","Abre la boca"]],
   aviso:["Nunca <i>the</i> con el cuerpo","<span class='wrong'>Wash the hands.</span> &nbsp;&rarr;&nbsp; <span class='right'>Wash <b>your</b> hands.</span> El español dice «lávate las manos»; el inglés necesita saber de quién son."]},

  {t:"Estar enfermo y sentirse mal", s:"to be ill / to feel",
   p:"<b>To be</b> describe el estado; <b>to feel</b>, la sensación. Y ambos van con adjetivo, no con sustantivo.",
   chips:[["I am ill","Estoy enfermo"],["I feel sick","Me siento mal"],["I don't feel well","No me siento bien"],["I feel better today","Hoy me siento mejor"]],
   aviso:["<i>Sick</i> no es exactamente «enfermo»","En inglés americano <b>sick</b> vale por «enfermo». En británico suele significar «con ganas de vomitar». Para no equivocarte, <b>ill</b> es siempre seguro."]},

  {t:"Dar consejos con should", s:"You should…",
   p:"<b>Should</b> es el modal del consejo. Como todos los modales, no cambia nunca y el verbo va sin <i>to</i>.",
   chips:[["You should rest","Deberías descansar"],["You should see a doctor","Deberías ver a un médico"],["You shouldn't work today","No deberías trabajar hoy"],["Should I take a pill?","¿Debería tomar una pastilla?"]],
   aviso:["Sin <i>to</i> y sin <i>-s</i>","<span class='wrong'>You should to rest.</span> y <span class='wrong'>He shoulds rest.</span> &nbsp;&rarr;&nbsp; <span class='right'>You should rest.</span> · <span class='right'>He should rest.</span>"]},

  {t:"Tener fiebre, tener frío", s:"have vs be",
   p:"Aquí el inglés reparte: unos estados van con <b>have</b> y otros con <b>be</b>. No hay lógica; hay que memorizar cuáles.",
   table:{head:["Con HAVE","Con BE"], rows:[
     ["I have a headache","I am ill"],
     ["I have a cold","I am cold (tengo frío)"],
     ["I have a fever","I am hot"],
     ["I have a cough","I am tired"]
   ]},
   aviso:["<i>I have a cold</i> no es <i>I am cold</i>","<b>I have a cold</b> = estoy resfriado. <b>I am cold</b> = tengo frío. Una letra de diferencia y dos significados que no tienen nada que ver."]}
];

/* Sarah (A) y David (B): David no se encuentra bien */
const DIALOGUE = [
 {s:"A", ipa:"juː doʊnt lʊk wel təˈdeɪ ɑːr juː oʊˈkeɪ", p:"iú dóunt luk uél tudéi. ar iú oukéi",
  b:[["You don't look well","No te ves bien"],["today.","hoy."],["Are you okay?","¿Estás bien?"]]},
 {s:"B", ipa:"nɑːt ˈrɪəli aɪ hæv ə ˈhedeɪk", p:"nat ríili. ái jav a jédeik",
  b:[["Not really.","La verdad que no."],["I have","Tengo"],["a headache.","dolor de cabeza."]],
  n:"<b>I have a headache</b> lleva artículo <i>a</i>. El español dice «tengo dolor de cabeza», sin artículo; el inglés lo exige."},
 {s:"A", ipa:"sɪns wen dəz jʊr hed hɜːrt", p:"sins uén das iór jed jert",
  b:[["Since when?","¿Desde cuándo?"],["Does your head hurt?","¿Te duele la cabeza?"]],
  n:"<b>Your head</b>, no <i>the head</i>. Con partes del cuerpo el inglés usa siempre el posesivo."},
 {s:"B", ipa:"sɪns ˈjestərdeɪ ænd aɪ hæv ə sɔːr θroʊt tuː", p:"sins iésterdei. and ái jav a sor zróut túu",
  b:[["Since yesterday.","Desde ayer."],["And","Y"],["I have","tengo"],["a sore throat","dolor de garganta"],["too.","también."]]},
 {s:"A", ipa:"duː juː hæv ə ˈtemprətʃər", p:"du iú jav a témprachar",
  b:[["Do you have","¿Tienes"],["a temperature?","fiebre?"]],
  n:"<b>A temperature</b> con artículo significa «fiebre». Sin artículo sería solo «la temperatura»."},
 {s:"B", ipa:"aɪ θɪŋk soʊ aɪ fiːl hɑːt ænd koʊld", p:"ái zink sóu. ái fíil jat and kóuld",
  b:[["I think so.","Creo que sí."],["I feel","Me siento"],["hot","caliente"],["and","y"],["cold.","con frío."]]},
 {s:"A", ipa:"ðæt saʊndz laɪk ðə fluː duː juː hæv ə kɔːf", p:"dat sáunds láik da flúu. du iú jav a kof",
  b:[["That sounds like","Eso suena a"],["the flu.","gripe."],["Do you have","¿Tienes"],["a cough?","tos?"]],
  n:"En <b>cough</b> la <i>gh</i> suena como una <b>f</b>: «kof». El inglés está lleno de estas herencias ortográficas."},
 {s:"B", ipa:"jes æt naɪt aɪ kɑːnt sliːp wel", p:"yes, at náit. ái kant slíip uél",
  b:[["Yes,","Sí,"],["at night.","de noche."],["I can't","No puedo"],["sleep","dormir"],["well.","bien."]]},
 {s:"A", ipa:"juː ʃʊd siː ə ˈdɑːktər", p:"iú shud síi a dáktar",
  b:[["You should","Deberías"],["see","ver"],["a doctor.","a un médico."]],
  n:"<b>Should</b> sin <i>to</i> después. Los modales ingleses van directamente con el infinitivo pelado."},
 {s:"B", ipa:"aɪ doʊnt hæv ən əˈpɔɪntmənt ənˈtɪl ˈfraɪdeɪ", p:"ái dóunt jav an apóintment antíl fráidei",
  b:[["I don't have","No tengo"],["an appointment","cita"],["until Friday.","hasta el viernes."]]},
 {s:"A", ipa:"ðen ɡoʊ tuː ðə ˈfɑːrməsi ɑːn ðə ˈkɔːrnər", p:"den góu tu da fármasi an da kórner",
  b:[["Then go","Entonces ve"],["to the pharmacy","a la farmacia"],["on the corner.","de la esquina."]]},
 {s:"B", ipa:"ɡʊd aɪˈdɪə wʌt ʃʊd aɪ teɪk", p:"gud aidía. uát shud ái téik",
  b:[["Good idea.","Buena idea."],["What should I take?","¿Qué debería tomar?"]]},
 {s:"A", ipa:"pɪlz fɔːr ðə ˈhedeɪk ænd ˈsʌmθɪŋ fɔːr jʊr θroʊt", p:"pils for da jédeik, and sámzing for iór zróut",
  b:[["Pills","Pastillas"],["for the headache","para el dolor de cabeza"],["and","y"],["something","algo"],["for your throat.","para la garganta."]]},
 {s:"B", ipa:"maɪ ˈstʌmək hɜːrts ə ˈlɪtl tuː", p:"mái stámak jerts a lítl túu",
  b:[["My stomach","Me duele"],["hurts","el estómago"],["a little","un poco"],["too.","también."]],
  n:"En <b>stomach</b> la <i>ch</i> final suena <b>k</b>: «stámak». Y el verbo lleva <i>-s</i> porque <i>my stomach</i> es tercera persona."},
 {s:"A", ipa:"ðen doʊnt teɪk pɪlz wɪðˈaʊt fuːd", p:"den dóunt téik pils uidáut fúud",
  b:[["Then don't take","Entonces no tomes"],["pills","pastillas"],["without food.","sin comida."]]},
 {s:"B", ipa:"aɪ ˈhɑːrdli iːt ˈɛnɪθɪŋ təˈdeɪ", p:"ái járdli íit énizing tudéi",
  b:[["I hardly eat","Casi no como"],["anything","nada"],["today.","hoy."]]},
 {s:"A", ipa:"ðæts ðə ˈprɑːbləm juː ʃʊd iːt ænd rest", p:"dats da prábulem. iú shud íit and rest",
  b:[["That's the problem.","Ese es el problema."],["You should","Deberías"],["eat","comer"],["and rest.","y descansar."]]},
 {s:"B", ipa:"aɪ hæv ən ˈɪŋɡlɪʃ test təˈmɑːroʊ", p:"ái jav an ínglish test tumórou",
  b:[["I have","Tengo"],["an English test","un examen de inglés"],["tomorrow.","mañana."]]},
 {s:"A", ipa:"juː ʃʊdnt ˈstʌdi təˈnaɪt ɡoʊ tuː bed ˈɜːrli", p:"iú shúdnt stádi tunáit. góu tu bed érli",
  b:[["You shouldn't","No deberías"],["study","estudiar"],["tonight.","esta noche."],["Go to bed","Acuéstate"],["early.","temprano."]]},
 {s:"B", ipa:"bʌt aɪ wɑːnt ə ɡʊd ɡreɪd", p:"bat ái uánt a gud gréid",
  b:[["But","Pero"],["I want","quiero"],["a good","una buena"],["grade.","nota."]]},
 {s:"A", ipa:"ə taɪərd hed ˈdʌznt lɜːrn ˈɛnɪθɪŋ", p:"a táiard jed dásnt lern énizing",
  b:[["A tired head","Una cabeza cansada"],["doesn't learn","no aprende"],["anything.","nada."]],
  n:"Una sola negación: <b>doesn't learn anything</b>. El español dice «no aprende nada» con dos; el inglés lo prohíbe."},
 {s:"B", ipa:"juːr raɪt aɪ ɡoʊ ˈhoʊm naʊ", p:"iúr ráit. ái góu jóum náu",
  b:[["You're right.","Tienes razón."],["I go home","Me voy a casa"],["now.","ahora."]]},
 {s:"A", ipa:"kɔːl miː təˈnaɪt aɪ hoʊp juː fiːl ˈbetər", p:"kol míi tunáit. ái jóup iú fíil bétar",
  b:[["Call me","Llámame"],["tonight.","esta noche."],["I hope","Espero que"],["you feel","te sientas"],["better.","mejor."]]},
 {s:"B", ipa:"θæŋk juː ˈserə juː ɑːr ə ɡʊd frend", p:"zánk iú, sára. iú ar a gud frend",
  b:[["Thank you,","Gracias,"],["Sarah.","Sarah."],["You are","Eres"],["a good","una buena"],["friend.","amiga."]]}
];

const LECTURA = {
  titulo: "A bad day",
  entradilla: "David pasa un mal día. El texto practica el posesivo con las partes del cuerpo, la diferencia entre <i>have</i> y <i>be</i> para los malestares, y los consejos con <i>should</i>.",
  parrafos: [
    "Today I do not feel well. I have a headache and a sore throat, and my stomach hurts a little. I think I have a fever too: I feel hot and cold at the same time. At night I cough a lot and I can't sleep. Sarah says it sounds like the flu. My eyes are tired and my whole body feels heavy.",
    "I do not have an appointment with the doctor until Friday, so I go to the pharmacy on the corner. The nurse there says I should take pills for the headache and something for my throat. She also says I should never take pills without food. I hardly eat anything today, so that is a problem. I have an English test tomorrow, but Sarah is right: a tired head does not learn anything. Tonight I go to bed early and I rest."
  ],
  glosario: [
    ["feel","fiːl","me siento","fíil"],
    ["feels","fiːlz","se siente","fíils"],
    ["hurts","hɜːrts","duele","jerts"],
    ["cough","kɔːf","toso","kof"],
    ["sleep","sliːp","dormir","slíip"],
    ["says","sez","dice","ses"],
    ["sounds","saʊndz","suena","sáunds"],
    ["take","teɪk","tomar","téik"],
    ["eat","iːt","como","íit"],
    ["learn","lɜːrn","aprende","lern"],
    ["rest","rest","descanso","rest"],
    ["should","ʃʊd","debería","shud"],
    ["headache","ˈhedeɪk","dolor de cabeza","jédeik"],
    ["sore throat","sɔːr θroʊt","dolor de garganta","sor zróut"],
    ["stomach","ˈstʌmək","estómago","stámak"],
    ["fever","ˈfiːvər","fiebre","fíivar"],
    ["flu","fluː","gripe","flúu"],
    ["eyes","aɪz","ojos","áis"],
    ["body","ˈbɑːdi","cuerpo","bádi"],
    ["heavy","ˈhevi","pesado","jévi"],
    ["whole","hoʊl","entero","jóul"],
    ["tired","ˈtaɪərd","cansados","táiard"],
    ["appointment","əˈpɔɪntmənt","cita","apóintment"],
    ["doctor","ˈdɑːktər","médico","dáktar"],
    ["nurse","nɜːrs","enfermera","ners"],
    ["pharmacy","ˈfɑːrməsi","farmacia","fármasi"],
    ["pills","pɪlz","pastillas","pils"],
    ["without","wɪˈðaʊt","sin","uidáut"],
    ["hardly","ˈhɑːrdli","casi no","járdli"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["something","ˈsʌmθɪŋ","algo","sámzing"],
    ["problem","ˈprɑːbləm","problema","prábulem"],
    ["test","test","examen","test"],
    ["tomorrow","təˈmɑːroʊ","mañana","tumórou"],
    ["tonight","təˈnaɪt","esta noche","tunáit"],
    ["early","ˈɜːrli","temprano","érli"],
    ["at night","ət naɪt","de noche","at náit"],
    ["corner","ˈkɔːrnər","esquina","kórner"],
    ["right","raɪt","razón","ráit"],
    ["until","ənˈtɪl","hasta","antíl"]
  ],
  preguntas: [
    { q:"What does David think he has?",
      ops:["A cold","The flu","A stomachache only"], ok:1,
      pista:"Es lo que dice Sarah al final del primer párrafo: <i>it sounds like…</i>" },
    { q:"Why does David go to the pharmacy?",
      ops:["Because his appointment is not until Friday","Because the doctor sends him","Because he wants to see Sarah"], ok:0,
      pista:"Primera frase del segundo párrafo, justo antes de <i>so</i>." },
    { q:"What does the nurse tell him about the pills?",
      ops:["That he should take them at night","That he should never take them without food","That he should not take any pills"], ok:1,
      pista:"Es el segundo consejo que le da, con <i>never</i>." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-10"] = {
  meta: {
    id: "a1-10", nivel: "A1", numero: 10,
    titulo: "Partes del cuerpo y salud básica",
    descriptor: "Puedo nombrar las partes del cuerpo, describir malestares sencillos y comprender consejos básicos de salud.",
    escena: "Sarah & David · David no se encuentra bien",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
