import { useState } from 'react';
import './App.css';

function App() {
  // States to manage Flexbox properties
  const [justifyContent, setJustifyContent] = useState('justify-center');
  const [alignItems, setAlignItems] = useState('items-center');
  const [flexDirection, setFlexDirection] = useState('flex-row');
  const [flexWrap, setFlexWrap] = useState('flex-no-wrap');

  return (
    <div className="flex flex-col lg:h-screen justify-center items-center space-y-4">
      <h1 className='text-4xl font-bold'>Learn Flex</h1>
      <div className={`lg:w-2/3 w-screen  lg:h-1/2 h-96  border-4 border-sky-500 text-yellow-200 flex ${justifyContent} ${alignItems} ${flexDirection} ${flexWrap}`}>
        {/* Three boxes inside the container */}
        <div className="flex  justify-center items-center w-1/4 h-1/2 font-bold text-xl rounded-md shadow-md bg-blue-500 m-2">Box 1</div>
        <div className="flex  justify-center items-center w-1/4 h-1/2 font-bold text-xl rounded-md shadow-md bg-red-500 m-2">Box 2</div>
        <div className="flex  justify-center items-center w-1/4 h-1/2  font-bold text-xl rounded-md shadow-md bg-green-500 m-2">Box 3</div>
      </div>

      {/* Flexbox controls */}
      <div className="flex flex-col space-y-4 mx-4">
        {/* Justify Content Section */}
        <h3 className="font-bold">Justify Content</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setJustifyContent('justify-start')} className="bg-blue-500 text-white p-2 rounded">
            Flex Start
          </button>
          <button onClick={() => setJustifyContent('justify-center')} className="bg-blue-500 text-white p-2 rounded">
            Center
          </button>
          <button onClick={() => setJustifyContent('justify-end')} className="bg-blue-500 text-white p-2 rounded">
            Flex End
          </button>
          <button onClick={() => setJustifyContent('justify-between')} className="bg-blue-500 text-white p-2 rounded">
            Space Between
          </button>
          <button onClick={() => setJustifyContent('justify-around')} className="bg-blue-500 text-white p-2 rounded">
            Space Around
          </button>
          <button onClick={() => setJustifyContent('justify-evenly')} className="bg-blue-500 text-white p-2 rounded">
            Space Evenly
          </button>
        </div>

        {/* Align Items Section */}
        <h3 className="font-bold">Align Items </h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setAlignItems('items-start')} className="bg-green-500 text-white p-2 rounded">
            Align Start
          </button>
          <button onClick={() => setAlignItems('items-center')} className="bg-green-500 text-white p-2 rounded">
            Align Center
          </button>
          <button onClick={() => setAlignItems('items-end')} className="bg-green-500 text-white p-2 rounded">
            Align End
          </button>
          <button onClick={() => setAlignItems('items-stretch')} className="bg-green-500 text-white p-2 rounded">
            Align Stretch
          </button>
          <button onClick={() => setAlignItems('items-baseline')} className="bg-green-500 text-white p-2 rounded">
            Align Baseline
          </button>
        </div>

        {/* Flex Direction Section */}
        <h3 className="font-bold">Flex Direction</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFlexDirection('flex-row')} className="bg-red-500 text-white p-2 rounded">
            Row
          </button>
          <button onClick={() => setFlexDirection('flex-row-reverse')} className="bg-red-500 text-white p-2 rounded">
            Row Reverse
          </button>
          <button onClick={() => setFlexDirection('flex-col')} className="bg-red-500 text-white p-2 rounded">
            Column
          </button>
          <button onClick={() => setFlexDirection('flex-col-reverse')} className="bg-red-500 text-white p-2 rounded">
            Column Reverse
          </button>
        </div>

        {/* Flex Wrap Section */}
        <h3 className="font-bold">Flex Wrap</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFlexWrap('flex-no-wrap')} className="bg-yellow-500 text-white p-2 rounded">
            No Wrap
          </button>
          <button onClick={() => setFlexWrap('flex-wrap')} className="bg-yellow-500 text-white p-2 rounded">
            Wrap
          </button>
          <button onClick={() => setFlexWrap('flex-wrap-reverse')} className="bg-yellow-500 text-white p-2 rounded">
            Wrap Reverse
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
