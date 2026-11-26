const catalog=[];function add(cat,rows){for(const line of rows.trim().split('\n')){let [name,en,season,guide]=line.split('|');catalog.push({id:cat+':'+en,cat,name,en,season:season||'Todas',guide:guide||'Consultá la ficha de la wiki para conocer los requisitos.'})}}
add('Envíos',`Chirivía|Parsnip|Primavera|Semillas de Pierre; 4 días.
Coliflor|Cauliflower|Primavera|Pierre; 12 días.
Patata|Potato|Primavera|Pierre; 6 días.
Fresa|Strawberry|Primavera|Festival del Huevo, día 13; 8 días.
Judía verde|Green Bean|Primavera|Pierre; 10 días.
Ajo|Garlic|Primavera|Pierre desde año 2; 4 días.
Ruibarbo|Rhubarb|Primavera|Oasis; 13 días.
Arándano|Blueberry|Verano|Pierre; 13 días.
Melón|Melon|Verano|Pierre; 12 días.
Carambola|Starfruit|Verano|Oasis; 13 días.
Tomate|Tomato|Verano|Pierre; 11 días.
Maíz|Corn|Verano,Otoño|Pierre; 14 días.
Lúpulo|Hops|Verano|Pierre; 11 días.
Pimiento picante|Hot Pepper|Verano|Pierre; 5 días.
Calabaza|Pumpkin|Otoño|Pierre; 13 días.
Berenjena|Eggplant|Otoño|Pierre; 5 días.
Arándano rojo|Cranberries|Otoño|Pierre; 7 días.
Batata|Yam|Otoño|Pierre; 10 días.
Uva|Grape|Otoño|Pierre; 10 días.
Fruta milenaria|Ancient Fruit|Primavera,Verano,Otoño|Semillas milenarias; 28 días.
Trufa|Truffle|Primavera,Verano,Otoño|Los cerdos adultos la encuentran al aire libre.
Leche|Milk|Todas|Ordeñá una vaca adulta.
Huevo|Egg|Todas|Gallinas adultas.
Queso|Cheese|Todas|Procesá leche en una quesera.
Mayonesa|Mayonnaise|Todas|Procesá un huevo en una mayonesera.
Vino|Wine|Todas|Procesá fruta en un barril.
Miel|Honey|Primavera,Verano,Otoño|Colmena al aire libre.
Diente de león|Dandelion|Primavera|Recolección.
Narciso|Daffodil|Primavera|Recolección.
Puerro|Leek|Primavera|Recolección.
Rábano silvestre|Wild Horseradish|Primavera|Recolección.
Baya especiada|Spice Berry|Verano|Recolección.
Guisante dulce|Sweet Pea|Verano|Recolección.
Avellana|Hazelnut|Otoño|Recolección.
Mora|Blackberry|Otoño|Arbustos del 8 al 11 de otoño.
Raíz invernal|Winter Root|Invierno|Excavá puntos de artefactos o raíces.
Fruta de cristal|Crystal Fruit|Invierno|Recolección.`);
add('Pesca',`Pez globo|Pufferfish|Verano|Océano, 12–16 h, sol. También Isla Jengibre.
Anchoa|Anchovy|Primavera,Otoño|Océano, cualquier hora.
Sardina|Sardine|Primavera,Otoño,Invierno|Océano, 6–19 h.
Atún|Tuna|Verano,Invierno|Océano, 6–19 h.
Besugo|Bream|Todas|Río, 18–2 h.
Carpa|Carp|Todas|Lago de montaña y otras zonas.
Siluro|Catfish|Primavera,Otoño|Río, lluvia, 6–24 h; también bosque secreto en verano con lluvia.
Anguila|Eel|Primavera,Otoño|Océano, lluvia, 16–2 h.
Pez gato americano|Bullhead|Todas|Lago de montaña.
Esturión|Sturgeon|Verano,Invierno|Lago de montaña, 6–19 h.
Pez sol|Sunfish|Primavera,Verano|Río, sol o viento, 6–19 h.
Sábalo|Shad|Primavera,Verano,Otoño|Río, lluvia, 9–2 h.
Trucha tigre|Tiger Trout|Otoño,Invierno|Río, 6–19 h.
Lubina|Largemouth Bass|Todas|Lago de montaña, 6–19 h.
Pez legendario|Legend|Primavera|Lago de montaña, lluvia, nivel 10 de pesca.
Pez carmesí|Crimsonfish|Verano|Muelle este de la playa, nivel 5.
Pescador|Angler|Otoño|Norte del río del pueblo, nivel 3.
Pez glaciar|Glacierfish|Invierno|Extremo sur de la isla del bosque, nivel 6.
Carpa mutante|Mutant Carp|Todas|Alcantarillas.
Calamar|Squid|Invierno|Océano, 18–2 h.
Pulpo|Octopus|Verano|Océano, 6–13 h.
Pez piedra|Stonefish|Todas|Minas, piso 20.
Pez hielo|Ice Pip|Todas|Minas, piso 60.
Anguila de lava|Lava Eel|Todas|Minas, piso 100.
Pez fantasma|Ghostfish|Todas|Minas, pisos 20 y 60.
Pez arena|Sandfish|Todas|Estanque del desierto, 6–20 h.
Escorpión carpa|Scorpion Carp|Todas|Desierto, 6–20 h, nivel 4.`);
add('Obeliscos',`Obelisco terrestre|Earth Obelisk|Todas|Torre del mago: 500.000 g, 10 barras de iridio, 10 cristales terrestres.
Obelisco acuático|Water Obelisk|Todas|Torre del mago: 500.000 g, 5 barras de iridio, 10 almejas, 10 corales.
Obelisco del desierto|Desert Obelisk|Todas|Torre del mago: 1.000.000 g, 20 barras de iridio, 10 cocos, 10 frutas de cactus.
Obelisco de la isla|Island Obelisk|Todas|Torre del mago: 1.000.000 g, 10 barras de iridio, 10 dientes de dragón, 10 bananas.`);
add('Reloj de oro',`Reloj de oro|Gold Clock|Todas|Compralo en la torre del mago por 10.000.000 g.`);
add('Habilidades',`Agricultura|Farming|Todas|Alcanzá nivel 10.
Minería|Mining|Todas|Alcanzá nivel 10.
Recolección|Foraging|Todas|Alcanzá nivel 10.
Pesca|Fishing|Todas|Alcanzá nivel 10.
Combate|Combat|Todas|Alcanzá nivel 10.`);
add('Frutas estelares',`Feria|Stardrop|Otoño|Comprá por 2.000 fichas en la feria del día 16.
Minas|Stardrop|Todas|Cofre del piso 100.
Cónyuge|Stardrop|Todas|Alcanzá 12,5 corazones con tu cónyuge o Krobus como compañero.
Krobus|Stardrop|Todas|Comprá por 20.000 g en las alcantarillas.
Bosque secreto|Stardrop|Todas|Entregá una baya de gema dulce al Viejo Maestro Cannoli.
Museo|Stardrop|Todas|Completá las 95 donaciones.
Pesca completa|Stardrop|Todas|Capturá todos los peces requeridos y recibí la recompensa de Willy.`);catalog.filter(x=>x.cat==='Frutas estelares').forEach(x=>x.id+=':'+x.name);
add('Cocina',`Huevo frito|Fried Egg|Todas|Receta inicial; 1 huevo.
Tortilla|Omelet|Todas|Reina de la salsa o Salón Fruta Estelar; huevo y leche.
Ensalada|Salad|Todas|Emily, 3 corazones; puerro, diente de león y vinagre.
Sashimi|Sashimi|Todas|Linus, 3 corazones; cualquier pez.
Pizza|Pizza|Todas|Reina de la salsa o Gus; harina, tomate y queso.
Café triple|Triple Shot Espresso|Todas|Receta de Gus; 3 cafés.
Pastel rosa|Pink Cake|Todas|Reina de la salsa; melón, harina, azúcar y huevo.`);
add('Fabricación',`Cofre|Chest|Todas|Receta inicial; 50 madera.
Horno|Furnace|Todas|Receta de Clint; 20 mineral de cobre y 25 piedra.
Espantapájaros|Scarecrow|Todas|Agricultura nivel 1; 50 madera, 1 carbón, 20 fibra.
Aspersor de calidad|Quality Sprinkler|Todas|Agricultura nivel 6; barra de hierro, barra de oro y cuarzo refinado.
Barril|Keg|Todas|Agricultura nivel 8; madera, cobre, hierro y resina de roble.
Conservadora|Preserves Jar|Todas|Agricultura nivel 4; madera, piedra y carbón.`);
add('Amistades',`Abigail|Abigail|Todas|Soltera; regalos favoritos: amatista, calabaza. Cumpleaños 13 de otoño.
Sebastian|Sebastian|Todas|Soltero; lágrima helada, sashimi. Cumpleaños 10 de invierno.
Leah|Leah|Todas|Soltera; ensalada, queso de cabra. Cumpleaños 23 de invierno.
Linus|Linus|Todas|Regalos favoritos: coco, ñame. Cumpleaños 3 de invierno.
Pierre|Pierre|Todas|Regalo favorito: calamar frito. Cumpleaños 26 de primavera.
Robin|Robin|Todas|Regalos favoritos: queso de cabra, melocotón. Cumpleaños 21 de otoño.`);
add('Monstruos',`Babas|Slime|Todas|Objetivo del gremio: 1.000 babas.
Murciélagos|Bat|Todas|Objetivo: 200.
Esqueletos|Skeleton|Todas|Objetivo: 50.
Espíritus de polvo|Dust Sprite|Todas|Objetivo: 500.
Serpientes|Serpent|Todas|Objetivo: 250.
Momias|Mummy|Todas|Objetivo: 100.
Cangrejos de roca|Rock Crab|Todas|Objetivo: 60.
Sombras|Shadow Brute|Todas|Objetivo: 150 espíritus del vacío.
Insectos|Bug|Todas|Objetivo: 125.
Pimienta Rex|Pepper Rex|Todas|Objetivo: 50.
Duendes de magma|Magma Sprite|Todas|Objetivo: 150.
Cabezas de metal|Metal Head|Todas|Objetivo: 80 Duggy (consultar objetivo de excavadores en el gremio).`);catalog.pop();add('Monstruos',`Excavadores|Duggy|Todas|Objetivo: 30.`);
add('Centro Cívico',`Lote de primavera|Parsnip|Primavera|Chirivía, judía verde, coliflor y patata.
Lote de verano|Melon|Verano|Tomate, pimiento, arándano y melón.
Lote de otoño|Pumpkin|Otoño|Maíz, berenjena, calabaza y batata.
Lote de peces de lago|Sturgeon|Todas|Lubina, carpa, pez gato americano y esturión.
Lote de peces de río|Catfish|Todas|Pez sol, siluro, sábalo y trucha tigre.
Lote de recolección primaveral|Daffodil|Primavera|Rábano silvestre, narciso, puerro y diente de león.`);
add('Museo',`Amatista|Amethyst|Todas|Minas, nodos de amatista.
Diamante|Diamond|Todas|Minas, nodos de diamante.
Rubí|Ruby|Todas|Minas, nodos de rubí.
Esmeralda|Emerald|Todas|Minas, nodos de esmeralda.
Fragmento prismático|Prismatic Shard|Todas|Nodos de iridio y otras fuentes raras.
Huevo de dinosaurio|Dinosaur Egg|Todas|Puntos de artefactos, pesca o dinosaurios.
Semilla milenaria|Ancient Seed|Todas|Artefacto de insectos o puntos de artefactos.`);
add('Logros',`Novato|Parsnip|Todas|Ganá 15.000 g en total.
Pescador|Fish|Todas|Capturá 10 peces diferentes.
Colección completa|Museum|Todas|Doná los 95 objetos del museo.
Maestro de pesca|Legend|Todas|Capturá todos los peces requeridos.`);
add('Nueces doradas',`Nueces doradas|Golden Walnut|Todas|Isla Jengibre: exploración, rompecabezas, pesca, cultivos y volcán. Registrá el total encontrado en el panel superior.`);
