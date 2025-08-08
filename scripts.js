/* scripts.js - luxury store logic (rendering + modal order form) */

/* === PRODUCTS DATA ===
   each category has 10 items (you can replace placeholders by real images/description)
*/
const productsDB = {
  fivem: [
    {name:'خزنه الاسلحه فايف ام',desc:'خزنه مليئه بل اسلحه المميزه',price:50,image:'https://media.discordapp.net/attachments/1222409323909615706/1403048437234270300/Screenshot_2025-05-15_084157.png?ex=6896caee&is=6895796e&hm=ef897362c7973baec8e1884db1a35a28a0c13ca4c068fbbb778b25959bd706b1&=&format=webp&quality=lossless'},
    {name:'بحث الاسلحه',desc:'تفتح لك متجر بي اسم الايتم الذي وضعته',price:12,image:'https://media.discordapp.net/attachments/1222409323909615706/1403050027147857991/Screenshot_2025-08-07_091944.png?ex=6896cc69&is=68957ae9&hm=0824c41d83435ec67fe0eb15ede5838c9bbb94aa57bfeabec01d5f82dbfd63a7&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'}
  ],
  subscriptions: [
    {name:'اشتراك نيتفليكس مدى الحياه',desc:'تابع مسلسلك المفضل في اشتراك مدى الحياه بجوده رائعه',price:35,image:'https://arabhardware.net/storage/uploads/2021-07/netflexmain60f0e6f2b818e.jpg'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'}
  ],
  discord: [
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'}
  ],
  websites: [
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'}
  ],
  designs: [
    {name:'بكج 60 لعبه محاكي ',desc:'افضل العاب المحكاه 60 لعبه',price:35,image:'https://media.discordapp.net/attachments/1222409323909615706/1403381282821378058/Screenshot_2025-08-08_071554.png?ex=6897582b&is=689606ab&hm=5fabc2047979a9aee8b3cd42a711c6802fc972f450791a1a5bbd9760f8bd948a&=&format=webp&quality=lossless'},
    {name:'بكج 40 لعبه رعب',desc:'افضل العاب رعب 40 لعبه',price:35,image:'https://media.discordapp.net/attachments/1222409323909615706/1403383977850572810/Screenshot_2025-08-08_072635.png?ex=68975aad&is=6896092d&hm=fdce2734785ac6e54274b3b81abbba1e777b47241a8df5f629a0a9b5259db731&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'},
    {name:'قريبا',desc:'قريبا',price:0,image:'https://media.discordapp.net/attachments/1222409323909615706/1403373044772110366/Screenshot_2025-08-08_064317.png?ex=6897507f&is=6895feff&hm=8fb94297355b655621cec38ec7d650cc2c1b9c8ce9c072ab0f07e7c928c70e2b&=&format=webp&quality=lossless'}
  ]
};

/* === RENDERING FUNCTIONS === */
function productCard(product){
  return `
    <div class="product">
      <div class="thumb"><img src="${product.image}" alt="${escapeHtml(product.name)}"></div>
      <h3>${escapeHtml(product.name)}</h3>
      <p>${escapeHtml(product.desc)}</p>
      <div class="price-row">
        <div class="price">${product.price} ر.س</div>
        <button class="order-btn" data-product="${escapeHtml(product.name)}">طلب</button>
      </div>
    </div>
  `;
}

function renderFeaturedProducts(){
  const container = document.getElementById('featured-products');
  if(!container) return;
  container.innerHTML = '';
  // take first two from each category
  Object.keys(productsDB).forEach(cat=>{
    productsDB[cat].slice(0,2).forEach(p=>{
      const wrapper = document.createElement('div');
      wrapper.className = 'product';
      wrapper.innerHTML = productCard(p);
      container.appendChild(wrapper);
    });
  });
  attachOrderListeners();
}

function renderProducts(category){
  // set active tab visuals (if on products page)
  document.querySelectorAll('.tab').forEach(t=> t.classList.remove('active'));
  const activeTab = document.querySelector(`.tab[data-cat="${category}"]`);
  if(activeTab) activeTab.classList.add('active');

  const section = document.getElementById('products-section') || document.getElementById('products');
  if(!section) return;
  section.innerHTML = '';

  const list = productsDB[category] || [];
  list.forEach(p=>{
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <div class="thumb"><img src="${p.image}" alt="${escapeHtml(p.name)}"></div>
      <h3>${escapeHtml(p.name)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="price-row">
        <div class="price">${p.price} ر.س</div>
        <button class="order-btn" data-product="${escapeHtml(p.name)}">طلب</button>
      </div>
    `;
    section.appendChild(div);
  });
  attachOrderListeners();
  // scroll to top of products
  section.scrollIntoView({behavior:'smooth'});
}

/* attach click listeners to order buttons */
function attachOrderListeners(){
  document.querySelectorAll('.order-btn').forEach(btn=>{
    btn.removeEventListener('click', orderClickHandler);
    btn.addEventListener('click', orderClickHandler);
  });
}

/* order click handler */
function orderClickHandler(e){
  const name = e.currentTarget.getAttribute('data-product');
  openOrderModal(name);
}

/* open modal and fill hidden input */
function openOrderModal(productName){
  const overlay = document.getElementById('order-overlay');
  const modal = document.getElementById('order-popup');
  const hidden = document.getElementById('hidden-product');
  if(!overlay || !modal || !hidden) return;
  hidden.value = productName;
  overlay.classList.add('active');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden','false');
}

/* close modal */
function closeModal(){
  const overlay = document.getElementById('order-overlay');
  const modal = document.getElementById('order-popup');
  if(overlay) overlay.classList.remove('active');
  if(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden','true');
    const form = modal.querySelector('form');
    if(form) form.reset();
  }
}

/* utility: escape html (small) */
function escapeHtml(text){
  return text.replace(/[&<>"']/g, function(m){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

/* init modal close listener */
document.addEventListener('click', function(e){
  if(e.target && e.target.id === 'order-overlay') closeModal();
  if(e.target && e.target.id === 'modal-close') closeModal();
});

/* on products page: tabs */
document.addEventListener('DOMContentLoaded', function(){
  // if tabs exist, hook
  document.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click', function(){
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      this.classList.add('active');
      renderProducts(this.dataset.cat);
    });
  });

  // If products.html opened with hash = category, or clicked quick link
  const catFromHash = location.hash ? location.hash.replace('#','') : null;
  if(document.getElementById('products-section')){
    const defaultCat = catFromHash || 'fivem';
    // set active tab if present
    const tabBtn = document.querySelector(`.tab[data-cat="${defaultCat}"]`);
    if(tabBtn) tabBtn.classList.add('active');
    renderProducts(defaultCat);
  }

  // Attach close button listener
  const modalClose = document.getElementById('modal-close');
  if(modalClose) modalClose.addEventListener('click', closeModal);
});

// تفعيل نافذة الطلب
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const productName = e.target.getAttribute('data-product');
    document.getElementById('hidden-product').value = productName;

    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.order-modal').classList.add('active');
  });
});

// إغلاق النافذة عند الضغط على الخلفية أو زر الإغلاق
document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('active');
  document.querySelector('.order-modal').classList.remove('active');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('active');
  document.querySelector('.order-modal').classList.remove('active');
});

