export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}
    }

    bindTreggers(container, containerItems, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== containerItems.length - 2) {
                containerItems[counter].style.display = 'flex';
                counter++;
            } else {
                containerItems[counter].style.display = 'flex';
                containerItems[containerItems.length - 1].remove();
            }
        });
    }

    hideItems(arg) {
        arg.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTreggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTreggers(this.newOfficer, this.newItems, this.newCounter);
        } catch (e) {}
    }
}