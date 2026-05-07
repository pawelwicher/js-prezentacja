const SLIDES = [
  '01-wstep.html',
  '02-pamiec.html',
  '03-v8.html',
  '04-liczby.html',
  '05-deduplikacja.html',
];

const TOTAL = SLIDES.length;

function initNav(currentIndex) {
  const counter = document.getElementById('counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const dotsEl  = document.getElementById('dots');

  counter.textContent = `${currentIndex + 1} / ${TOTAL}`;

  const prevFile = currentIndex > 0 ? SLIDES[currentIndex - 1] : null;
  const nextFile = currentIndex < TOTAL - 1 ? SLIDES[currentIndex + 1] : null;

  if (prevFile) {
    btnPrev.href = prevFile;
  } else {
    btnPrev.classList.add('disabled');
  }

  if (nextFile) {
    btnNext.href = nextFile;
  } else {
    btnNext.classList.add('disabled');
  }

  SLIDES.forEach((file, i) => {
    const d = document.createElement('a');
    d.className = 'dot' + (i === currentIndex ? ' active' : '');
    d.href = file;
    dotsEl.appendChild(d);
  });

  document.addEventListener('keydown', e => {
    if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && nextFile) {
      window.location.href = nextFile;
    }
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && prevFile) {
      window.location.href = prevFile;
    }
  });
}
