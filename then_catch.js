const API_URL = "https://jsonplaceholder.typicode.com/posts";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    return response.json();
  })
  .then((posts) => {
    console.log(`Знайдено ${posts.length} постів.`);
    console.log("Перший пост:", posts[0].title);
  })
  .catch((error) => {
    console.error("Не вдалось завантажити пости:", error.message);
  })
  .finally(() => {
    console.log("Запит завершено.");
  });

fetch("https://jsonplaceholder.typicode.com/postss")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    return response.json();
  })
  .then((posts) => {
    console.log(`Знайдено ${posts.length} постів.`);
  })
  .catch((error) => {
    console.error("Не вдалось завантажити пости:", error.message);
  })
  .finally(() => {
    console.log("Перевірка помилки завершена.");
  });
