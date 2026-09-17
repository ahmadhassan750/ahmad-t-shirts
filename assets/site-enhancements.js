(() => {
  const FRONT='https://raw.githubusercontent.com/ahmadhassan750/ahmad-t-shirts/main/assets/product-front.webp';
  const BACK='https://raw.githubusercontent.com/ahmadhassan750/ahmad-t-shirts/main/assets/product-back.webp';
  const WA='https://wa.me/923341903823?text=Assalam-o-Alaikum%20Ahmad%20T-Shirts%2C%20I%20want%20to%20place%20an%20order.';
  function init(){
    document.querySelectorAll('img').forEach((img,i)=>{
      img.addEventListener('error',()=>{
        if(img.dataset.fallback) return;
        img.dataset.fallback='1'; img.src=(i%2?BACK:FRONT);
      },{once:true});
      img.classList.add('motion-media');
    });
    document.querySelectorAll('.card,.category,.productCard,.product-card,.box,.content section').forEach(el=>el.classList.add('motion-card'));
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08});
    document.querySelectorAll('.motion-card,.motion-media').forEach(el=>io.observe(el));
    document.querySelectorAll('.motion-card').forEach(el=>{
      el.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return; const r=el.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5; el.style.transform=`perspective(900px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-3px)`});
      el.addEventListener('pointerleave',()=>el.style.transform='');
    });
    if(!document.querySelector('.whatsapp-float')){
      const a=document.createElement('a'); a.className='whatsapp-float'; a.href=WA; a.target='_blank'; a.rel='noopener'; a.innerHTML='<span class="wa-icon">⌕</span><span>ORDER ON WHATSAPP</span>'; document.body.appendChild(a);
    }
    document.querySelectorAll('a').forEach(a=>{ if(/whatsapp/i.test(a.textContent||'')) a.target='_blank'; });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();