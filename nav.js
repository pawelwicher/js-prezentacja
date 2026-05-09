const SLIDES = [
  '00-tytul.html',
  '01-wstep.html',
  '02-teoria.html',
  '03-pamiec.html',
  '04-kompilacjav8.html',
  '05-liczby.html',
  '06-tablice.html',
  '07-przyklady.html',
  '08-setandarray.html',
  '09-mapandobject.html',
  '10-numberarrays.html',
  '11-hiddenclasses.html',
  '12-weakmap.html',
  '13-clone.html',
  '14-deopt.html',
  '15-arraybuffer.html',
  '16-objectpool.html',
  '17-podsumowanie.html',
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
    const slide = document.getElementById('slide');
    const atBottom = slide.scrollHeight - slide.scrollTop <= slide.clientHeight + 4;
    const atTop    = slide.scrollTop <= 4;

    if ((e.key === 'ArrowRight' || (e.key === 'ArrowDown' && atBottom)) && nextFile) {
      e.preventDefault();
      window.location.href = nextFile;
    }
    if ((e.key === 'ArrowLeft' || (e.key === 'ArrowUp' && atTop)) && prevFile) {
      e.preventDefault();
      window.location.href = prevFile;
    }
  });
}
