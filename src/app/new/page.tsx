"use client"
import {useRouter} from 'next/navigation'

export default function NewPage(){
    const router = useRouter();

    const onSubmit = async (e) =>{
    e.preventDefault();
       const title = e.target.title.value
       const description = e.target.description.value

       const res = await fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-type': 'application/json'
            }
       })
       const data = await res.json()
       router.push('/')
    }
    
    return(
        <main className="w-full h-screen flex justify-center items-center">          
            <form className="bg-gray-50 p-12 w-1/4 shadow-2xl rounded-xl" onSubmit={onSubmit}>
                <h1 className="text-3xl py-6">Create Task</h1>
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" className="border border-gray-400 p-2 mb-6 w-full"
                placeholder="Add title"/>
                <label htmlFor="description">Description:</label>
                <textarea id="description" className="border border-gray-400 p-2 mb-4 w-full" rows="3"
                placeholder="Add description"></textarea>
                <button className="bg-blue-600 py-2 px-12 text-white rounded-xl hover:bg-black">Crear</button>
            </form>
        </main>
    )
}