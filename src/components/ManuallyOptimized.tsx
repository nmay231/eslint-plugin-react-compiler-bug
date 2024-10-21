import React from 'react'
import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import { ChildComponent } from '../ChildComponent'

const stateProxy = proxy({ attr: true, clicks: 0 })

export const ManuallyOptimized = React.memo(function ManuallyOptimized() {
    const state = useProxy(stateProxy)

    return (
        <>
            <p>Manually Optimized</p>

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
})
