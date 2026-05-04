// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

function showMsg(el, type, text) {
  el.className = 'form-msg ' + type;
  el.textContent = text;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 6000);
}

async function submitInquiry(fields, btnId, msgId) {
  const btn = document.getElementById(btnId);
  const msg = document.getElementById(msgId);
  for (const [k, v] of Object.entries(fields)) {
    if (!v && ['name','email','phone'].includes(k)) {
      showMsg(msg, 'error', 'Please fill in your name, email and phone.'); return;
    }
  }
  btn.disabled = true; btn.textContent = 'Sending...';
  try {
    const res = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) });
    const result = await res.json();
    showMsg(msg, result.success ? 'success' : 'error', result.message);
    if (result.success) { btn.textContent = '✓ Inquiry Sent!'; }
    else { btn.disabled = false; btn.textContent = 'Submit Inquiry'; }
  } catch (e) {
    showMsg(msg, 'error', 'Something went wrong. Please try again.');
    btn.disabled = false; btn.textContent = 'Submit Inquiry';
  }
}
