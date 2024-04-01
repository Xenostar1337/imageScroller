function slideShow(pictureArray, location, w, h, dotColor, highlight, frameColor) {
    // takes array of pictures, parent element and width/height of new pic frame.

    const parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    parent.style.alignItems = "center";
    parent.style.justifyItems = "center";
    parent.style.backgroundColor = frameColor;
    parent.style.width = w;
    parent.style.height = h;
    parent.style.border = "10px solid";
    parent.style.borderColor = frameColor
    

    location.appendChild(parent);

    const frame = document.createElement('div');
    frame.id = 'frame';
    frame.style.width = w;
    frame.style.height = h;
    frame.style.overflow = 'hidden'; 
    frame.style.position = 'relative'; 
    frame.stylehighlightpace = 'nowrap';        
    parent.appendChild(frame);

    const slide = document.createElement('div');
    slide.id = 'slide';
    slide.style.height = '100%'; 
    slide.style.display = 'flex'; 
    slide.style.transition = 'transform 0.85s ease'; 
    frame.appendChild(slide);

    const dotbar = document.createElement('div');
    dotbar.id = 'dotbar';
    dotbar.className = "dotbar";
    dotbar.style.textAlign = 'center';
    dotbar.style.fontSize = "xx-large";
    dotbar.style.color = highlight;
    dotbar.style.cursor = "pointer";
    
    
    parent.appendChild(dotbar);

    const images = [];
    const dots = [];
    const totalWidth = pictureArray.length * 100 + '%';

    for (let i = 0; i < pictureArray.length; i++) {
        const img = document.createElement('img');
        img.src = pictureArray[i];
        img.style.maxWidth = '100%'; 
        img.style.height = 'auto';
        img.style.objectFit = 'cover'; 
        img.style.width = '100%'; 
        slide.appendChild(img);
        images.push(img);

        const dot = document.createElement('div');
        dot.textContent = '•';
        dot.className = 'dots';
        dot.id = `dot${i}`;
        dot.style.display = 'inline-block';  
        dot.style.marginLeft = "4px";   
        dot.style.marginRight = "4px";     
        dot.addEventListener('click', () => {
            const currentIndex = i;
            slide.style.transform = `translateX(-${currentIndex * (100 / pictureArray.length)}%)`; 
            dots.forEach(dot => {
                dot.style.color = highlight;
            });
            dot.style.color = dotColor;
        });
        dotbar.appendChild(dot);
        dots.push(dot);
    }

    slide.style.width = totalWidth; 
    dots[0].style.color = dotColor; 
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slide.style.transform = `translateX(-${currentIndex * (100 / pictureArray.length)}%)`; 
        dots.forEach(dot => {
            dot.style.color = highlight;
        });
        dots[currentIndex].style.color = dotColor; 
    }, 6000);
}

// Example usage
const pictures = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png'];
const attacher = document.getElementById("sArea");
slideShow(pictures, attacher, "260px", "260px", "lime", "white", "black"); // imageArray, parentDiv, width, height of frame, dot colors,  highlight color, frame color




