/* Week 5 Coding Assignment: (testing version only)
    Create a menu app as seen in this week’s video. What you create is up to you as long as
    it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.
*/
class Ingredients {
    constructor(proteinPowder, fruits, greens, liquid, other) {
        this.proteinPowder = proteinPowder;
        this.fruits = fruits;
        this.greens = greens;
        this.liquid = liquid;
        this.other = other;
    }
    
    describe(){
        return `"The Energizer" smoothie ingredients: ${this.proteinPowder}, ${this.fruits}, ${this.greens}, ${this.liquid} and ${this.other}`;
    }
}
/* Lines 24 and 25: I wanted to see if I could log out some smoothie ingredients using .describe just to see
if it would work :) */

let mySmoothieIngredients = new Ingredients('Chocolate', 'Banana', 'Spinach', 'Almond Milk', 'Peanut Butter');
console.log(mySmoothieIngredients.describe());

class Smoothie {
    constructor(name) { 
        this.name = name;
        this.ingredients = [];                             
    }

    addIngredient(ingredient) {                          
        if (ingredient instanceof ingredient) {
            this.ingredients.push(ingredient); 
        } else {
            throw new Error(`This is not an ingredient: ${ingredient}`); 
        }   
    }
    describe() {
        return `${this.name} has ${this.ingredients.length} ingredients.`; 
        }
}

class Menu {
    constructor() {
        this.smoothies = [];
        this.selectedSmoothie = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSmoothie();
                    break;
                case '2':
                    this.viewSmoothie();
                    break;
                case '3':
                    this.deleteSmoothie();
                    break;
                case'4':
                    this.displaySmoothies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        
        alert('The End!');  
    }
    
    showMainMenuOptions() {  
    return prompt(`
         0) exit
         1) enter new smoothie name
         2) view smoothie
         3) delete smoothie
         4) display all smoothies
    `);
    }

 smoothieMenuOptions(smoothieInfo){
    return prompt(`
     0) back
     1) add ingredient
     2) delete ingredient
    ---------------------
     ${smoothieInfo}
     `);
    }

 displaySmoothies() {
    let smoothieString = '';
        for (let i = 0; i < this.smoothies.length; i++){
        smoothieString += i + ') ' + this.smoothies[i].name + '\n';         
        }
    /* Line 99: I wanted to see if the Smoothie names I entered into the prompt,
    logged out properly to the console with their asociated indexes */
    console.log(smoothieString);
    alert(smoothieString);    
    }
  
 createSmoothie() {
      let name = prompt('Enter smoothie name');
      this.smoothies.push(new Smoothie(name)); 
    }
  
 viewSmoothie() {
    let index = prompt('Enter the index number of the smoothie you wish to view:');
    if (index > -1 && index < this.smoothies.length) {
        this.selectedSmoothie = this.smoothies[index];
        let description = 'Smoothie Name: ' + this.selectedSmoothie.name + '\n';
        
        for (let j = 0; j < this.selectedSmoothie.ingredients.length; j++){
            description += j + ') ' + this.selectedSmoothie.ingredients[j].proteinPowder
            + ', ' + this.selectedSmoothie.ingredients[j].fruits + ', ' +
            this.selectedSmoothie.ingredients[j].greens + ', ' + this.selectedSmoothie.ingredients[j].liquid
            + ' and ' + this.selectedSmoothie.ingredients[j].other + '\n';   
        } 
        /* Line 128: I wanted to log out Smoothie name AND associated ingredients to the console using
        'description'. Seemed to log out OK BUT I could not figure out how to increase the index; the index
        kept showing up as '0' for each Smoothie name and ingredients that I entered using the prompt*/
        console.log(description);  
        
    let selection = this.smoothieMenuOptions(description);
        switch (selection) {
        case '1':
                this.createIngredients(); 
                break;
        case '2':
                this.deleteIngredients();
            }
        }  
    }

deleteSmoothies() {
   let index = prompt('Enter the index of the smoothie you wish to delete:');  
   if(index > -1 && index < this.smoothies.length) {
       this.smoothies.splice(index, 1);
   }
 } 
 
createIngredients() {
      let proteinPowder = prompt('Enter type of protein powder:');
      let fruits = prompt('Enter fruits you want to add:');
      let greens = prompt('Enter greens you want to add:');
      let liquid = prompt('Enter liquid base:');
      let other = prompt('Enter any other ingredients');
      this.selectedSmoothie.ingredients.push(new Ingredients(proteinPowder, fruits, greens, liquid, other));
         
 }
 
 deleteIngredients() {
     let index = prompt('Enter the index of the ingredient you wish to delete:');
     if (index > -1 && index < this.selectedSmoothie.ingredients.length){
         this.selectedSmoothie.ingredients.splice(index, 1);
     }
 } 

}
let menu = new Menu();
menu.start();
