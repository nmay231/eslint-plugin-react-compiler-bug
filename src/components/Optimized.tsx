import { proxy, useSnapshot } from 'valtio'
import { ChildComponent } from '../ChildComponent'

const stateProxy = proxy({ attr: true, clicks: 0 })

export function Optimized() {
    const state = useSnapshot(stateProxy)

    return (
        <>
            <p>Optimized</p>

            {/* Child is correctly memoized */}
            <ChildComponent clicks={Math.min(state.clicks, 5)} />

            <button
                onClick={() => {
                    stateProxy.attr = !stateProxy.attr
                    stateProxy.clicks += 1
                    console.log(stateProxy.clicks)
                }}>
                Clicked {state.clicks}
            </button>
        </>
    )
}
