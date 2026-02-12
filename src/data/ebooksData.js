const ebooks_data = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel about the American dream and the decadence of the Jazz Age.",
        cover_image: "https://example.com/great-gatsby.jpg",
        chapters: [
            {
                id: 1,
                title: "Chapter 1: The Beginning",
                content: "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. “Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”"
            }
        ]
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about racial injustice in the Deep South.",
        cover_image: "https://example.com/to-kill-a-mockingbird.jpg",
        chapters: [
            {
                id: 1,
                title: "Chapter 1: The Beginning",
                content: "The story of a young girl named Scout Finch and her family in the fictional town of Maycomb, Alabama, during the 1930s."
            },
        ]
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel about totalitarian control.",
        cover_image: "https://example.com/1984.jpg",
        chapters: [
            {
                id: 1,
                title: "Chapter 1: The Beginning",
                content: "In a dystopian society, the government controls every aspect of life, including the individual's mind and body."
            },
            {
                id: 2,
                title: "Chapter 2: The End",
                content: "The government uses its power to control the population and enforce its will on the people."
            }
        ]
    },
    {
        id: 4,
        title: "Un Dragón, Un Ratón y Una Astilla",
        author: "Julian Derudi",
        description: `
            Cada capitulo de este libro te sumerge en las típicas preguntas existenciales que tiene el promedio de las personas que están en una etapa temprana de la adultez. Guiadas por animales antropomórficos, que a raíz de una situación, terminan profundizando en temas que te hacen reflexionar. Humor Sádico, Bizarro, Reflexivo, Fantasioso, son algunos de los conceptos que destacan este libro, además de tener un toque de jerga argentina.
            `,
        cover_image: `./UN-DRAGÓN-UN-RATÓN-Y-UNA-ASTILLA.png`,
        chapters: [
            {
                id: 1,
                title: "Capitulo 1: La charla existencial en el tronco",
                content: `
                    Era un sábado de verano, el reloj marcaba las 8:50 pm, el sol caía y la luna brillaba más que nunca en un hueco que generaban las nubes. Llovía, como cualquier tarde de verano, una lluvia tibia que engañaba al cuerpo: no mojaba al caer, pero empapaba al quedarse.

                    De un edificio medio viejo, seguramente de la edad en la que vinieron los italianos a principios del siglo XX, con algunas ventanas caídas y una puerta del estilo Art Nouveau venida a menos, llena de graffitis y madera descascarada, ubicado en la calle Santiago del Estero en Constitución.

                    Salía un ratón,  pero no uno como los que se suelen ver, este provenía de familia siciliana, era un tipo que siempre sabia que decir y hacer (o eso creía el). Un ratón de temperamento fuerte, haciendo honor a su apodo "el Tano", siempre puteandole a la vida.

                    - LPM me va a cerrar el Sabores Express - No había planeado aun la cena - Encima esta lluvia de mierda, ni paraguas tengo.

                    Agarró por la calle Caseros para llegar a la sucursal que está en la esquina con Entre Ríos..

                    Cruzando la calle puteando, un bondi, posiblemente el 60 o el 168, pasa a mil por un charco, lo empapa y el barro que le cayó en el ojo lo deja sin visión un segundo. Intenta saltar a la vereda, pisa una bolsa de basura aceitosa, patina y cae justo por una boca de tormenta abierta que, por la fuerza del agua de la tormenta de verano, lo escupe directamente al canal que desemboca en el Río de la Plata.

                    De un momento a otro se encuentra nadando por su vida. Sentía peces en los pies, pero el sabia bien que ni ellos se atrevían a nadar en esas aguas espantosas.

                    A unos metros, visualiza un tronco flotando, lo alcanza nadando y se sube.

                    - La coooon justo a mi me pasa esto, una cantidad de agua tragué - exclamó con bronca pero ya con menos miedo de ahogarse - encima está re cagado este río.

                    No va que deja de quejarse y toser, que sube la mirada y se da cuenta de que no está solo en ese pedazo de madera que flotaba a la deriva. Del otro lado, un dragón de dimensiones absurdas para ese tronco, con escamas que brillaban como petróleo bajo la luna y una envergadura que, de abrir las alas, taparía toda la vista de los rascacielos de Puerto Madero. Tenía el hocico lleno de cicatrices y unos ojos amarillos que parecían dos faroles de un Falcon viejo. "¡¿Que los dragones no eran mitológicos?!" pensó.

                    - ¿Qué haces acá? - preguntó el ratón con miedo y curiosidad - ¿vos también te resbalaste por una boca de tormenta abierta?

                    El dragón estaba temblando, y se apretaba los labios para no hablar por alguna razón.

                    - ¿Qué me tenes miedo? - Recuperó la soberbia, mientras se prendía un pucho todo mojado - Y eso que el grandote acá sos vos.

                    Parecía más ansioso que otra cosa.

                    - ¡¡Uh amigo!! tenes una astilla en la mano - Le dijo al dragón... por no decirle que tenía unos re problemitas - ¿Queres que te la saque?

                    - ¡¡NO!! ¡¡PARÁ!!, primero quiero decirte algo - se apuró a decir el dragón, como si tuviese algo dentro que necesitaba sacar, y por alguna razón encontró apto este momento como para contarlo, como si no pudiese esperar a que le saque la astilla.

                    El Dragón miraba las burbujas de grasa que flotaban en el agua del río, hipnotizado.

                    — No es la astilla, loco... es que hoy me di cuenta de que tengo 20, o 30, o cien años, qué sé yo, y sigo esperando que empiece mi vida. ¿Entendés? Siento que estoy en la sala de espera de algo que no va a llegar nunca.

                    — ¿Y qué querés que llegue? ¿Una invitación con brillantina? —saltó el Ratón, acomodándose los bigotes mojados—. Estás vivo, flaco. Estás acá arriba de un tronco mugriento conmigo. Eso es la vida.

                    — No, boludo, escuchame —el Dragón soltó un suspiro caliente que evaporó un poco de agua del río—. Hoy me levanté, me vi al espejo y no vi un dragón. Vi un tipo que hace siempre lo mismo. Laburo, comida recalentada, scrollear en Instagram hasta que me duelen los dedos, y dormir para repetir todo mañana. Siento que el "Yo" de hace diez años me miraría con asco. Pensé que a esta edad ya iba a entender de qué se trataba el juego, pero cada vez entiendo menos.

                    El Dragón clavó la vista en los edificios de Puerto Madero, esas torres frías que parecen de cristal.

                    — Me da miedo que esto sea todo. Que la famosa "felicidad" sea solo este rato de no estar sufriendo tanto. Me siento una estafa, un bicho gigante que ocupa un montón de espacio pero que no deja ninguna marca. Soy un extra en mi propia película, ¿me entendés? La astilla me duele porque es lo más real que me pasó en la semana. Es un dolor que me dice: "Che, todavía tenés cuerpo, todavía existís".

                    El Ratón se quedó callado. Por un segundo, su soberbia de "tano" de Constitución se esfumó. Miró sus propias manos, pequeñas y arrugadas.

                    — Es el síndrome del perro que persigue autos, amigo —dijo el Ratón en voz baja—. Toda la vida corriendo detrás de una idea de éxito, de amor, de guita... y cuando el auto frena, no sabés qué carajo hacer. Te da el bajón porque te diste cuenta de que el auto no es mas que una mentira que te impulsa a seguir cuando no tenes un destino claro.

                    — Exacto —asintió el Dragón—. Y ahora estoy acá, flotando en el Riachuelo, con una astilla en la garra, preguntándome si el fuego que tengo adentro es para iluminar algo o simplemente para terminar de quemarme solo.

                    — Mirá, "Gandalf" —el Ratón recuperó su tono ácido—, si te sirve de algo, nadie tiene la menor idea de qué está haciendo. El Búho tira datos científicos porque teme quedar como un ignorante, el Zorro se droga porque no tiene el valor de enfrentar sus problemas, y yo... bueno, yo me creo que me las sé todas para no admitir que a veces me despierto a las tres de la mañana bajonazo por no ser alguien grande, pero no de tamaño, sino mas bien uno del que mi familia estuviese orgulloso. Estamos todos en el mismo tronco, aunque el de algunos sea de quebracho colorado y otros estemos en uno de sauce.

                    El Ratón se acercó a la garra del Dragón.

                    — Dale, dejame de joder con la metafísica y pasame la mano. Aguantá el tirón.

                    El Ratón tiró con fuerza. La astilla salió con un ruidito seco. El Dragón cerró los ojos y soltó un aire pesado, como si se hubiera sacado una mochila de piedras.

                    — Viste que no era para tanto —exclamó el Ratón tirando el pedacito de madera al agua—. ¿Ves? Ya pasó. El mundo sigue siendo una mierda, pero al menos ya no te pincha.

                    — Tenías razón —dijo el Dragón, moviendo los dedos, sintiéndose extrañamente aliviado. Y luego de un silencio de reflexión —. Che... me abrió el apetito la crisis existencial. ¿Querés ir a comer unas cheeseburger? Vamos volando, y de paso me contas quien carajo son el Buho y el Zorro drogón.

                    — Dale de una —dijo el Ratón, subiéndose al hombro del Dragón—... pero la próxima avisá que podes volar antes de que me trague medio litro de agua podrida, pedazo de logi.
                `
            },
            {
                id: 2,
                title: "Capitulo 2: La parálisis del momento ideal",
                content: `
                    Pasaron semanas desde aquella charla inesperada, pero necesaria, en aquel río contaminado. El tronco, muy posiblemente, ya es parte de los restos arrastrados a las orillas del riachuelo o parte de una pared de alguna casa de la villa 31, quién sabe.

                    A diferencia de aquella noche de lluvia tibia, este sábado el cielo estaba despejado, pero el aire pesaba. Era una noche de calor seco, de esas donde el asfalto de Constitución devuelve todo el fuego que tragó durante el día. No corría ni una brisa; el aire estaba estancado, como si la ciudad entera estuviera aguantando la respiración.

                    El Dragón caminaba por la calle Salta ajustándose la gabardina. A pesar del calor, no se la sacaba; era su caparazón. Estaba ansioso. El Ratón le había hablado de un tal "Búho", un tipo que supuestamente sabía de todo pero no entendía nada. El Dragón, que venía de una semana de sobrepensar hasta el color de sus propias escamas, sentía que necesitaba ese encuentro.

                    Entró al bar. Era un antro de techos altos, con olor a aserrín, cerveza barata y décadas de secretos guardados. Ahí estaban, en una esquina de la barra de madera gastada. El Ratón, que parecía un muñequito de torta al lado de la figura del Búho, levantó un vaso de whisky barato.

                    — ¡Eh, lagarto! ¡Llegaste! —gritó el Ratón con esa voz de lija que tenía—. Vení, sentate. Este es el Búho. No le des mucha bola si empieza a hablar de la fotosíntesis, es buen pibe pero le faltan un par de jugadores en el área.

                    — Mucho gusto —dijo el Búho, sin mirarlo a los ojos, concentrado en las burbujas de su cerveza—. Según la morfología, sos un ejemplar atípico. No deberías caber por esa puerta.

                    — El gusto es mío —respondió el Dragón, sentándose en un taburete que crujió bajo su peso—. Dame lo más fuerte que tengas —le dijo al Bartender.

                    Pasaron las horas y los vasos. El whisky y la cerveza borraron las distancias. El Dragón ya no se sentía un bicho raro, y el Búho había dejado de tirar datos de Wikipedia para empezar a arrastrar las palabras. El ambiente estaba cargado; el alcohol siempre abre las puertas que el sentido común mantiene cerradas.

                    El problema saltó a la mesa cuando el Búho, mirando un cuaderno donde tenía anotaciones que nadie entendía, suspiró con una angustia que no le cabía en el pecho.

                    — Hace tres años que tengo el esquema de una investigación que va a cambiar mi carrera —soltó el Búho, con la voz quebrada por el alcohol—. Pero no la empiezo. No es el momento. El laboratorio no tiene el microscopio que necesito, el presupuesto es bajo... quiero que sea perfecto. Si no es perfecto, va a ser un fracaso más. Prefiero el silencio a un trabajo mediocre.

                    El Dragón dejó el vaso en la barra con un golpe seco. — Te entiendo, hermano. Yo vivo igual. Siento que tengo una vida entera guardada en una caja porque no encuentro la llave exacta. Espero el día donde me despierte y todo encaje, donde no tenga miedo de fallar.

                    El Ratón, que ya estaba bastante "alegre", soltó una carcajada sádica. — Ustedes dos son un monumento a la paja mental. "El momento exacto", "la perfección"... ¿Saben qué es eso? Una excusa para no ponerse los pantalones.

                    — No es una excusa, Ratón —retrucó el Búho—. Es respeto por el conocimiento.

                    — ¡Qué respeto ni qué ocho cuartos! —el Ratón se acercó al Búho—. Escúchame bien, "Cerebro de mosquito": la perfección es una jaula de oro. Te quedás ahí dentro esperando el clima ideal mientras la vida te pasa de largo por la vereda.

                    El Dragón intervino, con la mirada perdida en el espejo detrás de la barra. — Es que el error duele, Tano. Si hacés algo y sale mal, ya no hay vuelta atrás.

                    — ¿Y qué? —saltó el Ratón—. El error es lo único real que tenemos. Yo estuve en una banda hace años, ¿sabés cuántas veces el plan salió como la mierda? Si hubiéramos esperado la "perfección", todavía estaríamos en el aguantadero mirando el techo. Mirá al Búho: no quiere fallar, entonces no hace nada. Y al final, el resultado es el mismo: no tenés nada. Hacelo, y si te da miedo, hacelo con miedo, pero mové el orto.

                    — Es que... si no apunto a lo más alto, no tiene sentido —murmuró el Búho.

                    — Esa es otra mentira —dijo el Dragón, dándole la razón al Ratón a pesar suyo—. Si querés llegar a la luna, tenés que apuntar a las estrellas, pero no podés quedarte puliendo el cohete para siempre mientras te ponés viejo en la tierra.

                    El Bartender, que venía limpiando el mismo vaso desde hacía diez minutos, dejó el trapo sobre el mostrador. Se acercó despacio, con esa calma de quien ha visto pasar mil crisis existenciales entre trago y trago.

                    — Disculpen que me meta, caballeros —dijo el Bartender con voz grave y pausada—. Pero los vengo escuchando y hay algo que no están viendo. Ustedes hablan de la perfección como si fuera un destino, un lugar al que se llega. Pero la perfección es como el horizonte: caminás dos pasos y se aleja otros dos.

                    Los tres se quedaron callados, hipnotizados por el hombre.

                    — El problema de esperar el momento perfecto —continuó el hombre— es que el tiempo no sabe esperar. El momento perfecto es un invento de los cobardes para no admitir que tienen pánico de ser juzgados. La vida no es un cuadro terminado, es el enchastre que haces mientras pintas. Si esperan a estar listos, lo único que van a estar es listos para el cementerio. La única diferencia entre un genio y un tipo con ideas es que el genio se animó a quedar como un pelotudo un par de veces. Y en caso contrario... mucha gente viene a este bar reprochándose el no haber empezado a hacer cierta cosa hace años. Creen que su momento perfecto ya pasó... y quizás tienen razón... el mejor momento para empezar fue ayer, pero el segundo mejor para hacerlo es hoy mismo. 

                    El silencio que siguió fue total. El Búho miró su cuaderno. El Dragón miró sus garras torpes. El Ratón, por una vez, no tuvo nada que acotar.

                    — Cobrame —dijo el Dragón finalmente.

                    Salieron... el calor, así como el perfeccionismo, habían sido aplastados por la oscura madrugada. El Búho se fue caminando solo, quizás pensando en su microscopio inexistente. El Dragón y el Ratón se quedaron un momento en la puerta.

                    — Che, Tano —dijo el Dragón—. Tenía razón el mozo, ¿no?

                    — Y... es un filósofo incomprendido —respondió el Ratón, encendiendo un pucho—. Pero sí. Dejemos de ser tan paja. Mañana arrancamos un negocio, aunque sea una mierda. Al menos vamos a entender de que se trata la vida.
                `
            }
        ]
    }
]

export default ebooks_data