let array = [
    {
    uralkodo_nev : "I. István",
    esemeny1 : "Koronázás",
    evszam1 : "1000",
    esemeny2 : "Pannonhalmi apátság megalapítása",
    evszam2 : "1001",
    },

    {
    uralkodo_nev : "IV. Béla",
    esemeny1 : "tatárjárás",
    evszam1 : "1241-1242",
    },

    {
    uralkodo_nev : "Mátyás király",
    esemeny1 : "Bécs elfoglalása",
    evszam1 : "1485",
    esemeny2 : "Kenyérmezei csata",
    evszam2 : "1479",
    },

    {
    uralkodo_nev : "II. Rákóczi Ferenc",
    esemeny1 : "A szabadságharc kezdete",
    evszam1 : "1703",
    esemeny2 : "A szabadságharc vége",
    evszam2 : "1711",
    }



]

const table = document.createElement('table');
    document.body.appendChild(table);
const tbody = document.createElement('tbody');

const thead = document.createElement('thead');
    table.appendChild(thead);
const tr = document.createElement('tr');
    thead.appendChild(tr);

const uralkodo = document.createElement('tr');  
    uralkodo.innerHTML = 'Úralkodó'
    tr.appendChild(uralkodo)

const esemeny = document.createElement('tr');
    esemeny.innerHTML = 'Esemény';
    tr.appendChild(esemeny);

const evszam = document.createElement('tr');
    evszam.innerHTML = 'Évszám';
    tr.appendChild(evszam);



    const form = document.getElementById('form');
form.addEventListener('submit' ,function(e){
    const uralkodo = document.getElementById('uralkodo_nev');
    const esemeny1 = document.getElementById('esemeny1');
    const evszam1 = document.getElementById('evszam1');
    const esemeny2 = document.getElementById('esemeny2');
    const evszam2 = document.getElementById('evszam2');


    e.preventDefault();
    const uralkodo_nev_value = uralkodo.value;
    const esemeny1_value = esemeny1.value;
    const evszam1_value = evszam1.value;
    const esemeny2_value = esemeny2.value;
    const evszam2_value = evszam2.value;


    const adatok = [
        {
            uralkodo : uralkodo_nev_value ,
            esemeny1 : esemeny1_value,
            evszam1 : evszam1_value,
            esemeny2 : esemeny2_value,
            evszam2 : evszam2_value,
        }
    ]

    array.push(adatok);
    form.reset();
})

    function irdki(){

}






