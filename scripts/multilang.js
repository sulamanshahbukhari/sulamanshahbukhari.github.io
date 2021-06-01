window.onload = function(){ 
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    var language={
        eng:{
            welcome:"Hello and Welcome",
            introduction:" My Name is Sulaman "
        },
       ger:{
           welcome:"Hallo und Willkommen",
           introduction:" Ich heiße Sulaman ",
           summary:"Fresh Graduate Software Engineer mit einer exzellenten akademischen Geschichte Meine Hauptfachgebiete sind  Front-End-Webentwicklung und Grafikdesign. Ich habe starke Kenntnisse in Software Engineering Fächer mit einem Bachelor of Science (BS) in Computersoftware von Riphah  International ."
       
       },
       arabic:{
           welcome:"أهلا ومرحبا",
           introduction:" اسمي سليمان",
           summary: "مهندس برمجيات حديث التخرج مع تاريخ أكاديمي ممتاز مجالات خبرتي الرئيسية هي تطوير مواقع الويب وتصميم الجرافيك. لدي معرفة قوية بهندسة البرمجيات مواد مستوى الدراسات العليا مع بكالوريوس العلوم (BS) تركز في برامج الكمبيوتر من Riphah  دولي .",
           portfolio:"ملف"
        }
       };
       // define language hash
       if (window.location.hash)
       {
           if(window.location.hash==="#german")
           {
            var element=document.getElementById("hi");
            element.textContent =language.ger.welcome;
            var element2=document.getElementById("intro");
            element2.textContent =language.ger.introduction;
            var element3=document.getElementById("summary");
            element3.textContent =language.ger.summary;
           }
           if(window.location.hash==="#arabic")
           {
               //main page lang
            var element=document.getElementById("hi");
            element.textContent =language.arabic.welcome;
            element.classList.remove("font_poppin_regular");
            element.classList.add("font_arabic");
            var element2=document.getElementById("intro");
            element2.textContent =language.arabic.introduction;
            element2.classList.remove("font_poppin_regular");
            element2.classList.add("font_arabic");
            element2.classList.add("text-end");
            var element3=document.getElementById("summary");
            element3.textContent =language.arabic.summary;
            element3.classList.remove("font_poppin_bold");
            element3.classList.add("font_arabic");
            element3.classList.add("text-end");
           //portfolio page lang
            var element4=document.getElementById("porfolio-heading");
            element4.textContent =language.arabic.portfolio;
            element4.classList.remove("font_poppin_regular");
            element4.classList.add("font_arabic");
            var element5=document.getElementById("navportfolio");
            //navbar items lang
            element5.textContent =language.arabic.portfolio;
            element5.classList.add("font_arabic");

           }
          
       }
    // for(var i=0;i<=datareload.length;i++)
    // {
    //     datareload[i].onclick=function(){
    //         location.reload();
    //     }
        
    // }
   
   
 
        
      
        
    
    
   
};






//iteration 


       
//    var array_language=
//    {
//      'eng':{  
//           'portfolio':'Portfolio',
//           'contact':'Contact me'
          

//             },
//            'ger':{
//             'portfolio':'Portfolio',
//             'contact':'Kontaktiere mich'
           
//            },
//            'arabic':{
//             'portfolio':'ملف',
//             'contact':'اتصل بي'
//            }
      
//    };
  

       

   

