document.addEventListener('DOMContentLoaded', () => {
    // existing initialization (if any) can stay here
    // detect background image brightness and toggle body class
    try {
        const computedBg = getComputedStyle(document.body).backgroundImage;
        const urlMatch = computedBg && computedBg.match(/url\(["']?(.*?)["']?\)/);
        const imgUrl = urlMatch ? urlMatch[1] : null;

        if (!imgUrl) {
            // no background image -> treat as light by default
            document.body.classList.add('bg-light');
            return;
        }

        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imgUrl;

        img.onload = () => {
            // sample scaled down to small canvas for performance
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const w = 100, h = 100;
            canvas.width = w;
            canvas.height = h;
            // draw image covering canvas (preserve aspect by cover)
            const ratio = Math.max(w / img.width, h / img.height);
            const sw = w / ratio, sh = h / ratio;
            const sx = (img.width - sw) / 2, sy = (img.height - sh) / 2;
            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);

            try {
                const data = ctx.getImageData(0, 0, w, h).data;
                let total = 0;
                for (let i = 0; i < data.length; i += 4) {
                    // relative luminance formula
                    const r = data[i], g = data[i + 1], b = data[i + 2];
                    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                    total += lum;
                }
                const avg = total / (w * h);
                // threshold ~128 (0-255)
                if (avg < 130) {
                    document.body.classList.add('bg-dark');
                } else {
                    document.body.classList.add('bg-light');
                }
            } catch (err) {
                // canvas might be tainted by CORS; fallback to assume dark image
                document.body.classList.add('bg-dark');
            }
        };

        img.onerror = () => {
            // couldn't load image (CORS/404) -> fallback to light
            document.body.classList.add('bg-light');
        };
    } catch (e) {
        document.body.classList.add('bg-light');
    }

    // other init code from previous inline script (clock etc.) can go here

    // --- new code: hide navbar and reveal when cursor at top ---
    (function() {
        const SHOW_THRESHOLD_PX = 6;    // show when cursor is within this many px from top
        const HIDE_DELAY_MS = 800;      // delay before hiding after leaving top area
        const body = document.body;
        const navbar = document.getElementById('navbar');
        let hideTimer = null;

        // start hidden (CSS default hides it)
        body.classList.remove('nav-visible');

        function showNavbar() {
            if (!body.classList.contains('nav-visible')) {
                body.classList.add('nav-visible');
            }
            if (hideTimer) {
                clearTimeout(hideTimer);
                hideTimer = null;
            }
        }

        function scheduleHideNavbar() {
            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                // only hide if mouse is not over navbar and not at top
                const overNavbar = navbar && navbar.matches(':hover');
                if (!overNavbar) body.classList.remove('nav-visible');
            }, HIDE_DELAY_MS);
        }

        // mouse move watcher
        document.addEventListener('mousemove', (e) => {
            if (e.clientY <= SHOW_THRESHOLD_PX) {
                showNavbar();
                return;
            }
            // if mouse moves away from top, schedule hiding
            scheduleHideNavbar();
        }, { passive: true });

        // keep visible while hovering navbar
        if (navbar) {
            navbar.addEventListener('mouseenter', showNavbar);
            navbar.addEventListener('mouseleave', scheduleHideNavbar);
        }

        // show on touch near top (mobile)
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches && e.touches[0];
            if (touch && touch.clientY <= SHOW_THRESHOLD_PX) showNavbar();
        }, { passive: true });
    })();

    // App handling
    const apps = {
        netflix: {
            url: 'https://m.netflix.com',
            icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png',
            title: 'Netflix'
        },
        youtube: {
            url: 'https://m.youtube.com',
            icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png',
            title: 'YouTube'
        }
    };

    const iframeContainer = document.querySelector('.iframe-container');
    const iframe = document.querySelector('.iframe-container iframe');
    
    // Handle tile clicks
    document.querySelectorAll('.app-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const appName = tile.dataset.app;
            const app = apps[appName];
            if (app) {
                iframe.src = app.url;
                iframeContainer.classList.add('active');
                
                // Add to navbar if not already present
                addTrayItem(`trayItem-${appName}`, app.title, `Open ${app.title}`);
            }
        });
    });

    // Handle navbar item clicks
    document.addEventListener('click', (e) => {
        if (e.target.closest('.tray-item')) {
            const appName = e.target.closest('.tray-item').id.replace('trayItem-', '');
            const app = apps[appName];
            if (app) {
                iframe.src = app.url;
                iframeContainer.classList.add('active');
            }
        }
    });

    // Close iframe when clicking home button
    document.getElementById('homeBtn').addEventListener('click', () => {
        iframeContainer.classList.remove('active');
        iframe.src = '';
    });
});