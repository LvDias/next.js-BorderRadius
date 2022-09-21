import Head from 'next/head'
import Image from 'next/image'

export default function Index() {

  const onChangeValue = () => {

    let inputTopLeft = document.getElementById('top-left').value ? document.getElementById('top-left').value : 0
    let inputTopRight = document.getElementById('top-right').value ? document.getElementById('top-right').value : 0
    let inputBottomLeft = document.getElementById('bottom-left').value ? document.getElementById('bottom-left').value : 0 
    let inputBottomRight = document.getElementById('bottom-right').value ? document.getElementById('bottom-right').value : 0
    
    document.getElementById('resultBorder').style = `border-radius: ${inputTopLeft}px ${inputTopRight}px ${inputBottomRight}px ${inputBottomLeft}px;`
    document.getElementById('codeBorder').value = `border-top-left-radius: ${inputTopLeft}px\nborder-top-right-radius: ${inputTopRight}px\nborder-bottom-left-radius: ${inputBottomLeft}px\nborder-bottom-right-radius: ${inputBottomRight}px\n`

  }

  return (
    
    <section className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1">

      <div>

        <div id="resultBorder" className="show-box position-absolute top-50 start-50 translate-middle p-5">

          <textarea id="codeBorder" className="w-100 h-100 p-3" readOnly="readonly" />

        </div>

        <div className="input-box position-absolute w-100 h-100 top-0 start-0">

          <input onChange={ onChangeValue } id="top-left" className="position-absolute top-0 start-0" type="text" placeholder="0" />
          <input onChange={ onChangeValue } id="top-right" className="position-absolute top-0 end-0" type="text" placeholder="0" />
          <input onChange={ onChangeValue } id="bottom-left" className="position-absolute bottom-0 start-0" type="text" placeholder="0" />
          <input onChange={ onChangeValue } id="bottom-right" className="position-absolute bottom-0 end-0" type="text" placeholder="0" />

        </div>

      </div>

    </section>

  )

}
