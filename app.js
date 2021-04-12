'use strict';
let restoreValue = null;
function Articles (title,subject,content,autherName,day,month,year){
  this.title=title;
  this.subject=subject;
  this.content=content;
  this.autherName=autherName;
  this.day=day;
  this.month=month;
  this.year=year;
  getFromLocalStorage();
  // if(restoreValue === null){
  //   Articles.all.push(this);
  // }
}
Articles.all=[];

function setToLocalStorage(){
  localStorage.setItem('articles',JSON.stringify(Articles.all));
}
function getFromLocalStorage(){
  restoreValue=localStorage.getItem('articles');
  if (restoreValue !== null){
    Articles.all = JSON.parse(restoreValue);
  }
}

let formSection = document.getElementById('formSection');
formSection.addEventListener('submit',addNewArticle);
function addNewArticle (event){
  event.preventDefault();
  let title= event.target.ArticleTitle.value;
  let subject= event.target.Subject.value;
  let content= event.target.Content.value;
  let autherName= event.target.AutherName.value;
  let day= event.target.Day.value;
  let month= event.target.Month.value;
  let year= event.target.Year.value;

  // new Articles (title,subject,content,autherName,day,month,year);
  let article = new Articles (title,subject,content,autherName,day,month,year);
  Articles.all.push(article);
  setToLocalStorage();
  formSection.reset();
  render();
}
let result = document.getElementById('articleSection');
function render(){
  result.textContent='';
  for (let i=0; i<Articles.all.length; i++){
    let h3El = document.createElement('h3');
    result.appendChild(h3El);
    h3El.textContent = `${Articles.all[i].title}`;
    let p1El= document.createElement('p');
    result.appendChild(p1El);
    p1El.textContent =`Auther : ${Articles.all[i].autherName}`;
    let p2El= document.createElement('p');
    result.appendChild(p2El);
    p1El.textContent =`Date : ${Articles.all[i].day}-${Articles.all[i].month}-${Articles.all[i].year}`;
    let p3El= document.createElement('p');
    result.appendChild(p3El);
    p3El.textContent =` ${Articles.all[i].subject}`;
    let p4El= document.createElement('p');
    result.appendChild(p4El);
    p4El.textContent =` ${Articles.all[i].content}`;

  }
}

