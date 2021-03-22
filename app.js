'use striect'
let workingHours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalPurhour=[];
let totalBranch=0;
function getRndnum(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function Salmoncookies (namelocation,minCust,maxCust,avrage) {
   this.namelocation=namelocation,
  this.minCust=minCust,
  this.maxCust=maxCust,
  this.avrage=avrage,
  this.coustmernumber=[],
  this.purchascookies=[]
  // this.table=0,
};
Salmoncookies.prototype.getRndCusts = function(){
  for(let i=0;i<workingHours.length;i++){
this.coustmernumber[i]=getRndnum(this.minCust,this.maxCust);
  }
};
Salmoncookies.prototype.purCookieshour = function(){
for(let i=0;i<workingHours.length;i++){
  this.purchascookies[i]=(this.coustmernumber[i]*this.avrage).floor;
  totalBranch=totalBranch+this.purchascookies[i];
  totalPurhour[i]=totalPurhour[i]+this.purchascookies[i];
  }
};
// console.log(new Salmoncookies('seattle',3,65,6.3));
// console.log(new Salmoncookies('dubai',4,625,.3));
Salmoncookies.prototype.render = function (){ 
  const table=document.createElement('table');
  const trEl=document.createElement('tr');
  table.appendChild(trEl);
// trEl.textContent=this.namelocation;
for(i=0;i<workingHours.length;i++){
  let thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent= workingHours[i];
  console.log(thEl.textContent=workingHours[i]);
};
  const tr1El=document.createElement('tr');
  table.appendChild(tr1El);
for( i=1;i<this.purchascookies.length;i++){
  let th1El=document.createElement('td');
  let j=i-1;
  tr1El.appendChild(th1El);
  th1El.textContent=`${this.purchascookies[i-1]}`;
  console.log(th1El.textContent=this.purchascookies[j]);
};
}
const seattle =new Salmoncookies('seattle',3,65,6.3);
seattle.getRndCusts();
seattle.purCookieshour();
seattle.render();
console.log(seattle);

console.log(new Salmoncookies('seattle',3,65,6.3));
console.log( seattle.getRndCusts());
seattle.purCookieshour();
