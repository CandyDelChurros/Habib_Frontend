import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2Icon } from "lucide-react"

function Menu() {
  return (
    <div className="py-2 border-b">
      Lista de Tarefas
    </div>
  )
}
function TodoItem({name, remover} : {name: string, remover: any}) {

  return(
    <div className='flex items-center justify-between p-2 rounded-md border bg-slate-50'>
      <div>{name}</div>
      <Button variant="outline" size="icon" onClick={remover}>
      <Trash2Icon className="h-4 w-4" />
    </Button>
    </div>
  )
}
function Conteudo() {
  const [itens, setItens] = useState([] as string[]);
  
  function submeterForms(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const f = e.target as HTMLElement;
    const item = f.querySelector('input')?.value
    if (item) {
      setItens([...itens,item])
    }
  }
  function remover(index: number){
    setItens(itens.filter((_,i) => i !== index))
  }
  return (
      <div className="space-y-8">
      <div>
        <form onSubmit={(e) => submeterForms(e) }>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Escreva uma tarefa..." />
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
        <div>
          <div className="space-y-2">
            {itens.map((el,index) => <TodoItem key={index}name={el} remover={() => remover(index)}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}
function Rodape() {
  return (
    <div className="py-2 border-t">
      TADS &copy; 2024
    </div>
  )
}
function App() {
  return(
    <div className="m-4 space-y-6">
      <Menu/>
      <Conteudo/>
      <Rodape/>

    </div>
  )
}

export default App
