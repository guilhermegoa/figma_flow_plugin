type flowData = [
  {
    id: string;
    nome: string;
    destination: [string];
    saidaPadrao: string;
    actions?: [{ id: string; typeOfContent: string | '' }];
    position: {
      top: string;
      left: string;
    };
  }
];

export default flowData;
