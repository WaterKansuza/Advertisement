/* ==========================================================================
   OpenSleep & WaterKansuza — Motion, SVG Demonstration & Latest APK Resolver
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.documentElement.classList.add('has-motion');
  }

  /* ------------------------------------------------------------------------
     1. Bilingual Switcher (VI / EN)
     ------------------------------------------------------------------------ */
  const STORAGE_KEY = 'opensleep_site_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'vi';
  if (currentLang !== 'vi' && currentLang !== 'en') currentLang = 'vi';

  let activeVariant = 'sonar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    const dict = (window.SITE_I18N && window.SITE_I18N[lang]) || {};

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-lang-opt]').forEach((el) => {
      el.setAttribute('data-lang-active', String(el.getAttribute('data-lang-opt') === lang));
    });

    // Sync active demo variant facts if on landing page
    if (document.getElementById('demo-signal-path')) {
      renderDemoVariant(activeVariant, false);
    }
  }

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
    });
  }

  /* ------------------------------------------------------------------------
     2. Self-Drawing SVG Demonstration & Variant Picker
     ------------------------------------------------------------------------ */
  const demoSection = document.getElementById('demonstration');
  const demoPath = document.getElementById('demo-signal-path');
  const variantButtons = document.querySelectorAll('.variant-btn[data-variant]');
  let demoHasEntered = false;

  function drawSignalPath(pathEl) {
    if (!pathEl || typeof pathEl.getTotalLength !== 'function') return;

    const length = pathEl.getTotalLength();
    if (prefersReducedMotion) {
      pathEl.style.transition = 'none';
      pathEl.style.strokeDasharray = 'none';
      pathEl.style.strokeDashoffset = '0';
      return;
    }

    pathEl.style.transition = 'none';
    pathEl.style.strokeDasharray = `${length}`;
    pathEl.style.strokeDashoffset = `${length}`;
    // Flush layout before starting the ~2s stroke draw transition
    pathEl.getBoundingClientRect();
    pathEl.style.transition = 'stroke-dashoffset 2000ms cubic-bezier(0.22, 1, 0.36, 1)';
    pathEl.style.strokeDashoffset = '0';
  }

  function renderDemoVariant(variantKey, shouldAnimate) {
    const variants = window.DEMO_VARIANTS;
    if (!variants || !variants[variantKey] || !demoPath) return;

    activeVariant = variantKey;
    const spec = variants[variantKey];
    const localized = spec[currentLang] || spec.vi;

    variantButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-variant') === variantKey));
    });

    const titleEl = document.getElementById('demo-panel-title');
    const scaleEl = document.getElementById('demo-panel-scale');
    if (titleEl) titleEl.textContent = localized.metaTitle;
    if (scaleEl) scaleEl.textContent = localized.metaScale;

    localized.facts.forEach((fact, idx) => {
      const labelEl = document.getElementById(`fact-${idx + 1}-label`);
      const valEl = document.getElementById(`fact-${idx + 1}-val`);
      if (labelEl) labelEl.textContent = fact.label;
      if (valEl) valEl.textContent = fact.value;
    });

    demoPath.setAttribute('d', spec.d);
    demoPath.setAttribute('stroke-width', spec.strokeWidth);

    if (shouldAnimate) {
      drawSignalPath(demoPath);
    } else if (!prefersReducedMotion && !demoHasEntered) {
      const length = demoPath.getTotalLength();
      demoPath.style.transition = 'none';
      demoPath.style.strokeDasharray = `${length}`;
      demoPath.style.strokeDashoffset = `${length}`;
    }
  }

  if (variantButtons.length && demoPath) {
    variantButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextVariant = btn.getAttribute('data-variant');
        if (nextVariant) {
          demoHasEntered = true;
          renderDemoVariant(nextVariant, true);
        }
      });
    });

    if (prefersReducedMotion) {
      demoHasEntered = true;
      renderDemoVariant(activeVariant, true);
    } else if (demoSection) {
      const demoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !demoHasEntered) {
              demoHasEntered = true;
              drawSignalPath(demoPath);
              demoObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      demoObserver.observe(demoSection);
    }
  }

  /* ------------------------------------------------------------------------
     3. One-Shot Entry Reveals (scoped under .has-motion)
     ------------------------------------------------------------------------ */
  const revealNodes = document.querySelectorAll('[data-reveal]');
  if (!prefersReducedMotion && revealNodes.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  }

  /* ------------------------------------------------------------------------
     4. Reversible Scroll-Bound Motion:
        - Travelling Product Cut-Out (fixed viewport keyframe path)
        - Hero Spread Wordmark (outward letter spread + downward sink)
     ------------------------------------------------------------------------ */
  const productEl = document.getElementById('travelling-product');
  const heroWordmark = document.querySelector('.wordmark-band[data-wordmark="hero"]');
  const heroChars = heroWordmark ? Array.from(heroWordmark.querySelectorAll('.wm-char')) : [];

  function clamp01(v) {
    return Math.max(0, Math.min(1, v));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Stops expressed in viewport percentages (x vw, y vh) so composition holds across sizes
  const DESKTOP_STOPS = [
    { p: 0.00, x: 75, y: 46, rot: -4,  scale: 1.00, opacity: 1.00 }, // Hero right composition
    { p: 0.24, x: 22, y: 70, rot:  5,  scale: 0.88, opacity: 1.00 }, // Argument left whitespace
    { p: 0.44, x: 83, y: 36, rot: -3,  scale: 0.78, opacity: 0.90 }, // Demonstration upper-right margin
    { p: 0.62, x: 88, y: 60, rot:  2,  scale: 0.68, opacity: 0.00 }  // Fade out entering Material / Measurements
  ];

  const MOBILE_STOPS = [
    { p: 0.00, x: 80, y: 54, rot: -3,  scale: 0.95, opacity: 0.92 },
    { p: 0.20, x: 84, y: 74, rot:  3,  scale: 0.82, opacity: 0.75 },
    { p: 0.36, x: 88, y: 82, rot:  0,  scale: 0.72, opacity: 0.00 }
  ];

  function evaluateStops(progress, stops) {
    if (progress <= stops[0].p) return stops[0];
    const last = stops[stops.length - 1];
    if (progress >= last.p) return last;

    for (let i = 0; i < stops.length - 1; i++) {
      const a = stops[i];
      const b = stops[i + 1];
      if (progress >= a.p && progress <= b.p) {
        const localT = clamp01((progress - a.p) / (b.p - a.p));
        const e = easeInOutCubic(localT);
        return {
          x: lerp(a.x, b.x, e),
          y: lerp(a.y, b.y, e),
          rot: lerp(a.rot, b.rot, e),
          scale: lerp(a.scale, b.scale, e),
          opacity: lerp(a.opacity, b.opacity, e)
        };
      }
    }
    return last;
  }

  let rafPending = false;

  function updateScrollChoreography() {
    rafPending = false;
    if (prefersReducedMotion) return;

    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pageProgress = clamp01(scrollY / maxScroll);

    // 4a. Travelling product cut-out
    if (productEl) {
      const stops = window.innerWidth <= 860 ? MOBILE_STOPS : DESKTOP_STOPS;
      const state = evaluateStops(pageProgress, stops);
      productEl.style.opacity = state.opacity.toFixed(4);
      productEl.style.visibility = state.opacity <= 0.005 ? 'hidden' : 'visible';
      productEl.style.transform =
        `translate3d(${state.x.toFixed(2)}vw, ${state.y.toFixed(2)}vh, 0) ` +
        `translate(-50%, -50%) rotate(${state.rot.toFixed(2)}deg) scale(${state.scale.toFixed(3)})`;
    }

    // 4b. Hero spread wordmark (reversible across first 700px of scroll; >100px outer travel)
    if (heroWordmark && heroChars.length) {
      const heroTravel = clamp01(scrollY / 700);
      const easedHero = easeInOutCubic(heroTravel);
      const centerIdx = (heroChars.length - 1) / 2;
      const maxSpreadPx = window.innerWidth <= 860 ? 14 : 36;
      const sinkPx = easedHero * 72;

      heroWordmark.style.transform = `translate3d(0, calc(0.18em + ${sinkPx.toFixed(1)}px), 0)`;

      heroChars.forEach((charEl, idx) => {
        const offset = (idx - centerIdx) * easedHero * maxSpreadPx;
        charEl.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0)`;
      });
    }
  }

  function onScrollOrResize() {
    if (prefersReducedMotion || rafPending) return;
    rafPending = true;
    window.requestAnimationFrame(updateScrollChoreography);
  }

  if (!prefersReducedMotion) {
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    updateScrollChoreography();
  }

  /* ------------------------------------------------------------------------
     5. Latest OpenSleep APK Release Resolver
     ------------------------------------------------------------------------ */
  function resolveLatestReleaseApk() {
    const links = document.querySelectorAll('[data-apk-download]');
    if (!links.length) return;

    fetch('https://api.github.com/repos/WaterKansuza/OpenSleep/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((release) => {
        if (!release || !Array.isArray(release.assets)) return;
        const apkAsset = release.assets.find(
          (asset) => typeof asset.name === 'string' && asset.name.toLowerCase().endsWith('.apk')
        );
        if (apkAsset && apkAsset.browser_download_url) {
          links.forEach((link) => {
            link.setAttribute('href', apkAsset.browser_download_url);
            link.setAttribute('download', apkAsset.name);
            link.setAttribute('title', `${apkAsset.name} (${release.tag_name || 'latest'})`);
          });
        }
      })
      .catch(() => {
        // Fallback href remains https://github.com/WaterKansuza/OpenSleep/releases/latest
      });
  }

  // Initialize language & release link resolver
  applyLanguage(currentLang);
  resolveLatestReleaseApk();
})();
