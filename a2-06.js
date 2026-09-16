/* ============================================================
   LECCIÓN A2-06 · Ya, todavía, nunca
   Reparto: Mrs. Castro, el 24 de diciembre, con sesenta tamales y
   tres horas de sueño. La lectura reúne los seis puntos de la
   Fase 1 —already, yet, still, just, su posición en la frase, y
   for frente a since— en ella, yo, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Ya, todavía, aún", items:[
    ["already","ɔːlˈredi","ya","olrédi"],["yet","jet","todavía, ya","iet"],
    ["not yet","nɑːt jet","todavía no","nat iet"],["still","stɪl","todavía, sigue","stil"],
    ["just","dʒʌst","acabar de","chast"],["so far","soʊ fɑːr","hasta ahora","sóu far"],
    ["by now","baɪ naʊ","a estas alturas","bái náu"],["at last","æt læst","por fin","at last"],
    ["ever","ˈevər","alguna vez","évar"],["never","ˈnevər","nunca","névar"]
  ]},
  {g:"Cuánto tiempo", items:[
    ["for","fɔːr","durante","for"],["since","sɪns","desde","sins"],
    ["for two hours","fɔːr tuː ˈaʊərz","dos horas","for tu áuars"],["since Monday","sɪns ˈmʌndeɪ","desde el lunes","sins mándei"],
    ["for years","fɔːr jɪrz","desde hace años","for íers"],["since 1985","sɪns ˈnaɪntiːn ˈeɪti faɪv","desde 1985","sins náintiin éiti-fáiv"],
    ["all day","ɔːl deɪ","todo el día","ol déi"],["How long…?","haʊ lɔːŋ","¿cuánto tiempo?","jáu long"],
    ["recently","ˈriːsntli","hace poco","ríisntli"],["ago","əˈɡoʊ","hace","agóu"]
  ]},
  {g:"La Nochebuena", items:[
    ["Christmas Eve","ˈkrɪsməs iːv","Nochebuena","krísmas íiv"],["tamales","təˈmɑːleɪz","tamales","tamáleis"],
    ["bread","bred","pan","bred"],["recipe","ˈresəpi","receta","résapi"],
    ["oven","ˈʌvn","horno","ávn"],["church","tʃɜːrtʃ","iglesia","cherch"],
    ["tradition","trəˈdɪʃn","tradición","tradíshon"],["midnight","ˈmɪdnaɪt","medianoche","mídnait"],
    ["neighbour","ˈneɪbər","vecino","néibar"],["to celebrate","tuː ˈseləbreɪt","celebrar","tu sélabreit"]
  ]},
  {g:"En la cocina", items:[
    ["to taste","tuː teɪst","probar","tu téist"],["to try","tuː traɪ","probar, intentar","tu trái"],
    ["to write down","tuː raɪt daʊn","apuntar","tu ráit dáun"],["handwriting","ˈhændraɪtɪŋ","letra","jándraiting"],
    ["talent","ˈtælənt","talento","tálent"],["to sit down","tuː sɪt daʊn","sentarse","tu sit dáun"],
    ["to stand","tuː stænd","estar de pie","tu stand"],["awake","əˈweɪk","despierto","auéik"],
    ["review","rɪˈvjuː","crítica, valoración","riviú"],["properly","ˈprɑːpərli","como es debido","práparli"]
  ]}
];

const PRONKEY = [
  ["ch","Como en «coche». Aparece dos veces en <i>church</i>.","church &rarr; cherch"],
  ["sh","Como pedir silencio.","tradition &rarr; tradíshon"],
  ["j","Aire por la garganta, sin raspar.","handwriting &rarr; jándraiting"],
  ["z","Lengua entre los dientes, sin voz.","think &rarr; zink"],
  ["v","Labio de abajo contra los dientes de arriba.","oven &rarr; ávn"],
  ["ie","La <i>y</i> inicial de <i>yet</i>: como la <i>i</i> de «hielo».","yet &rarr; iet"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","awake &rarr; auéik"],
  ["w muda","La <i>w</i> de <i>write</i> y <i>wrote</i> no suena.","write &rarr; ráit"],
  ["r final","Apenas se toca; nunca vibra.","neighbour &rarr; néibar"]
];

const VERBS = [
  ["to prepare","reg","prepare · prepares","prepared","will prepare","preparar"],
  ["to taste","reg","taste · tastes","tasted","will taste","probar"],
  ["to try","reg","try · tries","tried","will try","probar, intentar"],
  ["to notice","reg","notice · notices","noticed","will notice","notar"],
  ["to celebrate","reg","celebrate · celebrates","celebrated","will celebrate","celebrar"],
  ["to disappear","reg","disappear · disappears","disappeared","will disappear","desaparecer"],
  ["to make","irr","make · makes","made","will make","hacer"],
  ["to sit","irr","sit · sits","sat","will sit","sentarse"],
  ["to stand","irr","stand · stands","stood","will stand","estar de pie"],
  ["to write","irr","write · writes","wrote","will write","escribir"],
  ["to choose","irr","choose · chooses","chose","will choose","elegir"],
  ["to know","irr","know · knows","knew","will know","conocer, saber"]
];

const GRAMMAR = [
  {t:"ALREADY: ya, y antes de lo esperado", s:"va en medio de la frase",
   p:"<b>Already</b> dice que algo pasó <b>antes de lo previsto</b>, y por eso suele traer sorpresa. Se coloca entre el auxiliar y el participio, igual que <i>ever</i> y <i>never</i>.",
   chips:[["I've already made the tamales.","Ya hice los tamales."],["She has already asked for the recipe.","Ya pidió la receta."],["Have you already finished?","¿Ya terminaste?"],["It's already four o'clock.","Ya son las cuatro."]],
   aviso:["Va en medio, no al final","<span class='wrong'>I have made already the tamales.</span> &nbsp;&rarr;&nbsp; <span class='right'>I have <b>already</b> made the tamales.</span> Sólo se va al final cuando quieres darle mucho énfasis."]},

  {t:"YET: todavía no, y ¿ya?", s:"al final, y sólo en negativas y preguntas",
   p:"<b>Yet</b> es el compañero negativo de <i>already</i>. Nunca aparece en una afirmación, y su sitio es <b>el final de la frase</b>.",
   table:{head:["Frase","Uso","Español"], rows:[
     ["She hasn't come back yet.","negativa","Todavía no ha vuelto."],
     ["Have you eaten yet?","pregunta","¿Ya comiste?"],
     ["The bread hasn't arrived yet.","negativa","El pan todavía no llega."],
     ["<span class='wrong'>I have eaten yet.</span>","imposible","—"]
   ]},
   aviso:["<i>Yet</i> y <i>already</i> se reparten el trabajo","Afirmativa &rarr; <b>already</b>. Negativa o pregunta &rarr; <b>yet</b>. Y el español traduce las dos como «ya», lo que despista bastante."]},

  {t:"STILL: sigue pasando", s:"lo que no ha cambiado",
   p:"<b>Still</b> dice que una situación <b>continúa</b> cuando quizá ya no debería. Va delante del verbo principal, pero <b>delante del auxiliar</b> cuando la frase es negativa.",
   table:{head:["Frase","Posición","Español"], rows:[
     ["She is still standing.","tras el <i>to be</i>","Sigue de pie."],
     ["He is still choosing.","tras el <i>to be</i>","Sigue eligiendo."],
     ["I still don't understand.","antes del auxiliar","Sigo sin entender."],
     ["He still hasn't come back.","antes del auxiliar","Sigue sin volver."]
   ]},
   aviso:["<i>Still not</i> frente a <i>not yet</i>","<i>He hasn't come back <b>yet</b></i> es neutro: aún falta. <i>He <b>still</b> hasn't come back</i> añade impaciencia: ya tardó demasiado."]},

  {t:"JUST: acabar de", s:"hace un momento",
   p:"El español usa un verbo entero —«acabar de»— donde el inglés sólo pone una palabra en medio: <b>just</b>, entre el auxiliar y el participio.",
   chips:[["I've just arrived.","Acabo de llegar."],["She's just tried one.","Acaba de probar uno."],["They've just left.","Acaban de irse."],["I've just seen him.","Acabo de verlo."]],
   aviso:["No se traduce con un verbo","<span class='wrong'>I finish of arriving.</span> no existe. La fórmula entera es <b>have + just + participio</b>, y no hay nada más que aprender."]},

  {t:"Dónde va cada una", s:"el cuadro que resuelve las dudas",
   p:"Cuatro palabras, cuatro sitios. Si te aprendes esta tabla, la mitad de los errores de A2 desaparecen.",
   table:{head:["Palabra","Posición","Tipo de frase","Ejemplo"], rows:[
     ["already","en medio","afirmativa y pregunta","I've already eaten."],
     ["just","en medio","afirmativa","I've just eaten."],
     ["yet","al final","negativa y pregunta","I haven't eaten yet."],
     ["still","antes del auxiliar negativo","negativa","I still haven't eaten."],
     ["still","tras el <i>to be</i>","afirmativa","I'm still here."]
   ]},
   aviso:["Las tres primeras viven con el present perfect","<i>Already</i>, <i>just</i> y <i>yet</i> aparecen casi siempre con <b>have / has + participio</b>. <i>Still</i> es la excepción: funciona con cualquier tiempo."]},

  {t:"FOR y SINCE", s:"cuánto tiempo frente a desde cuándo",
   p:"Las dos acompañan al present perfect para medir duración, y el criterio es sencillo: <b>for</b> mide el <b>periodo</b>, <b>since</b> marca el <b>punto de partida</b>.",
   table:{head:["FOR + periodo","SINCE + momento"], rows:[
     ["for two hours","since four o'clock"],
     ["for three days","since Monday"],
     ["for forty years","since 1985"],
     ["for a long time","since I met you"]
   ]},
   aviso:["El tiempo verbal que piden","<span class='wrong'>I am here since Monday.</span> &nbsp;&rarr;&nbsp; <span class='right'>I have been here since Monday.</span> En español vale el presente; en inglés, la duración que llega hasta hoy exige <b>present perfect</b>."]}
];

/* Mrs. Castro (A) y David (B), el 24 de diciembre por la tarde */
const DIALOGUE = [
 {s:"A", ipa:"ˈdeɪvɪd kʌm ɪn hæv juː ˈiːtn jet", p:"déivid, kam in. jav iú íitn iet",
  b:[["David, come in.","David, pasa."],["Have you eaten yet?","¿Ya comiste?"]],
  n:"<b>Yet</b> al final, y sólo porque es pregunta. En afirmativa sería <i>already</i>."},
 {s:"B", ipa:"nɑːt jet aɪv dʒʌst əˈraɪvd frʌm ðə ˈmɑːrkɪt", p:"nat iet. áiv chast aráivd from da márket",
  b:[["Not yet.","Todavía no."],["I've just arrived","Acabo de llegar"],["from the market.","del mercado."]],
  n:"<b>I've just arrived</b>: donde el español pone «acabar de», el inglés pone <i>just</i> en medio."},
 {s:"A", ipa:"ɡʊd sɪt daʊn aɪv ɔːlˈredi meɪd ðə təˈmɑːleɪz ˈsɪksti əv ðem", p:"gud. sit dáun. áiv olrédi méid da tamáleis: síksti av dem",
  b:[["Good. Sit down.","Bien. Siéntate."],["I've already made","Ya hice"],["the tamales:","los tamales:"],["sixty of them.","sesenta."]],
  n:"<b>Already</b> va entre el auxiliar y el participio, nunca al final."},
 {s:"B", ipa:"ˈsɪksti hæv juː slept æt ɔːl", p:"síksti. jav iú slept at ol",
  b:[["Sixty!","¡Sesenta!"],["Have you slept","¿Ha dormido"],["at all?","algo?"]]},
 {s:"A", ipa:"θriː ˈaʊərz aɪv bɪn əˈweɪk sɪns fɔːr ðɪs ˈmɔːrnɪŋ", p:"zri áuars. áiv bin auéik sins for dis mórning",
  b:[["Three hours.","Tres horas."],["I've been awake","Llevo despierta"],["since four","desde las cuatro"],["this morning.","de la mañana."]],
  n:"<b>Since</b> marca el punto de partida, y obliga al present perfect: nunca <span class='wrong'>I am awake since four</span>."},
 {s:"B", ipa:"sɪns fɔːr ænd jʊr stɪl ˈstændɪŋ", p:"sins for. and iór stil stánding",
  b:[["Since four.","Desde las cuatro."],["And you're still standing.","Y sigue de pie."]],
  n:"<b>Still</b> detrás del <i>to be</i> en afirmativa."},
 {s:"A", ipa:"aɪm stɪl ˈstændɪŋ bɪˈkɔːz ˈnoʊbɑːdi els ɪz ˈænə ˈhæznt kʌm bæk jet", p:"áim stil stánding bikóos nóubadi els is. Ána jásnt kam bak iet",
  b:[["I'm still standing","Sigo de pie"],["because nobody else is.","porque nadie más lo está."],["Ana hasn't come back yet.","Ana todavía no ha vuelto."]]},
 {s:"B", ipa:"ʃiːz ɑːn hɜːr weɪ ʃiːz bɪn æt ðə tʃɜːrtʃ sɪns sɪks", p:"shíis an jer uéi. shíis bin at da cherch sins siks",
  b:[["She's on her way.","Viene en camino."],["She's been at the church","Lleva en la iglesia"],["since six.","desde las seis."]]},
 {s:"A", ipa:"ðen ʃi ˈhæznt ˈiːtn ˈiːðər hæz ˈdʒuːliə traɪd ðə təˈmɑːleɪz", p:"den shi jásnt íitn íider. jas Chúlia tráid da tamáleis",
  b:[["Then she hasn't eaten","Entonces no ha comido"],["either.","tampoco."],["Has Julia tried","¿Julia ha probado"],["the tamales?","los tamales?"]]},
 {s:"B", ipa:"ʃiːz dʒʌst traɪd wʌn ʃi ˈdɪdnt seɪ ˈeniθɪŋ fɔːr ten ˈsekəndz", p:"shíis chast tráid uán. shi dídnt séi énizing for ten sékonds",
  b:[["She's just tried one.","Acaba de probar uno."],["She didn't say anything","No dijo nada"],["for ten seconds.","durante diez segundos."]],
  n:"<b>For</b> mide el periodo: <i>for ten seconds</i>. Con un momento sería <i>since</i>."},
 {s:"A", ipa:"ɪz ðæt ɡʊd ɔːr bæd", p:"is dat gud or bad",
  b:[["Is that good or bad?","¿Eso es bueno o malo?"]]},
 {s:"B", ipa:"ɪts ðə best rɪˈvjuː juː kæn ɡet ʃiːz ɔːlˈredi æskt fɔːr ðə ˈresəpi", p:"its da best riviú iú kan guet. shíis olrédi askt for da résapi",
  b:[["It's the best review","Es la mejor crítica"],["you can get.","que se puede recibir."],["She's already asked","Ya pidió"],["for the recipe.","la receta."]]},
 {s:"A", ipa:"ˈnoʊbɑːdi hæz ðə ˈresəpi aɪv hæd ɪt ɪn maɪ hed fɔːr ˈfɔːrti jɪrz", p:"nóubadi jas da résapi. áiv jad it in mái jed for fórti íers",
  b:[["Nobody has the recipe.","Nadie tiene la receta."],["I've had it in my head","La tengo en la cabeza"],["for forty years.","desde hace cuarenta años."]],
  n:"<b>For forty years</b>: el español dice «desde hace», el inglés mide el periodo con <i>for</i>."},
 {s:"B", ipa:"ˈfɔːrti jɪrz hæv juː ˈevər ˈrɪtn ɪt daʊn", p:"fórti íers. jav iú évar rítn it dáun",
  b:[["Forty years.","Cuarenta años."],["Have you ever","¿La ha"],["written it down?","apuntado alguna vez?"]]},
 {s:"A", ipa:"ˈnevər ænd aɪm nɑːt ˈɡoʊɪŋ tuː stɑːrt naʊ", p:"névar. and áim nat góing tu start náu",
  b:[["Never.","Nunca."],["And I'm not going to start","Y no voy a empezar"],["now.","ahora."]]},
 {s:"B", ipa:"ˈmɪsɪz ˈkæstro ɪf juː doʊnt raɪt ɪt ɪt ˌdɪsəˈpɪrz", p:"mísis Kástro, if iú dóunt ráit it, it disapíars",
  b:[["Mrs. Castro,","Señora Castro,"],["if you don't write it,","si no la escribe,"],["it disappears.","desaparece."]]},
 {s:"A", ipa:"ðen ˈsʌmbɑːdi hæz tuː stænd nekst tuː miː ænd wɑːtʃ ɑːr juː friː təˈmɑːroʊ", p:"den sámbadi jas tu stand nekst tu mi and uách. ar iú fríi tumárou",
  b:[["Then somebody has to stand","Entonces alguien tiene que ponerse"],["next to me and watch.","a mi lado y mirar."],["Are you free tomorrow?","¿Estás libre mañana?"]]},
 {s:"B", ipa:"aɪv ɔːlˈredi sed jes ænd juː ˈhævnt æskt miː ˈprɑːpərli jet", p:"áiv olrédi sed iés, and iú jávnt askt mi práparli iet",
  b:[["I've already said yes","Ya dije que sí"],["and you haven't asked me","y usted no me lo ha pedido"],["properly yet.","como es debido todavía."]],
  n:"Las dos en la misma línea: <b>already</b> en medio de la afirmativa, <b>yet</b> al final de la negativa."},
 {s:"A", ipa:"aɪ ˈnevər ɑːsk ˈprɑːpərli brɪŋ ˈdʒuːliə ʃi hæz ˈbetər ˈhændraɪtɪŋ", p:"ái névar ask práparli. bring Chúlia: shi jas bétar jándraiting",
  b:[["I never ask properly.","Nunca pido nada como es debido."],["Bring Julia:","Trae a Julia:"],["she has better handwriting.","tiene mejor letra."]]},
 {s:"B", ipa:"ʃiːl raɪt ɪt ɪn ˈspænɪʃ ænd ɪn ˈɪŋɡlɪʃ", p:"shíil ráit it in spánish and in ínglish",
  b:[["She'll write it","La escribirá"],["in Spanish and in English.","en español y en inglés."]]},
 {s:"A", ipa:"ˈpɜːrfɪkt naʊ ðə bred ˈhæznt əˈraɪvd jet hæz ˈpɑːbloʊ ɡɔːn fɔːr ɪt", p:"pérfect. náu, da bred jásnt aráivd iet. jas Páblou gon for it",
  b:[["Perfect. Now,","Perfecto. Ahora,"],["the bread hasn't arrived yet.","el pan todavía no llega."],["Has Pablo gone for it?","¿Pablo fue por él?"]],
  n:"<b>Gone</b>, no <i>been</i>: Pablo salió y todavía no ha vuelto."},
 {s:"B", ipa:"hi left ˈtwenti ˈmɪnɪts əˈɡoʊ hiːz ˈprɑːbəbli stɪl ˈtʃuːzɪŋ", p:"ji left tuénti mínits agóu. jíis prábabli stil chúusing",
  b:[["He left twenty minutes ago.","Salió hace veinte minutos."],["He's probably","Probablemente"],["still choosing.","sigue eligiendo."]],
  n:"<b>Ago</b> obliga al pasado simple: <i>he left</i>, nunca <span class='wrong'>he has left ago</span>."},
 {s:"A", ipa:"ˈtwenti ˈmɪnɪts fɔːr bred sʌm θɪŋz ˈhævnt tʃeɪndʒd sɪns ˈnaɪntiːn ˈeɪti faɪv", p:"tuénti mínits for bred. sam zings jávnt chéinchd sins náintiin éiti-fáiv",
  b:[["Twenty minutes for bread.","Veinte minutos por un pan."],["Some things haven't changed","Algunas cosas no han cambiado"],["since 1985.","desde 1985."]]},
 {s:"B", ipa:"ænd aɪ hoʊp ðeɪ ˈnevər duː wer duː aɪ stɑːrt", p:"and ái jóup déi névar du. uér du ái start",
  b:[["And I hope they never do.","Y espero que nunca cambien."],["Where do I start?","¿Por dónde empiezo?"]]}
];

const LECTURA = {
  titulo: "Christmas Eve at Mrs. Castro's",
  entradilla: "El 24 de diciembre en la cocina de la esquina. El texto pone a trabajar lo de la Fase 1: <i>already</i> y <i>yet</i>, <i>still</i> para lo que no cambia, <i>just</i> para lo que acaba de pasar, la posición de cada uno en la frase, y <i>for</i> frente a <i>since</i>. Cada párrafo cambia de persona.",
  parrafos: [
    "Mrs. Castro has already made sixty tamales and it is only four in the afternoon. She has been awake since four this morning and she is still standing. Nobody else in this street has that talent, and nobody else would want it. She hasn't sat down yet.",
    "I have just arrived from the market with the fruit. I haven't eaten anything since breakfast, and she noticed it in two seconds. We have known each other for twenty-two years, so my face tells her everything before I open my mouth.",
    "Julia has just tried her first tamal. She didn't say anything for ten seconds, and then she asked for the recipe. Nobody has that recipe: Mrs. Castro has had it in her head for forty years and she has never written it down.",
    "Pablo went for the bread twenty minutes ago and he still hasn't come back. He is probably still choosing. Ana has been at the church since six, so she hasn't eaten either. Some things in this street haven't changed since 1985, and I hope they never do."
  ],
  glosario: [
    ["has already made","hæz ɔːlˈredi meɪd","ya ha hecho","jas olrédi méid"],
    ["has been awake","hæz bɪn əˈweɪk","lleva despierta","jas bin auéik"],
    ["is still standing","ɪz stɪl ˈstændɪŋ","sigue de pie","is stil stánding"],
    ["hasn't sat down","ˈhæznt sæt daʊn","no se ha sentado","jásnt sat dáun"],
    ["have just arrived","hæv dʒʌst əˈraɪvd","acabo de llegar","jav chast aráivd"],
    ["haven't eaten","ˈhævnt ˈiːtn","no he comido","jávnt íitn"],
    ["have known","hæv noʊn","nos conocemos","jav nóun"],
    ["has just tried","hæz dʒʌst traɪd","acaba de probar","jas chast tráid"],
    ["has had","hæz hæd","la tiene","jas jad"],
    ["has never written","hæz ˈnevər ˈrɪtn","nunca ha escrito","jas névar rítn"],
    ["still hasn't come back","stɪl ˈhæznt kʌm bæk","sigue sin volver","stil jásnt kam bak"],
    ["is still choosing","ɪz stɪl ˈtʃuːzɪŋ","sigue eligiendo","is stil chúusing"],
    ["has been","hæz bɪn","lleva","jas bin"],
    ["hasn't eaten","ˈhæznt ˈiːtn","no ha comido","jásnt íitn"],
    ["haven't changed","ˈhævnt tʃeɪndʒd","no han cambiado","jávnt chéinchd"],
    ["went","went","fue","uént"],
    ["noticed","ˈnoʊtɪst","se dio cuenta","nóutist"],
    ["didn't say","ˈdɪdnt seɪ","no dijo","dídnt séi"],
    ["asked for","æskt fɔːr","pidió","askt for"],
    ["tells","telz","le dice","tels"],
    ["hope","hoʊp","espero","jóup"],
    ["would want","wʊd wɑːnt","querría","uúd uánt"],
    ["since","sɪns","desde","sins"],
    ["for twenty-two years","fɔːr ˈtwenti tuː jɪrz","desde hace veintidós años","for tuénti-tu íers"],
    ["for forty years","fɔːr ˈfɔːrti jɪrz","desde hace cuarenta años","for fórti íers"],
    ["for ten seconds","fɔːr ten ˈsekəndz","durante diez segundos","for ten sékonds"],
    ["twenty minutes ago","ˈtwenti ˈmɪnɪts əˈɡoʊ","hace veinte minutos","tuénti mínits agóu"],
    ["tamales","təˈmɑːleɪz","tamales","tamáleis"],
    ["tamal","təˈmɑːl","tamal","tamál"],
    ["recipe","ˈresəpi","receta","résapi"],
    ["bread","bred","pan","bred"],
    ["choosing","ˈtʃuːzɪŋ","eligiendo","chúusing"],
    ["fruit","fruːt","fruta","frúut"],
    ["breakfast","ˈbrekfəst","desayuno","brékfast"],
    ["market","ˈmɑːrkɪt","mercado","márket"],
    ["church","tʃɜːrtʃ","iglesia","cherch"],
    ["street","striːt","calle","stríit"],
    ["talent","ˈtælənt","talento","tálent"],
    ["face","feɪs","cara","féis"],
    ["mouth","maʊθ","boca","máuz"],
    ["head","hed","cabeza","jed"],
    ["seconds","ˈsekəndz","segundos","sékonds"],
    ["afternoon","ˌæftərˈnuːn","tarde","afternúun"],
    ["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["anything","ˈeniθɪŋ","nada","énizing"],
    ["everything","ˈevriθɪŋ","todo","évrizing"],
    ["each other","iːtʃ ˈʌðər","el uno al otro","íich áder"],
    ["either","ˈiːðər","tampoco","íider"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["only","ˈoʊnli","sólo","óunli"],
    ["first","fɜːrst","primer","ferst"],
    ["sixty","ˈsɪksti","sesenta","síksti"],
    ["some things","sʌm θɪŋz","algunas cosas","sam zings"]
  ],
  preguntas: [
    { q:"How long has Mrs. Castro been awake?",
      ops:["Since four this morning","Since six","For forty years"], ok:0,
      pista:"Primer párrafo. Las otras dos cifras son de otras cosas del texto." },
    { q:"What did Julia do after ten seconds of silence?",
      ops:["She left the table","She asked for the recipe","She made another tamal"], ok:1,
      pista:"Tercer párrafo: y por eso el texto aclara enseguida quién tiene esa receta." },
    { q:"Why hasn't Pablo come back?",
      ops:["He lost the money","The shop was closed","He is probably still choosing"], ok:2,
      pista:"Cuarto párrafo: <i>still</i> añade aquí un punto de impaciencia." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-06"] = {
  meta: {
    id: "a2-06", nivel: "A2", numero: 6,
    titulo: "Ya, todavía, nunca",
    descriptor: "Puedo decir si algo ya ocurrió, si todavía no, si sigue ocurriendo o si acaba de pasar, y medir cuánto tiempo lleva una situación.",
    escena: "Mrs. Castro & David · su cocina, la tarde del 24 de diciembre",
    personajeIA: "Mrs. Castro", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
