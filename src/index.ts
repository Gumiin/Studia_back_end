import express from 'express'
import {Request, Response} from 'express'
import { json } from 'stream/consumers'

const app = express()

const date = new Date()




class Note{
  id:number = Date.now()
  title:string
  content:string
  createDate:string
  tags:string[]

  constructor(title:string,content:string,tags:string[]){
    this.id = Date.now()
    this.title=title
    this.content=content
    this.createDate=date.toISOString()
    this.tags=tags
  }
}

let notes = [
  new Note("test","test",["test"])
]

let note = notes.find(note => note.id === 10 ? true : false)

app.use(express.json())

app.get('/notes/:id', function (req: Request, res: Response) {
  let id = parseInt(req.params.id)
  res.send(notes[id])
})
app.post('/notes', function (req: Request, res: Response) {
  
  let boj=new Note(req.body.title,req.body.content, req.body.tags)
  notes.push(boj)
  res.sendStatus(200).send(`Your object was succefuly created at ${boj.id}`)
})

app.listen(3000)