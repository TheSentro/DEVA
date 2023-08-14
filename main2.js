const allHeaders = document.querySelectorAll('.accordion-heading');

allHeaders.forEach(header =>{
  header.addEventListener('click', ()=> {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    if (accordionContent.style.display === 'none'){
      accordionContent.style.display='block';}
    else {
      accordionContent.style.display='none';
    }

  });
});

function openNav(){
  document.getElementById('myTopNav').style.display = 'block';

  document.getElementById('devapar').style.display = 'none';
}

function closeNav(){
  document.getElementById('myTopNav').style.display = 'none';
  document.getElementById('devapar').style.display = 'flex';
}

