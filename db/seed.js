const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');
const Service = db.model('service');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', isAdmin: true, password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedRecords = () => db.Promise.map([
	{
		title: 'In the Aeroplane Over the Sea',
		artist: 'Neutral Milk Hotel',
		releaseDate: 'October 21, 2014',
		genre: 'Hipster',
		product: {
			name: 'In the Aeroplane Over the Sea / Neutral Milk Hotel',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/neutralmilkhotel-intheaeroplaneover.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'OK Computer',
		artist: 'Radiohead',
		releaseDate: 'May 28, 1997',
		genre: 'Hipster',
		product: {
			name: 'OK Computer / Radiohead',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/radiohead-okcomputer.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Funeral',
		artist: 'Arcade Fire',
		releaseDate: 'September 14, 2004',
		genre: 'Hipster',
		product: {
			name: 'Funeral / Arcade Fire',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/arcadefire-funeral.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Black Treacle',
		artist: 'Arctic Monkeys',
		releaseDate: 'January 24, 2012',
		genre: 'Hipster',
		product: {
			name: 'Black Treacle / Arctic Monkeys',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/arcticmonkeys-blacktreacle.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Migrant',
		artist: 'The Dear Hunter',
		releaseDate: 'April 2, 2013',
		genre: 'Hipster',
		product: {
			name: 'Migrant / The Dear Hunter',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/thedearhunter-migrant.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Someone Great',
		artist: 'LCD Soundsystem',
		releaseDate: 'March 20, 2007',
		genre: 'Hipster',
		product: {
			name: 'Someone Great / LCD Soundsystem',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/lcdsoundsystem-someonegreat.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Come Down Machine',
		artist: 'The Strokes',
		releaseDate: 'March 26, 2013',
		genre: 'Hipster',
		product: {
			name: 'Come Down Machine / The Strokes',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/thestrokes-comedownmachine.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Night On the Sun',
		artist: 'Modest Mouse',
		releaseDate: 'July 29, 2016',
		genre: 'Hipster',
		product: {
			name: 'Night On the Sun / Modest Mouse',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/modestmouse-nightonthesun.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Harder, Better, Faster, Stronger (Single)',
		artist: 'Daft Punk',
		releaseDate: 'January 29, 2002',
		genre: 'Hipster',
		product: {
			name: 'Harder, Better, Faster, Stronger (Single) / Daft Punk',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/daftpunk-harderbetterfasterst.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'The Crane Wife',
		artist: 'The Decemberists',
		releaseDate: 'May 15, 2007',
		genre: 'Hipster',
		product: {
			name: 'The Crane Wife / The Decemberists',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'CDs are so 2000',
			primaryCategory: 'Record',
			photo: '/albums/thedecemberists-hecranewife.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
], newRecord => Record.create(newRecord, { include: [Product] }));


const seedServices = () => db.Promise.map([
	{
		processingTime: '1 Month',
		product: {
			name: 'MP3 to Vynl Service',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'Converts a selection of MP3 files (no, we cannot use any of the newfangled lossless formats) into a single record',
			primaryCategory: 'Service',
			photo: 'http://i.imgur.com/5duS2Cm.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		processingTime: '1 Week',
		product: {
			name: 'Record Scratching Service',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'Have a record that sounds too clean? We have a specially designed scratching process to introduce all the scratches and pops you remember from your childhood',
			primaryCategory: 'Service',
			photo: 'http://i.imgur.com/XR2rIxf.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	}
], newService => Service.create(newService, { include: [Product] }));

db.didSync
  .then(() => db.sync({force: true}))
	.then(seedUsers)
	.then(users => console.log(`Seeded ${users.length} users OK`))
	.then(seedRecords)
	.then(records => console.log(`Seeded ${records.length} records OK`))
	.then(seedServices)
	.then(services => console.log(`Seeded ${services.length} services OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
