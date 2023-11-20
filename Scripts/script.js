function showMore() {
    window.location.href = "../index.html#about"
}


function landingPage() {
    const circlesContainer = document.getElementById('circles');
  
    for (let i = 0; i < 10; i++) {
      const circle = document.createElement('li');
      circlesContainer.appendChild(circle);
  
      let diameter = Math.floor(Math.random() * 80) + 20;
      let screenWidth = screen.width;
      let screenHeight = screen.height;
      let startX = Math.random() * (screenWidth - diameter);
      let startY = Math.random() * (screenHeight - diameter);
  
      console.log(screenHeight, screenWidth);
      console.log(startX, startY);
  
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.position = 'absolute';
      circle.style.left = `${startX}px`;
      circle.style.top = `${startY}px`;
  
      moveCircle(circle, startX, startY, screenWidth, screenHeight);
    }
  }
  
  function moveCircle(circle, startX, startY, screenWidth, screenHeight) {
    let targetX = startX + Math.random() * (screenWidth - parseFloat(circle.style.width));
    let targetY = startY + Math.random() * (screenHeight - parseFloat(circle.style.height));
  
    function animate() {
      let currentX = parseFloat(circle.style.left);
      let currentY = parseFloat(circle.style.top);
  
      let deltaX = (targetX - currentX) * 0.05;
      let deltaY = (targetY - currentY) * 0.05;
  
      // Check if the circle is close to the target, then change the target to bounce back
      if (Math.abs(targetX - currentX) < 1 && Math.abs(targetY - currentY) < 1) {
        targetX = startX + Math.random() * (screenWidth - parseFloat(circle.style.width));
        targetY = startY + Math.random() * (screenHeight - parseFloat(circle.style.height));
      }
  
      circle.style.left = `${currentX + deltaX}px`;
      circle.style.top = `${currentY + deltaY}px`;
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  
  // Call the landingPage function to create circles
  landingPage();
  