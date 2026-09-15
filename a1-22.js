/* ============================================================
   LECCIÓN A1-22 · Invitaciones y citas
   Reparto: Sarah, en Toronto, el reencuentro. Aparece Julia, su
   compañera de piso. La lectura reúne los seis puntos de la Fase 1
   —how about + -ing, aceptar y rechazar, ask/tell someone to,
   los adverbios de probabilidad, and/but/so/because y el genitivo
   de lugar— en yo, ella, ellos y él.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Invitar y proponer", items:[
    ["invitation","ˌɪnvɪˈteɪʃn","invitación","invitéishon"],["to go out","tuː ɡoʊ aʊt","salir","tu góu áut"],
    ["concert","ˈkɑːnsərt","concierto","kánsert"],["film","fɪlm","película","film"],
    ["museum","mjuˈziːəm","museo","miusíam"],["dinner","ˈdɪnər","cena","dínar"],
    ["anniversary","ˌænɪˈvɜːrsəri","aniversario","aniversari"],["downtown","ˌdaʊnˈtaʊn","el centro","dauntáun"],
    ["How about…?","haʊ əˈbaʊt","¿qué tal si…?","jáu abáut"],["What about…?","wʌt əˈbaʊt","¿y si…?","uát abáut"]
  ]},
  {g:"Aceptar y rechazar", items:[
    ["I'd love to","aɪd lʌv tuː","me encantaría","áid lav tu"],["Sounds great","saʊndz ɡreɪt","suena genial","sáunds gréit"],
    ["Of course","əv ˈkɔːrs","claro que sí","av kórs"],["I'm afraid I can't","aɪm əˈfreɪd aɪ kɑːnt","me temo que no puedo","áim afréid ái kant"],
    ["Maybe next time","ˈmeɪbi nekst taɪm","quizá la próxima","méibi nekst táim"],["to be free","tuː biː friː","estar libre","tu bi fríi"],
    ["to be busy","tuː biː ˈbɪzi","estar ocupado","tu bi bísi"],["to cancel","tuː ˈkænsl","cancelar","tu kánsl"],
    ["another day","əˈnʌðər deɪ","otro día","anáder déi"],["I'm sorry","aɪm ˈsɑːri","lo siento","áim sári"]
  ]},
  {g:"Cuándo y dónde", items:[
    ["tonight","təˈnaɪt","esta noche","tunáit"],["this evening","ðɪs ˈiːvnɪŋ","esta tarde-noche","dis íivning"],
    ["at the weekend","æt ðə ˈwiːkend","el fin de semana","at da uíkend"],["on Friday night","ɑːn ˈfraɪdeɪ naɪt","el viernes por la noche","an fráidei náit"],
    ["at half past eight","æt hɑːf pæst eɪt","a las ocho y media","at jaf past éit"],["before","bɪˈfɔːr","antes","bifór"],
    ["after","ˈæftər","después","áftar"],["at my place","æt maɪ pleɪs","en mi casa","at mái pléis"],
    ["at Marta's","æt ˈmɑːrtəz","en casa de Marta","at Mártas"],["See you then","siː juː ðen","nos vemos","síi iú den"]
  ]},
  {g:"Qué tan seguro", items:[
    ["maybe","ˈmeɪbi","quizá","méibi"],["perhaps","pərˈhæps","tal vez","perjáps"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],["definitely","ˈdefɪnətli","seguro que sí","définitli"],
    ["I think so","aɪ θɪŋk soʊ","creo que sí","ái zink sóu"],["I hope so","aɪ hoʊp soʊ","ojalá","ái jóup sóu"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],["nobody","ˈnoʊbɑːdi","nadie","nóubadi"],
    ["together","təˈɡeðər","juntos","tuguéder"],["alone","əˈloʊn","solo","alóun"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, sin raspar.","how &rarr; jáu"],
  ["z","Lengua entre los dientes, sin voz.","think &rarr; zink"],
  ["sh","Como pedir silencio.","invitation &rarr; invitéishon"],
  ["ch","Como en «coche».","picture &rarr; píkchar"],
  ["v","Labio de abajo contra los dientes de arriba.","love &rarr; lav"],
  ["ua","La <i>w</i> inglesa: labios redondeados antes de la vocal.","weekend &rarr; uíkend"],
  ["r final","Apenas se toca; nunca vibra.","dinner &rarr; dínar"],
  ["'d","<b>would</b> contraído: apenas una <i>d</i> pegada al pronombre.","I'd love to &rarr; áid lav tu"],
  ["s de posesivo","Tras vocal o sonido sonoro suena casi <b>z</b>.","Marta's &rarr; Mártas"]
];

const VERBS = [
  ["to invite","reg","invite · invites","invited","will invite","invitar"],
  ["to accept","reg","accept · accepts","accepted","will accept","aceptar"],
  ["to cancel","reg","cancel · cancels","cancelled","will cancel","cancelar"],
  ["to celebrate","reg","celebrate · celebrates","celebrated","will celebrate","celebrar"],
  ["to organise","reg","organise · organises","organised","will organise","organizar"],
  ["to promise","reg","promise · promises","promised","will promise","prometer"],
  ["to answer","reg","answer · answers","answered","will answer","contestar"],
  ["to meet","irr","meet · meets","met","will meet","quedar, conocer"],
  ["to tell","irr","tell · tells","told","will tell","decirle a alguien"],
  ["to forget","irr","forget · forgets","forgot","will forget","olvidar"],
  ["to bring","irr","bring · brings","brought","will bring","traer"],
  ["to come","irr","come · comes","came","will come","venir"]
];

const GRAMMAR = [
  {t:"HOW ABOUT y WHAT ABOUT", s:"+ sustantivo o + verbo-ing",
   p:"Dos maneras muy frecuentes de proponer algo. Lo importante es lo que va detrás: un sustantivo o un verbo en <b>-ing</b>, <b>nunca un infinitivo</b>.",
   table:{head:["Estructura","Ejemplo","Español"], rows:[
     ["How about + -ing","How about going downtown?","¿Qué tal si vamos al centro?"],
     ["How about + sustantivo","How about a coffee?","¿Un café?"],
     ["What about + -ing","What about eating first?","¿Y si comemos antes?"],
     ["What about + persona","What about Julia?","¿Y Julia?"]
   ]},
   aviso:["<i>About</i> es una preposición","Y detrás de una preposición el verbo inglés va siempre en <b>-ing</b>: <span class='wrong'>how about to go</span> &nbsp;&rarr;&nbsp; <span class='right'>how about go<b>ing</b></span>."]},

  {t:"Aceptar y rechazar", s:"I'd love to / I'm afraid I can't",
   p:"En inglés un «no» seco suena grosero. La fórmula normal tiene tres partes: agradecer, negar y dar una razón.",
   table:{head:["Función","Fórmula","Ejemplo"], rows:[
     ["Aceptar","I'd love to.","— A concert? — I'd love to!"],
     ["Aceptar","That sounds great.","That sounds great. What time?"],
     ["Rechazar","I'd love to, but…","I'd love to, but I'm busy on Friday."],
     ["Rechazar","I'm afraid I can't.","I'm afraid I can't. Maybe next time."]
   ]},
   aviso:["<i>I'd love to</i> se queda ahí","No se repite el verbo: <span class='right'>I'd love to.</span>, no <span class='wrong'>I'd love to go to the concert with you</span>. Ese <i>to</i> solitario sustituye a toda la frase."]},

  {t:"Pedirle a alguien que haga algo", s:"ask / tell / invite + persona + to + verbo",
   p:"El español usa «que» y un subjuntivo: «le pedí <b>que</b> viniera». El inglés no tiene nada de eso: pone la persona y después <b>to + verbo</b>.",
   table:{head:["Inglés","Español"], rows:[
     ["She asked me to come.","Me pidió que fuera."],
     ["Tell her to call you on Saturday.","Dile que te llame el sábado."],
     ["They invited us to celebrate with them.","Nos invitaron a celebrar con ellos."],
     ["He told me not to worry.","Me dijo que no me preocupara."]
   ]},
   aviso:["Nunca con <i>that</i> y un verbo conjugado","<span class='wrong'>She asked me that I come.</span> &nbsp;&rarr;&nbsp; <span class='right'>She asked me <b>to</b> come.</span> Y para negar, el <i>not</i> va delante del <i>to</i>."]},

  {t:"Qué tan seguro estás", s:"maybe, probably, definitely: dónde van",
   p:"El grado de certeza tiene sus palabras, y cada una tiene <b>su sitio en la frase</b>. Equivocarse de sitio no impide que te entiendan, pero suena a traducción.",
   table:{head:["Palabra","Posición","Ejemplo"], rows:[
     ["maybe / perhaps","al principio de la frase","Maybe she is busy."],
     ["probably","detrás de <i>be</i>, delante del resto","She is probably busy. · She probably knows."],
     ["definitely","igual que <i>probably</i>","He definitely said yes."],
     ["I think so / I hope so","respuesta corta entera","— Is she coming? — I think so."]
   ]},
   aviso:["<i>Maybe</i> es una palabra, <i>may be</i> son dos","<b>Maybe</b> significa «quizá»; <b>may be</b> es un verbo: <i>she may be busy</i>. Se escriben casi igual y no son lo mismo."]},

  {t:"Unir las ideas", s:"and, but, so, because",
   p:"Cuatro palabras que convierten frases sueltas de A1 en algo que parece una conversación. Cada una dice una relación distinta.",
   table:{head:["Conector","Significa","Ejemplo"], rows:[
     ["and","suma","I called her and she answered."],
     ["but","contraste","I'd love to, but I'm busy."],
     ["so","consecuencia","There's a concert, so we're going early."],
     ["because","causa","I said yes because I want to see the lake."]
   ]},
   aviso:["<i>So</i> y <i>because</i> son espejos","<i>She invited me, <b>so</b> I went.</i> = <i>I went <b>because</b> she invited me.</i> La misma idea al revés. Y <b>because</b> nunca empieza una frase suelta en la escritura formal."]},

  {t:"El genitivo de lugar", s:"at Marta's, at the doctor's",
   p:"Cuando ya se sabe de qué lugar hablas, el inglés <b>se come la palabra</b> y deja sólo el posesivo. Es el mismo <i>'s</i> de siempre, pero sin sustantivo detrás.",
   chips:[["at Marta's","en casa de Marta"],["at my sister's","en casa de mi hermana"],["at the doctor's","en el consultorio"],["at the hairdresser's","en la peluquería"]],
   aviso:["No se traduce «la casa de»","<span class='wrong'>at the house of Marta</span> &nbsp;&rarr;&nbsp; <span class='right'>at Marta's</span>. La palabra <i>house</i> desaparece porque se sobreentiende."]}
];

/* Sarah (A) recibe a David (B) en Toronto y le llena la semana */
const DIALOGUE = [
 {s:"A", ipa:"juː ɑːr ˈfaɪnəli hɪr haʊ wʌz ðə flaɪt", p:"iú ar fáinali jíar. jáu uás da fláit",
  b:[["You are finally here!","¡Por fin llegaste!"],["How was the flight?","¿Qué tal el vuelo?"]]},
 {s:"B", ipa:"lɔːŋ fɔːr ˈaʊərz leɪt ænd ðen ˈsevn ɪn ði er bʌt aɪm hɪr", p:"long. for áuars léit, and den sévn in di ér. bat áim jíar",
  b:[["Long.","Largo."],["Four hours late","Cuatro horas de retraso"],["and then","y luego"],["seven in the air.","siete en el aire."],["But I'm here.","Pero aquí estoy."]]},
 {s:"A", ipa:"ˈpɜːrfɪkt naʊ ðɪs wiːk ɪz fʊl haʊ əˈbaʊt ˈɡoʊɪŋ ˌdaʊnˈtaʊn təˈmɑːroʊ", p:"pérfect. náu, dis uíik is ful. jáu abáut góing dauntáun tumárou",
  b:[["Perfect.","Perfecto."],["Now, this week is full.","Esta semana está llena."],["How about going","¿Qué tal si vamos"],["downtown tomorrow?","al centro mañana?"]],
  n:"<b>How about + -ing</b>. Detrás de <i>about</i> el verbo va siempre en <i>-ing</i>, nunca en infinitivo."},
 {s:"B", ipa:"aɪd lʌv tuː wʌt ɪz ðer", p:"áid lav tu. uát is der",
  b:[["I'd love to.","Me encantaría."],["What is there?","¿Qué hay?"]],
  n:"<b>I'd love to</b> y punto: ese <i>to</i> solitario sustituye a toda la frase que no hace falta repetir."},
 {s:"A", ipa:"ə mjuˈziːəm ðə leɪk ænd ðə best ˈkɑːfi ɪn ðə ˈsɪti", p:"a miusíam, da léik, and da best káfi in da síti",
  b:[["A museum,","Un museo,"],["the lake,","el lago,"],["and the best coffee","y el mejor café"],["in the city.","de la ciudad."]]},
 {s:"B", ipa:"ðen lets stɑːrt wɪð ðə ˈkɑːfi", p:"den lets start uid da káfi",
  b:[["Then","Entonces"],["let's start","empecemos"],["with the coffee.","por el café."]]},
 {s:"A", ipa:"ɑːn ˈfraɪdeɪ ðerz ə ˈkɑːnsərt nɪr ðə ˈsteɪʃn duː juː wɑːnt tuː kʌm", p:"an fráidei ders a kánsert níar da stéishon. du iú uánt tu kam",
  b:[["On Friday","El viernes"],["there's a concert","hay un concierto"],["near the station.","cerca de la estación."],["Do you want to come?","¿Quieres venir?"]]},
 {s:"B", ipa:"wʌt taɪm dʌz ɪt stɑːrt", p:"uát táim das it start",
  b:[["What time","¿A qué hora"],["does it start?","empieza?"]]},
 {s:"A", ipa:"æt hɑːf pæst eɪt wi kæn iːt æt maɪ pleɪs bɪˈfɔːr", p:"at jaf past éit. ui kan íit at mái pléis bifór",
  b:[["At half past eight.","A las ocho y media."],["We can eat","Podemos comer"],["at my place","en mi casa"],["before.","antes."]],
  n:"<b>At my place</b> es la forma natural de decir «en mi casa» cuando invitas."},
 {s:"B", ipa:"aɪd lʌv tuː bʌt maɪ ˈmʌðər kɔːld ʃi wɑːnts tuː tɔːk tuː miː ɑːn ˈfraɪdeɪ naɪt", p:"áid lav tu, bat mái máder kold: shi uánts tu tok tu mi an fráidei náit",
  b:[["I'd love to, but","Me encantaría, pero"],["my mother called:","mi mamá llamó:"],["she wants to talk to me","quiere hablar conmigo"],["on Friday night.","el viernes por la noche."]],
  n:"La fórmula completa del rechazo cortés: <b>I'd love to, but</b> + la razón."},
 {s:"A", ipa:"tel hɜːr tuː kɔːl juː ɑːn ˈsætərdeɪ ˈmɔːrnɪŋ", p:"tel jer tu kol iú an sáterdei mórning",
  b:[["Tell her","Dile"],["to call you","que te llame"],["on Saturday morning.","el sábado por la mañana."]],
  n:"<b>Tell + persona + to + verbo</b>. En español hay un «que» y un subjuntivo; en inglés, nada de eso."},
 {s:"B", ipa:"ɡʊd aɪˈdɪə ðen jes aɪm friː ɑːn ˈfraɪdeɪ", p:"gud aidía. den iés, áim fríi an fráidei",
  b:[["Good idea.","Buena idea."],["Then yes,","Entonces sí,"],["I'm free on Friday.","estoy libre el viernes."]]},
 {s:"A", ipa:"ænd ɑːn ˈsʌndeɪ ðerz ˈdɪnər æt ˈdʒuːliəz ʃiːz maɪ ˈflætmeɪt", p:"and an sándei ders dínar at Chúlias. shíis mái flátmeit",
  b:[["And on Sunday","Y el domingo"],["there's dinner","hay cena"],["at Julia's.","en casa de Julia."],["She's my flatmate.","Es mi compañera de piso."]],
  n:"<b>At Julia's</b>: el inglés se come la palabra <i>house</i> porque se sobreentiende."},
 {s:"B", ipa:"ˈdʒuːliə juː tɔːkt əˈbaʊt hɜːr ɪn jʊr ˈmesɪdʒɪz", p:"Chúlia. iú tokt abáut jer in iór mésichis",
  b:[["Julia.","Julia."],["You talked about her","Hablaste de ella"],["in your messages.","en tus mensajes."]]},
 {s:"A", ipa:"ðæts hɜːr ʃi ˌɪnˈvaɪtɪd ˈevribɑːdi soʊ wi ɑːr ˈprɑːbəbli ten ˈpiːpl", p:"dats jer. shi inváitid évribadi, sóu ui ar prábabli ten píipl",
  b:[["That's her.","Esa misma."],["She invited everybody,","Invitó a todos,"],["so we are probably","así que seremos probablemente"],["ten people.","diez personas."]],
  n:"<b>So</b> introduce la consecuencia, y <b>probably</b> va detrás de <i>are</i>."},
 {s:"B", ipa:"ten aɪ doʊnt noʊ ˈenibɑːdi hɪr", p:"ten. ái dóunt nóu énibadi jíar",
  b:[["Ten!","¡Diez!"],["I don't know","No conozco"],["anybody here.","a nadie aquí."]]},
 {s:"A", ipa:"juː wɪl noʊ ðem ˈæftər ten ˈmɪnɪts ðer ˈveri ˈfrendli", p:"iú uíl nóu dem áftar ten mínits. der véri fréndli",
  b:[["You will know them","Los vas a conocer"],["after ten minutes.","en diez minutos."],["They're very friendly.","Son muy simpáticos."]]},
 {s:"B", ipa:"ˈmeɪbi aɪm ə bɪt ʃaɪ æt fɜːrst ænd maɪ ˈɪŋɡlɪʃ ɪz sloʊ", p:"méibi. áim a bit shái at ferst, and mái ínglish is slóu",
  b:[["Maybe.","Quizá."],["I'm a bit shy","Soy un poco tímido"],["at first,","al principio,"],["and my English is slow.","y mi inglés es lento."]],
  n:"<b>Maybe</b> abre la frase; <i>probably</i>, en cambio, iría en medio."},
 {s:"A", ipa:"jʊr ˈɪŋɡlɪʃ ɪz faɪn ænd ˈdʒuːliə spiːks ˈspænɪʃ soʊ doʊnt ˈwʌri", p:"iór ínglish is fáin. and Chúlia spíiks spánish, sóu dóunt uóri",
  b:[["Your English is fine.","Tu inglés está bien."],["And Julia speaks Spanish,","Y Julia habla español,"],["so don't worry.","así que no te preocupes."]]},
 {s:"B", ipa:"ðæt helps wʌn mɔːr θɪŋ ˈluːɪs ænd ˈmɑːrtə ˌɪnˈvaɪtɪd ʌs tuː ðer ˌænɪˈvɜːrsəri ˈpɑːrti", p:"dat jelps. uán mor zing: Luís and Márta inváitid as tu der aniversari párti",
  b:[["That helps.","Eso ayuda."],["One more thing:","Una cosa más:"],["Luis and Marta invited us","Luis y Marta nos invitaron"],["to their anniversary party.","a su fiesta de aniversario."]]},
 {s:"A", ipa:"ʌs aɪm ɪn ˈkænədə", p:"as. áim in Kánada",
  b:[["Us?","¿A nosotros?"],["I'm in Canada.","Yo estoy en Canadá."]]},
 {s:"B", ipa:"ɪts ɪn dɪˈsembər ænd juː wɑːnt tuː ˈvɪzɪt hɑːnˈdʊrəs ɪn dɪˈsembər", p:"its in disémbar, and iú uánt tu vísit Jandúras in disémbar",
  b:[["It's in December,","Es en diciembre,"],["and you want to visit","y tú quieres visitar"],["Honduras in December.","Honduras en diciembre."]]},
 {s:"A", ipa:"ðæts truː ðen tel ðem jes ænd ɑːsk ðem tuː seɪv tuː siːts", p:"dats trúu. den tel dem iés, and ask dem tu séiv tu síits",
  b:[["That's true.","Es verdad."],["Then tell them yes,","Entonces diles que sí,"],["and ask them","y pídeles"],["to save two seats.","que guarden dos asientos."]],
  n:"Dos veces la misma estructura: <b>tell them</b> y <b>ask them to save</b>."},
 {s:"B", ipa:"tuː siːts seɪvd naʊ wer ɪz ðæt ˈkɑːfi", p:"tu síits séivd. náu, uér is dat káfi",
  b:[["Two seats saved.","Dos asientos apartados."],["Now,","Ahora,"],["where is that coffee?","¿dónde está ese café?"]]}
];

const LECTURA = {
  titulo: "Two invitations, two countries",
  entradilla: "Una semana en Toronto y una fiesta que se prepara a cinco mil kilómetros. El texto usa lo de la Fase 1: <i>how about + -ing</i>, las fórmulas de aceptar y rechazar, <i>ask/tell someone to</i>, los adverbios de probabilidad, los conectores <i>and / but / so / because</i> y el genitivo de lugar. Cada párrafo cambia de persona.",
  parrafos: [
    "I am in Toronto for a week and my calendar is already full. Sarah asked me to come downtown tomorrow, and I said yes because I want to see the lake. On Friday there is a concert near the station, so we are going to eat at her place before.",
    "Julia is Sarah's flatmate. She invited everybody to dinner on Sunday — probably ten people — and she told us to bring nothing. She speaks Spanish, and that helps, because I am a bit shy in English at first.",
    "Luis and Marta are celebrating twenty years together in December, and they invited the whole street. They asked me to tell Sarah, so I told her, and she said yes immediately. They probably don't know how many people are coming.",
    "Mr. Ortega never accepts an invitation. He always says the same thing: \"I'd love to, but I'm busy.\" This time he can't say it, because the party is at Mrs. Castro's and she asked him in front of everybody. We will all be there."
  ],
  glosario: [
    ["asked me to come","æskt miː tuː kʌm","me pidió que fuera","askt mi tu kam"],
    ["told us to bring","toʊld ʌs tuː brɪŋ","nos dijo que trajéramos","tóuld as tu bring"],
    ["asked me to tell","æskt miː tuː tel","me pidió que le dijera","askt mi tu tel"],
    ["asked him","æskt hɪm","se lo pidió","askt jim"],
    ["invited","ˌɪnˈvaɪtɪd","invitó","inváitid"],
    ["accepts","əkˈsepts","acepta","aksépts"],
    ["said","sed","dije, dijo","sed"],
    ["told","toʊld","le dije","tóuld"],
    ["says","sez","dice","ses"],
    ["speaks","spiːks","habla","spíiks"],
    ["helps","helps","ayuda","jelps"],
    ["celebrating","ˈseləbreɪtɪŋ","celebran","sélabreiting"],
    ["are coming","ɑːr ˈkʌmɪŋ","van a venir","ar káming"],
    ["I'd love to","aɪd lʌv tuː","me encantaría","áid lav tu"],
    ["busy","ˈbɪzi","ocupado","bísi"],
    ["probably","ˈprɑːbəbli","probablemente","prábabli"],
    ["immediately","ɪˈmiːdiətli","enseguida","imíidiatli"],
    ["already","ɔːlˈredi","ya","olrédi"],
    ["calendar","ˈkæləndər","calendario","kálandar"],
    ["full","fʊl","lleno","ful"],
    ["downtown","ˌdaʊnˈtaʊn","el centro","dauntáun"],
    ["lake","leɪk","lago","léik"],
    ["concert","ˈkɑːnsərt","concierto","kánsert"],
    ["station","ˈsteɪʃn","estación","stéishon"],
    ["at her place","æt hɜːr pleɪs","en su casa","at jer pléis"],
    ["at Mrs. Castro's","æt ˈmɪsɪz ˈkæstroʊz","en casa de la señora Castro","at mísis Kástros"],
    ["flatmate","ˈflætmeɪt","compañera de piso","flátmeit"],
    ["dinner","ˈdɪnər","cena","dínar"],
    ["nothing","ˈnʌθɪŋ","nada","názing"],
    ["shy","ʃaɪ","tímido","shái"],
    ["at first","æt fɜːrst","al principio","at ferst"],
    ["together","təˈɡeðər","juntos","tuguéder"],
    ["whole street","hoʊl striːt","la calle entera","jóul stríit"],
    ["invitation","ˌɪnvɪˈteɪʃn","invitación","invitéishon"],
    ["the same thing","ðə seɪm θɪŋ","lo mismo","da séim zing"],
    ["this time","ðɪs taɪm","esta vez","dis táim"],
    ["in front of","ɪn frʌnt əv","delante de","in front av"],
    ["everybody","ˈevribɑːdi","todos","évribadi"],
    ["how many","haʊ ˈmeni","cuántas","jáu méni"],
    ["twenty years","ˈtwenti jɪrz","veinte años","tuénti íers"],
    ["Julia","ˈdʒuːliə","Julia (nombre)","chúlia"],
    ["week","wiːk","semana","uíik"],
    ["because","bɪˈkɔːz","porque","bikóos"],
    ["so","soʊ","así que","sóu"],
    ["but","bʌt","pero","bat"],
    ["never","ˈnevər","nunca","névar"],
    ["always","ˈɔːlweɪz","siempre","ólueis"],
    ["will be","wɪl biː","estaremos","uíl bi"]
  ],
  preguntas: [
    { q:"What are they going to do before the concert?",
      ops:["Go downtown","Eat at Sarah's place","Visit the museum"], ok:1,
      pista:"Primer párrafo, última frase: el conector <i>so</i> introduce el plan." },
    { q:"Why does Julia's Spanish help David?",
      ops:["Because he is a bit shy in English at first","Because he doesn't speak English","Because Sarah doesn't speak Spanish"], ok:0,
      pista:"Segundo párrafo: la razón va después de <i>because</i>." },
    { q:"Why can't Mr. Ortega say no this time?",
      ops:["Because he is not busy","Because he loves parties","Because Mrs. Castro asked him in front of everybody"], ok:2,
      pista:"Cuarto párrafo: normalmente usa siempre la misma excusa." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-22"] = {
  meta: {
    id: "a1-22", nivel: "A1", numero: 22,
    titulo: "Invitaciones y citas",
    descriptor: "Puedo invitar a alguien, aceptar o rechazar con cortesía, acordar hora y lugar, y transmitir a otra persona lo que me han pedido.",
    escena: "Sarah & David · el reencuentro en Toronto, con la semana por organizar",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
