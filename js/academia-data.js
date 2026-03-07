const BLOCKS = [
    // ===================== BLOQUE 1 =====================
    {
        num: '01', title: 'Anatomía Básica del Diente', sub: 'Donde trabaja el dentista cada día', color: '#3182CE',
        sections: [
            {
                type: 'concept', label: '📘 Partes del diente',
                image: 'img/tooth_anatomy.png', imgAlt: 'Anatomía del diente: corona, cuello, raíz, esmalte, dentina y pulpa',
                text: 'El diente se divide en <strong>tres zonas</strong> que el dentista nombra constantemente:'
            },
            {
                type: 'concept', label: '📘 Las 3 zonas',
                items: [
                    { t: '👑 Corona', d: 'La parte visible del diente, la que sobresale de la encía. Es donde el dentista trabaja el 90% del tiempo con las fresas. Si dice "necesito reducir la corona", está tallando esta zona para poner una funda.' },
                    { t: '📍 Cuello (cervical)', d: 'La zona de transición entre corona y raíz, justo en la línea de la encía. Es delicada porque el esmalte es más fino aquí. El dentista habla de "terminación cervical" al preparar coronas — necesita fresas de acabado fino.' },
                    { t: '🦴 Raíz', d: 'Está dentro del hueso, no se ve. Solo se trabaja en cirugía (extracciones) o endodoncia. Aquí no llegas tú con fresas normales salvo las quirúrgicas.' }
                ]
            },
            {
                type: 'concept', label: '🔬 Los 3 tejidos del diente',
                text: 'Cada tejido se corta con fresas diferentes. Esto es <strong>fundamental</strong> para recomendar el producto correcto:',
                items: [
                    { t: '💎 Esmalte — "La cáscara"', d: '<strong>El tejido más duro del cuerpo humano</strong> (96% mineral). Es como cristal: durísimo pero frágil si pierde soporte. Solo se corta bien con <strong>diamante</strong> (abrasión). El carburo resbala sobre él. Cuando el doctor dice "tengo que atravesar esmalte", necesita diamante de grano medio o grueso.' },
                    { t: '🧱 Dentina — "La estructura"', d: 'Más blanda que el esmalte, elástica, con <strong>túbulos microscópicos</strong> conectados al nervio. <strong>Transmite sensibilidad</strong> — por eso el paciente siente cuando el dentista llega a dentina. Se corta mejor con <strong>carburo de tungsteno</strong> (láminas). El diamante se emboza aquí porque los túbulos tapan las partículas.' },
                    { t: '❤️ Pulpa — "El nervio"', d: 'Tejido vivo con nervio y vasos sanguíneos. <strong>Nunca se toca a propósito</strong> excepto en endodoncia (cuando quitan el nervio). Si el dentista dice "estoy cerca de pulpa", necesita fresas ultrafinas de baja agresividad — grano rojo o amarillo, velocidad reducida.' }
                ]
            },
            {
                type: 'concept', label: '🗺️ Superficies del diente',
                image: 'img/tooth_surfaces.png', imgAlt: 'Las 5 superficies del diente: oclusal, vestibular, lingual, mesial y distal',
                text: 'Cada diente tiene <strong>5 caras</strong> con nombres específicos. El dentista las usa constantemente:',
                items: [
                    { t: '⬆️ Oclusal / Incisal', d: 'La cara de arriba, donde muerde. "Oclusal" en molares, "incisal" en incisivos. Es donde están la mayoría de caries. Fresas más usadas aquí: <strong>esféricas y troncocónicas</strong>.' },
                    { t: '👄 Vestibular', d: 'La cara que mira al labio o mejilla. Se trabaja en estética (carillas) y en caries visibles. Buen acceso, fresas estándar.' },
                    { t: '👅 Lingual / Palatina', d: 'La cara que mira a la lengua (abajo) o paladar (arriba). Difícil acceso, el dentista trabaja casi a ciegas. Necesita fresas con buen corte lateral.' },
                    { t: '◀️ Mesial y ▶️ Distal', d: 'Las caras entre dientes (interproximales). Son las MÁS difíciles de acceder. El dentista necesita fresas <strong>tipo llama o pera</strong> para llegar sin dañar el diente de al lado. Si dice "caries interproximal", esto es lo que busca.' },
                    { t: '📍 Cervical', d: 'La zona del cuello, cerca de la encía. Preparaciones delicadas que requieren fresas de acabado fino.' }
                ]
            },
            {
                type: 'vocab', label: '📝 Vocabulario clínico esencial',
                text: 'Estas son las palabras que oirás en clínica. Si las entiendes, el dentista te respeta:',
                items: [
                    { t: '🦠 Caries', d: 'Destrucción del diente por bacterias. El dentista la "elimina" con fresas. Es el procedimiento más frecuente y el que más fresas consume.' },
                    { t: '🕳️ Cavidad', d: 'El hueco que queda después de quitar la caries. El dentista la "prepara" con fresas y luego la "restaura" con composite u otro material.' },
                    { t: '🏛️ Muñón', d: 'El diente tallado que queda después de reducirlo para una corona. Se talla con fresas troncocónicas o chamfer. Es como dejar un pilar donde se encaja la funda.' },
                    { t: '✂️ Preparación', d: 'El acto de cortar/tallar el diente con fresas. "Preparar una cavidad" = eliminar caries. "Preparar un muñón" = tallar para corona.' },
                    { t: '🔧 Restauración', d: 'Lo que se pone después de la preparación: composite (empaste), corona, carilla, etc. La calidad de la preparación determina lo bien que encaja la restauración.' }
                ]
            },
            {
                type: 'sales', label: '🎯 Por qué esto importa para vender',
                box: '<strong>Si entiendes dónde trabaja el doctor, puedes recomendarle la fresa exacta.</strong><br><br>"Trabajo muchas caries oclusales" → esféricas de diamante + esféricas carburo K89.<br>"Hago mucha interproximal" → llamas y peras.<br>"Preparo coronas" → troncocónicas + chamfer.<br>"Estoy siempre cerca de pulpa" → grano fino (rojo/amarillo), baja velocidad.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real en clínica',
                box: '<strong>Caso:</strong> Llegas a una clínica y el doctor dice "hago sobre todo conservadora en posteriores". Tú traduces: trabaja caries en molares (superficie oclusal), pasa por esmalte y dentina. Le ofreces un <strong>kit de esféricas</strong>: 801 diamante azul (para esmalte) + 801 carburo K89 (para dentina) + pulidores. Has personalizado en 10 segundos porque entiendes la anatomía.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 2 =====================
    {
        num: '02', title: 'Materiales Dentales', sub: 'Qué está cortando la fresa', color: '#6B46C1',
        sections: [
            {
                type: 'concept', label: '📘 Materiales naturales',
                text: 'Lo que el diente tiene de serie. El dentista los <strong>corta o elimina</strong> con fresas:',
                items: [
                    { t: '💎 Esmalte', d: '<strong>Dureza: 5/5.</strong> El más duro del cuerpo. Solo diamante lo corta eficientemente. Genera mucho calor al cortarlo → siempre con irrigación (agua). Si usas carburo aquí, las láminas se desgastan rápido y resbalas.' },
                    { t: '🧱 Dentina', d: '<strong>Dureza: 2/5.</strong> Más blanda y flexible. El carburo de tungsteno la corta limpiamente, sin embozarse. El diamante funciona pero es menos eficiente y genera más calor cerca de la pulpa.' },
                    { t: '🦴 Hueso', d: '<strong>Dureza: 3/5.</strong> Solo se corta en cirugía (implantes, extracciones). Requiere fresas de carburo o diamante quirúrgicas con refrigeración OBLIGATORIA. Sin agua, el hueso se necrosa (muere) por calor.' }
                ]
            },
            {
                type: 'concept', label: '📘 Materiales restauradores',
                text: 'Lo que el dentista <strong>pone dentro</strong> del diente. A veces necesita ajustarlo o retirarlo con fresas:',
                items: [
                    { t: '🎨 Composite (resina)', d: '<strong>Dureza: 2/5.</strong> El empaste moderno, color del diente. Se pule y ajusta con <strong>diamante fino o carburo multilámina</strong>. Para retirarlo: carburo estándar. Es el material restaurador más usado hoy.' },
                    { t: '⚫ Amalgama', d: '<strong>Dureza: 3/5.</strong> El empaste gris antiguo (mezcla de metales). Cada vez menos usado pero aún presente. Se retira con <strong>carburo</strong>. Atención: contiene mercurio, el dentista usa aspiración especial.' },
                    { t: '🧪 Cemento', d: '<strong>Dureza: 1/5.</strong> Se usa para pegar coronas, puentes. Blando. Se retira fácilmente con cualquier fresa o ultrasonido.' }
                ]
            },
            {
                type: 'concept', label: '📘 Materiales protésicos',
                text: 'Lo que el laboratorio fabrica y el dentista <strong>ajusta en boca</strong>. Aquí es donde tus fresas marcan la diferencia:',
                grid: [
                    { t: '⬜ Zirconio', d: 'Dureza 5/5. Extremadamente duro. Diamante obligatorio. Disteno para ajustes finos (exclusivo Fresissima). Refrigeración crítica.' },
                    { t: '🏺 Cerámica', d: 'Dureza 4/5. Dura pero frágil. Diamante de grano fino para no fracturarla. Sin presión excesiva.' },
                    { t: '💠 Disilicato de litio', d: 'Dureza 4/5. (e.max) Muy estético. Se ajusta con diamante fino. Material premium.' },
                    { t: '⚙️ Metal (Cr-Co)', d: 'Dureza 4/5. Duro y tenaz. Se corta con carburo multilámina o discos. El diamante no funciona bien en metal.' }
                ]
            },
            {
                type: 'concept', label: '📘 Materiales provisionales',
                items: [
                    { t: '🔲 PMMA', d: '<strong>Dureza: 1/5.</strong> Acrílico para coronas provisionales. Se ajusta con carburo a baja velocidad. Cualquier fresa lo corta.' },
                    { t: '🧴 Resinas provisionales', d: '<strong>Dureza: 1/5.</strong> Bisacryl (Protemp, Luxatemp). Blandas, se ajustan con carburo fino o bisturí. No uses diamante agresivo: se deshilachan.' }
                ]
            },
            {
                type: 'sales', label: '🎯 Pregunta clave para vender',
                box: '<strong>"¿Trabaja mucho con zirconio?"</strong><br><br>Si dice SÍ → Disteno (exclusivo Fresissima, ajusta zirconio sin microfracturas). Nadie más lo tiene.<br>Si dice composite → kit conservadora con pulidores Dentag.<br>Si dice cerámica → diamante fino + pulidores.<br>Si dice metal → carburo multilámina + discos Vibra.<br><br>Cada material abre una venta diferente.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Un protesista se está pasando de cerámica a zirconio. Se queja de que sus fresas "no agarran" el zirconio y generan microcracks. Le presentas <strong>Disteno</strong>: material sinterizado exclusivo que ajusta zirconio sin fracturarlo. Le dejas 3 para probar. A la semana llama pidiendo más. Venta recurrente asegurada porque NADIE más lo fabrica.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 3 =====================
    {
        num: '03', title: 'Instrumental Rotatorio', sub: 'Las máquinas donde se montan tus fresas', color: '#38A169',
        sections: [
            {
                type: 'concept', label: '📘 Los 3 instrumentos',
                image: 'img/rotary_instruments.png', imgAlt: 'Turbina, contra-ángulo y pieza de mano recta con sus especificaciones',
                text: 'Antes de hablar de fresas, el comercial <strong>debe entender las máquinas</strong>. Si no sabes si el doctor usa turbina o contra-ángulo, no sabes qué vástago necesita.'
            },
            {
                type: 'concept', label: '⚡ Turbina',
                items: [
                    { t: 'Velocidad', d: '<strong>300.000–400.000 rpm</strong>. Altísima velocidad, poco torque. Funciona con aire comprimido.' },
                    { t: 'Vástago', d: '<strong>FG (Friction Grip)</strong> — 1.6mm. La fresa se sujeta por fricción en el cabezal. El 85% de las fresas se venden en FG.' },
                    { t: 'Uso principal', d: 'Preparaciones (coronas, cavidades), corte rápido de esmalte. Todo lo que necesite velocidad.' },
                    { t: 'Sonido', d: 'Es la que "suena" en el dentista. El zumbido agudo que todos reconocen.' }
                ]
            },
            {
                type: 'concept', label: '🔧 Contra-ángulo',
                items: [
                    { t: 'Velocidad', d: '<strong>5.000–40.000 rpm</strong>. Velocidad variable, mucho más torque que la turbina. Motor eléctrico (micromotor).' },
                    { t: 'Vástago', d: '<strong>RA</strong> — 2.35mm con muesca. La muesca encaja en el mecanismo del contra-ángulo.' },
                    { t: 'Uso principal', d: 'Eliminación de caries a baja velocidad, pulido, endodoncia (acceso), cirugía menor, ajuste de restauraciones.' },
                    { t: 'Ventaja', d: 'Más control y precisión. El dentista siente mejor lo que está cortando. Ideal para trabajar cerca de la pulpa.' }
                ]
            },
            {
                type: 'concept', label: '📏 Pieza de mano recta',
                items: [
                    { t: 'Velocidad', d: '<strong>5.000–30.000 rpm</strong>. Similar al contra-ángulo pero sin la angulación.' },
                    { t: 'Vástago', d: '<strong>HP</strong> — 2.35mm sin muesca (recto). No confundir con RA.' },
                    { t: 'Uso principal', d: 'Cirugía oral (cortar hueso), laboratorio dental (ajustar prótesis fuera de boca), corte fuerte.' }
                ]
            },
            {
                type: 'dentist', label: '🦷 Concepto clave: Velocidad + Torque',
                box: '<strong>La velocidad y el torque determinan qué fresa funciona mejor.</strong><br><br>Alta velocidad (turbina): excelente para diamante, corte rápido de esmalte. Poco torque = si presionas mucho, se frena.<br><br>Baja velocidad (contra-ángulo): excelente para carburo, más control. Mucho torque = mantiene la velocidad con presión.<br><br>El doctor elige la máquina según el tejido y el procedimiento. <strong>La máquina dicta el vástago (FG o RA).</strong>',
                boxColor: 'purple'
            },
            {
                type: 'sales', label: '🎯 Pregunta obligatoria',
                box: '<strong>"¿Lo usa en turbina o en contra-ángulo?"</strong><br><br>Esta pregunta define el vástago: turbina = FG, contra-ángulo = RA. Si la haces, demuestras que sabes lo que vendes. Si no la haces y envías el vástago equivocado, pierdes al cliente.<br><br>El doctor invierte €3.000-15.000 en su instrumental. Una fresa de mala calidad (mal centrada, vibración) puede dañar un cabezal de €800. La calidad del centrado CNC de Fresissima protege su inversión.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Un doctor te pide "fresas para su pieza". Tú preguntas: "¿Pieza de mano recta o contra-ángulo?" Él dice contra-ángulo. Le ofreces RA. Si no hubieras preguntado, podrías haber enviado HP (que no le entra). Esa pregunta simple demuestra que sabes lo que vendes y evita una devolución.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 4 =====================
    {
        num: '04', title: 'Tipos de Fresas', sub: 'Diamante vs carburo de tungsteno', color: '#3182CE',
        sections: [
            {
                type: 'concept', label: '📘 Dos familias de fresas',
                image: 'img/bur_types.png', imgAlt: 'Comparación: fresa de diamante (abrasión) vs carburo de tungsteno (láminas cortantes)',
                text: 'Todo el catálogo de Fresissima se divide en <strong>dos grandes familias</strong> que funcionan de forma completamente diferente:'
            },
            {
                type: 'concept', label: '💎 Fresa de diamante',
                text: 'No tiene filos. Funciona por <strong>abrasión</strong> (raspa la superficie como lija de alta calidad).',
                items: [
                    { t: '¿Cómo funciona?', d: 'Partículas de diamante pegadas (galvanizadas o sinterizadas) a un cuerpo metálico. Cada partícula es un punto de corte. Produce polvo abrasivo.' },
                    { t: 'Ideal para', d: '<strong>Esmalte, cerámica, zirconio, composite curado</strong> — todo lo DURO y mineral.' },
                    { t: 'No ideal para', d: 'Dentina profunda (se emboza), metal (no agarra), hueso (genera demasiado calor sin las adecuadas).' },
                    { t: '💡 Ventaja Fresissima', d: '<strong>Diamante NATURAL.</strong> Las partículas naturales tienen aristas irregulares que multiplican puntos de corte. El sintético tiene partículas uniformes que cortan peor y generan más calor. Esta es tu diferenciación #1.' }
                ]
            },
            {
                type: 'concept', label: '🔩 Fresa de carburo de tungsteno',
                text: 'Tiene hojas de corte (láminas/filos). Funciona por <strong>sección</strong> — corta el material en viruta, como un cuchillo microscópico.',
                items: [
                    { t: '¿Cómo funciona?', d: 'Cuerpo sólido de aleación de carburo de tungsteno con láminas talladas. Las láminas arrancan material limpiamente. Produce viruta (no polvo).' },
                    { t: 'Ideal para', d: '<strong>Dentina, hueso, metal, composite, amalgama</strong> — materiales donde las láminas pueden "morder".' },
                    { t: 'No ideal para', d: 'Esmalte puro (las láminas resbalan sobre superficies muy duras y se desgastan rápido).' },
                    { t: '💡 Ventaja Fresissima', d: '<strong>Aleación K89</strong> — exclusiva de Fresissima. 30% más dura que el carburo estándar. Mantiene el filo más cortes, resiste fracturas. Cuando la competencia se desafila, K89 sigue cortando.' }
                ]
            },
            {
                type: 'concept', label: '🎨 Granulometría (código de colores)',
                image: 'img/granulometry.png', imgAlt: 'Código de colores ISO: del negro (super grueso) al blanco (ultra fino)',
                text: 'Las fresas de diamante tienen un <strong>anillo de color</strong> en el vástago que indica el tamaño de las partículas. Más grueso = más agresivo:',
                items: [
                    { t: '⬛ Negro — Super grueso (125-180μ)', d: 'Desgaste masivo. Para reducción rápida de coronas. Mucho calor. Solo con mucha agua.' },
                    { t: '🟩 Verde — Grueso (107-151μ)', d: 'Preparación agresiva. Primera fresa en la secuencia de una corona. La más usada en prótesis.' },
                    { t: '🟦 Azul — Medio (63-126μ)', d: 'Uso general. La más vendida. Si el doctor "no sabe qué grano", éste es el estándar.' },
                    { t: '🟥 Rojo — Fino (40-63μ)', d: 'Acabado. Para refinar márgenes después de la preparación. Imprescindible en prótesis.' },
                    { t: '🟨 Amarillo — Super fino (20-40μ)', d: 'Pre-pulido. Para dejar superficie lisa antes del pulido final.' },
                    { t: '⬜ Blanco — Ultra fino (10-20μ)', d: 'Pulido espejo. Última fresa de la secuencia. Deja la superficie brillante.' }
                ]
            },
            {
                type: 'sales', label: '🎯 Argumento diferenciador #1',
                box: '<strong>"Doctor, ¿usa diamante sintético o natural?"</strong><br><br>El 90% usa sintético sin saberlo (especialmente con marcas económicas). El diamante natural de Fresissima:<br>• Aristas irregulares = más puntos de corte<br>• <strong>20% menos calor</strong> generado<br>• Dura más sesiones por fresa<br>• Acabado más suave<br><br>Y en carburo: K89 es un 30% más duro que el estándar. Estas dos palabras — <strong>diamante natural + K89</strong> — son tu propuesta de valor.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Un doctor se queja de que "las fresas se gastan rápido". Tú preguntas: "¿Qué marca usa?" (generalmente una marca económica con diamante sintético). Le dejas 3 fresas de diamante natural Fresissima y 3 de carburo K89. La diferencia se nota en el primer corte: más suave, menos vibración, más sesiones de vida útil. A la semana te llama para hacer pedido.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 5 =====================
    {
        num: '05', title: 'Formas de Fresas', sub: 'Cada forma corresponde a un tipo de preparación', color: '#D69E2E',
        sections: [
            {
                type: 'concept', label: '📘 Las 7 formas principales',
                image: 'img/bur_shapes.png', imgAlt: '7 formas de fresas: bola, pera, cilíndrica, cono, chamfer, llama y barril',
                text: 'La forma de la fresa deja una "huella" en el diente. El dentista elige la forma según el tipo de cavidad o preparación que necesita crear:'
            },
            {
                type: 'concept', label: '🔵 Bola (esférica) — Ref. 801',
                box: '<strong>La fresa más vendida del mundo.</strong><br><br>Forma redonda perfecta. Crea cavidades hemisféricas. Es la primera fresa que coge cualquier dentista.<br><br><strong>Uso:</strong> Eliminación de caries, acceso endodóntico, apertura de cavidades.<br><strong>Tip:</strong> La referencia 801-014 FG azul es la más pedida del catálogo. Si solo puedes llevar UNA fresa de muestra, lleva ésta.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🍐 Pera — Ref. 830',
                box: '<strong>Acceso y mínima invasión.</strong><br><br>Forma de gota con punta activa. Permite acceder a zonas estrechas sin destruir estructura sana.<br><br><strong>Uso:</strong> Caries subgingivales, cavidades conservadoras, acceso difícil.<br><strong>Tip:</strong> Los dentistas más modernos que trabajan "mínimamente invasivo" son fans de la pera.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🟦 Cilíndrica — Ref. 835/836',
                box: '<strong>Paredes rectas y paralelas.</strong><br><br>Crea paredes verticales perfectas. Deja fondos planos.<br><br><strong>Uso:</strong> Preparación de inlays/onlays, cavidades profundas con paredes paralelas.<br><strong>Tip:</strong> Si el doctor dice "hago muchos inlays", necesita cilíndricas. Es un nicho que no todos comerciales conocen.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🔺 Cono / Troncocónica — Ref. 847/848',
                box: '<strong>La fresa de los protesistas.</strong><br><br>Forma de cono truncado. Crea paredes con ángulo de convergencia. Es la fresa principal para tallar muñones de coronas.<br><br><strong>Uso:</strong> Preparación de coronas y puentes, reducción oclusal, preparar muñones.<br><strong>Tip:</strong> Si el protesista usa 847-016 verde, es su pan de cada día. Venderle ésta con diamante natural = diferenciación inmediata.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🏈 Chamfer / Torpedo — Ref. 879',
                box: '<strong>El margen de la corona.</strong><br><br>Punta redondeada que crea una línea de terminación suave (chamfer). El laboratorio necesita un margen limpio para que la corona encaje perfectamente.<br><br><strong>Uso:</strong> Línea de terminación para coronas, especialmente en prótesis sobre implantes.<br><strong>Tip:</strong> Si el doctor dice "mis márgenes no me quedan limpios", la torpedo le resuelve la vida.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🔥 Llama — Ref. 863',
                box: '<strong>Reina de las zonas interproximales.</strong><br><br>Forma alargada y fina, como una llama de vela. Permite acceder entre dientes sin tocar el diente vecino.<br><br><strong>Uso:</strong> Zonas interproximales, acabado de márgenes, zonas estrechas.<br><strong>Tip:</strong> Si el doctor dice "tengo problemas entre dientes", la llama es la solución.',
                boxColor: 'blue'
            },
            {
                type: 'concept', label: '🛢️ Barril — Ref. 811',
                box: '<strong>Pulido y superficies amplias.</strong><br><br>Forma cilíndrica con extremos redondeados. Cubre más superficie de contacto.<br><br><strong>Uso:</strong> Pulido de restauraciones, alisado de superficies amplias, acabado.<br><strong>Tip:</strong> Menos vendida individualmente, pero imprescindible en kits de acabado.',
                boxColor: 'blue'
            },
            {
                type: 'sales', label: '🎯 Regla rápida: especialidad → formas',
                box: '<strong>Generalista</strong> → bola 801 + pera 830 (conservadora)<br><strong>Protesista</strong> → troncocónica 847 + torpedo 879 + llama 863<br><strong>Endodoncista</strong> → bola 801 + Endo-Z<br><strong>Cirujano</strong> → Zekrya quirúrgica + Lindemann<br><strong>Implantólogo</strong> → torpedo 879 + diamante quirúrgico<br><br>Conocer la especialidad del doctor te dice exactamente qué formas ofrecerle.',
                boxColor: 'orange'
            }
        ]
    },
    // ===================== BLOQUE 6 =====================
    {
        num: '06', title: 'Procedimientos Dentales', sub: 'Lo que el dentista hace cada día con tus fresas', color: '#E53E3E',
        sections: [
            {
                type: 'concept', label: '📘 Este bloque conecta todo',
                text: 'Ahora que conoces anatomía, materiales, máquinas y fresas, vamos a ver cómo se <strong>combinan en procedimientos reales</strong>. Cada procedimiento es una secuencia de fresas — vender la secuencia completa multiplica tu ticket.'
            },
            {
                type: 'concept', label: '🦠 Eliminación de caries (60% del día)',
                items: [
                    { t: 'Material que corta', d: 'Esmalte (para acceder) → Dentina (para limpiar caries)' },
                    { t: 'Secuencia de fresas', d: '<strong>1.</strong> Bola diamante azul FG (abrir esmalte) → <strong>2.</strong> Bola carburo K89 RA (limpiar dentina con control) → <strong>3.</strong> Pulidores Dentag (acabar el composite)' },
                    { t: 'Ticket medio', d: '3 fresas + pulidores = ~€18 por kit' },
                    { t: 'Pregunta de venta', d: '"¿Cambia de diamante a carburo cuando llega a dentina, o usa diamante para todo?"' }
                ]
            },
            {
                type: 'concept', label: '👑 Preparación de corona (20% del día)',
                items: [
                    { t: 'Material que corta', d: 'Esmalte + Dentina (reducir todo el diente para crear muñón)' },
                    { t: 'Secuencia de fresas', d: '<strong>1.</strong> Troncocónica 847 verde FG (reducción rápida) → <strong>2.</strong> Troncocónica 847 azul FG (dar forma) → <strong>3.</strong> Torpedo 879 rojo FG (margen/chamfer) → <strong>4.</strong> Llama 863 rojo FG (acabar interproximal)' },
                    { t: 'Ticket medio', d: '4 fresas = ~€22 por kit' },
                    { t: 'Pregunta de venta', d: '"¿Usa chamfer o shoulder como línea de terminación?"' }
                ]
            },
            {
                type: 'concept', label: '🔧 Ajuste de restauraciones (10%)',
                items: [
                    { t: 'Material que corta', d: 'Composite, cerámica, disilicato o zirconio que viene del laboratorio' },
                    { t: 'Fresas según material', d: 'Composite → diamante fino rojo/amarillo FG<br>Cerámica → diamante fino con cuidado (frágil)<br>Zirconio → <strong>DISTENO</strong> (exclusivo Fresissima)<br>Metal → carburo multilámina' },
                    { t: 'Oportunidad', d: 'Aquí es donde Disteno brilla. Si el doctor ajusta zirconio, es venta casi automática.' }
                ]
            },
            {
                type: 'concept', label: '💀 Zirconio — caso especial',
                box: 'El zirconio es el material del futuro en prótesis. Cada vez más laboratorios lo usan. Pero es <strong>extremadamente duro</strong> y las fresas normales no funcionan bien.<br><br>Problemas comunes:<br>• Diamante estándar se desgasta rápido<br>• Genera microcracks invisibles que debilitan la restauración<br>• El doctor pierde tiempo y material<br><br><strong>Solución Fresissima:</strong> Fresas de Disteno (material sinterizado exclusivo). Ajustan zirconio sin microfracturas. Ningún competidor lo tiene. Es nuestro producto más diferenciador.',
                boxColor: 'purple'
            },
            {
                type: 'sales', label: '🎯 No vendas fresas sueltas, vende workflows',
                box: '<strong>Kit Conservadora:</strong> 801-014 azul + 801-010 rojo + copa pulido = €18<br><strong>Kit Corona:</strong> 847-016 verde + 879-014 azul + 863-012 rojo = €22<br><strong>Kit Endo:</strong> 801-014 azul + Endo-Z + Gates = €15<br><strong>Kit Zirconio:</strong> Disteno set 3 piezas = €35<br><br>El ticket medio sube un <strong>40%</strong> vendiendo kits vs fresas unitarias.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Un doctor te pide "10 esféricas 801-014". En vez de solo anotar el pedido, le preguntas: "¿Quieres también las de acabado rojo y un set de pulidores para completar el workflow de conservadora?" 6 de cada 10 dicen que sí. Tu factura pasa de €35 a €55 sin esfuerzo extra.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 7 =====================
    {
        num: '07', title: 'Cómo Piensa un Dentista', sub: 'Entiende su lógica para hablar su idioma', color: '#319795',
        sections: [
            {
                type: 'concept', label: '📘 El proceso de decisión del dentista',
                text: 'El dentista <strong>no piensa en fresas primero</strong>. Piensa en el problema clínico y la fresa es el último eslabón de la cadena. Su proceso mental es:',
                items: [
                    { t: '1️⃣ Material', d: '"¿Qué tengo que cortar?" → Esmalte, dentina, zirconio, composite...' },
                    { t: '2️⃣ Acceso', d: '"¿Puedo llegar bien?" → Si la caries está entre dientes, necesita formas estrechas (llama, pera). Si es oclusal, tiene libertad.' },
                    { t: '3️⃣ Forma de preparación', d: '"¿Qué cavidad o tallado necesito?" → Redonda (bola), con paredes (cilíndrica), cónica (troncocónica)...' },
                    { t: '4️⃣ Velocidad', d: '"¿Turbina o contra-ángulo?" → Depende de cuánto control necesita y qué tejido trabaja.' },
                    { t: '5️⃣ Fresa', d: 'Solo ahora elige la fresa específica: forma + material + grano + vástago.' }
                ]
            },
            {
                type: 'sales', label: '🎯 Las 4 preguntas mágicas del comercial',
                text: 'Si haces estas 4 preguntas, puedes recomendar <strong>cualquier fresa del catálogo</strong> sin ser dentista:',
                items: [
                    { t: '❓ "¿Qué material trabaja más?"', d: 'Define si necesita DIAMANTE o CARBURO. Esmalte/cerámica/zirconio → diamante. Dentina/metal/hueso → carburo.' },
                    { t: '❓ "¿Qué procedimiento hace más?"', d: 'Define la FORMA. Conservadora → bola/pera. Prótesis → troncocónica/torpedo. Endo → bola + Endo-Z.' },
                    { t: '❓ "¿Preparar, acabar o pulir?"', d: 'Define el GRANO. Preparar → verde/negro. Dar forma → azul. Acabar → rojo. Pulir → amarillo/blanco.' },
                    { t: '❓ "¿Turbina o contra-ángulo?"', d: 'Define el VÁSTAGO. Turbina → FG. Contra-ángulo → RA. Laboratorio → HP.' }
                ]
            },
            {
                type: 'dentist', label: '🦷 Lo que valora el dentista',
                box: '✅ Que sepas qué es un chamfer vs shoulder.<br>✅ Que preguntes "¿turbina o contra-ángulo?" antes de tomar el pedido.<br>✅ Que recomiendes por criterio técnico, no solo por precio.<br>✅ Que dejes muestras y hagas seguimiento.<br>✅ Que conozcas sus procedimientos habituales.<br><br>❌ <strong>Rechaza:</strong> que digas "esta fresa es buena para todo", que no sepas qué vástago necesita, que solo hables de precio sin hablar de rendimiento.',
                boxColor: 'purple'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Un doctor nuevo te dice "no sé qué fresas pedir, acabo de abrir la clínica". En vez de darle un catálogo de 200 páginas, le haces las 4 preguntas:<br><br>"¿70% conservadora? ¿Composite? ¿Turbina Kavo? ¿Algún caso de prótesis?"<br><br>En 2 minutos le armas un kit de inicio de 15 fresas que cubre el 90% de su trabajo diario. Primer pedido de €150 y un cliente para años.',
                boxColor: 'yellow'
            }
        ]
    },
    // ===================== BLOQUE 8 =====================
    {
        num: '08', title: 'Cómo Presentar Fresas en Clínica', sub: 'Comunicación que genera confianza y ventas', color: '#DD6B20',
        sections: [
            {
                type: 'vocab', label: '❌ Errores típicos del comercial',
                items: [
                    { t: 'Error 1: Hablar del catálogo', d: '"Tenemos 1.600 referencias..." Al doctor no le importa cuántas referencias tiene tu catálogo. Le importa las 5-10 que necesita para SU día a día.' },
                    { t: 'Error 2: Hablar del precio primero', d: '"Somos más baratos que Komet..." Competir por precio te convierte en commodity. Hoy eres más barato, mañana otro lo es más.' },
                    { t: 'Error 3: Hablar de la marca', d: '"Fresissima es líder en Italia..." Al doctor le da igual tu historia corporativa. Le importa si TU fresa le resuelve SU problema.' },
                    { t: 'Error 4: "Esta fresa es buena para todo"', d: 'No existe ninguna fresa buena para todo. Decir esto demuestra que no entiendes el producto. El doctor pierde confianza inmediatamente.' }
                ]
            },
            {
                type: 'explain', label: '✅ Lo correcto: hablar del trabajo clínico',
                box: '<strong>"No le vengo a enseñar fresas. Quiero entender qué tipo de preparaciones hace más."</strong><br><br>Esta frase cambia toda la dinámica. Ya no eres un vendedor de catálogo. Eres alguien que quiere entender su trabajo para recomendarle mejor. El doctor baja la guardia y empieza a hablar de sus casos.',
                boxColor: 'green'
            },
            {
                type: 'sales', label: '🎯 Frases que generan confianza',
                items: [
                    { t: 'Primera visita', d: '"Buenos días doctor, soy [nombre] de Fresissima, fabricante italiano de fresas rotatorias. ¿Tiene 5 minutos para que entienda cómo trabaja? No le voy a vender nada hoy."' },
                    { t: 'Preguntas inteligentes', d: '"¿Hace más conservadora o prótesis?"<br>"¿Trabaja con zirconio?"<br>"¿Ha probado cambiar a carburo para la fase de dentina?"<br>"¿Qué marca usa actualmente y qué le gusta de ella?"' },
                    { t: 'Argumento técnico', d: '"Con diamante natural la generación de calor es un 20% menor porque las aristas irregulares multiplican puntos de corte."' },
                    { t: 'Cierre suave', d: '"Le dejo 5 fresas adaptadas a su perfil. Pruébelas esta semana y le llamo el viernes para ver qué tal."' }
                ]
            },
            {
                type: 'vocab', label: '❌ Frases que destruyen confianza',
                items: [
                    { t: '"Esta fresa es la mejor"', d: 'Sin explicar por qué. Suena a vendedor genérico.' },
                    { t: '"Es más barata que Komet"', d: 'Competir solo por precio. El doctor piensa: "si es más barata, será peor".' },
                    { t: '"Todos nuestros clientes están contentos"', d: 'Genérico. No dice nada. El doctor ha oído esto de cada comercial.' },
                    { t: '"Nunca hables mal de Komet"', d: 'Di: "Son buenos. Nosotros somos fabricantes directos con tecnología propia. ¿Quieres probar la diferencia?"' }
                ]
            },
            {
                type: 'sales', label: '🎯 La regla de oro de la primera visita',
                box: '<strong>La primera visita NO es para vender. Es para DEJAR MUESTRAS y obtener permiso para hacer seguimiento.</strong><br><br>Qué dejar siempre:<br>1. <strong>Muestra gratuita</strong> (3-5 fresas adaptadas a su perfil).<br>2. Tu tarjeta con <strong>WhatsApp</strong>.<br>3. <strong>Vademécum</strong> de la especialidad que le interese.<br>4. "Pruébelas esta semana y le llamo el viernes para ver qué tal."<br><br>La venta real llega en la segunda o tercera visita, cuando el doctor ha probado y siente la diferencia.',
                boxColor: 'orange'
            },
            {
                type: 'example', label: '🏥 Ejemplo real',
                box: '<strong>Caso:</strong> Llegas a una clínica donde usan Komet. El doctor dice "estoy contento con lo que tengo". Tú NO insistes. Dices: "Perfecto, Komet es un buen fabricante. Solo le pido que pruebe 3 fresas nuestras de diamante natural en su próximo caso de prótesis. <strong>La diferencia la va a notar en la mano.</strong> Si no le convence, no vuelvo a insistir."<br><br>El 70% acepta la prueba. El 50% de esos acaba comprando. Has abierto la puerta sin presión.',
                boxColor: 'yellow'
            }
        ]
    }
];
