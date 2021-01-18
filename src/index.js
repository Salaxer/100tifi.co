import router from './routes/index';


window.addEventListener('load',router);
window.addEventListener('hashchange',router);
window.addEventListener('input',ev =>{
    var dayorsoon = document.getElementById("changemode").checked;
    console.log(dayorsoon);
    if(dayorsoon){
        document.getElementById('moonday').style.display = 'inline-block';
        document.getElementById('sunday').style.display = 'none';
        document.querySelector('html').style.setProperty('--background', '#222831');
        document.querySelector('html').style.setProperty('--background-item', '#393e46');
        document.querySelector('html').style.setProperty('--text-color', '#eff7e1');
        document.querySelector('html').style.setProperty('--card-color', '#e8efeb');
        
    }else{
        document.querySelector('html').style.setProperty('--background', '#f4f4f4');
        document.querySelector('html').style.setProperty('--background-item', '#f4f4f4');
        document.querySelector('html').style.setProperty('--text-color', '#15302C');
        document.querySelector('html').style.setProperty('--card-color', '#025a70');
        document.getElementById('sunday').style.display = 'inline-block';
        document.getElementById('moonday').style.display = 'none';
    }
})
window.onload = function() {
    
}

        //   --background: #222831;
        //   --background-item: #393e46;
        //   --text-color: #eff7e1;
        //   --card-color: #e8efeb;

        /* f4f4f4 claro background*/
        /* 3c484e claro  text */
        /* text-color #15302C */
        /* carrd color #025a70 */
        // Lo dejo hoy, voy en el boton deslizable
        // Ahorita mismo falta decorarlo
        // despues e decorarlo voy a agregarle el JS