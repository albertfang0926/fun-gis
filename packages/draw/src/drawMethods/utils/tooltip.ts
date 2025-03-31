import { isNull } from "./common"

export class Tooltip {
  container: any
  _con: any
  _div: any
  _out: any
  _title: any
  // static _tooltip: any

  constructor(container: any) {
    this.container = container
    this._con = document.createElement("DIV")
    this._con.style = `
                position: absolute;
                z-index: 1;
                pointer-events: none;
            `
    this.container.appendChild(this._con)

    this._div = document.createElement("DIV")
    this._out = document.createElement("DIV")

    this._div.style = `
                background-color: rgba(0,0,0,0.5);
                margin-left: 10px;
            `
    this._out.style = `
                position:absolute;
                border: 5px solid transparent;
                border-right-color: rgba(0,0,0,0.5);
                top:calc(50% - 5px);
                width: 0;
                height: 0;
            `
    this._title = document.createElement("DIV")
    this._title.style.color = "#FFFFFF"
    this._title.style.margin = "5px"

    this._div.appendChild(this._title)

    // add to frame div and display coordinates
    this._con.appendChild(this._div)
    this._con.appendChild(this._out)

    this.setVisible(false)

    // // 鼠标的移入
    // this._con.addEventListener("mouseover", (e: any) => {
    //   this.setVisible(false)
    // })
  }

  // static getToolTip(container: any) {
  //   if (isNull(container) && isNull(Tooltip._tooltip)) { return }
  //   if (isNull(container)) { return Tooltip._tooltip }

  //   if (isNull(Tooltip._tooltip)) {
  //     Tooltip._tooltip = new Tooltip(container)
  //   } else {
  //     if (Tooltip._tooltip.container !== container) {
  //       Tooltip._tooltip.destroy()
  //       // eslint-disable-next-line no-return-assign
  //       return Tooltip._tooltip = new Tooltip(container)
  //     }
  //   }

  //   return Tooltip._tooltip
  // }

  setVisible(visible: boolean) {
    this._con.style.display = visible ? "block" : "none"
  }

  showAt(position: any, message: any) {
    if (position && message) {
      this.setVisible(true)
      this._title.innerHTML = message
      this._con.style.top = position.y - this._con.clientHeight / 2 + "px"
      this._con.style.left = position.x + 30 + "px"
    } else {
      this.setVisible(false)
    }
  }

  destroy() {
    this.container.removeChild(this._con)
  }
}
