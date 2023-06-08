console.log('---------------Example_01------------------');
{
  /**Деструктуризація
   *
   * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
   * незалежних аргументів
   */

  /**
   * Розраховуємо індекс маси людини
   * @param {Object} obj
   * @returns {Number} BMI
   */
  function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(',', '.'));
    const numericHeight = Number(height.replace(',', '.'));

    return Number((numericWeight / numericHeight ** 2).toFixed(1));
  }

  // console.log(calcBMI('88,3', '1.75'));
  console.log(calcBMI({ weight: '88,3', height: '1.75' }));

  // console.log(calcBMI('68,3', '1.65'));
  console.log(calcBMI({ weight: '68,3', height: '1.65' }));

  // console.log(calcBMI('118,3', '1.95'));
  console.log(calcBMI({ weight: '118,3', height: '1.95' }));
}
console.log('---------------Example_02------------------');
{
  /**Деструктуризація
   *
   * Перепишіть функцію так, щоб вона приймала один об'єкт параметрів
   * замість набору незалежних аргументів
   */

  /**
   * Формуємо список контактів
   * @param {Object} obj
   */
  function printContactsInfo({ names, phones }) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');

    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]} `);
    }
  }

  printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  });
}
console.log('---------------Example_03------------------');
{
  /** Глибока диструктуризація
   *
   * Перепишіть функцію так, щоб вона приймала один об'єкт параметрів замість набору
   * незалежних аргументів
   */

  /**
   *
   * @param {Object} obj
   * @returns String
   */
  function getBotReport({ companyName, repairBots, defenceBots }) {
    return `${companyName} has ${repairBots + defenceBots} bots in stock`;
  }

  console.log(
    getBotReport({
      companyName: 'Cyberdyne Sistems',
      repairBots: 150,
      defenceBots: 50,
    }),
  );
}
console.log('---------------Example_04------------------');
{
  /**Деструктуризація
   *
   * Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
   * companyName та stock та виводила репотр про кількість товарів на складі
   * будь-якої кеомпанії
   */

  function getStockReport({ companyName, stock }) {
    // let total = repairBots + defenceBots;
    let total = 0;
    for (const value of Object.values(stock)) {
      total += value;
    }
    return `${companyName} has ${total} items in stock`;
  }
  console.log(
    getStockReport({
      companyName: 'Cyberdyne Sistems',
      stock: {
        repairBots: 150,
        defenceBots: 50,
      },
    }),
  );

  console.log(
    getStockReport({
      companyName: 'Belacci',
      stock: {
        shoes: 20,
        skirts: 10,
        hats: 5,
      },
    }),
  );
}
console.log('---------------Example_04------------------');
{
  /**Операція spread
   *
   * Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт
   * контакту з доданими властивостями id та createdAt, а також list зі значенням
   * "default" якщо в partialContact немає такої властивості.
   */

  function createContact(partialContact) {
    return {
      id: generatedId(),
      createdAt: new Date(),
      list: 'default',
      ...partialContact,
    };
  }

  console.log(
    createContact({
      name: 'Mango',
      email: 'mango@mail.com',
      list: 'friends',
    }),
  );

  console.log(
    createContact({
      name: 'Poly',
      email: 'poly@hotmail.com',
    }),
  );

  function generatedId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
console.log('---------------Example_05------------------');
{
  /**Oперація Rest
   *
   * Напиши функцію transformUsername(user) так, щоб вона порвертала новий об'єкт
   * із властивістю fullName, замість firstName i lastName.
   */

  function transformUsername({ firstName, lastName, ...props }) {
    return {
      fullName: `${firstName} ${lastName}`,
      ...props,
    };
  }

  console.log(
    transformUsername({
      id: 1,
      firstName: 'Jacob',
      lastName: 'Mercer',
      email: 'j.mercer@mail.com',
      friendCount: 40,
    }),
  );

  console.log(
    transformUsername({
      id: 2,
      firstName: 'Adrian',
      lastName: 'Cross',
      email: 'a.cross@hotmail.com',
      friendCount: 20,
    }),
  );
}
