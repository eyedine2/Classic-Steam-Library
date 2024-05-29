import './libraryroot.custom.js';

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
	const friendsOnline = [...friendStore.m_setFriends]
		.filter((e) => friendStore.GetFriendState(e).m_persona.is_online)
		.length;

	document.body.style.setProperty('--friends-online-count', '"' + friendsOnline + '"');
}

// wait a bit for chat to load
setTimeout(() => {
	updateFriendsCount();
}, 1_500);

setInterval(() => {
	updateFriendsCount();
}, friendsUpdateInterval * 1_000);
