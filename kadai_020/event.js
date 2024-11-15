const btn =document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
  const text = document.getElementById('text');
  text.innerText = 'ボタンをクリックしました';
});