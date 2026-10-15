import { useEffect, useState } from 'react'
import './App.css'

interface User {
    id: number
    name: string
    email: string
}

export function UserCompHookProps() {

    const [loading, setLoading] = useState < boolean > (true);
    const [user, setUser] = useState < User | null > ();


    useEffect(() => {
        const fetchUser = async (): Promise<void> => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1",
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [])


    if (loading) return <div>Loading....</div>
    if (!user) return <div>No user found.</div>

    return (
        <>
            <section id="center">
                {user.id} - {user.name} - {user.email}
            </section>
        </>
    )
}
