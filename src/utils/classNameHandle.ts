const prefix = 'wk'

export const classHandle = (componentName:string,...rest:any):string =>{
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
    }else if (typeof item === "object" && !(item instanceof Array)){
      console.log('object的情况并且参数是boolean')
      for (const key in item) {
        if (item.hasOwnProperty(key) && item[key]) {
          newClass.push(key);
        }
      }
    } else if (typeof item === "object" && !(item instanceof Array) && item.danger) {
      //dangers单独处理
      newClass.push(
        `${(prefix+'-'+componentName).toLowerCase()}${item.danger && "-danger"}${item.type ? " " + item.type:''}`
      )
    }
  })
  return newClass.join(' ')
}
