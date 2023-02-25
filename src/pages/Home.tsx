import React from 'react'
import RegisterForm from '../components/RegisterForm'

export default function Home() {
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-slate-50'>
            <div className='flex items-center justify-center'>
                <div className='max-w-md'>
                    <h1 className='text-green-700 font-bold text-7xl '>PetsHub</h1>
                    <p className='text-3xl'>Connect with Friends and Meet New Awesome People. </p>
                </div>
                <div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
