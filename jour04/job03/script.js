        async function chargerDonnees() {
            const response = await fetch('pokemon.json');
            const pokemons = await response.json();
            return pokemons;
        }
        
        async function remplirTypes() {
            const pokemons = await chargerDonnees();
            let types = new Set();
            pokemons.forEach(p => p.type.forEach(t => types.add(t)));
            types.forEach(t => {
                let option = document.createElement('option');
                option.value = t;
                option.textContent = t;
                document.getElementById('type').appendChild(option);
            });
        }

        async function filtrer() {
            const pokemons = await chargerDonnees();
            const id = document.getElementById('id').value.toLowerCase();
            const nom = document.getElementById('nom').value.toLowerCase();
            const type = document.getElementById('type').value;
            
            const resultats = pokemons.filter(p =>
                (!id || p.id.toString().includes(id)) &&
                (!nom || p.nom.toLowerCase().includes(nom)) &&
                (!type || p.type.includes(type))
            );

            document.getElementById('resultats').innerHTML = resultats.map(p =>
                `<div class="pokemon">
                    <strong>#${p.id}</strong> ${p.nom} <br>
                    Type: ${p.type.join(', ')}
                </div>`
            ).join('');
        }
        
        document.getElementById('filtrer').addEventListener('click', filtrer);
        remplirTypes();