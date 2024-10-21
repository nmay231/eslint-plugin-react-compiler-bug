export function ChildComponent({ clicks }: { clicks: number }) {
    console.log('child render')
    return <div>Child, clicks: {clicks}</div>
}
