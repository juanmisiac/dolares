export const Valores = ({dolarType, buyValue, sellValue}) => {
  return (
    <div className="value">
      <h2 className="dolar-type">{dolarType}</h2>
      <div className="values">
        <p className="buy-value">Compra: ${buyValue}</p>
        <p className="sell-value">Venta: ${sellValue}</p>
      </div>
    </div>
  )
}
