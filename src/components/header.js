import React from 'react'
import img from '../imgs/undraw_develop_app_kvt2.svg'
import Form from './contact.form'

export default () => (
    <header className="bg-gray-400 ">
        <div className=" container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className="font-bold text-purple-700 text-6x1">Soy Asael</h1>
                <p className="text-xl font-light">Creo apps en ANDROID</p>
            </div>
            <img src={img} alt="pasteles" style={{height: '300px'}}></img>
        </div>
        <div>
            <Form />
        </div>
    </header>
)