const images = [
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3')
];

async function animateImages(): Promise<void> {
  for (let i = 0; i < images.length; i++) {
      await animate(images[i]);
  }
}

function animate(image: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
      image.animate([
          // keyframes
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' }
      ], {
          // timing options
          duration: 1000,
          iterations: 1
      });
      resolve();
  });
}
animateImages();
  
