/* ============================================================
   LECCIÓN A2-15 · Primer condicional
   Reparto: Sarah, la víspera del 20 de marzo, en las gradas del
   edificio. Julia ya duerme. La lectura reúne los seis puntos de
   la Fase 1 —el primer condicional, el orden y la coma, unless,
   when frente a if, la principal sin will y las conjunciones de
   tiempo— en yo, ella, tú, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La despedida", items:[
    ["to miss","tuː mɪs","echar de menos","tu mis"],["a hug","ə hʌɡ","un abrazo","a jag"],
    ["to hug","tuː hʌɡ","abrazar","tu jag"],["farewell","ˌferˈwel","despedida","feruél"],
    ["to see somebody off","tuː siː ˈsʌmbɑːdi ɔːf","ir a despedir a alguien","tu síi sámbadi of"],
    ["to wave","tuː weɪv","decir adiós con la mano","tu uéiv"],["tears","tɪrz","lágrimas","tíers"],
    ["to cry","tuː kraɪ","llorar","tu krái"],["to promise","tuː ˈprɑːmɪs","prometer","tu prámis"],
    ["a promise","ə ˈprɑːmɪs","una promesa","a prámis"]
  ]},
  {g:"Poner condiciones", items:[
    ["unless","ənˈles","a menos que","anlés"],["as long as","æz lɔːŋ æz","mientras, siempre que","as long as"],
    ["as soon as","æz suːn æz","en cuanto","as súun as"],["until","ənˈtɪl","hasta que","antíl"],
    ["in case","ɪn keɪs","por si acaso","in kéis"],["otherwise","ˈʌðərwaɪz","si no, de lo contrario","áderuais"],
    ["only if","ˈoʊnli ɪf","sólo si","óunli if"],["no matter","noʊ ˈmætər","no importa","nóu mátar"],
    ["a condition","ə kənˈdɪʃn","una condición","a kondíshon"],["to depend on","tuː dɪˈpend ɑːn","depender de","tu dipénd an"]
  ]},
  {g:"Mantener el contacto", items:[
    ["to text","tuː tekst","mandar un mensaje","tu tekst"],["a message","ə ˈmesɪdʒ","un mensaje","a mésich"],
    ["a video call","ə ˈvɪdioʊ kɔːl","una videollamada","a vídiou kol"],["to reply","tuː rɪˈplaɪ","responder","tu riplái"],
    ["to keep in touch","tuː kiːp ɪn tʌtʃ","seguir en contacto","tu kíip in tach"],
    ["the time difference","ðə taɪm ˈdɪfrəns","la diferencia horaria","da táim dífrens"],
    ["to forget","tuː fərˈɡet","olvidar","tu forguét"],["to send","tuː send","enviar","tu send"],
    ["online","ˌɑːnˈlaɪn","conectado","anláin"],["a voice note","ə vɔɪs noʊt","una nota de voz","a vóis nóut"]
  ]},
  {g:"Mañana en el aeropuerto", items:[
    ["departure","dɪˈpɑːrtʃər","salida","dipárchar"],["noon","nuːn","mediodía","núun"],
    ["traffic","ˈtræfɪk","tráfico","tráfik"],["to take off","tuː teɪk ɔːf","despegar","tu téik of"],
    ["to land","tuː lænd","aterrizar","tu land"],["a gate","ə ɡeɪt","una puerta de embarque","a guéit"],
    ["on time","ɑːn taɪm","a la hora","an táim"],["to be late","tuː biː leɪt","llegar tarde","tu bi léit"],
    ["a suitcase","ə ˈsuːtkeɪs","una maleta","a súutkeis"],["to stay","tuː steɪ","quedarse","tu stéi"]
  ]}
];

const PRONKEY = [
  ["ea","En <i>tears</i> suena como «ie» arrastrada.","tears &rarr; tíers"],
  ["w","Labios redondos, como la <i>u</i> de «hueso».","wave &rarr; uéiv"],
  ["dʒ","Como la <i>ch</i> pero con voz.","message &rarr; mésich"],
  ["g suave","En <i>forget</i> la <i>g</i> suena como en «gato», nunca como <i>j</i>.","forget &rarr; forguét"],
  ["th sonora","Lengua entre los dientes, con voz: casi una <i>d</i>.","otherwise &rarr; áderuais"],
  ["s inicial","Nunca pongas una <i>e</i> delante.","stay &rarr; stéi, no «estéi»"],
  ["oo larga","Boca pequeña y redonda, sonido largo.","noon &rarr; núun"],
  ["acento al final","<i>Unless</i> carga la fuerza en la segunda sílaba.","unless &rarr; anlés"],
  ["t entre vocales","En inglés americano suena casi como una <i>r</i> suave.","matter &rarr; márer"]
];

const VERBS = [
  ["to promise","reg","promise · promises","promised","will promise","prometer"],
  ["to miss","reg","miss · misses","missed","will miss","echar de menos"],
  ["to wait","reg","wait · waits","waited","will wait","esperar"],
  ["to text","reg","text · texts","texted","will text","mandar un mensaje"],
  ["to reply","reg","reply · replies","replied","will reply","responder"],
  ["to land","reg","land · lands","landed","will land","aterrizar"],
  ["to cry","reg","cry · cries","cried","will cry","llorar"],
  ["to stay","reg","stay · stays","stayed","will stay","quedarse"],
  ["to send","irr","send · sends","sent","will send","enviar"],
  ["to leave","irr","leave · leaves","left","will leave","irse, salir"],
  ["to keep","irr","keep · keeps","kept","will keep","mantener"],
  ["to forget","irr","forget · forgets","forgot","will forget","olvidar"]
];

const GRAMMAR = [
  {t:"El primer condicional", s:"if + presente, will + verbo base",
   p:"Es la frase de las cosas que <b>de verdad pueden pasar</b>. Tiene dos mitades y cada una lleva su tiempo: la condición va en <b>presente simple</b> aunque hable del futuro, y el resultado va con <b>will</b>. El error de todo hispanohablante es meter <i>will</i> en las dos.",
   chips:[["If it rains, I'll stay home.","Si llueve, me quedo en casa."],["If you write, I'll reply.","Si escribes, te contesto."],["If she calls, we'll know.","Si llama, lo sabremos."],["If I forget, remind me.","Si se me olvida, recuérdamelo."]],
   aviso:["Nunca <i>will</i> detrás de <i>if</i>","<span class='wrong'>If it will rain, I'll stay.</span> &nbsp;&rarr;&nbsp; <span class='right'>If it rains, I'll stay.</span> El futuro lo marca una sola mitad de la frase, la otra no lo repite."]},

  {t:"El orden y la coma", s:"la regla de puntuación que casi nadie enseña",
   p:"Las dos mitades se pueden colocar en cualquier orden y el significado no cambia. Lo que sí cambia es la <b>coma</b>: sólo se escribe cuando la condición va delante.",
   table:{head:["Orden","Coma","Ejemplo"], rows:[
     ["If … , will …","Sí","If you come, I'll wait."],
     ["will … if …","No","I'll wait if you come."],
     ["If … , will …","Sí","If she lands late, we'll go home."],
     ["will … if …","No","We'll go home if she lands late."]
   ]},
   aviso:["La coma marca dónde respira la frase","En español ponemos coma casi siempre; en inglés, sólo si la frase empieza por <i>if</i>. <span class='wrong'>I'll wait, if you come.</span>"]},

  {t:"UNLESS", s:"«a menos que», y ya lleva el no dentro",
   p:"<b>Unless</b> significa <i>if … not</i>. Como la negación ya va dentro de la palabra, detrás se pone el verbo <b>en afirmativo</b>. Poner otro negativo es el fallo clásico.",
   table:{head:["Con unless","Lo mismo con if","Español"], rows:[
     ["Unless it rains, we'll walk.","If it doesn't rain, we'll walk.","Si no llueve, caminamos."],
     ["I won't go unless you come.","I won't go if you don't come.","No voy a menos que vengas."],
     ["Unless she replies, I'll call.","If she doesn't reply, I'll call.","Si no contesta, llamo."],
     ["<span class='wrong'>Unless it doesn't rain</span>","—","doble negación: mal"]
   ]},
   aviso:["Dos negativos se anulan","<span class='wrong'>Unless you don't come, I'll wait.</span> dice justo lo contrario de lo que quieres. Detrás de <i>unless</i>, verbo limpio."]},

  {t:"WHEN o IF mirando al futuro", s:"lo seguro y lo posible",
   p:"Las dos van seguidas de <b>presente</b>, así que la gramática no las distingue: las distingue la certeza. <b>When</b> es «cuando pase», das por hecho que pasa. <b>If</b> es «si pasa», y a lo mejor no.",
   chips:[["When I land, I'll text you.","Cuando aterrice te escribo. (aterrizo seguro)"],["If I land on time, I'll text you.","Si aterrizo a la hora te escribo. (quizá no)"],["When she's twenty, she'll travel.","Cuando cumpla veinte viajará."],["If she has money, she'll travel.","Si tiene dinero viajará."]],
   aviso:["Tampoco aquí se usa <i>will</i>","<span class='wrong'>When I will land</span> &nbsp;&rarr;&nbsp; <span class='right'>When I land</span>. La regla del primer condicional vale para <i>when</i> igual."]},

  {t:"La otra mitad no siempre es WILL", s:"can, might, should y el imperativo",
   p:"El resultado puede llevar cualquier cosa que hable del futuro, no sólo <i>will</i>. Esto multiplica de golpe lo que puedes decir con la misma estructura.",
   table:{head:["En el resultado","Qué añade","Ejemplo"], rows:[
     ["will","futuro normal","If you ask, he'll help."],
     ["can","posibilidad, permiso","If you finish, you can go."],
     ["might","puede que sí","If I have time, I might come."],
     ["should","consejo","If you're tired, you should rest."],
     ["imperativo","instrucción","If it rains, take the bus."]
   ]},
   aviso:["La condición no cambia nunca","Da igual lo que pongas después: la mitad del <i>if</i> se queda siempre en presente simple."]},

  {t:"AS SOON AS, UNTIL, BEFORE, AS LONG AS", s:"el tiempo futuro también va en presente",
   p:"La regla del <i>if</i> se extiende a toda una familia de conjunciones de tiempo. Detrás de ellas, <b>presente</b>, aunque estés hablando de mañana.",
   table:{head:["Conjunción","Español","Ejemplo"], rows:[
     ["as soon as","en cuanto","I'll text as soon as I land."],
     ["until","hasta que","We'll wait until she calls."],
     ["before","antes de que","Send it before you leave."],
     ["after","después de que","We'll eat after they arrive."],
     ["as long as","mientras, siempre que","I'll help as long as you try."]
   ]},
   aviso:["La lista que hay que memorizar","<i>if, unless, when, as soon as, until, before, after, as long as</i>. Detrás de las ocho: presente, nunca <i>will</i>."]}
];

/* Sarah (A) y David (B) en las gradas, la noche del 19 de marzo */
const DIALOGUE = [
 {s:"A", ipa:"ˈdʒuːliə ɪz əˈsliːp ʃi seɪd ɡʊdˈbaɪ tuː juː ˈtwaɪs ˈdʒʌst ɪn keɪs", p:"Chúlia is aslíip. shi sed gudbái tu iú tuáis, chast in kéis",
  b:[["Julia is asleep.","Julia está dormida."],["She said goodbye to you twice,","Se despidió de ti dos veces,"],["just in case.","por si acaso."]]},
 {s:"B", ipa:"ɪn keɪs əv wʌt", p:"in kéis av uát",
  b:[["In case of what?","¿Por si acaso qué?"]]},
 {s:"A", ipa:"ɪn keɪs juː doʊnt kʌm tuː ðə ˈerpɔːrt ɪf juː kʌm ʃiːl seɪ ɪt ə θɜːrd taɪm", p:"in kéis iú dóunt kam tu di érport. if iú kam, shíil séi it a zerd táim",
  b:[["In case you don't come","Por si no vienes"],["to the airport.","al aeropuerto."],["If you come,","Si vienes,"],["she'll say it a third time.","lo dirá una tercera vez."]],
  n:"<b>If you come, she'll say…</b>: condición en presente, resultado con <i>will</i>."},
 {s:"B", ipa:"aɪm ˈkʌmɪŋ", p:"áim káming",
  b:[["I'm coming.","Voy a ir."]]},
 {s:"A", ipa:"ˈθɪŋk əˈbaʊt ɪt ɪf juː kʌm juːl biː sæd ɔːl ˈæftərnuːn", p:"zink abáut it. if iú kam, iúl bi sad ol áfternun",
  b:[["Think about it.","Piénsalo."],["If you come,","Si vienes,"],["you'll be sad all afternoon.","estarás triste toda la tarde."]]},
 {s:"B", ipa:"aɪl biː sæd ɔːl ˌæftərˈnuːn ˈeniweɪ", p:"áil bi sad ol áfternun éniuei",
  b:[["I'll be sad all afternoon","Voy a estar triste toda la tarde"],["anyway.","de todos modos."]]},
 {s:"A", ipa:"ðæts feər ðen kʌm bʌt aɪl seɪ wʌn θɪŋ fɜːrst", p:"dats fer. den kam. bat áil séi uán zing ferst",
  b:[["That's fair.","Es justo."],["Then come.","Entonces ven."],["But I'll say one thing first.","Pero diré una cosa antes."]]},
 {s:"B", ipa:"ɡoʊ əˈhed", p:"góu ajéd",
  b:[["Go ahead.","Adelante."]]},
 {s:"A", ipa:"ʌnˈles juː ˈprɑːmɪs miː ˈsʌmθɪŋ aɪ woʊnt luk æt juː æt ðə ɡeɪt", p:"anlés iú prámis mi sámzing, ái uóunt luk at iú at da guéit",
  b:[["Unless you promise me something,","A menos que me prometas una cosa,"],["I won't look at you","no te voy a mirar"],["at the gate.","en la puerta de embarque."]],
  n:"<b>Unless</b> ya lleva el «no» dentro: detrás va el verbo en afirmativo."},
 {s:"B", ipa:"ðæts ə strɔːŋ kənˈdɪʃn wʌt ɪz ɪt", p:"dats a strong kondíshon. uát is it",
  b:[["That's a strong condition.","Es una condición fuerte."],["What is it?","¿Cuál es?"]]},
 {s:"A", ipa:"ɪf juː stɑːp ˈstʌdiɪŋ ɪn meɪ ˈdʒuːliə wɪnz ænd aɪ kɑːnt lɪv wɪð ðæt", p:"if iú stap stádiing in méi, Chúlia uíns. and ái kant liv uid dat",
  b:[["If you stop studying in May,","Si dejas de estudiar en mayo,"],["Julia wins.","Julia gana."],["And I can't live with that.","Y eso no lo soporto."]]},
 {s:"B", ipa:"soʊ ʃi toʊld juː əˈbaʊt ðə ˌprɪˈdɪkʃnz", p:"sóu shi tóuld iú abáut da pridíkshons",
  b:[["So she told you","Así que te contó"],["about the predictions.","lo de las predicciones."]]},
 {s:"A", ipa:"ʃi telz ˈevribɑːdi ˈevriθɪŋ prɑːmɪs miː faɪv ˈmɪnɪts ə deɪ", p:"shi tels évribadi évrizing. prámis mi fáiv mínits a déi",
  b:[["She tells everybody everything.","Le cuenta todo a todo el mundo."],["Promise me five minutes a day.","Prométeme cinco minutos al día."]]},
 {s:"B", ipa:"faɪv ˈmɪnɪts", p:"fáiv mínits",
  b:[["Five minutes?","¿Cinco minutos?"]]},
 {s:"A", ipa:"æz lɔːŋ æz juː rɪˈkɔːrd ˈsʌmθɪŋ ˈevri deɪ ɪt kaʊnts iːvn ə vɔɪs noʊt", p:"as long as iú rikórd sámzing évri déi, it káunts. íivn a vóis nóut",
  b:[["As long as you record something","Mientras grabes algo"],["every day,","cada día,"],["it counts.","cuenta."],["Even a voice note.","Hasta una nota de voz."]],
  n:"<b>As long as</b> va con presente, aunque hable del futuro."},
 {s:"B", ipa:"ænd ɪf aɪ mɪs ə deɪ", p:"and if ái mis a déi",
  b:[["And if I miss a day?","¿Y si me salto un día?"]]},
 {s:"A", ipa:"ɪf juː mɪs ə deɪ juː kæn stɑːrt əˈɡen ɪf juː mɪs ə wiːk aɪl kɔːl jʊr ˈsɪstər", p:"if iú mis a déi, iú kan start aguén. if iú mis a uíik, áil kol iór sístar",
  b:[["If you miss a day,","Si te saltas un día,"],["you can start again.","puedes volver a empezar."],["If you miss a week,","Si te saltas una semana,"],["I'll call your sister.","llamo a tu hermana."]],
  n:"Fíjate: el resultado no siempre lleva <i>will</i>. Aquí uno va con <i>can</i>."},
 {s:"B", ipa:"nɑːt ˈɑːnə", p:"nat ána",
  b:[["Not Ana.","A Ana no."]]},
 {s:"A", ipa:"ˈɑːnə ænd ɪf ʃi kɔːlz miː fɜːrst aɪl ænsər", p:"ána. and if shi kols mi ferst, áil ánsar",
  b:[["Ana.","A Ana."],["And if she calls me first,","Y si me llama ella primero,"],["I'll answer.","contesto."]]},
 {s:"B", ipa:"ɔːl raɪt aɪ ˈprɑːmɪs faɪv ˈmɪnɪts ə deɪ", p:"ol ráit. ái prámis. fáiv mínits a déi",
  b:[["All right. I promise.","Está bien. Lo prometo."],["Five minutes a day.","Cinco minutos al día."]]},
 {s:"A", ipa:"ðen wen aɪ lænd aɪl tekst juː ɪt wɪl biː θriː ɪn ðə ˈmɔːrnɪŋ hɪr doʊnt rɪˈplaɪ", p:"den uén ái land, áil tekst iú. it uíl bi zríi in da mórning jíer. dóunt riplái",
  b:[["Then when I land,","Entonces cuando aterrice,"],["I'll text you.","te escribo."],["It will be three in the morning here.","Aquí serán las tres de la mañana."],["Don't reply.","No contestes."]],
  n:"<b>When I land</b>: ella aterriza seguro, por eso <i>when</i> y no <i>if</i>."},
 {s:"B", ipa:"aɪl rɪˈplaɪ", p:"áil riplái",
  b:[["I'll reply.","Voy a contestar."]]},
 {s:"A", ipa:"aɪ noʊ juː wɪl wiːl weɪt ˈʌntɪl ðə lɑːst kɔːl ænd ðen aɪl ɡoʊ", p:"ái nóu iú uíl. uíil uéit antíl da last kol, and den áil góu",
  b:[["I know you will.","Ya sé que sí."],["We'll wait until the last call,","Esperaremos hasta la última llamada,"],["and then I'll go.","y entonces me voy."]],
  n:"<b>Until the last call</b>: tras <i>until</i>, nunca <i>will</i>."},
 {s:"B", ipa:"ænd ɪf aɪ kraɪ æt ðə ɡeɪt", p:"and if ái krái at da guéit",
  b:[["And if I cry at the gate?","¿Y si lloro en la puerta?"]]}
];

const LECTURA = {
  titulo: "The night before the gate",
  entradilla: "Las gradas del edificio, el 19 de marzo. El texto pone a trabajar lo de la Fase 1: el primer condicional, el orden de las dos mitades, <i>unless</i>, <i>when</i> frente a <i>if</i>, los resultados con <i>can</i> y el presente detrás de <i>as long as</i> y <i>until</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Julia is asleep upstairs and her flight is early. She said goodbye to me twice, just in case I don't go to the airport tomorrow. If I go, she will say it a third time, and I will go.",
    "Sarah made a condition on the stairs. Unless I promise her five minutes of English every day, she won't look at me at the gate. As long as I record something, it counts, and a voice note counts too. If I miss a day, I can start again. If I miss a week, she will call my sister.",
    "We will wait at the airport until the last call. When she lands in Toronto, she will text me, and it will be three in the morning here. She says I shouldn't reply, but I will reply.",
    "Tom and Emma leave at the end of the month, so March is a long goodbye. If they all go, the city will be quiet. My grandfather says the quiet part of the year is the part where people finally study."
  ],
  glosario: [
    ["is asleep","ɪz əˈsliːp","está dormida","is aslíip"],
    ["upstairs","ˌʌpˈsterz","arriba","apstérs"],
    ["flight","flaɪt","vuelo","fláit"],
    ["early","ˈɜːrli","temprano","érli"],
    ["said goodbye","sed ˌɡʊdˈbaɪ","se despidió","sed gudbái"],
    ["goodbye","ˌɡʊdˈbaɪ","adiós, despedida","gudbái"],
    ["twice","twaɪs","dos veces","tuáis"],
    ["just in case","dʒʌst ɪn keɪs","por si acaso","chast in kéis"],
    ["just","dʒʌst","sólo, justo","chast"],
    ["in case","ɪn keɪs","por si acaso","in kéis"],
    ["tomorrow","təˈmɑːroʊ","mañana","tumárou"],
    ["third","θɜːrd","tercera","zerd"],
    ["made","meɪd","puso, hizo","méid"],
    ["a condition","ə kənˈdɪʃn","una condición","a kondíshon"],
    ["condition","kənˈdɪʃn","condición","kondíshon"],
    ["stairs","sterz","gradas, escaleras","sters"],
    ["unless","ənˈles","a menos que","anlés"],
    ["promise","ˈprɑːmɪs","prometa, prometer","prámis"],
    ["five minutes","faɪv ˈmɪnɪts","cinco minutos","fáiv mínits"],
    ["minutes","ˈmɪnɪts","minutos","mínits"],
    ["English","ˈɪŋɡlɪʃ","inglés","ínglish"],
    ["won't look","woʊnt lʊk","no mirará","uóunt luk"],
    ["won't","woʊnt","no (futuro)","uóunt"],
    ["look","lʊk","mirar","luk"],
    ["gate","ɡeɪt","puerta de embarque","guéit"],
    ["as long as","æz lɔːŋ æz","mientras, siempre que","as long as"],
    ["long","lɔːŋ","largo","long"],
    ["record","rɪˈkɔːrd","grabe, grabar","rikórd"],
    ["something","ˈsʌmθɪŋ","algo","sámzing"],
    ["counts","kaʊnts","cuenta, vale","káunts"],
    ["a voice note","ə vɔɪs noʊt","una nota de voz","a vóis nóut"],
    ["voice","vɔɪs","voz","vóis"],
    ["note","noʊt","nota","nóut"],
    ["miss","mɪs","me salto, perder","mis"],
    ["start","stɑːrt","empezar","start"],
    ["week","wiːk","semana","uíik"],
    ["will call","wɪl kɔːl","llamará","uíl kol"],
    ["call","kɔːl","llamada, llamar","kol"],
    ["sister","ˈsɪstər","hermana","sístar"],
    ["wait","weɪt","esperar","uéit"],
    ["airport","ˈerpɔːrt","aeropuerto","érport"],
    ["until","ənˈtɪl","hasta que","antíl"],
    ["last","læst","última","last"],
    ["lands","lændz","aterriza","lands"],
    ["will text","wɪl tekst","escribirá","uíl tekst"],
    ["text","tekst","escribir un mensaje","tekst"],
    ["morning","ˈmɔːrnɪŋ","mañana (parte del día)","mórning"],
    ["shouldn't","ˈʃʊdnt","no debería","shúdnt"],
    ["reply","rɪˈplaɪ","contestar","riplái"],
    ["will reply","wɪl rɪˈplaɪ","contestaré","uíl riplái"],
    ["will go","wɪl ɡoʊ","iré","uíl góu"],
    ["will say","wɪl seɪ","dirá","uíl séi"],
    ["will wait","wɪl weɪt","esperaremos","uíl uéit"],
    ["leave","liːv","se van, salir","líiv"],
    ["the end","ði end","el final","di end"],
    ["end","end","final","end"],
    ["month","mʌnθ","mes","manz"],
    ["March","mɑːrtʃ","marzo","march"],
    ["city","ˈsɪti","ciudad","síti"],
    ["will be","wɪl biː","estará, será","uíl bi"],
    ["quiet","ˈkwaɪət","tranquila, callada","kuáiat"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfadar"],
    ["part","pɑːrt","parte","part"],
    ["year","jɪr","año","íer"],
    ["where","wer","en la que","uér"],
    ["finally","ˈfaɪnəli","por fin","fáinali"],
    ["study","ˈstʌdi","estudiar","stádi"],
    ["Julia","ˈdʒuːliə","Julia (compañera de piso)","chúlia"],
    ["Tom","tɑːm","Tom (hermano de Emma)","tam"],
    ["Emma","ˈemə","Emma (hermana de Tom)","éma"],
    ["her","hɜːr","su (de ella)","jer"],
    ["she won't","ʃiː woʊnt","ella no","shii uóunt"],
    ["three","θriː","tres","zríi"],
    ["day","deɪ","día","déi"],
    ["every day","ˈevri deɪ","cada día","évri déi"],
    ["all","ɔːl","todos","ol"],
    ["people","ˈpiːpl","la gente","píipl"],
    ["says","sez","dice","ses"],
    ["said","sed","dijo","sed"],
    ["too","tuː","también","túu"]
  ],
  preguntas: [
    { q:"Why did Julia say goodbye twice?",
      ops:["Because she is leaving tonight","In case David doesn't go to the airport","Because she forgot the first time"], ok:1,
      pista:"Primer párrafo. Es una precaución, no un olvido." },
    { q:"What happens if David misses a whole week?",
      ops:["Sarah will call his sister","He can start again","Julia wins the prediction"], ok:0,
      pista:"Segundo párrafo. Un día y una semana no tienen el mismo castigo." },
    { q:"What will Sarah do when she lands in Toronto?",
      ops:["She will wait until the morning","She will call his sister","She will text David"], ok:2,
      pista:"Tercer párrafo, aunque aquí sean las tres de la mañana." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-15"] = {
  meta: {
    id: "a2-15", nivel: "A2", numero: 15,
    titulo: "Primer condicional",
    descriptor: "Puedo hablar de condiciones reales y de sus consecuencias, poner condiciones a alguien y hablar del futuro después de cuando, hasta que y en cuanto.",
    escena: "Sarah & David · las gradas del edificio, la víspera del 20 de marzo",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
