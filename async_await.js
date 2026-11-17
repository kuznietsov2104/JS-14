
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function loadPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const posts = await response.json();

    console.log(`Знайдено ${posts.length} постів.`);
    console.log('Перший пост:', posts[0].title);

  } catch (error) {
    console.error('Не вдалось завантажити пости:', error.message);

  } finally {
    console.log('Запит завершено.');
  }
}

loadPosts();


async function loadPostsWithError() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/postss'
    );

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const posts = await response.json();

    console.log(`Знайдено ${posts.length} постів.`);

  } catch (error) {
    console.error('Не вдалось завантажити пости:', error.message);

  } finally {
    console.log('Перевірка помилки завершена.');
  }
}

loadPostsWithError();