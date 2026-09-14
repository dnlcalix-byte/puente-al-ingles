/* ============================================================
   LECCIÓN A1-12 · Trabajos y profesiones
   ============================================================ */
(function(){

const VOCAB = [
  {g:"Profesiones", items:[
    ["job","dʒɑːb","trabajo, empleo","yab"],["teacher","ˈtiːtʃər","profesor","tíicher"],
    ["doctor","ˈdɑːktər","médico","dáktar"],["nurse","nɜːrs","enfermero","ners"],
    ["engineer","ˌendʒɪˈnɪr","ingeniero","enchiníer"],["lawyer","ˈlɔːjər","abogado","lóier"],
    ["waiter","ˈweɪtər","mesero","uéitar"],["cook","kʊk","cocinero","kuk"],
    ["driver","ˈdraɪvər","conductor","dráivar"],["farmer","ˈfɑːrmər","agricultor","fármar"],
    ["shop assistant","ʃɑːp əˈsɪstənt","dependiente","shap asístant"],["accountant","əˈkaʊntənt","contador","akáuntant"]
  ]},
  {g:"Más oficios", items:[
    ["student","ˈstuːdnt","estudiante","stúudent"],["secretary","ˈsekrəteri","secretario","sékretari"],
    ["manager","ˈmænɪdʒər","gerente","mánayer"],["police officer","pəˈliːs ˈɑːfɪsər","policía","políis áfisar"],
    ["firefighter","ˈfaɪərfaɪtər","bombero","fáiarfaitar"],["dentist","ˈdentɪst","dentista","déntist"],
    ["journalist","ˈdʒɜːrnəlɪst","periodista","yérnalist"],["programmer","ˈproʊɡræmər","programador","próugramar"]
  ]},
  {g:"El lugar de trabajo", items:[
    ["office","ˈɑːfɪs","oficina","áafis"],["company","ˈkʌmpəni","empresa","kámpani"],
    ["factory","ˈfæktri","fábrica","fáktri"],["hospital","ˈhɑːspɪtl","hospital","jáspitl"],
    ["restaurant","ˈrestrɑːnt","restaurante","réstrant"],["school","skuːl","escuela","skúul"],
    ["farm","fɑːrm","finca","farm"],["boss","bɔːs","jefe","bos"],
    ["colleague","ˈkɑːliːɡ","compañero","káliig"],["salary","ˈsæləri","sueldo","sálari"]
  ]},
  {g:"Hablar del trabajo", items:[
    ["What do you do","wʌt duː juː duː","a qué te dedicas","uát du iú du"],["work as","wɜːrk æz","trabajar de","uérk as"],
    ["work for","wɜːrk fɔːr","trabajar para","uérk for"],["full-time","ˌfʊl ˈtaɪm","tiempo completo","ful táim"],
    ["part-time","ˌpɑːrt ˈtaɪm","medio tiempo","part táim"],["hard","hɑːrd","duro, mucho","jard"],
    ["interesting","ˈɪntrəstɪŋ","interesante","íntrestin"],["boring","ˈbɔːrɪŋ","aburrido","bóring"],
    ["difficult","ˈdɪfɪkəlt","difícil","dífikalt"],["easy","ˈiːzi","fácil","íisi"],
    ["unemployed","ˌʌnɪmˈplɔɪd","desempleado","animplóid"],["retired","rɪˈtaɪərd","jubilado","ritáiard"]
  ]}
];

const PRONKEY = [
  ["j","Aire por la garganta, suave.","hospital &rarr; jáspitl"],
  ["y","Como la <i>y</i> de «yo».","job &rarr; yab"],
  ["ch","Como en «coche».","teacher &rarr; tíicher"],
  ["sh","Como pedir silencio.","shop &rarr; shap"],
  ["v","Labio de abajo contra los dientes de arriba.","driver &rarr; dráivar"],
  ["ng","La <i>n</i> se queda atrás, sin cerrar los labios.","boring &rarr; bóring"],
  ["r final","Apenas se toca, nunca vibra.","manager &rarr; mánayer"],
  ["letras mudas","En <i>colleague</i> la <i>ue</i> final no se pronuncia.","colleague &rarr; káliig"],
  ["tilde","La sílaba fuerte. En <i>engineer</i> cae al final.","engineer &rarr; enchiníer"]
];

const VERBS = [
  ["to work","reg","work · works","worked","will work","trabajar"],
  ["to earn","reg","earn · earns","earned","will earn","ganar"],
  ["to teach","irr","teach · teaches","taught","will teach","enseñar"],
  ["to build","irr","build · builds","built","will build","construir"],
  ["to sell","irr","sell · sells","sold","will sell","vender"],
  ["to drive","irr","drive · drives","drove","will drive","conducir"],
  ["to serve","reg","serve · serves","served","will serve","servir"],
  ["to manage","reg","manage · manages","managed","will manage","dirigir"],
  ["to retire","reg","retire · retires","retired","will retire","jubilarse"],
  ["to apply","reg","apply · applies","applied","will apply","postular"],
  ["to enjoy","reg","enjoy · enjoys","enjoyed","will enjoy","disfrutar"]
];

const GRAMMAR = [
  {t:"Un artículo obligatorio", s:"I'm a teacher",
   p:"Al decir la profesión, el inglés exige <b>a</b> o <b>an</b>. El español lo omite, y ésta es de las reglas que más cuesta automatizar.",
   table:{head:["Español","Inglés","Nunca"], rows:[
     ["Soy profesor","I am a teacher","I am teacher"],
     ["Es ingeniera","She is an engineer","She is engineer"],
     ["Somos estudiantes","We are students","We are student"]
   ]},
   aviso:["Sólo desaparece en plural","<b>I am a student</b> lleva artículo, pero <b>we are students</b> no, porque los plurales indefinidos no lo llevan nunca en inglés."]},

  {t:"¿A qué te dedicas?", s:"What do you do?",
   p:"La pregunta es <b>What do you do?</b>, con dos <i>do</i>: el primero es el auxiliar y el segundo el verbo. Suena raro pero es lo normal.",
   chips:[["What do you do?","¿A qué te dedicas?"],["What does she do?","¿A qué se dedica ella?"],["I'm a nurse","Soy enfermero"],["I work in a hospital","Trabajo en un hospital"]],
   aviso:["No preguntes <i>What is your work?</i>","Se entiende, pero no es lo que dice un nativo. La fórmula natural es <b>What do you do?</b>, y conviene aprenderla entera."]},

  {t:"Work as, work for, work in", s:"tres preposiciones",
   p:"Las tres traducen «trabajar» pero dicen cosas distintas: el puesto, la empresa y el lugar.",
   table:{head:["Estructura","Indica","Ejemplo"], rows:[
     ["work as + profesión","el puesto","She works as a nurse."],
     ["work for + empresa","el empleador","He works for a big company."],
     ["work in + lugar o sector","dónde","I work in a hospital."],
     ["work with + personas","con quién","I work with children."]
   ]},
   aviso:["<i>Work as</i> también lleva artículo","<span class='wrong'>She works as nurse.</span> &nbsp;&rarr;&nbsp; <span class='right'>She works as <b>a</b> nurse.</span> El artículo de profesión no se escapa ni aquí."]},

  {t:"Profesiones que salen de un verbo", s:"-er, -or, -ist",
   p:"Muchos oficios se forman añadiendo una terminación al verbo. Reconocer el patrón te ahorra memorizar.",
   table:{head:["Terminación","Verbo","Profesión"], rows:[
     ["-er","to teach","teacher"],
     ["-er","to drive","driver"],
     ["-or","to act","actor"],
     ["-ist","art","artist"],
     ["-ant","to assist","assistant"]
   ]}},

  {t:"Describir el trabajo", s:"adjetivos",
   p:"Con los adjetivos terminados en <b>-ing</b> se describe la cosa; con los terminados en <b>-ed</b>, cómo te sientes tú.",
   chips:[["My job is boring","Mi trabajo es aburrido"],["I am bored","Estoy aburrido"],["The class is interesting","La clase es interesante"],["I am interested","Estoy interesado"]],
   aviso:["Confundirlos cambia el sentido por completo","<b>I am boring</b> significa «soy una persona aburrida». <b>I am bored</b> significa «estoy aburrido». Es un error frecuente y, cuando se comete, resulta gracioso."]},

  {t:"Hablar de horarios de trabajo", s:"full-time, part-time",
   p:"Y las horas, con <b>from … to</b>, que ya usaste para la estación lluviosa.",
   chips:[["I work full-time","Trabajo a tiempo completo"],["She works part-time","Ella trabaja medio tiempo"],["from nine to five","de nueve a cinco"],["I work forty hours a week","Trabajo cuarenta horas por semana"]],
   aviso:["<i>A week</i>, no <i>per week</i>","En lenguaje corriente se dice <b>forty hours a week</b>. <i>Per week</i> existe pero suena a formulario."]}
];

/* Sarah (A) y David (B) hablan de trabajos */
const DIALOGUE = [
 {s:"A", ipa:"wʌt dəz jʊr ˈfɑːðər duː", p:"uát das iór fáder du",
  b:[["What does","¿A qué"],["your father","tu padre"],["do?","se dedica?"]],
  n:"<b>What does he do?</b>: el primer <i>do/does</i> es auxiliar y el último es el verbo. Los dos hacen falta."},
 {s:"B", ipa:"hiz ən əˈkaʊntənt hi wɜːrks ɪn ən ˈɑːfɪs", p:"jíis an akáuntant. ji uérks in an áafis",
  b:[["He is","Él es"],["an","un"],["accountant.","contador."],["He works","Trabaja"],["in an office.","en una oficina."]],
  n:"<b>An accountant</b> con artículo. En español decimos «es contador», sin nada delante; en inglés es obligatorio."},
 {s:"A", ipa:"dəz hi laɪk hɪz dʒɑːb", p:"das ji láik jis yab",
  b:[["Does he like","¿Le gusta"],["his job?","su trabajo?"]]},
 {s:"B", ipa:"nɑːt ˈɔːlweɪz hi seɪz ɪts ə bɪt ˈbɔːrɪŋ", p:"nat ólueis. ji ses its a bit bóring",
  b:[["Not always.","No siempre."],["He says","Dice"],["it is","que es"],["a bit","un poco"],["boring.","aburrido."]],
  n:"<b>Boring</b> describe el trabajo. Si dijera <i>he is bored</i> significaría que él está aburrido. No es lo mismo."},
 {s:"A", ipa:"ænd jʊr ˈmʌðər ʃiz ə ˈtiːtʃər raɪt", p:"and iór máder. shiis a tíicher, ráit",
  b:[["And your mother?","¿Y tu madre?"],["She is","Es"],["a teacher,","profesora,"],["right?","verdad?"]]},
 {s:"B", ipa:"jes ʃi wɜːrks æz ə ˈtiːtʃər ɪn ə smɔːl skuːl", p:"yes. shi uérks as a tíicher in a smóol skúul",
  b:[["Yes.","Sí."],["She works","Trabaja"],["as a teacher","de profesora"],["in a small school.","en una escuela pequeña."]],
  n:"<b>Work as</b> indica el puesto, <b>work in</b> el lugar. Y <i>as</i> también exige el artículo: <i>as a teacher</i>."},
 {s:"A", ipa:"dəz ʃi wɜːrk fʊl taɪm", p:"das shi uérk ful táim",
  b:[["Does she work","¿Trabaja"],["full-time?","tiempo completo?"]]},
 {s:"B", ipa:"noʊ pɑːrt taɪm frʌm eɪt tuː wʌn", p:"nóu, part táim. from éit tu uán",
  b:[["No,","No,"],["part-time.","medio tiempo."],["From eight","De ocho"],["to one.","a una."]]},
 {s:"A", ipa:"ðæts ɡʊd dəz ʃi ɪnˈdʒɔɪ ɪt", p:"dats gud. das shi inyói it",
  b:[["That is good.","Eso está bien."],["Does she enjoy it?","¿Lo disfruta?"]]},
 {s:"B", ipa:"ʃi lʌvz ɪt ʃi wɜːrks wɪð ˈlɪtl ˈtʃɪldrən", p:"shi lavs it. shi uérks uid lítl chíldren",
  b:[["She loves it.","Le encanta."],["She works","Trabaja"],["with","con"],["little","niños"],["children.","pequeños."]],
  n:"<b>Children</b> es el plural irregular de <i>child</i>. Y <b>work with</b> indica con quién, no dónde."},
 {s:"A", ipa:"wʌt əˈbaʊt juː duː juː wɜːrk", p:"uát abáut iú. du iú uérk",
  b:[["What about you?","¿Y tú?"],["Do you work?","¿Trabajas?"]]},
 {s:"B", ipa:"noʊ aɪm ˈoʊnli ə ˈstuːdnt fɔːr naʊ", p:"nóu, áim óunli a stúudent for náu",
  b:[["No,","No,"],["I'm only","solo soy"],["a student","estudiante"],["for now.","por ahora."]]},
 {s:"A", ipa:"wʌt dʒɑːb duː juː wɑːnt ˈæftər skuːl", p:"uát yab du iú uánt áfter skúul",
  b:[["What job","¿Qué trabajo"],["do you want","quieres"],["after school?","al terminar?"]]},
 {s:"B", ipa:"aɪ wɑːnt tuː bi ə ˈproʊɡræmər ɪts ˈɪntrəstɪŋ", p:"ái uánt tu bi a próugramar. its íntrestin",
  b:[["I want","Quiero"],["to be","ser"],["a programmer.","programador."],["It is","Es"],["interesting.","interesante."]]},
 {s:"A", ipa:"ɪz ɪt ˈdɪfɪkəlt tuː lɜːrn", p:"is it dífikalt tu lern",
  b:[["Is it","¿Es"],["difficult","difícil"],["to learn?","de aprender?"]]},
 {s:"B", ipa:"nɑːt ˈiːzi bʌt aɪm ˈɪntrəstɪd ɪn ɪt", p:"nat íisi, bat áim íntrestid in it",
  b:[["Not easy,","No es fácil,"],["but","pero"],["I am interested","estoy interesado"],["in it.","en ello."]],
  n:"<b>Interested</b> con <i>-ed</i>: así se siente él. Con <i>-ing</i>, <b>interesting</b>, sería la cosa en sí."},
 {s:"A", ipa:"ˈproʊɡræmərz ɜːrn ə ɡʊd ˈsæləri hɪr", p:"próugramars ern a gud sálari jíer",
  b:[["Programmers","Los programadores"],["earn","ganan"],["a good","un buen"],["salary","sueldo"],["here.","aquí."]]},
 {s:"B", ipa:"aɪ noʊ maɪ ˈkʌzn wɜːrks fɔːr ə bɪɡ ˈkʌmpəni", p:"ái nóu. mái kásn uérks for a big kámpani",
  b:[["I know.","Lo sé."],["My cousin","Mi primo"],["works for","trabaja para"],["a big company.","una empresa grande."]],
  n:"<b>Work for</b> + empresa. Con el lugar físico sería <i>work in</i>."},
 {s:"A", ipa:"ɪz hi ə ˈmænɪdʒər", p:"is ji a mánayer",
  b:[["Is he","¿Es"],["a manager?","gerente?"]]},
 {s:"B", ipa:"nɑːt jet bʌt hɪz bɔːs ɪz ˈvɛri ɡʊd tuː hɪm", p:"nat yet. bat jis bos is véri gud tu jim",
  b:[["Not yet.","Todavía no."],["But","Pero"],["his boss","su jefe"],["is","es"],["very good","muy bueno"],["to him.","con él."]]},
 {s:"A", ipa:"maɪ ˈɡrænfɑːðər ɪz rɪˈtaɪərd naʊ hi wɑːz ə ˈfɑːrmər", p:"mái gránfader is ritáiard náu. ji uás a fármar",
  b:[["My grandfather","Mi abuelo"],["is retired","está jubilado"],["now.","ahora."],["He was","Era"],["a farmer.","agricultor."]]},
 {s:"B", ipa:"ðæts hɑːrd wɜːrk maɪ ˈʌŋkl hæz ə fɑːrm tuː", p:"dats jard uérk. mái áncl jas a farm túu",
  b:[["That is","Eso es"],["hard work.","trabajo duro."],["My uncle","Mi tío"],["has","tiene"],["a farm","una finca"],["too.","también."]]},
 {s:"A", ipa:"ˈevri dʒɑːb ɪz hɑːrd ɪn ɪts oʊn weɪ", p:"évri yab is jard in its óun uéi",
  b:[["Every job","Todo trabajo"],["is hard","es duro"],["in its own way.","a su manera."]]},
 {s:"B", ipa:"truː lets ɡoʊ tuː klæs ɔːr wi ɑːr leɪt", p:"trúu. lets góu tu klas or ui ar léit",
  b:[["True.","Cierto."],["Let's go to class","Vamos a clase"],["or","o"],["we are late.","llegamos tarde."]]}
];

const LECTURA = {
  titulo: "Everybody works",
  entradilla: "Una vuelta por los oficios del barrio. El texto practica el artículo obligatorio de profesión y las tres preposiciones de <i>work</i>, con sujetos en singular y en plural.",
  parrafos: [
    "My father is an accountant and he works in an office. He says his job is a bit boring, but the salary is good. My mother works as a teacher in a small school, part-time, from eight to one. She loves it because she works with little children.",
    "My cousins Pablo and Nico are students, but they also work at the weekend. They work for their uncle on his farm, and they earn a little money. They say farm work is hard, and my grandfather agrees: he was a farmer for forty years and he is retired now.",
    "Mrs Castro has her own shop. She is not an employee, so she does not have a boss: she opens and closes when she wants. Dr Reyes works in the hospital near the park. She works full-time and she is often tired, but she never says her job is boring.",
    "I am only a student for now. After school I want to be a programmer, like my cousin Kevin's brother. He works for a big company and he earns a good salary. It is not easy to learn, but I am interested in it and I am never bored in my computer class. We are all different, and every job is hard in its own way."
  ],
  glosario: [
    ["works","wɜːrks","trabaja","uérks"],
    ["work","wɜːrk","trabajan, trabajo","uérk"],
    ["earn","ɜːrn","ganan","ern"],
    ["earns","ɜːrnz","gana","erns"],
    ["says","sez","dice","ses"],
    ["say","seɪ","dicen","séi"],
    ["agrees","əˈɡriːz","está de acuerdo","agríis"],
    ["loves","lʌvz","le encanta","lavs"],
    ["opens","ˈoʊpənz","abre","óupens"],
    ["closes","ˈkloʊzɪz","cierra","klóusis"],
    ["wants","wɑːnts","quiere","uánts"],
    ["want","wɑːnt","quiero","uánt"],
    ["learn","lɜːrn","aprender","lern"],
    ["was","wʌz","era","uás"],
    ["accountant","əˈkaʊntənt","contador","akáuntant"],
    ["teacher","ˈtiːtʃər","profesora","tíicher"],
    ["farmer","ˈfɑːrmər","agricultor","fármar"],
    ["programmer","ˈproʊɡræmər","programador","próugramar"],
    ["students","ˈstuːdnts","estudiantes","stúudents"],
    ["student","ˈstuːdnt","estudiante","stúudent"],
    ["employee","ɪmˈplɔɪiː","empleada","implóii"],
    ["boss","bɔːs","jefe","bos"],
    ["company","ˈkʌmpəni","empresa","kámpani"],
    ["office","ˈɑːfɪs","oficina","áafis"],
    ["school","skuːl","escuela","skúul"],
    ["shop","ʃɑːp","tienda","shap"],
    ["hospital","ˈhɑːspɪtl","hospital","jáspitl"],
    ["farm","fɑːrm","finca","farm"],
    ["salary","ˈsæləri","sueldo","sálari"],
    ["job","dʒɑːb","trabajo","yab"],
    ["boring","ˈbɔːrɪŋ","aburrido","bóring"],
    ["bored","bɔːrd","aburrido (yo)","bord"],
    ["interested","ˈɪntrəstɪd","interesado","íntrestid"],
    ["retired","rɪˈtaɪərd","jubilado","ritáiard"],
    ["part-time","ˌpɑːrt ˈtaɪm","medio tiempo","part táim"],
    ["full-time","ˌfʊl ˈtaɪm","tiempo completo","ful táim"],
    ["hard","hɑːrd","duro","jard"],
    ["easy","ˈiːzi","fácil","íisi"],
    ["tired","ˈtaɪərd","cansada","táiard"],
    ["children","ˈtʃɪldrən","niños","chíldren"],
    ["cousins","ˈkʌznz","primos","kásns"],
    ["cousin","ˈkʌzn","primo","kásn"],
    ["brother","ˈbrʌðər","hermano","bráder"],
    ["uncle","ˈʌŋkl","tío","áncl"],
    ["grandfather","ˈɡrænfɑːðər","abuelo","gránfader"],
    ["mother","ˈmʌðər","madre","máder"],
    ["father","ˈfɑːðər","padre","fáder"],
    ["own","oʊn","propia","óun"],
    ["way","weɪ","manera","uéi"],
    ["different","ˈdɪfrənt","diferentes","dífrent"],
    ["computer","kəmˈpjuːtər","computación","kampiúter"],
    ["forty","ˈfɔːrti","cuarenta","fórti"],
    ["years","jɪrz","años","íers"],
    ["weekend","ˈwiːkend","fin de semana","uíkend"],
    ["little","ˈlɪtl","pequeños; poco","lítl"],
    ["often","ˈɔːfn","a menudo","ófn"]
  ],
  preguntas: [
    { q:"Where do Pablo and Nico work at the weekend?",
      ops:["In an office","On their uncle's farm","In Mrs Castro's shop"], ok:1,
      pista:"Segundo párrafo: trabajan para un familiar." },
    { q:"Why doesn't Mrs Castro have a boss?",
      ops:["Because she has her own shop","Because she is retired","Because she is a student"], ok:0,
      pista:"Tercer párrafo: abre y cierra cuando quiere." },
    { q:"What does David want to be?",
      ops:["An accountant","A farmer","A programmer"], ok:2,
      pista:"Último párrafo: como el hermano del primo de Kevin." }
  ]
};

window.LECCIONES = window.LECCIONES || {};
window.LECCIONES["a1-12"] = {
  meta: {
    id: "a1-12", nivel: "A1", numero: 12,
    titulo: "Trabajos y profesiones",
    descriptor: "Puedo decir a qué me dedico y a qué se dedican otros, describir un lugar de trabajo y expresar una opinión sencilla sobre un empleo.",
    escena: "Sarah & David · hablando de la familia antes de clase",
    personajeIA: "Sarah", personajeAlumno: "David"
  },
  VOCAB, PRONKEY, VERBS, GRAMMAR, DIALOGUE, LECTURA
};
})();
