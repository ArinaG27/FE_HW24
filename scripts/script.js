const container = document.querySelector('.container');
let id_num = 1;

const request = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => render(json))
  }
  
  const render = ({ title, body }) => {
    container.innerText = '';
    const card = document.createElement('div');
    const titleElem = document.createElement('p');
    const bodyElem = document.createElement('p');
    
  
    titleElem.innerText = `Title: ${title}`;
    bodyElem.innerText = `Body: ${body}`;
    
    card.classList.add('card');
  
    card.append(titleElem, bodyElem);
    container.append(card);
  }
  
  request(id_num);
  
  const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');
  
  left_btn.addEventListener('click', () => {
      if(id_num === 1) {
        id_num = 101
      }
    
      request(--id_num)
    })
    
    right_btn.addEventListener('click', () => {
      if(id_num === 100) {
        id_num = 0
      }
    
      request(++id_num)
    });