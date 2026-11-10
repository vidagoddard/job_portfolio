document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.project').forEach(project=>{project.hidden=filter!=='all'&&!project.dataset.category.split(' ').includes(filter);if(!project.hidden)count++;});document.getElementById('filter-status').textContent=`${count} project${count===1?'':'s'}`;}));


// Content stays visible without JavaScript or when reduced motion is preferred.
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');revealObserver.unobserve(entry.target);}});},{threshold:.12});
 document.querySelectorAll('[data-reveal]').forEach(card=>{card.classList.add('reveal-pending');revealObserver.observe(card);});
}
