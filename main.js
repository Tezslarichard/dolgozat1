let array = [
    {
    uralkod : "I. István",
    esemeny : "Koronázás",
    evszam : "1000",
    },

    {
    esemeny : "Pannonhalmi apátság megalapítása",
    evszam : "1001",
    },

    {
    uralkod : "IV. Béla",
    esemeny : "tatárjárás",
    evszam : "1241-1242",
    },

    {
    uralkod : "Mátyás király",
    esemeny : "Bécs elfoglalása",
    evszam : "1485",
    },

    {
    esemeny : "Kenyérmezei csata",
    evszam : "1479",
    },

    {
    uralkod : "II. Rákóczi Ferenc",
    esemeny : "A szabadságharc kezdete",
    evszam : "1703",
    },

    {
    esemeny : "A szabadságharc vége",
    evszam : "1711",
    }



]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const tr = document.createElement('tr');


document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);