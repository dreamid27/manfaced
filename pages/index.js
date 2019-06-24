import Link from 'next/link';

function Home() {
    return <div>Welcome to next
        <Link href="details">
            go to details
        </Link>   
    </div>
}

export default Home;