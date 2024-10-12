const db = require('../db')
const { Movie, Actor, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movie1 = await new Movie({
    title: 'Spider-Man: No Way Home',
    runtime: '2h 28m',
    rating: 5,
    poster_img: '../assets/spiderman-home.jpg',
    year_released: '2001',
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear."
  })

  const movie2 = await new Movie({
    title: 'The Greatest Showman',
    runtime: '1h 45m',
    rating: 4,
    poster_img: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg',
    year_released: '2017',
    description: 'Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.'
  })

  const movie3 = await new Movie({
    title: 'Spirited Away',
    runtime: '2h 15m',
    rating: 3.5,
    poster_img: 'https://rdpswolfpack.com/wp-content/uploads/2021/02/Spirited_away-608x900.jpg',
    year_released: '2001',
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts."
  })

  const movie4 = await new Movie({
    title: 'Flubber',
    runtime: '1h 34m',
    rating: 3,
    poster_img: 'https://m.media-amazon.com/images/M/MV5BMTI4OTkzNzE3Ml5BMl5BanBnXkFtZTYwMjY5OTg4._V1_.jpg',
    year_released: '1997',
    description: 'An absent-minded professor discovers "flubber," a rubber-like super-bouncy substance.'
  })

  const movie5 = await new Movie({
    title: 'The Last Samurai',
    runtime: '2h 34m',
    rating: 4,
    poster_img: 'https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_.jpg',
    year_released: '2003',
    description: 'In 19th century Japan, Nathan Algren, a US army captain, is hired by the Japanese emperor to train his army in the modern warfare techniques. Captain Algren finds himself trapped in a struggle between two eras and two worlds.'
  })
  movie1.save()
  movie2.save()
  movie3.save()
  movie4.save()
  movie5.save()
  const actors = [
    {
      name: 'Tom Holland',
      age: 28,
      image: 'https://m.media-amazon.com/images/M/MV5BYzU3NWRhMjgtNmNmMS00YjQ1LWIyYzgtYzdkYjRjNWEzM2E3XkEyXkFqcGc@._V1_.jpg',
      born: new Date('1996-06-01'),
      alive: true,
      movie_id: movie1._id
    },
    {
      name: 'Zendaya Maree Stoermer Coleman',
      age: 28,
      image: 'https://m.media-amazon.com/images/M/MV5BNWE4NzlhZmUtN2VhMC00YzBhLWE5M2EtM2ZkOWQyMjQyYjMyXkEyXkFqcGc@._V1_.jpg',
      born: new Date('1996-09-01'),
      alive: true,
      movie_id: movie1._id
    },
    {
      name: 'Hugh Jackman',
      age: 55,
      image: 'https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg',
      born: new Date('1968-09-12'),
      alive: true,
      movie_id: movie2._id
    },
    {
      name: 'Zac Efron',
      age: 36,
      image: 'https://ntvb.tmsimg.com/assets/assets/286896_v9_bc.jpg?w=360&h=480',
      born: new Date('1987-09-18'),
      alive: true,
      movie_id: movie2._id
    },
    {
      name: 'Rumi Hiragi',
      age: 37,
      image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n95772-ZfrpB9g3cspO.png',
      born: new Date('1987-08-01'),
      alive: true,
      movie_id: movie3._id
    },
    {
      name: 'Tara Strong',
      age: 51,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tara_Strong_%2853390972896%29.jpg/800px-Tara_Strong_%2853390972896%29.jpg',
      born: new Date('1973-02-12'),
      alive: true,
      movie_id: movie3._id
    },
    {
      name: 'Robin Williams',
      age: 63,
      image: 'https://cdn.britannica.com/82/130482-050-87C2665C/Actor-Robin-Williams.jpg',
      born: new Date('1951-07-21'),
      alive: false,
      movie_id: movie4._id
    },
    {
      name: 'Wil Wheaton',
      age: 52,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TIMX6236_-_Wil_Wheaton_-_53973459580.jpg/1200px-TIMX6236_-_Wil_Wheaton_-_53973459580.jpg',
      born: new Date('1972-07-29'),
      alive: true,
      movie_id: movie4._id
    },
    {
      name: 'Tom Cruise',
      age: 62,
      image: 'https://m.media-amazon.com/images/M/MV5BMmU1YWU1NmMtMjAyMi00MjFiLWFmZmUtOTc1ZjI5ODkxYmQyXkEyXkFqcGc@._V1_.jpg',
      born: new Date('1962-07-03'),
      alive: true,
      movie_id: movie5._id
    },
    {
      name: 'Ken Watanabe',
      age: 64,
      image: 'https://m.media-amazon.com/images/M/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_.jpg',
      born: new Date('1959-10-21'),
      alive: true,
      movie_id: movie5._id
    },
  ]
  const reviews = [
    {
      movie_id: movie1._id,
      date: new Date("2021-03-15").toUTCString(),
      score: 4.5,
      comment: 'This movie had it all. From the cast to the effects. Very refreshing to see my childhood Spider-Men share a screen with the current Spider-Man. This movie was near perfect and one of the best from the Disney age of Marvel.'
    },
    {
      movie_id: movie1._id,
      date: new Date("2021-04-09").toUTCString(),
      score: 3.5,
      comment: 'Was boring until the other Spidermen show up. Its good to see those characters again and makes the whole movie, even though they appear about an hour into it only. Worth the time and its good that the other Spider-Man movies are part of this.'
    },
    {
      movie_id: movie2._id,
      date: new Date("2017-05-25").toUTCString(),
      score: 5,
      comment: "I love this movie. The performances are awesome. Hugh Jackman rocks as usual. And the bearded lady has the most spectacular voice. Don't take it seriously. Just watch it and enjoy."
    },
    {
      movie_id: movie2._id,
      date: new Date("2017-08-04").toUTCString(),
      score: 5,
      comment: "As I've noted, a lot of capital-N names helped make this film. But the director, the bloke who wore a beanie to the red carpet premiere in Sydney, deserves our admiration. He is the showman who, like Barnum, has his name above the door."
    },
    {
      movie_id: movie5._id,
      date: new Date("2021-05-30").toUTCString(),
      score: 3.5,
      comment: "This film is really good. Tom Cruise is great as usual, and the rest of the cast do a good job also. The sword fighting scenes are done well and are thrilling to watch. The final battle is epic and intense. The film is long but the story is well written and doesn't feel like a drag to watch. Worth a watch if you enjoy Tom Cruise, war movies or are interested in Japanese history."
    },
    {
      movie_id: movie5._id,
      date: new Date("2003-06-20").toUTCString(),
      score: 5,
      comment: "One of Tom Cruise's best pieces of acting. An incredible visual experience, the score is second to none, and the beautiful capture of Japanese culture of this time period is unparalleled. Definitely one of my favorites."
    },
  ]

  await Actor.insertMany(actors)
  console.log('Actors Created!')
  await Review.insertMany(reviews)
  console.log('Reviews Created!')
}

const run = async() => {
  await main()
  db.close()
}

run()