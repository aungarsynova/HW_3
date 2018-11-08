(() => {

    //db did not work
        const vm = new Vue({
          el : "#galaxy",
          data : {
              planetHeader : "",
              planetInfo : ""
              
          },
          methods: {
              getData(e) {
                  //debugger;
                  let targetURL = `./includes/connect.php?planets=${e.currentTarget.id}`;
                  
          fetch(targetURL)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              //run a function to parse our data
             this.showPlanetData(data[0]);//run a fucntion to put the data on the page
          })
          .catch(function(error) {
              console.error(error);
  
          });
          },
  
          showPlanetData(data) {
              //change VM content here and make it show up on the page
             this.planetHeader = data.planetName
             this.planetInfo = data.info
            
           }
          }
      });
  
  
      function parsePlanetData(planet) {
          //destructure thed database info and grab just what we need
          const { planetName, info } = planet
          //take the database data and put it on the page
          document.querySelector(".name").textContent = planetName;
          document.querySelector(".info").textContent = info;
          
      };
    

      //ANIMATION USING ANIME.JS LIBRARY
      // --EARTH ANIMATION--
      const startEarth = document.querySelector('#earth');

      startEarth.addEventListener("click", function(){ //for some reason animation is triggered when clicked on the side instead of on the planet itself. I didn't know how to fix this
      var animation = anime({
        targets: '#earth .svg-graphic',
        translateX: {
            value: 750,
            duration: 800,
            //autoplay: false
          },
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine',
            //autoplay: false
          },
            delay: 250, // All properties except 'scale' inherit 250ms delay
            //autoplay: false
            

        })
      });

      // --MARS ANIMATION--
      const startMars = document.querySelector('#mars');

      startMars.addEventListener("click", function(){ //for some reason animation is triggered when clicked on the side instead of on the planet itself. I didn't know how to fix this
      var animation = anime({
        targets: '#mars .svg-graphic',
        translateX: {
            value: 750,
            duration: 800,
            //autoplay: false
          },
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine',
            //autoplay: false
          },
            delay: 250, // All properties except 'scale' inherit 250ms delay
            //autoplay: false
            

        })
      });

      //--PLUTO ANIMATION--
      const startPluto = document.querySelector('#pluto');

      startPluto.addEventListener("click", function(){ //for some reason animation is triggered when clicked on the side instead of on the planet itself. I didn't know how to fix this
      var animation = anime({
        targets: '#pluto .svg-graphic',
        translateX: {
            value: 750,
            duration: 800,
            //autoplay: false
          },
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine',
            //autoplay: false
          },
            delay: 250, // All properties except 'scale' inherit 250ms delay
            //autoplay: false
            

        })
      });
       //fetchData();
  })();

