import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStockPriceAction } from '../Redux/Actions/PriceActions'

export default function StockList() {
    const { stockPriceList } = useSelector(state => state.PriceReducer)

    const dispatch = useDispatch()

    const renderStockList = () => {
        if (stockPriceList.length > 0) {
            return stockPriceList.map((info, index) => {
                return (
                    <div className="flex p-8 border-b-2 border-gray-200 duration-500 ease-in-out" key={index}>
                        <div className="w-20 h-20 rounded-full ring-8 ring-gray-200 flex justify-center items-center overflow-hidden mr-12">
                            <img className="" src={info.imageUrl} alt={info.companyName} />
                        </div>
                        <div className="flex flex-col justify-between mr-auto">
                            <p className="text-3xl font-bold">{info.symbol}</p>
                            <p className="text-base text-gray-400 font-medium">{info.companyName.length > 10 ? (info.companyName.slice(0, 10) + "...") : info.companyName}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-3xl font-bold text-right">{info.latestPrice}</p>
                            <div className="flex space-x-4">
                                {info.change >= 0 ?
                                    <>
                                        <p className="text-base text-green-500"><i className="fa fa-long-arrow-alt-up"></i> {info.change}</p>
                                        <p className="text-base text-green-500">{(info.changePercent * 100).toFixed(3)}%</p>
                                    </> :
                                    <>
                                        <p className="text-base text-red-500"><i className="fa fa-long-arrow-alt-down"></i>{info.change}</p>
                                        <p className="text-base text-red-500">{(info.changePercent * 100).toFixed(3)}</p>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }

        const array = [0, 1, 2, 3, 4]
        return array.map((item) => {
            return (
                <div className="border border-gray-200 shadow rounded-md max-w-sm md:max-w-full p-4 mx-auto m-12" key={item}>
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


    }
    
    useEffect(() => {
        dispatch(getAllStockPriceAction())
    }, [dispatch])


  return (
    <>{renderStockList()}</>
  )
}
