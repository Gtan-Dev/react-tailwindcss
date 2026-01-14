import React from 'react'

const App = () => {
  return (
    <div>
      <div className='flex gap gap-4'>
        <div className='bg-gray-600 text-white mt-4 ml-4 w-50 h-30'>
          <h1 className='p-4 text-lg font-black text-center'>Student</h1>
        </div>
      </div>
      <button className='bg-orange-800 text-white py-1 px-4 m-4 border-2 border-indigo-600 rounded-full'>Next</button>

      <div className='flex bg-gray-400 justify-around'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </div>
      <ul className='bg-teal-900 text-white w-60 h-40 flex items-center justify-center'>
        <li>Hello</li>
      </ul>
    </div>
  )
}

export default App
