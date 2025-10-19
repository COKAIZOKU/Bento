// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstButtonsContainer = () => {
	for (const button of CONFIG.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
          <i class="buttonIcon" icon-name="${button.icon}"></i>
        </a>
    `;

		const position = 'beforeend';

		buttons_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
        >${list.links[0].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
        >${list.links[1].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[2].link}"
        class="listItem"
        >${list.links[2].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[3].link}"
        class="listItem"
        >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();