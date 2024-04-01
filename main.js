function slideShow(pictureArray, parent, w, h) {

    // takes array of pictures, parent element and width/height of new pic frame.
    const frame = document.createElement('div');
    frame.id = 'frame';
    frame.style.width = w;
    frame.style.height = h;
    frame.style.display = "grid";
    parent.appendChild(frame);

    const dotbar = document.createElement('div');
    dotbar.id = 'dotbar';
    dotbar.className = "dotbar";
    dotbar.style.marginLeft = "auto";
    dotbar.style.marginRight = "auto";

    const images = [];
    const dots = [];
    for (let i = 0; i < pictureArray.length; i++) {
        const img = document.createElement('img');
        img.src = pictureArray[i];
        img.style.display = 'none'; // Initially hide images
        frame.appendChild(img);
        images.push(img);

        const dot = document.createElement('div');
        dot.textContent = '.';
        dot.className = 'dots';
        dot.id = `dot${i}`;
        dot.addEventListener('click', () => {
            images.forEach(image => {
                image.style.display = 'none';
            });
            img.style.display = 'block';
            dots.forEach(dot => {
                dot.style.color = "White";
            });
            dot.style.color = "magenta";
        });
        dotbar.appendChild(dot);
        dots.push(dot);
    }
    frame.appendChild(dotbar);
    images[0].style.display = 'block';
    dots[0].style.color = "magenta";

    // Auto advance after 6 seconds
    setInterval(() => {
        let currentIndex = images.findIndex(img => img.style.display === 'block');
        images[currentIndex].style.display = 'none'; 
        dots[currentIndex].style.color = "white"; 
        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].style.display = 'block'; 
        dots[currentIndex].style.color = "magenta"; 
    }, 6000);
}

    
    // Example usage
    const pictures = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png'];
    let attacher = document.getElementById("sArea");
    slideShow(pictures, attacher, "auto", "auto"); 
    
