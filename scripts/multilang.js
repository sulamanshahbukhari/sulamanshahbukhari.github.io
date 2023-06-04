window.onload = function(){ 
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    var language={
        eng:{
            welcome:"Hello and Welcome",
        },
       ger:{
           welcome:"Hallo, ich bin Sulaman",
           introduction:"ich bin ",
           aboutme:'Über mich',
           aboutintro:'Hi! Ich bin Sulaman Shah  Software-Ingenieur | Frontend React JS-Entwickler  Ich habe meinen Bachelor in Software Engineering an der Riphah International University gemacht und habe mehr als ein Jahr Branchenerfahrung in der Frontend-Webentwicklung Mein Tech-Stack beinhaltet: TypeScript | JavaScript | React | Redux Tk | JQuery | MUI | Tailwind | Bootstrap | CSS3 | Node JS | MongoDb | AWS | Docker | Shopify Ich freue mich darauf, bald von Ihnen zu hören'
       },
       arabic:{
           welcome:"مرحبا انا سليمان",
           introduction:"انا",
           summary: "مهندس برمجيات حديث التخرج مع تاريخ أكاديمي ممتاز مجالات خبرتي الرئيسية هي تطوير مواقع الويب وتصميم الجرافيك. لدي معرفة قوية بهندسة البرمجيات مواد مستوى الدراسات العليا مع بكالوريوس العلوم (BS) تركز في برامج الكمبيوتر من Riphah  دولي .",
           aboutme:'ْعَنِّي',
           aboutintro:'أهلاً! ام سليمان شاه مهندس برمجيات | الواجهة الأمامية React JS developer لقد حصلت على درجة البكالوريوس في هندسة البرمجيات من جامعة Riphah الدولية ولدي أكثر من عام من الخبرة في مجال تطوير الويب للواجهة الأمامية تتضمن مكدس التكنولوجيا الخاص بي ما يلي:  React js و Redux و javascript و Jquery و Css3 و Html5 و bootstrap4 / 5 و material Ui و tailwind Css أنا أتطلع للسماع منك قريبا',
           portfolio:"ملف",
           
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
            
            // about me german section
            var abouthead=document.getElementById("about-heading");
            abouthead.textContent =language.ger.aboutme
            var aboutIntro=document.getElementById("about-intro");
            aboutIntro.textContent =language.ger.aboutintro;
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
            element2.classList.remove("font_poppin_bold");
            element2.classList.add("font_arabic");
            element2.classList.add("text-end");
            var element3=document.getElementById("summary");
            element3.textContent =language.arabic.summary;
            element3.classList.remove("font_poppin_bold");
            element3.classList.add("font_arabic");
            element3.classList.add("text-end");
            // about me section language
            var element4=document.getElementById("about-heading");
            element4.textContent =language.arabic.aboutme;
            element4.classList.remove("font_poppin_regular");
            element4.classList.add("font_arabic");
            // about me intro section
            var element5=document.getElementById("about-intro");
            element5.textContent =language.arabic.aboutintro;
            element5.classList.remove("font_poppin_regular");
            element5.classList.add("font_arabic");
           //portfolio page lang
            var element6=document.getElementById("porfolio-heading");
            element6.textContent =language.arabic.portfolio;
            element6.classList.remove("font_poppin_regular");
            element6.classList.add("font_arabic");
            var element6=document.getElementById("navportfolio");
            //navbar items lang
            element7.textContent =language.arabic.portfolio;
            element7.classList.add("font_arabic");

           }
          
       }   
};