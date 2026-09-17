/* ============================================================
   LECCIÓN A2-14 · El futuro con will: predicciones
   Reparto: Julia, su última noche en Honduras, en la azotea. La
   lectura reúne los seis puntos de la Fase 1 —will de predicción,
   los grados de certeza, la posición del adverbio, might y may,
   be likely to y las expresiones de futuro lejano— en ella, yo,
   ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Predecir", items:[
    ["prediction","prɪˈdɪkʃn","predicción","pridíkshon"],["I think","aɪ θɪŋk","creo que","ái zink"],
    ["I'm sure","aɪm ʃʊr","estoy seguro","áim shur"],["I bet","aɪ bet","apuesto a que","ái bet"],
    ["I hope so","aɪ hoʊp soʊ","ojalá","ái jóup sóu"],["I doubt it","aɪ daʊt ɪt","lo dudo","ái dáut it"],
    ["to prove","tuː pruːv","demostrar","tu prúuv"],["to guess","tuː ɡes","adivinar","tu gues"],
    ["to expect","tuː ɪkˈspekt","esperar, prever","tu ikspékt"],["to change","tuː tʃeɪndʒ","cambiar","tu chéinch"]
  ]},
  {g:"Qué tan seguro", items:[
    ["definitely","ˈdefɪnətli","seguro","définitli"],["certainly","ˈsɜːrtnli","sin duda","sértnli"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],["might","maɪt","puede que","máit"],
    ["may","meɪ","puede que","méi"],["perhaps","pərˈhæps","tal vez","perjáps"],
    ["likely","ˈlaɪkli","probable","láikli"],["unlikely","ʌnˈlaɪkli","poco probable","anláikli"],
    ["a chance","ə tʃæns","una posibilidad","a chans"],["no way","noʊ weɪ","ni de broma","nóu uéi"]
  ]},
  {g:"Futuro lejano", items:[
    ["in five years","ɪn faɪv jɪrz","dentro de cinco años","in fáiv íers"],["by then","baɪ ðen","para entonces","bái den"],
    ["one day","wʌn deɪ","algún día","uán déi"],["sooner or later","ˈsuːnər ɔːr ˈleɪtər","tarde o temprano","súunar or léitar"],
    ["in the long run","ɪn ðə lɔːŋ rʌn","a la larga","in da long ran"],["from now on","frʌm naʊ ɑːn","de ahora en adelante","from náu an"],
    ["sooner","ˈsuːnər","antes","súunar"],["eventually","ɪˈventʃuəli","con el tiempo","ivénchuali"],
    ["for good","fɔːr ɡʊd","para siempre","for gud"],["never again","ˈnevər əˈɡen","nunca más","névar aguén"]
  ]},
  {g:"La última noche", items:[
    ["roof","ruːf","azotea","rúuf"],["flight","flaɪt","vuelo","fláit"],
    ["goodbye","ˌɡʊdˈbaɪ","adiós","gudbái"],["Safe flight","seɪf flaɪt","buen vuelo","séif fláit"],
    ["receipt","rɪˈsiːt","recibo","risíit"],["back","bæk","reverso","bak"],
    ["honest","ˈɑːnɪst","sincero","ánist"],["impressive","ɪmˈpresɪv","impresionante","imprésiv"],
    ["invented","ɪnˈventɪd","inventado","invéntid"],["Go on","ɡoʊ ɑːn","sigue","góu an"]
  ]}
];

const PRONKEY = [
  ["t muda","La <i>t</i> de <i>might</i> y <i>right</i> se apoya apenas.","might &rarr; máit"],
  ["gh muda","En <i>might</i>, <i>right</i> y <i>flight</i> la <i>gh</i> no suena.","right &rarr; ráit"],
  ["h muda","La <i>h</i> de <i>honest</i> y <i>hour</i> no se pronuncia.","honest &rarr; ánist"],
  ["p muda","La <i>p</i> de <i>receipt</i> no se pronuncia.","receipt &rarr; risíit"],
  ["ch","Como en «coche».","chance &rarr; chans"],
  ["sh","Como pedir silencio.","sure &rarr; shur"],
  ["z","Lengua entre los dientes, sin voz.","think &rarr; zink"],
  ["v","Labio de abajo contra los dientes de arriba.","prove &rarr; prúuv"],
  ["r final","Apenas se toca; nunca vibra.","sooner &rarr; súunar"]
];

const VERBS = [
  ["to predict","reg","predict · predicts","predicted","will predict","predecir"],
  ["to prove","reg","prove · proves","proved","will prove","demostrar"],
  ["to expect","reg","expect · expects","expected","will expect","prever"],
  ["to guess","reg","guess · guesses","guessed","will guess","adivinar"],
  ["to decide","reg","decide · decides","decided","will decide","decidir"],
  ["to happen","reg","happen · happens","happened","will happen","pasar"],
  ["to remember","reg","remember · remembers","remembered","will remember","recordar"],
  ["to speak","irr","speak · speaks","spoke","will speak","hablar"],
  ["to keep going","irr","keep going · keeps going","kept going","will keep going","seguir adelante"],
  ["to get","irr","get · gets","got","will get","sacar, obtener"],
  ["to write","irr","write · writes","wrote","will write","escribir"],
  ["to become","irr","become · becomes","became","will become","volverse"]
];

const GRAMMAR = [
  {t:"WILL para predecir", s:"lo que crees que va a pasar",
   p:"Ya conocías <b>will</b> para avisos y decisiones del momento. Su tercer oficio, y el más frecuente, es la <b>predicción</b>: lo que tú crees, sin pruebas delante. Por eso suele venir acompañado de una fórmula de opinión.",
   chips:[["I think you'll pass.","Creo que aprobarás."],["I'm sure she'll come back.","Estoy seguro de que volverá."],["I bet he won't call.","Apuesto a que no llamará."],["I doubt it will rain.","Dudo que llueva."]],
   aviso:["<i>Going to</i> necesita pruebas; <i>will</i>, no","<i>Look at those clouds: it's <b>going to</b> rain.</i> (lo ves venir) &nbsp;·&nbsp; <i>I think it <b>will</b> rain tomorrow.</i> (es tu opinión)."]},

  {t:"Los grados de certeza", s:"del cien por cien al tal vez",
   p:"Entre «sí» y «no» hay una escala entera, y el inglés la marca con adverbios. Aprenderla cambia por completo cómo suenas al opinar.",
   table:{head:["Certeza","Fórmula","Ejemplo"], rows:[
     ["100%","will definitely","You'll definitely pass."],
     ["80%","will probably","You'll probably stop in May."],
     ["50%","might / may","Emma might come back."],
     ["20%","probably won't","She probably won't come."],
     ["0%","definitely won't","He definitely won't call."]
   ]},
   aviso:["Cuidado con el 20 por ciento","Para decir «probablemente no», el inglés pone el adverbio <b>delante</b> del negativo: <span class='right'>probably won't</span>, no <span class='wrong'>won't probably</span>."]},

  {t:"Dónde va el adverbio", s:"detrás en afirmativa, delante en negativa",
   p:"La regla es corta y casi nadie la explica: con <b>will</b>, el adverbio va detrás; con <b>won't</b>, delante.",
   table:{head:["Frase","Posición","Correcto"], rows:[
     ["Afirmativa","will + adverbio","You will <b>definitely</b> pass."],
     ["Negativa","adverbio + won't","You <b>definitely</b> won't pass."],
     ["Afirmativa","will + adverbio","She'll <b>probably</b> call."],
     ["Negativa","adverbio + won't","She <b>probably</b> won't call."]
   ]},
   aviso:["Es la misma regla de los demás auxiliares","<i>He has <b>definitely</b> finished</i> pero <i>he <b>definitely</b> hasn't finished</i>. El adverbio siempre se coloca antes de la parte negativa."]},

  {t:"MIGHT y MAY", s:"la posibilidad sin compromiso",
   p:"Cuando no sabes, no uses <i>will</i>. <b>Might</b> y <b>may</b> dicen «puede que sí, puede que no» y funcionan como modales: <b>sin <i>to</i>, sin <i>-s</i>, sin <i>do</i></b>.",
   table:{head:["Función","Ejemplo","Español"], rows:[
     ["Posibilidad","She might come back.","Puede que vuelva."],
     ["Negativo","He might not come.","Puede que no venga."],
     ["Más formal","It may rain tonight.","Puede que llueva."],
     ["Nunca en pregunta","<span class='wrong'>Might she come?</span>","—"]
   ]},
   aviso:["<i>Might not</i> no se contrae","Se escribe entero. Y ojo: <i>might</i> no es el pasado de <i>may</i> en el uso moderno; los dos hablan del presente y del futuro."]},

  {t:"BE LIKELY TO y THERE'S A CHANCE", s:"medir la probabilidad",
   p:"Dos maneras más formales de decir lo mismo, muy útiles en el IELTS Writing, donde <i>maybe</i> suena pobre.",
   table:{head:["Fórmula","Detrás va","Ejemplo"], rows:[
     ["be likely to","to + verbo","She's likely to come back sooner."],
     ["be unlikely to","to + verbo","He's unlikely to change."],
     ["There's a chance (that)","frase entera","There's a chance she'll come."],
     ["It's possible that","frase entera","It's possible that they'll stay."]
   ]},
   aviso:["<i>Likely</i> es adjetivo, no adverbio","Aunque acabe en <i>-ly</i>: <span class='right'>she is likely to come</span>, no <span class='wrong'>she likely comes</span>. Va con el verbo <i>to be</i>."]},

  {t:"El futuro lejano", s:"in five years, by then, sooner or later",
   p:"Para lo que está más allá de la semana que viene hay un juego de expresiones propio. La preposición es la trampa.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["in five years","<span class='wrong'>after five years</span>","dentro de cinco años"],
     ["by then","<span class='wrong'>for then</span>","para entonces"],
     ["sooner or later","—","tarde o temprano"],
     ["one day","<span class='wrong'>a day</span>","algún día"]
   ]},
   aviso:["<i>In</i> mirando al futuro es «dentro de»","<i>In five years</i> no significa «durante cinco años»; eso sería <b>for five years</b>. Una preposición y dos sentidos opuestos."]}
];

/* Julia (A) y David (B) en la azotea, la última noche */
const DIALOGUE = [
 {s:"A", ipa:"læst naɪt sɪt daʊn aɪm ˈɡoʊɪŋ tuː tel juː wʌt wɪl ˈhæpən ðɪs jɪr", p:"last náit. sit dáun. áim góing tu tel iú uát uíl jápen dis íer",
  b:[["Last night.","Última noche."],["Sit down.","Siéntate."],["I'm going to tell you","Te voy a decir"],["what will happen","lo que va a pasar"],["this year.","este año."]]},
 {s:"B", ipa:"juː kɑːnt noʊ ðæt", p:"iú kant nóu dat",
  b:[["You can't know that.","Eso no lo puedes saber."]]},
 {s:"A", ipa:"aɪ kɑːnt noʊ ɪt aɪ kæn prɪˈdɪkt ɪt aɪm raɪt əˈbaʊt ˈeɪti pər sent əv ðə taɪm", p:"ái kant nóu it. ái kan pridíkt it. áim ráit abáut éiti per sent av da táim",
  b:[["I can't know it.","No puedo saberlo."],["I can predict it.","Puedo predecirlo."],["I'm right about","Acierto como el"],["eighty per cent of the time.","ochenta por ciento de las veces."]]},
 {s:"B", ipa:"ˈeɪti ɔːl raɪt stɑːrt", p:"éiti. ol ráit. start",
  b:[["Eighty.","Ochenta."],["All right. Start.","Bueno. Empieza."]]},
 {s:"A", ipa:"juːl pæs biː wʌn ɪn sepˈtembər ˈdefɪnətli", p:"iúl pas bi-uán in septémbar. définitli",
  b:[["You'll pass B1","Vas a aprobar B1"],["in September.","en septiembre."],["Definitely.","Seguro."]]},
 {s:"B", ipa:"ˈdefɪnətli", p:"définitli",
  b:[["Definitely?","¿Seguro?"]]},
 {s:"A", ipa:"juːl ˈdefɪnətli pæs juː woʊnt ɡet ðə mɑːrk juː wɑːnt bʌt juːl pæs", p:"iúl définitli pas. iú uóunt guet da mark iú uánt, bat iúl pas",
  b:[["You'll definitely pass.","Vas a aprobar seguro."],["You won't get the mark","No sacarás la nota"],["you want,","que quieres,"],["but you'll pass.","pero apruebas."]],
  n:"<b>You'll definitely pass</b>: con <i>will</i>, el adverbio va detrás."},
 {s:"B", ipa:"ðæts ə streɪndʒ ˈkɑːmplɪment", p:"dats a stréinch kámpliment",
  b:[["That's a strange compliment.","Qué cumplido más raro."]]},
 {s:"A", ipa:"ɪts ən ˈɑːnɪst wʌn ˈsekənd juːl ˈprɑːbəbli stɑːp ˈstʌdiɪŋ ɪn meɪ", p:"its an ánist uán. sékond: iúl prábabli stap stádiing in méi",
  b:[["It's an honest one.","Es uno sincero."],["Second:","Segundo:"],["you'll probably stop studying","probablemente dejarás de estudiar"],["in May.","en mayo."]]},
 {s:"B", ipa:"aɪ woʊnt", p:"ái uóunt",
  b:[["I won't.","No lo haré."]]},
 {s:"A", ipa:"ˈevribɑːdi dʌz ɪn meɪ ɪts hɑːt ðə jɪr ɪz lɔːŋ ænd ˈnʌθɪŋ ˈhæpənz ɪn meɪ", p:"évribadi das in méi. its jat, da íer is long, and názing jápens in méi",
  b:[["Everybody does in May.","Todo el mundo lo hace en mayo."],["It's hot,","Hace calor,"],["the year is long,","el año es largo,"],["and nothing happens in May.","y en mayo no pasa nada."]]},
 {s:"B", ipa:"aɪl pruːv juː rɔːŋ", p:"áil prúuv iú rong",
  b:[["I'll prove you wrong.","Te voy a demostrar que te equivocas."]]},
 {s:"A", ipa:"aɪ hoʊp soʊ θɜːrd ˈemə maɪt kʌm bæk ɪn dɪˈsembər", p:"ái jóup sóu. zerd: Éma máit kam bak in disémbar",
  b:[["I hope so.","Ojalá."],["Third:","Tercero:"],["Emma might come back","puede que Emma vuelva"],["in December.","en diciembre."]],
  n:"<b>Might</b> + verbo base: puede que sí, puede que no. Sin <i>to</i> y sin <i>-s</i>."},
 {s:"B", ipa:"maɪt", p:"máit",
  b:[["Might?","¿Puede que?"]]},
 {s:"A", ipa:"maɪt ʃiːz ˈtɔːkɪŋ əˈbaʊt ɪt bʌt ˈnʌθɪŋ ɪz dɪˈsaɪdɪd ðerz ə tʃæns", p:"máit. shíis tóking abáut it, bat názing is disáidid. ders a chans",
  b:[["Might.","Puede que."],["She's talking about it,","Lo está hablando,"],["but nothing is decided.","pero nada está decidido."],["There's a chance.","Hay una posibilidad."]]},
 {s:"B", ipa:"ænd ˈserə", p:"and Séra",
  b:[["And Sarah?","¿Y Sarah?"]]},
 {s:"A", ipa:"ˈserə ɪz ˈlaɪkli tuː kʌm bæk ˈsuːnər ʃi woʊnt seɪ ɪt jet bʌt ʃi wɪl", p:"Séra is láikli tu kam bak súunar. shi uóunt séi it iet, bat shi uíl",
  b:[["Sarah is likely to come back","Es probable que Sarah vuelva"],["sooner.","antes."],["She won't say it yet,","No lo va a decir todavía,"],["but she will.","pero vendrá."]],
  n:"<b>Is likely to</b>: <i>likely</i> es adjetivo y va con el verbo <i>to be</i>."},
 {s:"B", ipa:"jʊr ˈveri ʃʊr fɔːr ˈsʌmbɑːdi huːz ˈeɪti pər sent raɪt", p:"iór véri shur for sámbadi júus éiti per sent ráit",
  b:[["You're very sure","Estás muy segura"],["for somebody","para alguien"],["who's eighty per cent right.","que acierta el ochenta por ciento."]]},
 {s:"A", ipa:"aɪm ʃʊr əˈbaʊt hɜːr naʊ ðə læst wʌn ænd ɪts ðə ɪmˈpɔːrtnt wʌn", p:"áim shur abáut jer. náu da last uán, and its da impórtant uán",
  b:[["I'm sure about her.","De ella estoy segura."],["Now the last one,","Ahora la última,"],["and it's the important one.","y es la importante."]]},
 {s:"B", ipa:"ɡoʊ ɑːn", p:"góu an",
  b:[["Go on.","Adelante."]]},
 {s:"A", ipa:"ɪn faɪv jɪrz juː woʊnt rɪˈmembər ðɪs ˌkɑːnvərˈseɪʃn bʌt juːl spiːk ˈɪŋɡlɪʃ wɪðˈaʊt ˈθɪŋkɪŋ", p:"in fáiv íers iú uóunt rimémbar dis konverséishon, bat iúl spíik ínglish uidáut zínking",
  b:[["In five years","Dentro de cinco años"],["you won't remember","no te acordarás"],["this conversation,","de esta conversación,"],["but you'll speak English","pero hablarás inglés"],["without thinking.","sin pensar."]],
  n:"<b>In five years</b> es «dentro de cinco años». «Durante cinco años» sería <i>for five years</i>."},
 {s:"B", ipa:"ðæt meɪ biː ðə best prɪˈdɪkʃn ˈenibɑːdi hæz ˈɡɪvn miː", p:"dat méi bi da best pridíkshon énibadi jas guívn mi",
  b:[["That may be","Puede que sea"],["the best prediction","la mejor predicción"],["anybody has given me.","que me han hecho."]]},
 {s:"A", ipa:"ɪts nɑːt ə prɪˈdɪkʃn ɪts wʌt ˈhæpənz ɪf juː kiːp ˈɡoʊɪŋ ˈsuːnər ɔːr ˈleɪtər ɪt stɑːps ˈbiːɪŋ ˈdɪfɪkəlt", p:"its nat a pridíkshon. its uát jápens if iú kíip góing. súunar or léitar it staps bíing dífikalt",
  b:[["It's not a prediction.","No es una predicción."],["It's what happens","Es lo que pasa"],["if you keep going.","si sigues adelante."],["Sooner or later","Tarde o temprano"],["it stops being difficult.","deja de ser difícil."]]},
 {s:"B", ipa:"ðen aɪd ˈbetər kiːp ˈɡoʊɪŋ seɪf flaɪt ˈdʒuːliə", p:"den áid bétar kíip góing. séif fláit, Chúlia",
  b:[["Then I'd better keep going.","Entonces más me vale seguir."],["Safe flight, Julia.","Buen vuelo, Julia."]]}
];

const LECTURA = {
  titulo: "Julia's four predictions",
  entradilla: "La última noche en la azotea, con un recibo por libreta. El texto pone a trabajar lo de la Fase 1: <i>will</i> de predicción, los grados de certeza, la posición del adverbio con <i>will</i> y <i>won't</i>, <i>might</i>, <i>be likely to</i> y las expresiones de futuro lejano. Cada párrafo cambia de persona.",
  parrafos: [
    "On her last night Julia made four predictions and wrote them on the back of a receipt. She says she is right about eighty per cent of the time. That is either very impressive or completely invented, and I still don't know which.",
    "I will definitely pass B1 in September, but I won't get the mark I want. I will probably stop studying in May, because everybody does: it's hot, the year is long, and nothing happens in May. I told her I'd prove her wrong.",
    "Emma and Tom might come back in December. Nothing is decided and they are still talking about it, so there's a chance and nothing more. Julia says Sarah is likely to come back sooner, and she is very sure for somebody who is eighty per cent right.",
    "The fourth prediction was the long one. In five years we won't remember this conversation, but we will speak English without thinking about it. She says that isn't really a prediction: it's what happens if you keep going. Sooner or later it stops being difficult."
  ],
  glosario: [
    ["made","meɪd","hizo","méid"],
    ["wrote","roʊt","las escribió","róut"],
    ["says","sez","dice","ses"],
    ["will pass","wɪl pæs","aprobaré","uíl pas"],
    ["won't get","woʊnt ɡet","no sacaré","uóunt guet"],
    ["will probably stop","wɪl ˈprɑːbəbli stɑːp","probablemente dejaré","uíl prábabli stap"],
    ["might come back","maɪt kʌm bæk","puede que vuelvan","máit kam bak"],
    ["is likely to","ɪz ˈlaɪkli tuː","es probable que","is láikli tu"],
    ["won't remember","woʊnt rɪˈmembər","no recordaremos","uóunt rimémbar"],
    ["will speak","wɪl spiːk","hablaremos","uíl spíik"],
    ["told","toʊld","le dije","tóuld"],
    ["prove","pruːv","demostrar","prúuv"],
    ["is decided","ɪz dɪˈsaɪdɪd","está decidido","is disáidid"],
    ["are talking","ɑːr ˈtɔːkɪŋ","están hablando","ar tóking"],
    ["keep going","kiːp ˈɡoʊɪŋ","sigues adelante","kíip góing"],
    ["stops being","stɑːps ˈbiːɪŋ","deja de ser","staps bíing"],
    ["happens","ˈhæpənz","pasa","jápens"],
    ["definitely","ˈdefɪnətli","seguro","définitli"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["a chance","ə tʃæns","una posibilidad","a chans"],
    ["sooner","ˈsuːnər","antes","súunar"],
    ["sooner or later","ˈsuːnər ɔːr ˈleɪtər","tarde o temprano","súunar or léitar"],
    ["in five years","ɪn faɪv jɪrz","dentro de cinco años","in fáiv íers"],
    ["last night","læst naɪt","última noche","last náit"],
    ["predictions","prɪˈdɪkʃnz","predicciones","pridíkshons"],
    ["prediction","prɪˈdɪkʃn","predicción","pridíkshon"],
    ["receipt","rɪˈsiːt","recibo","risíit"],
    ["back","bæk","reverso","bak"],
    ["mark","mɑːrk","nota","mark"],
    ["conversation","ˌkɑːnvərˈseɪʃn","conversación","konverséishon"],
    ["per cent","pər sent","por ciento","per sent"],
    ["eighty","ˈeɪti","ochenta","éiti"],
    ["impressive","ɪmˈpresɪv","impresionante","imprésiv"],
    ["invented","ɪnˈventɪd","inventado","invéntid"],
    ["hot","hɑːt","caluroso","jat"],
    ["long","lɔːŋ","largo","long"],
    ["difficult","ˈdɪfɪkəlt","difícil","dífikalt"],
    ["wrong","rɔːŋ","equivocada","rong"],
    ["sure","ʃʊr","segura","shur"],
    ["fourth","fɔːrθ","cuarta","forz"],
    ["either","ˈiːðər","o bien","íider"],
    ["completely","kəmˈpliːtli","completamente","kompliítli"],
    ["really","ˈrɪəli","de verdad","ríili"],
    ["still","stɪl","todavía","stil"],
    ["nothing more","ˈnʌθɪŋ mɔːr","nada más","názing mor"],
    ["everybody","ˈevribɑːdi","todo el mundo","évribadi"],
    ["somebody","ˈsʌmbɑːdi","alguien","sámbadi"],
    ["without thinking","wɪˈðaʊt ˈθɪŋkɪŋ","sin pensar","uidáut zínking"],
    ["September","sepˈtembər","septiembre","septémbar"],
    ["December","dɪˈsembər","diciembre","disémbar"],
    ["May","meɪ","mayo","méi"],
    ["which","wɪtʃ","cuál de las dos","uích"],
    ["the time","ðə taɪm","las veces","da táim"],
    ["pass","pæs","aprobar","pas"],
    ["B","biː","B (del nivel B1)","bi"],
    ["studying","ˈstʌdiɪŋ","estudiar","stádiing"],
    ["talking","ˈtɔːkɪŋ","hablando","tóking"]
  ],
  preguntas: [
    { q:"How often does Julia say she is right?",
      ops:["Always","About eighty per cent of the time","Half the time"], ok:1,
      pista:"Primer párrafo. David duda de que la cifra sea real." },
    { q:"Why does she predict David will stop studying in May?",
      ops:["Because everybody does","Because he will be travelling","Because the exam is in May"], ok:0,
      pista:"Segundo párrafo: da tres razones seguidas después de los dos puntos." },
    { q:"What is the fourth prediction?",
      ops:["That Sarah will come back","That he will fail the exam","That in five years he'll speak English without thinking"], ok:2,
      pista:"Cuarto párrafo, y ella dice que en realidad no es una predicción." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-14"] = {
  meta: {
    id: "a2-14", nivel: "A2", numero: 14,
    titulo: "El futuro con will: predicciones",
    descriptor: "Puedo predecir lo que creo que pasará, graduar cuánta seguridad tengo y expresar posibilidad sin comprometerme.",
    escena: "Julia & David · la azotea, su última noche en Honduras",
    personajeIA: "Julia", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
