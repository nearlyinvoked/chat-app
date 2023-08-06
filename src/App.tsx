import { useEffect, useState } from 'react'
import './index.css'

type Chat = {
  id: number
  chat: string
  from: string
}

function App() {
  useEffect(() => {
    document.title = 'Simple Chat App';
  }, []);
  
  const [chat, setChat] = useState<Chat[]>([])
  const [chatInput, setChatInput] = useState<string>('')

  const handleAddChat = (newChat: Chat) => {
    if (newChat.chat === '') return
    const reversedChat = [...chat].reverse()
    const newArr = [...reversedChat, newChat]
    setChat(newArr.reverse())
    setChatInput('')
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col min-h-screen py-5">
          <div className="flex flex-col grow">
            <div className="flex-1">
              <div className="flex flex-col-reverse">
                {chat.map(chat => (
                  <div className="flex justify-end my-2">
                    <div className="bg-blue-500 p-2 rounded-md text-white">
                      <p>{chat.chat}</p>
                      <div className="flex justify-end m-1">
                        <p className='text-xs'>{chat.from}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-none">
            <input className='p-2 rounded-md w-full ' type="text" placeholder='Enter a chat' value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => {
              if (e.key === 'Enter') {
                handleAddChat({
                  id: Math.floor(Math.random() * 1000),
                  chat: chatInput,
                  from: 'Kevin'
                })
              }
            }} />
            <button className='hover:border-white mx-1' onClick={() => handleAddChat({
              id: Math.floor(Math.random() * 1000),
              chat: chatInput,
              from: 'Kevin'
            })}>Send</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
