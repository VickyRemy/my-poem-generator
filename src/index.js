 function displayPoem(response) {
          new Typewriter('#poem', {
          strings: response.data.answer,
          autoStart: true,
          cursor: "",
          delay: 1,
          });
        }

        function generatePoem(event) {
            event.preventDefault();
            
            let instructionInput = document.querySelector("#instruction");

            let apiKey = "09bdf26t323b4a9f4410fdob3dbedc7c";
            let prompt =`User instruction: Generate an English poem about ${instructionInput.value}`;
            let context = "Generate a soulful, nostalgic poem about soul music set in a jazz club. Use vivid imagery (vinyl records, saxophones, dim lights) and write it in four short lines, rhyming verses, capturing the emotional power and cultural roots of the genre in just 4 lines";
            let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

            let poemElement = document.querySelector("#poem");
            poemElement.classList.remove("hidden");
            poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionInput.value}</div>`;

            axios.get(apiUrl).then(displayPoem);
        }
        
        let poemFormElement = document.querySelector("#poem-generator-form");
        poemFormElement.addEventListener("submit", generatePoem)