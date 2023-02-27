export const generateDefaultValueObj = (schema: any) => {
  const defaultValueObj: any = {}
  Object.keys(schema.properties).forEach(key => {
    defaultValueObj[key] = schema.properties[key].defaultValue
  })
  return defaultValueObj
}