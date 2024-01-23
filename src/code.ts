import { getBotJson } from './utils/flowDownloader'

figma.showUI(__html__)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
// figma.ui.onmessage = async msg => {
//   if (msg.type === 'create-figma-flow') {
//     // await figma.loadFontAsync({ family: "Inter", style: "Regular" });

//     // console.log('passou')

//     // const nodes: SceneNode[] = []

//     // json.forEach((block: any) => {

//     //   console.log('chegou aqui')

//     //   const rect = figma.createRectangle()
//     //   // rect.x = Number(block.position.left.replace('px', ''))
//     //   // rect.y = Number(block.position.top.replace('px', ''))
//     //   rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

//     //   console.log('texto aqui')
//     //   const text = figma.createText()
//     //   // text.characters = block.nome
//     //   // text.x = rect.x + 10
//     //   // text.y = rect.y + 10

//     //   console.log('frame aqui')
//     //   const frame = figma.createFrame()
//     //   frame.resize(100 * 1.5, 100 * 1.5)
//     //   frame.x = Number(block.position.left.replace('px', ''))
//     //   frame.y = Number(block.position.top.replace('px', ''))
//     //   frame.name = block.nome

//     //   frame.appendChild(rect)
//     //   frame.appendChild(text)

//     //   figma.currentPage.appendChild(frame)
//     //   nodes.push(frame)
//     // })

//     // const line = figma.createLine()
//     // line.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 0 } }]
//     // line.strokeCap = 'ARROW_LINES'
//     // line.strokeWeight = 2

//     // line.x = nodes[0].width + nodes[0].width / 2
//     // line.y = nodes[0].height / 2

//     // const group = figma.group([...nodes, line], figma.currentPage)

//     const component = await figma.importComponentByKeyAsync('042bffbcaba2649e26c3d2df7f927f56e97745c5')

//     const instance = component.createInstance()

//     console.log(component.children)

//     figma.currentPage.appendChild(instance)

//     // figma.currentPage.selection = nodes
//     // figma.viewport.scrollAndZoomIntoView(nodes)

//     figma.closePlugin()
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-misused-promises
figma.ui.onmessage = async (msg: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const json = await getBotJson(msg.key)
  console.log(json)
  if (msg.type === 'create-figma-flow') {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' })
    console.log('passou')

    json.forEach((block: any) => {
      if (block.actions.length > 0) {
        block.actions.forEach(async (action: any) => {
          switch (action.typeOfContent) {
            case 'chat-state':
              console.log('chat-state')
              break
            case 'select':{
              console.log('select')
              const component = await figma.importComponentByKeyAsync('8ae2d54f6f76aa2bfe23df1361def19ef9c0249d')
              const instance: any = component.createInstance()
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            case 'select-immediate': {
              console.log('select-immediate')
              const component = await figma.importComponentByKeyAsync('38a80132b23e2c09bfdaba75f9e837e2a3d73642')
              const instance: any = component.createInstance()
              instance.children[0].children[1].children[0].children[0].children[3].characters = 'Title teste' // title
              instance.children[0].children[1].children[0].children[1].children[0].children[0].characters = action.content // body
              instance.children[0].children[1].children[2].children[0].children.forEach((b: any, idx: any) => { if (idx < action.options.length) b.children[0].characters = action.options[idx] }) // buttons
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            case 'text': {
              console.log('text')
              const component = await figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4')
              const instance: any = component.createInstance()
              instance.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].characters = 'Mesnsagem de teste'
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            default:
              console.log('default')
              break
          }
        })
      }
    })

    // Update all components NO DELETE
    const component = await figma.importComponentByKeyAsync('3c5b1beaef624b8c28ffa9de75461407702de61f')
    const instance = component.createInstance()
    figma.currentPage.appendChild(instance)
    instance.remove()

    figma.closePlugin()
  }
}
