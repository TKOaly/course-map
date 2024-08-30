import { Content } from './Content'
import { Navigation } from './Navigation'

export default function Home() {
    return (
        <main className="flex min-h-dvh w-screen flex-col items-center justify-between overflow-x-clip">
            <div className="z-10 flex size-full max-h-dvh min-h-dvh flex-col items-start">
                <Navigation />
                <Content />
            </div>
        </main>
    )
}
