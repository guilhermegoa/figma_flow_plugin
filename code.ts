figma.showUI(__html__)

const json = [
  {
    "id": "onboarding",
    "nome": "Início",
    "destination": [
      "{{redirect@state}}",
      "welcome"
    ],
    "saidaPadrao": "fallback",
    "actions": [],
    "position": {
      "top": "338px",
      "left": "644px"
    }
  },
  {
    "id": "fallback",
    "nome": "Exceções",
    "destination": [
      "error"
    ],
    "saidaPadrao": "onboarding",
    "actions": [],
    "position": {
      "top": "170px",
      "left": "1285px"
    }
  },
  {
    "id": "welcome",
    "nome": "S.1.0.0 - Boas Vindas",
    "destination": [
      "e3beabe0-92bb-4bad-ba78-0b5359db504d",
      "9e020603-b540-4f56-bd47-17e00b8c8482"
    ],
    "saidaPadrao": "onboarding",
    "actions": [
      {
        "id": "c969d603-3b3a-4e73-a73f-0a0572fe9c8d",
        "typeOfContent": ""
      },
      {
        "id": "5f3388f0-5319-4a84-af34-415fc99752bc",
        "typeOfContent": ""
      }
    ],
    "position": {
      "top": "527px",
      "left": "644px"
    }
  },
  {
    "id": "error",
    "nome": "Redirect to cascata",
    "destination": [],
    "saidaPadrao": "onboarding",
    "actions": [],
    "position": {
      "top": "170px",
      "left": "1079px"
    }
  },
  {
    "id": "e3beabe0-92bb-4bad-ba78-0b5359db504d",
    "nome": "S.1.1.1 - Confirma dados (retorno)",
    "destination": [
      "9b08295c-4e32-42ba-b6d0-3f82412819e2",
      "7e7e83fe-c462-4e2e-ba78-0cad819f11a5"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "b911e9c1-228e-4ac8-87d4-fc0825854461",
        "typeOfContent": "chat-state"
      },
      {
        "id": "49c88795-b780-496a-8329-eea870fdb17d",
        "typeOfContent": "select-immediate",
        "content": "Antes de começar o seu atendimento, me confirme as informações abaixo:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b>  🤔\nClique em um dos botões abaixo.",
        "options": [
          "Estão corretas",
          "Corrigir"
        ]
      }
    ],
    "position": {
      "top": "1298px",
      "left": "643px"
    }
  },
  {
    "id": "9e020603-b540-4f56-bd47-17e00b8c8482",
    "nome": "S.1.1.2",
    "destination": [
      "48b562dc-f0cf-4bb6-81cb-8a686babe2fe"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "af7b520b-471e-422f-9a5a-d944ee1304da",
        "typeOfContent": "chat-state"
      },
      {
        "id": "b821e1e4-1a2c-4881-9287-b946ca270872",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "539px",
      "left": "905px"
    }
  },
  {
    "id": "48b562dc-f0cf-4bb6-81cb-8a686babe2fe",
    "nome": "S.1.1.3 - Informe nome",
    "destination": [
      "311c5c38-0cce-404e-ab22-0a88c3bc2546"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "71e59b52-0b44-4545-b547-8f00c2ce9404",
        "typeOfContent": "chat-state"
      },
      {
        "id": "155cb502-5c84-4dd7-9157-5d868e2a7a3e",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "712px",
      "left": "905px"
    }
  },
  {
    "id": "311c5c38-0cce-404e-ab22-0a88c3bc2546",
    "nome": "S.1.1.4 - Informe cargo",
    "destination": [
      "c08c99b7-29da-4cea-8e75-00fa09074f42"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "623f9459-0069-4ba0-8740-762bc5ef7929",
        "typeOfContent": "chat-state"
      },
      {
        "id": "cbcc1a6a-6c21-4bc9-bf38-716d8f6c6a7c",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "900px",
      "left": "905px"
    }
  },
  {
    "id": "c08c99b7-29da-4cea-8e75-00fa09074f42",
    "nome": "S.1.1.5 - Informe agencia",
    "destination": [
      "2d199cbc-dd1b-4807-8219-8884ef309be1"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "863eb27a-ba4a-4a35-96d3-73dbaa92a5f5",
        "typeOfContent": "chat-state"
      },
      {
        "id": "fa596d95-9090-41b2-beff-17d866bcd4cf",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "1077px",
      "left": "905px"
    }
  },
  {
    "id": "2d199cbc-dd1b-4807-8219-8884ef309be1",
    "nome": "S.1.1.6 - Confirmação de dados",
    "destination": [
      "9b08295c-4e32-42ba-b6d0-3f82412819e2",
      "7e7e83fe-c462-4e2e-ba78-0cad819f11a5"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "046e433c-380f-4eff-9816-f1dec736c2cf",
        "typeOfContent": "chat-state"
      },
      {
        "id": "68e41b4a-67c0-4119-98f0-264eaa77b019",
        "typeOfContent": "select-immediate",
        "content": "Me confirme as suas informações:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b> 🤔\nClique em um dos botões abaixo.",
        "options": [
          "Estão corretas",
          "Corrigir"
        ]
      }
    ],
    "position": {
      "top": "1277px",
      "left": "905px"
    }
  },
  {
    "id": "9b08295c-4e32-42ba-b6d0-3f82412819e2",
    "nome": "S.1.1.8 - Corrigir dados",
    "destination": [
      "fa01404b-76f9-41c7-9eb8-e46d866c800b",
      "ca9b0967-5636-4e5f-8eae-5154b5df328e",
      "112a6bd7-dac6-4f60-b0ef-0ef8bdd60b2d"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "35f5892e-990b-4d14-92f7-aba62e5dfe5f",
        "typeOfContent": "chat-state"
      },
      {
        "id": "c6a2cb5f-76bb-4bfd-bc5f-432ce77b681c",
        "typeOfContent": "select",
        "content": "Qual informação você quer corrigir? \n\nSelecione uma das opções abaixo.",
        "options": [
          "Nome",
          "Cargo",
          "Agência"
        ]
      }
    ],
    "position": {
      "top": "1324px",
      "left": "1343px"
    }
  },
  {
    "id": "fa01404b-76f9-41c7-9eb8-e46d866c800b",
    "nome": "S.1.1.9 - Informe nome (corrigir)",
    "destination": [
      "2d199cbc-dd1b-4807-8219-8884ef309be1"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "71e59b52-0b44-4545-b547-8f00c2ce9404",
        "typeOfContent": "chat-state"
      },
      {
        "id": "155cb502-5c84-4dd7-9157-5d868e2a7a3e",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "1520px",
      "left": "1343px"
    }
  },
  {
    "id": "112a6bd7-dac6-4f60-b0ef-0ef8bdd60b2d",
    "nome": "S.1.1.11 - Informe agencia (corrigir)",
    "destination": [
      "2d199cbc-dd1b-4807-8219-8884ef309be1"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "863eb27a-ba4a-4a35-96d3-73dbaa92a5f5",
        "typeOfContent": "chat-state"
      },
      {
        "id": "fa596d95-9090-41b2-beff-17d866bcd4cf",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "1132px",
      "left": "1343px"
    }
  },
  {
    "id": "ca9b0967-5636-4e5f-8eae-5154b5df328e",
    "nome": "S.1.1.10 - Informe cargo (corrigir)",
    "destination": [
      "2d199cbc-dd1b-4807-8219-8884ef309be1"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "623f9459-0069-4ba0-8740-762bc5ef7929",
        "typeOfContent": "chat-state"
      },
      {
        "id": "cbcc1a6a-6c21-4bc9-bf38-716d8f6c6a7c",
        "typeOfContent": "text"
      }
    ],
    "position": {
      "top": "1303px",
      "left": "1613px"
    }
  },
  {
    "id": "7e7e83fe-c462-4e2e-ba78-0cad819f11a5",
    "nome": "S.1.1.7 - Menu de assuntos",
    "destination": [
      "4cef1eb9-9342-46cf-9727-ffaa283fba30"
    ],
    "saidaPadrao": "fallback",
    "actions": [
      {
        "id": "88597617-362c-4509-acf2-c43ce3fdab8e",
        "typeOfContent": "chat-state"
      },
      {
        "id": "32ace0d8-c6e4-46ff-99ed-906b8ec56c33",
        "typeOfContent": "select",
        "content": "Sobre qual assunto você quer falar?\n\nSelecione uma das opções abaixo.",
        "options": [
          "Gerar boleto",
          "2º via de contrato",
          "Erro ao acessar APP",
          "Status da proposta",
          "Confirmar pagamento",
          "Proposta não aprovada",
          "Outros assuntos"
        ]
      }
    ],
    "position": {
      "top": "1498px",
      "left": "905px"
    }
  },
  {
    "id": "4cef1eb9-9342-46cf-9727-ffaa283fba30",
    "nome": "Redirect to transbordo",
    "destination": [],
    "saidaPadrao": "onboarding",
    "actions": [],
    "position": {
      "top": "1695px",
      "left": "905px"
    }
  }
]

figma.ui.onmessage = async msg => {
  if (msg.type === 'create-rectangles') {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    console.log('passou')

    const nodes: SceneNode[] = []

    json.forEach((block: any) => {

      console.log('chegou aqui')

      const rect = figma.createRectangle()
      // rect.x = Number(block.position.left.replace('px', ''))
      // rect.y = Number(block.position.top.replace('px', ''))
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

      console.log('texto aqui')
      const text = figma.createText()
      // text.characters = block.nome
      // text.x = rect.x + 10
      // text.y = rect.y + 10

      console.log('frame aqui')
      const frame = figma.createFrame()
      frame.resize(100 * 1.5, 100 * 1.5)
      frame.x = Number(block.position.left.replace('px', ''))
      frame.y = Number(block.position.top.replace('px', ''))
      frame.name = block.nome

      frame.appendChild(rect)
      frame.appendChild(text)

      figma.currentPage.appendChild(frame)
      nodes.push(frame)
    })

    // const line = figma.createLine()
    // line.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 0 } }]
    // line.strokeCap = 'ARROW_LINES'
    // line.strokeWeight = 2

    // line.x = nodes[0].width + nodes[0].width / 2
    // line.y = nodes[0].height / 2

    // const group = figma.group([...nodes, line], figma.currentPage)
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)

    figma.closePlugin()
  }
}