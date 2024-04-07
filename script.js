let data = [34, 67, 49, 20, 23, 56, 90, 1000, 48, 54, 50, 10, 99, 12, 392, 231, 4, 22, 100, 0];

const zor = document.querySelector('body');

  data.map(num => {
    const sui = document.createElement('div');
    sui.textContent = num;
    if (num > 50) {
      sui.classList.add('kizil');
    } else {
      sui.classList.add('yashil');
    }
    zor.appendChild(sui);
  });


