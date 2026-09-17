(() => {
  const FRONT='https://raw.githubusercontent.com/ahmadhassan750/ahmad-t-shirts/main/assets/product-front.webp';
  const BACK='https://raw.githubusercontent.com/ahmadhassan750/ahmad-t-shirts/main/assets/product-back.webp';
  const WA='https://wa.me/923341903823?text=Assalam-o-Alaikum%20Ahmad%20T-Shirts%2C%20I%20want%20to%20place%20an%20order.';
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const waLogo='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3.2A12.8 12.8 0 0 0 5 22.5L3.2 29l6.7-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.1c-2 0-4-.5-5.7-1.6l-.4-.2-4 1.1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.3Zm5.8-7.9c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2.1-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.7 2 .8 2.7.9 3.3.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg>';
  const socialHTML='<div class="socials footer-socials" aria-label="Ahmad T-Shirts social media"><a href="https://www.facebook.com/AhmadTshirts" target="_blank" rel="noopener" aria-label="Facebook"><img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook"></a><a href="https://www.instagram.com/ahmadtshirts1/" target="_blank" rel="noopener" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram"></a><a href="https://www.tiktok.com/@ahmadtshirts" target="_blank" rel="noopener" aria-label="TikTok"><img src="https://cdn.simpleicons.org/tiktok/111111" alt="TikTok"></a><a href="https://www.youtube.com/@ahmadtshirt" target="_blank" rel="noopener" aria-label="YouTube"><img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube"></a></div>';
  function init(){
    document.querySelectorAll('img').forEach((img,i)=>{img.addEventListener('error',()=>{if(img.dataset.fallback)return;img.dataset.fallback='1';img.src=(i%2?BACK:FRONT)},{once:true});img.classList.add('motion-media')});
    const selectors='.card,.category,.productCard,.product-card,.box,.content section,.hero,.wrap,.footgrid>div';
    document.querySelectorAll(selectors).forEach((el,i)=>{el.classList.add('motion-card');el.style.setProperty('--motion-delay',`${Math.min(i*55,330)}ms`)});
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08});
    document.querySelectorAll('.motion-card,.motion-media').forEach(el=>io.observe(el));
    if(!reduced())document.querySelectorAll('.motion-card').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(1100px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateY(-5px) translateZ(8px)`});el.addEventListener('pointerleave',()=>el.classList.contains('is-visible')&&(el.style.transform=''))});
    if(!document.querySelector('footer .footer-socials')&&document.querySelector('footer'))document.querySelector('footer .footgrid')?.insertAdjacentHTML('afterend',socialHTML);
    document.querySelectorAll('.socials a').forEach(a=>{a.classList.add('social-3d');a.addEventListener('pointerenter',()=>{if(!reduced())a.classList.add('social-pop')});a.addEventListener('pointerleave',()=>a.classList.remove('social-pop'))});
    if(!document.querySelector('.whatsapp-float')){const a=document.createElement('a');a.className='whatsapp-float';a.href=WA;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Order on WhatsApp');a.innerHTML=`<span class="wa-logo">${waLogo}</span><span>ORDER ON WHATSAPP</span>`;document.body.appendChild(a)}
    document.querySelectorAll('a').forEach(a=>{if(/whatsapp/i.test(a.textContent||''))a.target='_blank'});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
