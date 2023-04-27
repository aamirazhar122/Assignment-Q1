export{}
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  const magicians = ["samuel", "Alic", "John", "Eric","Boby"];
  make_great(magicians);
  show_magicians(magicians);
  