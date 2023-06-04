
if (window.location.hash=='#arabic')
{
    location.reload();
    var typed = new Typed('.animateintro', {
        strings:[
            "مطور",
            "مطور",
            "مصمم ",
            "خلاق",
            "براغماتي",
            "مدهش!"
        ],
        typeSpeed:50,
        backSpeed:50,
        loop:true
        
        }
        );
}
else if (window.location.hash=='#german')
{
    location.reload();
    var typed = new Typed('.animateintro', {
        strings:[
        "Entwickler",
        "ein Entwickler",
        "ein Designer ",
        "Kreativ",
        "Pragmatisch",
        "Fantastisch!"
        ],
        typeSpeed:50,
        backSpeed:50,
        loop:true
        
        }
        );

}
else{
    
var typed = new Typed('.animateintro', {
    strings:[
        "Developer",
        "a Developer",
        "a Designer ",
        "Creative",
        "Pragmatic",
        "Awesome!"
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
    
    }
    
    );
}