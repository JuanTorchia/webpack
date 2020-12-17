import '../css/index.css'
import search from './search'
import render from './render'
import name from './name'
import nameTitle from './nametitle'



const id = prompt('quien es ese pokemon')

search(id)
    .then((data)=>{
        render(data)
        name(data)
        nameTitle(data)
    })
    .catch(() =>{
        console.log('no hubo pokemon')
    })
    search