const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
       
        if(e.isIntersecting) {
            e.target.classList.add('show')
        } else {
            e.target.classList.remove('show')
        }
    
    });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    var typed = new Typed('#typed-text', {
        strings: ["I am a programmer and a hacking enthusiast <br> You can learn more about me <a href='#about'>Here</a>"],
        typeSpeed: 15, 
        loop: false 
      });
/*
      var typed = new Typed('#typed-text2', {
        strings: ["<br> <a style='color: #00c5ff;'>package</a> dev.oglis22.portfolio; <br> <br>" +
                "<a style='color: #00c5ff;'>import</a> oglis22.portfolio.templates.*; <br><br>" + 
                "<a style='color: #d500ff;'>public class</a> <a style='color: yellow;'>Portfolio</a> { <br>" + 
                "<a style='color: #d500ff; margin-left: 5%;'>public static void</a> <a style='color: yellow;'>main</a>(String[] args) { <br> <br>" + 
                "<a style='color: #d500ff; margin-left: 10%;'>String[]</a> Projects_and_References = { <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/SafeChat'>SafeChat<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //A Peer to Peer Chat System to communicate anonymous.</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/Anifyy'>Anifyy<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //A Website to rate, comment and find the perfect anime for you.</a> <br>" +
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/Devfyy'>Devfyy<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //A Server Management tool, to control and access your servers.</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://oglis22.github.io/'>Developed multiple Minecraft Servers<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //None of the systems are open source. Contact me for more infos.</a> <br> " + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/ZeusProxy'>Zeus Proxy<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //Minecraft Server Proxy that defends you before Botting Attacks</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/Simple_WhatsAppBot'>WhatsApp Bot<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //Simple WhatsApp Bot, that you can customize</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/DiscordBots'>Discord Bots<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //Coded multiple Discord Bots (Tickets Bots, Security Bots, etc..)</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/oglis22.github.io'>Oglis22 Portfolio Website<a style='color: white;'>',</a></a><a style='color: #00ff64;'> //Selfcoded Portfolio Website</a> <br>" + 
                "<a style='color: white; margin-left: 22%;'>'</a><a style='color: green;' href='https://github.com/oglis22/SecurityWriteUps'>Found Bugs and Issues<a style='color: white;'>'</a></a><a style='color: #00ff64;'> //Found some Bugs and Issues on Server Systems and Websites</a> <br>" + 
                "<a style='color: white; margin-left: 10%;';>};</a> <br>" +
                "<a style='color: white; margin-left: 5%;';>}</a> <br>" +
                "<a style='color: white;';>}</a> <br> <br>" + 
                "<a style='color: gray;'>Press Enter to save 'Portfolio.java'</a>"],
        typeSpeed: 0.1, 
        loop: false 
      });


      //I am a programmer and a hacking enthusiast <br> You can learn more about me <a href="#about">Here</a>

      */
