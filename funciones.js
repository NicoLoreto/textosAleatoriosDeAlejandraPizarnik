poesias = ["<p><b>Despedida</b></p></br> Mata su luz un fuego abandonado.</br>Sube su canto un pájaro enamorado.</br>Tantas criaturas ávidas en mi silencio</br>y esta pequeña lluvia que me acompaña.", 
"<p><b>Madrugada</b></p></br>Desnudo soñando una noche solar.</br>He yacido días animales.</br>El viento y la lluvia me borraron</br>como a un fuego, como a un poema</br>escrito en un muro.", 
"<p><b>Sólo un nombre</b></p></br>alejandra alejandra</br>debajo estoy yo</br>alejandra",
"<p><b>Nada</b><p></br>El viento muere en mi herida.</br>La noche mendiga mi sangre.",
"<p><b>El miedo</b></p><br>En el eco de mis muertes</br>aún hay miedo.</br>¿Sabes tú del miedo?</br>Sé del miedo cuando digo mi nombre.</br>Es el miedo,</br>el miedo con sombrero negro</br>escondiendo ratas en mi sangre,</br>o el miedo con labio muertos</br>bebiendo mis deseos.</br>Sí. En el eco de mis muertes</br>aún hay miedo.",
"<p><b>La carencia</b></p></br>Yo no sé de pájaros,</br>no conozco la historia del fuego.</br>Pero creo que mi soledad debería tener alas.",
"<p><b>12</b></p></br>no más las dulces metamorfosis de una niña de seda</br>sonámbula ahora en la cornisa de niebla</br>su despertar de mano respirando</br>de flor que se abre al viento",
"<p><b>13</b></p></br>explicar con palabras de este mundo</br>que partió de mí un barco llevándome",
"<p><b>15</b></p></br>Extraño desacostumbrarme</br>de la hora en que nací.</br>Extraño no ejercer más</br>oficio de recién llegada.",
"<p><b>18</b></p></br>como un poema enterado</br>del silencio de las cosas</br>hablas para no verme",
"<p><b>La palabra que sana</b></p></br>Esperando que un mundo sea desenterrado por el lenguaje, alguien canta el lugar en que se forma el silencio. Luego comprobará que no porque se muestre furioso existe el mar, ni tampoco el mundo. Por eso cada palabra dice lo que dice y además más y otra cosa.",
"<p><b>La última inocencia</b></p></br><p>Partir</br>en cuerpo y alma</br>partir.</p></br><p>Partir</br>deshacerse de las miradas</br>piedras opresoras</br>que duermen en la garganta.</p></br><p>He de partir</br>no más inercia bajo el sol</br>no más sangre anonadada</br>no más formar fila para morir.</p></br><p>He de partir</p></br><p>Pero arremete, ¡viajera!</p>",
"<p><b>Días contra el ensueño</b></p></br>No querer blancos rodando</br>en planta movible.</br>No querer voces robando</br>semillosas arqueada aéreas.</br>No querer vivir mil oxígenos</br>nimias cruzadas al cielo.</br>No querer trasladar mi curva</br>sin encerar la hoja actual.</br>No querer vencer al imán</br>la alpargata se deshilacha.</br>No querer tocar abstractos</br>llegar a mi último pelo marrón.</br>No querer vencer colas blandas</br>los árboles sitúan las hojas.</br>No querer traer sin caos</br>portátiles vocablos.",
"<p><b>El olvido</b></p></br><p>en la otra orilla de la noche</br>el amor es posible</p></br><p>-llévame-</p></br><p>llévame entre las dulces sustancias</br>que mueren cada día en tu memoria",
"<p>cultivo el jardín del furor</p></br>mi roja sed humeante señala el día",
"<p><b>Reloj</b></p></br>Dama pequeñísima</br>moradora en el corazón de un pájaro</br>sale el alba a pronunciar una sílaba</br>NO",
"<p>Yo canto.</br>No es invocación.</br>Sólo nombres que regresan.</p>",
"<p>Memoria iluminada, galería donde vaga la sombra de lo que espero. No es verdad que vendrá. No es verdad que no vendrá.</p>",
"<p><b>2</b></p></br>Éstas son las versiones que nos propone:</br>un agujero, una pared que tiembla...",
"<p><b>XV</b></p></br>niña que en vientos grises</br>vientos verdes aguardó"
]



function mostrarResultado (){
    var random = Math.floor(Math.random()*20)
    const resultado = (poesias[random]);
    console.log(resultado);
    document.getElementById("respuesta").innerHTML=resultado;
}


