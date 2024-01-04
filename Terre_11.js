try {
    var nombre = process.argv[2];

  

    function estNombrePremier(nombre) {
        if (nombre <= 1) {
            throw new Error();
        }

        for (let i = 2; i < nombre; i++) {
            if ( nombre % i === 0 ) {

                throw new Error();     
        } 
    }
        console.log(nombre + " est un Nombre Premier");
    
    }
    estNombrePremier(nombre);
    } catch (e) { 
        console.log(nombre + " n'est pas un Nombre Premier");
    }







    