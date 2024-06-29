const textos = ["dev", "front-end"];
        let indice = 0;
        const elemento = document.getElementById("alternar-texto");

        function alternarTexto() {
            elemento.textContent = textos[indice];
            indice = (indice + 1) % textos.length;
        }

        setInterval(alternarTexto, 2000);
        alternarTexto();
