import Image from "next/image"
import React from "react"

const Wallet = () => {
  return (
    <div className="flex flex-col px-10 pt-10 pb-20 gap-4 bg-wallet-pattern bg-no-repeat bg-contain bg-bottom border-2 border-white rounded-lg">
      {/* TOP PART */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold capitalize"> Wallet</h3>
        <button className="p-4 text-sm rounded-full flex justify-center items-center bg-white text-pink-br hover:cursor-pointer">
          Withdraw Funds
        </button>
      </div>
      {/* CONTENT PART */}
      <div className="flex justify-between items-center px-8">
        <Image src={"/icons/cup.svg"} width={"178px"} height={"178px"}></Image>
        {/* TOTAL */}
        <div className="flex flex-col justify-center gap-2 w-64">
          <div className="w-fit px-6 py-2 flex justify-center items-center justify-self-start text-white text-xs rounded-full bg-purple-600">
            Total Earnings
          </div>
          <div className="flex flex-col pl-6">
            <h2 className="text-[36px] font-bold text-white">#2000000</h2>
            <p className="text-xs leading-[1.6]">
              Please note this is the total sum of your transaction here on GOGE
              AFRICA
            </p>
          </div>
        </div>

        {/* BALANCE */}
        <div className="flex flex-col justify-center gap-2 w-64">
          <div className="w-fit px-6 py-2 flex justify-center items-center justify-self-start text-white text-xs rounded-full bg-purple-600">
            Balance
          </div>
          <div className="flex flex-col pl-6">
            <h2 className="text-[36px] font-bold text-white">#3000000</h2>
            <p className="text-xs leading-[1.6]">
              Please note this the current balance amount left on your wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
