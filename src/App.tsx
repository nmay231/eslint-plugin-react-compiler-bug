import './App.css'
import { ManuallyOptimized } from './components/ManuallyOptimized'
import { Optimized } from './components/Optimized'
import { Unoptimized } from './components/Unoptimized'

function App() {
    return (
        <div>
            <Optimized />
            <Unoptimized />
            <ManuallyOptimized />
        </div>
    )
}

export default App
