export const getHtmlTemplateForAnswer = (answer) => {
  const colors = {
    primary: '#000000',
    secondary: '#ffff00'
  }
  return `
    <body style="
      margin: 0; 
      width: 360; 
      height: 96;
      background-color: ${colors.secondary};
    ">
      <div style=" 
        display: flex; 
        align-items: center; 
        justify-content: flex-start; 
        padding: 8px;
        max-width: 320; 
        height: 96;
      ">
        <span style="
          border-radius: 12px;
          min-width: 24px;
          min-height: 24px;
          font-size: 20px;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-weight: bold;
          background-color: ${colors.primary}; 
          color: ${colors.secondary};
          margin-right: 8px;
        ">${answer.split('.')[0]}</span>
        <span style="color: ${colors.primary};">${answer.split('.')[1]}</span>
      </div>
    </body>`
}