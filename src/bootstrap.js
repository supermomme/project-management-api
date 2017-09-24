const app = require('./app');

const uniqueId = "bla"

app.service('kanban').create({
  "title": "A cool kanban board",
  "description": "It is very cool :)"
})
.then(res=>{console.log(res); return res;})
.then(res=>app.service('project').create({
  name: `TEST-${uniqueId}`,
  shortName: `TST-${uniqueId}`,
  kanban: res._id,
  description: "Ein Generirtes Test Project"
}))
.then(res=>{console.log(res); return res;})
.then(res=>res.kanban)
.then(id=>app.service('kanban-status').create([
  { kanban: id, name:"Ideas", sort: 0 },
  { kanban: id, name:"Dev", sort: 1 },
  { kanban: id, name:"In Progress", sort: 2 },
  { kanban: id, name:"Finished", sort: 3 }
]))
.then(res=>{console.log(res); return res;})
.then(res=>app.service('kanban-task').create([
  { 'kanban-status': res[0]._id, title:"finish project", priority: 50 },
  { 'kanban-status': res[1]._id, title:"test frontend", priority: 30 },
  { 'kanban-status': res[2]._id, title:"remove something", priority: 0 },
  { 'kanban-status': res[3]._id, title:"add something", priority: 10 },
  { 'kanban-status': res[2]._id, title:"yeah!", priority: 1000 },
  { 'kanban-status': res[0]._id, title:"PRIORITY OVER 9000", priority: 9999 },
  { 'kanban-status': res[2]._id, title:"test :D", priority: 50 },
]))
.then(res=>{console.log(res); return res;})
.then(res => {
  process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
})
