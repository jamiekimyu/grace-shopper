const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');
const Review = db.model('review');
const Service = db.model('service');
const Equipment = db.model('equipment');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', isAdmin: true, password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedRecords = () => db.Promise.map([
	{
		title: 'In the Aeroplane Over the Sea',
		artist: 'Neutral Milk Hotel',
		releaseDate: 'February 10, 1998',
		genre: 'Indie Rock',
		product: {
			name: 'In the Aeroplane Over the Sea / Neutral Milk Hotel',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"In the Aeroplane Over the Sea" is the second studio album by the American indie rock band Neutral Milk Hotel.',
			primaryCategory: 'Record',
			photo: '/albums/neutralmilkhotel-intheaeroplaneover.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'OK Computer',
		artist: 'Radiohead',
		releaseDate: 'May 28, 1997',
		genre: 'Alternative Rock',
		product: {
			name: 'OK Computer / Radiohead',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"OK Computer" is the third studio album by English alternative rock band Radiohead.',
			primaryCategory: 'Record',
			photo: '/albums/radiohead-okcomputer.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Funeral',
		artist: 'Arcade Fire',
		releaseDate: 'September 14, 2004',
		genre: 'Indie Rock',
		product: {
			name: 'Funeral / Arcade Fire',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Funeral" is the debut studio album by the Canadian indie rock band Arcade Fire',
			primaryCategory: 'Record',
			photo: '/albums/arcadefire-funeral.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Black Treacle (Single)',
		artist: 'Arctic Monkeys',
		releaseDate: 'January 23, 2012',
		genre: 'Indie Rock',
		product: {
			name: 'Black Treacle (Single) / Arctic Monkeys',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Black Treacle" is a song by the English indie rock band Arctic Monkeys, released as the fourth single from their fourth studio album Suck It and See.',
			primaryCategory: 'Record',
			photo: '/albums/arcticmonkeys-blacktreacle.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Migrant',
		artist: 'The Dear Hunter',
		releaseDate: 'April 2, 2013',
		genre: 'Alternative Rock',
		product: {
			name: 'Migrant / The Dear Hunter',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Migrant" is the fifth studio album by The Dear Hunter.',
			primaryCategory: 'Record',
			photo: '/albums/thedearhunter-migrant.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Someone Great (Single)',
		artist: 'LCD Soundsystem',
		releaseDate: 'March 20, 2007',
		genre: 'Electronica, Strangecore',
		product: {
			name: 'Someone Great (Single) / LCD Soundsystem',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Someone Great" is a single from "Sound of Silver", the second studio album by American dance-punk act LCD Soundsystem.',
			primaryCategory: 'Record',
			photo: '/albums/lcdsoundsystem-someonegreat.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Comedown Machine',
		artist: 'The Strokes',
		releaseDate: 'March 26, 2013',
		genre: 'Alternative Rock',
		product: {
			name: 'Come Down Machine / The Strokes',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Comedown Machine" is the fifth studio album by the American indie rock band The Strokes.',
			primaryCategory: 'Record',
			photo: '/albums/thestrokes-comedownmachine.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Night On the Sun',
		artist: 'Modest Mouse',
		releaseDate: 'July 29, 2016',
		genre: 'Alternative Rock',
		product: {
			name: 'Night On the Sun / Modest Mouse',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Night on the Sun" is an EP by alternative rock band Modest Mouse, released in 1999 as a Japan-only album, and again in 2000 as a 12" vinyl in the US and UK.',
			primaryCategory: 'Record',
			photo: '/albums/modestmouse-nightonthesun.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Harder, Better, Faster, Stronger (Single)',
		artist: 'Daft Punk',
		releaseDate: 'January 29, 2002',
		genre: 'Electronica, Hipster',
		product: {
			name: 'Harder, Better, Faster, Stronger (Single) / Daft Punk',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Harder, Better, Faster, Stronger" is a song by French duo Daft Punk.',
			primaryCategory: 'Record',
			photo: '/albums/daftpunk-harderbetterfasterst.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'The Crane Wife',
		artist: 'The Decemberists',
		releaseDate: 'May 15, 2007',
		genre: 'Indie Rock',
		product: {
			name: 'The Crane Wife / The Decemberists',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"The Crane Wife" is the fourth album by The Decemberists',
			primaryCategory: 'Record',
			photo: '/albums/thedecemberists-hecranewife.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Royal Blood',
		artist: 'Royal Blood',
		releaseDate: 'August 22, 2014',
		genre: 'Indie Rock',
		product: {
			name: 'Royal Blood / Royal Blood',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Royal Blood" is the eponymous debut studio album by British rock duo Royal Blood.',
			primaryCategory: 'Record',
			photo: '/albums/royalblood-royalblood.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	},
	{
		title: 'Elephant',
		artist: 'The White Stripes',
		releaseDate: 'April 1, 2003',
		genre: 'Alternative Rock',
		product: {
			name: 'Elephant / The White Stripes',
			price: Math.floor(Math.random() * 100000) / 100,
			description: '"Elephant" is the fourth album by the American alternative rock duo The White Stripes.',
			primaryCategory: 'Record',
			photo: '/albums/thewhitestripes-elephant.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	}
], newRecord => Record.create(newRecord, { include: [Product] }));


const seedReviews = () => db.Promise.map([
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 1
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 2,
		product_id: 5
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 8
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 2
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 4
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 6
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 2,
		product_id: 4
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 2,
		product_id: 9
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 1,
		product_id: 10
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 2,
		product_id: 3
	},
	{
		rating:  Math.floor(Math.random() * 5),
		comment: "Everything is awesome!!!!!!!!!!!",
		user_id: 2,
		product_id: 1
	}
], review => db.model('review').create(review));

const seedServices = () => db.Promise.map([
	{
		processingTime: '1 Month',
		product: {
			name: 'MP3 to Vinyl Service',
			price: Math.floor(Math.random() * 100000) / 100,
			description: 'Converts a selection of MP3 files (no, we cannot use any of the newfangled lossless formats) into a single record.',
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
			description: 'Have a record that sounds too clean? We have a specially designed scratching process to introduce all the scratches and pops you remember from your childhood.',
			primaryCategory: 'Service',
			photo: 'http://i.imgur.com/XR2rIxf.jpg',
			quantity: Math.floor(Math.random() * 20)
		}
	}
], newService => Service.create(newService, { include: [Product] }));

const seedEquipment = () => db.Promise.map([
	{
		weight: '103 lbs.',
		product: {
			name: 'My Grandfather\'s Victrola',
			price: 50500,
			description: 'This antique victrola belonged to my grandfather. There is no sound more authentic. Includes dog statue and musty book.',
			primaryCategory: 'Equipment',
			photo: 'http://www.stevenjohnson.com/web-pics/granada.jpg',
			quantity: 1
		}
	}
], newEquipment => Equipment.create(newEquipment, { include: [Product] }));

db.didSync
  .then(() => db.sync({force: true}))
	.then(seedUsers)
	.then(users => console.log(`Seeded ${users.length} users OK`))
	.then(seedRecords)
	.then(records => console.log(`Seeded ${records.length} records OK`))
	.then(seedReviews)
	.then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
	.then(seedServices)
	.then(services => console.log(`Seeded ${services.length} services OK`))
	.then(seedEquipment)
	.then(equipment => console.log(`Seeded ${equipment.length} equipment OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
