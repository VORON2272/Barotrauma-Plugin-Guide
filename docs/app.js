// Tab switching logic
function switchTab(btn, tabId) {
  const container = btn.closest('.tabs-container');
  if (!container) return;

  const header = container.querySelector('.tabs-header');
  const allBtns = header.querySelectorAll('.tab-btn');
  allBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const allContents = container.querySelectorAll('.tab-content');
  allContents.forEach(c => c.classList.remove('active'));

  const target = container.querySelector(`#${tabId}`);
  if (target) {
    target.classList.add('active');
  }
}

// Copy Code to Clipboard
function copyCode(btn) {
  const wrapper = btn.closest('.code-wrapper');
  if (!wrapper) return;

  const codeEl = wrapper.querySelector('pre code');
  if (!codeEl) return;

  const text = codeEl.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Скопировано!';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Не удалось скопировать код', err);
  });
}

// Interactive Checklist Logic
function updateChecklistProgress() {
  const checklist = document.getElementById('publishChecklist');
  if (!checklist) return;

  const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;
  let checked = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) checked++;
  });

  const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
  const percentEl = document.getElementById('progressPercent');
  const fillEl = document.getElementById('progressFill');

  if (percentEl) percentEl.innerText = `${percent}%`;
  if (fillEl) fillEl.style.width = `${percent}%`;
}

// Real-time Search Logic
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('docSearch');
  const contentBlocks = document.querySelectorAll('.content-block, .example-card');
  const navLinks = document.querySelectorAll('.nav-link');

  if (searchInput) {
    // Keyboard shortcut: Ctrl+K or / to focus search
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.blur();
        resetSearch();
      }
    });

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      if (!query) {
        resetSearch();
        return;
      }

      contentBlocks.forEach(block => {
        const text = block.innerText.toLowerCase();
        if (text.includes(query)) {
          block.style.display = '';
          block.style.opacity = '1';
        } else {
          block.style.display = 'none';
          block.style.opacity = '0.3';
        }
      });
    });

    function resetSearch() {
      contentBlocks.forEach(block => {
        block.style.display = '';
        block.style.opacity = '1';
      });
    }
  }

  // ScrollSpy for Sidebar
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    contentBlocks.forEach(block => {
      const top = block.offsetTop - 120;
      const height = block.offsetHeight;
      const id = block.getAttribute('id');

      if (id && scrollY >= top && scrollY < top + height) {
        current = id;
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Init checklist
  updateChecklistProgress();
});
