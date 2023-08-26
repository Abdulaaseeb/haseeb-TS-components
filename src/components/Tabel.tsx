import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

type Tabelprops = {
    arrofTable: any[],
    cols: any[]
  }

export default function Tabel(props:Tabelprops){
const { arrofTable, cols } = props
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            {cols.map((x, i) => {
              return (
                <th className='text-danger'>{x.heading}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {arrofTable.map((x, i) => {
            return (
              <tr>
                {cols.map((y, j) => {
                  return (
                    <td className='text-danger'>{x[y.key]}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

        }

