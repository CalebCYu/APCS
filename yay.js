const counterValueElement = document.getElementById('counterValue');
let counter = 0; 
let x = 0; 
monkey = ["Baboon", "Chimpanzee", "Gorilla"];
fetchImage(monkey[x]);
function fetchImage(query) {
    const apiKey = 'f8c72f954a279b0fc10f6797668cfdb18d0e24d2b26b67a4ff34b1577b4bbf40';
    
    const searchUrl = `https://serpapi.com/search.json?api_key=${apiKey}&q=${query}&tbm=isch&ijn=0`;
  
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        // Extract the image URL from the API response
        const imageUrl = data.images_results[Math.floor(Math.random() * data.images_results.length)].original;
  
        // Display the image on the webpage
        const imageElement = document.getElementById('randomImage');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Image';
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }
  

  
  // Call the fetchImageFromSerpApi() function to retrieve and display the image
 


function handleButtonClick(buttonId) {
    // Get the button element
    if(buttonId==monkey[x]){
        counter++;
        
    }
    else{
        counter = 0;
    }
    
    counterValueElement.textContent = counter;
    x = Math.floor(Math.random() * 3);
    fetchImage(monkey[x]);
  }

  // Event listeners for button clicks
  const button1 = document.getElementById('1');
  button1.addEventListener('click', () => handleButtonClick('Baboon'));

  const button2 = document.getElementById('2');
  button2.addEventListener('click', () => handleButtonClick('Chimpanzee'));

  const button3 = document.getElementById('3');
  button3.addEventListener('click', () => handleButtonClick('Gorilla'));


  
  





