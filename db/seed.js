const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 1
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 2
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 3
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 4
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 5
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 6
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 7
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 8
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 9
	},
	{
		name: 'The Most Hipster Vinyl Record Ever',
		price: 10000,
		description: 'CDs are so 2000',
		primaryCategory: 'Record',
		photo: 'some URL to a photo',
		quantity: 17,
		recordId: 10
	},
], product => db.model('products').create(product));

//db.Promise.each => mantains order
//while .map doesn't
const seedRecords = () => db.Promise.each([
	{
		title: 'In the Aeroplane Over the Sea',
		artist: 'Neutral Milk Hotel',
		releaseDate: 'October 21, 2014',
		genre: 'Hipster'
	},
	{
		title: 'OK Computer',
		artist: 'Radiohead',
		releaseDate: 'May 28, 1997',
		genre: 'Hipster'
	},
	{
		title: 'Funeral',
		artist: 'Arcade Fire',
		releaseDate: 'September 14, 2004',
		genre: 'Hipster'
	},
	{
		title: 'Black Treacle',
		artist: 'Arctic Monkeys',
		releaseDate: 'January 24, 2012',
		genre: 'Hipster'
	},
	{
		title: 'Migrant',
		artist: 'The Dear Hunter',
		releaseDate: 'April 2, 2013',
		genre: 'Hipster'
	},
	{
		title: 'Someone Great',
		artist: 'LCD Soundsystem',
		releaseDate: 'March 20, 2007',
		genre: 'Hipster'
	},
	{
		title: 'Come Down Machine',
		artist: 'The Strokes',
		releaseDate: 'March 26, 2013',
		genre: 'Hipster'
	},
	{
		title: 'Night On the Sun',
		artist: 'Modest Mouse',
		releaseDate: 'July 29, 2016',
		genre: 'Hipster'
	},
	{
		title: 'Harder, Better, Faster, Stronger (Single)',
		artist: 'Daft Punk',
		releaseDate: 'January 29, 2002',
		genre: 'Hipster'
	},
	{
		title: 'The Crane Wife',
		artist: 'The Decemberists',
		releaseDate: 'May 15, 2007',
		genre: 'Hipster'
	},
], record => db.model('records').create(record));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
