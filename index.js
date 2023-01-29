const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories');
const course = require('./data/course.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('News API Running');
});
app.get('/course-categories', (req, res) => {
    res.send(categories);
})
app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    const allCourses = course.find(subject => subject.category_id === id)
    res.send(allCourses);
})

app.get('/new-course', (req, res) => {
    res.send(course);
})

app.get('/new-course/:id', (req, res) => {
    const id = req.params.id;
    const detailes = course.find(detaile => detaile._id == id);
    res.send(detailes)
})

app.listen(port, () => {
    console.log('Dragon new server', port);
})




// const categories = require('./data/categories');
// const course = require('./data/course.json');
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('News API Running');
// });
// app.get('/course-categories', (req, res) => {
//     res.send(categories);
// })

// app.get('/course-categories/:id', (req, res) => {
//     const id = req.params.id;
//     const allCourses = course.find(subject => subject.category_id === id)
//     res.send(allCourses);
// })

// app.get('/new-course/:id', (req, res) => {
//     const id = req.params.id;
//     const detailes = course.find(detaile => detaile.id == id);
//     res.send(detailes)
// })

// app.listen(port, () => {
//     console.log('Dragon new server', port);
// })


