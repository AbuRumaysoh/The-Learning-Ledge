// Small demo script: reads the student's profile from localStorage.
const user = JSON.parse(localStorage.getItem('learningLedgeUser') || 'null');

if (!user) {
  location.href = 'login.html';
} else {
  const name = user.name || 'Scholar';
  document.getElementById('studentName').textContent = name;
  const avatar = document.getElementById('avatar');

  if (user.photo) {
    avatar.innerHTML = '<img src="' + user.photo + '" alt="Profile picture" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
  } else {
    avatar.textContent = name.charAt(0).toUpperCase();
  }
}

function notify(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.style.display = 'block';
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.style.display = 'none', 1800);
}

document.getElementById('logout').addEventListener('click', () => {
  location.href = 'signout.html';
});
