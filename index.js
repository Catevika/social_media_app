// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

/*=============================================
=            SIDEBAR            
=============================================*/

// Remove active class from all menu items
const changeActiveItem = () => {
	menuItems.forEach((item) => {
		item.classList.remove('active');
	});
};

/*=============================================
=            NOTIFICATIONS          
=============================================*/

// Display notifications popup when notifications menu is clicked
menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		changeActiveItem(), item.classList.add('active');
		if (item.id != 'notifications') {
			document.querySelector('.notifications-popup').style.display = 'none';
		} else {
			document.querySelector('.notifications-popup').style.display = 'block';
			document.querySelector(
				'#notifications .notification-count'
			).style.display = 'none';
		}
	});
});

/*=============================================
=            MESSAGES            
=============================================*/
// Searches chats
const searchMessage = () => {
	const val = messageSearch.value.toLowerCase();
	message.forEach((chat) => {
		let name = chat.querySelector('h5').textContent.toLowerCase();
		if (name.indexOf(val) !== -1) {
			chat.style.display = 'flex';
		} else {
			chat.style.display = 'none';
		}
	});
};

// Search chat
messageSearch.addEventListener('keyup', searchMessage);

// Highlight messages when messages menu is clicked
messagesNotification.addEventListener('click', () => {
	messages.style.boxShadow = '0 0 1rem var(--color-primary)';
	(messagesNotification.querySelector(
		'#messages-notification .notification-count'
	).style.display = 'none'),
		setTimeout(() => {
			messages.style.boxShadow = 'none';
		}, 2500);
});

/*=============================================
=            THEME CUSTOMIZATION DISPLAY           
=============================================*/
// Open Modal
const openThemeModal = () => {
	themeModal.style.display = 'grid';
};

theme.addEventListener('click', openThemeModal);

// Close Modal
const closeThemeModal = (e) => {
	if (e.target.classList.contains('customize-theme')) {
		themeModal.style.display = 'none';
	}
};

// Closes Modal
themeModal.addEventListener('click', closeThemeModal);

/*=============================================
=            FONT SIZES           
=============================================*/
// remove active class from span or font size selectors
const removeSizeSelector = () => {
	fontSizes.forEach((size) => {
		size.classList.remove('active');
	});
};

fontSizes.forEach((size) => {
	size.addEventListener('click', () => {
		removeSizeSelector();
		let fontSize;
		size.classList.toggle('active');

		if (size.classList.contains('font-size-1')) {
			fontSize = '10px';
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '5.4rem');
		} else if (size.classList.contains('font-size-2')) {
			fontSize = '13px';
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '-7rem');
		} else if (size.classList.contains('font-size-3')) {
			fontSize = '16px';
			root.style.setProperty('--sticky-top-left', '-2rem');
			root.style.setProperty('--sticky-top-right', '-17rem');
		} else if (size.classList.contains('font-size-4')) {
			fontSize = '19px';
			root.style.setProperty('--sticky-top-left', '-5rem');
			root.style.setProperty('--sticky-top-right', '-25rem');
		} else {
			fontSize = '22px';
			root.style.setProperty('--sticky-top-left', '-12rem');
			root.style.setProperty('--sticky-top-right', '-35rem');
		}

		// Change the font size of the root element
		document.querySelector('html').style.fontSize = fontSize;
	});
});

/*=============================================
=            COLORS           
=============================================*/
// Change active class from colors
const changeActiveColorClass = () => {
	colorPalette.forEach((color) => {
		color.classList.remove('active');
	});
};

// change primary colors
colorPalette.forEach((color) => {
	color.addEventListener('click', () => {
		let primaryHue;
		changeActiveColorClass();
		if (color.classList.contains('color-1')) {
			primaryHue = 252;
		} else if (color.classList.contains('color-2')) {
			primaryHue = 52;
		} else if (color.classList.contains('color-3')) {
			primaryHue = 352;
		} else if (color.classList.contains('color-4')) {
			primaryHue = 152;
		} else if (color.classList.contains('color-5')) {
			primaryHue = 202;
		}
		color.classList.add('active');
		root.style.setProperty('--primary-color-hue', primaryHue);
	});
});

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background
const changeBackground = () => {
	root.style.setProperty('--white-color-lightness', whiteColorLightness);
	root.style.setProperty('--light-color-lightness', lightColorLightness);
	root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

bg1.addEventListener('click', () => {
	// add active class
	bg1.classList.add('active');

	//remove active class from the others
	bg2.classList.remove('active');
	bg3.classList.remove('active');

	// remove customize background
	window.location.reload();
});

bg2.addEventListener('click', () => {
	whiteColorLightness = '20%';
	lightColorLightness = '15%';
	darkColorLightness = '95%';

	// add active class
	bg2.classList.add('active');

	//remove active class from the others
	bg1.classList.remove('active');
	bg3.classList.remove('active');
	changeBackground();
});

bg3.addEventListener('click', () => {
	whiteColorLightness = '10%';
	lightColorLightness = '0%';
	darkColorLightness = '95%';

	// add active class
	bg2.classList.add('active');

	//remove active class from the others
	bg1.classList.remove('active');
	bg2.classList.remove('active');
	changeBackground();
});
