document.getElementById('accountIcon').onclick = function() {
	window.location.href = 'account.html';
};
document.getElementById('cartIcon').onclick = function() {
	window.location.href = '/cart/cart.html';
};
	const menuBtn = document.getElementById('menuBtn');
	const sideMenu = document.getElementById('sideMenu');
	menuBtn.onclick = function(e) {
		e.stopPropagation();
		if (sideMenu.classList.contains('open')) {
			sideMenu.classList.remove('open');
		} else {
			sideMenu.classList.add('open');
		}
	};
	document.body.addEventListener('click', function(e) {
		if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== menuBtn) {
			sideMenu.classList.remove('open');
		}
	});
	document.getElementById('accountIcon').onclick = function() {
		window.location.href = 'account.html';
	};
	document.getElementById('cartIcon').onclick = function() {
		window.location.href = '/cart/cart.html';
	};

	// Search bar dropdown logic
	const searchBar = document.getElementById('searchBar');
	const searchResults = document.getElementById('searchResults');
	if (searchBar && searchResults) {
		searchBar.addEventListener('input', function() {
			const query = searchBar.value.trim().toLowerCase();
			if (!query) {
				searchResults.style.display = 'none';
				searchResults.innerHTML = '';
				return;
			}
			const products = Array.from(document.querySelectorAll('.product'));
			const matches = products.filter(card => {
				const title = card.querySelector('.product-title')?.innerText.toLowerCase() || '';
				return title.includes(query);
			});
			if (matches.length === 0) {
				searchResults.innerHTML = '<div style="padding:0.7rem 1rem;color:#888;">No products found</div>';
			} else {
				searchResults.innerHTML = matches.map(card => {
					const img = card.querySelector('img')?.src || '';
					const title = card.querySelector('.product-title')?.innerText || '';
					const price = card.querySelector('.price')?.innerText || '';
					const link = card.querySelector('a')?.href || '';
					return `<div style=\"display:flex;align-items:center;gap:0.7rem;padding:0.7rem 1rem;cursor:pointer;\" onclick=\"window.location.href='${link || '#'}'\"><img src=\"${img}\" alt=\"\" style=\"width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f4f4f4;\"> <div><div style='font-weight:bold;'>${title}</div><div style='color:#2196f3;font-size:0.97rem;'>${price}</div></div></div>`;
				}).join('');
			}
			searchResults.style.display = 'block';
		});
		// Hide dropdown on blur
		searchBar.addEventListener('blur', function() {
			setTimeout(() => { searchResults.style.display = 'none'; }, 150);
		});
		searchBar.addEventListener('focus', function() {
			if (searchBar.value.trim()) searchResults.style.display = 'block';
		});
	}