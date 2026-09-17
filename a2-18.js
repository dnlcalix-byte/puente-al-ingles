/* ============================================================
   LECCIÓN A2-18 · Currículum y carta de presentación
   Reparto: Emma, en videollamada desde Dublín, revisando el CV
   con el que David opta al puesto fijo del Hotel Maya. La lectura
   reúne los seis puntos de la Fase 1 —el lenguaje telegráfico del
   CV, los verbos de logro en pasado, la apertura y el cierre de la
   carta, las fórmulas fijas, el registro formal y las mayúsculas—
   en yo, ella, él, ellos y nosotros.
   ============================================================ */
(function(){

const VOCAB = [
  {g:"El currículum", items:[
    ["a CV","ə ˌsiː ˈviː","un currículum","a si-ví"],
    ["a résumé","ə ˈrezəmeɪ","un currículum (EE. UU.)","a résumei"],
    ["personal details","ˈpɜːrsənl ˈdiːteɪlz","datos personales","pérsonal díiteils"],
    ["education","ˌedʒuˈkeɪʃn","formación académica","eyukéishon"],
    ["work history","wɜːrk ˈhɪstri","trayectoria laboral","uérk jístri"],
    ["a qualification","ə ˌkwɑːlɪfɪˈkeɪʃn","una titulación","a kualifikéishon"],
    ["a certificate","ə sərˈtɪfɪkət","un certificado","a sertífikat"],
    ["an achievement","ən əˈtʃiːvmənt","un logro","an achíivment"],
    ["a referee","ə ˌrefəˈriː","alguien que te recomienda","a referíi"],
    ["a bullet point","ə ˈbʊlɪt pɔɪnt","una viñeta","a búlit póint"]
  ]},
  {g:"La carta", items:[
    ["a cover letter","ə ˈkʌvər ˈletər","una carta de presentación","a kávar létar"],
    ["Dear Sir or Madam","dɪr sɜːr ɔːr ˈmædəm","Estimado señor o señora","dir ser or mádam"],
    ["Yours faithfully","jɔːrz ˈfeɪθfəli","Le saluda atentamente","iórs féizfali"],
    ["Yours sincerely","jɔːrz sɪnˈsɪrli","Atentamente","iórs sinsíirli"],
    ["Best regards","best rɪˈɡɑːrdz","Un cordial saludo","best rigárds"],
    ["an attachment","ən əˈtætʃmənt","un archivo adjunto","an atáchment"],
    ["a paragraph","ə ˈpærəɡræf","un párrafo","a párragraf"],
    ["a signature","ə ˈsɪɡnətʃər","una firma","a sígnachar"],
    ["a vacancy","ə ˈveɪkənsi","una vacante","a véikansi"],
    ["an application","ən ˌæplɪˈkeɪʃn","una solicitud","an aplikéishon"]
  ]},
  {g:"Verbos de logro", items:[
    ["managed","ˈmænɪdʒd","gestioné","mánichd"],
    ["organised","ˈɔːrɡənaɪzd","organicé","órganaisd"],
    ["increased","ɪnˈkriːst","aumenté","inkríist"],
    ["reduced","rɪˈduːst","reduje","ridúust"],
    ["supported","səˈpɔːrtɪd","apoyé","sapórtid"],
    ["assisted","əˈsɪstɪd","ayudé","asístid"],
    ["prepared","prɪˈperd","preparé","pripérd"],
    ["improved","ɪmˈpruːvd","mejoré","imprúuvd"],
    ["completed","kəmˈpliːtɪd","completé","kompliítid"],
    ["achieved","əˈtʃiːvd","conseguí","achíivd"]
  ]},
  {g:"Formal o informal", items:[
    ["to require","tuː rɪˈkwaɪər","requerir","tu rikuáiar"],
    ["to receive","tuː rɪˈsiːv","recibir","tu risíiv"],
    ["to attach","tuː əˈtætʃ","adjuntar","tu atách"],
    ["to enclose","tuː ɪnˈkloʊz","adjuntar (en papel)","tu inklóus"],
    ["regarding","rɪˈɡɑːrdɪŋ","en relación con","rigárding"],
    ["further","ˈfɜːrðər","más, adicional","férdar"],
    ["available","əˈveɪləbl","disponible","avéilabl"],
    ["suitable","ˈsuːtəbl","idóneo","súutabl"],
    ["currently","ˈkɜːrəntli","actualmente","kérentli"],
    ["previously","ˈpriːviəsli","anteriormente","príiviasli"]
  ]}
];

const PRONKEY = [
  ["-tion","Siempre suena <i>shon</i>, nunca «ción».","application &rarr; aplikéishon"],
  ["-ed en s sorda","Detrás de <i>s</i> o <i>k</i> la terminación suena <i>t</i>.","increased &rarr; inkríist"],
  ["-ed en t o d","Detrás de <i>t</i> o <i>d</i> suena una sílaba entera.","supported &rarr; sapórtid"],
  ["tʃ","Como la <i>ch</i> española.","attach &rarr; atách"],
  ["dʒ","Como la <i>ch</i> pero con voz.","managed &rarr; mánichd"],
  ["th sorda","Lengua entre los dientes, sin voz.","faithfully &rarr; féizfali"],
  ["g muda","En <i>signature</i> la <i>g</i> no suena.","signature &rarr; sígnachar"],
  ["v","Labio de abajo contra los dientes de arriba.","receive &rarr; risíiv"],
  ["acento a la tercera","<i>Application</i> y <i>education</i> cargan en la sílaba del <i>-tion</i> menos una.","education &rarr; eyukéishon"]
];

const VERBS = [
  ["to attach","reg","attach · attaches","attached","will attach","adjuntar"],
  ["to require","reg","require · requires","required","will require","requerir"],
  ["to receive","reg","receive · receives","received","will receive","recibir"],
  ["to manage","reg","manage · manages","managed","will manage","gestionar"],
  ["to organise","reg","organise · organises","organised","will organise","organizar"],
  ["to improve","reg","improve · improves","improved","will improve","mejorar"],
  ["to achieve","reg","achieve · achieves","achieved","will achieve","conseguir"],
  ["to increase","reg","increase · increases","increased","will increase","aumentar"],
  ["to write","irr","write · writes","wrote","will write","escribir"],
  ["to send","irr","send · sends","sent","will send","enviar"],
  ["to read","irr","read · reads","read","will read","leer"],
  ["to hear","irr","hear · hears","heard","will hear","oír, tener noticias"]
];

const GRAMMAR = [
  {t:"El lenguaje del currículum", s:"sin sujeto, sin artículo, sin adornos",
   p:"El CV no se escribe en frases completas. Cada viñeta empieza directamente por el <b>verbo</b> o por el sustantivo, y se quitan el sujeto, los artículos y todo lo que no informe. Es el único texto en inglés donde eso está bien visto.",
   table:{head:["En una carta","En el CV","Por qué"], rows:[
     ["I dealt with the complaints.","Dealt with complaints","fuera sujeto y artículo"],
     ["I was responsible for the phone.","Responsible for the phone","fuera el verbo <i>to be</i>"],
     ["I have a B1 certificate.","B1 certificate (2026)","fuera todo menos el dato"],
     ["I can speak Spanish and English.","Spanish (native), English (B1)","fuera el verbo entero"]
   ]},
   aviso:["Ni punto final ni <i>I</i>","Las viñetas no llevan punto al final y nunca empiezan por <i>I</i>. Si una viñeta necesita sujeto, es que va en la carta, no en el CV."]},

  {t:"Los verbos de logro", s:"pasado simple, y siempre concreto",
   p:"Cada viñeta del CV empieza por un verbo <b>en pasado simple</b>, aunque el trabajo sea el actual. Y el inglés profesional prefiere el verbo que dice <b>qué conseguiste</b>, no el que dice qué te tocaba hacer.",
   table:{head:["Flojo","Fuerte","Español"], rows:[
     ["Worked in a shop","Managed a shop counter","gestioné"],
     ["Helped customers","Assisted forty guests a day","atendí"],
     ["Did the phone","Handled all phone bookings","me ocupé de"],
     ["Was good at English","Achieved a B1 certificate","conseguí"]
   ]},
   aviso:["Los números convencen","<i>Assisted guests</i> se olvida; <i>assisted forty guests a day</i> se recuerda. Siempre que puedas, pon una cifra detrás del verbo."]},

  {t:"Abrir y cerrar la carta", s:"la pareja que hay que respetar",
   p:"El saludo y la despedida van <b>emparejados</b>, y equivocarse es la señal más visible de que el inglés no es tu idioma. La regla es mecánica: si sabes el nombre, <i>sincerely</i>; si no lo sabes, <i>faithfully</i>.",
   table:{head:["Si…","Saludo","Despedida"], rows:[
     ["no sabes el nombre","Dear Sir or Madam,","Yours faithfully,"],
     ["sabes el nombre","Dear Miss Fuentes,","Yours sincerely,"],
     ["es un correo de trabajo","Dear Miss Fuentes,","Best regards,"],
     ["<span class='wrong'>nunca</span>","<span class='wrong'>Dear Miss Ana Fuentes,</span>","<span class='wrong'>Yours friendly,</span>"]
   ]},
   aviso:["Apellido sí, nombre completo no","Se escribe <span class='right'>Dear Miss Fuentes</span>, con el apellido solo. Y detrás del saludo va coma, no dos puntos, en inglés británico."]},

  {t:"Las fórmulas fijas", s:"cuatro frases que no se traducen, se copian",
   p:"Una carta de presentación se construye con piezas prefabricadas. Apréndelas enteras: cambiarles una palabra suele estropearlas.",
   chips:[["I am writing to apply for the position of…","Le escribo para solicitar el puesto de…"],["Please find attached my CV.","Adjunto mi currículum."],["I would be available from April.","Estaría disponible desde abril."],["I look forward to hearing from you.","Quedo a la espera de su respuesta."]],
   aviso:["<i>Look forward to</i> pide <i>-ing</i>","Aquí <i>to</i> no es el del infinitivo, es preposición: <span class='right'>look forward to hearing</span>, no <span class='wrong'>look forward to hear</span>. Es el fallo más repetido de toda la carta."]},

  {t:"Registro formal frente a informal", s:"lo que se cae al escribir en serio",
   p:"El inglés formal no usa palabras raras: usa las <b>mismas ideas sin atajos</b>. Tres cosas desaparecen: las contracciones, los phrasal verbs y el verbo comodín <i>get</i>.",
   table:{head:["Informal","Formal","Qué cambió"], rows:[
     ["I'm writing…","I am writing…","sin contracción"],
     ["I found out about the job","I learnt about the vacancy","sin phrasal verb"],
     ["I got a certificate","I obtained a certificate","sin <i>get</i>"],
     ["Thanks a lot","Thank you for your time","sin abreviar"],
     ["Can you send me…?","Could you please send me…?","petición suavizada"]
   ]},
   aviso:["Formal no es largo","Una carta formal buena cabe en tres párrafos: por qué escribes, qué ofreces y qué esperas. Alargarla no la hace más seria."]},

  {t:"Mayúsculas y puntuación", s:"el inglés escribe en mayúscula más que el español",
   p:"Media docena de reglas que el corrector no siempre arregla y que en el IELTS Writing cuestan puntos.",
   table:{head:["Va en mayúscula","Ejemplo","En español"], rows:[
     ["el pronombre I","…and I applied","yo, minúscula"],
     ["los meses","in April","abril, minúscula"],
     ["los días","on Tuesday","martes, minúscula"],
     ["idiomas y países","Spanish, Honduras","español, minúscula"],
     ["nombres de puestos y empresas","Hotel Maya, Front Desk Assistant","—"]
   ]},
   aviso:["La coma del saludo y la del cierre","<i>Dear Miss Fuentes<b>,</b></i> y <i>Yours sincerely<b>,</b></i> llevan coma; el nombre de abajo, no. Y después de la coma del saludo se sigue en párrafo nuevo."]}
];

/* Emma (A) y David (B) en videollamada, Dublín y Tegucigalpa */
const DIALOGUE = [
 {s:"A", ipa:"aɪ ɡɑːt jʊr siː viː kæn juː hɪr miː ˈduːblɪn ɪz ˈreɪnɪŋ", p:"ái gat iór si-ví. kan iú jíer mi? dáblin is réining",
  b:[["I got your CV.","Me llegó tu currículum."],["Can you hear me?","¿Me oyes?"],["Dublin is raining.","En Dublín llueve."]]},
 {s:"B", ipa:"aɪ kæn hɪr juː ɪz ɪt ˈterəbl", p:"ái kan jíer iú. is it téribl",
  b:[["I can hear you.","Te oigo."],["Is it terrible?","¿Está terrible?"]]},
 {s:"A", ipa:"nɑːt ˈterəbl bʌt ˈevri ˈbʊlɪt pɔɪnt stɑːrts wɪð aɪ teɪk ðem ɔːl aʊt", p:"nat téribl. bat évri búlit póint starts uid ái. téik dem ol áut",
  b:[["Not terrible.","Terrible no."],["But every bullet point","Pero todas las viñetas"],["starts with I.","empiezan por I."],["Take them all out.","Quítalas todas."]],
  n:"En el CV se quitan el sujeto y los artículos."},
 {s:"B", ipa:"ɔːl əv ðem", p:"ol av dem",
  b:[["All of them?","¿Todas?"]]},
 {s:"A", ipa:"ɔːl əv ðem aɪ delt wɪð ðə kəmˈpleɪnts bɪˈkʌmz delt wɪð kəmˈpleɪnts", p:"ol av dem. ái delt uid da kompléints bikáms delt uid kompléints",
  b:[["All of them.","Todas."],["“I dealt with the complaints”","“I dealt with the complaints”"],["becomes “Dealt with complaints”.","se convierte en “Dealt with complaints”."]]},
 {s:"B", ipa:"ðæt luks ˈempti", p:"dat luks émpti",
  b:[["That looks empty.","Se ve vacío."]]},
 {s:"A", ipa:"ɪt luks ˈprɑːfeʃənl ænd juː niːd ˈnʌmbərz haʊ ˈmeni ɡests ə deɪ", p:"it luks profésional. and iú níid námbars. jáu méni guests a déi",
  b:[["It looks professional.","Se ve profesional."],["And you need numbers.","Y te hacen falta cifras."],["How many guests a day?","¿Cuántos huéspedes al día?"]]},
 {s:"B", ipa:"ɪn ðə ʃɑːp əˈbaʊt ˈfɔːrti ˈpiːpl", p:"in da shap, abáut fórti píipl",
  b:[["In the shop,","En la tienda,"],["about forty people.","unas cuarenta personas."]]},
 {s:"A", ipa:"ðen raɪt əˈsɪstɪd ˈfɔːrti ˈkʌstəmərz ə deɪ ðæts ə ˈsentəns ðeɪ rɪˈmembər", p:"den ráit: asístid fórti kástamars a déi. dats a séntens déi rimémbar",
  b:[["Then write:","Entonces escribe:"],["“Assisted forty customers a day”.","“Assisted forty customers a day”."],["That's a sentence they remember.","Esa es una frase que se recuerda."]],
  n:"Verbo de logro en pasado simple, y una cifra detrás."},
 {s:"B", ipa:"ænd ðə ˈletər", p:"and da létar",
  b:[["And the letter?","¿Y la carta?"]]},
 {s:"A", ipa:"ðə ˈletər hæz wʌn bɪɡ ˌmɪsˈteɪk juː rəʊt dɪr ˈmɪsɪz ˈfwentes ænd ðen jɔːrz ˈfeɪθfəli", p:"da létar jas uán big mistéik. iú róut dir mísis Fuéntes, and den iórs féizfali",
  b:[["The letter has one big mistake.","La carta tiene un error grande."],["You wrote “Dear Miss Fuentes”","Escribiste “Dear Miss Fuentes”"],["and then “Yours faithfully”.","y luego “Yours faithfully”."]]},
 {s:"B", ipa:"ɪz ðæt rɔːŋ", p:"is dat rong",
  b:[["Is that wrong?","¿Está mal?"]]},
 {s:"A", ipa:"ɪf juː noʊ ðə neɪm juː kloʊz wɪð jɔːrz sɪnˈsɪrli ˈfeɪθfəli ɪz fɔːr dɪr sɜːr ɔːr ˈmædəm", p:"if iú nóu da néim, iú klóus uid iórs sinsíirli. féizfali is for dir ser or mádam",
  b:[["If you know the name,","Si sabes el nombre,"],["you close with “Yours sincerely”.","cierras con “Yours sincerely”."],["“Faithfully” is for “Dear Sir or Madam”.","“Faithfully” es para “Dear Sir or Madam”."]],
  n:"Nombre conocido, <i>sincerely</i>; nombre desconocido, <i>faithfully</i>."},
 {s:"B", ipa:"aɪl tʃeɪndʒ ɪt naʊ", p:"áil chéinch it náu",
  b:[["I'll change it now.","Lo cambio ahora."]]},
 {s:"A", ipa:"ˈɔːlsoʊ juː rəʊt aɪm ˈraɪtɪŋ wɪð ən əˈpɑːstrəfi noʊ kəntrækʃnz ɪn ə ˈfɔːrml ˈletər", p:"ólsou iú róut áim ráiting, uid an apástrofi. nóu kontrákshons in a fórmal létar",
  b:[["Also you wrote “I'm writing”,","También escribiste “I'm writing”,"],["with an apostrophe.","con apóstrofo."],["No contractions","Nada de contracciones"],["in a formal letter.","en una carta formal."]]},
 {s:"B", ipa:"soʊ aɪ æm ˈraɪtɪŋ ˈsepərət", p:"sóu ái am ráiting, séparat",
  b:[["So “I am writing”,","O sea “I am writing”,"],["separate.","separado."]]},
 {s:"A", ipa:"ɪɡˈzæktli ænd juː faʊnd aʊt əˈbaʊt ðə dʒɑːb bɪˈkʌmz juː lɜːrnt əˈbaʊt ðə ˈveɪkənsi", p:"igsáktli. and iú fáund áut abáut da chab bikáms iú lernt abáut da véikansi",
  b:[["Exactly.","Exacto."],["And “you found out about the job”","Y “you found out about the job”"],["becomes “you learnt about the vacancy”.","pasa a “you learnt about the vacancy”."]],
  n:"En registro formal caen los phrasal verbs y el verbo <i>get</i>."},
 {s:"B", ipa:"ðə lɑːst laɪn ɪz aɪ luk ˈfɔːrwərd tuː hɪr frʌm juː", p:"da last láin is: ái luk fóruard tu jíer from iú",
  b:[["The last line is","La última línea es"],["“I look forward to hear from you”.","“I look forward to hear from you”."]]},
 {s:"A", ipa:"ˈhɪrɪŋ nɑːt hɪr ðæt tuː ɪz ə prepəˈzɪʃn", p:"jíering, nat jíer. dat tu is a preposíshon",
  b:[["“Hearing”, not “hear”.","“Hearing”, no “hear”."],["That “to” is a preposition.","Ese “to” es una preposición."]],
  n:"<b>Look forward to</b> + <i>-ing</i>. Es el fallo más común de toda la carta."},
 {s:"B", ipa:"ðæt wʌn aɪ wʊd həv sent", p:"dat uán ái uúd jav sent",
  b:[["That one I would have sent.","Esa la habría mandado."]]},
 {s:"A", ipa:"ˈevribɑːdi sendz ðæt wʌn wʌn mɔːr θɪŋ ˈeɪprəl ænd ˈtuːzdeɪ teɪk ˈkæpɪtl ˈletərz", p:"évribadi sends dat uán. uán mor zing: éipril and túusdei téik kápitl létars",
  b:[["Everybody sends that one.","Todo el mundo la manda."],["One more thing:","Una cosa más:"],["“April” and “Tuesday”","“April” y “Tuesday”"],["take capital letters.","van en mayúscula."]]},
 {s:"B", ipa:"ɪn ˈspænɪʃ ðeɪ doʊnt", p:"in spánish déi dóunt",
  b:[["In Spanish they don't.","En español no."]]},
 {s:"A", ipa:"aɪ noʊ soʊ ˈspænɪʃ ænd hɑːnˈdʊrəs teɪk ðem tuː sɛnd ɪt tuˈnaɪt ænd tel miː", p:"ái nóu. sóu spánish and jandúras téik dem tu. send it tunáit and tel mi",
  b:[["I know.","Ya lo sé."],["So “Spanish” and “Honduras”","Así que “Spanish” y “Honduras”"],["take them too.","también la llevan."],["Send it tonight and tell me.","Mándala esta noche y me cuentas."]]},
 {s:"B", ipa:"ˈθæŋk juː ˈemə ɡoʊ aʊt əv ðə reɪn", p:"zánk iú, Éma. góu áut av da réin",
  b:[["Thank you, Emma.","Gracias, Emma."],["Go out of the rain.","Sal de la lluvia."]]}
];

const LECTURA = {
  titulo: "Two pages and one letter",
  entradilla: "Una videollamada entre Dublín y Tegucigalpa, con el CV abierto en la pantalla. El texto pone a trabajar lo de la Fase 1: las viñetas sin sujeto, los verbos de logro con cifras, la pareja saludo-despedida, <i>look forward to hearing</i>, el registro formal y las mayúsculas. Cada párrafo cambia de persona.",
  parrafos: [
    "Emma read my CV from Dublin, where it was raining, and she said every bullet point started with the same letter. I had written “I dealt with the complaints”; she wanted “Dealt with complaints”, with no subject and no article. It looked empty to me, but she says it looks professional.",
    "She also wanted numbers. In my uncle's shop I served about forty people a day, so the line is now “Assisted forty customers a day”. Kevin read it later and said that one sentence is worth the whole page.",
    "The letter had a worse problem. I wrote “Dear Miss Fuentes” and closed with “Yours faithfully”, and those two never go together. When you know the name you close with “Yours sincerely”. We removed the contractions as well, because a formal letter does not use them.",
    "My last line said “I look forward to hear from you”. Emma laughed and told me that everybody sends that mistake: the “to” there is a preposition, so it must be “hearing”. Then she reminded me that “April”, “Tuesday”, “Spanish” and “Honduras” all take capital letters in English."
  ],
  glosario: [
    ["read","riːd","leyó","ríid"],
    ["Dublin","ˈdʌblɪn","Dublín","dáblin"],
    ["raining","ˈreɪnɪŋ","lloviendo","réining"],
    ["said","sed","dijo","sed"],
    ["every","ˈevri","cada","évri"],
    ["bullet point","ˈbʊlɪt pɔɪnt","viñeta","búlit póint"],
    ["bullet","ˈbʊlɪt","viñeta","búlit"],
    ["point","pɔɪnt","punto","póint"],
    ["started","ˈstɑːrtɪd","empezaba","startid"],
    ["same","seɪm","misma","séim"],
    ["letter","ˈletər","letra; carta","létar"],
    ["had written","hæd ˈrɪtn","había escrito","jad rítn"],
    ["written","ˈrɪtn","escrito","rítn"],
    ["dealt with","delt wɪð","me ocupé de","delt uid"],
    ["dealt","delt","traté","delt"],
    ["complaints","kəmˈpleɪnts","quejas","kompléints"],
    ["wanted","ˈwɑːntɪd","quería","uántid"],
    ["subject","ˈsʌbdʒɪkt","sujeto","sábchekt"],
    ["article","ˈɑːrtɪkl","artículo","ártikl"],
    ["looked","lʊkt","parecía","lukt"],
    ["empty","ˈempti","vacío","émpti"],
    ["looks","lʊks","parece","luks"],
    ["professional","prəˈfeʃənl","profesional","profésional"],
    ["also","ˈɔːlsoʊ","también","ólsou"],
    ["numbers","ˈnʌmbərz","cifras","námbars"],
    ["uncle's","ˈʌŋklz","de mi tío","ánkls"],
    ["uncle","ˈʌŋkl","tío","ánkl"],
    ["shop","ʃɑːp","tienda","shap"],
    ["served","sɜːrvd","atendí","servd"],
    ["forty","ˈfɔːrti","cuarenta","fórti"],
    ["line","laɪn","línea","láin"],
    ["assisted","əˈsɪstɪd","atendí","asístid"],
    ["customers","ˈkʌstəmərz","clientes","kástamars"],
    ["later","ˈleɪtər","después","léitar"],
    ["sentence","ˈsentəns","frase","séntens"],
    ["is worth","ɪz wɜːrθ","vale","is uérz"],
    ["worth","wɜːrθ","valor","uérz"],
    ["whole","hoʊl","entera","jóul"],
    ["page","peɪdʒ","página","péich"],
    ["worse","wɜːrs","peor","uérs"],
    ["problem","ˈprɑːbləm","problema","prábläm"],
    ["wrote","roʊt","escribí","róut"],
    ["Dear","dɪr","Estimada","dir"],
    ["Miss","mɪs","señorita","mis"],
    ["Fuentes","ˈfwentes","Fuentes (jefa de recepción)","fuéntes"],
    ["closed","kloʊzd","cerré","klóusd"],
    ["Yours","jɔːrz","suyo","iórs"],
    ["faithfully","ˈfeɪθfəli","atentamente","féizfali"],
    ["sincerely","sɪnˈsɪrli","atentamente","sinsíirli"],
    ["together","təˈɡeðər","juntas","tuguédar"],
    ["name","neɪm","nombre","néim"],
    ["removed","rɪˈmuːvd","quitamos","rimúuvd"],
    ["contractions","kənˈtrækʃnz","contracciones","kontrákshons"],
    ["as well","æz wel","también","as uél"],
    ["formal","ˈfɔːrml","formal","fórmal"],
    ["use","juːz","usar","iúus"],
    ["last","læst","última","last"],
    ["look forward to","lʊk ˈfɔːrwərd tuː","quedar a la espera de","luk fóruard tu"],
    ["forward","ˈfɔːrwərd","adelante","fóruard"],
    ["hear","hɪr","oír, saber","jíer"],
    ["hearing","ˈhɪrɪŋ","saber, oír","jíering"],
    ["laughed","læft","se rió","laft"],
    ["told","toʊld","me dijo","tóuld"],
    ["everybody","ˈevribɑːdi","todo el mundo","évribadi"],
    ["sends","sendz","manda","sends"],
    ["mistake","mɪˈsteɪk","error","mistéik"],
    ["preposition","ˌprepəˈzɪʃn","preposición","preposíshon"],
    ["must","mʌst","tiene que","mast"],
    ["reminded","rɪˈmaɪndɪd","me recordó","rimáindid"],
    ["April","ˈeɪprəl","abril","éipril"],
    ["Tuesday","ˈtuːzdeɪ","martes","túusdei"],
    ["Spanish","ˈspænɪʃ","español","spánish"],
    ["capital","ˈkæpɪtl","mayúscula","kápitl"],
    ["capital letters","ˈkæpɪtl ˈletərz","mayúsculas","kápitl létars"],
    ["letters","ˈletərz","letras","létars"],
    ["English","ˈɪŋɡlɪʃ","inglés","ínglish"],
    ["Emma","ˈemə","Emma (hermana de Tom)","éma"],
    ["Kevin","ˈkevɪn","Kevin (compañero)","kévin"],
    ["CV","ˌsiː ˈviː","currículum","si-ví"],
    ["where","wer","donde","uér"],
    ["them","ðem","las","dem"],
    ["those","ðoʊz","esas dos","dóus"],
    ["never","ˈnevər","nunca","névar"],
    ["now","naʊ","ahora","náu"],
    ["one","wʌn","una","uán"],
    ["all","ɔːl","todas","ol"],
    ["and","ænd","y","and"],
    ["said that","sed ðæt","dijo que","sed dat"],
    ["close","kloʊz","cierras","klóus"]
  ],
  preguntas: [
    { q:"Why does Emma want the bullet points without “I”?",
      ops:["Because the CV is too long","Because it looks professional","Because English has no subject"], ok:1,
      pista:"Primer párrafo, al final. A David le parece vacío; a ella, otra cosa." },
    { q:"What was wrong with the letter?",
      ops:["“Dear Miss Fuentes” with “Yours faithfully”","The letter had no signature","He used the wrong month"], ok:0,
      pista:"Tercer párrafo. Saludo y despedida van emparejados." },
    { q:"Why must it be “hearing” and not “hear”?",
      ops:["Because the letter is in the past","Because everybody writes it that way","Because that “to” is a preposition"], ok:2,
      pista:"Último párrafo. Emma lo explica en cinco palabras." }
  ]

};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a2-18"] = {
  meta: {
    id: "a2-18", nivel: "A2", numero: 18,
    titulo: "Currículum y carta de presentación",
    descriptor: "Puedo redactar un currículum breve y una carta de presentación formal, con las fórmulas fijas y el registro adecuados.",
    escena: "Emma & David · videollamada entre Dublín y Tegucigalpa",
    personajeIA: "Emma", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
