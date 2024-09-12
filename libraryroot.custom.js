// Collection Panel repositioned beneath linkssection, by shadow

const h = '._2b6WkTnmJxMuX1biL7aS3C.Panel'
const i = 'NZMJ6g2iVnFsOOp-lDmIP'
const n = '.DgVQapkBmhAW6oPY5rPZo.Panel'
new MutationObserver((mo) => {
	mo.forEach(function(m) {
		m.addedNodes.forEach(function() {
			const c = document.querySelector(h)
            c.parentNode.classList.contains(i) && document.querySelector(n).append(c)
		});
	});
}).observe(document.body, { childList: true, subtree: true });

// Friends count near friends button, by ricewind012

if (document.title == 'Steam') {
	const {
		friendStore,
		LocalizationManager,
	} = window.opener;
	const ONLINE_STRING_TOKEN = 'Menu_Status_Online';
	const friendsUpdateInterval = getComputedStyle(document.documentElement)
		.getPropertyValue('--friends-update-interval');

	document.body.style.setProperty(
		'--' + ONLINE_STRING_TOKEN,
		'"' + LocalizationManager.LocalizeString('#' + ONLINE_STRING_TOKEN) + '"'
	);

	function updateFriendsCount() {
		const friendsOnline = friendStore.m_FriendsUIFriendStore.online_friends.length

		document.body.style.setProperty('--friends-online-count', '"' + friendsOnline + '"');
	}

	// wait a bit for chat to load
	setTimeout(() => {
		updateFriendsCount();
	}, 1_500);

	setInterval(() => {
		updateFriendsCount();
	}, friendsUpdateInterval * 1_000);
}
