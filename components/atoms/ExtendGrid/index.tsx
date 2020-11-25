import React from 'react'
import { Grid } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.min.css'

export interface Props {
  data           : (string | JSX.Element)[][]
  columns        : any[]
  isFixedHeader? : boolean
  height?        : string
}

/**
 * Grid.jsを拡張したコンポーネント
 */
const ExtendGrid: React.FC<Props> = ({
  data,
  columns,
  isFixedHeader = false,
  height
}: Props) => (
  <Grid
    data={data}
    language={{
      search : {
        placeholder : '検索 ...',
      }
    }}
    sort={true}
    fixedHeader={isFixedHeader}
    height={height}
    search={{
      enabled: true
    }}
    columns={columns}
    style={{
      container : {
        color : '#868686'
      },
      header : {
        marginBottom : '20px',
        padding      : '1px'
      },
      td : {
        textAlign : 'center'
      },
      th : {
        textAlign  : 'center',
        lineHeight : '24px',
        zIndex     : 2
      }
    }}
  />
)

export default ExtendGrid
