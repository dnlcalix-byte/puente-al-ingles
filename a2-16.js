/* ============================================================
   LECCIÓN A2-16 · Alquilar vivienda
   Reparto: Doña Elsa, la casera del edificio de Sarah y Julia,
   enseñándole a David el piso que acaban de dejar. La lectura
   reúne los seis puntos de la Fase 1 —participios como adjetivo,
   el número hecho adjetivo, would you mind, so y such, situar y
   medir, y los verbos del dinero— en yo, ella, él, ellos y
   nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"La vivienda", items:[
    ["a flat","ə flæt","un piso","a flat"],["a landlady","ə ˈlændleɪdi","una casera","a lándleidi"],
    ["a landlord","ə ˈlændlɔːrd","un casero","a lándlord"],["a tenant","ə ˈtenənt","un inquilino","a ténant"],
    ["a contract","ə ˈkɑːntrækt","un contrato","a kántrakt"],["a deposit","ə dɪˈpɑːzɪt","un depósito","a dipásit"],
    ["the rent","ðə rent","el alquiler","da rent"],["the bills","ðə bɪlz","los recibos","da bils"],
    ["a key","ə kiː","una llave","a kíi"],["a neighbour","ə ˈneɪbər","un vecino","a néibar"]
  ]},
  {g:"Las habitaciones", items:[
    ["a bedroom","ə ˈbedruːm","un dormitorio","a bédrum"],["a living room","ə ˈlɪvɪŋ ruːm","una sala","a líving rum"],
    ["a kitchen","ə ˈkɪtʃɪn","una cocina","a kíchin"],["a bathroom","ə ˈbæθruːm","un baño","a bázrum"],
    ["a balcony","ə ˈbælkəni","un balcón","a bálkoni"],["a hallway","ə ˈhɔːlweɪ","un pasillo","a jóluei"],
    ["a wardrobe","ə ˈwɔːrdroʊb","un armario","a uórdroub"],["a shelf","ə ʃelf","un estante","a shelf"],
    ["a sink","ə sɪŋk","un fregadero","a sink"],["a window","ə ˈwɪndoʊ","una ventana","a uíndou"]
  ]},
  {g:"Cómo está el piso", items:[
    ["furnished","ˈfɜːrnɪʃt","amueblado","férnisht"],["unfurnished","ʌnˈfɜːrnɪʃt","sin muebles","anférnisht"],
    ["included","ɪnˈkluːdɪd","incluido","inklúudid"],["bright","braɪt","luminoso","bráit"],
    ["damp","dæmp","húmedo","damp"],["noisy","ˈnɔɪzi","ruidoso","nóisi"],
    ["tidy","ˈtaɪdi","ordenado","táidi"],["worn","wɔːrn","gastado","uórn"],
    ["spacious","ˈspeɪʃəs","espacioso","spéishas"],["empty","ˈempti","vacío","émpti"]
  ]},
  {g:"Dinero y trámites", items:[
    ["to charge","tuː tʃɑːrdʒ","cobrar","tu charch"],["to cost","tuː kɔːst","costar","tu kost"],
    ["to spend","tuː spend","gastar","tu spend"],["to afford","tuː əˈfɔːrd","poder permitirse","tu afórd"],
    ["in advance","ɪn ədˈvæns","por adelantado","in adváns"],["to sign","tuː saɪn","firmar","tu sáin"],
    ["to move in","tuː muːv ɪn","mudarse a","tu múuv in"],["to move out","tuː muːv aʊt","mudarse de","tu múuv áut"],
    ["notice","ˈnoʊtɪs","preaviso","nóutis"],["a month's rent","ə mʌnθs rent","un mes de alquiler","a manzs rent"]
  ]}
];

const PRONKEY = [
  ["-ed en sh","Detrás de <i>sh</i> la terminación suena <i>t</i>.","furnished &rarr; férnisht"],
  ["-ed en d","Detrás de <i>d</i> suena una sílaba entera: <i>id</i>.","included &rarr; inklúudid"],
  ["ai","En <i>sign</i> la <i>g</i> es muda y la <i>i</i> se alarga.","sign &rarr; sáin"],
  ["sh","Como pedir silencio.","spacious &rarr; spéishas"],
  ["ŋ","La <i>n</i> se cierra en la garganta.","sink &rarr; sink"],
  ["oi","Dos vocales pegadas, como en «hoy».","noisy &rarr; nóisi"],
  ["dʒ","Como la <i>ch</i> pero con voz.","charge &rarr; charch"],
  ["w","Labios redondos, como la <i>u</i> de «hueso».","window &rarr; uíndou"],
  ["r final","Apenas se toca; nunca vibra.","neighbour &rarr; néibar"]
];

const VERBS = [
  ["to rent","reg","rent · rents","rented","will rent","alquilar"],
  ["to charge","reg","charge · charges","charged","will charge","cobrar"],
  ["to sign","reg","sign · signs","signed","will sign","firmar"],
  ["to include","reg","include · includes","included","will include","incluir"],
  ["to clean","reg","clean · cleans","cleaned","will clean","limpiar"],
  ["to paint","reg","paint · paints","painted","will paint","pintar"],
  ["to fix","reg","fix · fixes","fixed","will fix","arreglar"],
  ["to afford","reg","afford · affords","afforded","will afford","poder permitirse"],
  ["to cost","irr","cost · costs","cost","will cost","costar"],
  ["to spend","irr","spend · spends","spent","will spend","gastar"],
  ["to pay","irr","pay · pays","paid","will pay","pagar"],
  ["to let","irr","let · lets","let","will let","alquilar, dejar"]
];

const GRAMMAR = [
  {t:"El participio que describe", s:"furnished, included, painted",
   p:"El participio pasado, esa tercera columna de los verbos, trabaja también como <b>adjetivo</b>. Dice cómo quedó una cosa después de que alguien hiciera algo con ella, y es el idioma entero de los anuncios de alquiler.",
   chips:[["a furnished flat","un piso amueblado"],["bills included","recibos incluidos"],["a painted wall","una pared pintada"],["a locked door","una puerta cerrada con llave"]],
   aviso:["Delante del sustantivo o detrás del verbo <i>to be</i>","<i>a furnished flat</i> y <i>the flat is furnished</i> dicen lo mismo. Lo que nunca lleva es <i>-ing</i>: <span class='wrong'>a furnishing flat</span>."]},

  {t:"El número hecho adjetivo", s:"a two-bedroom flat, a ten-minute walk",
   p:"Cuando un número y un sustantivo se juntan para describir otra cosa, se unen con guion y <b>el sustantivo pierde el plural</b>. Es la misma familia de los adjetivos compuestos que ya viste, pero con una regla propia.",
   table:{head:["Correcto","Incorrecto","Español"], rows:[
     ["a two-bedroom flat","<span class='wrong'>a two-bedrooms flat</span>","un piso de dos dormitorios"],
     ["a ten-minute walk","<span class='wrong'>a ten-minutes walk</span>","diez minutos andando"],
     ["a three-month deposit","<span class='wrong'>a three-months deposit</span>","un depósito de tres meses"],
     ["a six-floor building","<span class='wrong'>a six-floors building</span>","un edificio de seis plantas"]
   ]},
   aviso:["Si no describe, el plural vuelve","<i>The flat has two bedrooms</i> lleva plural porque ahí <i>bedrooms</i> es el objeto, no un adjetivo. El guion es la señal."]},

  {t:"WOULD YOU MIND", s:"pedir sin invadir",
   p:"La fórmula más educada del inglés para pedir algo. Literalmente pregunta «¿le importaría?», y por eso la respuesta es <b>al revés</b> de lo que parece.",
   table:{head:["Fórmula","Detrás va","Ejemplo"], rows:[
     ["Would you mind","verbo en -ing","Would you mind waiting?"],
     ["Do you mind if","presente simple","Do you mind if I open it?"],
     ["Would you mind my / me","-ing","Would you mind me asking?"],
     ["Respuesta que acepta","—","No, not at all."]
   ]},
   aviso:["Decir «no» es decir que sí","Si contestas <i>no, not at all</i>, estás concediendo el permiso: «no me importa». Un <i>yes</i> seco significa que <b>sí</b> te molesta."]},

  {t:"SO y SUCH", s:"dos maneras de subrayar",
   p:"Las dos traducen «tan» o «qué», pero no se colocan igual: <b>so</b> va pegado a un adjetivo solo; <b>such</b> arrastra el sustantivo detrás.",
   table:{head:["Fórmula","Estructura","Ejemplo"], rows:[
     ["so","so + adjetivo","The flat is so bright."],
     ["such","such + a + adjetivo + sustantivo","It's such a bright flat."],
     ["such (plural)","such + adjetivo + sustantivo","They're such good neighbours."],
     ["so much / so many","cantidad","There's so much light."]
   ]},
   aviso:["El artículo va con <i>such</i>, no con <i>so</i>","<span class='wrong'>It's so a bright flat.</span> &nbsp;&rarr;&nbsp; <span class='right'>It's such a bright flat.</span>"]},

  {t:"Situar el piso y medirlo", s:"on the second floor, at the back, four by three",
   p:"Tres preguntas salen siempre al ver una vivienda: en qué planta está, hacia dónde da y cuánto mide. Cada una tiene su preposición fija.",
   table:{head:["Se dice","No se dice","Español"], rows:[
     ["on the second floor","<span class='wrong'>in the second floor</span>","en la segunda planta"],
     ["at the back","<span class='wrong'>in the back</span>","al fondo"],
     ["facing the street","<span class='wrong'>facing to the street</span>","dando a la calle"],
     ["four by three metres","<span class='wrong'>four for three metres</span>","cuatro por tres metros"]
   ]},
   aviso:["La planta baja tiene dos nombres","En inglés británico la de la calle es <i>the ground floor</i> y la siguiente <i>the first floor</i>; en americano, <i>the first floor</i> es ya la de la calle. Pregunta siempre."]},

  {t:"Los verbos del dinero", s:"pay, cost, spend, charge",
   p:"Cuatro verbos para la misma escena, y cada uno elige un sujeto distinto. Confundirlos es el error de dinero más frecuente.",
   table:{head:["Verbo","Sujeto","Ejemplo"], rows:[
     ["pay","la persona","I pay the rent on the first."],
     ["cost","la cosa","The flat costs six thousand."],
     ["spend","la persona","We spend a lot on bills."],
     ["charge","quien cobra","She charges a month's deposit."],
     ["be worth","la cosa","It's worth the money."]
   ]},
   aviso:["<i>Pay</i> con persona o con cosa","<i>I pay Elsa</i> y <i>I pay the rent</i> son las dos correctas. Si van juntas: <i>I pay Elsa the rent</i>, primero la persona."]}
];

/* Doña Elsa (A) y David (B) en el piso vacío del segundo */
const DIALOGUE = [
 {s:"A", ipa:"soʊ ðɪs ɪz ðə flæt tuː ˈbedruːmz ˈsekənd flɔːr ˈfeɪsɪŋ ðə striːt", p:"sóu dis is da flat. tu bédrums, sékond flor, féising da stríit",
  b:[["So this is the flat.","Pues este es el piso."],["Two bedrooms,","Dos dormitorios,"],["second floor,","segunda planta,"],["facing the street.","dando a la calle."]]},
 {s:"B", ipa:"ɪts soʊ braɪt", p:"its sóu bráit",
  b:[["It's so bright.","Es tan luminoso."]]},
 {s:"A", ipa:"ɪts ə braɪt flæt ðə ˈkɪtʃɪn ɪz æt ðə bæk soʊ ɪts ˈkwaɪətər", p:"its sach a bráit flat. da kíchin is at da bak, sóu its kuáiatar",
  b:[["It's such a bright flat.","Es un piso tan luminoso."],["The kitchen is at the back,","La cocina está al fondo,"],["so it's quieter.","así que es más tranquila."]],
  n:"<b>So</b> va con adjetivo solo; <b>such a</b>, cuando arrastra el sustantivo."},
 {s:"B", ipa:"haʊ bɪɡ ɪz ðə ˈlɪvɪŋ ruːm", p:"jáu big is da líving rum",
  b:[["How big is the living room?","¿De qué tamaño es la sala?"]]},
 {s:"A", ipa:"fɔːr baɪ θriː ˈmiːtərz ɪts ˈfɜːrnɪʃt ðoʊ ðə ˈteɪbl ɪz wɔːrn", p:"for bái zríi míitars. its férnisht, dóu da téibl is uórn",
  b:[["Four by three metres.","Cuatro por tres metros."],["It's furnished,","Está amueblado,"],["though the table is worn.","aunque la mesa está gastada."]],
  n:"<b>Furnished</b>: participio pasado usado como adjetivo."},
 {s:"B", ipa:"aɪ doʊnt maɪnd ə wɔːrn ˈteɪbl", p:"ái dóunt máind a uórn téibl",
  b:[["I don't mind a worn table.","Una mesa gastada no me molesta."]]},
 {s:"A", ipa:"ɡʊd ˈserə ænd ˈdʒuːliə left ɪt ˈtaɪdi aɪ wɪl seɪ ðæt fɔːr ðem", p:"gud. Séra and Chúlia left it táidi. ái uíl séi dat for dem",
  b:[["Good.","Bien."],["Sarah and Julia left it tidy.","Sarah y Julia lo dejaron ordenado."],["I will say that for them.","Eso hay que reconocérselo."]]},
 {s:"B", ipa:"haʊ mʌtʃ ɪz ðə rent", p:"jáu mach is da rent",
  b:[["How much is the rent?","¿Cuánto es el alquiler?"]]},
 {s:"A", ipa:"aɪ tʃɑːrdʒ sɪks ˈθaʊznd ə mʌnθ ˈwɔːtər ɪz ɪnˈkluːdɪd ˌelekˈtrɪsəti ɪz nɑːt", p:"ái charch siks záusand a manz. uótar is inklúudid; ilektrísiti is nat",
  b:[["I charge six thousand a month.","Cobro seis mil al mes."],["Water is included;","El agua está incluida;"],["electricity is not.","la electricidad no."]],
  n:"<b>I charge</b>: el sujeto es quien cobra. El piso, en cambio, <i>costs</i>."},
 {s:"B", ipa:"ænd ðə dɪˈpɑːzɪt", p:"and da dipásit",
  b:[["And the deposit?","¿Y el depósito?"]]},
 {s:"A", ipa:"ə wʌn mʌnθ dɪˈpɑːzɪt ɪn ədˈvæns ænd wʌn mʌnθs ˈnoʊtɪs ɪf juː muːv aʊt", p:"a uán manz dipásit in adváns, and uán manzs nóutis if iú múuv áut",
  b:[["A one-month deposit","Un depósito de un mes"],["in advance,","por adelantado,"],["and one month's notice","y un mes de preaviso"],["if you move out.","si te mudas."]],
  n:"<b>A one-month deposit</b>: con guion, el sustantivo va en singular."},
 {s:"B", ipa:"kæn aɪ əˈfɔːrd ðæt wɪð ə ruːmmeɪt aɪ kæn", p:"kan ái afórd dat? uid a rúummeit, ái kan",
  b:[["Can I afford that?","¿Me lo puedo permitir?"],["With a roommate, I can.","Con un compañero, sí."]]},
 {s:"A", ipa:"ˈkevɪn ˈɑːskt miː ðə seɪm ˈkwestʃən ɑːn ˈmʌndeɪ", p:"kévin askt mi da séim kuéschan an mándei",
  b:[["Kevin asked me","Kevin me hizo"],["the same question","la misma pregunta"],["on Monday.","el lunes."]]},
 {s:"B", ipa:"əv kɔːrs hi dɪd", p:"av kórs ji did",
  b:[["Of course he did.","Cómo no."]]},
 {s:"A", ipa:"wʊd juː maɪnd ˈʃerɪŋ wɪð hɪm hiː ˈfoʊtoʊɡrɑːfs rɑːks bʌt hiːz kwaɪət", p:"uúd iú máind shéring uid jim? ji fóutograffs raks, bat jíis kuáiat",
  b:[["Would you mind sharing with him?","¿Te importaría compartir con él?"],["He photographs rocks,","Fotografía rocas,"],["but he's quiet.","pero es tranquilo."]],
  n:"<b>Would you mind</b> pide siempre un verbo en <i>-ing</i> detrás."},
 {s:"B", ipa:"noʊ nɑːt æt ɔːl wiː əˈlredi klaɪmd ə vɑːlˈkeɪnoʊ təˈɡeðər", p:"nóu, nat at ol. uii olrédi kláimd a valkéinou tuguédar",
  b:[["No, not at all.","No, en absoluto."],["We already climbed a volcano","Ya subimos un volcán"],["together.","juntos."]],
  n:"Aceptar es decir <i>no</i>: «no me importa»."},
 {s:"A", ipa:"ðen juː tuː wɪl spend les ɑːn rent ðæn ˈenibɑːdi ɪn ðə ˈbɪldɪŋ", p:"den iú tu uíl spend les an rent dan énibadi in da bílding",
  b:[["Then you two will spend less","Entonces ustedes dos gastarán menos"],["on rent","en alquiler"],["than anybody in the building.","que nadie del edificio."]]},
 {s:"B", ipa:"duː juː maɪnd ɪf aɪ siː ðə ˈbedruːmz", p:"du iú máind if ái síi da bédrums",
  b:[["Do you mind if I see","¿Le importa si veo"],["the bedrooms?","los dormitorios?"]],
  n:"<b>Do you mind if</b> lleva presente simple detrás, no <i>-ing</i>."},
 {s:"A", ipa:"ɡoʊ əˈhed ðə wʌn ɑːn ðə raɪt ɪz ˈbɪɡər bʌt ɪts ə lɪtl dæmp ɪn ˈɔːɡəst", p:"góu ajéd. da uán an da ráit is bígar, bat its a lítl damp in ógast",
  b:[["Go ahead.","Adelante."],["The one on the right is bigger,","El de la derecha es más grande,"],["but it's a little damp in August.","pero está un poco húmedo en agosto."]]},
 {s:"B", ipa:"ˈɑːnɪst ˈænsər", p:"ánist ánsar",
  b:[["Honest answer.","Respuesta sincera."]]},
 {s:"A", ipa:"aɪ tel ˈtenənts ðə truːθ ɪt kɑːsts miː les ˈtrʌbl ˈleɪtər", p:"ái tel ténants da trúuz. it kosts mi les trábl léitar",
  b:[["I tell tenants the truth.","A los inquilinos les digo la verdad."],["It costs me less trouble","Me cuesta menos problemas"],["later.","después."]]},
 {s:"B", ipa:"wen kæn wiː saɪn", p:"uén kan uii sáin",
  b:[["When can we sign?","¿Cuándo podemos firmar?"]]},
 {s:"A", ipa:"brɪŋ ˈkevɪn ɑːn ˈfraɪdeɪ ænd brɪŋ jʊr aɪˈdentəti kɑːrd ˈboʊθ əv juː", p:"bring kévin an fráidei, and bring iór aidéntiti kard. bóuz av iú",
  b:[["Bring Kevin on Friday,","Trae a Kevin el viernes,"],["and bring your identity card.","y trae tu documento."],["Both of you.","Los dos."]]},
 {s:"B", ipa:"wiːl biː hɪr æt faɪv ˈθæŋk juː ˈmɪsɪz ˈelsə", p:"uíil bi jíer at fáiv. zánk iú, mísis Élsa",
  b:[["We'll be here at five.","Aquí estaremos a las cinco."],["Thank you, Mrs. Elsa.","Gracias, doña Elsa."]]}
];

const LECTURA = {
  titulo: "The flat on the second floor",
  entradilla: "El piso vacío que dejaron Sarah y Julia, enseñado por la casera. El texto pone a trabajar lo de la Fase 1: los participios como adjetivo, el número con guion, <i>would you mind</i>, <i>so</i> y <i>such</i>, la planta y las medidas, y los cuatro verbos del dinero. Cada párrafo cambia de persona.",
  parrafos: [
    "Mrs. Elsa showed me the flat that Sarah and Julia left. It is a two-bedroom flat on the second floor, facing the street, and the kitchen is at the back, so it is quieter. The living room is four by three metres and it is such a bright room that I said yes before I saw the bedrooms.",
    "The flat is furnished, though the table is worn and the wall behind it needs a painted finish. She charges six thousand a month and water is included, but electricity is not. She also wants a one-month deposit in advance and one month's notice if we move out.",
    "I can't afford it alone. Kevin asked her the same question on Monday, so she asked me if I would mind sharing with him. I don't mind at all: we already climbed a volcano together, and he is quiet, which matters in a damp building with thin walls.",
    "She tells her tenants the truth because it costs her less trouble later. The bedroom on the right is bigger and damp in August; the other one is small and dry. We will sign on Friday and we will both spend less on rent than anybody else in the building."
  ],
  glosario: [
    ["showed","ʃoʊd","me enseñó","shóud"],
    ["flat","flæt","piso","flat"],
    ["left","left","dejaron","left"],
    ["two-bedroom","tuː ˈbedruːm","de dos dormitorios","tu bédrum"],
    ["bedroom","ˈbedruːm","dormitorio","bédrum"],
    ["bedrooms","ˈbedruːmz","dormitorios","bédrums"],
    ["second","ˈsekənd","segunda","sékond"],
    ["floor","flɔːr","planta, piso","flor"],
    ["facing","ˈfeɪsɪŋ","dando a","féising"],
    ["street","striːt","calle","stríit"],
    ["kitchen","ˈkɪtʃɪn","cocina","kíchin"],
    ["the back","ðə bæk","el fondo","da bak"],
    ["back","bæk","fondo","bak"],
    ["quieter","ˈkwaɪətər","más tranquila","kuáiatar"],
    ["quiet","ˈkwaɪət","tranquilo","kuáiat"],
    ["living room","ˈlɪvɪŋ ruːm","sala","líving rum"],
    ["living","ˈlɪvɪŋ","de estar","líving"],
    ["room","ruːm","habitación","rum"],
    ["metres","ˈmiːtərz","metros","míitars"],
    ["such","sʌtʃ","tan","sach"],
    ["bright","braɪt","luminosa","bráit"],
    ["said","sed","dije","sed"],
    ["saw","sɔː","vi","so"],
    ["furnished","ˈfɜːrnɪʃt","amueblado","férnisht"],
    ["though","ðoʊ","aunque","dóu"],
    ["table","ˈteɪbl","mesa","téibl"],
    ["worn","wɔːrn","gastada","uórn"],
    ["wall","wɔːl","pared","uól"],
    ["walls","wɔːlz","paredes","uóls"],
    ["behind","bɪˈhaɪnd","detrás de","bijáind"],
    ["needs","niːdz","necesita","níids"],
    ["painted","ˈpeɪntɪd","pintado","péintid"],
    ["finish","ˈfɪnɪʃ","acabado","fínish"],
    ["charges","ˈtʃɑːrdʒɪz","cobra","chárchis"],
    ["thousand","ˈθaʊznd","mil","záusand"],
    ["month","mʌnθ","mes","manz"],
    ["month's","mʌnθs","de un mes","manzs"],
    ["water","ˈwɔːtər","agua","uótar"],
    ["included","ɪnˈkluːdɪd","incluida","inklúudid"],
    ["electricity","ɪˌlekˈtrɪsəti","electricidad","ilektrísiti"],
    ["wants","wɑːnts","quiere","uánts"],
    ["one-month","wʌn mʌnθ","de un mes","uán manz"],
    ["deposit","dɪˈpɑːzɪt","depósito","dipásit"],
    ["in advance","ɪn ədˈvæns","por adelantado","in adváns"],
    ["advance","ədˈvæns","adelanto","adváns"],
    ["notice","ˈnoʊtɪs","preaviso","nóutis"],
    ["move out","muːv aʊt","mudarnos","múuv áut"],
    ["move","muːv","mudarse","múuv"],
    ["out","aʊt","fuera","áut"],
    ["afford","əˈfɔːrd","permitirme","afórd"],
    ["alone","əˈloʊn","solo","alóun"],
    ["asked","æskt","preguntó","askt"],
    ["same","seɪm","misma","séim"],
    ["Monday","ˈmʌndeɪ","lunes","mándei"],
    ["would mind","wʊd maɪnd","me importaría","uúd máind"],
    ["mind","maɪnd","importar","máind"],
    ["sharing","ˈʃerɪŋ","compartir","shéring"],
    ["already","ɔːlˈredi","ya","olrédi"],
    ["climbed","klaɪmd","subimos","kláimd"],
    ["volcano","vɑːlˈkeɪnoʊ","volcán","valkéinou"],
    ["together","təˈɡeðər","juntos","tuguédar"],
    ["matters","ˈmætərz","importa","mátars"],
    ["damp","dæmp","húmedo","damp"],
    ["building","ˈbɪldɪŋ","edificio","bílding"],
    ["thin","θɪn","finas","zin"],
    ["tells","telz","dice","tels"],
    ["tenants","ˈtenənts","inquilinos","ténants"],
    ["truth","truːθ","verdad","trúuz"],
    ["costs","kɔːsts","cuesta","kosts"],
    ["less","les","menos","les"],
    ["trouble","ˈtrʌbl","problemas","trábl"],
    ["later","ˈleɪtər","después","léitar"],
    ["right","raɪt","derecha","ráit"],
    ["bigger","ˈbɪɡər","más grande","bígar"],
    ["August","ˈɔːɡəst","agosto","ógast"],
    ["other","ˈʌðər","otro","ádar"],
    ["dry","draɪ","seco","drái"],
    ["sign","saɪn","firmar","sáin"],
    ["Friday","ˈfraɪdeɪ","viernes","fráidei"],
    ["both","boʊθ","los dos","bóuz"],
    ["spend","spend","gastaremos","spend"],
    ["rent","rent","alquiler","rent"],
    ["anybody","ˈenibɑːdi","nadie, cualquiera","énibadi"],
    ["else","els","más","els"],
    ["also","ˈɔːlsoʊ","además","ólsou"],
    ["can't","kænt","no puedo","kant"],
    ["don't","doʊnt","no","dóunt"],
    ["at all","æt ɔːl","en absoluto","at ol"],
    ["which","wɪtʃ","lo cual","uích"],
    ["Elsa","ˈelsə","Elsa (la casera)","élsa"],
    ["Julia","ˈdʒuːliə","Julia (compañera de piso)","chúlia"],
    ["will sign","wɪl saɪn","firmaremos","uíl sáin"],
    ["will spend","wɪl spend","gastaremos","uíl spend"],
    ["before","bɪˈfɔːr","antes de","bifór"],
    ["yes","jes","que sí","yes"]
  ],
  preguntas: [
    { q:"Where is the kitchen and why does that matter?",
      ops:["Facing the street, so it is bright","At the back, so it is quieter","On the first floor, so it is cooler"], ok:1,
      pista:"Primer párrafo. La respuesta tiene que ver con el ruido." },
    { q:"What is included in the rent?",
      ops:["Water, but not electricity","Electricity, but not water","Both water and electricity"], ok:0,
      pista:"Segundo párrafo, justo después del precio." },
    { q:"Why will David share the flat with Kevin?",
      ops:["Because Mrs. Elsa asks for two tenants","Because Kevin has the deposit","Because he cannot afford it alone"], ok:2,
      pista:"Tercer párrafo. La primera frase lo dice sin rodeos." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-16"] = {
  meta: {
    id: "a2-16", nivel: "A2", numero: 16,
    titulo: "Alquilar vivienda",
    descriptor: "Puedo visitar una vivienda, preguntar por el precio, el depósito y lo que está incluido, y pedir cosas con cortesía.",
    escena: "Doña Elsa & David · el piso vacío del segundo",
    personajeIA: "Doña Elsa", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
