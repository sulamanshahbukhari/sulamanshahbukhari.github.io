var animation = bodymovin.loadAnimation({
    container: document.getElementById('astronaut'),
        
    // Set your ID to something that you'll associate with the animation you're using //
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'media/Images/Astronaut/astronaout.json'
        
    // Make sure your path has the same filename as your animated     SVG's JSON file //
    })