function Item (type, id, mark, specification, price, imageSrc) {
    this.type = type;
    this.id = id;
    this.mark = mark;
    this.specification = specification;
    this.price = price;
}

const tempItems = [];

const amd3600 = new Item('processor', 0, 'amd ryzen', '3600', 1200, 'images/amdRyzen3600.jpg');
const intelCoreI9 = new Item('processor', 1, 'intel core', 'i9', 3000, 'images/intelCoreI9.jpg');
const geforceGtx1050 = new Item('graphic', 2, 'geforce GTX', '1050', 2500, 'images/nvidiaGeforceGtx1050.jpg');
const geforceGtx1050Ti = new Item('graphic', 3, 'geforce GTX', '150 Ti', 2750, 'images/nvidiaGeforceGtx1050Ti.jpg');
const corsairVengeance = new Item('RAM', 4, 'corsair vengeance', '16GB', 330, 'images/corsairVengeance16GB.jpg');
const beQuiet = new Item('computerCase', 5, 'be quiet', 'Bga02', 205, 'images/beQuietBga02.jpg');

tempItems.push(
    amd3600, 
    intelCoreI9,
    geforceGtx1050,
    geforceGtx1050Ti,
    corsairVengeance,
    beQuiet
);

export const items = tempItems;