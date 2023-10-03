document.addEventListener('astro:page-load', () => {
  /*========= Slider =========*/
  const wrapper = document.querySelector('[data-tech-wrapper]');
  let copy = document.querySelector('.tech-card')?.cloneNode(true);
  wrapper.append(copy);

  const modal = document.querySelector('[data-tech-modal]');
  const stop = document.querySelector('[data-tech-stop]');

  wrapper.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    modal.classList.add('flex');
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('flex');
    modal.classList.toggle('hidden');
  });
  
  stop.addEventListener('click', (e) => e.stopPropagation());
  
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('flex');
      modal.classList.toggle('hidden');
    } 
  });

  const projecttitle = document.querySelector('[project-title]');

  let array = Array.from(projecttitle.children);

 
  array.forEach((element, index) => {
    element.addEventListener('mouseover', () => {
      var projectimage = document.querySelector('[project-title] img[id="' + index + '"]');
      projectimage.classList.toggle('hidden');
      projectimage.classList.add('visible');
    })

    element.addEventListener('mouseout', () => {
      var projectimage = document.querySelector('[project-title] img[id="' + index + '"]');
      projectimage.classList.toggle('visible');
      projectimage.classList.add('hidden');
    })
  })
});

/*========= Email JS =========*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_q3qppdc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.textContent = 'Send Email';
      alert(JSON.stringify(err));
    });
});

