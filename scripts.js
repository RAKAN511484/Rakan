const products = [
  { name: 'نظام حجوزات احترافي', desc: 'نظام للمطاعم والصالونات', price: 499, image: 'https://via.placeholder.com/300x200?text=منتج+1' },
  { name: 'موقع عقارات متكامل', desc: 'منصة لبيع وتأجير العقارات', price: 899, image: 'https://via.placeholder.com/300x200?text=منتج+2' },
  { name: 'متجر إلكتروني حديث', desc: 'واجهة متجر احترافية', price: 699, image: 'https://via.placeholder.com/300x200?text=منتج+3' },
  { name: 'نظام إدارة طلاب', desc: 'لوحة تحكم لبيانات الطلاب', price: 399, image: 'https://via.placeholder.com/300x200?text=منتج+4' },
  { name: 'موقع شخصي ديناميكي', desc: 'سيرة ذاتية تفاعلية', price: 299, image: 'https://via.placeholder.com/300x200?text=منتج+5' },
  { name: 'نظام فواتير', desc: 'تتبع الفواتير وتصدير PDF', price: 349, image: 'https://via.placeholder.com/300x200?text=منتج+6' },
  { name: 'نظام دعم فني', desc: 'إدارة التذاكر والدعم', price: 459, image: 'https://via.placeholder.com/300x200?text=منتج+7' }
];

const productsContainer = document.getElementById('products');
const modal = document.getElementById('orderModal');
const orderForm = document.getElementById('orderForm');
const productNameField = document.getElementById('productName');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <div class="price">${product.price} ريال</div>
    <button onclick="openOrderModal('${product.name}')">طلب</button>
  `;
  productsContainer.appendChild(card);
});

function openOrderModal(productName) {
  modal.classList.remove('hidden');
  productNameField.value = productName;
}

orderForm.onsubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('customerName').value;
  const contact = document.getElementById('customerContact').value;
  const product = productNameField.value;

  alert(`شكراً لطلبك للمنتج "${product}" سيتم التواصل معك على "${contact}".\\nملاحظة: لم يتم الدفع حتى الآن، ولكن سيتم التواصل معك لإتمام الدفع وتسليم المنتج.`);

  // إرسال البيانات إلى بريدك (عبر formsubmit)
  fetch("https://formsubmit.co/ajax/altybyr594@gmail.com", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      المنتج: product,
      الاسم: name,
      التواصل: contact
    })
  });

  modal.classList.add('hidden');
  orderForm.reset();
};
