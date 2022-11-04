const express = require('express');

const app = express();

const Tel = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  },
  { 
    "id": 5,
    "name": "John Doe", 
    "number": "234-23-6423122"
  },
  { 
    "id": 6,
    "name": "Joel Success", 
    "number": "1-23-6423122"
  },
  { 
    "id": 7,
    "name": "Henry Wills", 
    "number": "399-23-6423122"
  }
]

app.get('/api/persons', (req,res)=>{
res.json(Tel);
});

app.get('/info',(req,res)=>{
  const dt = new Date();
  let tellen = Tel.length;
  res.send(`Phonebook has ${tellen} info only. ${dt}` )
})

app.get('/person/:id', (req,res)=>{
  const id = Number(req.params.id)
  const note = Tel.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }

})


app.listen(process.env.PORT);