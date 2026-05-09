const SLIDES = [
  '00-tytul.html',
  '01-spistresci.html',
  '02-wstep.html',
  '03-pamiec.html',
  '04-kompilacjav8.html',
  '05-liczby.html',
  '06-tablice.html',
  '07-setandarray.html',
  '08-mapandobject.html',
  '09-numberarrays.html',
  '10-hiddenclasses.html',
  '11-weakmap.html',
  '12-clone.html',
  '13-deopt.html',
  '14-arraybuffer.html',
  '15-objectpool.html',
  '16-inlining.html',
  '17-trycatch.html',
  '18-profiling.html',
  '19-workers.html',
  '20-podsumowanie.html',
];

const TOTAL = SLIDES.length;

const FIRST_FILE = SLIDES[0];
const LAST_FILE  = SLIDES[SLIDES.length - 1];

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

  // Przyciski skrótów: początek, slajd 07, koniec
  const bottombar = document.getElementById('bottombar');

  function makeShortcut(label, href, disabled) {
    const a = document.createElement('a');
    a.className = 'nav-btn nav-shortcut' + (disabled ? ' disabled' : '');
    a.textContent = label;
    if (!disabled) a.href = href;
    return a;
  }

  const btnFirst = makeShortcut('⏮ Początek', FIRST_FILE, currentIndex === 0);
  const btnLast  = makeShortcut('Koniec ⏭',  LAST_FILE,  currentIndex === TOTAL - 1);

  bottombar.insertBefore(btnFirst, btnPrev);
  bottombar.appendChild(btnLast);

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
