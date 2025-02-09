'use strict';


// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug,
//  створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.



// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
    // Перетворюємо рядок у нижній регістр
    let slug = title.toLowerCase();
    // Розділяємо слова за пробілами та об'єднуємо їх тире
    slug = slug.split(' ').join('-');
    return slug;
}

  // Перевірка роботи функції
  console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
  console.log(slugify("English for developer")); // "english-for-developer"
  console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
  