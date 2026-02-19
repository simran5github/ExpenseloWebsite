document.addEventListener('DOMContentLoaded', function () {
	const btn = document.getElementById('sidebarToggle');
	const body = document.body;
	const sidebar = document.getElementById('sidebar-drawer');
	const brandText = document.getElementById('brand-text');
	const brandLogo = document.getElementById('brand-logo');

	if (!btn || !sidebar) return;

	// explicit closed/open class strings (match requested values)
	const closedClass = 'p-xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a scale-inline-100 cursor-pointer transition-colors hidden md:block';
	const openClass = 'p-xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a scale-inline-100 cursor-pointer transition-colors hidden md:block';

	// initialize classes to the closed state (keeps layout predictable)
	btn.className = closedClass;

	function setOpen(open) {
		body.classList.toggle('sidebar-open', open);
		btn.setAttribute('aria-expanded', String(open));
		sidebar.setAttribute('aria-hidden', String(!open));
		btn.className = open ? openClass : closedClass;
	}

	btn.addEventListener('click', function (e) {
		const isOpen = body.classList.contains('sidebar-open');
		setOpen(!isOpen);
	});

	// Close on Escape
	document.addEventListener('keydown', function (ev) {
		if (ev.key === 'Escape' && body.classList.contains('sidebar-open')) {
			setOpen(false);
			btn.focus();
		}
	});

	// Toggle between brand text and logo on scroll
	if (brandText && brandLogo) {
		window.addEventListener('scroll', function () {
			if (window.scrollY > 0) {
				// Show logo when scrolled down
				brandText.classList.add('fade-out');
				brandLogo.classList.remove('hidden');
				brandLogo.classList.add('visible');
			} else {
				// Show text when at top
				brandText.classList.remove('fade-out');
				brandLogo.classList.remove('visible');
				brandLogo.classList.add('hidden');
			}
		});
	}
});
