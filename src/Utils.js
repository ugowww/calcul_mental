/** STRUCTURE */



export const parseTXT = (datas) => {

    var regex = new RegExp(/(\u00AB|\u2014)(?:\s+)?|(?:\s+)?([\?…!:;\u00BB])/g)
    var espace = '<span>&nbsp;</span>'
    var  balisesExclues = 'html,head,style,title,link,meta,script,object,iframe,pre,code,textarea,noscript';

    let _state = {
        THEME: "",
        SOUSTHEME: "",
        SERIE: "",
        EXERCICES: [{
            image: '',
            solution: '',
            propositions: [],
            consigne : ''
        }]
    }

    let _tempConsignes = [];
    let _tempPropositions = [];
    let _tempImages = []
    let _tempReponses = [];

    let lines = datas.split("\n");
    let numLines = lines.length;
    let i;
    let line;

    /** THEME */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("theme".toLowerCase()) === 0) {
            _state.THEME = line.split('@')[1]

        }
    }
    /** SOUS-THEME */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("sous-theme".toLowerCase()) === 0) {
            _state.SOUSTHEME = detectFormula(line.split('@')[1])

        }
    }
    /** SERIE */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("serie".toLowerCase()) === 0) {
            _state.SERIE = line.split('@')[1]
        }
    }



    /** CONSIGNE */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("consigne".toLowerCase()) === 0) {
            _tempConsignes.push(line.split('@')[1])//.replace(regex, "$1" + espace + "$2"))
        }
    }
    

    /** IMAGE */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("image".toLowerCase()) === 0) {
            _tempImages.push(line.split('@')[1])
        }
    }

    /** PROPOSITIONS */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("proposition".toLowerCase()) === 0) {
            _tempPropositions.push(line.split('@')[1])
        }
    }


    /** REPONSES */
    for (i = 0; i < numLines; i++) {
        line = lines[i];
        if (strip(line.toLowerCase()).indexOf("reponse".toLowerCase()) === 0) {
            _tempReponses.push(line.split('@')[1])
        }
    }

    let k = 0;
    
    for (let j = 0; j < _tempPropositions.length; j++) {
        if (j % 4 === 0 && j > 0) {
            _state.EXERCICES.push({
                image: '',
                solution: '',
                propositions: []
            })
            k++;

        }
        _state.EXERCICES[k].image = killWhiteSpace(_tempImages[k])
        _state.EXERCICES[k].solution = _tempReponses[k]
        _state.EXERCICES[k].consigne = detectFormula(_tempConsignes[k])
        _state.EXERCICES[k].propositions.push(detectFormula(_tempPropositions[j]))
        
    
    }
     let u = 0;
     for(u;u <_state.EXERCICES.length;u++) {
       let _solution =_state.EXERCICES[u].propositions[Number(_state.EXERCICES[u].solution)-1]
       let v = 0;
       for(v;v <_state.EXERCICES[u].propositions.length;v++) {
        _state.EXERCICES[u].propositions =shuffle(_state.EXERCICES[u].propositions)
       }
       let m =0;
       for(m;m <_state.EXERCICES[u].propositions.length;m++) {
          if(_state.EXERCICES[u].propositions[m]===_solution){
            _state.EXERCICES[u].solution = m+1
          }
    } 
     }
    
    return _state




}

const shuffle =(o) => {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

const detectFormula = (str)=> {
let t = 0;
str  = String(str).replace(/[$]/g, function (match) {
    t++;
   
    if (t%2 === 0) {
    return match
    }
    
 else {
 return "$Formule" 
 }
    })

return  str//str.replace(/[$]/g, "Formule")

}

const killWhiteSpace = (str) => {
    return str.replace(/\s/g, '');
};

export const hexToRGB=(hex, alpha)=> {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

const strip = (str) => {
    var translate_re = /[éèäüÖÄÜß ]/g;
    var translate = {
        "é": "e",
        "è": "e",
        "ü": "u",
        "Ä": "A",
        "Ö": "O",
        "Ü": "U",
        " ": "_",
        "ß": "ss"
    };
    return (str.replace(translate_re, function (match) {
        return translate[match];
    }));
};