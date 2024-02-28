const h = '.appdetailsheader_HeaderFeatures_2b6Wk.Panel'
const i = 'sharedappdetailsheader_TopCapsule_2meE3'
const n = '.appdetailsprimarylinkssection_Links_DgVQa.Panel'

new MutationObserver((mo) => {
	mo.forEach(function(m) {
		m.addedNodes.forEach(function() {
			const c = document.querySelector(h)
            c.parentNode.classList.contains(i) && document.querySelector(n).append(c)
		});
	});
}).observe(document.body, { childList: true, subtree: true });
