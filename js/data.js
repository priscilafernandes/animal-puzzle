const data = [
  {
    id: 1,
    name: "cat",
    img: "animal-cat.png",
    backg: "#F9D7D9",
    sound: "",
    active: true,
    description: "O gato é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos."
  },
  {
    id: 2,
    name: "owl",
    img: "animal-owl.png",
    backg: "#FDDF81",
    sound: "",
    active: true,
    description: "São caçadoras eficientes, usando sobretudo seus olhos extremamente aguçados e movimentos rápidos. Além disso, são extremamente atentas ao ambiente, têm grande capacidade de girar o pescoço e voar silenciosamente devido a penas especiais muito macias e numerosas que compõem suas asas. Possuem, em sua maioria, hábitos noturnos, alimentando-se de pequenos mamíferos (principalmente de roedores e morcegos), insetos, aranhas, peixes e outras aves."
  },
  {
    id: 3,
    name: "duck",
    img: "animal-duck.png",
    backg: "#CFE0A1",
    sound: "",
    active: true,
    description: "O pato é uma ave que pode ser encontrada tanto em água doce como salgada. Alimenta-se de vegetação aquática, moluscos e pequenos invertebrados e algumas espécies são aves migradoras."
  },
  {
    id: 4,
    name: "sheep",
    img: "animal-sheep.png",
    backg: "#C8E7EB",
    sound: "",
    active: true,
    description: "A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou borregos."
  },
  {
    id: 5,
    name: "squirrel",
    img: "animal-squirrel.png",
    backg: "#F7C396",
    sound: "",
    active: true,
    description: "Os esquilos pertencem a uma grande família de mamíferos roedores, de pequeno e médio porte, conhecida como Sciuridae. Estão espalhados por quase todo o mundo, a maioria nas zonas de climas temperado ou tropical, mas também em algumas zonas de clima frio. Como todos os roedores, possui presas fortíssimas, com que roem facilmente sementes, principalmente bolotas."
  },
  {
    id: 6,
    name: "leopard",
    img: "animal-leopard.png",
    backg: "#FDDF81",
    sound: "",
    active: true,
    description: "O leopardo é uma espécie de felídeo nativo da África e da Ásia. É, com o tigre, o leão, o leopardo-das-neves e a onça-pintada, um dos cinco grandes felinos do gênero Panthera. É também conhecido informalmente pela denominação de onça em Angola."
  },
  {
    id: 7,
    name: "rhinoceros",
    img: "animal-rhinoceros.png",
    backg: "#F7C396",
    sound: "",
    active: true,
    description: "Os Rinocerontes são grandes mamíferos perissodáctilos (ungulados de dedos ímpares) da família Rhinocerontidae, que ocorrem na África e na Ásia. Vivem geralmente isolados, em savanas ou florestas onde possam encontrar água diariamente."
  },
  {
    id: 8,
    name: "alligator",
    img: "animal-alligator.png",
    backg: "#C8E7EB",
    sound: "",
    active: true,
    description: "Jacaré são crocodilianos da família Alligatoridae, sendo muito parecidos com os crocodilos, dos quais se distinguem pela cabeça mais curta e larga e pela presença de membranas interdigitais nos polegares das patas traseiras. O tamanho de um jacaré pode variar de 1,2 metros (jacaré-anão) até 5,5 metros (jacaré-açu), podendo pesar de seis a seiscentos quilos."
  },
  {
    id: 9,
    name: "chinchilla",
    img: "animal-chinchilla.png",
    backg: "#F9D7D9",
    sound: "",
    active: true,
    description: "Chinchila é o nome genérico dos mamíferos roedores da família Chinchillidae, nativa dos Andes da América do Sul. Podendo pesar até 1,0 kg. São animais muito ativos e precisam fazer exercício regularmente. Como também gostam de explorar, observar e ouvir sons, deve ser solta, em casa ou num sítio fechado."
  },
  {
    id: 10,
    name: "bird",
    img: "animal-bird.png",
    backg: "#CFE0A1",
    sound: "",
    active: true,
    description: "Os pássaros são aves de pequenas a médias dimensões, canoras, com alimentação baseada em sementes, frutos, pequenos invertebrados, como anelídeos e crustáceos, e alguns vertebrados, como peixes, roedores e até mesmo filhotes de outras aves."
  },
  {
    id: 11,
    name: "whale",
    img: "animal-whale.png",
    backg: "#C8E7EB",
    sound: "",
    active: true,
    description: "As baleias são os maiores mamíferos que vivem no planeta Terra. O masculino da baleia pode ser denominado caxarelo ou caxaréu."
  },
  {
    id: 12,
    name: "bat",
    img: "animal-bat.png",
    backg: "#F7C396",
    sound: "",
    active: true,
    description: "O morcego é um animal mamífero da ordem Chiroptera, cujos integrantes apresentam uma fina membrana de pele entre os dedos, a qual se estende até as patas e se conecta às laterais do corpo, formando as asas. Distinguem-se das aves, pois estas possuem penas suportadas por ossos. Os morcegos são os únicos mamíferos com voo verdadeiro."
  },
  {
    id: 13,
    name: "goat",
    img: "animal-goat.png",
    backg: "#CFE0A1",
    sound: "",
    active: true,
    description: "A Cabra (ou bode, no masculino) é um animal herbívoro pertencente ao gênero Capra. A cabra-doméstica é considerada uma subespécie da cabra-selvagem que habita o sudoeste da Ásia e Europa Oriental."
  },
  {
    id: 14,
    name: "chick",
    img: "animal-chick.png",
    backg: "#FDDF81",
    sound: "",
    active: true,
    description: "Galinha e Galo são, respectivamente, a fêmea e o macho da espécie Gallus gallus domesticus de aves galiformes e fasianídeas. Os juvenis são chamados de frangos, e os filhotes, de pintinhos (português brasileiro). Estas aves possuem bico pequeno, crista carnuda, pernas escamosas e asas curtas e largas."
  },
  {
    id: 15,
    name: "hippopotamus",
    img: "animal-hippopotamus.png",
    backg: "#F9D7D9",
    sound: "",
    active: true,
    description: "Hipopótamo, nome genérico de um mamífero ungulado de grande porte pertencente à família Hippopotamidae. É um artiodátilo mamífero, próprio da África, de pele muito grossa e nua, patas e cauda curtas, cabeça muito grande e truncada num focinho largo e arredondado."
  },
  {
    id: 16,
    name: "lizard",
    img: "animal-lizard.png",
    backg: "#CFE0A1",
    sound: "",
    active: true,
    description: "Os lagartos, como os demais répteis, são animais que apresentam corpo coberto por escamas, 4 membros e cauda. São ovíparos e apresentam grande variação de tamanho desde poucos centímetros até mais de 1 metro da cabeça à ponta da cauda. Dentres os lagartos mais conhecidos, podemos destacar as iguanas, camaleões e lagartixas."
  },
  {
    id: 17,
    name: "heron",
    img: "animal-heron.png",
    backg: "#F9D7D9",
    sound: "",
    active: true,
    description: "As garças vivem aos bandos, frequentam rios, lagoas, charcos, praias marítimas ou manguezais de pouca salinidade, e se alimentam principalmente de peixes, sapos e outros animais aquáticos. Algumas garças, como a vaqueira, se alimentam de insetos e não possuem relação com ambientes aquáticos."
  },
  {
    id: 18,
    name: "dolphin",
    img: "animal-dolphin.png",
    backg: "#C8E7EB",
    sound: "",
    active: true,
    description: "Os golfinhos são nadadores exímios, às vezes saltando até cinco metros acima da água. Podem nadar a uma velocidade de até 40 quilômetros por hora e mergulhar a grandes profundidades. Sua alimentação consiste basicamente de peixes e lulas. Podem viver de 20 a 35 anos e dão à luz um filhote de cada vez. Vivem em grupos, são animais sociáveis, tanto entre eles, como com outros animais e humanos."
  },
  {
    id: 19,
    name: "fox",
    img: "animal-fox.png",
    backg: "#F7C396",
    sound: "",
    active: true,
    description: "As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados por um focinho comprido e uma cauda longa e peluda."
  },
  {
    id: 20,
    name: "snail",
    img: "animal-snail.png",
    backg: "#FDDF81",
    sound: "",
    active: true,
    description: "Caracóis são os moluscos gastrópodes terrestres de concha espiralada calcária, pertencentes à subordem Stylommatophora, que também inclui as lesmas. São animais com ampla distribuição ambiental e geográfica. Respiram através de um poro respiratório."
  }
];
