console.log('-----------------------------------------');
{
/**Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт 
* з наступними властивостями.

text - текст завдання.
category - категорія завдання.
priority - пріоритет завдання.

Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму 
параметр data. У новому об'єкті повинна бути властивість completed, 
значення якої зберігається в однойменній локальній змінній.

В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, 
можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority 
повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних. */


function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";

    const newArr = {completed, category, priority, ...data}
    console.log(newArr);
    return newArr
  }

makeTask({}) //повертає { category: "General", priority: "Normal", completed: false }
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
//повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
makeTask({ category: "Finance", text: "Take interest" }) 
//повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
makeTask({ priority: "Low", text: "Choose shampoo" }) 
//повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
makeTask({ text: "Buy bread" }) 
//повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }
}
console.log('-----------------------------------------');
{
/**Використовуючи операцію rest, доповни код функції add() таким чином, 
* щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму. */

function add(...args) {
    let sum = 0;
    // console.log(args);
    for (const arg of args) {
        // console.log(arg);
        sum += arg
    }
    console.log(sum);
    // return sum
  }


add(15, 27) //повертає 42
add(12, 4, 11, 48) //повертає 75
add(32, 6, 13, 19, 8) //повертає 78
add(74, 11, 62, 46, 12, 36) //повертає 241
}
console.log('-----------------------------------------');
{
/**Функція findMatches() приймає довільну кількість аргументів. Першим аргументом 
 * завжди буде масив чисел, а решта аргументів будуть просто числами.
 * 
 * Доповни код функції таким чином, щоб вона повертала новий масив matches, 
 * в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], 
тому що тільки вони є в масиві першого аргументу. */

// Change code below this line
function findMatches(arrOfNum, ...args) {
    // console.log(arrOfNum);
    // console.log(args);
    const matches = []; // Don't change this line
    for (const arg of args) {
        // console.log(arg);
        if (arrOfNum.includes(arg)) {
            matches.push(arg)
        }
    }
//   console.log(matches);
    // Change code above this line
    return matches;
  }

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) //повертає [1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) //повертає [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) //повертає [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16) //повертає []
}
console.log('-----------------------------------------');
{
/** Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки 
* за аналогією з getBooks() і addBook(bookName).

Метод removeBook(bookName) буде видаляти книгу за назвою. 
Повертає рядок "Deleting book <назва книги>", де <назва книги> - 
це значення параметра bookName.

Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. 
Повертає рядок "Updating book <стара назва> to <нова назва>", 
де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.*/

const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
      getBooks() {
        return "Returning all books";
      },
      
      addBook(bookName) {
        return `Adding book ${bookName}`;
      },
  
      removeBook(bookName) {
        return `Deleting book ${bookName}`
      },
  
      updateBook(bookName, author) {
        return `Updating book ${bookName} to ${author}`
      }
      // Change code above this line
    };
  
bookShelf.getBooks() //повертає рядок "Returning all books"
bookShelf.addBook("Haze") //повертає рядок "Adding book Haze"
bookShelf.removeBook("Red sunset") //повертає рядок "Deleting book Red sunset"
bookShelf.updateBook("Sands of dune", "Dune") 
//повертає рядок "Updating book Sands of dune to Dune"
}
console.log('-----------------------------------------');
{
/**Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги 
 * з oldName на newName у властивості books. Використовуй indexOf() для того, 
 * щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент. */

const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],

    updateBook(oldName, newName) {
        this.books.splice(this.books.indexOf(oldName), 1, newName)
        // console.log(this.books);
    },

  };
// console.log(bookShelf.books);

bookShelf.updateBook("Haze", "Dungeon chronicles") 
//значення властивості books - це масив 
// ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

bookShelf.updateBook("The last kingdom", "Dune") 
//значення властивості books - це масив 
// ["Dune", "Haze", "The guardian of dreams"]
}
console.log('-----------------------------------------');
{
/**Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName 
 * з масиву зілля у властивості potions. */

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],

    removePotion(potionName) {

        for (let i = 0; i < this.potions.length; i++) {
            if (potionName === this.potions[i]) {
                this.potions.splice(this.potions.indexOf(potionName), 1)
            }
        }
    },
  };

console.log(atTheOldToad.potions);
//це масив ["Speed potion", "Dragon breath", "Stone skin"]

atTheOldToad.removePotion("Dragon breath") 
console.log(atTheOldToad.potions);

// у властивості potions буде масив ["Speed potion", Stone skin"]
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);

// у властивості potions буде масив ["Stone skin"]
}
console.log('-----------------------------------------');
{
    /**Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював 
     * назву зілля з oldName на newName в масиві зілля у властивості potions. */

    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        updatePotionName(oldName, newName) {
          // Change code below this line
          this.potions.splice(this.potions.indexOf(oldName), 1, newName)

      
      
          // Change code above this line
        },
      };
      

      console.log(atTheOldToad.potions);

    //   Значення властивості atTheOldToad.potions - це масив 
    //   ["Speed potion", "Dragon breath", "Stone skin"]

    atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
    console.log(atTheOldToad.potions);

    // у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
    
    atTheOldToad.updatePotionName("Stone skin", "Invisibility")
    console.log(atTheOldToad.potions);

    // у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]
}
console.log('-----------------------------------------');
{
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};



    //   atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
    //   atTheOldToad.addPotion({ name: "Power potion", price: 270 })
      atTheOldToad.addPotion({ name: "Power potion", price: 270 })

    //   console.log(atTheOldToad.getPotions());

      

      
    }