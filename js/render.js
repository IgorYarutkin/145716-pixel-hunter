const mainElement = document.getElementById('main');

const select = (element) => {

  mainElement.innerHTML = '';
  mainElement.appendChild(element);

};

export default select;
