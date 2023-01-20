import React from 'react'
import StockList from '../Components/StockList'

export default function MainPage() {
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center my-5">Stock Price</h1>
            <StockList/>
        </div>
    )
}
