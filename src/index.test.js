
function findMatch(possibleMatches, crossword) {
    // Write your code here
    let crosswordFragment = ""; 
    for( let i=0; i<crossword.length; i++){
        if(crossword[i] !== '.'){
            crosswordFragment+=crossword[i]; 
        }            
    }
    console.log(crosswordFragment);
    let result ; 
    result = possibleMatches.find(evolvedPokemon => {
        if (crosswordFragment.length === 0 ){
            return evolvedPokemon.length === crossword.length ;  
        }else {
            return evolvedPokemon.toLowerCase().includes(crosswordFragment.toLowerCase());
        }
        
    });

    return result !==undefined ? result.toLowerCase():"" ;
}

test('test bilbo ', () => {
    
    let possibleMatches = ["gandalf", "legolas", "arwen", "bilbo", "frodo", "balron", "saruman", "sauron"] ; 
    let crossword = "..lb."; 

    let result = findMatch(possibleMatches,crossword); 
    expect(result).toEqual('bilbo');

});

test('test jolteon ', () => {
    

    let possibleMatches = ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon"]; 
    let crossword = "j......" ;

    let result = findMatch(possibleMatches,crossword); 
    expect(result).toEqual('jolteon');

});

test('test vaporean ', () => {    

    let possibleMatches = ["jolteon", "flareon", "espeon", "umbreon", "leafeon" ,"vaporeon"]; 
    let crossword = "........" ;

    let result = findMatch(possibleMatches,crossword); 
    expect(result).toEqual('vaporeon');

});

test('test BILBO ', () => {
    
    let possibleMatches = ["gandalf", "legolas", "arwen", "BILBO", "frodo", "balron", "saruman", "sauron"] ; 
    let crossword = "..LB."; 

    let result = findMatch(possibleMatches,crossword); 
    expect(result).toEqual('bilbo');

});

test('test not found  ', () => {
    
    let possibleMatches = ["gandalf", "legolas", "arwen", "bilbo", "frodo", "balron", "saruman", "sauron"] ; 
    let crossword = "..xx."; 

    let result = findMatch(possibleMatches,crossword); 
    expect(result).toEqual('');

});
