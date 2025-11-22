import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicModel from './pages/BasicModel'
import Object from './pages/Object'
import Array from './pages/Array'
import UnionLiteral from './pages/UnionLiteral'
import AliasInterface from './pages/AliasInterface'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            {/* Index */}
            <ol className="ol-list">
              <li><Link to="/basic_model">基本型（string / number / boolean / null / undefined）</Link></li>
              <li><Link to="/object">オブジェクト</Link></li>
              <li><Link to="/array">配列型</Link></li>
              <li><Link to="/union_literal">ユニオン型 (Union / Literal Types)</Link></li>
              <li><Link to="/alias_interface">エイリアス インターフェイス (Type alias / Interface)</Link></li>


              {/* 
1. Union / Literal Types
1. Type alias / Interface
1. Optional / Readonly
1. Enum
1. 型推論（infer）
1. any / unknown / never の正しい使い分け */}
            </ol>

          </>
        } />
        <Route path="/basic_model" element={<BasicModel />} />
        <Route path="/object" element={<Object />} />
        <Route path="/array" element={<Array />} />
        <Route path="/union_literal" element={<UnionLiteral />} />
        <Route path="/alias_interface" element={<AliasInterface />} />
      </Routes>
    </>
  )
}

export default App
