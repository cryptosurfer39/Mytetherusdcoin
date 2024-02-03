import { ToolTipPieChart } from "components/TooltipPieChart"

export const TokenomicsSection = () => {
  return (
    <div className="bg-color-92dbd1-900">
      <h2 className="pt-8 pb-4 text-3xl font-bold text-center text-white">Tokenomics</h2>
      <div className="flex justify-center gap-12 px-4 py-8 xs:flex-col">
        <ToolTipPieChart data={[
          { title: "Airdrop", value: 2, color: "#92dbd1" },
          { title: "Incirculation", value: 98, color: "#009393" }
        ]} />
        <div className="grid grid-cols-1 p-2 xs:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray">USDT</span>
            <span className="text-xs text-black-400">Token Symbol</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray">50,000,000,000</span>
            <span className="text-xs text-black-400">Total Supply</span>
          </div>
        </div>
      </div>
    </div>
  )
}
