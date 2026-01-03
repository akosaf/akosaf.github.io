// Only skip when browsing akosaf.github.io exactly
const SKIP_HOSTNAMES = ['akosaf.github.io', 'www.akosaf.github.io'];
if (SKIP_HOSTNAMES.includes(location.hostname)) {
  console.log('AkOS Navbar extension: skipping injection on', location.hostname);
} else {
  (function () {
    function createNavbar() {
      if (document.getElementById('akos-navbar')) return;
      const nav = document.createElement('div');
      nav.id = 'akos-navbar';
      nav.innerHTML = `
        <div class="akos-left">
          <button id="homeBtn" class="btn btn-outline-primary me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg>
            <i class="bi bi-house-fill"></i>
          </button></div>
        <div class="akos-center" id="trayApps"></div>
        <div class="akos-right" id="trayRight">
          <div id="sysDate"><span id="currentDate"></span></div>
          <div id="sysTime"><span id="currentTime"></span></div>
        </div>
      `;
      document.documentElement.prepend(nav);

      // clock
      function updateClock() {
        const now = new Date();
        const t = now.toLocaleTimeString();
        const d = now.toLocaleDateString();
        const ct = document.getElementById('currentTime');
        const cd = document.getElementById('currentDate');
        if (ct) ct.textContent = t;
        if (cd) cd.textContent = d;
      }
      updateClock();
      setInterval(updateClock, 1000);

      // home button -> go to your hosted index
      nav.querySelector('#homeBtn').addEventListener('click', () => {
        window.location.href = 'https://akosaf.github.io/MediaCenter/index.html';
      });

      // show/hide logic
      (function () {
        const SHOW_PX = 6;
        const HIDE_DELAY = 800;
        let hideTimer = null;
        function show() {
          document.body.classList.add('nav-visible');
          nav.classList.add('nav-visible');
          if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
        }
        function scheduleHide() {
          if (hideTimer) clearTimeout(hideTimer);
          hideTimer = setTimeout(() => {
            if (!nav.matches(':hover')) {
              document.body.classList.remove('nav-visible');
              nav.classList.remove('nav-visible');
            }
          }, HIDE_DELAY);
        }
        document.addEventListener('mousemove', (e) => {
          if (e.clientY <= SHOW_PX) { show(); return; }
          scheduleHide();
        }, { passive: true });
        nav.addEventListener('mouseenter', show);
        nav.addEventListener('mouseleave', scheduleHide);
        document.addEventListener('touchstart', (e) => {
          const t = e.touches && e.touches[0];
          if (t && t.clientY <= SHOW_PX) show();
        }, { passive: true });
        // start hidden
        document.body.classList.remove('nav-visible');
        nav.classList.remove('nav-visible');
      })();

      // brightness detection (try background-image, fallback to background-color)
      async function detectBrightness() {
        function setTheme(isDark) {
          nav.classList.toggle('bg-dark', isDark);
          nav.classList.toggle('bg-light', !isDark);
        }
        const cs = getComputedStyle(document.documentElement);
        const bodyCs = getComputedStyle(document.body);
        const bgImg = cs.backgroundImage && cs.backgroundImage !== 'none' ? cs.backgroundImage : bodyCs.backgroundImage;
        const bgColor = cs.backgroundColor && cs.backgroundColor !== 'transparent' ? cs.backgroundColor : bodyCs.backgroundColor;

        const m = bgImg && bgImg.match(/url\((["']?)(.*?)\1\)/);
        if (m && m[2]) {
          try {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = m[2];
            await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
            const w = 40, h = 40;
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            const ctx = c.getContext('2d');
            const ratio = Math.max(w / img.width, h / img.height);
            const sw = w / ratio, sh = h / ratio;
            const sx = Math.max(0, (img.width - sw) / 2), sy = Math.max(0, (img.height - sh) / 2);
            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;
            let total = 0;
            for (let i = 0; i < data.length; i += 4) {
              const r = data[i], g = data[i+1], b = data[i+2];
              total += 0.2126*r + 0.7152*g + 0.0722*b;
            }
            const avg = total / (w*h);
            setTheme(avg < 130);
            return;
          } catch (e) {
            // sampling failed (CORS) -> fallback to bgColor
          }
        }

        if (bgColor) {
          const rgba = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgba) {
            const r = +rgba[1], g = +rgba[2], b = +rgba[3];
            const lum = 0.2126*r + 0.7152*g + 0.0722*b;
            setTheme(lum < 130);
            return;
          }
        }
        // default safe choice: dark theme
        setTheme(true);
      }

      detectBrightness();
      const mo = new MutationObserver(() => detectBrightness());
      mo.observe(document.documentElement || document.body, { attributes: true, childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createNavbar);
    } else {
      createNavbar();
    }
  })();
}