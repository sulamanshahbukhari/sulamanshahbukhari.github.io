var animation = bodymovin.loadAnimation({
    container: document.getElementById('webdev'),
        
    // Set your ID to something that you'll associate with the animation you're using //
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'media/Images/Blogging Minimalistic/Blogging.json'
        
    // Make sure your path has the same filename as your animated     SVG's JSON file //
    })