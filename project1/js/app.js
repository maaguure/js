




 let selection = document.getElementById('choose-lang');
 let somLang = ["geel","caano","dab","guri","cunto"];
 let engLang = ["camel","milk","fire","house","food"];
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
// Start change Languege
selection.addEventListener('change',()=> {
                if (selection.value == "somali"){
                   document.getElementById("select_language").innerHTML="Dooro Luqada";
                    document.getElementById("header-title").innerHTML ="Barasho iyo Maadso";
                    document.getElementById("header-subtitle").innerHTML ="Baro Erayo Cusub oo luqad kale ah";
                    document.getElementById("question-label").innerHTML="U Turjun Eraygan English:";
                    document.getElementById("answer-label").innerHTML= "Qor Jawaabtaada:";
                    document.getElementById("submit-answer").innerHTML = "hubi";
                    document.getElementById("reset").innerHTML="Ku Cesho";
                    randomSom.value = somRandom;
                    document.getElementById('answer-input').value ="";
                

                  
               
               }else if(selection.value == 'english'){
                 

                   document.getElementById("select_language").innerHTML ="Select Language";
                   document.getElementById("header-title").innerHTML ="Learn & Play";
                   document.getElementById("header-subtitle").innerHTML ="Learn new words of another language";
                   document.getElementById("question-label").innerHTML ='Translate this Word to Somali';
                   document.getElementById("answer-label").innerHTML = 'Enter Your Answer';
                   document.getElementById("submit-answer").innerHTML = 'check';
                   document.getElementById("reset").innerHTML = 'reset';
                   randomEng.value = engRandom;
                   document.getElementById('answer-input').value ="";

                     
               }
                
     }); 

 
 
     
// Start submit bottom Function  
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
