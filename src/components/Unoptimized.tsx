import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import { ChildComponent } from '../ChildComponent'

const stateProxy = proxy({ attr: true, clicks: 0 })

export function Unoptimized() {
    const state = useProxy(stateProxy)

    return (
        <>
            <p>Unoptimized</p>

            {/* Child continues to rerender even though props are the same */}
            <ChildComponent clicks={Math.min(state.clicks, 5)} />

            <button
                onClick={() => {
                    state.attr = !state.attr
                    stateProxy.clicks += 1
                    console.log(stateProxy.clicks)
                }}>
                Clicked {state.clicks}
            </button>
        </>
    )
}
