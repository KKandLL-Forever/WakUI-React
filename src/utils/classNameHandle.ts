const prefix = 'wk'

export const classHandle = (componentName:string,...rest:any) =>{
  let newClass = new Array<string>()
  rest.forEach((item:any) => {
    if (typeof item === "string") {
      newClass.push(
        `${(prefix+'-'+componentName).toLowerCase()}${item && "-" + item}`
      )
    }else if (item instanceof Array) {
      item.forEach((subItem:boolean|string) =>{
        if (typeof subItem === "string") {
          newClass = [prefix+'-'+componentName,subItem]
        }
      })
    }else if (typeof item === "object" && !(item instanceof Array) && item.danger) {
      newClass.push(
        `${(prefix+'-'+componentName).toLowerCase()}${item.danger && "-danger"}${item.type ? " " + item.type:''}`
      )
    }
  })
  return newClass.join(' ')
}
