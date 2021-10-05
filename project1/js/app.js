




 let selection = document.getElementById('choose-lang');
 let somLang = ["geel","caano","dab","guri","cunto"];
 let engLang = ["camel","milk","fire","house","food"]
 let changeLang= document.getElementById('change-lang');
 let headTitle = document.getElementById('header-title');
 let headsubTitle = document.getElementById('header-subtitle');
 let questionLabel = document.getElementById('question-label');
 let randomSom = document.getElementById("question-input");
 let randomEng = document.getElementById("question-input");
 let translateSom = somLang[Math.floor(Math.random() * somLang.length)];
 let translateEng = engLang[Math.floor(Math.random() * engLang.length)];
 let somRandom = translateSom;
 let engRandom = translateSom;

selection.addEventListener('change',()=> {
                if (selection.value == "somali"){
                   changeLang.innerHTML = "badeal luqada";
                   headTitle.innerHTML= "Barasho iyo Maadso";
                   headsubTitle.innerHTML = "baro eryo cusub oo kamid ah luqad kale";
                   questionLabel.innerHTML = "tarjun erygan";
                   randomSom.value = somRandom;
                   document.getElementById('answer-input').value =""
                 //   userResult();

                  
               
               }else if(selection.value == 'english'){
                 

                   changeLang.innerHTML= "Choose your language";
                   headsubTitle.innerHTML= "Learn and Play";
                   headsubTitle.innerHTML = "Learn new words of another language";
                   questionLabel.innerHTML = "Translate this word";
                   randomEng.value = engRandom;
                   document.getElementById('answer-input').value =""

                     
               }
                
     }); 

 
 
     

     function userResult(){
         let selection = document.getElementById('choose-lang').value;
         if (selection == 'somali'){
             let indexSomRan=  somLang.indexOf(somRandom);
             let indexEngRan = engLang.indexOf(engRandom);
             let userAnswer = document.getElementById('answer-input').value;
             let checkUserAns = userAnswer.value;
             let correctSomAns = somLang.indexOf(checkUserAns);
             let correctEngAns = engLang.indexOf(checkUserAns);
             if(indexSomRan == correctEngAns){
                 document.getElementById('result').innerHTML="Correct";
                 document.getElementById('answer-input').value =""; 
                 document.getElementById("result").style.color = "green";
             }else{
                 document.getElementById('result').innerHTML="Incorrect";
                 document.getElementById("result").style.color = "red";
             }

         }else if (selection == 'english'){
             let indexSomRan=  somLang.indexOf(somRandom);
             let indexEngRan = engLang.indexOf(engRandom);
             let userAnswer = document.getElementById('answer-input').value;
             let checkUserAns = userAnswer.value;
             let correctSomAns = somLang.indexOf(checkUserAns);
             let correctEngAns = engLang.indexOf(checkUserAns);
             if(indexEngRan == correctSomAns){
                 document.getElementById('result').innerHTML="Correct";
                 document.getElementById('answer-input').value =""; 
                 document.getElementById("result").style.color = "green";
             }else {
                 document.getElementById('result').innerHTML="Incorrect";
                 document.getElementById("result").style.color = "red";
             }

         }

     }

     function reset(){
        document.getElementById('choose-lang').value="";
        document.getElementById('question-input').value="";
        document.getElementById('answer-input').value="";
        document.getElementById('result').value="";
    }
