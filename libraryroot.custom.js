const h = '._2b6WkTnmJxMuX1biL7aS3C.Panel'
const i = '_2meE3N6-Wkw3yQUVtQK-i8'
const n = '.DgVQapkBmhAW6oPY5rPZo.Panel'
new MutationObserver((mo) => {
	mo.forEach(function(m) {
		m.addedNodes.forEach(function() {
			const c = document.querySelector(h)
            c.parentNode.classList.contains(i) && document.querySelector(n).append(c)
		});
	});
}).observe(document.body, { childList: true, subtree: true });
