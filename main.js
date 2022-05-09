const area = document.querySelector(".area");
const input = document.querySelector("#phone");

const codesOfCountries = [
  {
    lang: 'KG',
    id: "+996",
  },
  {
    lang: 'Bulgaria',
    id: "   +359",
  },
  {
    lang: 'UZ',
    id: "+998",
  },
  {
    lang: 'KZ',
    id: "+380",
  },
];

input.addEventListener("input", () => {
  phoneMatched = input.value.match(/[+0-9]+/);
  for(key in codesOfCountries) {
    if(codesOfCountries[key].id === phoneMatched[0]) {
      area.innerHTML = codesOfCountries[key].lang;
    }
  };
});
phone.addEventListener("keyup", function(){
  txt=this.value;
  if (txt.length==4 || txt.length==8)
    this.value=this.value+" "; 
  });