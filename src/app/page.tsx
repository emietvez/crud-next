import Image from 'next/image'
import Link from 'next/link'
async function getData() {
  const res = await fetch('http://localhost:3000/api/task', { cache: 'no-store' }) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="w-full ">
      <div className="inline-flex flex-1 px-24 py-12">
        <h1 className="text-2xl ">Mis tareas</h1>
        <Link href="/new" className="bg-green-500 hover:bg-black py-2 px-6 ml-2 rounded-xl text-white text-sm">Nueva tarea</Link>
      </div>
      <div className="py-4 w-full grid grid-cols-4 gap-24 place-content-center place-items-center">
        {data.map((task: any) => (
          <div key={task.id} className="px-12 py-8 shadow-2xl rounded-xl">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </main>
    )
}
