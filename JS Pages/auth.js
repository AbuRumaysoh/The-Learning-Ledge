const form=document.querySelector('#authForm');
const message=document.querySelector('#message');
const isSignup=form?.dataset.mode==='signup';

document.querySelectorAll('.toggle-pass').forEach(btn=>btn.addEventListener('click',()=>{
  const input=document.getElementById(btn.dataset.target);
  input.type=input.type==='password'?'text':'password';
  btn.textContent=input.type==='password'?'Show':'Hide';
}));

form?.addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('email').value.trim();
  const password=document.getElementById('password').value;
  if(!email||!password){show('Please complete the required fields.');return}
  if(isSignup){
    const name=document.getElementById('name').value.trim()||'Scholar';
    const level=document.getElementById('level')?.value.trim()||''; localStorage.setItem('learningLedgeUser',JSON.stringify({name,email,level}));
    show('Account created. Opening your dashboard…');
  }else{
    const saved=JSON.parse(localStorage.getItem('learningLedgeUser')||'null');
    localStorage.setItem('learningLedgeUser',JSON.stringify({name:saved?.name||'Scholar',email}));
    show('Sign in successful. Opening your dashboard…');
  }
  setTimeout(()=>location.href='dashboard.html',450);
});
function show(text){message.textContent=text;message.style.display='block'}
